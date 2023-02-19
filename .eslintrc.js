module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:i18next/recommended",
    ],
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next",
    ],
    "rules": {
        "indent": ["error", 4],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "warn",
            "double",
        ],
        "semi": [
            "off",
            "never"
        ],
        "react/react-in-jsx-scope": "off",
        "i18next/no-literal-string": ["error", {markupOnly: true}]
    }
}
