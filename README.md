# Rostera website

This folder is a self-contained static website. Its root `index.html` is served automatically, so visitors use the site address without typing a filename.

## GitHub Pages deployment

Create a public repository containing only the files in this folder, with `index.html` at the repository root. The workflow in `.github/workflows/pages.yml` deploys the site to GitHub Pages after a push to `main`. In repository settings, set Pages to **GitHub Actions**. The public address will be `https://ACCOUNT.github.io/REPOSITORY/` and will not end in `index.html`.

The account logins and shared password in this demo are stored in client-side JavaScript. Visitors can inspect them; this is a usability demo, not real account security. All per-account state is kept in each visitor's browser.
