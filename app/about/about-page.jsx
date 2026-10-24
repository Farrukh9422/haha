import Layout from "@/components/layout/Layout"

export default function AboutUS() {
    return (
        <Layout headerStyle={2} breadcrumbTitle="About Us">
            <section className="pt-space pb-space section-bg">
                <div className="container">
                    <div className="row g-6 justify-content-center">
                        <div className="col-lg-10">
                            <div className="pricing-title">
                                <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1400}>
                                    ABOUT Fusion Fashion PVT Ltd
                                </div>
                                <div className="ff-about-intro d-flex flex-column flex-md-row align-items-md-center gap-4 gap-xl-6 mb-xxl-8 mb-xl-7 mb-5">
                                    <div className="thumb ff-about-img" data-aos="zoom-in-up" data-aos-duration={2000}>
                                        <img src="/assets/img/hero/heroHomepage.jpeg" alt="Fusion Fashion craftsmanship" className="w-100" />
                                    </div>
                                    <h2 className="stitle" data-aos="zoom-in-left" data-aos-duration={1700}>
                                        Custom leather and textile products exports worldwide
                                    </h2>
                                </div>
                                <p className="white-clr" data-aos="zoom-in-up" data-aos-duration={1400}>
                                    At Fusion Fashion, we specialize in exporting bespoke custom leather and textile products.
                                    Our focus is on delivering high-quality, handcrafted items tailored to meet the specific needs
                                    of businesses worldwide. From premium leather jackets and accessories to unique textile pieces,
                                    we take pride in our craftsmanship and attention to detail. We aim to build long-term relationships
                                    with our clients by offering reliable service and products that stand out for their quality and design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
