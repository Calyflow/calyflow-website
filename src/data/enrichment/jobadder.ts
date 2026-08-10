import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'jobadder-enrichment',
  name: 'JobAdder',
  category: 'ats',
  enrich1: 'Coresignal',
  enrich2: 'Hunter.io',
  heroTitleLead: 'Keep high-volume',
  heroTitleTail: 'pipelines fresh at scale',
  heroSubtitle: 'A custom automation hub that enriches your JobAdder candidates every day from Coresignal and Hunter.io, built for agency desks placing at pace, where thousands of records have to stay current without anyone touching them by hand.',
  stackRole: 'Your placement system of record',
  stackBlurb: 'The hub reads and writes back through the JobAdder API. Your candidates, jobs, and placements stay the single source of truth across every consultant and branch.',
  enrich1Blurb: 'Refreshes current employer, title, tenure, and headcount from Coresignal across your whole database, so volume never means stale data.',
  enrich2Blurb: 'Finds and verifies candidate emails with Hunter.io deliverability scoring, keeping bounce rates down even when you are messaging hundreds a week.',
  capabilities: [
    'Enrich JobAdder candidate records daily from Coresignal and Hunter.io, at the scale a high-volume desk actually runs.',
    'Detect job changes across your database and flag movers, so consultants reach contractors and candidates right when they are between roles.',
    'Verify emails in bulk and retire bounced ones, protecting sender reputation when outreach runs into the hundreds.',
    'Backfill missing fields at volume, current title, employer, location, LinkedIn, company size, across years of records.',
    'Top up firmographics on client and prospect companies: headcount, industry, and growth signals to fuel BD across the team.',
    'Write enriched values back into JobAdder with a source and timestamp, so every consultant works from the same trusted data.',
    'Run on your own Coresignal and Hunter.io keys, so the data and the spend stay with your agency, not a third party.',
  ],
  timeSavings: [
    { task: 'Re-checking a candidate before a call', detail: 'A consultant spends 4–7 minutes per candidate confirming current role and a live email before pitching a contract.', saved: '~5 min saved per candidate, across a busy desk, that compounds into days each week.' },
    { task: 'Finding available movers', detail: 'Spotting contractors rolling off or candidates who just changed jobs is hit-and-miss manual work across a large pool.', saved: 'A daily mover list ranked for the whole team, not scattered guesswork.' },
    { task: 'Bulk list hygiene before a mailout', detail: 'Verifying hundreds of emails ahead of a candidate or client mailout is a slow, error-prone job.', saved: 'Pre-verified lists on tap, instead of a half-day per campaign.' },
  ],
};

export default target;
