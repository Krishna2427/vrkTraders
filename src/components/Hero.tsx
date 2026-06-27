import { ShieldCheck, ArrowRight, Leaf, MessageSquare } from 'lucide-react';
import type { LanguageDictionary } from '../types';
import heroImg from '../assets/hero_vrk_updated.png';
import { motion } from 'framer-motion';

interface HeroProps {
  scrollTo: (id: string) => void;
  t: LanguageDictionary;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
};

export default function Hero({ scrollTo, t }: HeroProps) {
  return (
    <section id="home" className="hero-section" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-overlay">
        <motion.div 
          className="container hero-content-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-content">
            <motion.div variants={itemVariants} className="hero-badge-glass">
              <ShieldCheck size={16} />
              <span>{t.heroBadge}</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="hero-title-main">{t.heroTitle}</motion.h1>
            <motion.p variants={itemVariants} className="hero-subtitle-main">{t.heroSubtitle}</motion.p>
            
            <motion.div variants={itemVariants} className="hero-actions-row">
              <button className="btn-primary-main" onClick={() => scrollTo('products')}>
                <span>{t.heroCTA}</span>
                <ArrowRight size={18} />
              </button>
              
              <button className="btn-secondary-glass" onClick={() => scrollTo('about')}>
                <span>{t.navAbout}</span>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Glassmorphic Badges */}
        <motion.div 
          className="container floating-badges-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, type: 'spring', stiffness: 80, damping: 12 }}
        >
          <div className="glass-badge-card">
            <div className="gb-icon-bg green-bg">
              <Leaf size={24} />
            </div>
            <div className="gb-text">
              <h4>{t.badge1Title}</h4>
              <p>{t.badge1Sub}</p>
            </div>
          </div>

          <div className="glass-badge-card">
            <div className="gb-icon-bg orange-bg">
              <MessageSquare size={24} />
            </div>
            <div className="gb-text">
              <h4>{t.badge2Title}</h4>
              <p>{t.badge2Sub}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
