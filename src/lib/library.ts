import snapshot from '../data/library.json';
import { SITE } from '../data/site';

/** A connector category an agent can use, with the concrete connectors in it. */
export interface ConnectorGroup {
  category: string;
  label: string;
  connectors: string[];
}

/** Documents an agent consumes, by human-facing label (e.g. "Job description"). */
export interface DocumentSpec {
  required: string[];
  optional: string[];
}

/**
 * A library agent. Calyflow no longer separates "workflows" from "agents" —
 * everything is an agent; some are simple, some reach into connectors (ATS,
 * CRM, data, email). The `context` field says which app context it runs in.
 */
export interface LibraryItem {
  slug: string;
  name: string;
  /** Short card/listing description. */
  description: string;
  category: string | null;
  /** App context the agent runs in (e.g. 'recruiting-project'); null if unknown. */
  context: string | null;
  version: number;
  featured: boolean;
  /** Grouped connector breakdown; empty for agents that need no connectors. */
  connectors: ConnectorGroup[];
  /** Documents the agent needs, split into required and optional. */
  documents: DocumentSpec;
  output: string;
  /** Cover image URL, reconstructed against the app host (env-safe). */
  coverUrl: string;
  /** Social-share description; falls back to `description` when absent. */
  ogDescription: string | null;
  /** Lead paragraph shown under the headline on the detail page. */
  lead: string | null;
  /** Markdown body for the detail page. */
  longDescription: string | null;
}

/** Display config for an agent context, in render order. */
export interface ContextGroup {
  /** The `context` slug from the API. */
  context: string;
  /** URL fragment / anchor id. */
  id: string;
  title: string;
  blurb: string;
}

/**
 * Agent contexts in render order. Agents whose `context` matches none of these
 * fall into a trailing catch-all group (see {@link groupByContext}).
 */
export const CONTEXT_GROUPS: ContextGroup[] = [
  {
    context: 'recruiting-project',
    id: 'recruiting',
    title: 'Recruiting',
    blurb:
      'Run the whole search lifecycle on your own AI, data, and tools — intake and job descriptions, sourcing, screening, outreach, and submission packs.',
  },
  {
    context: 'business-development',
    id: 'business-development',
    title: 'Business development',
    blurb:
      'Win and grow client relationships — market your strongest candidates and research prospects before you reach out.',
  },
];

const CONTEXT_LABELS = new Map(CONTEXT_GROUPS.map((g) => [g.context, g.title]));

/** Human label for a context slug, or null for an unknown/absent context
 * (so callers can omit the badge rather than show a meaningless fallback). */
export function contextLabel(context: string | null): string | null {
  return (context && CONTEXT_LABELS.get(context)) || null;
}

export interface GroupedLibrary extends Omit<ContextGroup, 'context'> {
  context: string | null;
  items: LibraryItem[];
}

/**
 * Group items into the configured contexts, in order, dropping empty groups.
 *
 * Items with an unknown/null context (e.g. an API that hasn't shipped `context`
 * yet) fall into a catch-all group. When that catch-all is the *only* group, it
 * is the whole library, so it's presented neutrally as "Agents" rather than an
 * orphan "More agents" alongside nothing.
 */
export function groupByContext(items: LibraryItem[]): GroupedLibrary[] {
  const known = new Set(CONTEXT_GROUPS.map((g) => g.context));
  const groups: GroupedLibrary[] = CONTEXT_GROUPS.map((g) => ({
    ...g,
    items: items.filter((i) => i.context === g.context),
  })).filter((g) => g.items.length > 0);

  const rest = items.filter((i) => i.context === null || !known.has(i.context));
  if (rest.length > 0) {
    const sole = groups.length === 0;
    groups.push({
      context: null,
      id: sole ? 'agents' : 'more',
      title: sole ? 'Agents' : 'More agents',
      blurb: sole
        ? 'Every agent in the library, ready to run on your own AI, data, and tools.'
        : '',
      items: rest,
    });
  }
  return groups;
}

/** Raw connector entry from the API — either a plain label or a full group. */
type ApiConnector = string | Partial<ConnectorGroup>;

interface ApiLibraryItem {
  type?: string;
  slug: string;
  name: string;
  description: string;
  category?: string | null;
  context?: string | null;
  version?: number;
  featured?: boolean;
  connectors?: ApiConnector[];
  documents?: Partial<DocumentSpec> | null;
  output?: string;
  coverUrl?: string | null;
  ogDescription?: string | null;
  lead?: string | null;
  longDescription?: string | null;
}

/** API envelope. `workflows` is retained (now empty) for backward compatibility;
 * we merge it into the agent list so a stale API still renders. */
interface ApiLibrary {
  workflows?: ApiLibraryItem[];
  agents?: ApiLibraryItem[];
}

// Defaults to the production app API. Override with the LIBRARY_API_URL env var
// to build/preview against another environment (e.g. a local dev API):
//   LIBRARY_API_URL=http://localhost:3000/api/v1/library npm run build
const API_URL = import.meta.env.LIBRARY_API_URL ?? 'https://app.calyflow.ai/api/v1/library';
/** Origin of the data API, used to reconstruct covers when the API omits them. */
const API_ORIGIN = new URL(API_URL).origin;

let cached: LibraryItem[] | undefined;

/** Reconstruct a cover URL from the slug against a given host. Used for the
 * bundled snapshot (whose baked host is env-specific) and as a last resort
 * when the live API omits `coverUrl`. */
function buildCoverUrl(slug: string, host: string): string {
  return `${host}/api/v1/library/agent/${slug}/cover`;
}

/** Accept either `["CRM"]` (early API) or the grouped form with concrete
 * connectors, and always return grouped form. */
function normalizeConnectors(items: ApiConnector[] | undefined): ConnectorGroup[] {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    if (typeof item === 'string') {
      return { category: item.toLowerCase(), label: item, connectors: [] };
    }
    return {
      category: item.category ?? (item.label ?? '').toLowerCase(),
      label: item.label ?? item.category ?? '',
      connectors: Array.isArray(item.connectors) ? item.connectors : [],
    };
  });
}

function normalizeDocuments(docs: Partial<DocumentSpec> | null | undefined): DocumentSpec {
  return {
    required: Array.isArray(docs?.required) ? docs!.required! : [],
    optional: Array.isArray(docs?.optional) ? docs!.optional! : [],
  };
}

/**
 * Resolve the cover URL. When `rebuildHost` is set (snapshot path), rebuild it
 * from the slug against that host. Otherwise honor the URL the live API
 * returns — so covers come from the same environment as the data — falling
 * back to the API's own origin if it omits one.
 */
function resolveCoverUrl(item: ApiLibraryItem, rebuildHost: string | null): string {
  if (rebuildHost) return buildCoverUrl(item.slug, rebuildHost);
  return item.coverUrl || buildCoverUrl(item.slug, API_ORIGIN);
}

function normalizeItem(item: ApiLibraryItem, rebuildHost: string | null): LibraryItem {
  return {
    slug: item.slug,
    name: item.name,
    description: item.description,
    category: item.category ?? null,
    context: item.context ?? null,
    version: item.version ?? 1,
    featured: item.featured ?? false,
    connectors: normalizeConnectors(item.connectors),
    documents: normalizeDocuments(item.documents),
    output: item.output ?? '',
    coverUrl: resolveCoverUrl(item, rebuildHost),
    ogDescription: item.ogDescription ?? null,
    lead: item.lead ?? null,
    longDescription: item.longDescription ?? null,
  };
}

/** `rebuildHost` forces cover URLs onto that host (used for the snapshot,
 * whose baked localhost host must not leak into a production build). When
 * null, the live API's `coverUrl` is honored as-is. */
function normalize(data: ApiLibrary, rebuildHost: string | null): LibraryItem[] {
  return [...(data.workflows ?? []), ...(data.agents ?? [])].map((i) =>
    normalizeItem(i, rebuildHost),
  );
}

/**
 * Agent library from the Calyflow app, fetched once per build (never
 * client-side). Falls back to the bundled snapshot in library.json so the
 * section still renders when the API is unreachable.
 */
export async function getAllLibraryItems(): Promise<LibraryItem[]> {
  if (cached !== undefined) return cached;
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as ApiLibrary;
    const items = normalize(data, null);
    if (items.length === 0) throw new Error('empty library');
    cached = items;
  } catch (err) {
    console.warn(
      `[library] falling back to bundled snapshot (${err instanceof Error ? err.message : err})`,
    );
    cached = normalize(snapshot as ApiLibrary, SITE.appUrl);
  }
  return cached;
}

/** Featured-first selection of up to `count` items for homepage trios. */
export function pickFeatured(items: LibraryItem[], count: number): LibraryItem[] {
  const featured = items.filter((i) => i.featured);
  const rest = items.filter((i) => !i.featured);
  return [...featured, ...rest].slice(0, count);
}
