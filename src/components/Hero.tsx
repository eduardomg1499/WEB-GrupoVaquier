import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        <img 
          src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?q=80&w=2070&auto=format&fit=crop" 
          alt="Fondo de seda negra elegante" 
          className="w-full h-full object-cover grayscale contrast-[1.3] brightness-[0.8]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-terracotta text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-6">
            Organizacion & Consultoria
          </p>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.1] mb-8 max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Creamos momentos <br className="hidden md:block" />
          <span className="italic text-silver/90">inolvidables</span>, <br className="hidden md:block" />
          sin estres para ti.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <button 
            onClick={scrollToContact}
            className="group flex items-center gap-3 bg-terracotta text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-carbon transition-all duration-300"
          >
            Cotizar Evento
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a 
            href="https://wa.me/525561257703" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-widest text-silver hover:text-terracotta transition-colors border-b border-transparent hover:border-terracotta pb-1"
          >
            Contactar por WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-widest writing-vertical">Descubrir</span>
        <div className="w-[1px] h-12 bg-silver"></div>
      </motion.div>
    </section>
  );
}
