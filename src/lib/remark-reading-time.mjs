/**
 * Injects `minutesRead` into every post's frontmatter at build time
 * (available via remarkPluginFrontmatter). No runtime cost, no deps.
 */
function extractText(node) {
  if (typeof node.value === 'string') return node.value;
  if (Array.isArray(node.children)) return node.children.map(extractText).join(' ');
  return '';
}

export function remarkReadingTime() {
  return (tree, { data }) => {
    const words = extractText(tree).split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(words / 200));
    data.astro.frontmatter.minutesRead = `${minutes} min read`;
  };
}
