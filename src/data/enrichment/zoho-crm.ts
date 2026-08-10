import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'zoho-crm-enrichment',
  name: 'Zoho CRM',
  category: 'crm',
  enrich1: 'Coresignal',
  enrich2: 'Apollo',

  heroTitleLead: 'Enrich',
  heroTitleTail: 'without the overhead',
  heroSubtitle:
    'A custom automation hub that updates your Zoho CRM accounts and contacts every day from Coresignal and Apollo, current firmographics, verified decision-maker contacts, and alerts when a champion changes jobs.',

  stackRole: 'Your full-stack client system of record',
  stackBlurb:
    'The hub reads and writes back through the Zoho CRM API, updating standard and custom fields in place. Zoho stays the single source of truth across your whole sales process.',
  enrich1Blurb:
    'Keeps account records current with Coresignal, headcount, industry, employee growth, and contact roles inside the company, so territory and scoring rules act on real data.',
  enrich2Blurb:
    'Fills and verifies work emails and direct dials with Apollo, so outreach reaches decision-makers rather than bouncing on outdated details.',

  capabilities: [
    'Enrich Zoho CRM account and contact records daily from Coresignal and Apollo, no manual upkeep per record.',
    'Detect job changes and create a task when a champion lands at a new account worth re-engaging.',
    'Pull company growth and hiring signals from Coresignal into fields your workflows can treat as buying triggers.',
    'Verify and refresh emails and phone numbers, suppressing bounced contacts to protect deliverability.',
    'Backfill firmographic fields, industry, employee count, location, and domain, across your existing records.',
    'Write enriched values back into Zoho CRM fields with a source and timestamp on each one.',
    'Run on your own Coresignal and Apollo keys, keeping a cost-conscious stack with full ownership of data and spend.',
  ],

  timeSavings: [
    {
      task: 'Manual account research',
      detail:
        'A rep spends 5–8 minutes per account confirming firmographics and a contact before updating Zoho CRM.',
      saved: '~6 min saved per account, at 50 a day that is roughly 5 hours back daily.',
    },
    {
      task: 'Tracking a champion who moved',
      detail:
        'A loyal buyer changes companies and the warm relationship goes unworked for an entire quarter.',
      saved: 'A daily ranked list of movers, instead of finding out far too late.',
    },
    {
      task: 'List cleanup before a campaign',
      detail:
        'Scrubbing a few hundred contacts for valid emails ahead of an outreach push is an afternoon of effort.',
      saved: 'A pre-verified list ready on day one, not half a day of manual checking.',
    },
  ],
};

export default target;
