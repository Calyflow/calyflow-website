import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'attio-enrichment',
  name: 'Attio',
  category: 'crm',
  enrich1: 'Bright Data',
  enrich2: 'Apollo',

  heroTitleLead: 'Let',
  heroTitleTail: 'enrich itself',
  heroSubtitle:
    'A custom automation hub that feeds your Attio objects every day from Bright Data and Apollo — firmographics, decision-maker contacts, and champion-moved alerts mapped to whatever data model you have built.',

  stackRole: 'Your flexible client system of record',
  stackBlurb:
    'The hub reads and writes back to Attio through its API, respecting your custom objects and attributes. Attio stays the single source of truth — nothing is duplicated into a side tool.',
  enrich1Blurb:
    'Pulls live company firmographics from Bright Data — headcount, industry, location, domain, and funding or growth signals — and maps each field onto your custom Attio attributes.',
  enrich2Blurb:
    'Uses Apollo to find and verify work emails and direct dials for the decision-makers on your accounts, so first-touch outreach reaches a real inbox.',

  capabilities: [
    'Enrich company and person records daily across your custom Attio objects from Bright Data and Apollo.',
    'Track champions: flag when a key contact changes companies so you can re-open the relationship from their new seat.',
    'Surface funding rounds, hiring spikes, and headcount jumps as buying triggers on the matching account.',
    'Verify and refresh decision-maker emails and phone numbers, clearing stale contacts before they cost you a sequence.',
    'Backfill firmographics — industry, employee count, HQ location, and domain — onto whichever attributes your model uses.',
    'Write every change back to Attio with a source label and timestamp, so you can see exactly where each value came from.',
    'Run on your own Bright Data and Apollo keys — the data, the mapping, and the spend all stay yours.',
  ],

  timeSavings: [
    {
      task: 'Manual account research',
      detail:
        'A rep spends 6–10 minutes per account piecing together headcount, industry, and a contact before logging it in Attio.',
      saved: '~7 min saved per account — 40 accounts a day is most of a working day returned.',
    },
    {
      task: 'Catching a champion who moved',
      detail:
        'A warm relationship goes cold when your contact quietly switches companies and no one notices for a quarter.',
      saved: 'A same-week alert on every mover, instead of finding out from a bounced email.',
    },
    {
      task: 'Prepping a list for an ABM push',
      detail:
        'Cleaning and completing a target account list before a campaign eats an analyst afternoon.',
      saved: 'A verified, fully-mapped account list ready on day one.',
    },
  ],
};

export default target;
