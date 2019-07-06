// Defining a custom Handlebars method
function categoryHelper(a, b, opts) {
  if (a === b) {
    return opts.fn(this);
  }
}

module.exports = categoryHelper;
