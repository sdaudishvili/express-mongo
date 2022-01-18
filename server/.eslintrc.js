module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-unused-vars': 0,
    'no-console': 0,
    'func-names': 0,
    'no-underscore-dangle': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0
  }
};
