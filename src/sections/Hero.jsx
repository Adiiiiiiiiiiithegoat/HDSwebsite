import { demoTurnaround } from '../content.js'

const FORMS = ['GSTR-1', 'GSTR-3B', '26Q', '24Q', 'AOC-4', 'ITR-3']

const STRIP = [
  {
    k: 'Returns',
    v: 'GST and TDS filings built from your Tally, Zoho or Excel exports.',
  },
  {
    k: 'Filings',
    v: 'ROC and MCA forms prepared from data you already hold.',
  },
  {
    k: 'The rest of it',
    v: 'Reconciliation, client document chasing, the monthly report nobody wants to build.',
  },
  {
    k: 'No IT person',
    v: 'Software that stopped working, a machine that needs setting up, a file nobody can open. Firms we build for can just ask.',
  },
]

export default function Hero() {
  return (
    <section className="section hero" aria-labelledby="hero-title">
      <div className="wrap">
        <p className="label hero-eyebrow" data-reveal>
          {FORMS.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </p>

        <h1 id="hero-title" data-reveal>
          Your team shouldn&rsquo;t be typing GSTR-1 data by hand.
        </h1>

        <p className="lead" data-reveal>
          We build software that fills the forms your firm files every month, from the
          data you already have. Not advice, not a platform to migrate to — one working
          automation for one job, running on your machines.
        </p>

        <div className="hero-cta" data-reveal>
          <a className="btn" href="#contact">
            Show us one form you fill every month
            <span className="arrow" aria-hidden="true">
              &rarr;
            </span>
          </a>
          <p className="note">
            We build it on your workflow in {demoTurnaround}. You test it before any
            money changes hands.
          </p>
        </div>

        <div className="hero-strip" data-reveal>
          {STRIP.map((s) => (
            <div key={s.k}>
              <span className="k">{s.k}</span>
              <span className="v">{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
