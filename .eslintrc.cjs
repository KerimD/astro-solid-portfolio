/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:solid/typescript'
  ],
  plugins: ['solid', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  root: true,
  ignorePatterns: ['postcss.config.cjs']
};
