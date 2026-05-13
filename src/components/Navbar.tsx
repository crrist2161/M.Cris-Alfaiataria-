import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onCategoryChange: (category: string) => void;
  activeCategory: string;
}

export default function Navbar({ cartCount, onOpenCart, onCategoryChange, activeCategory }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Nova Coleção', value: 'all' },
    { name: 'Alfaiataria', value: 'Alfaiataria' },
    { name: 'Acessórios', value: 'Acessórios' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-white/80">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className={`hover:text-accent-pink transition-colors ${activeCategory === cat.value ? 'text-accent-pink underline underline-offset-4' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Logo */}
        <button onClick={() => onCategoryChange('all')} className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer">
          <span className="font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase font-black text-white group-hover:scale-105 transition-transform">M.CRIS</span>
          <span className="text-[9px] tracking-[0.4em] uppercase -mt-1 font-semibold text-white/40">Alfaiataria</span>
        </button>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6 text-white">
          <button onClick={onOpenCart} className="relative group">
            <ShoppingBag className="w-5 h-5 group-hover:text-accent-pink transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-primary-deep text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-lg">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm glass z-50 p-8 flex flex-col pt-24 border-r border-white/20 shadow-2xl"
            >
              <button 
                className="absolute top-6 right-6 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex flex-col gap-8 text-sm uppercase tracking-widest font-medium text-white/80">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    className={`text-left hover:text-white ${activeCategory === cat.value ? 'text-accent-pink font-bold' : ''}`}
                    onClick={() => {
                      onCategoryChange(cat.value);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {cat.name}
                  </button>
                ))}
                <div className="h-[1px] bg-white/10 my-4" />
                <button className="text-left hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Minha Conta</button>
                <button className="text-left hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Suporte</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
