// Tells Bing (and Yandex, Naver, Seznam — they share the protocol) that these
// URLs changed, instead of waiting for a crawler to notice. Bing's index is
// what ChatGPT search reads, so this is the shortest path from "deployed" to
// "an answer engine has the new content".
//
// Runs at the end of `npm run deploy`. Ownership is proved by serving the key
// back from public/<KEY>.txt at the site root — that file and this constant
// have to stay in step, so the file is checked before anything is submitted.
//
// ponytail: one POST of every route, not a diff of what actually changed.
// Three URLs is under the limit by three orders of magnitude and IndexNow
// ignores re-submissions of unchanged pages. Compute a real changed-set only
// if the route list ever gets big enough to matter.

import { access } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { routes, ORIGIN } from '../src/seo.js'

const KEY = 'd474fba3f6fb629c9436c901bd7d8060'
const here = dirname(fileURLToPath(import.meta.url))

// dist, not public: this asserts the key file survived the build into what was
// actually uploaded. A key Bing can't fetch means every submission is rejected,
// and it's rejected silently enough that you'd never look.
try {
  await access(join(here, '..', 'dist', `${KEY}.txt`))
} catch {
  throw new Error(`dist/${KEY}.txt is missing — IndexNow can't verify ownership without it`)
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: new URL(ORIGIN).host,
    key: KEY,
    keyLocation: `${ORIGIN}/${KEY}.txt`,
    urlList: routes.map((route) => `${ORIGIN}${route.path}`),
  }),
})

// 200 and 202 both mean accepted; 202 specifically means "received, key
// still being validated". Anything else is worth seeing, but not worth
// failing a deploy that already succeeded over — the site is live either way.
const ok = response.status === 200 || response.status === 202
console.log(
  ok
    ? `IndexNow: submitted ${routes.length} URLs (${response.status})`
    : `IndexNow: submission failed with ${response.status} ${response.statusText} — site is deployed, retry with \`node scripts/indexnow.mjs\``,
)
