import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({
  rules: {
    'node/prefer-global/process': 'off',
  },
}, ...compat.config({
  extends: [
    'plugin:tailwindcss/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/migration-from-tailwind-2': 'off',
    'tailwindcss/enforces-shorthand': 'off',
  },
}))
