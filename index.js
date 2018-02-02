var html2markdown = require('./dist/html2markdown');
var htmlParser = require('./dist/markdown_html_parser');

module.exports = function(html, opts) {
  opts = opts || {};
  opts.parser = htmlParser;
  return html2markdown(html, opts);
};
