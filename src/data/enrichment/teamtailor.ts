import type { EnrichmentTarget } from './types';

const target: EnrichmentTarget = {
  slug: 'teamtailor-enrichment', name: 'Teamtailor', category: 'ats',
  enrich1: 'Coresignal', enrich2: 'Apollo',
  heroTitleLead: 'Know your', heroTitleTail: 'candidates better',
  heroSubtitle: 'A custom automation hub that quietly enriches your Teamtailor candidate records from Coresignal and Apollo — accurate roles, reliable contact details, and job-change signals — so every applicant who lands on your career site is matched against context, not guesswork.',
  stackRole: 'Your candidate-experience hub',
  stackBlurb: 'The hub enriches and writes back to Teamtailor without disturbing the candidate-facing experience. Your branded ATS stays the single source of truth — recruiters see richer profiles, applicants see the same polished journey.',
  enrich1Blurb: 'Refreshes current role, employer, tenure, and company size, so a candidate who applied through your career site is profiled accurately the moment they enter your pipeline.',
  enrich2Blurb: 'Adds and verifies emails and direct dials, so when employer brand turns a passive visitor into a prospect, your team can actually reach them.',
  capabilities: [
    'Enrich Teamtailor candidate records automatically from Coresignal and Apollo — every applicant and sourced lead arrives with context attached.',
    'Give recruiters a fuller picture at first glance, so a strong inbound applicant is never overlooked because the profile looked thin.',
    'Detect job changes in your nurture pool and resurface warm candidates the moment their situation shifts.',
    'Verify and refresh emails and phone numbers, keeping your talent-community outreach landing instead of bouncing.',
    'Backfill missing fields — current title, employer, location, LinkedIn, company size — across past applicants and silver medallists.',
    'Write enriched data back into Teamtailor with a clear source and timestamp, so your team trusts what they see in each profile.',
    'Run on your own Coresignal and Apollo keys, so the candidate data and the spend stay entirely yours.',
  ],
  timeSavings: [
    { task: 'Researching inbound applicants', detail: 'A recruiter spends 4–6 minutes per applicant checking LinkedIn and chasing a contact detail before deciding who to prioritise.', saved: '~5 min saved per applicant — across a busy career-site funnel, that adds up to hours back each day.' },
    { task: 'Re-engaging the talent community', detail: 'Spotting which nurtured candidates have moved roles is usually luck, found long after the window has closed.', saved: 'A daily, ranked list of movers instead of hoping a recruiter happens to notice.' },
    { task: 'Cleaning a list before a brand campaign', detail: 'Verifying a few hundred community contacts before an employer-brand send is an afternoon of manual checking.', saved: 'A pre-verified audience ready to receive your next campaign, not a half-day of cleanup.' },
  ],
};

export default target;
