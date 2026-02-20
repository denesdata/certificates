# székelydata — Certificate Verification System

A static website for issuing and verifying digital course certificates. Each certificate has a unique traceable ID and QR code that links to online verification.

**Live site:** *(deployed via Netlify)*

## Features

- **Certificate verification** — enter a certificate ID or scan its QR code to verify authenticity
- **Trilingual** — full Hungarian / English / Romanian support with language switcher
- **Printable certificates** — browser-based A4 landscape certificate, print-optimized with `@media print`
- **QR codes** — each certificate embeds a QR code linking to the verification URL
- **Static site** — no backend required, deploys directly to Netlify

## Organization

| Field | Value |
|---|---|
| Brand | székelydata |
| Legal entity | Csala Dénes PFA |
| Instructor | Dr. Csala Dénes |

## Certificate ID format

```
SD-YYYY-NNNN
│  │    │
│  │    └── Sequential number (0001, 0002, …)
│  └─────── Year of issuance
└────────── székelydata prefix
```

Example: `SD-2026-0001`

## Project structure

```
certification/
├── README.md
├── netlify.toml          # Netlify build config (publish: public/)
├── .gitignore
└── public/               # Published to Netlify
    ├── index.html        # Verification page
    ├── certificate.html  # Printable certificate view
    ├── _redirects        # Netlify routing
    ├── css/
    │   ├── style.css         # Main site styles
    │   └── certificate.css   # Certificate page + print styles
    └── js/
        ├── i18n.js           # Translations (HU, EN, RO)
        ├── data.js           # Certificate database
        ├── app.js            # Verification page logic
        └── certificate-app.js # Certificate page logic
```

## Issuing new certificates

Edit `public/js/data.js` and add a new entry to the `CERTIFICATES` object:

```javascript
'SD-2026-0002': {
    id: 'SD-2026-0002',
    participant: 'Kovács Anna',
    course: {
        hu: 'Bevezetés az adatvizualizációba',
        en: 'Introduction to Data Visualization',
        ro: 'Introducere în vizualizarea datelor',
    },
    date: '2026-02-16',
    location: {
        hu: 'Csíkszereda, Románia',
        en: 'Miercurea Ciuc, Romania',
        ro: 'Miercurea Ciuc, România',
    },
    instructor: 'Dr. Csala Dénes',
    issuer: {
        brand: 'székelydata',
        company: 'Csala Dénes PFA',
    },
},
```

Commit and push — Netlify will auto-deploy.

To view/print the certificate, visit:
```
https://YOUR-DOMAIN/certificate.html?id=SD-2026-0002
```

## Verification flow

1. Participant receives a printed or digital certificate with a **QR code** and **certificate ID**
2. Anyone can verify by scanning the QR code or visiting the website
3. The website displays certificate details and confirms validity

## URL patterns

| URL | Purpose |
|---|---|
| `/` | Home — verification form |
| `/?id=SD-2026-0001` | Auto-verify (used by QR codes) |
| `/verify/SD-2026-0001` | Redirects to `/?id=...` |
| `/certificate.html?id=SD-2026-0001` | View/print certificate |

## Deployment

The site is deployed to **Netlify** from this GitHub repository.

- **Build command:** none (static site)
- **Publish directory:** `public/`

The `netlify.toml` is already configured. Connect the repo to Netlify and it will deploy automatically.

## Local development

Serve the `public/` directory with any static server:

```bash
# Python
python3 -m http.server 8000 -d public

# Node.js (npx)
npx serve public
```

## Technologies

- Vanilla HTML, CSS, JavaScript (no framework, no build step)
- [Google Fonts](https://fonts.google.com/) — Inter + Playfair Display
- [qrcode-generator](https://github.com/nicktomlin/qrcode-generator) via CDN — QR code generation
- Netlify — static hosting with `_redirects` support

## License

© 2026 Csala Dénes PFA. All rights reserved.
