import { X, MessageSquare } from 'lucide-react';
import type { Product, LanguageDictionary } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductModalProps {
  selectedProduct: Product;
  setSelectedProduct: (product: Product | null) => void;
  handleRequestQuoteFromModal: (product: Product) => void;
  t: LanguageDictionary;
}

export default function ProductModal({ selectedProduct, setSelectedProduct, handleRequestQuoteFromModal, t }: ProductModalProps) {
  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay" 
        onClick={() => setSelectedProduct(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="modal-content" 
          onClick={e => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <button className="btn-close" onClick={() => setSelectedProduct(null)} aria-label="Close details">
            <X size={20} />
          </button>

          <div className="modal-body-grid">
            <div className="modal-img-container">
              <img src={selectedProduct.image} alt={t[selectedProduct.nameKey as keyof typeof t]} />
            </div>
            <div className="modal-details">
              <div>
                <span className="modal-category">
                  {selectedProduct.category === 'coconut' ? t.catCoconut : t.catJaggery}
                </span>
                <h2>{t[selectedProduct.nameKey as keyof typeof t]}</h2>
                <p className="modal-description">{t[selectedProduct.descKey as keyof typeof t]}</p>
                
                <h3 className="specs-title">{t.specifications}</h3>
                <table className="specs-table">
                  <tbody>
                    {selectedProduct.specs.map((spec, index) => (
                      <tr key={index}>
                        <td className="specs-label">{t[spec.labelKey as keyof typeof t]}</td>
                        <td className="specs-value">{t[spec.valueKey as keyof typeof t]}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className="specs-label">{t.availability}</td>
                      <td className="specs-value">{selectedProduct.availabilityKey}</td>
                    </tr>
                    <tr>
                      <td className="specs-label">{t.priceRange}</td>
                      <td className="specs-value" style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
                        {selectedProduct.priceKey}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="modal-footer">
                <button className="btn-primary" onClick={() => handleRequestQuoteFromModal(selectedProduct)}>
                  <MessageSquare size={18} />
                  <span>{t.inquireNow}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
