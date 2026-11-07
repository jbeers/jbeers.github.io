const assert = require('node:assert/strict');
const { test } = require('node:test');
const { readFileSync } = require('node:fs');
const { runInNewContext } = require('node:vm');

function setup({ saved = null, dark = false, blocked = false } = {}) {
  const root = { dataset: {} };
  const events = {};
  const attributes = {};
  const button = { hidden: true, setAttribute: (key, value) => attributes[key] = value, addEventListener: (type, fn) => events[type] = fn };
  const storage = {
    getItem() { if (blocked) throw Error('Storage blocked'); return saved; },
    setItem(key, value) { if (blocked) throw Error('Storage blocked'); saved = value; },
  };
  const context = {
    document: { documentElement: root, querySelector: () => button, addEventListener: (type, fn) => events[type] = fn },
    window: { matchMedia: () => ({ matches: dark, addEventListener: (type, fn) => events.system = fn }) },
    localStorage: storage,
  };
  runInNewContext(readFileSync('theme.js', 'utf8'), context);
  events.DOMContentLoaded();
  return { root, button, events, attributes, stored: () => saved };
}

test('theme follows the system until the reader chooses and persists an override', () => {
  const state = setup();
  assert.equal(state.root.dataset.theme, 'light');
  assert.equal(state.button.hidden, false);
  state.events.system({ matches: true });
  assert.equal(state.root.dataset.theme, 'dark');
  assert.equal(state.attributes['aria-label'], 'Switch to light mode');
  state.events.click();
  assert.equal(state.stored(), 'light');
  state.events.system({ matches: true });
  assert.equal(state.root.dataset.theme, 'light');
  assert.equal(setup({ saved: state.stored(), dark: true }).root.dataset.theme, 'light');
});

test('blocked storage and invalid saved values still allow working theme controls', () => {
  assert.equal(setup({ saved: 'invalid', dark: true }).root.dataset.theme, 'dark');
  const state = setup({ blocked: true });
  state.events.click();
  assert.equal(state.root.dataset.theme, 'dark');
  assert.equal(state.attributes['aria-label'], 'Switch to light mode');
});
