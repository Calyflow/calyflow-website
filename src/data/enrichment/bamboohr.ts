import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'bamboohr-enrichment',
  name: 'BambooHR',
  category: 'ats',
  enrich1: 'Bright Data',
  enrich2: 'Hunter.io',
  heroTitleLead: 'Let',
  heroTitleTail: 'do the legwork',
  heroSubtitle: 'A custom automation hub that enriches your BambooHR applicant records daily from Bright Data and Hunter.io, current roles, verified emails, and job-change alerts, so a small people-ops team can hire without a dedicated sourcer.',
  stackRole: 'Your people platform',
  stackBlurb: 'The hub reads and writes back to BambooHR through its API. The system your HR team already lives in stays the single record, nothing gets shipped off into a separate recruiting tool.',
  enrich1Blurb: 'Bright Data pulls current title, employer, tenure, and company size from the open web, so applicant records show where people actually work now, not where they were when they first applied.',
  enrich2Blurb: 'Hunter.io finds and verifies professional email addresses, so reach-outs to past applicants land in the inbox instead of bouncing back to an overstretched HR coordinator.',
  capabilities: [
    'Enrich BambooHR applicant records daily from Bright Data and Hunter.io, no manual research for a team that wears many hats.',
    'Spot job changes among past applicants and flag the ones now open to a move, turning a dormant pipeline into a warm one.',
    'Verify and refresh emails so re-engagement campaigns reach real inboxes and protect your sending reputation.',
    'Backfill gaps, current title, employer, location, LinkedIn, company size, across applicants captured before enrichment.',
    'Add company context to records so you can prioritise candidates by employer size and industry at a glance.',
    'Write everything back into BambooHR with a clear source and timestamp, so HR can see exactly where each value came from.',
    'Run on your own Bright Data and Hunter.io keys, so the data and the cost stay entirely under your control.',
  ],
  timeSavings: [
    { task: 'Manual applicant research', detail: 'A coordinator spends 5–8 minutes per applicant hunting down a current role and a working email between other HR duties.', saved: '~6 min saved per record, 25 applicants a day is over 2 hours back for actual people work.' },
    { task: 'Reviving a stale talent pool', detail: 'Past applicants are usually forgotten because nobody has time to check who is now open to moving.', saved: 'A daily shortlist of movers instead of a database nobody revisits.' },
    { task: 'Cleaning a list before outreach', detail: 'Verifying a few hundred old applicant emails before a re-engagement note is the better part of a day.', saved: 'A verified contact list ready immediately, not after a day of checking.' },
  ],
};

export default target;
