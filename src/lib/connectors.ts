import snapshot from '../data/integrations.json';

export type ConnectorCategory = 'ai' | 'ats' | 'crm' | 'data' | 'tool';

export interface Connector {
  name: string;
  category: ConnectorCategory;
  status: 'available' | 'coming-soon';
  /** Primary domain, e.g. "greenhouse.io". Absent on older snapshots. */
  domain?: string;
  /** Favicon/logo URL for the connector. Absent on older snapshots. */
  faviconUrl?: string;
}

interface ApiConnector {
  name: string;
  category: ConnectorCategory;
  status: 'available' | 'coming_soon';
  domain?: string;
  faviconUrl?: string;
}

const API_URL = 'https://app.calyflow.ai/api/v1/connectors';

let cached: Connector[] | undefined;

function normalize(items: ApiConnector[]): Connector[] {
  return items.map((item) => ({
    name: item.name,
    category: item.category,
    status: item.status === 'coming_soon' ? 'coming-soon' : 'available',
    domain: item.domain,
    faviconUrl: item.faviconUrl,
  }));
}

/** Build a `name → faviconUrl` map from the connector list. */
export function faviconMap(connectors: Connector[]): Record<string, string> {
  const map: Record<string, string> = {};
  for (const c of connectors) {
    if (c.faviconUrl) map[c.name] = c.faviconUrl;
  }
  return map;
}

/**
 * Connector list from the Calyflow app, fetched once per build (never
 * client-side). Falls back to the bundled snapshot in integrations.json so
 * the section still renders when the API is unreachable.
 */
export async function getConnectors(): Promise<Connector[]> {
  if (cached !== undefined) return cached;
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as { items?: ApiConnector[] };
    if (!Array.isArray(data.items) || data.items.length === 0) {
      throw new Error('empty connector list');
    }
    cached = normalize(data.items);
  } catch (err) {
    console.warn(
      `[connectors] falling back to bundled snapshot (${err instanceof Error ? err.message : err})`,
    );
    cached = normalize(snapshot.items as ApiConnector[]);
  }
  return cached;
}
