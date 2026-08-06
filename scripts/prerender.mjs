// Static-site generation for a SPA that had none.
//
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
// For each route in src/seo.js it renders the real React tree to HTML, swaps
// the route's <head> block in, and writes dist/<path>/index.html.
//
// Why this exists: Googlebot renders JavaScript, but the crawlers behind AI
// answers largely don't — GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot and
// Bytespider all fetch raw HTML. An empty <div id="root"> is an empty page to
// them, which is why the site could rank for its own name and nothing else.
//
// ponytail: string replacement against two marker pairs, not a template
// engine and not a framework migration. react-dom/server was already a
// dependency; this needed no new ones. Move to a real SSG only if routes grow
// past the point where a flat list in seo.js is the wrong shape.

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { render } from '../dist-ssr/entry-server.js'
import { routes, ORIGIN, HOME, CA_FIRMS, SOLAR } from '../src/seo.js'
import { faq as generalFaq } from '../src/pages/general/content.js'
import { faq as solarFaq } from '../src/pages/solar/content.js'

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')

// Answer engines quote FAQPage entries more or less verbatim, so every Q&A
// already on the page is worth restating as structured data. The CA page has
// no FAQ section yet — when it gets one, add it here.
const FAQS = {
  [HOME.path]: generalFaq.items,
  [SOLAR.path]: solarFaq.items,
  [CA_FIRMS.path]: null,
}

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const ld = (obj) => `<script type="application/ld+json">\n${JSON.stringify(obj, null, 2)}\n</script>`

function breadcrumbs(route) {
  if (route.path === '/') return null
  return ld({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: `${ORIGIN}/#industries` },
      { '@type': 'ListItem', position: 3, name: route.title, item: `${ORIGIN}${route.path}` },
    ],
  })
}

function faqSchema(route) {
  const items = FAQS[route.path]
  if (!items?.length) return null
  return ld({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  })
}

function head(route) {
  const url = `${ORIGIN}${route.path}`
  const title = esc(route.title)
  const description = esc(route.description)

  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    breadcrumbs(route),
    faqSchema(route),
  ]
    .filter(Boolean)
    .join('\n    ')
}

const template = await readFile(join(dist, 'index.html'), 'utf8')

// Fail loudly rather than silently shipping unprerendered HTML: a missing
// marker means index.html was edited and this script quietly did nothing.
for (const marker of ['<!--head:start-->', '<!--head:end-->', '<!--app-->']) {
  if (!template.includes(marker)) throw new Error(`index.html is missing ${marker}`)
}

for (const route of routes) {
  const app = render(route.path)

  // The failure this guards against is silent: a route that renders to an
  // empty shell (a bad path, a component that bailed) still writes a valid
  // HTML file, deploys fine, looks fine in a browser because the JS takes
  // over — and is blank to every crawler that doesn't run JS, which is the
  // one thing this script exists to prevent. 2000 chars is well under the
  // ~18k the smallest real page produces and well over any empty shell.
  if (app.length < 2000) {
    throw new Error(`${route.path} rendered only ${app.length} chars — prerender produced a shell`)
  }

  const html = template
    .replace(
      /<!--head:start-->[\s\S]*?<!--head:end-->/,
      `<!--head:start-->\n    ${head(route)}\n    <!--head:end-->`,
    )
    .replace('<!--app-->', app)

  const out = route.path === '/' ? join(dist, 'index.html') : join(dist, route.path, 'index.html')
  await mkdir(dirname(out), { recursive: true })
  await writeFile(out, html)
  console.log(`prerendered ${route.path} → ${out.replace(dist, 'dist')}`)
}
