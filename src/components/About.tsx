import { Leaf, ShieldCheck, Truck } from 'lucide-react';
import type { LanguageDictionary } from '../types';
import aboutImg from '../assets/about_agriculture.png';
import { motion } from 'framer-motion';

interface AboutProps {
  t: LanguageDictionary;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 60, damping: 15 }
  }
};

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}
        >
          <span className="modal-category" style={{ marginBottom: '16px' }}>{t.navAbout}</span>
          <h2 style={{ fontSize: '2.5rem', lineHeight: 1.2, margin: 0 }}>{t.aboutTitle}</h2>
        </motion.div>

        <div className="about-grid">
        <motion.div 
          className="about-image-column"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <motion.div 
            className="about-experience-badge glassmorphism"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>15+</h3>
            <p>Years of Trust</p>
          </motion.div>
          <div className="about-image-wrapper">
            <img src={aboutImg} alt="Harvesting quality farm produce directly from agricultural fields" />
          </div>
        </motion.div>

        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
        >
          <motion.div variants={itemVariants} className="about-text">
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
          </motion.div>

          <motion.div variants={containerVariants} className="about-features">
            <motion.div variants={itemVariants} className="about-feature-item">
              <div className="about-feature-icon">
                <Leaf size={20} />
              </div>
              <div className="about-feature-text">
                <h4>{t.aboutFeature1Title}</h4>
                <p>{t.aboutFeature1Desc}</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-feature-item">
              <div className="about-feature-icon">
                <ShieldCheck size={20} />
              </div>
              <div className="about-feature-text">
                <h4>{t.aboutFeature2Title}</h4>
                <p>{t.aboutFeature2Desc}</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-feature-item">
              <div className="about-feature-icon">
                <Truck size={20} />
              </div>
              <div className="about-feature-text">
                <h4>{t.aboutFeature3Title}</h4>
                <p>{t.aboutFeature3Desc}</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
