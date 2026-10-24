# Fusion Fashion

Website for Fusion Fashion (Pvt) Ltd, built with Next.js 14.

## Run on your computer

Needs Node.js 18 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Put it live

### Option A: normal web hosting (cPanel, Hostinger, GoDaddy, ...)

```bash
npm install
npm run build:static
```

This creates an `out` folder with plain HTML files. Upload **everything inside `out`**
(including the hidden `.htaccess` file) into your domain's `public_html` folder.

### Option B: Vercel or any Node.js hosting

Connect the project (or upload it) and use the defaults:

- Build command: `npm run build`
- Start command: `npm start`

## Where things are

- Pages: `app/` (one folder per page)
- Header, menu, footer, side panel: `components/layout/`
- Home page sections: `components/sections/`
- Catalogue PDF: `public/Fusion-Fashion-Catalogue.pdf` (replace this file to update it, keep the same name)
- Styles: `public/assets/css/site.css` loads them in this order:
  `bootstrap` → `main.css` (base template) → `theme.css` (logo colors) →
  `enhancements.css` (animations) → `responsive.css` (mobile / tablet / desktop)
- To change the brand colors, edit the variables at the top of `theme.css`.
