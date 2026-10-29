import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const root = new URL('../_site/', import.meta.url);
const pages = ['/', '/methode/', '/outils/', '/visibilite-locale/', '/satisfaction-client/', '/hospitality/', '/restauration/', '/retail/', '/articles/que-faire-avec-douze-avis-clients/', '/articles/audit-parcours-client-local/', '/articles/retrait-magasin-promesse-verifiable/', '/journal/', '/a-propos/', '/contribuer/'];
const read = (path) => readFileSync(new URL(`.${path}index.html`, root), 'utf8');

test('public pages have unique titles, canonical URLs and visible ownership', () => {
  const titles = new Set();
  for (const path of pages) {
    const html = read(path);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title, path);
    assert.ok(!titles.has(title), title);
    titles.add(title);
    assert.ok(html.includes(`rel="canonical" href="https://ranksas.github.io${path}"`), path);
    assert.ok(html.includes('créé et exploité par <a href="https://myfrank.io/">MyFrank</a>'), path);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, path);
  }
});

test('retrait dossier has its stated two filled examples and download', () => {
  const article = read('/articles/retrait-magasin-promesse-verifiable/');
  const csv = readFileSync(new URL('./assets/fiche-ecart-retrait-magasin.csv', root), 'utf8');
  assert.ok(article.includes('href="/assets/fiche-ecart-retrait-magasin.csv" download'));
  assert.equal(csv.trim().split('\n').length, 4);
  assert.ok(article.includes('Deuxième exemple fictif'));
  assert.ok(readFileSync(new URL('./feed.xml', root), 'utf8').includes('retrait-magasin-promesse-verifiable'));
});

test('original example and local calculator are delivered, not merely claimed', () => {
  const article = read('/articles/que-faire-avec-douze-avis-clients/');
  assert.ok(article.includes('3/12 = 25 %'));
  assert.ok(article.includes('Exemple fictif') || article.includes('exemple fictif'));
  assert.ok(article.includes('utm_source=terrainvisible'));
  const tool = read('/outils/');
  assert.ok(tool.includes('id="calculator"'));
  assert.ok(tool.includes('/assets/calculator.js'));
  assert.ok(readFileSync(new URL('./assets/calculator.js', root), 'utf8').includes('mentions > total'));
});

test('sitemap and robots list the canonical host and no nonexistent page', () => {
  const sitemap = readFileSync(new URL('./sitemap.xml', root), 'utf8');
  const robots = readFileSync(new URL('./robots.txt', root), 'utf8');
  for (const path of pages) assert.ok(sitemap.includes(`https://ranksas.github.io${path}</loc>`), path);
  assert.ok(robots.includes('Sitemap: https://ranksas.github.io/sitemap.xml'));
  assert.ok(!sitemap.includes('/contact'));
});


test('journal, feed and downloadable fieldwork asset match the published article', () => {
  const journal = read('/journal/');
  const article = read('/articles/audit-parcours-client-local/');
  const feed = readFileSync(new URL('./feed.xml', root), 'utf8');
  const csv = readFileSync(new URL('./assets/parcours-local-15-tests.csv', root), 'utf8');
  assert.ok(journal.includes('href="/articles/audit-parcours-client-local/"'));
  assert.ok(article.includes('datePublished":"2026-10-28T17:35:00Z"'));
  assert.ok(article.includes('href="/assets/parcours-local-15-tests.csv" download'));
  assert.equal(csv.trim().split('\n').length - 1, 15);
  assert.ok(feed.includes('https://ranksas.github.io/articles/audit-parcours-client-local/'));
  assert.ok(!readFileSync(new URL('./sitemap.xml', root), 'utf8').includes('/feed.xml</loc>'));
});

test('all internal HTML links resolve to generated pages or assets', () => {
  for (const path of pages) {
    for (const [, href] of read(path).matchAll(/href="(\/[^"#]+)(?:#[^"]*)?"/g)) {
      const target = href.split('?')[0];
      const relative = target.endsWith('/') ? `.${target}index.html` : `.${target}`;
      assert.ok(existsSync(new URL(relative, root)), `${path} -> ${href}`);
    }
  }
});
