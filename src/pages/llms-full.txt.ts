import type { APIRoute } from 'astro';
import { SITE, WORKFLOWS } from '../data/site';
import { FAQ } from '../data/faq';

// Extended LLM-facing description: adds the workflow catalog and the full
// FAQ answers, generated from the same data the homepage renders.
const workflows = WORKFLOWS.map(
  (wf, i) => `${i + 1}. ${wf.name} (${wf.input} → ${wf.output}): ${wf.description}`
).join('\n');

const faq = FAQ.map((item) => `### ${item.question}\n\n${item.answer}`).join('\n\n');

const body = `# ${SITE.name} — full reference

> ${SITE.definition}

${SITE.name} (${SITE.url}) is an open-source recruiting OS. Instead of chatting
with AI in scattered browser tabs, recruiters import a workflow, attach their
documents (job description, intake notes, CVs), and run it, with repeatable,
evidence-backed results and a visible cost per run.

## Core principles

- Bring Your Own AI: model-agnostic. Claude, ChatGPT, Gemini, OpenAI API,
  Anthropic API, or local models, on your own API key or the built-in
  Calyflow key ($10 of free credit for new accounts).
- Bring Your Own Data: connects to your ATS/CRM and files (Recruit CRM,
  Bullhorn, Vincere, HubSpot, Salesforce, Google Sheets, Airtable, CSV).
  Calyflow does not own your candidate data.
- Bring Your Own Tools: agents can use multiple tools during execution
  (LinkedIn, Apollo, BrightData, GitHub, Google Search, company databases,
  internal candidate DBs).

## The launch workflows (one search lifecycle)

${workflows}

## Frequently asked questions

${faq}

## Links

- Website: ${SITE.url}
- App sign-up: ${SITE.signupUrl}
- Source code (${SITE.productLicense}): ${SITE.githubUrl}
- Blog: ${SITE.url}/blog
- RSS: ${SITE.url}/rss.xml
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
