# search.dallasapartmentreviews.com

One-page apartment search form served by GitHub Pages, styled to match
[DallasApartmentReviews.com](https://dallasapartmentreviews.com).

## What's here

- `index.html`: the form page. The header, footer and theme are the main
  site's (from its `/get-apartment-list/` page); every menu and footer link
  goes back to dallasapartmentreviews.com, and its "Start Your Search"
  buttons point here.
- The form is the dallassecondchanceapartments.com form (`quad0028/sca-dallas`,
  `/get-apartment-list/`): one page whose follow-up questions open as you
  answer, with Dallas areas and neighborhoods. The consent names the Dallas
  Apartment Locator Team.
- `thank-you/index.html`: where the form lands after a send, with what
  happens next.
- `css/form.css`: the form's own styles, scoped under `.bca` so they never
  touch the main site's header and footer.
- `_astro/`, `images/brand/`, `fonts/`: the main site's stylesheets, logo,
  favicon and fonts, self-hosted.
- `sca-dropdown-validation.js`, `guest-card-copy-v1.js`,
  `_astro/form-area-context.js`: copied from sca-dallas unchanged.
  `?area=` sets the heading to that area, as on sca-dallas.
- `docs/`: the TREC Information About Brokerage Services and Consumer
  Protection Notice PDFs, linked at the bottom of the footer on every page.
- `banners/`: ad banners in the main site's colors (300x600, 300x250,
  728x90, 320x100).
- `CNAME`, `404.html` (sends any other path to the form), `robots.txt`.

## How the form sends a lead

1. It posts the lead as JSON to the n8n webhook `NewWeb3` (the one
   sca-dallas uses), with `formId` `dar-secure-form`.
2. It sends an email copy to FormSubmit with sca-dallas's FormSubmit key and
   the subject "Guest Card - Dallas Apartment Reviews Referred By: the Dallas
   Apartment Locator Team - Apartment Locators with Spirit Real Estate".
3. It goes to `/thank-you/`.

`guest-card-copy-v1.js` only acts on the sca domains it lists, so on this
domain the email copy goes straight to FormSubmit.

The form and thank-you pages are `noindex, nofollow`. `robots.txt` allows
everything so search engines can read that tag.

## Deploying changes

GitHub Pages serves the `main` branch root. Push to `main` and the site
updates in about a minute.
