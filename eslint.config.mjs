import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'

const compat = new FlatCompat()

export default antfu({
  rules: {
    'eslint-comments/no-unlimited-disable': 'off',
    'import/order': 'off',
    'node/prefer-global/process': 'off',
    'tailwindcss/migration-from-tailwind-2': 'off',
    'tailwindcss/no-custom-classname': 'off',
  },
}, ...compat.config({
  ignorePatterns: [
    'src/renderer/src/components/ui/*',
    'src/renderer/src/lib/utils.ts',
    'tailwind.config.js',
  ],
}), perfectionistNatural)
