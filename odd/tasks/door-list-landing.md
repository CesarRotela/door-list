# Door List landing

## Objective

Create the initial Door List event landing page as a clean Next.js scaffold.

## Problem and why

The repository is empty. Door List needs a minimal, runnable foundation that presents one event without retaining any default Next.js content.

## Scope

- Next.js App Router with TypeScript and Tailwind CSS v4.
- One route at `/`.
- Hardcoded event title, date, and venue.
- Visible inert `Registrarme` button.
- No database, authentication, or dependencies beyond the scaffold.

## Constraints

- Replace the default Next.js page completely.
- `npm run dev` must serve the page without errors.
- `npm run build` must pass.
- Artifact language: neutral Spanish (`castellano`) for all user-facing UI copy and metadata (updated per explicit user instruction); English for code identifiers and technical documentation.

## Authorized scope

- Repository configuration and application files required by the Next.js scaffold.
- `app/` landing page and global styling.
- Package manager metadata created by npm.

## Delivery

- Strategy: `ask-on-risk`.
- Forecast: under 400 authored changed lines (actual authored lines excluding `package-lock.json`: 162 lines).
- Route: delegated direct.
- Trigger evidence: project creation and landing implementation require multiple non-trivial files.

## TDD

- Mode: enabled by repository instructions.
- Test runner: none available in the scaffold and additional dependencies are prohibited.
- Applicable checks: production build, development server readiness, and browser/HTML inspection of the four required elements.

## Tasks

- [x] **DL-001 — Scaffold and implement the event landing**
  - Create the minimal Next.js App Router scaffold with TypeScript and Tailwind CSS v4.
  - Replace all default page content with the hardcoded event landing.
  - Verify the production build and local runtime.
  - Confirm title, date, venue, and `Registrarme` are visible with no default scaffold remnants.
  - Close with a Conventional Commit on `feat/door-list-landing`.

## Progress and evidence

- Accepted user change: switched all user-facing project copy and metadata to neutral Spanish (`lang="es"`, `Próximo evento`, `Sesiones Nocturnas de Sintetizador`, `Fecha: Sábado 14 de noviembre de 2026, 22:00 h`, `Lugar: Sala Central 404, Distrito Cultural`, and `Registrarme`) while preserving English code identifiers.
- `npm run build`: passed (exit code 0, route `/` statically prerendered with zero build or type errors).
- `npm run dev` + HTTP probe: `next dev` started cleanly and returned HTTP 200 on `/` with all four required elements and no default Next.js remnants.
- Independent verification (`research` subagent): PASS across scaffold configuration, source code, and `.next/server/app/index.html`.
- Review/RDD state: `disabled/unmanaged` (`receipt-driven development: off`).
- Engram mirror (`odd/door-list-landing/tasks`): pending (Engram MCP tools unavailable in current runtime session).

## Next step

Feature complete on `feat/door-list-landing`. Ready for user review or next feature task.
