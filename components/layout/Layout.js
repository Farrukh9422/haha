'use client'
import AOS from 'aos'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react"
import AnimatedBackground from '../elements/AnimatedBackground'
import BackToTop from '../elements/BackToTop'
import InteractiveEffects from '../elements/InteractiveEffects'
import ScrollProgress from '../elements/ScrollProgress'
import Breadcrumb from './Breadcrumb'
import Sidebar from "./Sidebar"
import Footer3 from './footer/Footer3'
import Header2 from './header/Header2'

export default function Layout({ headerStyle, breadcrumbTitle, children }) {
    const pathname = usePathname()
    const [scroll, setScroll] = useState(false)
    const [isMobileMenu, setMobileMenu] = useState(false)
    const [isSidebar, setSidebar] = useState(false)

    const handleMobileMenu = () => setMobileMenu(open => !open)
    const handleSidebar = () => setSidebar(open => !open)

    useEffect(() => {
        // Always open / refresh at the top instead of the browser's remembered position
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

        AOS.init({ once: true, offset: 60, easing: 'ease-out-cubic' })

        const onScroll = () => setScroll(window.scrollY > 100)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // Close menus when the page changes
    useEffect(() => {
        setMobileMenu(false)
        setSidebar(false)
        AOS.refreshHard()
    }, [pathname])

    // Close the mobile menu when the user taps anywhere outside the header or scrolls the page
    useEffect(() => {
        if (!isMobileMenu) return

        const startY = window.scrollY
        const onPointerDown = (e) => {
            if (!e.target.closest('.header-section')) setMobileMenu(false)
        }
        const onScroll = () => {
            if (Math.abs(window.scrollY - startY) > 10) setMobileMenu(false)
        }

        document.addEventListener('pointerdown', onPointerDown)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => {
            document.removeEventListener('pointerdown', onPointerDown)
            window.removeEventListener('scroll', onScroll)
        }
    }, [isMobileMenu])

    // Stop the page behind from scrolling while the side panel is open
    useEffect(() => {
        document.body.style.overflow = isSidebar ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isSidebar])

    // Close the side panel and mobile menu with the Escape key
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSidebar(false)
                setMobileMenu(false)
            }
        }
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [])

    return (
        <>
            <div id="top" />
            <AnimatedBackground />
            <InteractiveEffects />
            <ScrollProgress />
            {headerStyle ? (
                <Header2
                    scroll={scroll}
                    isMobileMenu={isMobileMenu}
                    handleMobileMenu={handleMobileMenu}
                    handleSidebar={handleSidebar}
                />
            ) : null}

            <main className="main ff-page-enter">
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}
            </main>

            <Footer3 />

            <div className={`ff-overlay ${isSidebar ? 'show' : ''}`} onClick={handleSidebar} />
            <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />

            <BackToTop target="#top" />
        </>
    )
}
