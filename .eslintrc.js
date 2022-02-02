module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["plugin:react/recommended", "eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended", "next/babel", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  settings: {
    'import/resolver': {
      typescript: {}
    },
    'react': {
      'version': 'detect'
    }
  },
  rules: {
    quotes: ["error", "double", {
      "avoidEscape": true
    }],
    camelcase: "error",
    indent: ["error", 2],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-unused-vars": "warn"
  }
};