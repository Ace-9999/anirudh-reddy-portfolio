# Anirudh Reddy — Personal portfolio

A responsive, static portfolio in black and charcoal, with soft lighting, white typography, and restrained accents. Built with semantic HTML, CSS, and vanilla JavaScript. No package installation or environment variables required.

## Run locally

Requires Node.js 18 or newer.

```sh
npm run dev
```

Open http://127.0.0.1:3000. On Windows PowerShell with script execution disabled, use `npm.cmd run dev`.

```sh
npm run build
npm run preview
```

The build copies only website files into `dist/`. Stop the dev server before starting preview, as both use port 3000.

## Deploy to Vercel

Import this folder's Git repository into Vercel. The included `vercel.json` sets:

- Framework preset: Other
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none

Alternatively, run `vercel` from this directory using an authenticated Vercel CLI. This project has been prepared for deployment, but has not been published.

## Edit content

- `index.html`: biography, project links, education, experience, contact information.
- `styles.css`: palette, typography, layout, responsive rules, animations.
- `app.js`: portrait tilt, reveals, reading progress, email copying.
- `public/assets/Anirudh-Reddy-Resume.pdf`: downloadable source résumé.
- `public/assets/anirudh-portrait.png`: edited portrait.

Google Fonts provides DM Sans and Manrope; local Arial and Georgia fallbacks keep the page usable when fonts are unavailable. All other assets are served locally. Copying the email requires a secure browser context (HTTPS or localhost), with a readable fallback message if unavailable. Reduced-motion preferences disable animations, tilt, and smooth scrolling. Content remains accessible without JavaScript.

Project artwork is illustrative CSS composition, not screenshots of the applications. Public repository links point to CyberArena, HUB, and PulseBridge. Resume statements preserve in-progress and AI-assisted qualifications. Phone number is omitted from page copy but remains in the downloadable original résumé.

## Portrait treatment

Selected the front-facing outdoor blue-shirt photograph, `e06d0af5-3744-4447-ba86-1e83b18ce791.jpeg`, for its direct expression and approachable appearance. Edited with the built-in image generation tool; original unchanged. Final asset: `public/assets/anirudh-portrait.png`.

Prompt: “Edit this exact photograph for a personal developer portfolio. Identity-preserve: keep exact face, facial proportions, hairstyle, glasses, expression and blue shirt unchanged. Make a natural chest-up portrait crop, with modest headroom. Gently lift facial shadows, subtly boost detail without artificial skin smoothing, slightly desaturate blue and give a warm film-like neutral grade. Soften existing trees/building background into subtle natural shallow-depth-of-field sage greenery; crop out adjacent people. Authentic photographic appearance, no invented suit or accessories, no text. Save the edited portrait as a project asset.”

## Validation

Production build, JavaScript syntax checks, local HTTP asset checks, and internal link validation completed. Interactive visual browser QA was unavailable because the browser/computer-use host was not connected.
