module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react/no-unstable-nested-components': ['off'],
    'react-native/no-inline-styles': ['off'],
    '@typescript-eslint/no-shadow': ['off'],
    'react-hooks/exhaustive-deps': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'no-shadow': ['off'],
  },
};
