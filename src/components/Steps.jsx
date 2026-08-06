// Numbered process/timeline list, built from the CA page's `.step` /
// `.step-code` / `.step-body` / `.fact` classes (src/styles.css) — the same
// hairline-separated row pattern used by the CA page's Process section.
// New file; src/sections/Process.jsx on the CA page keeps its own markup.
export default function Steps({ items, codePrefix = 'STEP' }) {
  return (
    <div>
      {items.map((item, i) => (
        <div className="step" key={item.title} data-reveal>
          <span className="step-code">
            {codePrefix}.{String(i + 1).padStart(2, '0')}
          </span>
          <div className="step-body">
            <h3>{item.title}</h3>
            {item.fact ? <p className="fact">{item.fact}</p> : null}
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
