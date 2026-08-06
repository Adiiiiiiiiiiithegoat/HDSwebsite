import useRevealOnce from '../../hooks/useRevealOnce.js'
import SiteHeader from '../../components/SiteHeader.jsx'
import Footer from '../../components/Footer.jsx'
import { legal } from './content.js'
import Hero from './sections/Hero.jsx'
import Understanding from './sections/Understanding.jsx'
import Workflow from './sections/Workflow.jsx'
import Bottlenecks from './sections/Bottlenecks.jsx'
import ValueAreas from './sections/ValueAreas.jsx'
import Approach from './sections/Approach.jsx'
import FAQSection from './sections/FAQSection.jsx'
import CTA from './sections/CTA.jsx'

const NAV = [
  { label: '← Home', href: '/' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Bottlenecks', href: '#bottlenecks' },
  { label: 'Approach', href: '#approach' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#cta' },
]

// Solar EPC industry landing page. Same design system as the CA Firms page
// and the General homepage (tokens, utility classes, reveal-on-scroll
// behaviour, shared SiteHeader/Footer/Section/SectionHead/Steps/Tiles/FAQ/
// Button components — see docs/design-system-audit.md), Solar-specific
// content sourced from knowledge/industries/solar/*.md.
export default function SolarHome() {
  useRevealOnce()

  return (
    <>
      <SiteHeader nav={NAV} />
      <main id="main">
        <Hero />
        <Understanding />
        <Workflow />
        <Bottlenecks />
        <ValueAreas />
        <Approach />
        <FAQSection />
        <CTA />
      </main>
      <Footer logoLabel={legal.entity} year={legal.year} />
    </>
  )
}
