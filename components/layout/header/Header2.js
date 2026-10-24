import Link from "next/link"
import Menu from "../Menu"

// One row on every screen: logo | menu (collapses on mobile/tablet) | actions
export default function Header2({ scroll, isMobileMenu, handleMobileMenu, handleSidebar }) {
    return (
        <header className={`header-section cmn-fixed hb-border ${scroll ? "header-fixed" : ""}`}>
            <div className="container">
                <nav className="main-navbar ff-nav">
                    <Link href="/" className="brand-logo">
                        <img className="ff-logo" src="/logo.png" alt="Fusion Fashion logo" />
                    </Link>

                    <div className={`ff-menu ${isMobileMenu ? "open" : ""}`}>
                        <Menu />
                    </div>

                    <div className="ff-actions">
                        <Link
                            href="https://wa.me/971569500174"
                            className="d-flex align-items-center header-ph gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp +971569500174"
                        >
                            <img width={30} height={30} src="/phone.svg" alt="" />
                            <span className="ff-phone-text">+971569500174</span>
                        </Link>
                        <button
                            type="button"
                            aria-label="Show company address"
                            className="ff-info-btn"
                            onClick={handleSidebar}
                        >
                            <i className="fas fa-map-marker-alt" />
                            <span>Address</span>
                        </button>
                        <button
                            className={`navbar-toggle-btn d-lg-none ${isMobileMenu ? "open" : ""}`}
                            type="button"
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenu}
                            onClick={handleMobileMenu}
                        >
                            <span />
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
