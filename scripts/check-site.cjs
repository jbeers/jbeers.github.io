const assert = require('node:assert/strict');
const { before, test } = require('node:test');
const { parseDocument, DomUtils } = require('htmlparser2');
const { existsSync } = require('node:fs');
const { join } = require('node:path');
const { mkdtemp, readFile, rm } = require('node:fs/promises');
const { tmpdir } = require('node:os');
const { execFile } = require('node:child_process');
const { promisify } = require('node:util');

let pages;
before(async () => {
  const { default: Eleventy } = await import('@11ty/eleventy');
  pages = await new Eleventy('.', '_site', { quietMode: true }).toJSON();
});
const elements = (html, predicate) => DomUtils.findAll(predicate, parseDocument(html).children);
const tags = (html, name) => elements(html, node => node.name === name);
const pageAt = url => {
  const page = pages.find(page => page.url === url);
  assert.ok(page, `Missing page: ${url}`);
  return page.content;
};

test('deployment command emits root-site asset and navigation URLs', async () => {
  const output = await mkdtemp(join(tmpdir(), 'site-deploy-check-'));
  try {
    await promisify(execFile)('npm', ['run', 'build-ghpages', '--', '--output', output]);
    const html = await readFile(join(output, 'index.html'), 'utf8');
    assert.ok(tags(html, 'link').some(node => node.attribs.rel === 'stylesheet' && node.attribs.href === '/style.css'));
    assert.ok(tags(html, 'a').some(node => node.attribs.href === '/talks/'));
    assert.ok(tags(html, 'img').some(node => node.attribs.src === '/images/editorial-orbit.webp'));
    assert.ok(existsSync(join(output, 'theme.js')));
    assert.ok(existsSync(join(output, 'res/fonts/fraunces-700.ttf')));
  } finally {
    await rm(output, { recursive: true, force: true });
  }
});

test('all primary destinations share accessible navigation and preserve existing tools', () => {
  for (const url of ['/', '/article/', '/about/', '/talks/', '/talks/git-tips/', '/cheat/', '/terminal/', '/projects/bayesian/']) {
    const html = pageAt(url);
    const nav = tags(html, 'nav').find(node => node.attribs['aria-label'] === 'Main navigation');
    assert.ok(nav, `${url}: no main navigation`);
    const links = DomUtils.findAll(node => node.name === 'a', nav.children).map(node => node.attribs.href);
    assert.deepEqual(links, ['/', '/article/', '/talks/', '/about/']);
    assert.equal(tags(html, 'main').length, 1, url);
    assert.equal(tags(html, 'h1').length, 1, `${url}: expected one page title`);
    assert.ok(html.includes('id="main-content"'), `${url}: no skip-link destination`);
  }
});

test('home leads with speaking and gives client work real prominence', () => {
  const html = pageAt('/');
  assert.match(DomUtils.textContent(parseDocument(html)), /I build software, from runtimes to production\./);
  assert.ok(html.indexOf('id="conference-talks"') < html.indexOf('id="selected-work"'));
  for (const text of ['USRA', 'Multi-Messenger', 'MatchBox', 'Kubernetes', 'consulting']) assert.ok(html.includes(text), text);
  assert.ok(html.includes('href="/talks/"'));
});

test('approved editorial artwork is integrated as real responsive images', () => {
  const home = pageAt('/');
  const hero = elements(home, node => node.name === 'section' && node.attribs.class === 'hero')[0];
  const heroImage = DomUtils.findOne(node => node.name === 'img', hero.children);
  assert.ok(heroImage, 'Homepage hero artwork is missing');
  assert.equal(heroImage.attribs.src, '/images/editorial-orbit.webp');
  assert.equal(heroImage.attribs.alt, '', 'Identity artwork should be decorative');
  assert.ok(home.includes('/res/fonts/fraunces-700.ttf'));
  for (const route of ['/', '/about/']) {
    const html = pageAt(route);
    const work = elements(html, node => node.name === 'div' && node.attribs.class === 'work-list')[0];
    const illustrations = DomUtils.findAll(node => node.name === 'img', work.children);
    assert.equal(illustrations.length, 3, `${route}: expected all three illustrated project rows`);
    for (const image of illustrations) {
      assert.ok(existsSync(join('.', image.attribs.src.slice(1))));
      assert.ok(Number(image.attribs.width) > 0 && Number(image.attribs.height) > 0);
      assert.ok(image.attribs.alt.length > 0);
    }
  }
});

test('article body, reading navigation, figures and highlighted code survive rendering', () => {
  const homeNetwork = pageAt('/article/home-network-setup/');
  const headings = tags(homeNetwork, 'h2').concat(tags(homeNetwork, 'h3'));
  const ids = headings.map(node => node.attribs.id).filter(Boolean);
  assert.ok(ids.includes('how-it-all-works'));
  const contents = tags(homeNetwork, 'nav').find(node => node.attribs['aria-label'] === 'On this page');
  assert.ok(contents);
  for (const link of DomUtils.findAll(node => node.name === 'a', contents.children)) {
    assert.ok(ids.includes(link.attribs.href.slice(1)), link.attribs.href);
  }
  assert.ok(homeNetwork.includes('/images/home-network-setup.svg'));
  assert.equal(tags(homeNetwork, 'time')[0].attribs.datetime, '2026-10-26');
  const alias = pageAt('/article/pi-bash-alias/');
  assert.ok(tags(alias, 'pre').some(node => node.attribs.tabindex === '0'));
  assert.ok(alias.includes('hljs-keyword'));
});

test('all existing talks have an appearance and only known resources get links', () => {
  const html = pageAt('/talks/');
  const source = require('../_data/talks.json');
  for (const talk of source) {
    assert.ok(DomUtils.textContent(parseDocument(html)).includes(talk.title), talk.title);
    if (talk.url) assert.ok(tags(html, 'a').some(node => node.attribs.href === talk.url), talk.url);
  }
  const rows = elements(html, node => node.name === 'ul' && node.attribs.class === 'appearance-list')[0];
  for (const row of rows.children.filter(node => node.name === 'li')) {
    const title = DomUtils.textContent(DomUtils.findOne(node => node.name === 'h3', row.children));
    const talk = source.find(talk => talk.title === title);
    assert.ok(talk, title);
    if (!talk.url) assert.equal(DomUtils.findAll(node => node.name === 'a', row.children).length, 0, title);
  }
});

test('all article content remains discoverable and production links resolve locally', () => {
  const index = pageAt('/article/');
  for (const page of pages.filter(page => page.url.startsWith('/article/') && page.url !== '/article/')) {
    assert.ok(index.includes(`href="${page.url}"`), `Article omitted: ${page.url}`);
    assert.equal(tags(page.content, 'h1').length, 1, page.url);
  }
  const urls = new Set(pages.map(page => page.url));
  for (const page of pages) {
    for (const node of elements(page.content, node => ['a', 'img', 'script', 'link'].includes(node.name))) {
      const href = node.attribs.href || node.attribs.src;
      if (!href?.startsWith('/') || href.startsWith('//')) continue;
      const path = decodeURI(href.split(/[?#]/)[0]);
      const staticFile = existsSync(join('.', path.slice(1)));
      assert.ok(urls.has(path) || urls.has(`${path}/`) || staticFile, `${page.url}: broken local path ${href}`);
    }
  }
  assert.ok(pages.every(page => !/AGENTS|STYLE|\/design\/|\.agents/.test(page.inputPath)));
});
