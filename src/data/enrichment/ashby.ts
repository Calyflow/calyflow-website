import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'ashby-enrichment',
  name: 'Ashby',
  category: 'ats',
  enrich1: 'Coresignal',
  enrich2: 'Apollo',
  heroTitleLead: 'Give',
  heroTitleTail: 'data worth analysing',
  heroSubtitle: 'A custom automation hub that feeds your Ashby candidate records fresh signals from Coresignal and Apollo every day — current roles, verified contacts, and job-change alerts — so the analytics you already trust run on data that is actually current.',
  stackRole: 'Your single source of truth',
  stackBlurb: 'The hub reads from and writes back to Ashby through its API. Your all-in-one ATS+CRM stays the system everyone works in — no second tool, no export to reconcile later.',
  enrich1Blurb: 'Coresignal refreshes current title, employer, tenure, and company headcount, so your dashboards and reports reflect where candidates sit today rather than the day they were sourced.',
  enrich2Blurb: 'Apollo fills and verifies email and direct-dial numbers, keeping outreach deliverable and your response-rate metrics honest instead of inflated by dead contacts.',
  capabilities: [
    'Enrich Ashby candidate records daily from Coresignal and Apollo — no analyst pulling LinkedIn tabs to keep the database current.',
    'Detect job changes and surface a ranked list of movers, so your team re-engages warm talent the week they switch, not months later.',
    'Verify and refresh emails and phone numbers, retiring bounced addresses before they distort your outreach analytics.',
    'Backfill missing fields — title, employer, location, LinkedIn, company size — across the candidates you sourced before enrichment existed.',
    'Top up company-level firmographics so your sourcing reports segment cleanly by headcount, industry, and growth stage.',
    'Write every change back into Ashby with a source tag and timestamp on each field, so the data lineage stays auditable.',
    'Run on your own Coresignal and Apollo keys, so the data, the rate limits, and the spend all stay yours.',
  ],
  timeSavings: [
    { task: 'Manual record enrichment', detail: 'A sourcer spends 5–7 minutes per candidate checking LinkedIn, finding an email, and patching the Ashby profile by hand.', saved: '~6 min saved per record — at 40 records a day that is around 4 hours back daily.' },
    { task: 'Keeping reports trustworthy', detail: 'Stale fields quietly skew pipeline and conversion dashboards until someone notices the numbers do not add up.', saved: 'Always-current fields mean analytics you can act on without a manual audit first.' },
    { task: 'Pre-campaign list verification', detail: 'Scrubbing a few hundred candidates for valid contact details before an outreach sequence is half a day of work.', saved: 'A verified, ready-to-send list on day one instead of an afternoon of cleanup.' },
  ],
};

export default target;
