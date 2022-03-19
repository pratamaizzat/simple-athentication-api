module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  ignorePatterns: ['node_modules/**/*.js'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': 'error',
    camelcase: 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
  },
}
