import Link from "next/link";

export default function Hero2() {
  return (
    <>
      <section className="hero-section-version2 position-relative">
        <div className="container">
          <div className="row g-5 align-items-center justify-content-between">
            <div className="col-lg-8 col-md-7">
              <div className="hero-v2-content">
                <h1
                  className="mb-xxl-14 mb-xl-9 mb-lg-7 mb-6"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                >
                  Your Gateway <span className="regular"> to </span>
                  <span className="d-block">
                    Premium Leather & Textiles Products
                  </span>
                </h1>
                <div
                  className="d-flex align-items-center gap-xxl-4 gap-3 mb-xxl-14 mb-xl-9 mb-lg-8 mb-6"
                  data-aos="zoom-in-up"
                  data-aos-duration={1600}
                >
                  <span className="customer-active">1.5k+ Active Customer</span>
                </div>
                <div
                  className="d-flex flex-lg-nowrap flex-wrap align-items-center gap-xxl-7 gap-xl-5 gap-4"
                  data-aos="zoom-in-up"
                  data-aos-duration={1700}
                >
                  <div className="ringle-content">
                    <p className="white-clr mb-xxl-5 mb-xl-4 mb-3">
                      We specialize in crafting bespoke, handmade leather and
                      textile products, blending tradition with modern design to
                      deliver excellence worldwide
                    </p>
                    <Link
                      href="/about"
                      className="explore-more d-inline-flex align-items-center gap-1"
                    >
                      Explore More
                      <span className="rot60">
                        <i className="fas fa-arrow-up" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="">
                <img src="/assets/img/hero/heroHomepage.jpeg" alt="img" className="img-fluid rounded float-right"/>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/img/element/cmn-dost.png"
          alt="img"
          className="hero-v2-element"
        />
        <img
          src="/assets/img/element/arrow-cmn.png"
          alt="img"
          className="hero-v2-arrow"
        />
      </section>
    </>
  );
}
