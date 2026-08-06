/**
 * Signature element. A rubber stamp lands once on the "after" panel when the
 * Proof section scrolls into view. Pure SVG — the rough edge is feTurbulence
 * displacement, the ink bleed is a blurred duplicate underneath.
 *
 * Animation and the reduced-motion fallback live in styles.css (`.stamp`).
 * The `.is-in` class is applied by the single observer in App.jsx.
 */
export default function Stamp() {
  return (
    <svg className="stamp" viewBox="0 0 120 120" role="img" aria-label="Marked as filed">
      <defs>
        <filter id="stamp-ink" x="-12%" y="-12%" width="124%" height="124%">
          {/* ragged edge, as if the rubber didn't meet the paper evenly */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.62"
            numOctaves="4"
            seed="7"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="2.4"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="stamp-bleed" x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
        <g id="stamp-art">
          <circle cx="60" cy="60" r="52" fill="none" stroke="#047857" strokeWidth="3.5" />
          <circle cx="60" cy="60" r="45" fill="none" stroke="#047857" strokeWidth="1.2" />
          <text
            x="60"
            y="57"
            textAnchor="middle"
            fill="#047857"
            fontFamily="'IBM Plex Mono', monospace"
            fontSize="19"
            fontWeight="500"
            letterSpacing="2.2"
          >
            FILED
          </text>
          <line x1="30" y1="66" x2="90" y2="66" stroke="#047857" strokeWidth="1.2" />
          <text
            x="60"
            y="80"
            textAnchor="middle"
            fill="#047857"
            fontFamily="'IBM Plex Mono', monospace"
            fontSize="8.5"
            letterSpacing="1.4"
          >
            AUTOMATED
          </text>
        </g>
      </defs>

      <use href="#stamp-art" filter="url(#stamp-bleed)" opacity="0.35" />
      <use href="#stamp-art" filter="url(#stamp-ink)" opacity="0.95" />
    </svg>
  )
}
