import { Routes, Route, Navigate } from 'react-router-dom'
import GeneralHome from './pages/general/GeneralHome.jsx'
import CAFirmsRoute from './routes/CAFirmsRoute.jsx'
import SolarRoute from './routes/SolarRoute.jsx'

// The route table, shared by main.jsx (browser) and entry-server.jsx (build-time
// prerender) so both render the same tree. Was inline in main.jsx; the second
// consumer is the reason it moved.
//
// Add a route here and a matching entry in seo.js — prerender.mjs walks
// seo.js's list, so a route missing from it never gets static HTML.
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GeneralHome />} />
      {/* Industry landing pages. CA Firms is the first; Manufacturing,
          Logistics, Healthcare, Recruitment etc. slot in under the same
          /industries/:slug pattern. */}
      <Route path="/industries/ca-firms" element={<CAFirmsRoute />} />
      <Route path="/industries/solar" element={<SolarRoute />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
