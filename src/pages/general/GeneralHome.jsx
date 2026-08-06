import useRevealOnce from '../../hooks/useRevealOnce.js'
import useRouteMeta from '../../hooks/useRouteMeta.js'
import SiteHeader from '../../components/SiteHeader.jsx'
import Footer from '../../components/Footer.jsx'
import { legal } from './content.js'
import Hero from './sections/Hero.jsx'
import WhatWeDo from './sections/WhatWeDo.jsx'
import HowWeWork from './sections/HowWeWork.jsx'
import Process from './sections/Process.jsx'
import Assessment from './sections/Assessment.jsx'
import Services from './sections/Services.jsx'
import Industries from './sections/Industries.jsx'
import WhyChooseUs from './sections/WhyChooseUs.jsx'
import About from './sections/About.jsx'
import FAQSection from './sections/FAQSection.jsx'
import CTA from './sections/CTA.jsx'

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#cta' },
]

// Matches index.html's server-rendered defaults — asserting them again here
// means returning to "/" after visiting another route (a client-side
// navigation, so index.html never re-runs) restores the right meta instead
// of leaving whatever the previous route's cleanup happened to revert to.
const TITLE =
  'Solution Haven — eliminate operational bottlenecks with AI, automation and custom software'
const DESCRIPTION =
  'Solution Haven helps businesses eliminate operational bottlenecks using AI, automation and custom software. We solve business problems — technology is only the tool.'

// Solution Haven's general homepage. Same design system as the CA Firms
// page (tokens, utility classes, reveal-on-scroll behaviour — see
// docs/design-system-audit.md), entirely new content and section set.
export default function GeneralHome() {
  useRevealOnce()
  useRouteMeta({ title: TITLE, description: DESCRIPTION, path: '/' })

  return (
    <>
      <SiteHeader nav={NAV} />
      <main id="main">
        <Hero />
        <WhatWeDo />
        <HowWeWork />
        <Process />
        <Assessment />
        <Services />
        <Industries />
        <WhyChooseUs />
        <About />
        <FAQSection />
        <CTA />
      </main>
      <Footer logoLabel={legal.entity} year={legal.year} />
    </>
  )
}
