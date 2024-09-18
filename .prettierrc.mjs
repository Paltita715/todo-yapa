/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  quoteProps: 'consistent',
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
