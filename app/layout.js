import "/public/assets/css/site.css"
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google'
import { GoogleAnalytics } from "@next/third-parties/google"

const manrope = Manrope({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--manrope",
    display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--jakarta",
    display: 'swap',
})

const description = "we specialize in crafting bespoke, handmade leather and textile products, blending tradition with modern design to deliver excellence worldwide"

export const metadata = {
    title: "Fusion Fashion Limited",
    description,
    alternates: {
        canonical: "https://www.fusionfashionltd.com/",
        languages: {
            en: "https://www.fusionfashionltd.com/",
        },
    },
    openGraph: {
        title: "Fusion Fashion Limited",
        description,
        url: "https://www.fusionfashionltd.com/",
        siteName: "Fusion Fashion",
        images: [
            {
                url: "https://www.fusionfashionltd.com/logo.png", // Must be an absolute URL
                width: 800,
                height: 600,
            },
        ],
        locale: "en",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    other: {
        "p:domain_verify": "bf9c8390c145d8d49dfdeda69d00a5db",
    },
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#1B3B6F',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Runs before the page shows: stop the browser from reopening at the old scroll position */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: "if('scrollRestoration' in history){history.scrollRestoration='manual'}",
                    }}
                />
            </head>
            <GoogleAnalytics gaId="G-R3XD0P51QE" />
            <body className={`${manrope.variable} ${jakarta.variable} position-relative bg2-clr`}>{children}</body>
        </html>
    )
}
