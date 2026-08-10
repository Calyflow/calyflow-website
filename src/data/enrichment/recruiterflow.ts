import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'recruiterflow-enrichment', name: 'Recruiterflow', category: 'ats',
  enrich1: 'Coresignal', enrich2: 'Apollo',
  heroTitleLead: 'Fuel your sequences with',
  heroTitleTail: 'fresh data',
  heroSubtitle: 'A custom automation hub that enriches your Recruiterflow records every day from Coresignal and Apollo, current roles and verified contacts that keep your automations and sequences firing on accurate data.',
  stackRole: 'Your agency ATS and CRM',
  stackBlurb: 'The hub reads from and writes back to Recruiterflow, so enriched data lands right where your sequences and automations pull from, no break in your existing workflows.',
  enrich1Blurb: 'Coresignal refreshes current titles, employers, tenure, and company headcount, so your automations target candidates based on where they are now, not a year-old snapshot.',
  enrich2Blurb: 'Apollo fills in and verifies emails and direct dials, so your sequences reach live inboxes and your deliverability holds up over time.',
  capabilities: [
    'Enrich Recruiterflow candidate and company records daily from Coresignal and Apollo, no manual research slowing the desk.',
    'Detect job changes and trigger re-engagement at the right moment instead of months too late.',
    'Verify and refresh emails and phone numbers, pulling dead addresses out of sequences before they damage sender reputation.',
    'Backfill missing fields, current title, employer, location, seniority, LinkedIn, across your existing database.',
    'Top up company records with headcount, industry, and growth signals that flag accounts worth a sequence.',
    'Write everything back into Recruiterflow with a source and timestamp on each enriched field.',
    'Run on your own Coresignal and Apollo keys, so the data and the spend stay entirely yours.',
  ],
  timeSavings: [
    { task: 'Keeping sequences clean', detail: 'A recruiter spends 5–8 minutes per record verifying details and a contact before adding it to a sequence.', saved: '~6 min saved per record, enrolling 50 a day recovers roughly 5 hours.' },
    { task: 'Catching movers for re-engagement', detail: 'Job changes that should trigger outreach usually surface by accident, long after the window closes.', saved: 'A daily, ranked list of movers feeds your automations instead of manual trawling.' },
    { task: 'Protecting deliverability', detail: 'Bounced addresses sitting in active sequences quietly erode your sender reputation.', saved: 'Continuous verification keeps your sequences sending to inboxes that exist.' },
  ],
};

export default target;
