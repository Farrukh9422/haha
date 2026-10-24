import AboutUS from './about-page';

export const metadata = {
    title: "Fusion Fashion Limited",
    description:
      "we specialize in crafting bespoke, handmade leather and textile products, blending tradition with modern design to deliver excellence worldwide",
    alternates: {
      canonical: "https://www.fusionfashionltd.com/about",
      languages: {
        tr: "https://www.fusionfashionltd.com/about",
      },
    },
    openGraph: {
      title: "Fusion Fashion Limited",
      description:
        "we specialize in crafting bespoke, handmade leather and textile products, blending tradition with modern design to deliver excellence worldwide",
      url: "https://www.fusionfashionltd.com/about",
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

const About = ()=>{

    return(
        <>
        <AboutUS/>
        </>
    )
}

 export default About