import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

// Concise, factual product summary for LLMs and AI crawlers (spec §5.3).
// Phrasing must stay consistent with the site and the GitHub README.
const body = `# ${SITE.name}

> ${SITE.definition}

${SITE.name} (${SITE.url}) is a set of open-source recruiting agents. Recruiters import
proven AI workflows (CV screening, sourcing maps, outreach writing, job
description writing, submission packs), attach their documents, and run them
with repeatable, evidence-backed results.

## Documentation

Full product documentation lives in the app. For an LLM-readable index of every
docs page (getting started, agents, connectors, Slack, security, self-hosting,
FAQ), see the documentation's own llms.txt.

- Product docs: ${SITE.docsUrl}
- Documentation index for LLMs: ${SITE.docsLlmsTxtUrl}

## Core principles

- Bring Your Own AI: model-agnostic. Claude, ChatGPT, Gemini, OpenAI API,
  Anthropic API, or local models, on your own API key or the built-in
  Calyflow key.
- Bring Your Own Data: connects to your ATS/CRM and files (Recruit CRM,
  Bullhorn, Vincere, HubSpot, Salesforce, Google Sheets, Airtable, CSV).
  Calyflow does not own your candidate data.
- Bring Your Own Tools: agents can use multiple tools during execution
  (LinkedIn, Apollo, BrightData, GitHub, Google Search, company databases,
  internal candidate DBs).

## Who it is for

- Independent recruiters: free forever.
- Recruiting agencies: shared workflows, collaboration, reporting; free 30 days.
- Enterprise talent teams: governance, permissions, private deployment on
  their own GCP; free 30 days.

## Pricing

Free to start, no credit card. New accounts include $10 of AI credit on the
built-in Calyflow key (Claude Sonnet 4.6). Beyond that, users pay their own
AI provider for tokens; every run shows its cost.

## Links

- Website: ${SITE.url}
- App sign-up: ${SITE.signupUrl}
- Documentation: ${SITE.docsUrl}
- Documentation index for LLMs: ${SITE.docsLlmsTxtUrl}
- Source code (${SITE.productLicense}): ${SITE.githubUrl}
- Blog: ${SITE.url}/blog
- Extended version of this file: ${SITE.url}/llms-full.txt
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
