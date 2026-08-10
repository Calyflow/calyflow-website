import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'recruitee-enrichment', name: 'Recruitee', category: 'ats',
  enrich1: 'Bright Data', enrich2: 'Apollo',
  heroTitleLead: 'Give your hiring team',
  heroTitleTail: 'better candidate data',
  heroSubtitle: 'A custom automation hub that updates your Recruitee records every day from Bright Data and Apollo, current profiles and verified contacts so everyone collaborating on a hire is working from the same accurate picture.',
  stackRole: 'Your collaborative ATS',
  stackBlurb: 'The hub writes back into Recruitee, so enriched data shows up wherever your hiring managers and recruiters already collaborate, no separate tool for the team to learn.',
  enrich1Blurb: 'Bright Data refreshes current titles, employers, tenure, and company headcount, so a candidate everyone is reviewing reflects where they actually are today.',
  enrich2Blurb: 'Apollo fills in and verifies emails and direct dials, so whoever on the team reaches out gets through instead of chasing a dead contact.',
  capabilities: [
    'Enrich Recruitee candidate and company records daily from Bright Data and Apollo, no manual lookups for the team.',
    'Flag candidates who changed roles, so a shared pipeline never stalls on outdated context.',
    'Verify and refresh emails and phone numbers, clearing dead contacts before anyone wastes outreach on them.',
    'Backfill missing fields, current title, employer, location, seniority, LinkedIn, across your existing pipelines.',
    'Add firmographics to company records: headcount, industry, and growth signals the whole team can see.',
    'Write each update back into Recruitee with a source and timestamp, so collaborators trust where the data came from.',
    'Run on your own Bright Data and Apollo keys, so the data and the spend stay entirely yours.',
  ],
  timeSavings: [
    { task: 'Manual record enrichment', detail: 'Someone on the hiring team spends 5–8 minutes per candidate checking LinkedIn, finding an email, and updating Recruitee.', saved: '~6 min saved per candidate, hours back across a busy SMB pipeline.' },
    { task: 'Keeping the team aligned', detail: 'When records go stale, hiring managers and recruiters waste time re-checking the same details separately.', saved: 'One accurate, daily-refreshed record everyone shares, no duplicated checking.' },
    { task: 'List prep before outreach', detail: 'Verifying a batch of contacts before a coordinated campaign is an afternoon of work.', saved: 'A pre-verified list ready up front, not a half-day of cleanup.' },
  ],
};

export default target;
