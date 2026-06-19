import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'vincere-enrichment',
  name: 'Vincere',
  category: 'ats',
  enrich1: 'Coresignal',
  enrich2: 'Apollo',

  heroTitleLead: 'Keep',
  heroTitleTail: 'current, automatically',
  heroSubtitle:
    'A custom automation hub that enriches your Vincere records every day from Coresignal and Apollo — fresh roles, verified contacts, and job-change alerts, with no manual research.',

  stackRole: 'Your system of record',
  stackBlurb:
    'The hub reads and writes back to Vincere. Your ATS stays the single source of truth — nothing is exported into another tool.',
  enrich1Blurb:
    'Refreshes job titles, current employer, tenure, and company headcount so your records reflect where candidates actually are today.',
  enrich2Blurb:
    'Fills in and verifies emails and direct dials, so outreach lands instead of bouncing on a candidate who changed jobs two years ago.',

  capabilities: [
    'Enrich Vincere candidate and contact records daily from Coresignal and Apollo — no manual lookups.',
    'Detect job changes: flag candidates who moved to a new company or role so you can re-engage at the right moment.',
    'Verify and refresh emails and phone numbers, retiring bounced addresses before they hurt your sender reputation.',
    'Backfill missing fields — current title, employer, location, LinkedIn, company size — across your existing database.',
    'Top up firmographics on company records: headcount, industry, and growth signals worth a conversation.',
    'Write everything straight back into Vincere with a clear source and timestamp on each enriched field.',
    'Run on your own Coresignal and Apollo keys, so the data and the spend stay entirely yours.',
  ],

  timeSavings: [
    {
      task: 'Manual record enrichment',
      detail:
        'A recruiter spends 5–8 minutes per record cross-checking LinkedIn, finding an email, and updating Vincere.',
      saved: '~6 min saved per record — 50 records a day is roughly 5 hours back, every day.',
    },
    {
      task: 'Spotting job changes',
      detail:
        'Most movers are found by accident, months late. The hub surfaces them the day the data updates.',
      saved: 'Hours of ad-hoc database trawling replaced by a daily, ranked list.',
    },
    {
      task: 'List cleanup before a campaign',
      detail:
        'Scrubbing a few hundred contacts for valid emails before an outreach push is an afternoon of work.',
      saved: 'A pre-verified list ready on day one, instead of a half-day of cleanup.',
    },
  ],
};

export default target;
