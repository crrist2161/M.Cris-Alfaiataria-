import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-10 md:p-12 rounded-[40px] shadow-2xl"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-white/60 mb-4 block font-medium">
              Outono Inverno 2026
            </span>
            <h1 className="text-6xl md:text-8xl leading-[0.9] font-light mb-8 text-white italic font-serif">
              Office <br />
              <span className="font-black not-italic tracking-tighter uppercase">Excellence</span>
            </h1>
            <p className="text-white/70 max-w-sm text-sm font-light italic leading-relaxed mb-10">
              Alfaiataria impecável para a mulher contemporânea. Eleve sua presença profissional com nossa nova linha Signature Archive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary-deep px-10 py-5 uppercase text-[11px] tracking-[0.3em] font-black rounded-full hover:bg-accent-pink hover:text-white transition-all flex items-center justify-center gap-2 group shadow-xl">
                Descobrir Coleção <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none"
        >
          <div className="absolute inset-0 border border-white/20 translate-x-4 translate-y-4 rounded-3xl -z-10 hidden lg:block backdrop-blur-sm" />
          <div className="w-full h-full glass-dark rounded-3xl overflow-hidden p-3 transition-all">
            <img
              src="https://anellimn.com/cdn/shop/files/Conjunto_Alfaiataria_Calca_Blazer_e_Colete_Feminino_3pcs_Siean_2_ea3b6b30-7231-46ef-b1a2-d98cb1cf30a3.webp?v=1723838034"
              alt="Alfaiataria de Luxo"
              className="w-full h-full object-cover shadow-2xl rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass px-8 py-6 rounded-2xl shadow-xl hidden md:block border-l-4 border-accent-pink">
            <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1 font-bold">Signature Collection</span>
            <span className="font-serif italic text-2xl text-white">Alfaiataria de Luxo</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical text */}
      <div className="absolute right-8 bottom-1/4 hidden xl:block">
        <span className="vertical-text text-[10px] uppercase tracking-[0.5em] text-white/10 font-black">
          QUALIDADE PREMIUM • DESIGN MODERNO
        </span>
      </div>
    </section>
  );
}
