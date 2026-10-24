import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Hero2 from "@/components/sections/Hero2"
import Offer1 from "@/components/sections/Offer1"
import SoftwareWatch1 from "@/components/sections/SoftwareWatch1"

export default function Home() {
    return (
        <Layout headerStyle={1}>
            <div className="position-relative overflow-hidden">
                <Hero2 />
                <About1 />
                <Offer1 />
                <SoftwareWatch1 />
            </div>
        </Layout>
    )
}
