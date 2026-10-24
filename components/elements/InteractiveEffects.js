'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

// Elements that slide/unveil into view when scrolled to
const REVEAL_SELECTOR = [
    '.thumb img',
    '.about-product-thumb img',
    '.hero-section-version2 .col-lg-4 img',
    '.stitle',
    '.faqs-title h2',
].join(',')

// Cards that tilt slightly towards the mouse
const TILT_SELECTOR = '.offer-item, .blog-widget-item'

// Buttons that show a ripple where they are clicked
const RIPPLE_SELECTOR = '.cmn-btn, .explore-more, .submit-btn, .ff-side-cta, .touch-btn, .radius-btn, #progress'

export default function InteractiveEffects() {
    const pathname = usePathname()

    // Scroll reveal: an element is shown once its top enters the screen
    useEffect(() => {
        let pending = [...document.querySelectorAll(REVEAL_SELECTOR)]
        pending.forEach(el => el.classList.add('ff-reveal'))

        const check = () => {
            const limit = window.innerHeight * 0.9
            pending = pending.filter(el => {
                if (el.getBoundingClientRect().top < limit) {
                    el.classList.add('ff-in')
                    return false
                }
                return true
            })
            if (pending.length === 0) {
                window.removeEventListener('scroll', check)
                window.removeEventListener('resize', check)
            }
        }

        const timer = setTimeout(check, 100)
        window.addEventListener('scroll', check, { passive: true })
        window.addEventListener('resize', check)
        return () => {
            clearTimeout(timer)
            window.removeEventListener('scroll', check)
            window.removeEventListener('resize', check)
        }
    }, [pathname])

    // Card tilt (mouse only, not on touch screens)
    useEffect(() => {
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

        const onMove = (e) => {
            const card = e.target.closest(TILT_SELECTOR)
            if (!card) return
            const rect = card.getBoundingClientRect()
            const x = (e.clientX - rect.left) / rect.width - 0.5
            const y = (e.clientY - rect.top) / rect.height - 0.5
            card.style.setProperty('--ff-rx', `${(-y * 6).toFixed(2)}deg`)
            card.style.setProperty('--ff-ry', `${(x * 6).toFixed(2)}deg`)
        }

        const onLeave = (e) => {
            const card = e.target.closest?.(TILT_SELECTOR)
            if (card && !card.contains(e.relatedTarget)) {
                card.style.removeProperty('--ff-rx')
                card.style.removeProperty('--ff-ry')
            }
        }

        document.addEventListener('mousemove', onMove)
        document.addEventListener('mouseout', onLeave)
        return () => {
            document.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseout', onLeave)
        }
    }, [])

    // Click ripple
    useEffect(() => {
        const onClick = (e) => {
            const button = e.target.closest(RIPPLE_SELECTOR)
            if (!button) return
            const rect = button.getBoundingClientRect()
            const size = Math.max(rect.width, rect.height) * 2
            const ripple = document.createElement('span')
            ripple.className = 'ff-ripple'
            ripple.style.width = ripple.style.height = `${size}px`
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`
            button.appendChild(ripple)
            ripple.addEventListener('animationend', () => ripple.remove())
        }

        document.addEventListener('click', onClick)
        return () => document.removeEventListener('click', onClick)
    }, [])

    return null
}
