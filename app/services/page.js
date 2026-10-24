
const { default: ServicePage } = require("./service_page")

export const metadata = {
    title: "Services - Fusion Fashion PVT LTD",
    description:
      "Offering end-to-end services: from sourcing and bespoke design to handmade craftsmanship, production, quality control, and global export. Quality guaranteed",
    alternates: {
      canonical: "https://www.fusionfashionltd.com/services",
      languages: {
        en: "https://www.fusionfashionltd.com/services",
      },
    },
    openGraph: {
      title: "Services - Fusion Fashion PVT LTD",
      description:
        "Offering end-to-end services: from sourcing and bespoke design to handmade craftsmanship, production, quality control, and global export. Quality guaranteed",
      url: "https://www.fusionfashionltd.com/services",
      siteName: "Fusion Fashion",
      images: [
        {
          url: "https://www.fusionfashionltd.com/assets/img/service/source.jpeg", // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
      locale: "en",
      type: "website",
    },
  };

const Service = ()=>{

    return (
        <>
        <ServicePage/>
        </>
    )
}

export default Service