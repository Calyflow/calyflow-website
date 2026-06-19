import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'monday-com-enrichment',
  name: 'monday.com',
  category: 'crm',
  enrich1: 'Bright Data',
  enrich2: 'Hunter.io',

  heroTitleLead: 'Keep your',
  heroTitleTail: 'boards complete',
  heroSubtitle:
    'A custom automation hub that fills your monday.com CRM boards every day from Bright Data and Hunter.io — company firmographics, verified contact emails, and a heads-up when a key contact moves on.',

  stackRole: 'Your ops-driven client system of record',
  stackBlurb:
    'The hub reads and writes back through the monday.com API, updating the columns on your CRM boards in place. Your work OS stays the single source of truth — no parallel spreadsheet.',
  enrich1Blurb:
    'Populates company columns from Bright Data — headcount, industry, region, domain, and growth or funding signals — so every account item carries the context your team needs.',
  enrich2Blurb:
    'Finds and verifies work emails for decision-makers with Hunter.io, confirming deliverability before an email column ever feeds an automation.',

  capabilities: [
    'Enrich account and contact items daily across your monday.com CRM boards from Bright Data and Hunter.io.',
    'Flag when a contact leaves a company so your team can update the board and chase the relationship to its new home.',
    'Surface hiring and funding signals from Bright Data as buying triggers in a status column your automations can read.',
    'Verify and refresh contact emails with Hunter.io, marking risky addresses before they reach an outbound step.',
    'Backfill firmographic columns — industry, employee count, location, and website — across existing items.',
    'Write everything back into the right board columns with a source note and timestamp for full traceability.',
    'Run on your own Bright Data and Hunter.io keys, so the data and the spend remain entirely yours.',
  ],

  timeSavings: [
    {
      task: 'Manual account research',
      detail:
        'Filling in company size, industry, and a contact email on each board item takes 6–9 minutes of digging.',
      saved: '~7 min saved per item — boards stay complete without anyone chasing blanks.',
    },
    {
      task: 'Noticing a contact who left',
      detail:
        'A contact column quietly goes stale when the person changes employer and the item sits untouched.',
      saved: 'An automatic flag the week it happens, instead of a dead email weeks later.',
    },
    {
      task: 'Cleaning a board before outreach',
      detail:
        'Verifying emails across a board of a few hundred items before a campaign is an afternoon of manual work.',
      saved: 'A board of verified contacts ready to sequence on day one.',
    },
  ],
};

export default target;
