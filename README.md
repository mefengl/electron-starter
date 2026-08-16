# electron-starter

Build upon amazing [electron-vite](https://github.com/alex8088/electron-vite) framework.

## Requirements

- [Node.js](https://nodejs.org/) 22.18+
- [pnpm](https://pnpm.io/)

## Addons

- [orpc](https://github.com/unnoq/orpc) via MessagePort (Electron adapter)
- [electron-log](https://github.com/megahertz/electron-log)
- [electron-conf](https://github.com/alex8088/electron-conf)
- [@tanstack/router](https://tanstack.com/router)
- [@tanstack/react-query](https://tanstack.com/query/latest)
- [shadcn/ui](https://ui.shadcn.com)
- [tailwindcss](https://tailwindcss.com)

dev:

- [eslint-config](https://github.com/antfu/eslint-config)
- [bumpp](https://github.com/antfu-collective/bumpp): See [Version Bumping](#version-bumping)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Project Setup

### Install

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Add UI

```bash
pnpm exec shadcn add button
```

### Version Bumping

Run `pnpm bump` to bump version in cli.

### Build

```bash
# For windows
pnpm build:win

# For macOS
pnpm build:mac

# For Linux
pnpm build:linux
```
