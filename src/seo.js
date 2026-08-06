// Single source of truth for per-route <head> content.
//
// Read twice: by the route components at runtime (useRouteMeta, for client-side
// navigations) and by scripts/prerender.mjs at build time (which bakes these
// into each route's static HTML). Kept in one file so the two can't drift —
// a prerendered <title> that disagrees with the client-set one is the kind of
// bug nobody notices until a crawler indexes the wrong string.
//
// Add an entry here whenever a route is added to AppRoutes.jsx.

export const ORIGIN = 'https://solutionhaven.net'

// Titles are kept under ~60 characters and descriptions under ~158, which is
// roughly where Google truncates each. The previous set ran 90 and 165-173, so
// every one of them was being cut mid-sentence in the result.

export const HOME = {
  path: '/',
  title: 'Solution Haven — workflow automation & custom software',
  description:
    'We find where your operations break — manual work, disconnected tools, slow approvals — then fix it with automation, integration or custom software.',
}

// Brand goes LAST on the industry pages, first only on the homepage.
//
// "Solution Haven — GST & TDS filing automation for CA firms" reads to a
// search engine, and to anything summarising one, as a definition of the
// company: name, dash, what it is. Google's AI Overview duly described the
// whole business as "an automation software platform built specifically for
// Indian CA firms". "<what this page is about> | Solution Haven" says the
// page is about that, published by us — which is the true statement. The
// homepage keeps brand-first because there the company IS the subject.
export const CA_FIRMS = {
  path: '/industries/ca-firms',
  title: 'GST & TDS Filing Automation for CA Firms | Solution Haven',
  description:
    'Automation for the returns your firm files every month — GSTR-1, GSTR-3B, 26Q, AOC-4. A working demo on your own workflow in 3–5 business days.',
  // Fed to the page's WebPage.about, which is how a machine reader learns
  // this page covers one industry rather than defining the company.
  about: 'Accounting practice automation for Indian chartered accountancy firms',
  breadcrumb: 'CA firms',
}

export const SOLAR = {
  path: '/industries/solar',
  title: 'Automation & Software for Solar EPC Companies | Solution Haven',
  description:
    'We map how your Solar EPC business runs — rooftop, open access or government-scheme — then apply AI, automation or software only where it removes real work.',
  about: 'Operations automation for Solar EPC companies in India',
  breadcrumb: 'Solar EPC',
}

export const routes = [HOME, CA_FIRMS, SOLAR]
