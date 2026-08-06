import useRouteMeta from '../hooks/useRouteMeta.js'
import App from '../App.jsx'

const TITLE = 'Solution Haven — automation for Indian CA firms'
const DESCRIPTION =
  'We build automation for the forms your firm files every month — GSTR-1, GSTR-3B, 26Q, AOC-4. Working demo on your own workflow in 3–5 business days, before you pay anything.'

// Thin routing wrapper around the CA Firms page. The page itself (App.jsx and
// everything under src/sections/) is untouched — this file only swaps the
// document title/description/canonical/OG tags to match the CA page now that
// it lives at /industries/ca-firms instead of at the site root.
export default function CAFirmsRoute() {
  useRouteMeta({ title: TITLE, description: DESCRIPTION, path: '/industries/ca-firms' })

  return <App />
}
