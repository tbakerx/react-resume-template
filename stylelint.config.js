/* eslint-env node */

module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-order'],
  plugins: ['stylelint-prettier', 'stylelint-order'],
  rules: {
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
};
