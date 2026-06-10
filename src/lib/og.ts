import { readFileSync } from 'node:fs';
import satori from 'satori';
import sharp from 'sharp';
import { SITE } from '../data/site';

// Satori needs TTF/OTF/WOFF (not woff2); fontsource ships .woff, so the OG
// images use the exact same self-hosted brand fonts as the site.
const spaceGrotesk = readFileSync(
  'node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff'
);
const inter = readFileSync('node_modules/@fontsource/inter/files/inter-latin-500-normal.woff');

const colors = {
  cream: '#fbf7f0',
  navy900: '#131f38',
  navy800: '#1b2a4a',
  mint: '#5bc8a8',
  sky: '#9cc3f0',
};

/** Renders a 1200×630 brand OG image (cream, aurora glow, title) as PNG. */
export async function renderOgImage(title: string, subtitle?: string): Promise<Buffer> {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: colors.cream,
          position: 'relative',
          fontFamily: 'Inter',
        },
        children: [
          // Aurora glow (mint → sky), top-right
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: '-180px',
                right: '-120px',
                width: '620px',
                height: '620px',
                borderRadius: '9999px',
                background: `linear-gradient(135deg, ${colors.mint}, ${colors.sky})`,
                opacity: 0.25,
                filter: 'blur(90px)',
              },
            },
          },
          // Wordmark row
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: '16px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: colors.navy900,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: colors.mint,
                      fontFamily: 'Space Grotesk',
                      fontSize: '26px',
                    },
                    children: 'C',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontFamily: 'Space Grotesk',
                      fontSize: '32px',
                      color: colors.navy900,
                    },
                    children: SITE.name,
                  },
                },
              ],
            },
          },
          // Title block
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '980px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontFamily: 'Space Grotesk',
                      fontSize: title.length > 50 ? '56px' : '68px',
                      lineHeight: 1.1,
                      color: colors.navy900,
                      letterSpacing: '-0.01em',
                    },
                    children: title,
                  },
                },
                ...(subtitle
                  ? [
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '28px',
                            lineHeight: 1.4,
                            color: colors.navy800,
                            opacity: 0.7,
                          },
                          children: subtitle,
                        },
                      },
                    ]
                  : []),
              ],
            },
          },
          // Footer row: domain + mint underline accent
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: '14px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '52px',
                      height: '6px',
                      borderRadius: '3px',
                      backgroundColor: colors.mint,
                    },
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { fontSize: '24px', color: colors.navy800 },
                    children: 'calyflow.ai',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Space Grotesk', data: spaceGrotesk, weight: 700, style: 'normal' },
        { name: 'Inter', data: inter, weight: 500, style: 'normal' },
      ],
    }
  );

  return sharp(Buffer.from(svg)).png().toBuffer();
}
