/**
 * Single source of truth for site-wide constants and the canonical entity
 * phrasing. The same product description must appear on the site, in
 * llms.txt, and in the GitHub README so search engines and LLMs converge
 * on one story (WEBSITE_SPEC.md §5.3).
 */
export const SITE = {
  name: 'Calyflow',
  tagline: 'Open-source Recruiting Agents',
  /** The ONE canonical, quotable definition. Reuse verbatim everywhere. */
  definition:
    'Calyflow is a set of open-source recruiting agents that run AI workflows on your own models, data, and tools.',
  /** Meta description for the homepage (≤155 chars). */
  description:
    'Run AI-powered sourcing, screening, and outreach workflows on your own AI, your own data, your own tools. Open source, free to start.',
  url: 'https://calyflow.ai',
  appUrl: 'https://app.calyflow.ai',
  signupUrl: 'https://app.calyflow.ai/sign-up',
  /** Google Calendar booking link for custom automation-hub discovery calls. */
  bookCallUrl: 'https://calendar.app.google/gfGaewL9jx9wf7Xh7',
  githubUrl: 'https://github.com/Calyflow/calyflow-app',
  githubRepo: 'Calyflow/calyflow-app',
  contactEmail: 'hello@calyflow.ai',
  productLicense: 'AGPL-3.0',
  locale: 'en',
  ogImage: '/og/default.png',
} as const;

export const AUTHOR = {
  name: 'Michal Juhas',
  /** TODO: replace placeholder avatar with a real photo before launch. */
  avatar: '/images/michal-avatar.svg',
  linkedin: 'https://www.linkedin.com/in/michaljuhas',
  bio: 'Founder of Calyflow. Helps recruiting teams climb the AI Adoption Ladder — from chatting with AI to running repeatable AI workflows.',
} as const;

/** The launch workflows, shown as one search lifecycle (spec §3.5). Names,
 * stages, and descriptions mirror the in-app Workflow Library. */
export const WORKFLOWS = [
  {
    name: 'Intake-to-JD Builder',
    stage: 'intake',
    icon: 'document-check',
    input: 'Intake notes',
    output: 'JD + clarifying questions',
    description:
      'Turn messy intake notes from a hiring-manager call into a structured job description plus a list of clarifying questions to send back to the client. The JD it produces feeds every other workflow in the search.',
  },
  {
    name: 'Job Requirement Analysis',
    stage: 'intake',
    icon: 'workflow-nodes',
    input: 'Hiring-manager notes',
    output: '18-dimension breakdown',
    description:
      'Turn raw hiring-manager notes into a complete 18-dimension requirement breakdown: technical stack, seniority, culture fit, compensation, hiring process and more. Every dimension is either extracted or marked "TO ASK", so nothing is missed before sourcing.',
  },
  {
    name: 'Candidate ICP Builder',
    stage: 'icp',
    icon: 'target',
    input: 'Job description',
    output: 'Weighted scoring rubric',
    description:
      'Turn the job description into a structured Ideal Candidate Profile with a weighted scoring rubric: must-have, important, and nice-to-have criteria, each with a concrete "how to evaluate" cue. The rubric that drives consistent screening.',
  },
  {
    name: 'Sourcing Map from JD',
    stage: 'sourcing',
    icon: 'magnet',
    input: 'Job description',
    output: 'Phased sourcing strategy',
    description:
      'Turn the job description into a phased sourcing strategy: five search steps from exact-match booleans to creative passive sourcing, plus a full channel checklist tailored to this exact role and market.',
  },
  {
    name: 'Job Selling Pitch',
    stage: 'selling',
    icon: 'ai-spark',
    input: 'Job description',
    output: 'Candidate-magnet job post',
    description:
      'Turn the job description into a candidate magnet: a selling-points analysis, a feature-to-benefit reframe, a rewritten job post that leads with what excites candidates, and ready-to-use outreach hooks.',
  },
  {
    name: 'Outreach Writer',
    stage: 'outreach',
    icon: 'envelope',
    input: 'Candidate profile',
    output: 'Personalized sequences',
    description:
      'Paste a candidate profile and get personalized LinkedIn, InMail, and email outreach with A/B variants and a two-step follow-up sequence. Writes in your voice and references concrete details, never flattery or buzzwords.',
  },
  {
    name: 'CV Screener',
    stage: 'screening',
    icon: 'scorecard',
    input: 'CVs + JD',
    output: 'Evidence-based scorecard',
    description:
      'Screen CVs against the job description and get an evidence-based scorecard: fit score, must-haves table with CV quotes as proof, red flags, and five screening-call questions specific to this candidate.',
  },
  {
    name: 'Candidate Submission Pack',
    stage: 'submission',
    icon: 'rocket',
    input: 'CV + screening report',
    output: 'Client-ready presentation',
    description:
      'Combine a CV with its screening report into a polished, client-ready candidate presentation in your tone of voice, ready to send to the hiring manager.',
  },
] as const;
