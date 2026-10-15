import './Footer.css'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ibrahim-elshafhey' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ibrahem-elshafhey-6b89b1372/' },
  { label: 'Instagram', href: 'https://instagram.com/ebrahim0517elshafhey' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1C63AmiJoT/' },
]

const Footer = () => {
  return (
    <footer className="footer-section" id="contact" aria-labelledby="footer-title">
      <div className="footer-orbit footer-orbit-one" aria-hidden="true" />
      <div className="footer-orbit footer-orbit-two" aria-hidden="true" />

      <div className="footer-main">
        <div className="footer-copy">
          <span className="footer-eyebrow">HAVE AN IDEA?</span>
          <h2 id="footer-title">
            Let's build something <span>meaningful.</span>
          </h2>
          <p>
            Have a project, an idea, or just want to talk about development?
            Send me a message and let's connect.
          </p>
        </div>

        <a
          className="footer-contact-button"
          href="https://wa.me/201554140954?text=Hello%20I%20want%20to%20contact%20you"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Let's talk on WhatsApp</span>
          <span className="footer-contact-arrow" aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="footer-bottom">
        <a className="footer-signature" href="#home" aria-label="Back to top">
          <span className="footer-mark" aria-hidden="true">I.</span>
          <span>ibrahim <strong>elshafhey</strong></span>
        </a>

        <nav className="footer-socials" aria-label="Social links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>

        <p className="footer-copyright">
          © {new Date().getFullYear()} Ibrahim Elshafhey. Built with React.
        </p>
      </div>
    </footer>
  )
}

export default Footer
