import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'manatal-enrichment', name: 'Manatal', category: 'ats',
  enrich1: 'Bright Data', enrich2: 'Hunter.io',
  heroTitleLead: 'Score',
  heroTitleTail: 'candidates on better data',
  heroSubtitle: 'A custom automation hub that refreshes your Manatal records every day from Bright Data and Hunter.io — accurate profiles and verified emails that make candidate scoring and shortlisting actually reliable.',
  stackRole: 'Your affordable ATS core',
  stackBlurb: 'The hub writes straight back into Manatal, so richer data reaches your scoring engine without adding another paid tool to the stack.',
  enrich1Blurb: 'Bright Data refreshes current titles, employers, tenure, and company size at scale, so Manatal scores candidates against an up-to-date picture rather than a stale import.',
  enrich2Blurb: 'Hunter.io finds and verifies professional emails, so outreach reaches candidates directly instead of bouncing and skewing your response rates.',
  capabilities: [
    'Enrich Manatal candidate and company records daily from Bright Data and Hunter.io — no manual research per profile.',
    'Feed cleaner data into candidate scoring so your AI recommendations rank on facts that are current.',
    'Verify and refresh emails, retiring undeliverable addresses before they waste outreach and hurt your domain.',
    'Backfill gaps — current role, employer, location, seniority, LinkedIn — across candidates already in Manatal.',
    'Top up company records with headcount, industry, and growth signals worth flagging to clients.',
    'Write every change back into Manatal with a source and timestamp, so the data trail stays auditable.',
    'Run on your own Bright Data and Hunter.io keys, keeping the data and the budget firmly yours.',
  ],
  timeSavings: [
    { task: 'Manual profile updates', detail: 'A recruiter spends 4–7 minutes per candidate checking their current role and tracking down an email before scoring.', saved: '~5 min saved per candidate — meaningful relief on a high-volume desk.' },
    { task: 'Trusting candidate scores', detail: 'Scores built on outdated profiles get second-guessed and re-checked by hand.', saved: 'Fresh inputs mean scores you can act on without re-verifying each one.' },
    { task: 'Email cleanup before outreach', detail: 'Scrubbing a candidate batch for valid emails ahead of a campaign eats an afternoon.', saved: 'A verified list ready on day one, not a half-day of manual checks.' },
  ],
};

export default target;
