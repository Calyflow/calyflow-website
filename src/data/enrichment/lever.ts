import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'lever-enrichment',
  name: 'Lever',
  category: 'ats',
  enrich1: 'Bright Data',
  enrich2: 'Apollo',
  heroTitleLead: 'Nurture every',
  heroTitleTail: 'relationship with live data',
  heroSubtitle: 'A custom automation hub that enriches your Lever candidates every day from Bright Data and Apollo — keeping the long-term relationships your nurture flows depend on accurate, current, and ready for the next touch.',
  stackRole: 'Your candidate-relationship system of record',
  stackBlurb: 'The hub reads and writes back through the Lever API. Your nurture campaigns, stages, and opportunity history stay intact — enriched data flows in as fields, not a side system.',
  enrich1Blurb: 'Refreshes current employer, title, and tenure from Bright Data, so a candidate you have nurtured for months is targeted on who they are today.',
  enrich2Blurb: 'Adds and verifies emails and direct dials through Apollo, so nurture sequences reach a real inbox instead of stalling on a stale address.',
  capabilities: [
    'Enrich Lever candidate records daily from Bright Data and Apollo, keeping every nurtured contact accurate without manual upkeep.',
    'Trigger timely outreach: flag candidates who change roles or companies so a nurture sequence can fire at the right moment.',
    'Verify and refresh emails and phone numbers, retiring dead addresses before they erode the deliverability of your sequences.',
    'Backfill missing fields across long-running pipelines — current title, employer, location, LinkedIn, company size.',
    'Add firmographic context on candidates’ employers — headcount, industry, growth signals — to prioritize who to nurture next.',
    'Write each enriched field back into Lever with a source and timestamp, so your campaigns run on data you can trust.',
    'Run on your own Bright Data and Apollo keys, keeping the data and the spend entirely within your talent team.',
  ],
  timeSavings: [
    { task: 'Refreshing a candidate before nurture', detail: 'A recruiter spends 5–8 minutes per contact confirming current role and a verified email before adding them to a sequence.', saved: '~6 min saved per contact — across a nurture list, hours returned each week.' },
    { task: 'Timing re-engagement', detail: 'Knowing the right moment to reach out usually means manually scanning for who has moved. The hub surfaces movers daily.', saved: 'Well-timed touches from a ranked list, not from periodic manual sweeps.' },
    { task: 'Keeping a nurture pool deliverable', detail: 'Long sequences quietly accumulate dead emails that drag down open rates until someone scrubs the list by hand.', saved: 'A continuously verified pool, instead of a reactive cleanup after deliverability drops.' },
  ],
};

export default target;
