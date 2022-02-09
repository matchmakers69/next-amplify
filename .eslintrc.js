module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: "module",
    tsconfigRootDir: __dirname
  },
  plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
  ignorePatterns: ["node_modules/*", ".next/*", ".out/*"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  ignorePatterns: [".eslintrc.js", "jest.config.js", "jest-e2e.config.js", "bin/**/*", "dist/**/*"],
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "react-hooks/exhaustive-deps": 2,
    "react-hooks/rules-of-hooks": 2,
    "func-names": "off",
    "react/jsx-no-useless-fragment": "off",
    "no-console": 1,
    "prettier/prettier": 2,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": [0],
    "react/jsx-indent": [0],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ]
  }
};
