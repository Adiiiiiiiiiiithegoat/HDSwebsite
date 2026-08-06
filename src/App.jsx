import SiteHeader from './components/SiteHeader.jsx'
import useRevealOnce from './hooks/useRevealOnce.js'
import Hero from './sections/Hero.jsx'
import Process from './sections/Process.jsx'
import Trust from './sections/Trust.jsx'
import Contact from './sections/Contact.jsx'

// Was a private sections/Header.jsx that duplicated components/SiteHeader.jsx
// with a hardcoded nav. Deleted in favour of the shared one, which is where the
// phone hamburger lives — the CA page needs it as much as the other two.
// "Home" not "← Home": nav text is the first text in the document, so when
// Google builds a snippet from the page instead of the meta description it
// prints the labels run together — the CA result read "Haven ←HomeProofProcess
// Contact". The wordmark links home too, so the arrow was decoration in the
// one place decoration gets scraped.
const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function App() {
  useRevealOnce()

  return (
    <>
      <SiteHeader nav={NAV} />
      <main id="main">
        <Hero />
        <Process />
        <Trust />
      </main>
      <Contact />
    </>
  )
}
