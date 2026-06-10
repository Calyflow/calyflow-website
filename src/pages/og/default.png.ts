import type { APIRoute } from 'astro';
import { renderOgImage } from '../../lib/og';
import { SITE } from '../../data/site';

export const GET: APIRoute = async () => {
  const png = await renderOgImage(
    SITE.tagline,
    'Run AI recruiting workflows on your own AI, data, and tools.'
  );
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
