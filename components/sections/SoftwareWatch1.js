'use client'
import { useEffect, useRef } from "react"

// Background video. On phones a video without `playsInline` opens in the
// full-screen player by itself, so it must play inline, muted and without controls.
export default function SoftwareWatch1() {
    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        // React does not write `muted` into the HTML, and mobile browsers
        // only autoplay inline when the element is really muted.
        video.muted = true
        video.defaultMuted = true
        video.setAttribute("muted", "")
        video.setAttribute("playsinline", "")
        video.setAttribute("webkit-playsinline", "")

        const play = () => video.play().catch(() => {})
        play()

        // Never let it jump into full screen on iPhone
        const leaveFullscreen = () => {
            if (video.webkitDisplayingFullscreen) video.webkitExitFullscreen?.()
        }
        video.addEventListener("webkitbeginfullscreen", leaveFullscreen)
        return () => video.removeEventListener("webkitbeginfullscreen", leaveFullscreen)
    }, [])

    return (
        <section className="ff-video-section">
            <div className="container">
                <div className="software-fullwatch ff-video-card" data-aos="zoom-in-up" data-aos-duration={1200}>
                    <div className="video-wrapper">
                        <video
                            ref={videoRef}
                            className="w-100 h-100 ff-bg-video"
                            muted
                            loop
                            autoPlay
                            playsInline
                            preload="metadata"
                            disablePictureInPicture
                            disableRemotePlayback
                            controlsList="nofullscreen nodownload noremoteplayback"
                            aria-hidden="true"
                            tabIndex={-1}
                        >
                            <source src="https://softivuspro.com/rest/online%20education.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}
