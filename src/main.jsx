import { StrictMode, Component, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './styles.css'
import GeneralHome from './pages/general/GeneralHome.jsx'
import CAFirmsRoute from './routes/CAFirmsRoute.jsx'
import SolarRoute from './routes/SolarRoute.jsx'

// ponytail: routes are static imports, not lazy(). Each is ~13 kB against a
// 232 kB entry bundle, so splitting them saved ~5% of transfer and cost a
// second round-trip — during which <Suspense fallback={null}> rendered
// nothing, i.e. a white screen. Worse, a chunk that failed to load (stale
// hash after a deploy, flaky network) blanked the page permanently. Vite
// modulepreloads these alongside the entry now, so there is no waterfall.
// Re-split only when a route is big enough that you can measure the win.

// Nothing above this caught errors, so one throw anywhere unmounted the whole
// tree and left an empty <div id="root"> — the white screen, with no way back
// except a manual reload the user has no reason to try.
class ErrorBoundary extends Component {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error, info) {
    console.error('Uncaught error:', error, info)
  }

  render() {
    if (!this.state.failed) return this.props.children

    return (
      <div className="wrap" style={{ padding: '96px 0', maxWidth: '640px' }}>
        <h1>Something went wrong on this page.</h1>
        <p>
          Reloading usually fixes it. If it keeps happening, email us at{' '}
          <a href="mailto:hello@solutionhaven.net">hello@solutionhaven.net</a> and we will
          sort it out.
        </p>
        <button className="btn" type="button" onClick={() => window.location.reload()}>
          Reload the page
        </button>
      </div>
    )
  }
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return // in-page anchors (#faq, #contact) scroll themselves

    // ponytail: html sets scroll-behavior: smooth, so a plain scrollTo animates
    // a long scroll up on every route change. `instant` overrides that, but the
    // enum value is a TypeError on Safari < 15.4 — and a throw in an effect
    // takes the whole page down, so fall back instead of trusting it.
    try {
      window.scrollTo({ top: 0, behavior: 'instant' })
    } catch {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<GeneralHome />} />
          {/* Industry landing pages. CA Firms is the first; Manufacturing,
              Logistics, Healthcare, Recruitment etc. slot in under the same
              /industries/:slug pattern. */}
          <Route path="/industries/ca-firms" element={<CAFirmsRoute />} />
          <Route path="/industries/solar" element={<SolarRoute />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
