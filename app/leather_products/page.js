import LeatherPage from './Leather_Page';

export const metadata = {
    title: "Leather - Fusion Fashion PVT LTD",
    description:
      "Explore our range of premium leather products, crafted with precision and quality. From wallets to jackets, each piece is designed for durability and style",
    alternates: {
      canonical: "https://www.fusionfashionltd.com/leather_products",
      languages: {
        en: "https://www.fusionfashionltd.com/leather_products",
      },
    },
    openGraph: {
      title: "Leather - Fusion Fashion PVT LTD",
      description:
        "Explore our range of premium leather products, crafted with precision and quality. From wallets to jackets, each piece is designed for durability and style",
      url: "https://www.fusionfashionltd.com/leather_products",
      siteName: "Fusion Fashion",
      images: [
        {
          url: "https://www.fusionfashionltd.com/assets/img/hero/hero2.jpeg", // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
      locale: "en",
      type: "website",
    },
  };

const Leather = ()=>{

    return(
        <>
        <LeatherPage/>
        </>
    )
}

export default Leather