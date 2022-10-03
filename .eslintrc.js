module.exports = {
  "extends": [
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/warnings",
    "plugin:tailwindcss/recommended",
    "eslint:recommended", //ESLintのJavaScriptルールを適用
    "plugin:@typescript-eslint/recommended", // 型チェックが不要なルールを適用
    "prettier",
    "prettier/@typescript-eslint" // Prettierでカバーできるルールを無効化
  ],
  "plugins": ["prettier", "@typescript-eslint"],
  "ignorePatterns": ["*.config.js"],
  "rules": {
    "prettier/prettier": "error",
    "import/order": [
      "error",
      {
        "alphabetize": {
          "order": "asc"
        }
      }
    ]
  }
}
