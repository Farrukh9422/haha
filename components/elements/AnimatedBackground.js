// Soft animated background that sits behind the whole site:
// rotating rings inspired by the logo, drifting color blobs and small floating dots.
// Purely decorative, so it is hidden from screen readers and ignores clicks.
const dots = Array.from({ length: 14 }, (_, i) => i)

export default function AnimatedBackground() {
    return (
        <div className="ff-bg" aria-hidden="true">
            <span className="ff-bg-blob ff-bg-blob-1" />
            <span className="ff-bg-blob ff-bg-blob-2" />
            <span className="ff-bg-blob ff-bg-blob-3" />

            <span className="ff-bg-ring ff-bg-ring-navy" />
            <span className="ff-bg-ring ff-bg-ring-grey" />

            {dots.map(i => (
                <span key={i} className="ff-bg-dot" style={{ '--i': i }} />
            ))}
        </div>
    )
}
