import useRouteMeta from '../hooks/useRouteMeta.js'
import SolarHome from '../pages/solar/SolarHome.jsx'

const TITLE = 'Solution Haven — AI, automation & software for Solar EPC companies'
const DESCRIPTION =
  'We map how your Solar EPC business actually runs — rooftop, open access, government-scheme, or a mix — then apply AI, automation or software only where it removes real work.'

// Thin routing wrapper around the Solar page, same pattern as
// routes/CAFirmsRoute.jsx: swaps the document title/description/canonical/OG
// tags for this route, page itself is untouched by routing concerns.
export default function SolarRoute() {
  useRouteMeta({ title: TITLE, description: DESCRIPTION, path: '/industries/solar' })

  return <SolarHome />
}
