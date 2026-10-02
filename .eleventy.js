const hljs = require("highlight.js");

function highlight(content, language = "plaintext") {
  const code = hljs.highlight(content, {
    language: hljs.getLanguage(language) ? language : "plaintext"
  }).value;
  return `<pre tabindex="0"><code class="hljs">${code}</code></pre>`;
}

module.exports = function(eleventyConfig) {
  eleventyConfig.amendLibrary("md", md => md.set({ highlight }));
  eleventyConfig.addPairedShortcode("highlight", highlight);

  // Copy style.css to the output folder
  eleventyConfig.addPassthroughCopy("style.css");

  // Copy images folder to the output folder
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("res");
  eleventyConfig.addPassthroughCopy("pico-8");
  eleventyConfig.addPassthroughCopy("cheat.js");

  // Add a collection for articles using the 'article' tag
  eleventyConfig.addCollection("article", function(collectionApi) {
    return collectionApi.getFilteredByTag("article");
  });

  // Add a simple Nunjucks date filter
  eleventyConfig.addFilter("date", function(dateObj, format) {
    const pad = n => n < 10 ? '0' + n : n;
    const year = dateObj.getFullYear();
    const month = pad(dateObj.getMonth() + 1);
    const day = pad(dateObj.getDate());
    if (format === "yyyy-MM-dd") {
      return `${year}-${month}-${day}`;
    }
    if (format === "yyyy") {
      return `${year}`;
    }
    return dateObj.toLocaleDateString();
  });
};
