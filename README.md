# electron-starter

Build upon amazing [electron-vite](https://github.com/alex8088/electron-vite) framework.

## Requirements

- [bun](https://bun.sh/)

## Addons

- [electron-trpc](https://github.com/jsonnull/electron-trpc)
- [electron-log](https://github.com/megahertz/electron-log)
- [electron-conf](https://github.com/alex8088/electron-conf)
- [@tanstack/router](https://tanstack.com/router)
- [shadcn/ui](https://ui.shadcn.com)
- [tailwindcss](https://tailwindcss.com)

dev:

- [eslint-config](https://github.com/antfu/eslint-config)
- [bumpp](https://github.com/antfu-collective/bumpp): See [Version Bumping](#version-bumping)

## Notice

The automatic import of UI components with aliases is not functioning correctly. For instance, instead of getting `import { Button } from "@renderer/components/ui/button";`, you may receive `import { Button } from "./components/ui/button";`.

> Currently, manual updating is required. If you have a solution to fix this issue, please submit an issue or pull request.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Project Setup

### Install

```bash
bun install
```

### Development

```bash
bun run dev
```

### Version Bumping

Run `bun run bump` to bump version in cli.

### Build

```bash
# For windows
bun run build:win

# For macOS
bun run build:mac

# For Linux
bun run build:linux
```
