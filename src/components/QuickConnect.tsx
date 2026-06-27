import { MessageSquare, Phone, ArrowRight } from 'lucide-react';
import type { LanguageDictionary } from '../types';
import { motion } from 'framer-motion';

interface QuickConnectProps {
  t: LanguageDictionary;
}

export default function QuickConnect({ t }: QuickConnectProps) {
  return (
    <section id="inquiry" className="section inquiry">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2>{t.inquiryTitle}</h2>
          <p>{t.inquirySubtitle}</p>
        </motion.div>

        <div className="quick-connect-grid">
          <motion.a 
            href="https://wa.me/919640902162?text=Hello%20VRK%20traders!%20I%20am%20interested%20in%20bulk%20wholesale%20rates." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="connect-card whatsapp-card glassmorphism"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="connect-icon-wrapper">
              <MessageSquare size={36} color="white" />
            </div>
            <div className="connect-info">
              <h3>Chat on WhatsApp</h3>
              <p>Fastest way to get custom wholesale quotes & availability directly.</p>
              <span className="connect-action">Message Us <ArrowRight size={16} /></span>
            </div>
          </motion.a>

          <motion.a 
            href="tel:+919640902162" 
            className="connect-card phone-card glassmorphism"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="connect-icon-wrapper">
              <Phone size={36} color="white" />
            </div>
            <div className="connect-info">
              <h3>Call Us Directly</h3>
              <p>Speak to our sales representatives for immediate assistance today.</p>
              <span className="connect-action">Call +91 9640902162 <ArrowRight size={16} /></span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
