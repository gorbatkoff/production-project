module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:i18next/recommended",
    ],
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
        "react-hooks",
    ],
    "rules": {
        "indent": ["error", 4],
        "linebreak-style": "off",
        "quotes": [
            "warn",
            "double",
        ],
        "semi": [
            "off",
            "never"
        ],
        "react/react-in-jsx-scope": "off",
        "i18next/no-literal-string": ["warn", {
            markupOnly: true,
            ignoreAttribute: [
                "data-testid", "to"
            ]
        }],
        "@typescript-eslint/no-var-requires": "off",
        "react-hooks/rules-of-hooks": "error", // Проверяем правила хуков
        "react-hooks/exhaustive-deps": "error", // Проверяем зависимости эффекта
        "react/display-name": "off",
        "@typescript-eslint/ban-ts-comment": "warn"
    },
    globals: {
        __IS_DEV__: true,
        __API_URL__: true,
    },
    overrides: [ // отключение переводов в тестовых файлах
        {
            files: ["**/src/**/*.test.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off"
            }
        }
    ]
}
