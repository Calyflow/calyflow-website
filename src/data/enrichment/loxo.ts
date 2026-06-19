import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'loxo-enrichment', name: 'Loxo', category: 'ats',
  enrich1: 'Coresignal', enrich2: 'Apollo',
  heroTitleLead: 'Sharpen', heroTitleTail: 'with real talent intelligence',
  heroSubtitle: 'A custom automation hub that feeds your Loxo records daily from Coresignal and Apollo — current roles, verified contacts, and movement signals layered onto the AI sourcing you already run.',
  stackRole: 'Your sourcing and ATS core',
  stackBlurb: 'The hub reads from and writes back to Loxo, so the talent intelligence lives where your recruiters source and shortlist — not in a side spreadsheet.',
  enrich1Blurb: 'Pulls fresh job titles, current employer, tenure, and company headcount into Loxo so your AI-ranked shortlists are built on where candidates stand today, not last year.',
  enrich2Blurb: 'Adds and validates work emails and direct dials, so your sequences reach a real inbox instead of stalling on contact data Loxo never had.',
  capabilities: [
    'Enrich Loxo people and company records every day from Coresignal and Apollo — no recruiter-time spent on lookups.',
    'Catch job changes early: flag candidates who switched roles or employers so your AI shortlists stay accurate.',
    'Validate and refresh emails and phone numbers, dropping dead addresses before they drag down deliverability.',
    'Backfill thin profiles — current title, employer, seniority, location, LinkedIn — across your existing Loxo database.',
    'Layer firmographics onto company records: headcount, sector, and hiring momentum that point to live opportunities.',
    'Write each update back into Loxo with a clear source label and timestamp on every enriched field.',
    'Run on your own Coresignal and Apollo keys, so the intelligence and the spend stay entirely in your hands.',
  ],
  timeSavings: [
    { task: 'Cross-checking AI shortlists', detail: 'A sourcer spends 5–7 minutes per profile confirming the current role and finding a contact before trusting the ranking.', saved: '~6 min saved per profile — across a daily shortlist that recovers hours of verification.' },
    { task: 'Tracking talent movement', detail: 'Job changes usually surface long after the fact, missing the window to re-engage.', saved: 'A daily, ranked movement list replaces months-late discoveries.' },
    { task: 'Prepping a sequence list', detail: 'Validating contacts for an outbound campaign in Loxo is an afternoon of manual checking.', saved: 'A pre-verified list ready up front, instead of half a day of cleanup.' },
  ],
};

export default target;
