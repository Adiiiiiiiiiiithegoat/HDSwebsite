import { SHOW_CASE_STUDIES, caseStudies } from '../content.js'

// ---------------------------------------------------------------------------
// TODO — DATA POLICY. These four commitments are the ones we intend to make,
// written in plain language. Before launch, confirm each against how the
// deployment actually works and against whatever we sign with a client:
//   1. confirm the on-premise/VPN split for firms without a server
//   2. confirm retention period for logs (currently written as "no client data")
//   3. name the encryption standard in the signed agreement, not just here
//   4. get the NDA reviewed; link it from this section once it exists
// ---------------------------------------------------------------------------
const COMMITMENTS = [
  {
    strong: 'It runs on your machines.',
    rest: 'The automation is installed on the computer or server your firm already uses. Client ledgers, invoices and PANs stay inside your office network.',
  },
  {
    strong: 'We do not keep a copy.',
    rest: 'No client data is uploaded to us, stored by us, or used to train anything. What we hold is what you send us during the build — and we delete it when the build is signed off.',
  },
  {
    strong: 'Access is on your terms.',
    rest: 'During setup and support we work over a screen-share you start, or a login you create and can revoke. Nothing runs unattended in the background.',
  },
  {
    strong: 'Everything is in writing.',
    rest: 'An NDA before the discovery call if you want one, and a written scope covering what the software touches and what it does not. Encryption in transit and at rest, named in the agreement.',
  },
]

function CaseStudies() {
  if (!SHOW_CASE_STUDIES || caseStudies.length === 0) return null
  return (
    <div className="cases">
      {caseStudies.map((c) => (
        <article className="case" key={`${c.city}-${c.workflow}`}>
          <p className="case-meta">
            {c.firmType} &middot; {c.city}
          </p>
          <h3>{c.workflow}</h3>
          <p className="case-delta">
            {c.before} &rarr; {c.after}
          </p>
          <p className="case-note">{c.measured}</p>
        </article>
      ))}
    </div>
  )
}

export default function Trust() {
  return (
    <section className="section" id="trust" aria-labelledby="trust-title">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <span className="label">Before you ask</span>
          <h2 id="trust-title">Where your client data sits, and who we build for.</h2>
        </div>

        <div className="trust-grid">
          <div className="trust-block" data-reveal>
            <h3>What happens to the data</h3>
            <ul className="commit-list">
              {COMMITMENTS.map((c) => (
                <li key={c.strong}>
                  <span>
                    <strong>{c.strong}</strong> {c.rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="trust-block" data-reveal>
            <h3>We only build for this</h3>
            <p>
              Haven works on Indian compliance work and nothing else. That is a
              limitation we chose. It means we already know that GSTR-1 and 3B are not
              the same job, that 26Q and 24Q need different validation, that September
              and October are not normal months, and that an AOC-4 attachment fails for
              reasons the portal will not explain.
            </p>
            <p>
              Generic automation tools are built for invoice processing in a warehouse
              somewhere and pointed at your forms afterwards. Ours is written against the
              utility, the schema and the deadline. When a form changes, we are already
              looking at it — that maintenance is part of what you pay for, not a
              separate quote.
            </p>
          </div>
        </div>

        {/* Populated once pilot firms allow it — flip SHOW_CASE_STUDIES in content.js */}
        <CaseStudies />
      </div>
    </section>
  )
}
