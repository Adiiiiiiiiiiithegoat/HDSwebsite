import { Link } from 'react-router-dom'
import { contact, legal } from '../content.js'

// No form and no backend — this section is contact details only.
const LINES = [
  { label: 'Email', href: `mailto:${contact.email}`, value: contact.email },
  { label: 'WhatsApp or call', links: contact.phones },
]

export default function Contact() {
  return (
    <footer className="on-ink" id="contact">
      <div className="wrap section">
        <div className="section-head" data-reveal>
          <span className="label">Contact</span>
          <h2 id="contact-title">Tell us about one form.</h2>
          <p className="lead measure">
            Email or message us with the job that eats the most time each month. If we
            cannot automate it, we will say so on the call rather than sell you something
            adjacent.
          </p>
        </div>

        <div className="contact-details" data-reveal>
          {LINES.map((l) => (
            <div className="contact-line" key={l.label}>
              <span className="label">{l.label}</span>
              {l.links ? (
                <span className="val-group">
                  {l.links.map((k) => (
                    <a key={k.href} href={k.href} target="_blank" rel="noreferrer">
                      {k.number}
                    </a>
                  ))}
                </span>
              ) : l.href ? (
                <a
                  href={l.href}
                  {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {l.value}
                </a>
              ) : (
                <span className={`val${l.plain ? ' plain' : ''}`}>{l.value}</span>
              )}
            </div>
          ))}
        </div>

        <a className="btn contact-cta" href={`mailto:${contact.email}`} data-reveal>
          Email us one form you fill every month
          <span className="arrow" aria-hidden="true">
            &rarr;
          </span>
        </a>
      </div>

      <div className="wrap">
        <div className="footer-bar">
          <Link className="wordmark" to="/">
            Solution Haven
          </Link>
          <div className="footer-meta">
            <span>
              &copy; {legal.year} {legal.entity}
            </span>
            <a href={legal.privacyHref}>Privacy</a>
            <a href={legal.termsHref}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
