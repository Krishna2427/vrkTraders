import { Truck, Award, Users, Sprout } from 'lucide-react';
import type { LanguageDictionary } from '../types';
import { motion } from 'framer-motion';

interface StatsProps {
  t: LanguageDictionary;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12
    }
  }
};

export default function Stats({ t }: StatsProps) {
  return (
    <section className="stats-section">
      <motion.div 
        className="container stats-grid-ref"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
      >
        
        <motion.div variants={cardVariants} className="stat-card stat-green">
          <div className="stat-icon-bg bg-green-light">
            <Sprout size={28} />
          </div>
          <div className="stat-text-container">
            <h3 className="stat-value text-green-dark">{t.statFarmers}</h3>
            <p className="stat-label text-green-main">{t.statFarmersDesc}</p>
          </div>
        </motion.div>

        <motion.div variants={cardVariants} className="stat-card stat-orange">
          <div className="stat-icon-bg bg-orange-light">
            <Award size={28} />
          </div>
          <div className="stat-text-container">
            <h3 className="stat-value text-orange-dark">{t.statExperience}</h3>
            <p className="stat-label text-orange-main">{t.statExperienceDesc}</p>
          </div>
        </motion.div>

        <motion.div variants={cardVariants} className="stat-card stat-blue">
          <div className="stat-icon-bg bg-blue-light">
            <Truck size={28} />
          </div>
          <div className="stat-text-container">
            <h3 className="stat-value text-blue-dark">{t.statDelivery}</h3>
            <p className="stat-label text-blue-main">{t.statDeliveryDesc}</p>
          </div>
        </motion.div>

        <motion.div variants={cardVariants} className="stat-card stat-purple">
          <div className="stat-icon-bg bg-purple-light">
            <Users size={28} />
          </div>
          <div className="stat-text-container">
            <h3 className="stat-value text-purple-dark">{t.statPurity}</h3>
            <p className="stat-label text-purple-main">{t.statPurityDesc}</p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
