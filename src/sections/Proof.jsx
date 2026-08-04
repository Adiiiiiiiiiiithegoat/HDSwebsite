import { proof } from '../content.js'
import Stamp from './Stamp.jsx'

export default function Proof() {
  return (
    <section className="section on-ink" id="proof" aria-labelledby="proof-title">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <span className="label">Recorded, not rendered</span>
          <h2 id="proof-title">Watch one {proof.form} get filled.</h2>
          <p className="lead measure">
            Same sheet, same portal, same output file. The only difference is who does
            the typing.
          </p>
        </div>

        <div className="proof-grid">
          <div data-reveal>
            {/* ------------------------------------------------------------
                VIDEO SLOT — drop the screen recording in here.
                1. Put the file at  public/demo/gstr1-fill.mp4
                2. Put a poster frame at  public/demo/gstr1-poster.jpg
                3. Set `videoSrc` and `poster` in src/content.js → `proof`
                Until then the styled poster placeholder below renders.
               ------------------------------------------------------------ */}
            <div className="video-slot">
              {proof.videoSrc ? (
                <video
                  src={proof.videoSrc}
                  poster={proof.poster || undefined}
                  controls
                  preload="metadata"
                  playsInline
                />
              ) : (
                <div className="video-poster">
                  <span className="play" aria-hidden="true">
                    &#9654;
                  </span>
                  <span className="msg">
                    Screen recording &mdash; {proof.form}, {proof.invoices} invoices
                  </span>
                </div>
              )}
            </div>
            <p className="proof-caption">{proof.caption}</p>
          </div>

          <div className="ba" data-reveal>
            <div className="ba-panel">
              <span className="ba-role">By hand</span>
              <p className="ba-time">{proof.manual}</p>
              <p className="ba-detail">
                Reading the export, keying {proof.invoices} invoices into the offline
                tool, checking totals twice.
              </p>
            </div>

            <p className="ba-delta">
              <span>Same file</span>
            </p>

            <div className="ba-panel ba-after">
              <span className="ba-role">Automated</span>
              <p className="ba-time">{proof.automated}</p>
              <p className="ba-detail">
                Point it at the sheet. It returns the JSON, plus a list of rows it
                refused to guess at.
              </p>
              <Stamp />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
