module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: [
    '../.eslintrc.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['config-overrides.js'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@opengovsg/design-system-react',
            importNames: ['useToast'],
            message:
              'Please use: import { useToast } from "modules/common/hooks"',
          },
          {
            name: '@chakra-ui/react',
            importNames: ['useToast'],
            message:
              'Please use: import { useToast } from "modules/common/hooks"',
          },
        ],
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages.
          // Packages. `react` related packages come first.
          // Things that start with a letter (or digit or underscore), or
          // `@` followed by a letter.
          ['^react', '^@?\\w'],
          // Root imports
          // Shared imports should be separate from application imports.
          ['^(~shared)(/.*|$)'],
          ['^(~)(/.*|$)'],
          ['^(~typings)(/.*|$)'],
          [
            '^(~assets|~theme)(/.*|$)',
            '^(~contexts)(/.*|$)',
            '^(~constants)(/.*|$)',
            '^(~hooks)(/.*|$)',
            '^(~utils)(/.*|$)',
            '^(~services)(/.*|$)',
            '^(~components)(/.*|$)',
            '^(~templates)(/.*|$)',
          ],
          ['^(~pages)(/.*|$)', '^(~features)(/.*|$)'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
  },
}
