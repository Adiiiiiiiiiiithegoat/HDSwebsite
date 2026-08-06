// ---------------------------------------------------------------------------
// Every editable value for the Solar EPC industry page lives here, same
// convention as the General homepage's src/pages/general/content.js and the
// CA Firms page's src/content.js. Kept as its own copy rather than importing
// from either so the three pages stay fully independent.
//
// Content is sourced from knowledge/industries/solar/*.md (WORKFLOW.md,
// ROLES.md, DOCUMENTS.md — the files with real research depth as of
// 2026-08-06). BOTTLENECKS.md, SOFTWARE.md, INSIGHTS.md and PRODUCTS.md are
// still TODO in that knowledge base, so nothing below states a verified
// statistic, ROI figure, or client outcome that isn't in the source files —
// nothing below should imply a bottleneck is quantified or proven when the
// knowledge base only supports "this is structurally where friction shows
// up." See knowledge/industries/solar/WORKFLOW.md §0 and §1 for the
// pathway/stage detail this file draws from.
// ---------------------------------------------------------------------------

// Matches src/content.js and src/pages/general/content.js `contact.email` —
// same company, one inbox.
export const contact = {
  emails: ['aditya@solutionhaven.net', 'siddhartha@solutionhaven.net'],
}

export const legal = {
  entity: 'Solution Haven',
  year: new Date().getFullYear(),
}

export const assessmentLength = '2–3 business days'
export const discoveryCallLength = '20–30 minutes'

export const hero = {
  eyebrow: ['Site surveys', 'CEIG & DISCOM approvals', 'Multi-state compliance', 'Procurement & O&M'],
  h1: 'Helping Solar EPC Companies Improve Operations with AI, Automation & Software',
  lead: 'Every Solar EPC company runs a different mix of rooftop, open-access and government-scheme work — different regulators, different documents, different bottlenecks. We map how yours actually runs, then apply AI, automation or software only where it removes real work.',
  ctaNote: `A Business Workflow Assessment on one process of your choice, before anything gets built.`,
  strip: [
    {
      k: 'Two delivery pathways',
      v: 'On-site rooftop net metering and off-site open access/group captive run under different regulators — we find out which one applies before recommending anything.',
    },
    {
      k: 'State-by-state approvals',
      v: 'CEIG and DISCOM requirements vary by state — Karnataka alone exempts rooftop systems under 1 MW from CEIG clearance.',
    },
    {
      k: 'CAPEX or OPEX',
      v: 'Ownership model changes financing, contracts and reporting downstream — we don’t assume one.',
    },
    {
      k: 'Not always AI',
      v: 'Automation, existing software or a straightforward integration, chosen to fit the problem.',
    },
  ],
}

export const understanding = {
  lead: '"Solar EPC" isn’t one workflow. A company running rooftop net-metering projects deals with DISCOM applications and CEIG safety approvals. A company running off-site open access or group captive projects is coordinating an SPV, member equity and wheeling agreements — a different regulatory chain entirely, and a timeline measured in months rather than weeks. Many companies run both, sometimes alongside government-scheme work like PM-KUSUM. Before we recommend anything, we find out which of these your business actually runs, and what "operations" means for that mix.',
}

// Consolidated, high-level view of the on-site rooftop C&I pathway (the most
// common case) from knowledge/industries/solar/WORKFLOW.md §1. Off-site open
// access/group captive is a longer, multi-party variant of the same idea —
// called out below the steps rather than duplicated stage-by-stage, since
// WORKFLOW.md §2 marks that pathway as only lightly mapped so far.
export const workflow = {
  note: 'This is the common shape for on-site rooftop C&I work. Off-site open access and group captive projects add SPV formation, member onboarding and wheeling approvals on top, and typically run 12–18 months end to end rather than weeks.',
  steps: [
    {
      title: 'Lead & feasibility',
      fact: 'Financing model (CAPEX vs OPEX/PPA) decided here.',
      body: 'Sales enquiry, roof/site survey, load profile and shadow analysis, sanctioned-load check — and the CAPEX-vs-OPEX/PPA decision that forks everything downstream.',
    },
    {
      title: 'Engineering & design',
      fact: 'Output: SLD, layout, structural + electrical calcs, BOQ.',
      body: 'Single-line diagram, module layout, structural calculations, cable routing and equipment bill of quantities — the documents CEIG approval and the net-metering application both depend on later.',
    },
    {
      title: 'Contract & procurement',
      fact: 'EPC agreement signed, plus a PPA if OPEX.',
      body: 'EPC agreement executed (and a Power Purchase Agreement if the client chose OPEX/RESCO), then modules, inverters, mounting structure and balance-of-system components sourced.',
    },
    {
      title: 'Installation',
      fact: 'Earthing per IS 3043, lightning/surge protection per IS 16942.',
      body: 'Mounting structure erected, modules placed, DC/AC wiring run, earthing and lightning/surge protection installed to code.',
    },
    {
      title: 'Regulatory approval',
      fact: 'Two state-level authorities: CEIG, then DISCOM.',
      body: 'CEIG electrical safety approval (drawing approval, then post-install inspection) and the DISCOM net-metering application both run — thresholds, portals and sequencing all vary by state.',
    },
    {
      title: 'Commissioning & handoff',
      fact: 'Bi-directional meter installed, system energized.',
      body: 'DISCOM installs the bi-directional meter, the system is tested and energized, and the documentation package — contract, approvals, as-built, warranty — is handed to the client.',
    },
    {
      title: 'Monitoring & O&M',
      fact: 'Runs for the life of the system.',
      body: 'Ongoing performance monitoring and maintenance — the part of the relationship that outlasts the project itself.',
    },
  ],
}

// "Bottlenecks" here means structural friction points implied by the
// workflow and documents mapped in WORKFLOW.md/DOCUMENTS.md — not verified,
// quantified bottlenecks with client data, since BOTTLENECKS.md is still
// TODO in the knowledge base. Framed accordingly: specific, sourced facts,
// no invented statistics or outcomes.
export const bottlenecks = {
  tiles: [
    {
      tag: 'Sales & feasibility',
      title: 'Two different sales conversations, one team',
      body: 'A CAPEX deal and an OPEX/PPA deal aren’t the same sale — one is a purchase, the other is a 15–25 year contract with a financing partner. Quoting and negotiating them the same way costs deals or margin.',
    },
    {
      tag: 'Engineering & design',
      title: 'A design error surfaces stages later',
      body: 'Structural certificates, earthing and lightning-protection plans produced at design feed straight into the CEIG approval package — a mistake here often isn’t caught until the approval stage, not immediately.',
    },
    {
      tag: 'Procurement',
      title: 'Sourcing tied to a design that isn’t final',
      body: 'The BOQ and equipment spec come out of engineering. When design and procurement aren’t tightly sequenced, a late design change means re-ordering, not just re-scheduling.',
    },
    {
      tag: 'Regulatory & approvals',
      title: 'No single approval playbook',
      body: 'CEIG thresholds and DISCOM net-metering rules are set state by state — Karnataka exempts rooftop systems under 1 MW from CEIG clearance, other states don’t. A company operating across states can’t run one checklist.',
    },
    {
      tag: 'Installation & commissioning',
      title: 'Two approvals, two timelines to track',
      body: 'CEIG drawing approval, post-install inspection and the DISCOM net-metering application run in parallel with state-specific sequencing — the plant can’t commission until all three close out.',
    },
    {
      tag: 'O&M & support',
      title: 'The part of the job with no fixed end date',
      body: 'Monitoring and maintenance run for the life of the system, long after the project team has moved on to the next site — often the least standardized part of the operation.',
    },
  ],
}

export const valueAreas = {
  tiles: [
    {
      tag: 'AI',
      title: 'Where the work is genuinely unstructured',
      body: 'Reading site-survey photos, pulling data off inverter/module datasheets, drafting a first-pass CEIG or net-metering submission — tasks where the input varies but the first pass shouldn’t be manual.',
    },
    {
      tag: 'Automation',
      title: 'Where the steps are already fixed',
      body: 'Status updates between design, procurement and installation, or triggering the next document once a stage closes out — no AI required, just a handoff that currently relies on someone remembering.',
    },
    {
      tag: 'Existing software',
      title: 'Where a tool already exists',
      body: 'Sometimes the fix is configuring or better using what you already run — a CRM, an ERP, a project tracker — not building something new next to it.',
    },
    {
      tag: 'Custom software',
      title: 'Where nothing off-the-shelf fits',
      body: 'Tracking a project through two different regulatory chains — rooftop vs. open access — across multiple states, with different documents at each stage. Generic project tools rarely model that correctly.',
    },
    {
      tag: 'Integrations',
      title: 'Where systems exist but don’t talk',
      body: 'Design output, procurement records and the CEIG/DISCOM submission package usually live in different places. Connecting them removes the manual re-entry between stages.',
    },
  ],
}

export const approach = {
  steps: [
    {
      title: 'Understand',
      fact: 'Discovery, not a pitch.',
      body: 'We start inside your workflow, not a demo — which pathways you run, how the team is structured, and where you say time actually gets lost.',
    },
    {
      title: 'Analyze',
      fact: 'Workflow mapped stage by stage.',
      body: 'We map the process end to end — every handoff, every document, every approval — and separate what’s broken from what’s just slow.',
    },
    {
      title: 'Recommend',
      fact: 'Technology fitted to the problem.',
      body: 'We recommend the smallest fix that solves it — automation, integration, existing software, or a custom build. If something that already exists does the job well, that is what we say.',
    },
    {
      title: 'Build',
      fact: 'Tested on your real workflow.',
      body: 'Built against your actual process and tested by the team who’ll use it, not against a demo environment.',
    },
    {
      title: 'Improve',
      fact: 'Maintained as your operations change.',
      body: 'Solar operations shift with regulation, scale and whichever pathway you take on next. We stay on to adjust the fix as they do.',
    },
  ],
}

export const faq = {
  items: [
    {
      q: 'Do you only work with rooftop C&I, or open access and government-scheme projects too?',
      a: 'Whichever mix your business runs. Rooftop net metering, off-site open access/group captive, and government-scheme work like PM-KUSUM are operationally different — we find out which ones apply to you before recommending anything.',
    },
    {
      q: 'Do you handle CEIG or DISCOM approvals for us?',
      a: 'No — those are regulatory processes you or your existing team run. What we look at is the paperwork and tracking around them: whether documents are ready on time, whether status is visible without someone checking manually, and whether the process repeats across the states you operate in.',
    },
    {
      q: 'Is the fix always AI?',
      a: 'No. Depending on what we find, we might recommend automation, better use of software you already have, a straightforward integration, or a process change with no build at all. AI is one option among several, not the default.',
    },
    {
      q: 'What if we run rooftop and open-access projects at the same time?',
      a: 'That’s common, and it’s exactly what we map before recommending anything — the two pathways have different regulators, different documents and different timelines, and a single generic process rarely fits both.',
    },
    {
      q: 'What does the Business Workflow Assessment involve?',
      a: `We spend time inside one workflow you choose — the one taking the most time — and document exactly where it breaks down, before anything gets built.`,
    },
    {
      q: 'How long does an assessment take?',
      a: `${assessmentLength} for the assessment itself. Build timelines depend on scope and are agreed afterward, once we know what’s actually being built — if anything needs building at all.`,
    },
  ],
}

export const cta = {
  title: 'Show us one workflow that’s slowing your team down.',
  lead: 'Site survey to sign-off, procurement to CEIG paperwork — email us the process that eats the most time each week. If we can’t improve it, we’ll say so on the call.',
}
