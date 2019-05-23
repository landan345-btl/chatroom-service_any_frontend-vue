module.exports = {
  'root': true,
  'env': {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript',
  ],
  'rules': {
    'semi': [ 2, 'always', ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [ 2, { 'x-invalid-end-tag': false, }, ],
    'quotemark': [ true, 'single', ],
    'indent': [ 1, 2, ],
    'interface-name': false,
    'ordered-imports': false,
    'object-literal-sort-keys': false,
    'no-consecutive-blank-lines': false,
    'prefer-const': 0,
    'comma-dangle': [ 'error', 'always', ],
    'variable-name': [ false, 'ban-keywords', 'check-format', 'allow-leading-underscore', ],
    'no-debugger': 2,
    'quote-props': [ 'error', 'consistent', ],
    'max-line-length': [ true, 240, ],
    'promise/valid-params': 'off',
    'object-curly-spacing': [ 'error', 'always', ],
  },
  'parserOptions': {
    parser: '@typescript-eslint/parser',
  },
};
