# Turtle Wishlist Workshop

Slidev web presentation for a DBCA turtle database wishlist review workshop. Workshop decisions are stored in browser `localStorage`; no backend database is required.

## Local development

Install dependencies:

```bash
npm install
```

Run the deck locally:

```bash
npm run dev
```

Build the static GitHub Pages site:

```bash
npm run build
```

Export to PDF or other supported formats:

```bash
npm run export
```

## Editing Wishlist Items

Wishlist source data lives in `src/data/wishlist.ts`.

Each wishlist item is represented as a workshop card with:

- a checkbox beside the feature title
- the original request text block
- optional fields for priority, effort, decision, and notes

Keep `originalRequest` text exactly as provided so discussion decisions remain traceable to the source request.

## GitHub Pages Deployment

The repository includes `.github/workflows/deploy.yml` for the official GitHub Pages Actions flow.

Deployment setup:

1. Create/push the repository as `turtle-wishlist`.
2. In GitHub, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push changes to the `main` branch, or run the workflow manually from **Actions**.

The workflow runs `npm ci`, builds with `slidev build --base /turtle-wishlist/`, adds `dist/.nojekyll`, uploads `dist`, and deploys it to GitHub Pages.
