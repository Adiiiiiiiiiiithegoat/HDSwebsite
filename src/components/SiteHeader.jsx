import { useState } from 'react'
import { Link } from 'react-router-dom'

// Generic sticky header, built from the CA page's `.header` / `.header-inner`
// / `.wordmark` / `.nav` classes (src/styles.css) so every page shares one
// header shell.
//
// `nav` items whose href starts with "/" render as a router <Link> (route
// change); anything else renders as a plain <a> (in-page anchor).
export default function SiteHeader({ logoHref = '/', logoLabel = 'Solution Haven', nav = [] }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <header className="header" onKeyDown={(e) => e.key === 'Escape' && close()}>
        <div className="wrap header-inner">
          <Link className="wordmark" to={logoHref} aria-label={`${logoLabel}, back to top`} onClick={close}>
            {logoLabel}
          </Link>

          {/* Phone only. Above 620px the nav fits on one row and this is
              display:none — six items wrapped onto two cramped lines was the
              problem this solves, so it does not exist on desktop. */}
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((wasOpen) => !wasOpen)}
          >
            <span className="nav-toggle-bars" aria-hidden="true" />
          </button>

          {/* data-open is the phone open/closed switch; on desktop the nav is
              always displayed and the attribute is inert. */}
          <nav className="nav" id="site-nav" aria-label="Sections" data-open={open ? '' : undefined}>
            {nav.map((item) =>
              item.href.startsWith('/') ? (
                <Link key={item.href} to={item.href} onClick={close}>
                  {item.label}
                </Link>
              ) : (
                // Anchor links do not unmount anything, so the panel has to be
                // closed by hand or it stays open over the section you jumped to.
                <a key={item.href} href={item.href} onClick={close}>
                  {item.label}
                </a>
              ),
            )}
          </nav>
        </div>
      </header>
    </>
  )
}
