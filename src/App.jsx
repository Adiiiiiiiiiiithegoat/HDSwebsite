import { useEffect } from 'react'
import SiteHeader from './components/SiteHeader.jsx'
import Hero from './sections/Hero.jsx'
import Proof from './sections/Proof.jsx'
import Process from './sections/Process.jsx'
import Trust from './sections/Trust.jsx'
import Contact from './sections/Contact.jsx'

// ponytail: one observer for the whole page instead of a hook per section.
// Fires once per element, then unobserves — the stamp must never re-land.
function useRevealOnce() {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal], .stamp')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('is-in')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.15 },
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// Was a private sections/Header.jsx that duplicated components/SiteHeader.jsx
// with a hardcoded nav. Deleted in favour of the shared one, which is where the
// phone hamburger lives — the CA page needs it as much as the other two.
const NAV = [
  { label: '← Home', href: '/' },
  { label: 'Proof', href: '#proof' },
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
        <Proof />
        <Process />
        <Trust />
      </main>
      <Contact />
    </>
  )
}
