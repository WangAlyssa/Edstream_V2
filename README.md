# EdStream V2

EdStream V2 is a Vite + React + TypeScript landing page for an integrated Canvas LMS communication and academic collaboration product. The UI uses shadcn-ui components and Tailwind CSS.

## Tech stack

- Vite
- React
- TypeScript
- shadcn-ui
- Tailwind CSS
- React Router

## Prerequisites

Install Node.js and npm before running the project. The repository includes `package-lock.json`, so use `npm ci` for reproducible installs.

## Local development

```sh
npm ci
npm run dev
```

The Vite development server is configured to listen on port `8080`.

Open:

```text
http://localhost:8080
```

## Available scripts

```sh
npm run dev       # Start the local development server
npm run build     # Build the production bundle into dist/
npm run build:dev # Build with Vite development mode
npm run lint      # Run ESLint
npm run preview   # Preview the built dist/ bundle locally
```

## Production build and preview

```sh
npm run build
npm run preview
```

`npm run preview` serves the files generated in `dist/`.

## Routing and deployment notes

This is a client-side React Router app. The `public/_redirects` file rewrites all routes to `/index.html` for static hosts that support Netlify-style redirects.

For other static hosts, configure fallback routing so paths like `/features`, `/about`, and `/contact` return `index.html`.

## Troubleshooting

- If `vite: not found` appears, dependencies are missing. Run `npm ci`.
- If the build cannot resolve `index.html`, confirm the repository root contains `index.html` and that it loads `/src/main.tsx`.
- If ESLint reports warnings about Fast Refresh, they come from existing component files exporting helper values alongside components. They do not block the current build.
