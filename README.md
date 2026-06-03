# GU-Q Finance Hotel Catalogue — Official Hardened Package

This package upgrades the catalogue from a prototype into a safer Finance-ready website.

## What changed

- Live data failure now shows a visible user-facing error instead of silently pretending everything is fine.
- Sample-data fallback is disabled in production through `ALLOW_SAMPLE_FALLBACK: false`.
- Apps Script now sends only public allowlisted columns.
- Internal notes are not sent by the API.
- Print/export clutter is removed from the public page.
- Rate notes are not shown on hotel cards or compare rows.
- Policy and contact details are separated in the detail modal.
- Compare selection bug was cleaned.
- Spreadsheet governance fields were added: Public Data Status, Missing Required Fields, Rate Valid Until, Contract Expiry Date, Reviewed By, Review Date, Source Document, and Public Notes Review.

## Files

- `index.html` — public website shell.
- `styles.css` — official-looking visual refinements.
- `app.js` — production-safe frontend logic.
- `config.js` — live data settings.
- `sample-data.js` — kept only for local preview; not used in production unless enabled.
- `Code.gs` — hardened Google Apps Script API.
- `official_hotel_catalogue_governed.xlsx` — updated spreadsheet template with governance checks.

## Deployment steps

1. Upload or replace the Google Sheet with `official_hotel_catalogue_governed.xlsx`.
2. Open the Google Sheet > Extensions > Apps Script.
3. Replace the script with `Code.gs`.
4. Deploy > New deployment > Web app.
5. Execute as: Me.
6. Access: choose the correct public or Georgetown-only setting.
7. Copy the `/exec` URL into `config.js`.
8. Upload `index.html`, `styles.css`, `app.js`, `config.js`, and `sample-data.js` to GitHub Pages.
9. Test the site in an incognito/private browser while logged out of Google.

## Production rule

Do not set `ALLOW_SAMPLE_FALLBACK` to `true` on the official Finance website. If live data fails, users should see an error, not stale sample data.
