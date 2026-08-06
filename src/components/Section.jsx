// Canonical section wrapper — reuses `.section` / `.wrap` / `.on-ink`
// verbatim (src/styles.css), the skeleton every CA page section follows
// (see docs/design-system-audit.md §3.5). New file.
//
// `tone="slate"` applies `.tone-slate` (the sunken slate-100 band used to
// break up long runs of paper sections); `tone="green"` applies `.tone-green`,
// the accent band used to single one section out. `dark` still wins outright
// since a section can't be both.
const TONES = { slate: 'tone-slate', green: 'tone-green' }

export default function Section({
  id,
  dark = false,
  tone,
  ariaLabelledby,
  className = '',
  children,
}) {
  const toneClass = dark ? 'on-ink' : TONES[tone] || ''
  const classes = ['section', toneClass, className].filter(Boolean).join(' ')
  return (
    <section className={classes} id={id} aria-labelledby={ariaLabelledby}>
      <div className="wrap">{children}</div>
    </section>
  )
}
