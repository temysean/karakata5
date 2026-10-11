# Kárákátà Watches

A mobile-first luxury watch storefront built with plain HTML, CSS, and JavaScript.

## Local preview

Open `index.html` directly for a basic preview, or run a local server to test PWA installation and offline support:

```bash
python -m http.server 3000
```

Then visit http://localhost:3000

## Install as an app

The site is a Progressive Web App. After deploying over HTTPS, supported browsers can install it from the browser menu or the install button in the header. On iPhone or iPad, open the site in Safari, tap Share, then choose **Add to Home Screen**.

The service worker caches the app shell for offline reopening. To publish updates after changing the app, push the files to GitHub Pages and reload the site while online.

## GitHub Pages deployment

1. Push this repository to GitHub.
2. In the GitHub repo, go to Settings → Pages.
3. Set the source to `Deploy from a branch`.
4. Choose the `main` branch and the `/ (root)` folder.
5. Save.
6. GitHub will give you a live URL like:
   `https://your-username.github.io/your-repository-name/`

This app is static and works well with GitHub Pages without a build step.
