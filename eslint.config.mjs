import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'

const compat = new FlatCompat()

export default antfu(
  {
    perfectionistNatural,
    rules: {
      'import/order': 'off',
    },
  },

  {
    rules: {
      'tailwindcss/migration-from-tailwind-2': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
  },

  ...compat.config({
    extends: [
      'plugin:tailwindcss/recommended',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: [
      'tsconfig.*',
    ],
  }),

  // electron
  {
    rules: {
      'node/prefer-global/process': 'off',
    },
  },

  // shadcn/ui - electron
  ...compat.config({
    ignorePatterns: [
      'src/renderer/src/components/ui/*',
      'src/renderer/src/lib/utils.ts',
      'tailwind.config.js',
    ],
  }),

  // @tanstack/react-router
  ...compat.config({
    ignorePatterns: ['routeTree.gen.ts'],
  }),
)
