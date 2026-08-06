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

export const CA_FIRMS = {
  path: '/industries/ca-firms',
  title: 'Solution Haven — GST & TDS filing automation for CA firms',
  description:
    'Automation for the returns your firm files every month — GSTR-1, GSTR-3B, 26Q, AOC-4. A working demo on your own workflow in 3–5 business days.',
}

export const SOLAR = {
  path: '/industries/solar',
  title: 'Solution Haven — automation & software for Solar EPC',
  description:
    'We map how your Solar EPC business runs — rooftop, open access or government-scheme — then apply AI, automation or software only where it removes real work.',
}

export const routes = [HOME, CA_FIRMS, SOLAR]
