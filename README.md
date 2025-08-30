# The Grower — Modular Dashboard Sandbox

A monorepo scaffold for a modular analytics dashboard system. Out of the box you get:
- A static site in `apps/grower-ui` (deploys to GitHub Pages).
- Folders for analytics artifacts (GA4/GTM), SQL/dbt models, Power BI dashboards, data samples, and docs.
- GitHub Actions workflow that deploys the UI on push to `main`.

## Quickstart

1) Create a new repo on GitHub named `the-grower` (or whatever you like), **empty** (no README).
2) On your machine (or Codespaces):

```bash
git init
git branch -m main
git add .
git commit -m "feat: seed The Grower scaffold"
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

3) In the repo Settings → Pages, set:
- **Build and deployment**: GitHub Actions
- The provided workflow (`Deploy Pages`) will publish `apps/grower-ui` to Pages automatically.

4) Visit your Pages URL (e.g., `https://<your-username>.github.io/<your-repo>/`).

## Repo layout

```
.
├─ apps/
│  └─ grower-ui/          # Static site that becomes your public sandbox
├─ analytics/
│  ├─ ga4/
│  └─ gtm/
├─ models/                # SQL/dbt (add your warehouse models here)
├─ dashboards/
│  └─ powerbi/
├─ data/
│  └─ sample/
├─ docs/                  # Architecture, roadmap, etc.
└─ .github/workflows/     # Pages deploy workflow
```

## Local edits

It’s plain HTML/CSS/JS. Open `apps/grower-ui/index.html` in a browser to preview.
Adjust module cards in `assets/script.js` (see the `modules` array).

## GA4/GTM

The UI includes a `window.dataLayer` bootstrap. If you use GTM, add your container snippet.
If you use GA4 gtag directly, add your `G-XXXX` config. Avoid double-tagging.

## Licensing

MIT. See `LICENSE`.
