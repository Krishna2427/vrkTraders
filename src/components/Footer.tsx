import { Phone, Mail } from 'lucide-react';
import type { LanguageDictionary } from '../types';
import logoImg from '../assets/logo.png';

interface FooterProps {
  scrollTo: (id: string) => void;
  t: LanguageDictionary;
}

export default function Footer({ scrollTo, t }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-logo" onClick={() => scrollTo('home')} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="logo-image-wrapper">
                <img src={logoImg} alt="VRK traders Logo" className="logo-image" style={{ height: '60px' }} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-light)', letterSpacing: '1px', marginTop: '12px' }}>
                QUALITY • TRUST • FRESHNESS<br/>COCONUT TRADING & SUPPLY
              </span>
            </div>
            <p className="footer-tagline">{t.footerTagline}</p>
          </div>

          <div className="footer-socials">
            <a href={`tel:${t.contactPhoneValue.replace(/\s+/g, '')}`} className="social-link" aria-label="Phone Link">
              <Phone size={18} />
            </a>
            <a href={`mailto:${t.contactEmailValue}`} className="social-link" aria-label="Email Link">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} VRK traders. {t.footerRights}</p>
          <ul className="footer-links">
            <li><button onClick={() => scrollTo('home')}>{t.navHome}</button></li>
            <li><button onClick={() => scrollTo('products')}>{t.navProducts}</button></li>
            <li><button onClick={() => scrollTo('about')}>{t.navAbout}</button></li>
            <li><button onClick={() => scrollTo('contact')}>{t.navContact}</button></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
