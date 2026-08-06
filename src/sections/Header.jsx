import { Link } from 'react-router-dom'

// The wordmark routes to the main Solution Haven site ("/") rather than an
// in-page anchor — this page is reached via the site's Industries nav, so it
// needs a way back out, matching SiteHeader's logo-links-home convention used
// by the General and Solar pages (see components/SiteHeader.jsx).
export default function Header() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <header className="header">
        <div className="wrap header-inner">
          <Link className="wordmark" to="/" aria-label="Solution Haven — back to the homepage">
            Solution Haven
          </Link>
          <nav className="nav" aria-label="Sections">
            <Link to="/">&larr; Home</Link>
            <a href="#proof">Proof</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
    </>
  )
}
