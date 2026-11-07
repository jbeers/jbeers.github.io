const assert = require('node:assert/strict');
const { test } = require('node:test');
const articleContent = require('../lib/article-content.cjs');

test('article title is unique, headings are demoted and duplicate slugs remain distinct', () => {
  const result = articleContent('<h1>A title</h1><h1>Setup</h1><h2>Details &amp; tips</h2><h1>Setup</h1>', 'A title');
  assert.ok(!result.html.includes('<h1'));
  assert.deepEqual(result.headings, [
    { text: 'Setup', id: 'setup', level: 2 },
    { text: 'Details & tips', id: 'details-tips', level: 3 },
    { text: 'Setup', id: 'setup-2', level: 2 },
  ]);
});

test('existing anchors, Unicode headings and escaped code survive the transformation', () => {
  const input = '<span id="setup"></span><h2>Setup</h2><h2 id="explicit">Café 日本語</h2><h2>Café 日本語</h2><pre tabindex="0"><code>&lt;script&gt;alert(1)&lt;/script&gt;</code></pre>';
  const result = articleContent(input, 'Other title');
  assert.deepEqual(result.headings.map(h => h.id), ['setup-2', 'explicit', 'cafe-日本語']);
  assert.ok(result.html.includes('id="setup"'));
  assert.ok(result.html.includes('&lt;script&gt;'));
  assert.ok(!result.html.includes('<script>'));
  assert.ok(result.html.includes('tabindex="0"'));
});

test('empty articles and heading-free articles do not invent contents', () => {
  assert.deepEqual(articleContent('', 'Title'), { html: '', headings: [] });
  assert.deepEqual(articleContent('<p>Hello.</p>', 'Title'), { html: '<p>Hello.</p>', headings: [] });
});
