import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import AppRoutes from './AppRoutes.jsx'
import './styles.css'

// Build-time only. `vite build --ssr` compiles this to dist-ssr/, and
// scripts/prerender.mjs calls render() once per route to get real HTML into
// each page — the whole point being that AI crawlers (GPTBot, ClaudeBot,
// PerplexityBot, OAI-SearchBot) don't execute JavaScript, so before this the
// only text they could see on any page was the word "Solution Haven".
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  )
}
