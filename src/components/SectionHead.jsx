// Reuses the CA page's `.section-head` / `.label` / `.lead` classes verbatim
// (src/styles.css) — the label-eyebrow + h2 + optional lead pattern used to
// open every section. New file; the CA page's own sections keep their inline
// markup untouched.
export default function SectionHead({ label, title, titleId, lead, children }) {
  return (
    <div className="section-head" data-reveal>
      {label ? <span className="label">{label}</span> : null}
      <h2 id={titleId}>{title}</h2>
      {lead ? <p className="lead measure">{lead}</p> : null}
      {children}
    </div>
  )
}
