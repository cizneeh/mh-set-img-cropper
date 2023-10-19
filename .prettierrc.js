module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  overrides: [
    {
      files: ['*.md'],
      options: {
        singleQuote: false,
      },
    },
  ],
}
