import assert from 'node:assert/strict';
import { test } from 'node:test';
import { fillFile } from './wrap-long-lines.mjs';

const long = (n) => Array.from({ length: n }, (_, i) => `word${i}`).join(' ');
const longest = (text) => Math.max(...text.split('\n').map((l) => l.length));

test('fills a paragraph to the ceiling and joins short lines', () => {
  const out = fillFile(`${long(30)}\n\nShort line,\nkept together.\n`);
  assert.ok(longest(out) <= 92);
  assert.ok(out.split('\n').length > 3);
  assert.match(out, /\nShort line, kept together\.\n/);
});

test('is idempotent', () => {
  const once = fillFile(`${long(40)}\n\n- ${long(25)}\n  - ${long(25)}\n`);
  assert.equal(fillFile(once), once);
});

test('moves breaks and nothing else', () => {
  const text = `${long(40)}\n\n- ${long(25)}\n1. ${long(25)}\n`;
  assert.equal(fillFile(text).replace(/\s+/g, ' '), text.replace(/\s+/g, ' '));
});

test('aligns list continuations under the item text', () => {
  const out = fillFile(`- ${long(25)}\n  - ${long(25)}\n10. ${long(25)}\n`);
  const starts = out.split('\n').map((l) => l.slice(0, 4));
  assert.deepEqual(starts, ['- wo', '  wo', '  - ', '    ', '10. ', '    ', '']);
});

test('never breaks inside an inline code span or HTML tag', () => {
  const span = '`<name> (imported)`';
  const tag = '<span class="icon icon-reset" role="img" aria-label="reset"></span>';
  for (let pad = 60; pad < 92; pad += 1) {
    const out = fillFile(`${'x'.repeat(pad)} ${span} and ${tag} tail\n`);
    assert.ok(
      out.split('\n').some((l) => l.includes(span)),
      `span split at pad ${pad}`,
    );
    assert.ok(
      out.split('\n').some((l) => l.includes(tag)),
      `tag split at pad ${pad}`,
    );
  }
});

test('leaves front matter, headings, tables, and fenced code alone', () => {
  const text = [
    '---',
    `description: ${long(20)}`,
    '---',
    '',
    `## ${long(20)}`,
    '',
    `| ${long(10)} | ${long(10)} |`,
    '| --- | --- |',
    '',
    '```json',
    `{ "${long(20)}": 1 }`,
    '```',
    '',
    '---',
    '',
    '> quoted line one',
    '> quoted line two',
    '',
  ].join('\n');
  assert.equal(fillFile(text), text);
});

test('keeps a hard break and ends the paragraph there', () => {
  const out = fillFile('one two  \nthree four\n');
  assert.equal(out, 'one two  \nthree four\n');
});

test('preserves a long word MD013 exempts', () => {
  const url = `https://example.com/${'a/'.repeat(50)}`;
  const out = fillFile(`See ${url} now.\n`);
  assert.ok(out.split('\n').some((l) => l === url));
});
