import { useState, useEffect } from 'react';
import { englishTranslations, teluguTranslations, hindiTranslations } from './translations';
import type { Product, Category } from './types';
import './App.css';

// Import modular components
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import ProductModal from './components/ProductModal';
import About from './components/About';
import QuickConnect from './components/QuickConnect';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Language state: 'en' for English, 'te' for Telugu, 'hi' for Hindi
  const [lang, setLang] = useState<'en' | 'te' | 'hi'>(() => {
    const saved = localStorage.getItem('lang');
    return (saved as 'en' | 'te' | 'hi') || 'en';
  });

  // Scroll header styling state
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile menu drawer state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active product category filter
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  // Selected product for modal details
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Active section for header navigation highlighters
  const [activeSection, setActiveSection] = useState('home');

  // Apply Language modifications to Document Element
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate active navigation link
      const sections = ['home', 'products', 'about', 'contact', 'inquiry'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set translation dictionary shortcuts
  const t = lang === 'en' ? englishTranslations : lang === 'te' ? teluguTranslations : hindiTranslations;

  // Scroll to helper
  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Pre-fill WhatsApp message from modal call-to-action
  const handleRequestQuoteFromModal = (product: Product) => {
    const productName = t[product.nameKey as keyof typeof t];
    const message = `Hello VRK traders! I am interested in bulk wholesale rates for: ${productName}.`;
    const whatsappUrl = `https://wa.me/919640902162?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSelectedProduct(null);
  };

  return (
    <div className="app-wrapper">
      <Header 
        isScrolled={isScrolled} 
        activeSection={activeSection}
        lang={lang}
        setLang={setLang}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollTo={scrollTo}
        t={t}
      />
      <Hero scrollTo={scrollTo} t={t} />
      <Stats t={t} />
      <Products 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        setSelectedProduct={setSelectedProduct} 
        t={t} 
      />
      {selectedProduct && (
        <ProductModal 
          selectedProduct={selectedProduct} 
          setSelectedProduct={setSelectedProduct} 
          handleRequestQuoteFromModal={handleRequestQuoteFromModal} 
          t={t} 
        />
      )}
      <About t={t} />
      <QuickConnect t={t} />
      <Contact t={t} />
      <Footer scrollTo={scrollTo} t={t} />
    </div>
  );
}
