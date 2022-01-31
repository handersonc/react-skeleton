module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        "plugin:react/recommended",
        "eslint:recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    plugins: [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prettier"
    ],
    settings: {
        'import/resolver': {
            typescript: {}
        },
        'react': {
            'version': 'detect'
        }
    },
    rules: {
        quotes: [2, "single", {
            avoidEscape: false
        }],
        camelcase: "warn",
        indent: ["error", 2]
    }
}
