import { ChevronRight } from 'lucide-react';
import type { Category, Product, LanguageDictionary } from '../types';
import { productsData } from '../translations';
import { motion } from 'framer-motion';

interface ProductsProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
  setSelectedProduct: (product: Product) => void;
  t: LanguageDictionary;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 70, damping: 15 }
  }
};

export default function Products({ activeCategory, setActiveCategory, setSelectedProduct, t }: ProductsProps) {
  const filteredProducts = activeCategory === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="section products-section-ref">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="products-title-ref">{t.catalogTitle}</h2>
          <p className="products-subtitle-ref">{t.catalogSubtitle}</p>
        </motion.div>

        {/* Catalog Filter Category Tabs */}
        <motion.div 
          className="catalog-tabs-ref"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button 
            className={`tab-btn-ref ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            {t.catAll}
          </button>
          <button 
            className={`tab-btn-ref ${activeCategory === 'coconut' ? 'active' : ''}`}
            onClick={() => setActiveCategory('coconut')}
          >
            {t.catCoconut}
          </button>
          <button 
            className={`tab-btn-ref ${activeCategory === 'jaggery' ? 'active' : ''}`}
            onClick={() => setActiveCategory('jaggery')}
          >
            {t.catJaggery}
          </button>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          key={activeCategory}
          className="products-grid-ref"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
        >
          {filteredProducts.map(product => {
            const productName = t[product.nameKey as keyof typeof t];
            return (
              <motion.div 
                variants={cardVariants}
                key={product.id} 
                className="product-card-ref" 
                style={{ backgroundImage: `url(${product.image})` }}
                onClick={() => setSelectedProduct(product)}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
              >
                <div className="card-gradient-overlay">
                  <span className={`product-tag-ref ${product.category}`}>
                    {product.category === 'coconut' ? t.catCoconut : t.catJaggery}
                  </span>
                  
                  <h3 className="product-name-ref">{productName}</h3>
                  
                  <div className="product-footer-ref">
                    <span className="product-price-ref">{product.priceKey}</span>
                    <div className="details-btn-ref">
                      <span>{t.viewDetails}</span>
                      <ChevronRight size={14} color="var(--text-light)" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
