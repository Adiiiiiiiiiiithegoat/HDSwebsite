import { useEffect } from 'react'

const ORIGIN = 'https://solutionhaven.net'

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector)
  if (!el || value == null) return null
  const prev = el.getAttribute(attr)
  el.setAttribute(attr, value)
  return () => el.setAttribute(attr, prev)
}

// Keeps <title>, the meta description, canonical link and the Open Graph /
// Twitter tags in sync with whichever route is mounted. index.html carries
// the correct defaults for "/"; every other route calls this once on mount
// with its own title/description/path and everything reverts to the
// previous route's values on unmount, since this is a client-only SPA with
// no per-route server render.
export default function useRouteMeta({ title, description, path }) {
  useEffect(() => {
    const url = `${ORIGIN}${path}`
    const prevTitle = document.title
    document.title = title

    const restores = [
      setMeta('meta[name="description"]', 'content', description),
      setMeta('link[rel="canonical"]', 'href', url),
      setMeta('meta[property="og:title"]', 'content', title),
      setMeta('meta[property="og:description"]', 'content', description),
      setMeta('meta[property="og:url"]', 'content', url),
      setMeta('meta[name="twitter:title"]', 'content', title),
      setMeta('meta[name="twitter:description"]', 'content', description),
    ].filter(Boolean)

    return () => {
      document.title = prevTitle
      restores.forEach((restore) => restore())
    }
  }, [title, description, path])
}
