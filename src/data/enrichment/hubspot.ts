import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'hubspot-enrichment',
  name: 'HubSpot',
  category: 'crm',
  enrich1: 'Coresignal',
  enrich2: 'Apollo',

  heroTitleLead: 'Give',
  heroTitleTail: 'fresher data',
  heroSubtitle:
    'A custom automation hub that enriches your HubSpot companies and contacts every day from Coresignal and Apollo — accurate firmographics, verified buyer contacts, and alerts when a champion changes jobs.',

  stackRole: 'Your revenue system of record',
  stackBlurb:
    'The hub reads and writes back to HubSpot via the API, updating standard and custom properties in place. Your CRM stays the single source of truth for the whole revenue team.',
  enrich1Blurb:
    'Keeps company records current with Coresignal — headcount, industry, employee growth, and the roles of the people inside each account — so segmentation and lead scoring run on real numbers.',
  enrich2Blurb:
    'Fills and verifies work emails and direct dials with Apollo, so your sequences and dialers connect with decision-makers instead of bouncing.',

  capabilities: [
    'Enrich HubSpot company and contact records daily from Coresignal and Apollo — no rep data entry.',
    'Detect job changes on your contacts and raise a task when a champion lands at a new account worth pursuing.',
    'Flag company growth and hiring signals from Coresignal as buying triggers, ready for a workflow to action.',
    'Verify and refresh emails and phone numbers, suppressing bounced addresses to protect your sender score.',
    'Backfill missing firmographic properties — industry, employee count, location, domain — across your database.',
    'Write enriched values back into HubSpot properties with a source and timestamp on every field.',
    'Run on your own Coresignal and Apollo keys, keeping the data and the cost entirely under your control.',
  ],

  timeSavings: [
    {
      task: 'Manual lead research',
      detail:
        'A rep spends 5–8 minutes per lead confirming the company, finding a contact, and filling HubSpot properties.',
      saved: '~6 min saved per lead — at 50 a day that is roughly 5 hours back daily.',
    },
    {
      task: 'Spotting champions on the move',
      detail:
        'A buyer who loved your product moves to a new company and your team only hears about it months later.',
      saved: 'A daily ranked list of movers, instead of accidental LinkedIn discoveries.',
    },
    {
      task: 'List hygiene before a sequence',
      detail:
        'Scrubbing a few hundred contacts for valid emails before a campaign is half a day of manual checking.',
      saved: 'A pre-verified contact list on day one, not an afternoon of cleanup.',
    },
  ],
};

export default target;
