import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'notion-enrichment',
  name: 'Notion',
  category: 'crm',
  enrich1: 'Coresignal',
  enrich2: 'Hunter.io',

  heroTitleLead: 'Turn',
  heroTitleTail: 'into a living CRM',
  heroSubtitle:
    'A custom automation hub that enriches your Notion CRM databases every day from Coresignal and Hunter.io, company properties, verified contact emails, and a nudge when a key contact changes jobs.',

  stackRole: 'Your lightweight client system of record',
  stackBlurb:
    'The hub reads and writes back through the Notion API, updating pages and properties in your existing databases. Notion stays the single source of truth for your lean pipeline.',
  enrich1Blurb:
    'Tops up company properties from Coresignal, headcount, industry, location, domain, and employee growth signals, so a database built by hand stays accurate without manual upkeep.',
  enrich2Blurb:
    'Locates and verifies work emails for your decision-maker contacts with Hunter.io, so the email property on each page is one you can actually send to.',

  capabilities: [
    'Enrich company and contact pages daily across your Notion CRM databases from Coresignal and Hunter.io.',
    'Spot when a contact changes employer and add a flag property so a lean team can follow the relationship over.',
    'Pull headcount and growth signals from Coresignal into a property your team can sort and filter for buying intent.',
    'Verify and refresh contact emails with Hunter.io, tagging unsafe addresses before anyone emails a dead inbox.',
    'Backfill missing properties, industry, employee count, region, and website, across pages you already have.',
    'Write each value back into the matching Notion property with a source tag and timestamp.',
    'Run on your own Coresignal and Hunter.io keys, so a small team keeps full ownership of data and spend.',
  ],

  timeSavings: [
    {
      task: 'Manual page enrichment',
      detail:
        'Researching a company and contact, then updating a Notion page by hand, runs 6–10 minutes each time.',
      saved: '~7 min saved per page, a real gain for a team that maintains its CRM itself.',
    },
    {
      task: 'Catching a contact who switched jobs',
      detail:
        'A relationship goes quiet when your contact moves on and the page keeps their old company and email.',
      saved: 'A weekly flag on every mover, instead of stumbling on it by chance.',
    },
    {
      task: 'Tidying a database before outreach',
      detail:
        'Checking emails across a few hundred Notion pages before a campaign is a long manual session.',
      saved: 'A database of verified contacts ready to work from day one.',
    },
  ],
};

export default target;
