import ContactPage from './contact_page';

export const metadata = {
    title: "Contact US - Fusion Fashion PVT LTD",
    description:
      "Have questions or need assistance? Contact us today! We're here to help with your inquiries about our products and services.",
    alternates: {
      canonical: "https://www.fusionfashionltd.com/contact",
      languages: {
        en: "https://www.fusionfashionltd.com/contact",
      },
    },
    openGraph: {
      title: "Contact US  - Fusion Fashion PVT LTD",
      description:
       "Have questions or need assistance? Contact us today! We're here to help with your inquiries about our products and services.",
      url: "https://www.fusionfashionltd.com/contact",
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

const ContactUS = ()=>{

    return (
        <>
        <ContactPage/>
        </>
    )
}
export default ContactUS