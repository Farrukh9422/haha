'use client'
import { useEffect, useState } from "react"

// Thin bar at the top of the page that fills as the user scrolls
export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight
            setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
        }

        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onScroll)
        }
    }, [])

    return <div className="ff-scroll-progress" style={{ width: `${progress}%` }} />
}
