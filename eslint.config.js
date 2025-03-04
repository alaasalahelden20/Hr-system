import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import a11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.app.json', './tsconfig.node.json'], // Ensures TypeScript checks align with tsconfig.json
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
      'jsx-a11y': a11y,
      import: importPlugin,
      prettier,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true, // Always attempt to resolve types under @types directory
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'], // Ensure all extensions are included
        },
      },
    },
    rules: {
      // General ESLint rules
      'no-unused-vars': 'off', // Disable in favor of TS rule
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // TypeScript rules for stricter typing
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'error', // Require explicit return types
      '@typescript-eslint/no-explicit-any': 'error', // Disallow any usage
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'], // Enforce consistent type aliases
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/no-inferrable-types': 'error', // Prevent unnecessary type annotations
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowNullableBoolean: true, // Allow nullable booleans (optional)
          allowNullableEnum: true, // Allow nullable enums (optional)
          allowNullableNumber: true, // Allow nullable numbers (optional)
          allowNullableObject: true, // Allow nullable objects (optional)
          allowNullableString: true, // Allow nullable strings (optional)
        },
      ],
      '@typescript-eslint/no-empty-interface': 'warn', // Prevent empty interfaces unless extending
      '@typescript-eslint/explicit-module-boundary-types': 'error', // Require explicit types for exported APIs
      '@typescript-eslint/no-floating-promises': 'error', // Require handling promises properly
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',

      // React and JSX rules
      'react-hooks/rules-of-hooks': 'error',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',

      // Import rules
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',

      // Prettier
      'prettier/prettier': 'warn',
    },
  },
];
