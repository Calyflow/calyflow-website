import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'cats-enrichment',
  name: 'CATS',
  category: 'ats',
  enrich1: 'Bright Data',
  enrich2: 'Apollo',
  heroTitleLead: 'Get more out of',
  heroTitleTail: 'without the busywork',
  heroSubtitle: 'A custom automation hub that enriches your CATS candidate records daily from Bright Data and Apollo — current roles, verified contacts, and job-change alerts — so a lean team gets agency-grade data without an agency-grade budget.',
  stackRole: 'Your flexible system of record',
  stackBlurb: 'The hub reads and writes back to CATS through its API. The affordable ATS you chose stays the single source of truth — enrichment slots in around how you already work, no extra tool to pay for.',
  enrich1Blurb: 'Bright Data refreshes current title, employer, tenure, and company size from the open web, so your records show where candidates actually are without an expensive data subscription.',
  enrich2Blurb: 'Apollo finds and verifies emails and direct dials, so outreach connects on the first try instead of bouncing on a contact who moved on long ago.',
  capabilities: [
    'Enrich CATS candidate records daily from Bright Data and Apollo — no manual research eating into a small team’s day.',
    'Flag job changes so you can re-engage candidates the moment they become reachable for a new role.',
    'Verify and refresh emails and phone numbers, dropping bounced contacts before they hurt your sender reputation.',
    'Backfill missing fields — title, employer, location, LinkedIn, company size — across your existing pipeline.',
    'Add company firmographics so you can prioritise candidates and clients by headcount and industry.',
    'Write everything back into CATS with a source and timestamp on each enriched field.',
    'Run on your own Bright Data and Apollo keys, so the data and the spend stay entirely yours and stay predictable.',
  ],
  timeSavings: [
    { task: 'Manual record enrichment', detail: 'A recruiter spends 5–8 minutes per candidate checking LinkedIn, finding a contact, and updating CATS by hand.', saved: '~6 min saved per record — 35 records a day is around 3.5 hours back for a lean team.' },
    { task: 'Spotting job changes', detail: 'Without a dedicated researcher, movers slip past unnoticed until long after the moment to call has passed.', saved: 'A daily ranked list of movers instead of relying on luck.' },
    { task: 'List cleanup before outreach', detail: 'Verifying a few hundred contacts before a campaign is most of an afternoon a small team can ill afford.', saved: 'A pre-verified list ready on day one rather than a half-day of cleanup.' },
  ],
};

export default target;
