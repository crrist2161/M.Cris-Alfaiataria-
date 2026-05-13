import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import SuccessModal from './components/SuccessModal';
import { products, Product } from './data/products';
import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Mail, ArrowUp } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<{ product: Product; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== id));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    // Simulate checkout process
    setCartItems([]);
    setIsCartOpen(false);
    setIsSuccessOpen(true);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : activeCategory === 'Alfaiataria'
      ? products.filter(p => ['Blazers', 'Camisas', 'Calças'].includes(p.category))
      : products.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary-bright via-primary-deep to-[#450a26] -z-20"></div>
      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent-pink rounded-full blur-[120px] opacity-40 -z-10"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary-bright rounded-full blur-[100px] opacity-30 -z-10"></div>

      <Navbar 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
        activeCategory={activeCategory}
        onCategoryChange={(cat) => {
          setActiveCategory(cat);
          if (cat === 'all') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const element = document.getElementById('products');
            if (element) {
              const yOffset = -100; // Offset for navbar
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }
        }}
      />
      
      <main className="flex-1 relative z-10">
        <Hero />

        {/* Section Title */}
        <section id="products" className="py-24 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="glass p-8 rounded-3xl w-full">
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 font-bold mb-4 block underline decoration-accent-pink underline-offset-8">
                {activeCategory === 'all' ? 'Essentials' : activeCategory}
              </span>
              <h2 className="text-5xl md:text-7xl font-light text-white">
                {activeCategory === 'Acessórios' ? (
                  <>O Toque <span className="italic font-serif">Final</span></>
                ) : (
                  <>O Novo <span className="italic font-serif">Power Look</span></>
                )}
              </h2>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} 
              />
            ))}
          </div>
        </section>

        {/* Brand Philosophy / Quote */}
        <section className="py-32 overflow-hidden relative">
          <div className="max-w-4xl mx-auto px-6 text-center z-10 relative glass p-16 rounded-[40px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] uppercase tracking-[0.6em] mb-8 block opacity-60 font-bold">Manifesto M.CRIS</span>
              <h3 className="text-4xl md:text-6xl font-serif italic mb-10 leading-snug text-white">
                "A alfaiataria não é sobre esconder, mas sobre revelar a força que existe na sua própria postura."
              </h3>
              <p className="text-white tracking-widest text-xs uppercase opacity-60">— M. CRIS, Fundadora</p>
            </motion.div>
          </div>
          {/* Decorative SVG/Shapes background */}
          <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
            <span className="text-[20rem] font-serif leading-none select-none text-white">V</span>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="glass-dark text-white/80 py-20 border-t border-white/10 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/5 pb-16">
          <div className="flex flex-col">
            <span className="font-serif text-3xl uppercase tracking-tighter mb-4 italic text-white">M.CRIS</span>
            <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
              Moda premium para mulheres que respiram elegância e poder. Alfaiataria sob medida para o seu sucesso.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              <Facebook className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-white">Menu Principal</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="hover:text-white transition-colors cursor-pointer">Nova Coleção</li>
              <li className="hover:text-white transition-colors cursor-pointer">Bestsellers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Lookbook 2026</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sale</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-white">Suporte</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="hover:text-white transition-colors cursor-pointer">Rastrear Pedido</li>
              <li className="hover:text-white transition-colors cursor-pointer">Trocas e Devoluções</li>
              <li className="hover:text-white transition-colors cursor-pointer">Política de Privacidade</li>
              <li className="hover:text-white transition-colors cursor-pointer">FAQs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-white">Newsletter</h4>
            <p className="text-sm text-white/40 mb-6 font-light">Receba lançamentos exclusivos e insights sobre moda.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="SEU EMAIL" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-xs w-full focus:ring-1 focus:ring-accent-pink outline-none rounded-l-lg text-white"
              />
              <button className="bg-white text-primary-deep px-4 hover:bg-accent-pink hover:text-white transition-all rounded-r-lg">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">© 2026 M.CRIS ALFAIATARIA • TODOS OS DIREITOS RESERVADOS</p>
          <div className="flex gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
             <img src="https://img.icons8.com/color/48/000000/visa.png" className="h-6" alt="visa" />
             <img src="https://img.icons8.com/color/48/000000/mastercard.png" className="h-6" alt="mastercard" />
          </div>
        </div>
      </footer>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />

      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
      />

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 left-8 glass p-3 rounded-full shadow-2xl z-40 transition-transform active:scale-90 text-white"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
