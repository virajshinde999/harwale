import "./Footer.css";

function Footer() {
  const whatsappNumber = "917720014507";

  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            Harwale<span>.com</span>
          </h2>

          <p>For Orders & Enquiries</p>
        </div>

        <div className="footer-contact">

          <a href="tel:+917720014507" className="footer-contact-item">
            <span>📞</span>
            <div>
              <small>Call Us</small>
              <strong>+91 7720014507</strong>
            </div>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-item"
          >
            <span>💬</span>
            <div>
              <small>WhatsApp</small>
              <strong>Chat With Us</strong>
            </div>
          </a>

          <div className="footer-contact-item">
            <span>📍</span>
            <div>
              <small>Location</small>
              <strong>Phaltan</strong>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Harwale.com</p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            WhatsApp Us <span>↗</span>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;