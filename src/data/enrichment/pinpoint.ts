import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'pinpoint-enrichment', name: 'Pinpoint', category: 'ats',
  enrich1: 'Coresignal', enrich2: 'Hunter.io',
  heroTitleLead: 'Enrich',
  heroTitleTail: 'without breaking the candidate experience',
  heroSubtitle: 'A custom automation hub that quietly updates your Pinpoint records every day from Coresignal and Hunter.io — current profiles and verified emails that keep your talent pool warm and your outreach on-brand.',
  stackRole: 'Your in-house TA system',
  stackBlurb: 'The hub reads from and writes back to Pinpoint, so your talent-acquisition team works from one accurate pool — no exports, no parallel tools to reconcile.',
  enrich1Blurb: 'Coresignal keeps current roles, employers, tenure, and company headcount up to date, so a candidate from last year\'s pipeline is reachable with context the day you re-engage.',
  enrich2Blurb: 'Hunter.io verifies professional emails before you send, protecting your employer brand from bounces and keeping your domain reputation clean.',
  capabilities: [
    'Enrich Pinpoint candidate and company records daily from Coresignal and Hunter.io — no manual upkeep on your talent pool.',
    'Spot when a past applicant changes jobs, so your team re-engages a warm contact at exactly the right moment.',
    'Verify emails before outreach, so brand-sensitive messages land cleanly instead of bouncing.',
    'Backfill missing detail — current title, employer, location, seniority, LinkedIn — across your nurtured pipelines.',
    'Add firmographics to company records: headcount, industry, and growth signals that inform your targeting.',
    'Write each update back into Pinpoint with a source and timestamp, so every field is traceable for your team.',
    'Run on your own Coresignal and Hunter.io keys, so the data and the spend remain entirely in-house.',
  ],
  timeSavings: [
    { task: 'Refreshing a silver-medalist pool', detail: 'A TA coordinator spends 5–8 minutes per past candidate confirming their current role and a valid email before reaching out.', saved: '~6 min saved per candidate — a re-engagement push prepped in minutes, not days.' },
    { task: 'Catching the right moment', detail: 'Knowing when a former applicant is open again usually means luck, not a process.', saved: 'A daily list of movers replaces guesswork about who to nudge.' },
    { task: 'Protecting outreach quality', detail: 'Manually checking emails before a branded campaign is tedious and easy to skip.', saved: 'Pre-verified contacts keep bounce rates and brand risk down with zero extra effort.' },
  ],
};

export default target;
