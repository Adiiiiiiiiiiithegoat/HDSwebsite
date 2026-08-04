// ---------------------------------------------------------------------------
// Every editable value on the site lives here. Change copy, contact details
// and links in this file — components read from it and never hardcode.
// ---------------------------------------------------------------------------

// --- Contact ---------------------------------------------------------------
// No form, no backend. These are the only ways in.
export const contact = {
  email: 'hello@solutionhaven.net',
  phones: [
    { number: '+91 88797 60718', href: 'https://wa.me/918879760718' },
    { number: '+91 83830 79928', href: 'https://wa.me/918383079928' },
  ],
}

export const legal = {
  privacyHref: '#', // TODO
  termsHref: '#', // TODO
  entity: 'Haven',
  year: new Date().getFullYear(),
}

// --- Timelines and figures quoted in copy ----------------------------------
export const demoTurnaround = '3–5 business days'
export const discoveryCallLength = '15–20 minutes'

// --- Proof section ---------------------------------------------------------
// TODO: drop the real screen recording at public/demo/gstr1-fill.mp4 and a
// poster frame at public/demo/gstr1-poster.jpg, then set `videoSrc`/`poster`.
export const proof = {
  videoSrc: null, // e.g. '/demo/gstr1-fill.mp4'
  poster: null, // e.g. '/demo/gstr1-poster.jpg'
  form: 'GSTR-1',
  manual: '45 min',
  automated: '90 sec',
  invoices: '312',
  caption:
    'GSTR-1 for a trading client, 312 B2B invoices exported from Tally as an Excel sheet. ' +
    'Timed from opening the file to a JSON ready for upload on the GST portal. ' +
    'The manual figure is the same work done by hand by an article assistant.',
}

// --- Trust: case studies ---------------------------------------------------
// Built and data-driven, hidden until there is something true to put in it.
// Flip SHOW_CASE_STUDIES to true once `caseStudies` has real, permitted numbers.
export const SHOW_CASE_STUDIES = false
export const caseStudies = [
  // {
  //   firmType: 'Four-partner firm, GST and audit practice',
  //   city: 'Hubballi',
  //   workflow: 'GSTR-1 filing for 140 clients from Tally exports',
  //   before: '3 days',
  //   after: '4 hours',
  //   measured: 'Measured across the July and August 2026 cycles.',
  // },
]
