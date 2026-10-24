import Link from "next/link";
import { SiAffinitydesigner } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoBusinessOutline } from "react-icons/io5";

export default function Offer1() {
  return (
    <>
      <section className="offer-sectionv02 pt-space pb-space">
        <div className="container position-relative">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
            <div className="pricing-title" data-aos="fade-up" data-aos-duration={1000}>
              <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-3 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3">
                WHAT WE OFFER
              </div>
              <h2 className="stitle mt-xxl-8 mt-xl-6 mt-5">
                What <span className="fw-400">We Can Do for</span>
                <span className="d-block fw-bold">Our Clients</span>
              </h2>
            </div>
          </div>
          <div className="row g-xxl-7 g-xl-6 g-4">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={500}
            >
              <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                  <div className="icon">
                  <IoBusinessOutline size={50}/>
                  </div>
                  <h5 className="seri white-clr d-flex align-items-end">01</h5>
                </div>
                <div className="content">
                  <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                    Bespoke Leather Goods
                  </h5>
                  <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                  Custom-crafted leather products tailored to your specifications, from stylish jackets,bags to elegant accessories.

                  </p>
                  <Link href="/contact" className="white-clr d-flex gap-4">
                    Explore More
                    <span className="rot60">
                      <i className="fas fa-arrow-up white-clr" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={700}
            >
              <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                  <div className="icon">
                  <SiAffinitydesigner  size={50}/>
                  </div>
                  <h5 className="seri white-clr d-flex align-items-end">02</h5>
                </div>
                <div className="content">
                  <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                  Personalized Designs: 
                  </h5>
                  <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                  Thoughtfully designed products that blend tradition with modern trends, delivering a distinctive touch to every item.

                  </p>
                  <Link href="/contact" className="white-clr d-flex gap-4">
                    Explore More
                    <span className="rot60">
                      <i className="fas fa-arrow-up white-clr" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={900}
            >
              <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                  <div className="icon">
                  <AiOutlineGlobal size={50}/>
                  </div>
                  <h5 className="seri white-clr d-flex align-items-end">03</h5>
                </div>
                <div className="content">
                  <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                  Global Export Services:
                  </h5>
                  <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                  Reliable and efficient delivery of our handcrafted goods to clients worldwide, ensuring quality and excellence
                  </p>
                  <Link href="/contact" className="white-clr d-flex gap-4">
                    Explore More
                    <span className="rot60">
                      <i className="fas fa-arrow-up white-clr" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
