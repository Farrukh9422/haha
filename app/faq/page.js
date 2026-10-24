import FaqPage from './faq_page';

export const metadata = {
    title: "FAQs - Fusion Fashion PVT LTD",
    description:
      "Find answers to your questions! Explore our FAQ page for details on orders, customization, shipping, and more to make your experience smooth and informed",
    alternates: {
      canonical: "https://www.fusionfashionltd.com/faq",
      languages: {
        en: "https://www.fusionfashionltd.com/faq",
      },
    },
    openGraph: {
      title: "FAQs - Fusion Fashion PVT LTD",
      description:
        "Find answers to your questions! Explore our FAQ page for details on orders, customization, shipping, and more to make your experience smooth and informed",
      url: "https://www.fusionfashionltd.com/faq",
      siteName: "Fusion Fashion",
      images: [
        {
          url: "https://www.fusionfashionltd.com/", // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
      locale: "en",
      type: "website",
    },
  };

const FAQ = ()=>{

    return (
        <>
        <FaqPage/>
        </>
    )
}

export default FAQ