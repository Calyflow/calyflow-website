import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'breezyhr-enrichment',
  name: 'BreezyHR',
  category: 'ats',
  enrich1: 'Coresignal',
  enrich2: 'Hunter.io',
  heroTitleLead: 'Move candidates through',
  heroTitleTail: 'on better data',
  heroSubtitle: 'A custom automation hub that enriches your BreezyHR candidates daily from Coresignal and Hunter.io — current roles, verified emails, and job-change alerts — so every card in your pipeline carries the context you need to act on it.',
  stackRole: 'Your visual pipeline',
  stackBlurb: 'The hub reads and writes back to BreezyHR through its API. Your drag-and-drop pipeline stays the place work happens — enriched fields just appear on the candidate cards you already use.',
  enrich1Blurb: 'Coresignal refreshes current title, employer, tenure, and company headcount, so a candidate card tells you where someone is today before you drag them to the next stage.',
  enrich2Blurb: 'Hunter.io finds and verifies email addresses, so the moment you move a candidate forward you already have a deliverable way to reach them.',
  capabilities: [
    'Enrich BreezyHR candidate cards daily from Coresignal and Hunter.io — fresh context on every card with zero manual lookups.',
    'Flag job changes so you can re-open a stalled candidate or re-stage them the moment their situation shifts.',
    'Verify and refresh emails, retiring bounced addresses before they undermine your pipeline outreach.',
    'Backfill missing fields — title, employer, location, LinkedIn, company size — across candidates added before enrichment.',
    'Surface company firmographics on each card so you can prioritise by employer size and industry at a glance.',
    'Write everything straight back into BreezyHR with a source and timestamp on each enriched field.',
    'Run on your own Coresignal and Hunter.io keys, so the data and the spend stay entirely yours.',
  ],
  timeSavings: [
    { task: 'Manual card enrichment', detail: 'A recruiter spends 5–7 minutes per candidate looking up a current role and a working email before moving the card on.', saved: '~6 min saved per card — 30 cards a day is roughly 3 hours back every day.' },
    { task: 'Catching movers in the pipeline', detail: 'Candidates who change jobs mid-process are usually noticed too late, after the stage has gone cold.', saved: 'A daily list of movers instead of stumbling on them by chance.' },
    { task: 'Prepping a stage for outreach', detail: 'Verifying contact details across a stage before a batch of emails takes a good part of an afternoon.', saved: 'A verified stage ready to email on day one rather than after manual checking.' },
  ],
};

export default target;
