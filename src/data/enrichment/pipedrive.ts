import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'pipedrive-enrichment',
  name: 'Pipedrive',
  category: 'crm',
  enrich1: 'Bright Data',
  enrich2: 'Apollo',

  heroTitleLead: 'Move',
  heroTitleTail: 'deals on better data',
  heroSubtitle:
    'A custom automation hub that enriches your Pipedrive organizations and people every day from Bright Data and Apollo, firmographics, verified contacts, and champion-moved alerts that keep your pipeline honest.',

  stackRole: 'Your deal-focused client system of record',
  stackBlurb:
    'The hub reads and writes back through the Pipedrive API, updating organization and person fields in place. Pipedrive stays the single source of truth for every deal stage.',
  enrich1Blurb:
    'Refreshes organization fields from Bright Data, headcount, industry, location, domain, and growth or funding signals, so deal qualification rests on current firmographics.',
  enrich2Blurb:
    'Finds and verifies work emails and direct dials for decision-makers with Apollo, so reps reach the buyer instead of chasing a number that no longer connects.',

  capabilities: [
    'Enrich Pipedrive organizations and people daily from Bright Data and Apollo, reps focus on selling, not data entry.',
    'Detect when a contact changes companies and raise an activity so a champion who moved becomes a fresh opportunity.',
    'Surface funding and hiring signals from Bright Data as buying triggers on the matching organization.',
    'Verify and refresh person emails and phone numbers, retiring dead contacts before they stall a deal.',
    'Backfill firmographic fields, industry, employee count, location, and website, across organizations you already track.',
    'Write enriched values back into Pipedrive fields with a clear source and timestamp on each.',
    'Run on your own Bright Data and Apollo keys, so the data and the spend stay entirely with your team.',
  ],

  timeSavings: [
    {
      task: 'Manual deal research',
      detail:
        'Qualifying an organization and finding a contact before logging it in Pipedrive takes 5–8 minutes per deal.',
      saved: '~6 min saved per deal, at 40 a day that is most of a rep afternoon back.',
    },
    {
      task: 'Re-opening a champion who moved',
      detail:
        'A buyer who closed with you before changes companies, and no one notices the warm lead at their new desk.',
      saved: 'A same-week alert on every mover, turning quiet contacts into new deals.',
    },
    {
      task: 'Cleaning a list before outreach',
      detail:
        'Verifying emails across a few hundred people before a prospecting push is half a day of manual work.',
      saved: 'A pre-verified contact list ready to dial and email on day one.',
    },
  ],
};

export default target;
