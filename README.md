# Aweksha Ghimire · Portfolio

Personal portfolio site, live at **https://aweksha.github.io**.

Built with React, TypeScript, and Vite. Every push to `main` rebuilds and publishes the site through GitHub Actions.

## Run it locally

```sh
npm install
npm run dev
```

## Checks

```sh
npm run lint       # oxlint
npm run typecheck  # TypeScript
npm test           # Vitest: routing and content checks
npm run build      # production build
```

The tests in `src/data/data.test.ts` catch the easy mistakes in hand-edited content: duplicate ids, internal links to pages that don't exist, tool notes for tags a card doesn't show, and projects that point at a missing role or course. GitHub Actions runs all four checks before every deploy, and a failure leaves the live site unchanged.

## Where to edit things

- `src/data/profile.ts` — name, email, and links (LinkedIn, GitHub, résumé)
- `src/data/experience.ts` — Experience Scrapbook entries and their detail pages
- `src/data/projects.ts` — project cards for Selected Projects, Academic Work, and Fun Corner
- `src/data/academics.ts` — credentials and coursework on Academic Work
- `src/data/pages.ts` — the tabs: names, order, and descriptions
- `src/App.tsx` — page content for each tab
- `src/index.css` — colors, fonts, and layout
