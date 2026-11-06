# Door List

## Project

- Next.js App Router application using TypeScript, React, and Tailwind CSS v4.
- `app/page.tsx` contains the single event landing page; `app/layout.tsx` defines the root layout and metadata; `app/globals.css` imports Tailwind.
- Event details are currently hardcoded, and the registration button has no behavior. Do not imply that it submits data.
- User-facing copy and metadata are in neutral Spanish; keep code identifiers and technical documentation in English.

## Commands and checks

- Install dependencies: `npm ci`.
- Start development server: `npm run dev`.
- Verify a production build: `npm run build`.
- There is currently no test or lint script. For UI changes, also inspect the affected page and its responsive layout.

## Working conventions

- Keep changes focused and follow the existing App Router and Tailwind patterns.
- TypeScript strict mode is enabled; the `@/*` alias maps to the repository root.
- Do not add a database, authentication, or extra dependencies without explicit authorization.
- Do not commit generated output, dependencies, or environment files; see `.gitignore`.
