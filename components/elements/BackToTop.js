'use client'
import { useEffect, useState } from "react"

export default function BackToTop({ target }) {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setHasScrolled(window.scrollY > 100)

        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const handleClick = () => {
        const el = document.querySelector(target)
        window.scrollTo({ top: el ? el.offsetTop : 0, behavior: 'smooth' })
    }

    return (
        <button
            type="button"
            id="progress"
            aria-label="Back to top"
            onClick={handleClick}
            className={`ff-back-to-top ${hasScrolled ? "show" : ""}`}
        >
            <span id="valiu"><i className="fas fa-arrow-up" /></span>
        </button>
    )
}
