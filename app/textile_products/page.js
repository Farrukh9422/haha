import TextileProducts from './textile-page';

export const metadata = {
  title: "Textile - Fusion Fashion PVT LTD",
  description:
    "Discover our premium textile collection, from cozy quilts to stylish scarves. Crafted for comfort, quality, and lasting style in every detail",
  alternates: {
    canonical: "https://www.fusionfashionltd.com/textile_products",
    languages: {
      en: "https://www.fusionfashionltd.com/textile_products",
    },
  },
  openGraph: {
    title: "Textile - Fusion Fashion PVT LTD",
    description:
      "Discover our premium textile collection, from cozy quilts to stylish scarves. Crafted for comfort, quality, and lasting style in every detail",
    url: "https://www.fusionfashionltd.com/textile_products",
    siteName: "Fusion Fashion",
    images: [
      {
        url: "https://www.fusionfashionltd.com/assets/img/hero/heroHomepage.jpeg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en",
    type: "website",
  },
};

const Textile = ()=>{

  return(
    <>
    
    <TextileProducts/>
    </>
  )
}

export default Textile