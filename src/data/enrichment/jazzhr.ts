import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'jazzhr-enrichment',
  name: 'JazzHR',
  category: 'ats',
  enrich1: 'Bright Data',
  enrich2: 'Apollo',
  heroTitleLead: 'Give your small team in',
  heroTitleTail: 'an enrichment engine',
  heroSubtitle: 'A custom automation hub that enriches your JazzHR candidates every day from Bright Data and Apollo, the kind of research firepower a big talent team takes for granted, sized and priced for a lean in-house operation.',
  stackRole: 'Your hiring system of record',
  stackBlurb: 'The hub reads and writes back to JazzHR. Your applicants, jobs, and workflow stay exactly where they are, no new platform to learn, no data to migrate.',
  enrich1Blurb: 'Refreshes current employer, title, and tenure from Bright Data, so you can see who is actually open to a move without paying for a full sourcing suite.',
  enrich2Blurb: 'Finds and verifies emails and phone numbers through Apollo, so the one recruiter you have spends time talking to people, not hunting for their contact details.',
  capabilities: [
    'Enrich JazzHR candidate records daily from Bright Data and Apollo, no manual lookups for a team that has no time to spare.',
    'Spot candidates who have changed jobs since they last applied, so you know who is worth a fresh conversation.',
    'Verify emails and phone numbers and drop bad ones, keeping outreach out of spam folders on a limited sending volume.',
    'Backfill thin applicant records, current title, employer, location, LinkedIn, company size, so even old applications stay useful.',
    'Add firmographic context on candidates’ employers, like headcount and industry, without a separate data subscription.',
    'Write enriched data straight back into JazzHR with a source and timestamp, no copy-paste between tabs.',
    'Run on your own Bright Data and Apollo keys, so a small business keeps full control of its data and a predictable bill.',
  ],
  timeSavings: [
    { task: 'Researching one applicant', detail: 'A solo recruiter spends 5–8 minutes per applicant verifying where they work and tracking down a working email.', saved: '~6 min saved per applicant, for a one-person desk, that is hours back every week.' },
    { task: 'Reviving an old applicant pool', detail: 'Past applicants go stale fast; checking who is still relevant for a new opening is tedious manual work.', saved: 'A refreshed, contactable shortlist without the afternoon of digging.' },
    { task: 'Prepping a small outreach push', detail: 'Even a list of fifty candidates needs email verification before a campaign, which eats a busy morning.', saved: 'A clean, verified list ready to send, not a pre-flight chore.' },
  ],
};

export default target;
