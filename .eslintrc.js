module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  rules: {
    'react/button-has-type': 0,
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'import/no-named-as-default': 0,
    'import/no-duplicates': 'off',
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 0,
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
    'react-hooks/exhaustive-deps': 2,
    'react-hooks/rules-of-hooks': 2,
    'func-names': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-console': 1,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': [0],
    'react/jsx-indent': [0],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'max-len': [
      'off',
      {
        code: 100,
      },
    ],
    'react/forbid-elements': [
      'error',
      {
        forbid: [
          {
            element: 'h1',
            message: "Use MaterialUI's <Typography> instead",
          },
          {
            element: 'h2',
            message: "Use MaterialUI's <Typography> instead",
          },
          {
            element: 'h3',
            message: "Use MaterialUI's <Typography> instead",
          },
          {
            element: 'h4',
            message: "Use MaterialUI's <Typography> instead",
          },
          {
            element: 'h5',
            message: "Use MaterialUI's <Typography> instead",
          },
          {
            element: 'h6',
            message: "Use MaterialUI's <Typography> instead",
          },
          {
            element: 'p',
            message: "Use MaterialUI's <Typography> instead",
          },
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {
        project: '.',
      },
    },
  },
};
