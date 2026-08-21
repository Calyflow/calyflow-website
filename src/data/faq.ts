/**
 * Homepage FAQ, shared by the FAQ section, the FAQPage JSON-LD, and
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
      'Calyflow is a set of recruiting agents that run AI workflows on your own models, data, and tools. Instead of chatting with AI in scattered browser tabs, you import a workflow (CV screening, sourcing, outreach), attach your documents, and run it.',
  },
  {
    question: 'Which AI models can I use?',
    answer:
      'Any major model: Claude, ChatGPT, Gemini, the OpenAI and Anthropic APIs, or local models. Calyflow is model-agnostic by design, so you can bring your own AI key and switch providers whenever you want.',
  },
  {
    question: 'Where is my candidate data stored?',
    answer:
      'Your candidate data stays in your own systems: your ATS, CRM, spreadsheets, or databases. Calyflow connects to your data to run workflows but does not own or warehouse it, and you can self-host the entire platform for full control.',
  },
  {
    question: 'Can I self-host Calyflow?',
    answer:
      'Yes. Calyflow can be self-hosted on your own infrastructure for full control over where your data lives. Enterprise teams can also have a private deployment on their own Google Cloud project, deployed by us.',
  },
  {
    question: 'Is Calyflow really free?',
    answer:
      'Yes. Free to start, no credit card, and every new account includes $10 of AI credit. Independent recruiters use Calyflow free forever; agencies and enterprise teams get 30 days free. Beyond the included credit, you pay only your AI provider for the tokens your workflows use, and every run shows its cost.',
  },
  {
    question: 'Is Calyflow GDPR-compliant?',
    answer:
      'Yes. Calyflow is built by an EU-based team with GDPR as a design constraint: your candidate data stays in your own systems, processing is transparent, and the website uses cookieless analytics with no tracking banner.',
  },
  {
    question: 'Do I need my own API key?',
    answer:
      'No. Every new account includes $10 of free credit on the built-in Calyflow key, powered by Claude Sonnet 4.6, so you can run workflows right away. When you want full control over the costs, the provider, and the data-processing relationship, bring your own AI key (Anthropic, OpenAI, Google, or a local model endpoint) with no markup and no middleman on your tokens.',
  },
  {
    question: 'Is Calyflow an ATS replacement?',
    answer:
      'No. Calyflow is the AI workflow layer that works alongside your ATS or CRM. It reads from and writes to the systems you already use, like Recruit CRM, Bullhorn, or Vincere, rather than replacing them.',
  },
];
