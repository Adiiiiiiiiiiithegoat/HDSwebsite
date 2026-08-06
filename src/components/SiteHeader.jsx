import { Link } from 'react-router-dom'

// Generic sticky header, built from the CA page's `.header` / `.header-inner`
// / `.wordmark` / `.nav` classes (src/styles.css) so every page shares one
// header shell. New file — the CA page keeps its own src/sections/Header.jsx
// untouched and does not import this.
//
// `nav` items whose href starts with "/" render as a router <Link> (route
// change); anything else renders as a plain <a> (in-page anchor).
export default function SiteHeader({ logoHref = '/', logoLabel = 'Solution Haven', nav = [] }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <header className="header">
        <div className="wrap header-inner">
          <Link className="wordmark" to={logoHref} aria-label={`${logoLabel}, back to top`}>
            {logoLabel}
          </Link>
          <nav className="nav" aria-label="Sections">
            {nav.map((item) =>
              item.href.startsWith('/') ? (
                <Link key={item.href} to={item.href}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.href} href={item.href}>
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
