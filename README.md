# EdStream V2

EdStream V2 is a Vite + React + TypeScript marketing and guide site for EdStream, a Canvas-focused course communication product. The current direction is intentionally simple and informative: explain the product, show the core workflows, and give instructors/students a practical place to start.

## Tech stack

- Vite
- React
- TypeScript
- shadcn-ui
- Tailwind CSS
- React Router

## Site structure

- `/` - Home page with hero, about/pain-solution story, and feature demos
- `/guides` - Instructor/student tutorial directory
- `/guides/:guideId` - Individual tutorial pages with full steps, fake screenshot highlights, click targets, and expected results
- `/help` - Single-column Help Center with searchable FAQ and troubleshooting contact
- `/contact` - Contact and pilot inquiry page with a mail-based inquiry form
- `/privacy` and `/terms` - Policy pages

Legacy routes such as `/features`, `/about`, and `/faq` redirect into the simplified structure so old links do not break.

## Content principles

The site should stay Canvas-first, simple, and accurate.

- Keep the original blue/orange EdStream theme and Lato typography.
- Prefer concrete workflows over broad enterprise claims.
- Do not claim certifications, uptime guarantees, end-to-end encryption, institution counts, or adoption metrics unless they are verified.
- The main navigation should stay small: Home, Guides, Help Center, Contact.
- Header download icons link to the live iOS and Android app listings.
- Guides use a directory-to-detail flow now. Keep detailed step-by-step content on individual tutorial pages.
- Feature copy should focus on what a course team can understand quickly: 1-Click Channels, Seamless File Sharing, Automated Media Sorting, Centralized Requests, and Community.
- Contact forms currently use `mailto:info@edstream.io`; replace with a real form endpoint if backend collection is needed.

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

For other static hosts, configure fallback routing so paths like `/help`, `/contact`, and legacy redirects return `index.html`.

## Troubleshooting

- If `vite: not found` appears, dependencies are missing. Run `npm ci`.
- If the build cannot resolve `index.html`, confirm the repository root contains `index.html` and that it loads `/src/main.tsx`.
- If ESLint reports warnings about Fast Refresh, they come from existing component files exporting helper values alongside components. They do not block the current build.
- If new pages reference images, place them under `public/` and use root-relative paths such as `/logo.svg`.
