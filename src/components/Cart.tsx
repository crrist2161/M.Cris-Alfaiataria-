import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../data/products';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: { product: Product; quantity: number }[];
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export default function Cart({ isOpen, onClose, cartItems, onRemove, onCheckout }: CartProps) {
  const total = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md glass z-[70] flex flex-col border-l border-white/20 shadow-2xl backdrop-blur-2xl"
          >
            <div className="p-8 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-3 text-white">
                <ShoppingBag className="w-5 h-5" />
                <h2 className="font-serif text-2xl uppercase tracking-tighter italic">Sacola</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-white/40">
                  <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
                  <p className="uppercase text-[11px] tracking-widest font-bold">Sua sacola está vazia</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex gap-4 group">
                      <div className="w-24 aspect-[3/4] glass-dark rounded-xl overflow-hidden border border-white/10">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-lg text-white">{item.product.name}</h4>
                          <button 
                            onClick={() => onRemove(item.product.id)}
                            className="text-white/20 hover:text-accent-pink transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Qtd: {item.quantity}</p>
                        <p className="text-sm font-semibold mt-2 text-white">R$ {item.product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-8 glass-dark border-t border-white/10">
              <div className="flex justify-between mb-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/50">Subtotal</span>
                <span className="font-bold text-xl text-white">R$ {total}</span>
              </div>
              <p className="text-[9px] text-white/40 mb-6">Taxas e frete calculados no checkout.</p>
              <button 
                onClick={onCheckout}
                disabled={cartItems.length === 0}
                className="w-full bg-white text-primary-deep py-5 uppercase text-[11px] tracking-[0.3em] font-black rounded-full hover:bg-accent-pink hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl active:scale-[0.98]"
              >
                Finalizar Compra
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
