import { Link } from 'react-router-dom'
import './Tiles.css'

// Generic tile grid for Services / Industries / Why Choose Us style content.
// New file, new classnames — see Tiles.css for how this relates to the CA
// page's existing `.case` card pattern. An item with `href` renders as a
// router Link (used by Industries to point at a live industry page, e.g.
// CA Firms); everything else renders as a static tile.
export default function Tiles({ items }) {
  return (
    <div className="tile-grid" data-reveal>
      {items.map((item) => {
        const body = (
          <>
            {item.tag ? <span className="tile-tag">{item.tag}</span> : null}
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </>
        )
        return item.href ? (
          <Link className="tile" to={item.href} key={item.title}>
            {body}
          </Link>
        ) : (
          <div className="tile" key={item.title}>
            {body}
          </div>
        )
      })}
    </div>
  )
}
