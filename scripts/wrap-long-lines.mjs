import { globSync, readFileSync, writeFileSync } from 'node:fs';

// The MD013 ceiling in .markdownlint-cli2.jsonc, and the files it covers.
const LIMIT = 92;
const GLOBS = ['src/**/*.md', 'docs/*.md', 'README.md', 'CLAUDE.md'];

// A list marker, whose continuation lines align with its text rather than the marker.
const ITEM = /^(\s*)(?:[-*+]|\d+[.)])\s+/;
const FENCE = /^\s*(?:`{3,}|~{3,})/;
// Lines that are never prose: headings, table rows, block quotes, thematic breaks, link
// reference definitions, and block-level HTML.
const BLOCK =
  /^\s*(?:[#|>]|([-*_])(?:\s*\1){2,}\s*$|\[[^\]]+\]:|<(?:!--|\/?(?:div|p|pre|table|ul|ol|li|details|summary|section|figure|br|hr)\b))/;
// A trailing double space or backslash is a hard break and stays a line end.
const HARD_BREAK = /(?: {2,}|\\)$/;

// Refills one paragraph, word by word, to the ceiling.
function fill(para) {
  const prefix = ITEM.exec(para[0])?.[0] ?? /^\s*/.exec(para[0])[0];
  const indent = ' '.repeat(prefix.length);
  // An inline code span or HTML tag is one word: no break lands inside either.
  const words =
    [para[0].slice(prefix.length), ...para.slice(1).map((l) => l.trim())]
      .join(' ')
      .match(/`[^`]*`\S*|<\/?[A-Za-z][^<>]*>\S*|\S+/g) ?? [];
  const out = [];
  let line = prefix;
  let empty = true;
  for (const word of words) {
    if (!empty && `${line} ${word}`.length > LIMIT) {
      out.push(line);
      line = indent + word;
    } else {
      line = empty ? line + word : `${line} ${word}`;
    }
    empty = false;
  }
  // A double-space hard break belongs to the last line, however the words fall.
  out.push(/ {2,}$/.test(para.at(-1)) ? `${line}  ` : line);
  return out;
}

function fillFile(text) {
  const lines = text.split('\n');
  const out = [];
  let para = [];
  let fence = false;
  let frontMatter = lines[0] === '---';
  const flush = () => {
    if (para.length) out.push(...fill(para));
    para = [];
  };
  for (const [i, line] of lines.entries()) {
    if (frontMatter) {
      out.push(line);
      if (i > 0 && line === '---') frontMatter = false;
      continue;
    }
    if (FENCE.test(line)) fence = !fence;
    if (fence || FENCE.test(line) || line.trim() === '' || BLOCK.test(line)) {
      flush();
      out.push(line);
      continue;
    }
    if (ITEM.test(line)) flush();
    para.push(line);
    if (HARD_BREAK.test(line)) flush();
  }
  flush();
  return out.join('\n');
}

const files =
  process.argv.length > 2 ? process.argv.slice(2) : GLOBS.flatMap((g) => globSync(g));
for (const file of files) {
  const text = readFileSync(file, 'utf8');
  const filled = fillFile(text);
  if (filled !== text) writeFileSync(file, filled);
}
