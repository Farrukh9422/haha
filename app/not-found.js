import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function NotFound() {
    return (
        <Layout headerStyle={2} breadcrumbTitle="Page Not Found">
            <section className="blog-grid pt-space pb-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="error-content text-center">
                                <h2 className="white-clr mb-xxl-7 mb-xl-6 mb-5">
                                    <span className="theme-clr">Oops!</span> Page not found
                                </h2>
                                <p className="white-clr mb-xxl-12 mb-xl-9 mb-lg-8 mb-5">
                                    The page you are looking for does not exist
                                </p>
                                <Link href="/" className="cmn-btn themebg py-xxl-4 py-3 px-xxl-6 px-5 text-whitess">
                                    Back To Home Page
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
