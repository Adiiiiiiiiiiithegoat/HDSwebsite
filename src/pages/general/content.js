// ---------------------------------------------------------------------------
// Every editable value for the General (Solution Haven) homepage lives here,
// same convention as the CA Firms page's src/content.js. Kept as a separate
// file rather than importing from the CA page's content.js so the two pages
// stay fully independent — each industry/homepage owns its own copy.
// ---------------------------------------------------------------------------

// Matches src/content.js `contact.email` — same company, one inbox.
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
  eyebrow: ['Manual data entry', 'Disconnected systems', 'Slow approvals', 'Reporting nobody owns'],
  h1: 'We eliminate the bottlenecks slowing your business down.',
  lead: 'Solution Haven finds where your operations actually break — manual work, disconnected tools, a process nobody owns — and fixes it with AI, automation and custom software built around how your business runs. We don’t sell software. We solve the problem underneath it.',
  ctaNote:
    'A Business Workflow Assessment on one process of your choice, before anything gets built.',
  strip: [
    {
      k: 'Manual work',
      v: 'Data entry, reconciliation and reporting still done by hand, every week.',
    },
    {
      k: 'Disconnected systems',
      v: 'Tools that don’t talk to each other, so someone has to.',
    },
    {
      k: 'Slow approvals',
      v: 'Multi-step processes that stall waiting on one person.',
    },
    {
      k: 'No dedicated tech team',
      v: 'Businesses that need this fixed without hiring for it.',
    },
  ],
}

export const whatWeDo = {
  tiles: [
    {
      tag: 'Process',
      title: 'Automate the repetitive parts',
      body: 'Manual data entry, reconciliation, reporting and approvals — automated so your team spends time on judgment calls, not data entry.',
    },
    {
      tag: 'Systems',
      title: 'Connect what doesn’t talk to each other',
      body: 'We integrate the tools you already use so information moves on its own instead of being copied between them by hand.',
    },
    {
      tag: 'Software',
      title: 'Build what doesn’t exist yet',
      body: 'When no off-the-shelf tool fits how your business actually works, we build the specific piece you need — nothing more.',
    },
  ],
}

export const howWeWork = {
  blocks: [
    {
      title: 'We diagnose before we build',
      body: 'A recommendation without seeing the workflow first is a guess — so we don’t make one until we have.',
      commitments: ['If the fix is a process change and not software, we’ll say so.'],
    },
    {
      title: 'We build around your business, not a template',
      body: 'Generic tools are built for nobody in particular and pointed at your process afterwards. We start from the process.',
      commitments: [
        'Custom software only when nothing off-the-shelf fits.',
        'Automation that runs on the tools you already use.',
        'AI applied where it removes work, not where it’s fashionable.',
      ],
    },
  ],
}

export const process = {
  steps: [
    {
      title: 'Discovery call',
      fact: discoveryCallLength,
      body: 'We ask how the business runs, what you’re trying to achieve, and where the team loses time every week. There is no pitch on this call.',
    },
    {
      title: 'Business Workflow Assessment',
      fact: `Structured · ${assessmentLength}`,
      body: 'We map how the company actually operates — every handoff, every manual step — and identify where the real bottlenecks are.',
    },
    {
      title: 'Recommendation',
      fact: 'The simplest fix that works',
      body: 'We recommend the simplest, highest-impact solution. If software that already exists solves the problem well, that is what we recommend — we don’t build something new just because we can.',
    },
    {
      title: 'Implementation',
      fact: 'Only when a build adds value',
      body: 'Only if a custom solution is genuinely the right choice. We build against your actual process, not a demo environment, and you test the output before anything goes live.',
    },
    {
      title: 'Continuous improvement',
      fact: 'Measured, not assumed',
      body: 'We measure the result against the bottleneck we set out to remove, and keep improving as the process and the tools around it change.',
    },
  ],
}

export const assessment = {
  lead: 'We spend time inside one workflow you choose — the one taking the most time — and document exactly where it breaks down.',
  includes: [
    'A step-by-step map of the workflow as it actually runs, not as it’s supposed to run.',
    'Every manual step, handoff and delay identified and timed.',
    'A written recommendation — automate, integrate, build, or leave it alone.',
    'An estimate of the time the current process is carrying.',
  ],
  strip: [
    { k: 'Scope', v: 'One workflow, chosen by you.' },
    { k: 'Timeline', v: assessmentLength },
    { k: 'Format', v: 'Working session, then a written report.' },
    { k: 'Outcome', v: 'A written recommendation — build or no build.' },
  ],
}

export const services = {
  tiles: [
    {
      tag: 'Automation',
      title: 'Process automation',
      body: 'Manual, repetitive workflows — data entry, reconciliation, reporting — automated end to end.',
    },
    {
      tag: 'Integration',
      title: 'Systems integration',
      body: 'The tools you already use, connected, so data moves without someone copying it between them.',
    },
    {
      tag: 'Software',
      title: 'Custom software',
      body: 'A purpose-built tool for the one workflow no off-the-shelf product handles well.',
    },
    {
      tag: 'AI',
      title: 'AI-assisted workflows',
      body: 'Applied to specific, well-defined tasks — document extraction, classification, drafting — not bolted on for its own sake.',
    },
    {
      tag: 'Advisory',
      title: 'Workflow assessment',
      body: 'A structured look at where operations are losing time, with or without a build afterward.',
    },
    {
      tag: 'Support',
      title: 'Ongoing support',
      body: 'Maintenance and iteration as your process and tools change, not a one-time handoff.',
    },
  ],
}

export const industries = {
  tiles: [
    {
      tag: 'CA firms',
      title: 'CA & Accounting Firms',
      body: 'Automation for the returns, reconciliations and filings a firm handles every month.',
      href: '/industries/ca-firms',
    },
    {
      tag: 'Solar',
      title: 'Solar & renewables',
      body: 'Site data, compliance paperwork and reporting workflows that scale faster than the team tracking them by hand.',
      href: '/industries/solar',
    },
  ],
}

export const whyChooseUs = {
  commitments: [
    {
      strong: 'We diagnose before we recommend.',
      rest: 'No proposal until we’ve mapped the actual workflow, not guessed at it.',
    },
    {
      strong: 'We solve the problem, not just the technology.',
      rest: 'If automation isn’t the right fix, we’ll say so instead of building it anyway.',
    },
    {
      strong: 'You see it working before you commit.',
      rest: 'A working assessment and a clear scope, in writing, before any contract.',
    },
    {
      strong: 'We stay on after launch.',
      rest: 'Support and iteration are part of the engagement, not an afterthought.',
    },
  ],
  note: {
    title: 'Built for operators, not procurement',
    body: 'We work directly with the people who own the process — operations leads, founders, practice heads — not through a procurement layer. That keeps decisions fast and puts the people who feel the bottleneck in the room when the fix is scoped.',
  },
}

export const about = {
  lead: 'Most businesses we talk to already know something in their operations is slow. What’s harder to know is whether the fix is AI, automation, existing software, or no software at all — and that call is usually made by whoever’s selling something. We started Solution Haven to make it the other way around: understand how the workflow actually runs first, then let that decide what gets built, if anything.',
}

export const faq = {
  items: [
    {
      q: 'Do you sell software?',
      a: 'No. We solve operational problems — sometimes that means automation, sometimes custom software, sometimes just re-mapping a process. Technology is the tool, not the product.',
    },
    {
      q: 'What if the answer isn’t AI or automation?',
      a: 'We’ll tell you. Not every bottleneck needs software — some need a process change, and we’ll point that out on the assessment call.',
    },
    {
      q: 'What if software that already exists solves our problem?',
      a: 'Then that is what we recommend, and we’ll help you put it in place. We don’t build something custom unless it genuinely does more for you than what is already available — the assessment is what tells us which of the two it is.',
    },
    {
      q: 'Do we need our own technical team to work with you?',
      a: 'No. We build, deploy and support the solution. Your team uses it — they don’t maintain it.',
    },
    {
      q: 'How long does a typical engagement take?',
      a: 'The assessment runs a few business days. Build timelines depend on scope and are agreed once the assessment is done — assuming a build is the right answer at all.',
    },
    {
      q: 'What industries do you work with?',
      a: 'CA and accounting firms, and solar & renewables, today. The method isn’t industry-specific — map the workflow, then fix what’s actually broken — so we take on new sectors the same way we took on these two.',
    },
  ],
}

export const cta = {
  title: 'Show us one workflow that’s slowing you down.',
  lead: 'Email us the process that eats the most time each week. If we can’t improve it, we’ll say so on the call rather than sell you something adjacent.',
}
