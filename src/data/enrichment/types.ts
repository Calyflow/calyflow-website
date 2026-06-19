/**
 * One entry per ATS / CRM enrichment landing page. Each system gets its own
 * data file under this folder exporting a default `EnrichmentTarget`; the
 * page template (`src/pages/[slug].astro`) and the overview page
 * (`src/pages/ats-crm-enrichment.astro`) pick them all up via import.meta.glob.
 *
 * Keep copy tailored to the system: an ATS tracks CANDIDATES, a CRM tracks
 * CLIENTS. The two enrichment providers are one of Coresignal / Bright Data
 * (workforce + firmographic data) plus one of Apollo / Hunter.io (contact data).
 */
export type EnrichCategory = 'ats' | 'crm';
export type DataProvider = 'Coresignal' | 'Bright Data';
export type ContactProvider = 'Apollo' | 'Hunter.io';

export interface EnrichmentTarget {
  /** URL slug, always `<system>-enrichment`, e.g. "greenhouse-enrichment". */
  slug: string;
  /** Display name exactly as the connector is branded, e.g. "Greenhouse". */
  name: string;
  category: EnrichCategory;
  /** First enrichment source: workforce + firmographic data. */
  enrich1: DataProvider;
  /** Second enrichment source: verified contact data. */
  enrich2: ContactProvider;

  /** Hero headline wraps a gradient system name: `{lead} {name} {tail}`. */
  heroTitleLead: string;
  heroTitleTail: string;
  /** One-sentence hero subtitle, tailored to the system. */
  heroSubtitle: string;

  /** "Role" line + blurb for the system's own card in the stack section. */
  stackRole: string;
  stackBlurb: string;
  /** Tailored blurbs for the two provider cards. */
  enrich1Blurb: string;
  enrich2Blurb: string;

  /** 6–7 capability bullets, written for this system's workflow. */
  capabilities: string[];
  /** Exactly 3 time-saving cards. */
  timeSavings: { task: string; detail: string; saved: string }[];
}
