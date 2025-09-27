<!--
Purpose: Short, actionable instructions to help AI coding agents understand this repo
and be productive immediately. Keep it focused on discoverable patterns and exact
files/commands an agent will need while editing or adding features.
-->

# Copilot / AI agent instructions for SFN Foundation

Overview
- This is a Next.js 15 (App Router) site that serves informational pages and a
  clinician/research portal. The app is TypeScript-first and content-driven: most
  editorial content lives under `src/content` as small exported modules that the
  site imports at build/runtime.

Quick dev commands (use from repository root `sfn-foundation`)
- Install: `npm install`
- Dev server: `npm run dev` (Next with turbopack)
- Build: `npm run build`
- Start prod server: `npm run start`
- Lint: `npm run lint`

Big picture architecture (what to read first)
- App entry: `src/app` — app-router pages and layouts. Look at `layout.tsx` and
  `page.tsx` to understand global UI and providers.
- Content layer: `src/content` and `src/content/contentLoader.ts` — the site treats
  content as code (TS files exporting structured objects). Inspect `contentLoader`
  to see how content objects are consumed and rendered.
- Components: `src/components` — organized into `content/`, `core/`, `layouts/`,
  `primitives/`, and `providers/`. Follow existing patterns when adding new UI.
- Backend/data: `prisma/schema.prisma` — database models and migrations live in
  `prisma/`. The project uses `next-auth` + `@next-auth/prisma-adapter`.
- Utilities and integrations: `src/lib` contains helpers (analytics, resend email
  helpers, misc utilities). Check these for examples of environment variable usage.

Content conventions (important — follow exactly)
- Content modules export a named constant with this shape (example file:
  `src/content/info-pages/resources/patient-stories/eli-MN.ts`):
  - top-level keys: `slug`, `tags`, `hero`, `tableOfContents`, `sections`, `meta`
  - `sections` is an array of objects { id, title, content[] }
  - `content[]` items have `type` strings like `paragraph` or `image`.
    - paragraph items: { type: 'paragraph', text: string }
    - image items: { type: 'image', src, alt, caption }

  When editing or adding content files, preserve the export name and object
  shape. Components expect these shapes during render — breaking them causes UI
  runtime errors.

Prisma and auth notes
- Migrations in `prisma/migrations`. To update DB models run:
  - `npx prisma generate` after changing schema
  - `npx prisma migrate dev` during development (or the appropriate deployment
    migration flow for your environment).
- Auth uses `next-auth` with the Prisma adapter — check `src/pages/api/auth` and
  any server-side API routes that create/read the database.

Environment and secrets
- The repo uses `dotenv` style env vars. Check `src/lib/testResendEmail.js` and
  `src/lib/analytics.ts` to see which env names to set. Don't hardcode secrets.

Patterns and gotchas unique to this project
- Content-as-code: editing textual content means editing TS files (not markdown).
  Keep sentences wrapped in template literals backticks when needed. Watch for
  smart quotes or escaped characters in template strings.
- Images are in `public/images`. Content `src` paths are relative to `/public`.
- Date strings in `meta.lastUpdated` use readable strings (e.g., "September 22,
  2025"); keep that format for consistency.
- The project targets React 19 and Next 15 — new server/client component rules
  apply. Check file-level `'use client'` declarations in `src/app` and
  `src/components` when moving logic between server and client.

Where to make small changes
- Add textual edits: `src/content/...` files (patient stories, info pages)
- UI tweaks: `src/components/` and `src/app/layout.tsx`
- New pages: add folders/files under `src/app` following the app-router
  conventions.

Search tips (useful grep targets)
- Find content types: `type: "paragraph"` or `type: "image"`
- Find content loader: `contentLoader.ts`
- Find where a slug is used: search for `slug: "/resources/patient-stories` or
  other known slugs.

If you change public behavior
- Update or add minimal unit/visual tests if available (none are in repo by
  default). At minimum, run `npm run build` to catch typing/runtime issues.

Questions or unclear parts
- If a rendering component fails, inspect the expected content shape in the
  component file under `src/components/content/*` and align the content object.
- If you need missing env var names, search `src/lib` and `src/pages/api` for
  `process.env.` references.

Only add comments to the code when absolutely necessary to explain non-obvious
patterns. When explaining the code, be concise and use a 7th grade reading level.
