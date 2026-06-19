import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'workable-enrichment', name: 'Workable', category: 'ats',
  enrich1: 'Bright Data', enrich2: 'Apollo',
  heroTitleLead: 'Get more from', heroTitleTail: 'without the busywork',
  heroSubtitle: 'A lightweight automation hub that enriches your Workable candidate records from Bright Data and Apollo — up-to-date roles, working contact details, and job-change alerts — so a lean team can move fast without losing hours to manual research.',
  stackRole: 'Your hiring system of record',
  stackBlurb: 'The hub reads and writes straight back to Workable. Your ATS stays the single source of truth — no second tool to log into, no export to keep in sync.',
  enrich1Blurb: 'Refreshes current title, employer, location, and company headcount, so a profile pulled from Workable\'s sourcing reflects where the candidate actually is now.',
  enrich2Blurb: 'Fills in and verifies emails and phone numbers, so a small team\'s outreach lands the first time instead of bouncing on stale details.',
  capabilities: [
    'Enrich Workable candidate records automatically from Bright Data and Apollo — no manual lookups slowing a fast-moving team down.',
    'Top up profiles sourced through Workable so every candidate enters your pipeline complete, not half-filled.',
    'Detect job changes and flag candidates worth re-approaching, so a small desk never misses an obvious opening.',
    'Verify and refresh emails and direct dials, dropping dead addresses before they hurt your sender reputation.',
    'Backfill missing fields — current employer, title, location, LinkedIn, company size — across your whole candidate database in one pass.',
    'Write everything back into Workable with a source and timestamp on each field, so nothing happens behind your team\'s back.',
    'Run on your own Bright Data and Apollo keys, so the data and the spend stay entirely yours.',
  ],
  timeSavings: [
    { task: 'Manual candidate enrichment', detail: 'A recruiter spends 4–7 minutes per candidate cross-checking details and updating Workable by hand.', saved: '~5 min saved per candidate — on a small team, that\'s a meaningful slice of every day handed back.' },
    { task: 'Catching job changes', detail: 'Movers in a lean pipeline get noticed late, if at all, because nobody has time to keep checking.', saved: 'A daily shortlist of candidates who just changed roles, surfaced automatically.' },
    { task: 'Prepping a contact list', detail: 'Verifying a batch of emails before an outreach push eats into time a small team can\'t spare.', saved: 'A clean, deliverable list ready to send instead of an hour of manual checking.' },
  ],
};

export default target;
