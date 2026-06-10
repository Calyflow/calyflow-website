/**
 * Single source of truth for site-wide constants and the canonical entity
 * phrasing. The same product description must appear on the site, in
 * llms.txt, and in the GitHub README so search engines and LLMs converge
 * on one story (WEBSITE_SPEC.md §5.3).
 */
export const SITE = {
  name: 'Calyflow',
  tagline: 'Open-source Recruiting OS',
  /** The ONE canonical, quotable definition. Reuse verbatim everywhere. */
  definition:
    'Calyflow is an open-source recruiting OS that runs AI workflows on your own models, data, and tools.',
  /** Meta description for the homepage (≤155 chars). */
  description:
    'Run AI-powered recruiting workflows — sourcing, screening, outreach — on your own AI, your own data, your own tools. Open source, free to start.',
  url: 'https://calyflow.ai',
  appUrl: 'https://app.calyflow.ai',
  signupUrl: 'https://app.calyflow.ai/sign-up',
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

/** The five launch workflows, shown as one search lifecycle (spec §3.5). */
export const WORKFLOWS = [
  {
    name: 'JD Writer',
    icon: 'document-check',
    input: 'Intake notes',
    output: 'Job description',
    description:
      'Turn raw intake-call notes into a structured job description with must-haves, nice-to-haves, and screening criteria your whole team agrees on.',
  },
  {
    name: 'Sourcing Map',
    icon: 'magnet',
    input: 'Job description',
    output: 'Boolean strings + channels',
    description:
      'Go from JD to a complete sourcing map in one run: target companies, talent pools, and ready-to-paste boolean search strings.',
  },
  {
    name: 'Outreach Writer',
    icon: 'envelope',
    input: 'Sourcing map',
    output: 'Personalized sequences',
    description:
      'Draft personalized outreach sequences grounded in the role and each candidate’s background — not generic spam.',
  },
  {
    name: 'CV Screener',
    icon: 'scorecard',
    input: 'CVs + criteria',
    output: 'Evidence-backed report',
    description:
      'Screen CVs against the JD with evidence quotes for every claim — no hallucinated qualifications, every must-have backed by a citation from the CV.',
  },
  {
    name: 'Submission Pack',
    icon: 'rocket',
    input: 'Screening reports',
    output: 'Client-ready summary',
    description:
      'Assemble screened candidates into a client-ready submission pack: summaries, evidence, and a clear recommendation.',
  },
] as const;
