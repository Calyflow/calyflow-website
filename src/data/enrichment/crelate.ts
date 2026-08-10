import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'crelate-enrichment',
  name: 'Crelate',
  category: 'ats',
  enrich1: 'Bright Data',
  enrich2: 'Hunter.io',
  heroTitleLead: 'Turn',
  heroTitleTail: 'into a living talent network',
  heroSubtitle: 'A custom automation hub that keeps your Crelate candidates and contacts enriched every day from Bright Data and Hunter.io, so the relationships you have spent years building stay warm, current, and reachable.',
  stackRole: 'Your relationship system of record',
  stackBlurb: 'The hub reads from and writes back to Crelate over its API. Your candidate relationships, notes, and pipeline stay where your recruiters already work, nothing moves to a separate tool.',
  enrich1Blurb: 'Pulls fresh employment, title, and company data from Bright Data so you always know where a past placement or long-tracked candidate sits today.',
  enrich2Blurb: 'Finds and verifies professional emails through Hunter.io, scoring deliverability before outreach so your re-engagement notes actually reach the inbox.',
  capabilities: [
    'Enrich Crelate candidate and contact records daily from Bright Data and Hunter.io, no recruiter has to leave their desk to research.',
    'Surface relationship moments: flag when a candidate you placed or nurtured starts a new role, the natural cue for a check-in.',
    'Verify and refresh email addresses with Hunter.io confidence scores, quietly retiring ones that no longer deliver.',
    'Backfill gaps across long-held records, current employer, title, location, company size, so dormant relationships are outreach-ready.',
    'Keep company and client records topped up with headcount and hiring signals that warrant a business-development call.',
    'Write every update back into Crelate with a source label and timestamp, so recruiters trust the data behind each relationship.',
    'Run on your own Bright Data and Hunter.io keys, keeping the data and the cost firmly under your agency’s control.',
  ],
  timeSavings: [
    { task: 'Re-researching a warm candidate', detail: 'Before reaching out to someone last contacted a year ago, a recruiter spends 5–7 minutes confirming where they work now and finding a live email.', saved: '~6 min saved per touch, across a daily re-engagement list, hours returned to actual conversations.' },
    { task: 'Catching placements who moved', detail: 'Knowing when a candidate changes jobs usually depends on luck or a LinkedIn glance. The hub reports movers the day the data shifts.', saved: 'A daily mover list replaces months-late, accidental discoveries.' },
    { task: 'Refreshing a dormant talent pool', detail: 'Reviving an old segment for a new role means manually re-checking dozens of stale records before a single message goes out.', saved: 'A pool that stays current on its own, instead of a cleanup project every campaign.' },
  ],
};

export default target;
