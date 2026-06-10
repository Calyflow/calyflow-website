/**
 * Homepage FAQ — shared by the FAQ section, the FAQPage JSON-LD, and
 * llms-full.txt so the answers stay identical everywhere.
 * Style: the first sentence IS the answer (answer-first writing).
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: FaqItem[] = [
  {
    question: 'What is Calyflow?',
    answer:
      'Calyflow is an open-source recruiting OS that runs AI workflows on your own models, data, and tools. Instead of chatting with AI in scattered browser tabs, you import a workflow — CV screening, sourcing, outreach — attach your documents, and run it.',
  },
  {
    question: 'Which AI models can I use?',
    answer:
      'Any major model: Claude, ChatGPT, Gemini, the OpenAI and Anthropic APIs, or local models. Calyflow is model-agnostic by design — you bring your own AI key and switch providers whenever you want.',
  },
  {
    question: 'Where is my candidate data stored?',
    answer:
      'Your candidate data stays in your own systems — your ATS, CRM, spreadsheets, or databases. Calyflow connects to your data to run workflows but does not own or warehouse it, and you can self-host the entire platform for full control.',
  },
  {
    question: 'Can I self-host Calyflow?',
    answer:
      'Yes. Calyflow is open source under AGPL-3.0, so you can self-host it on your own infrastructure. Enterprise teams can also have a private deployment on their own Google Cloud project, deployed by us.',
  },
  {
    question: 'Is Calyflow really free?',
    answer:
      'Yes — free to start, no credit card. Independent recruiters use Calyflow free forever with their own AI key; agencies and enterprise teams get 30 days free. You only pay your AI provider for the tokens your workflows use, and every run shows its cost.',
  },
  {
    question: 'Is Calyflow GDPR-compliant?',
    answer:
      'Yes. Calyflow is built by an EU-based team with GDPR as a design constraint: your candidate data stays in your own systems, processing is transparent, and the website uses cookieless analytics with no tracking banner.',
  },
  {
    question: 'Do I need my own API key?',
    answer:
      'Yes — that is the point. You bring your own AI key (Anthropic, OpenAI, Google, or a local model endpoint), so you control the costs, the provider, and the data-processing relationship. No markup, no middleman on your tokens.',
  },
  {
    question: 'Is Calyflow an ATS replacement?',
    answer:
      'No. Calyflow is the AI workflow layer that works alongside your ATS or CRM — it reads from and writes to the systems you already use, like Recruit CRM, Bullhorn, or Vincere, rather than replacing them.',
  },
];
