import antfu from '@antfu/eslint-config'
import perfectionist from 'eslint-plugin-perfectionist'

export default antfu(
  { ignores: ['tsconfig.*'], react: true },
  { ignores: ['src/renderer/src/components/ui/**', 'src/renderer/src/lib/utils.ts'], name: 'shadcn' },
  { ignores: ['**/routeTree.gen.ts'], name: 'tanstack' },
  { name: 'electron', rules: { 'node/prefer-global/process': 'off' } },
  { files: ['**/*.tsx', '**/*.jsx'], name: 'react', rules: { 'react-refresh/only-export-components': 'off' } },
  { name: 'perfectionist', rules: { 'import/order': 'off', ...perfectionist.configs['recommended-natural'].rules } },
)
