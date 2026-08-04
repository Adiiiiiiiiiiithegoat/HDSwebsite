import { demoTurnaround, discoveryCallLength } from '../content.js'

const STEPS = [
  {
    title: 'Discovery call',
    fact: `Free · ${discoveryCallLength}`,
    body: 'Which forms, how often, how many clients, and what the data comes out of — Tally, Zoho Books, ClearTax, or a spreadsheet somebody maintains by hand. We ask where the month actually gets stuck. There is no pitch on this call.',
  },
  {
    title: 'We build a working demo',
    fact: `Turnaround · ${demoTurnaround}`,
    body: 'On one of your own workflows, with your real data or an anonymised copy of it. Not a slide deck and not a mockup — an automation that runs and produces the file you would have produced.',
  },
  {
    title: 'You test it live',
    fact: 'No payment, no contract',
    body: 'Run it against a filing you already completed and compare the two outputs line by line. If it does not hold up on your own data, that is the end of it and you owe nothing.',
  },
  {
    title: 'Refine and scope',
    fact: 'Price agreed before the build',
    body: 'We fix what you flagged, then put a number on the full deployment: which additional forms, which integrations, what volume, what it costs. You see the price before work starts.',
  },
  {
    title: 'Deploy and support',
    fact: 'Maintained through every cycle',
    body: 'Rollout, then training for the people who will actually use it — repeated for new joiners. When the portal changes a field or a utility version drops, fixing it is our job, not yours. That is what the monthly fee is for.',
  },
]

export default function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <span className="label">How we work</span>
          <h2 id="process-title">You see it working before you pay for it.</h2>
          <p className="lead measure">
            Five steps. The first three cost you nothing but a call and an afternoon of
            checking our output against yours.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step" key={s.title} data-reveal>
              <span className="step-code">
                STEP.{String(i + 1).padStart(2, '0')}
              </span>
              <div className="step-body">
                <h3>{s.title}</h3>
                <p className="fact">{s.fact}</p>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
