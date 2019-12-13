module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-one-expression-per-line": "off"
  },
};
