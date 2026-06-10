import { SITE } from '../data/site';

let cached: number | null | undefined;

/**
 * GitHub star count, fetched once per build (never client-side, spec §3.1).
 * Returns null on any failure so the UI can degrade to a plain GitHub link.
 */
export async function getStarCount(): Promise<number | null> {
  if (cached !== undefined) return cached;
  try {
    const res = await fetch(`https://api.github.com/repos/${SITE.githubRepo}`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (res.ok) {
      const data = (await res.json()) as { stargazers_count?: number };
      cached = data.stargazers_count ?? null;
    } else {
      cached = null;
    }
  } catch {
    cached = null;
  }
  return cached;
}

export function formatStars(count: number): string {
  return count >= 1000
    ? new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(count)
    : String(count);
}
