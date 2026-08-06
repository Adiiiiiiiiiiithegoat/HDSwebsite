import { Link } from 'react-router-dom'

// Generic footer bar, built from the CA page's `.footer-bar` / `.footer-meta`
// / `.wordmark` classes (src/styles.css) — same visual bookend, decoupled
// from Contact so a page can have a dedicated CTA section plus this footer
// as two separate pieces (the CA page fuses them into one <footer>, which is
// left untouched in src/sections/Contact.jsx).
export default function Footer({ logoLabel = 'Solution Haven', year, links = [] }) {
  const resolvedYear = year ?? new Date().getFullYear()

  return (
    <footer className="on-ink">
      <div className="wrap">
        <div className="footer-bar">
          <Link className="wordmark" to="/">
            {logoLabel}
          </Link>
          <div className="footer-meta">
            <span>
              &copy; {resolvedYear} {logoLabel}
            </span>
            {links.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
