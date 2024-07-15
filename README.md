# electron-starter

Build upon amazing [electron-vite](https://github.com/alex8088/electron-vite) framework.

## Addons

- @tanstack/router: [tanstack/router](https://tanstack.com/router)
- shadcn/ui: [shadcn/ui](https://ui.shadcn.com)
- tailwindcss
- eslint: [eslint-config](https://github.com/antfu/eslint-config)

## Notice

The automatic import of UI components with aliases is not functioning correctly. For instance, instead of getting `import { Button } from "@renderer/components/ui/button";`, you may receive `import { Button } from "./components/ui/button";`.

> Currently, manual updating is required. If you have a solution to fix this issue, please submit an issue or pull request.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Project Setup

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
