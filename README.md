# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## gh-pages check (postinstall)

This template includes a small helper script called `check-gh-pages` that is run during `postinstall`. It safely checks whether the remote branch `origin/gh-pages` exists and, if present, fetches and lists a few files from it. This prevents `npm i` from failing when the `gh-pages` branch doesn't exist in your remote repository.

You can run it manually:

```bash
npm run check-gh-pages
```

Alternatives:

- Remove the `postinstall` entry if you don't need this behavior locally.
- Call `npm run check-gh-pages` only in CI or your deploy scripts instead of during `postinstall`.
