import { Globe, Menu, X } from 'lucide-react';
import type { LanguageDictionary } from '../types';

interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
  lang: 'en' | 'te' | 'hi';
  setLang: (lang: 'en' | 'te' | 'hi') => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
  t: LanguageDictionary;
}

export default function Header({
  isScrolled,
  activeSection,
  lang,
  setLang,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollTo,
  t
}: HeaderProps) {
  return (
    <>
      <header className={`header glassmorphism ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo" onClick={() => scrollTo('home')}>
            <div className="logo-text">VRK</div>
            <span className="logo-caption">QUALITY • TRUST • FRESHNESS</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="desktop-only">
            <ul className="nav-links">
              <li><button onClick={() => scrollTo('home')} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>{t.navHome}</button></li>
              <li><button onClick={() => scrollTo('products')} className={`nav-link ${activeSection === 'products' ? 'active' : ''}`}>{t.navProducts}</button></li>
              <li><button onClick={() => scrollTo('about')} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>{t.navAbout}</button></li>
              <li><button onClick={() => scrollTo('contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>{t.navContact}</button></li>
            </ul>
          </nav>

          {/* Desktop Action Controls */}
          <div className="nav-actions desktop-only">
            <div className="lang-dropdown-container">
              <Globe size={18} className="lang-icon" />
              <select className="lang-select" value={lang} onChange={(e) => setLang(e.target.value as any)}>
                <option value="en">English</option>
                <option value="te">తెలుగు</option>
                <option value="hi">हिंदी</option>
              </select>
            </div>
          </div>

          {/* Mobile navigation toggle */}
          <div className="mobile-only flex" style={{ gap: '12px' }}>
            <div className="lang-dropdown-container">
              <Globe size={18} className="lang-icon" />
              <select className="lang-select" value={lang} onChange={(e) => setLang(e.target.value as any)}>
                <option value="en">EN</option>
                <option value="te">తె</option>
                <option value="hi">हि</option>
              </select>
            </div>
            <button className="btn-icon" onClick={() => setMobileMenuOpen(true)} aria-label="Open Navigation Menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* ==================================== MOBILE DRAWER ==================================== */}
      {mobileMenuOpen && <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)}></div>}
      <aside className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '20px' }}>
          <button className="btn-icon" onClick={() => setMobileMenuOpen(false)} aria-label="Close Menu">
            <X size={20} />
          </button>
        </div>

        <ul className="nav-links">
          <li><button onClick={() => scrollTo('home')} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>{t.navHome}</button></li>
          <li><button onClick={() => scrollTo('products')} className={`nav-link ${activeSection === 'products' ? 'active' : ''}`}>{t.navProducts}</button></li>
          <li><button onClick={() => scrollTo('about')} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>{t.navAbout}</button></li>
          <li><button onClick={() => scrollTo('contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>{t.navContact}</button></li>
        </ul>
      </aside>
    </>
  );
}
