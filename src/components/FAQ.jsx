import './FAQ.css'

// Native <details>/<summary> accordion — no animation library, no JS open
// state — consistent with the rest of the site's plain-HTML-first approach
// (see docs/design-system-audit.md §3.8, which documents this pattern's
// absence from the CA page and the reasoning for how it should be added).
export default function FAQ({ items }) {
  return (
    <div data-reveal>
      {items.map((item) => (
        <details className="faq-item" key={item.q}>
          <summary className="faq-q">
            {item.q}
            <span className="faq-icon" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="faq-a">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
