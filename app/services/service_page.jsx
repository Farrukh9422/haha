'use client'
import Layout from "@/components/layout/Layout"

import { useState } from 'react'
export default function ServicePage() {
    const [isAccordion, setIsAccordion] = useState(1)
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    const [isTab, setIsTab] = useState(1)
    const handleTab = (i) => {
        setIsTab(i)
    }
    return (
        <>

            <Layout headerStyle={2} breadcrumbTitle="Our Services">
                <div>
                    <section className="service-section pt-space pb-space">
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                                <div className="pricing-title">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                        WHAT WE OFFER
                                    </div>
                                    <h2 className="stitle">
                                        Most <span className="fw-400">experienced</span> services
                                    </h2>
                                </div>
                            </div>
                            <div className="row g-xxl-6 g-4">
                                <div className="service-tabing-wrap Faqs-section position-relative">
                                    <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border  ${isAccordion === 1 ? "active" : ""}`}>
                                        <div className="header-area" onClick={() => handleAccordion(1)}>
                                            <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                <div className="mtitle-ara">
                                                    <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                        01
                                                        <span className="rot60 d-inline-block theme-clr">
                                                            <i className="fa-solid fa-arrow-right" />
                                                        </span>
                                                    </span>
                                                    <span className="mtitle d-block mt-6">
                                                        <div className="white-clr whitehover">
                                                        Sourcing
                                                        </div>
                                                    </span>
                                                    <span className=" mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                    We partner with trusted suppliers who share our commitment to quality and sustainability.

                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/service/source.jpeg" alt="img" width={400} className="rounded"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border  ${isAccordion === 2 ? "active" : ""}`}>
                                        <div className="header-area" onClick={() => handleAccordion(2)}>
                                            <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                <div className="mtitle-ara">
                                                    <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                        02
                                                        <span className="rot60 d-inline-block theme-clr">
                                                            <i className="fa-solid fa-arrow-right" />
                                                        </span>
                                                    </span>
                                                    <span className="mtitle d-block mt-6">
                                                        <div className="white-clr whitehover">
                                                        Bespoke Design
                                                        </div>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                    We work closely with clients to design custom products that perfectly fit their specifications and preferences.
                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/service/bespoke.jpeg" alt="img" width={430} className="rounded"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border  ${isAccordion === 3 ? "active" : ""}`}>
                                        <div className="header-area" onClick={() => handleAccordion(3)}>
                                            <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                <div className="mtitle-ara">
                                                    <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                        03
                                                        <span className="rot60 d-inline-block theme-clr">
                                                            <i className="fa-solid fa-arrow-right" />
                                                        </span>
                                                    </span>
                                                    <span className="mtitle d-block mt-6">
                                                        <div className="white-clr whitehover">
                                                        Handmade Craftsmanship
                                                        </div>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                    Our skilled artisans create each piece by hand, ensuring a high level of detail and personalization.
                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/service/craftman.jpeg" alt="img" width={400} className="rounded"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border  ${isAccordion === 4 ? "active" : ""}`}>
                                        <div className="header-area" onClick={() => handleAccordion(4)}>
                                            <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                <div className="mtitle-ara">
                                                    <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                        04
                                                        <span className="rot60 d-inline-block theme-clr">
                                                            <i className="fa-solid fa-arrow-right" />
                                                        </span>
                                                    </span>
                                                    <span className="mtitle d-block mt-6">
                                                        <div className="white-clr whitehover">
                                                        Production
                                                        </div>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                    Our skilled artisans and advanced production techniques guarantee exceptional products.
                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                               
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/service/production.jpeg" alt="img" width={350} className="rounded"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border  ${isAccordion === 5 ? "active" : ""}`}>
                                        <div className="header-area" onClick={() => handleAccordion(5)}>
                                            <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                <div className="mtitle-ara">
                                                    <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                        04
                                                        <span className="rot60 d-inline-block theme-clr">
                                                            <i className="fa-solid fa-arrow-right" />
                                                        </span>
                                                    </span>
                                                    <span className="mtitle d-block mt-6">
                                                        <div className="white-clr whitehover">
                                                        Quality Control
                                                        </div>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                    Each product undergoes thorough inspection to ensure it meets our strict quality criteria.

                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                               
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/service/qality_controll.jpeg" alt="img" width={350} className="rounded"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border  ${isAccordion === 6 ? "active" : ""}`}>
                                        <div className="header-area" onClick={() => handleAccordion(6)}>
                                            <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                <div className="mtitle-ara">
                                                    <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                        04
                                                        <span className="rot60 d-inline-block theme-clr">
                                                            <i className="fa-solid fa-arrow-right" />
                                                        </span>
                                                    </span>
                                                    <span className="mtitle d-block mt-6">
                                                        <div className="white-clr whitehover">
                                                        Export
                                                        </div>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                    We handle all logistics with precision to ensure timely and secure delivery to our global clientele.

                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                               
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/service/export.jpeg" alt="img" width={450} className="rounded"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}