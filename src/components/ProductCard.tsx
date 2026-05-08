import { motion } from 'motion/react';
import { Plus, Eye } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  key?: string | number;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group glass-dark rounded-[2.5rem] overflow-hidden border border-white/10"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
        {/* Actions Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10 flex gap-2">
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-white text-primary-deep py-4 text-[10px] uppercase tracking-widest font-black rounded-full flex items-center justify-center gap-2 hover:bg-accent-pink hover:text-white transition-all shadow-xl"
          >
            <Plus className="w-3 h-3" /> Adicionar
          </button>
          <button className="glass text-white p-4 rounded-full hover:bg-white hover:text-primary-deep transition-all">
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />

        {/* Category Tag */}
        <div className="absolute top-6 left-6 glass px-3 py-1 rounded-full border border-white/20">
          <span className="text-[9px] uppercase tracking-widest font-bold text-white">{product.category}</span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl tracking-tight text-white group-hover:text-accent-pink transition-colors">{product.name}</h3>
          <span className="text-sm font-bold text-white">R$ {product.price}</span>
        </div>

        <p className="text-[11px] text-white/50 line-clamp-2 italic font-light leading-relaxed">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}
