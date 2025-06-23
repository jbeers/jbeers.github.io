module.exports = function(eleventyConfig) {
  
  // Copy style.css to the output folder
  eleventyConfig.addPassthroughCopy("style.css");

  // Copy images folder to the output folder
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("res");

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
