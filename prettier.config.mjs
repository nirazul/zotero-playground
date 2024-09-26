export default {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  vueIndentScriptAndStyle: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.xhtml'],
      options: {
        htmlWhitespaceSensitivity: 'css',
      },
    },
  ],
}
