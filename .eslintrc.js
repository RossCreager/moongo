module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: '*', next: 'for' },
    ],
    'object-shorthand': 'error',
    'import/newline-after-import': ['error'],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0 }],
    'no-console': 'error',
  },
}
