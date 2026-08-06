import { useEffect } from 'react'

// Shared scroll-reveal hook. One IntersectionObserver for the whole page
// instead of a hook per element. Fires once per [data-reveal] node, then
// unobserves — reveals must never re-trigger on scroll-back.
//
// Extracted from the CA Firms page's original inline copy (src/App.jsx) so
// new pages can reuse the exact same behaviour without editing that file.
// `extraSelector` lets a page opt an additional selector into the same
// once-only reveal (the CA page uses this for its `.stamp`).
export default function useRevealOnce(extraSelector) {
  useEffect(() => {
    const selector = extraSelector ? `[data-reveal], ${extraSelector}` : '[data-reveal]'
    const targets = document.querySelectorAll(selector)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('is-in')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.15 },
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [extraSelector])
}
