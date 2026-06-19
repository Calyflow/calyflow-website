import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'bullhorn-enrichment',
  name: 'Bullhorn',
  category: 'ats',
  enrich1: 'Coresignal',
  enrich2: 'Apollo',
  heroTitleLead: 'Keep a database this big',
  heroTitleTail: 'alive',
  heroSubtitle: 'A custom automation hub that enriches your Bullhorn candidate records at scale from Coresignal and Apollo — current roles, verified contacts, and job-change alerts — so a high-volume agency desk stops working from stale data.',
  stackRole: 'Your agency system of record',
  stackBlurb: 'The hub reads and writes back to Bullhorn through its API. The database your whole agency runs on stays the single source of truth — enrichment happens in place, at volume, with nothing exported.',
  enrich1Blurb: 'Coresignal refreshes current title, employer, tenure, and company headcount across thousands of records, so even the candidates you have not touched in a year reflect where they work today.',
  enrich2Blurb: 'Apollo finds and verifies emails and direct dials at scale, so high-volume outreach reaches live contacts instead of burning a desk on bounced sends.',
  capabilities: [
    'Enrich Bullhorn candidate records in bulk from Coresignal and Apollo — no consultant manually working through the database.',
    'Detect job changes across the whole database and deliver a ranked daily list of movers worth a redeploy call.',
    'Verify and refresh emails and phone numbers at volume, retiring bounced contacts before they hurt deliverability.',
    'Backfill missing fields — title, employer, location, LinkedIn, company size — across years of accumulated records.',
    'Top up firmographics on company records so business development can target by headcount, industry, and growth.',
    'Write every update back into Bullhorn with a source and timestamp per field, keeping a clean audit trail at scale.',
    'Run on your own Coresignal and Apollo keys, so the data volume and the spend stay entirely yours.',
  ],
  timeSavings: [
    { task: 'Manual record enrichment', detail: 'A consultant spends 5–8 minutes per candidate cross-checking LinkedIn, sourcing a number, and updating Bullhorn.', saved: '~6 min saved per record — at 60 records a day that is roughly 6 hours back across the desk.' },
    { task: 'Finding redeploy opportunities', detail: 'Contractors and placed candidates who become available are easy to miss in a database this size.', saved: 'A daily ranked list of movers replaces hours of speculative database trawling.' },
    { task: 'Cleaning a list for a campaign', detail: 'Scrubbing hundreds or thousands of contacts for valid details before a mailshot is a full day of work.', saved: 'A pre-verified list ready immediately instead of a day lost to cleanup.' },
  ],
};

export default target;
