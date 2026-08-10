import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'greenhouse-enrichment',
  name: 'Greenhouse',
  category: 'ats',
  enrich1: 'Coresignal',
  enrich2: 'Apollo',
  heroTitleLead: 'Bring data rigor to',
  heroTitleTail: 'candidate records',
  heroSubtitle: 'A custom automation hub that enriches your Greenhouse candidates every day from Coresignal and Apollo, adding the structured, verified data your hiring process depends on without adding a step for your recruiters.',
  stackRole: 'Your structured-hiring system of record',
  stackBlurb: 'The hub reads and writes through the Greenhouse Harvest API. Your scorecards, stages, and reporting stay intact, enrichment lands as clean fields, not a parallel spreadsheet.',
  enrich1Blurb: 'Standardizes current title, employer, tenure, seniority, and headcount from Coresignal, so every candidate profile reads consistently across your req pipeline.',
  enrich2Blurb: 'Adds and verifies work emails and direct dials via Apollo, giving sourcers reliable contact paths instead of guesswork before the first touch.',
  capabilities: [
    'Enrich Greenhouse candidate records daily from Coresignal and Apollo, with consistent field formatting your reports can rely on.',
    'Flag candidates from past pipelines who have since changed companies or levels, prime silver-medalists to re-approach.',
    'Verify emails and phone numbers and prune undeliverable ones, protecting domain reputation across high-volume sourcing.',
    'Backfill missing structured fields, title, employer, seniority, location, LinkedIn, company size, across your historical database.',
    'Layer firmographic context onto candidates’ current employers: headcount, industry, and growth signals for targeting decisions.',
    'Write every enriched value back to Greenhouse with a source and timestamp, keeping an auditable trail behind your data.',
    'Run on your own Coresignal and Apollo keys, so data governance and spend stay inside your talent organization.',
  ],
  timeSavings: [
    { task: 'Profiling a sourced candidate', detail: 'A sourcer spends 5–8 minutes per candidate confirming title, company, and a verified email before logging them in Greenhouse.', saved: '~6 min saved per candidate, at 40 a day, most of a working day reclaimed.' },
    { task: 'Reactivating silver medalists', detail: 'Finding which past finalists are now ready to move means manually re-checking each one. The hub surfaces job changes automatically.', saved: 'A ranked re-engagement list instead of one-by-one manual review.' },
    { task: 'Cleaning data before reporting', detail: 'Inconsistent or stale fields force a manual scrub before pipeline and source-quality reports are trustworthy.', saved: 'Report-ready records by default, not an end-of-quarter cleanup.' },
  ],
};

export default target;
