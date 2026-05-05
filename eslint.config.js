import antfu from '@antfu/eslint-config'

export default antfu(
  { ignores: ['tsconfig.*'], react: true },
  { ignores: ['src/renderer/src/components/ui/**', 'src/renderer/src/lib/utils.ts'], name: 'shadcn' },
  { ignores: ['**/routeTree.gen.ts'], name: 'tanstack' },
  { name: 'electron', rules: { 'node/prefer-global/process': 'off' } },
  { files: ['**/*.tsx', '**/*.jsx'], name: 'react', rules: { 'react-refresh/only-export-components': 'off' } },
)
