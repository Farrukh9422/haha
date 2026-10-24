'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const menuItems = [
    { label: 'Home', href: '/' },
    {
        label: 'Products',
        children: [
            { label: 'Leather', href: '/leather_products' },
            { label: 'Textile', href: '/textile_products' },
        ],
    },
    { label: 'Services', href: '/services' },
    {
        label: 'About US',
        children: [
            { label: 'About', href: '/about' },
            { label: 'Faqs', href: '/faq' },
        ],
    },
    { label: 'Contact US', href: '/contact' },
    // Opens the PDF in a new browser tab, where it can be read or downloaded
    { label: 'Catalogue', href: '/Fusion-Fashion-Catalogue.pdf', pdf: true },
]

export default function Menu() {
    const pathname = usePathname()
    const [openMenu, setOpenMenu] = useState(null)

    const toggleMenu = (label) => {
        setOpenMenu(current => current === label ? null : label)
    }

    const isActive = (href) => pathname === href

    return (
        <ul className="custom-nav ff-nav-list d-lg-flex d-grid">
            {menuItems.map(item => {
                if (item.pdf) {
                    return (
                        <li key={item.label} className="menu-item position-relative">
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ff-catalogue-btn"
                            >
                                <i className="fas fa-book-open" />
                                {item.label}
                            </a>
                        </li>
                    )
                }

                if (!item.children) {
                    return (
                        <li key={item.label} className="menu-item position-relative">
                            <Link href={item.href} className={`ff-nav-link fw_500 white-clr ${isActive(item.href) ? 'active' : ''}`}>
                                {item.label}
                            </Link>
                        </li>
                    )
                }

                const isOpen = openMenu === item.label
                const hasActiveChild = item.children.some(child => isActive(child.href))

                return (
                    <li key={item.label} className={`menu-item position-relative ${isOpen ? 'is-open' : ''}`}>
                        <button
                            type="button"
                            className={`ff-nav-link ff-nav-dropdown fw_500 white-clr ${hasActiveChild ? 'active' : ''}`}
                            aria-expanded={isOpen}
                            onClick={() => toggleMenu(item.label)}
                        >
                            {item.label}
                            <i className="fas fa-chevron-down ff-chevron" aria-hidden="true" />
                        </button>
                        <ul className="sub-menu px-lg-4 py-xxl-3 py-2" style={{ display: isOpen ? 'block' : 'none' }}>
                            {item.children.map(child => (
                                <li key={child.href} className="menu-link py-1">
                                    <Link href={child.href} className={`fw_500 white-clr ${isActive(child.href) ? 'active' : ''}`}>
                                        {child.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}
