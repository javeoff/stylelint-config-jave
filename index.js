const imports = [
  './rules/properties-order',
  './rules/styleguide',
  ].map(function(element) {
  return require.resolve(element);
})

module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    ...imports,
  ]
}
