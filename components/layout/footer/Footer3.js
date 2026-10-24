import Link from "next/link";

export default function Footer3() {
  return (
    <>
      <footer className="footer-version-three bg1-clr">
        <div className="container">
          <div className="footer-topversion-one pb-20">
            <div className="footer-v3-titlewrap d-flex align-items-center gap-xxl-15 gap-xl-10 gap-md-8 gap-sm-5 gap-3 pb-xxl-15 pb-xl-10 pb-8">
              <Link
                href="/contact"
                className="footer-v3-title ff-talk-title"
                aria-label="Let’s talk!"
                data-aos="zoom-in-right"
                data-aos-duration={1800}
              >
                {/* Each letter is its own span so it can wave */}
                {[..."Let’s talk!"].map((letter, i) => (
                  <span key={i} aria-hidden="true" style={{ "--i": i }}>
                    {letter === " " ? " " : letter}
                  </span>
                ))}
              </Link>
              <Link href="/contact" className="ff-talk-arrow" aria-label="Contact us">
                <img
                  src="/assets/img/footer/let-arrow.png"
                  alt="arrow"
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                />
              </Link>
            </div>
            <div className="row gy-lg-0 gy-10 mt-xxl-5 mb-xxl-5 justify-content-sm-between justify-content-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h5
                    className="footer-title mb-xxl-7 mb-xl-6 mb-5"
                    data-aos="zoom-in-down"
                    data-aos-duration={1900}
                  >
                    About Us
                    <svg
                      className="d-block mt-xxl-4 mt-3"
                      width={83}
                      height={2}
                      viewBox="0 0 83 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1={-1}
                        x2={83}
                        y2={-1}
                        transform="matrix(1 0 0 -1 0 0)"
                        stroke="url(#paint0_linear_6308_4304)"
                        strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_6308_43041"
                          x1="4.02912"
                          y1="0.000277584"
                          x2={80}
                          y2="0.000110496"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="#E3FF04" />
                          <stop
                            offset={1}
                            stopColor="#E3FF04"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </h5>
                  <p
                    className="pra-clr mb-xxl-7 mb-6"
                    data-aos="zoom-in"
                    data-aos-duration={1600}
                  >
                    Fusion Fashion (Pvt) Ltd, We specialize in crafting bespoke,
                    handmade leather and textile products, blending tradition
                    with modern design to deliver excellence worldwide
                  </p>
                  <ul className="common-social d-flex align-items-center gap-2">
                    <li data-aos="zoom-in-right" data-aos-duration={1400}>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        href="https://www.facebook.com/profile.php?id=61566594073961&mibextid=ZbWKwL"
                        className="d-center"
                      >
                        <svg
                          width={10}
                          height={16}
                          viewBox="0 0 10 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8" clipPath="url(#clip0_6308_28)">
                            <path
                              d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_6308_28">
                              <rect width={10} height={16} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>
                    <li data-aos="zoom-in-right" data-aos-duration={1600}>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        href="https://www.instagram.com/fusionfashionltd?utm_source=qr&exln=MWt1bzQ2NHByOHZxcw=="
                        className="d-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z"></path>
                        </svg>
                      </Link>
                    </li>
                    <li data-aos="zoom-in-right" data-aos-duration={1700}>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        href="https://www.linkedin.com/company/fusion-fashion-limited/"
                        className="d-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                        >
                          <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C0 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" />
                        </svg>
                      </Link>
                    </li>
                    <li data-aos="zoom-in-right" data-aos-duration={1800}>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Pinterest"
                        href="https://www.pinterest.com/fusionfashionltd/"
                        className="d-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="16"
                          height="16"
                          viewBox="0 0 48 48"
                        >
                          <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 22.566518 41 21.182325 40.804883 19.853516 40.472656 C 20.333373 39.496504 20.656022 38.535017 20.929688 37.529297 L 21.960938 33.460938 C 23.040937 34.480938 24.56 35 26.5 35 C 31.74 35 36 29.73 36 23.25 C 36 16.84 30.84 12 24 12 C 17.38 12 12 17.05 12 23.25 C 12 26.23 13.149922 28.940859 15.169922 30.880859 C 15.409922 31.110859 15.820391 30.980156 15.900391 30.660156 L 16.460938 28.330078 C 16.520937 28.090078 16.460313 27.840859 16.320312 27.630859 C 15.600312 26.610859 15 25.19 15 23.25 C 15 18.7 19.04 15 24 15 C 24.82 15 32 15.24 32 23.5 C 32 27.59 30.12 32 26 32 C 24.96 31.93 24.219062 31.589062 23.789062 31.039062 C 23.049063 30.059062 23.229219 28.399297 23.449219 27.529297 L 24.220703 24.509766 C 24.420703 23.709766 24.5 23.029219 24.5 22.449219 C 24.5 20.499219 23.32 19.5 22 19.5 C 20.22 19.5 19 21.389297 19 23.279297 C 19 24.309297 19.16 25.410625 19.5 26.390625 L 17.230469 35.810547 C 17.230469 35.810547 17 36.419922 17 38.419922 C 17 38.621315 17.035148 39.14999 17.050781 39.509766 C 11.123964 36.857341 7 30.926664 7 24 C 7 14.593391 14.593385 7 24 7 z"></path>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h5
                    className="footer-title mb-xxl-7 mb-xl-6 mb-5"
                    data-aos="zoom-in-down"
                    data-aos-duration={1900}
                  >
                    Quick Links
                    <svg
                      className="d-block mt-xxl-4 mt-3"
                      width={83}
                      height={2}
                      viewBox="0 0 83 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1={-1}
                        x2={83}
                        y2={-1}
                        transform="matrix(1 0 0 -1 0 0)"
                        stroke="url(#paint0_linear_6308_4304)"
                        strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_6308_4304"
                          x1="4.02912"
                          y1="0.000277584"
                          x2={80}
                          y2="0.000110496"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="#E3FF04" />
                          <stop
                            offset={1}
                            stopColor="#E3FF04"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </h5>
                  <ul
                    className="link-footer d-grid gap-xxl-5 gap-4"
                    data-aos="zoom-in"
                    data-aos-duration={1400}
                  >
                    <li>
                      <Link
                        href="/services"
                        className="d-flex align-items-center gap-2 flink-items pra-clr"
                      >
                        <span className="ani-icons">
                          <i className="fas fa-angle-double-right pra-clr" />
                        </span>
                        Our Services
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/leather_products"
                        className="d-flex align-items-center gap-2 flink-items pra-clr"
                      >
                        <span className="ani-icons">
                          <i className="fas fa-angle-double-right pra-clr" />
                        </span>
                        Leather Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/textile_products"
                        className="d-flex align-items-center gap-2 flink-items pra-clr"
                      >
                        <span className="ani-icons">
                          <i className="fas fa-angle-double-right pra-clr" />
                        </span>
                        Textile Products
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/privacy"
                        className="d-flex align-items-center gap-2 flink-items pra-clr"
                      >
                        <span className="ani-icons">
                          <i className="fas fa-angle-double-right pra-clr" />
                        </span>
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="d-flex align-items-center gap-2 flink-items pra-clr"
                      >
                        <span className="ani-icons">
                          <i className="fas fa-angle-double-right pra-clr" />
                        </span>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h5
                    className="footer-title mb-xxl-7 mb-xl-6 mb-5"
                    data-aos="zoom-in-down"
                    data-aos-duration={1900}
                  >
                    Products TAGS
                    <svg
                      className="d-block mt-xxl-4 mt-3"
                      width={83}
                      height={2}
                      viewBox="0 0 83 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1={-1}
                        x2={83}
                        y2={-1}
                        transform="matrix(1 0 0 -1 0 0)"
                        stroke="url(#paint0_linear_6308_4305)"
                        strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_6308_4305"
                          x1="4.02912"
                          y1="0.000277584"
                          x2={80}
                          y2="0.000110496"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="#E3FF04" />
                          <stop
                            offset={1}
                            stopColor="#E3FF04"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </h5>
                  <ul
                    className="link-footer d-grid gap-xxl-5 gap-9"
                    data-aos="zoom-in"
                    data-aos-duration={1400}
                  >
                    <li className=" flex text-sm">
                      <h3 className="badge badge-secondary border border-secondary fs-15 mb-1 pra-clr text-sm">
                        Leather Products
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 mb-1 pra-clr text-sm">
                        Jackets
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 mb-1 pra-clr">
                        {" "}
                        Bags
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 mb-1 pra-clr">
                        Shoes
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 mb-1 pra-clr">
                        Wallets
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 pra-clr">
                        Purse
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 pra-clr">
                        Belts
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 pra-clr">
                        Gloves
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 pra-clr">
                        Straps
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 pra-clr">
                        Cigar
                      </h3>
                      <Link
                        href={"/leather_products"}
                        className="badge badge-secondary border border-secondary fs-15 pra-clr"
                      >
                        More..
                      </Link>
                    </li>
                    <li className=" flex text-sm">
                      <h3 className="badge badge-secondary border border-secondary fs-15 mb-1 pra-clr text-sm">
                        Textile Products
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 mb-1 pra-clr">
                        {" "}
                        Blankets
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 mb-1 pra-clr text-sm">
                        Duvet
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 mb-1 pra-clr">
                        Throws
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 mb-1 pra-clr">
                        Hoodies
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 pra-clr">
                        Curtains
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 pra-clr">
                        Trousers Shirts
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 pra-clr">
                        Scarfs
                      </h3>
                      <h3 className="badge badge-secondary border border-secondary fs-15 pra-clr">
                        Tracksuits
                      </h3>

                      <Link
                        href={"/textile_products"}
                        className="badge badge-secondary border border-secondary fs-15 pra-clr"
                      >
                        More..
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h5
                    className="footer-title mb-xxl-7 mb-xl-6 mb-5"
                    data-aos="zoom-in-down"
                    data-aos-duration={1900}
                  >
                    Registration
                    <svg
                      className="d-block mt-xxl-4 mt-3"
                      width={83}
                      height={2}
                      viewBox="0 0 83 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1={-1}
                        x2={83}
                        y2={-1}
                        transform="matrix(1 0 0 -1 0 0)"
                        stroke="url(#paint0_linear_6308_4306)"
                        strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_6308_4306"
                          x1="4.02912"
                          y1="0.000277584"
                          x2={80}
                          y2="0.000110496"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="#E3FF04" />
                          <stop
                            offset={1}
                            stopColor="#E3FF04"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </h5>
                  <p
                    className="  mb-2 fs-15 mb-1 pra-clr text-sm"
                    data-aos="zoom-in"
                    data-aos-duration={1600}
                  >
                    License NO: 262327339888
                  </p>
                  <p
                    className=" mb-2 fs-15 mb-1 pra-clr text-sm"
                    data-aos="zoom-in"
                    data-aos-duration={1600}
                  >
                    Registration No: 262327339888
                  </p>
                  <p
                    className=" mb-2 fs-15 mb-1 pra-clr text-xsm"
                    data-aos="zoom-in"
                    data-aos-duration={1600}
                  >
                    Legal Status: Free Zone Company- FZC LLC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-version-two bg2-clr py-xxl-10 py-xl-8 py-lg-7 py-6">
          <div className="container">
            <div className="text-sm-start text-center d-sm-flex gap-sm-0 gap-2 d-grid align-items-center justify-content-sm-between justify-content-center">
              <p className="pra-clr">
                © All Copyright {new Date().getFullYear()} by{" "}
                <Link href="#" className="theme-clr">
                  {" "}
                  Fusion Fashion (Pvt) Ltd
                </Link>
              </p>
              <div className="flex gap-4 ">
                <Link href="/#" className="pra-clr gap-3 ml-6">
                  Terms &amp; Conditions{" "}
                </Link>
                <Link href="/#" className="pra-clr gap-3">
                  {" "}
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

