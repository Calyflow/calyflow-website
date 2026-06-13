import snapshot from '../data/library.json';
import { SITE } from '../data/site';

export type LibraryItemType = 'workflow' | 'agent';

/** A connector category an agent can use, with the concrete connectors in it. */
export interface ConnectorGroup {
  category: string;
  label: string;
  connectors: string[];
}

export interface LibraryItem {
  type: LibraryItemType;
  slug: string;
  name: string;
  /** Short card/listing description. */
  description: string;
  category: string | null;
  version: number;
  featured: boolean;
  /** Empty for workflows; grouped connector breakdown for agents. */
  connectors: ConnectorGroup[];
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

export interface Library {
  workflows: LibraryItem[];
  agents: LibraryItem[];
}

/** Raw connector entry from the API — either a plain label or a full group. */
type ApiConnector = string | Partial<ConnectorGroup>;

interface ApiLibraryItem {
  type?: LibraryItemType;
  slug: string;
  name: string;
  description: string;
  category?: string | null;
  version?: number;
  featured?: boolean;
  connectors?: ApiConnector[];
  output?: string;
  coverUrl?: string | null;
  ogDescription?: string | null;
  lead?: string | null;
  longDescription?: string | null;
}

const API_URL = 'https://app.calyflow.ai/api/v1/library';

let cached: Library | undefined;

/** Build a host-safe cover URL from type + slug, ignoring the env-specific
 * host the API returns (it points at localhost in dev). */
function coverUrlFor(type: LibraryItemType, slug: string): string {
  return `${SITE.appUrl}/api/v1/library/${type}/${slug}/cover`;
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

function normalizeItem(item: ApiLibraryItem, type: LibraryItemType): LibraryItem {
  return {
    type,
    slug: item.slug,
    name: item.name,
    description: item.description,
    category: item.category ?? null,
    version: item.version ?? 1,
    featured: item.featured ?? false,
    connectors: normalizeConnectors(item.connectors),
    output: item.output ?? '',
    coverUrl: coverUrlFor(type, item.slug),
    ogDescription: item.ogDescription ?? null,
    lead: item.lead ?? null,
    longDescription: item.longDescription ?? null,
  };
}

function normalize(data: { workflows?: ApiLibraryItem[]; agents?: ApiLibraryItem[] }): Library {
  return {
    workflows: (data.workflows ?? []).map((i) => normalizeItem(i, 'workflow')),
    agents: (data.agents ?? []).map((i) => normalizeItem(i, 'agent')),
  };
}

/**
 * Workflow + agent library from the Calyflow app, fetched once per build
 * (never client-side). Falls back to the bundled snapshot in library.json so
 * the section still renders when the API is unreachable.
 */
export async function getLibrary(): Promise<Library> {
  if (cached !== undefined) return cached;
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as { workflows?: ApiLibraryItem[]; agents?: ApiLibraryItem[] };
    const total = (data.workflows?.length ?? 0) + (data.agents?.length ?? 0);
    if (total === 0) throw new Error('empty library');
    cached = normalize(data);
  } catch (err) {
    console.warn(
      `[library] falling back to bundled snapshot (${err instanceof Error ? err.message : err})`,
    );
    cached = normalize(snapshot as { workflows?: ApiLibraryItem[]; agents?: ApiLibraryItem[] });
  }
  return cached;
}

/** Flat list of every item, workflows first. */
export async function getAllLibraryItems(): Promise<LibraryItem[]> {
  const { workflows, agents } = await getLibrary();
  return [...workflows, ...agents];
}

/** Featured-first selection of up to `count` items for homepage trios. */
export function pickFeatured(items: LibraryItem[], count: number): LibraryItem[] {
  const featured = items.filter((i) => i.featured);
  const rest = items.filter((i) => !i.featured);
  return [...featured, ...rest].slice(0, count);
}
