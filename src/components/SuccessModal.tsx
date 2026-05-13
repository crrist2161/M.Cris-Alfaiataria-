import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm glass z-[110] p-10 rounded-[40px] text-center border border-white/20 shadow-2xl backdrop-blur-2xl"
          >
            <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors text-white/40">
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex justify-center mb-6 text-accent-pink">
              <CheckCircle2 className="w-16 h-16" />
            </div>
            
            <h2 className="font-serif text-3xl text-white mb-4 italic">Pedido Realizado!</h2>
            <p className="text-white/60 text-sm font-light leading-relaxed mb-8">
              Obrigado por escolher a M.CRIS. Sua elegância está a caminho. Você receberá os detalhes no seu email em instantes.
            </p>
            
            <button 
              onClick={onClose}
              className="w-full bg-white text-primary-deep py-4 uppercase text-[10px] tracking-[0.3em] font-black rounded-full hover:bg-accent-pink hover:text-white transition-all shadow-xl"
            >
              Continuar Comprando
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
