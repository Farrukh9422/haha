import Link from 'next/link'

const contactItems = [
    {
        icon: 'fas fa-map-marker-alt',
        label: 'Address',
        value: '26th Floor Amber Gem Tower, Ajman, UAE',
    },
    {
        icon: 'fas fa-envelope',
        label: 'Email',
        value: 'contact@fusionfashionltd.com',
        href: 'mailto:contact@fusionfashionltd.com',
    },
    {
        icon: 'fab fa-whatsapp',
        label: 'Call now',
        value: '+971569500174',
        href: 'https://wa.me/971569500174',
        external: true,
    },
]

export default function Sidebar({ isSidebar, handleSidebar }) {
    return (
        <aside className={`ff-side ${isSidebar ? 'active' : ''}`} aria-hidden={!isSidebar}>
            <div className="ff-side-top">
                <Link href="/" className="ff-side-brand" onClick={handleSidebar}>
                    <img src="/logo.png" width={56} alt="Fusion Fashion logo" />
                    <span>Fusion Fashion</span>
                </Link>
                <button type="button" aria-label="Close info panel" className="ff-side-close" onClick={handleSidebar}>
                    <i className="fas fa-times" />
                </button>
            </div>

            <div className="ff-side-body">
                <p className="ff-side-about">
                    Fusion Fashion (Pvt) Ltd, we specialize in exporting premium leather and textile products with a focus on bespoke and handmade craftsmanship. Our commitment to quality and sustainability ensures that each piece is crafted to perfection and tailored to meet the unique needs of our global clients.
                </p>

                <ul className="ff-side-contacts">
                    {contactItems.map(item => {
                        const content = (
                            <>
                                <span className="ff-side-icon"><i className={item.icon} /></span>
                                <span className="ff-side-text">
                                    <small>{item.label}</small>
                                    <span>{item.value}</span>
                                </span>
                            </>
                        )

                        return (
                            <li key={item.label}>
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="ff-side-contact"
                                        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    >
                                        {content}
                                    </Link>
                                ) : (
                                    <div className="ff-side-contact">{content}</div>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>

            <Link href="/contact" className="ff-side-cta" onClick={handleSidebar}>
                Let's Talk
                <i className="fas fa-arrow-right" />
            </Link>
        </aside>
    )
}
