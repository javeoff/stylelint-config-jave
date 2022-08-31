module.exports = {
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'order/properties-order': [
      // Conventional Properties order https://fordinteractive.com/tools/propertyorder/propertyorder.css
      'content',
      'display',
      'position',

      'box-sizing',
      'min-width',
      'max-width',
      'min-height',
      'max-height',
      'width',
      'height',
      'max-width',
      'max-height',
      'padding',
      'margin',
      'border',

      'float',
      'order',
      'z-index',

      'background-image',
      'background-',
      'border',
      'opacity',

      'font-family',
      'font-',
      'text-',
      'color',

      'cursor',
      'animation',
      'transition',
    ],
  }
}
