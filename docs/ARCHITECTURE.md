# Architecture

This repo hosts multiple surfaces:
- **UI (GitHub Pages)** in `apps/grower-ui` – lightweight HTML/JS modular cards.
- **Analytics** artifacts in `analytics/` – GA4 measurement plan and GTM exports.
- **Models** in `models/` – add SQL/dbt for your warehouse.
- **Dashboards** in `dashboards/` – Power BI templates (`*.pbit`) and documentation.
- **Data** in `data/` – samples for testing.

Each module is a small, isolated surface (e.g., `The Signal`, `UX Playground`). The homepage renders modules dynamically from `assets/script.js`.
