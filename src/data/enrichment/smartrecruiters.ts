import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'smartrecruiters-enrichment', name: 'SmartRecruiters', category: 'ats',
  enrich1: 'Bright Data', enrich2: 'Hunter.io',
  heroTitleLead: 'Enrich', heroTitleTail: 'at enterprise scale',
  heroSubtitle: 'A purpose-built automation hub that enriches your SmartRecruiters candidate records continuously from Bright Data and Hunter.io — current employers, verified work emails, and movement signals across every region you hire in, with zero manual research.',
  stackRole: 'Your enterprise system of record',
  stackBlurb: 'The hub reads from and writes back to SmartRecruiters across all your business units. Your TA suite remains the single source of truth — nothing is copied into a parallel database your recruiters have to reconcile.',
  enrich1Blurb: 'Pulls current title, employer, location, and company headcount at global scale, so a candidate profile sourced two years ago reflects where that person sits today.',
  enrich2Blurb: 'Finds and verifies professional email addresses with a deliverability check, so high-volume outreach from your TA team reaches inboxes instead of bouncing.',
  capabilities: [
    'Enrich SmartRecruiters candidate records continuously from Bright Data and Hunter.io — no recruiter spends time on manual lookups.',
    'Standardise profiles across regions and business units, so a global talent pool reads consistently no matter who sourced it.',
    'Detect movement at scale: flag candidates who changed employer or stepped up a level, ready for your recruiting teams to re-approach.',
    'Verify professional emails and retire undeliverable ones before they damage your domain reputation across high-volume campaigns.',
    'Backfill gaps — current employer, seniority, location, company size — across an existing database of hundreds of thousands of profiles.',
    'Write each enriched field back into SmartRecruiters with a source label and timestamp, so audit and compliance teams can trace every change.',
    'Run on your own Bright Data and Hunter.io keys, so the data, the compliance posture, and the spend stay entirely within your organisation.',
  ],
  timeSavings: [
    { task: 'Manual profile enrichment', detail: 'A sourcer spends 5–8 minutes per profile confirming a current employer, locating an email, and updating SmartRecruiters.', saved: '~6 min saved per profile — across a large TA team, that recovers days of capacity each week.' },
    { task: 'Refreshing a dormant talent pool', detail: 'Re-qualifying a silver-medallist pool before a hiring wave means re-checking thousands of stale profiles by hand.', saved: 'A pool that re-qualifies itself in the background instead of a multi-week manual project.' },
    { task: 'Email validation before a campaign', detail: 'Scrubbing a regional send list for deliverable addresses is a recurring drain on coordinator time.', saved: 'A verified list ready on day one, with bounce-prone addresses already removed.' },
  ],
};

export default target;
