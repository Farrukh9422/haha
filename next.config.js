// `npm run build`        -> normal Next.js build (Vercel / Node.js hosting)
// `npm run build:static` -> plain HTML files in /out for any web hosting (cPanel, Hostinger, ...)
const isStaticExport = process.env.STATIC_EXPORT === '1'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  ...(isStaticExport && {
    output: 'export',
    // /about -> /about/index.html, which every web server can serve
    trailingSlash: true,
  }),

  // Not used by the static export; there public/.htaccess does the same job on Apache hosting
  ...(!isStaticExport && {
    async headers() {
      return [
        {
          // Open the catalogue inside the browser's PDF viewer (it can still be downloaded from there)
          source: '/Fusion-Fashion-Catalogue.pdf',
          headers: [
            { key: 'Content-Type', value: 'application/pdf' },
            { key: 'Content-Disposition', value: 'inline; filename="Fusion-Fashion-Catalogue.pdf"' },
          ],
        },
      ]
    },
  }),
}

module.exports = nextConfig
