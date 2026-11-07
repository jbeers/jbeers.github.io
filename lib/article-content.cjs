const { parseDocument, DomUtils } = require('htmlparser2');

module.exports = function articleContent(content, title) {
  const document = parseDocument(content);
  const headings = DomUtils.findAll(node => /^h[1-6]$/.test(node.name), document.children);
  const normalize = text => text.trim().replace(/\s+/g, ' ').toLowerCase();
  if (headings[0] && normalize(DomUtils.textContent(headings[0])) === normalize(title || '')) {
    DomUtils.removeElement(headings.shift());
  }
  const used = new Set(DomUtils.findAll(node => Boolean(node.attribs?.id), document.children).map(node => node.attribs.id));
  const offset = headings.some(node => node.name === 'h1') ? 1 : 0;
  const contents = [];
  for (const heading of headings) {
    const text = DomUtils.textContent(heading);
    const level = Math.min(6, Number(heading.name[1]) + offset);
    heading.name = `h${level}`;
    if (!heading.attribs.id) {
      const stem = text.normalize('NFKD').toLowerCase().replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '') || 'section';
      let id = stem;
      for (let suffix = 2; used.has(id); suffix++) id = `${stem}-${suffix}`;
      used.add(id);
      heading.attribs.id = id;
    }
    if (level <= 3) contents.push({ text, id: heading.attribs.id, level });
  }
  return { html: DomUtils.getOuterHTML(document), headings: contents };
};
