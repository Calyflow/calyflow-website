import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'zoho-recruit-enrichment', name: 'Zoho Recruit', category: 'ats',
  enrich1: 'Coresignal', enrich2: 'Hunter.io',
  heroTitleLead: 'Enrich', heroTitleTail: 'without the overhead',
  heroSubtitle: 'A cost-conscious automation hub that enriches your Zoho Recruit candidate records from Coresignal and Hunter.io, current roles, verified emails, and job-change signals, giving you premium data quality without a premium tooling bill.',
  stackRole: 'Your system of record in the Zoho suite',
  stackBlurb: 'The hub reads and writes back to Zoho Recruit, sitting neatly alongside the rest of your Zoho stack. Your ATS stays the single source of truth, no extra platform to license or maintain.',
  enrich1Blurb: 'Refreshes current title, employer, tenure, and company headcount, so your Zoho Recruit records stay accurate without anyone paying for an expensive all-in-one enrichment add-on.',
  enrich2Blurb: 'Finds and verifies email addresses with a confidence score, so outreach reaches real inboxes and your team isn\'t paying to send into dead ends.',
  capabilities: [
    'Enrich Zoho Recruit candidate records automatically from Coresignal and Hunter.io, accurate data without the manual hours or the heavyweight price tag.',
    'Keep your existing Zoho database current rather than buying a separate enrichment platform on top of your ATS.',
    'Detect job changes and flag candidates ready to re-engage, so corporate HR and agency desks both work from fresh information.',
    'Verify emails and prune undeliverable ones, protecting your sender reputation and avoiding wasted send credits.',
    'Backfill missing fields, current employer, title, location, LinkedIn, company size, across your whole Zoho Recruit database.',
    'Write each enriched field back into Zoho Recruit with a source and timestamp, so the record history stays clean and auditable.',
    'Run on your own Coresignal and Hunter.io keys, so you control the data, the costs, and exactly what you spend.',
  ],
  timeSavings: [
    { task: 'Manual record enrichment', detail: 'A recruiter spends 5–8 minutes per record checking a current role, finding an email, and updating Zoho Recruit.', saved: '~6 min saved per record, at 40 records a day, that\'s about four hours returned daily.' },
    { task: 'Avoiding a costly add-on', detail: 'Bolting a premium enrichment subscription onto every seat adds up fast for a cost-conscious team.', saved: 'Comparable data quality on usage-based provider keys instead of a fixed per-seat fee.' },
    { task: 'Verifying a send list', detail: 'Checking a few hundred contacts for valid emails before a campaign is an afternoon of tedious work.', saved: 'A pre-verified list on day one, with wasted send credits avoided.' },
  ],
};

export default target;
