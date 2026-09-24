# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## API configuration

When running the frontend in GitHub Codespaces, define `VITE_CODESPACE_NAME` in `.env.local` with the value of the Codespace name:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

The app then requests the API at `https://your-codespace-name-8000.app.github.dev/api/`. When `VITE_CODESPACE_NAME` is unset, the app uses the Vite `/api` proxy for localhost development (`http://localhost:8000`). `VITE_API_URL` can be used as an explicit API base URL override.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
