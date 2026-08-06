import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './styles.css'

// Each route is its own chunk — visiting one page shouldn't pull the other
// two industry pages' code across the wire.
const GeneralHome = lazy(() => import('./pages/general/GeneralHome.jsx'))
const CAFirmsRoute = lazy(() => import('./routes/CAFirmsRoute.jsx'))
const SolarRoute = lazy(() => import('./routes/SolarRoute.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<GeneralHome />} />
          {/* Industry landing pages. CA Firms is the first; Manufacturing,
              Logistics, Healthcare, Recruitment etc. slot in under the same
              /industries/:slug pattern. */}
          <Route path="/industries/ca-firms" element={<CAFirmsRoute />} />
          <Route path="/industries/solar" element={<SolarRoute />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
