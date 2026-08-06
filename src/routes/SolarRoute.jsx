import useRouteMeta from '../hooks/useRouteMeta.js'
import { SOLAR } from '../seo.js'
import SolarHome from '../pages/solar/SolarHome.jsx'

// Thin routing wrapper around the Solar page, same pattern as
// routes/CAFirmsRoute.jsx: swaps the document title/description/canonical/OG
// tags for this route, page itself is untouched by routing concerns. Strings
// live in seo.js so the build-time prerender emits the same ones.
export default function SolarRoute() {
  useRouteMeta(SOLAR)

  return <SolarHome />
}
