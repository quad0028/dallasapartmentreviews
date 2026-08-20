# search.dallasapartmentreviews.com

One-page apartment search site served by GitHub Pages, matching the design of
[DallasApartmentReviews.com](https://dallasapartmentreviews.com).

## What's here

- `index.html` — form-first landing page (header/nav/footer mirror the main site)
- `thank-you/index.html` — post-submit page the form redirects to
- `css/` — the main site's compiled stylesheets, self-hosted
- `images/` — self-hosted logo and favicon
- `CNAME` — custom domain for GitHub Pages
- `404.html` — redirects unknown paths back to the form

## How the form works

The form POSTs a JSON lead to the n8n webhook and mirrors a flattened copy to
FormSubmit (email backup), then redirects to `/thank-you/`. Conditional
fields, field names, and validation are carried over unchanged from the
original implementation.

## Deploying changes

GitHub Pages serves the `main` branch root. Merge to `main` and the site
updates in about a minute.
