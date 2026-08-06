import useRouteMeta from '../hooks/useRouteMeta.js'
import { CA_FIRMS } from '../seo.js'
import App from '../App.jsx'

// Thin routing wrapper around the CA Firms page. The page itself (App.jsx and
// everything under src/sections/) is untouched — this file only swaps the
// document title/description/canonical/OG tags to match the CA page now that
// it lives at /industries/ca-firms instead of at the site root.
//
// The strings moved to seo.js so the build-time prerender emits the same ones.
export default function CAFirmsRoute() {
  useRouteMeta(CA_FIRMS)

  return <App />
}
