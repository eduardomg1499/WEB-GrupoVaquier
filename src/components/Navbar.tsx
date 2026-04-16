import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);

    // Pequeño retraso para permitir que el menú móvil se cierre antes de hacer scroll
    // Esto evita que la animación del menú interrumpa el scroll en dispositivos móviles
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // Navbar height
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-carbon/90 backdrop-blur-md border-b border-gray-dark py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="text-2xl font-serif font-bold text-silver cursor-pointer tracking-wide"
          onClick={() => scrollToSection('inicio')}
        >
          GRUPO <span className="text-terracotta">VAQUIER</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('inicio')} className="text-sm uppercase tracking-widest hover:text-terracotta transition-colors">Inicio</button>
          
          <div className="relative group">
            <button 
              className="text-sm uppercase tracking-widest hover:text-terracotta transition-colors flex items-center gap-1"
              onClick={() => scrollToSection('servicios')}
            >
              Nuestros Servicios <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-0 mt-4 w-64 bg-carbon border border-gray-dark rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
              <div className="p-2 flex flex-col">
                <button onClick={() => scrollToSection('servicios')} className="text-left px-4 py-3 text-sm hover:bg-gray-dark hover:text-terracotta rounded transition-colors">Organizacion Integral</button>
                <button onClick={() => scrollToSection('servicios')} className="text-left px-4 py-3 text-sm hover:bg-gray-dark hover:text-terracotta rounded transition-colors">Coordinacion "Dia B"</button>
                <button onClick={() => scrollToSection('servicios')} className="text-left px-4 py-3 text-sm hover:bg-gray-dark hover:text-terracotta rounded transition-colors">Coordinacion On-site / Logistica</button>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button 
              className="text-sm uppercase tracking-widest hover:text-terracotta transition-colors flex items-center gap-1"
              onClick={() => scrollToSection('consultoria')}
            >
              Consultoria Turistica <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-0 mt-4 w-64 bg-carbon border border-gray-dark rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
              <div className="p-2 flex flex-col">
                <button onClick={() => scrollToSection('consultoria')} className="text-left px-4 py-3 text-sm hover:bg-gray-dark hover:text-terracotta rounded transition-colors">Planificacion de Proyectos</button>
                <button onClick={() => scrollToSection('consultoria')} className="text-left px-4 py-3 text-sm hover:bg-gray-dark hover:text-terracotta rounded transition-colors">Diseno de Rutas y Experiencias</button>
              </div>
            </div>
          </div>

          <button onClick={() => scrollToSection('nosotros')} className="text-sm uppercase tracking-widest hover:text-terracotta transition-colors">Quienes Somos</button>
          
          <button 
            onClick={() => scrollToSection('contacto')} 
            className="text-sm uppercase tracking-widest border border-terracotta text-terracotta px-6 py-2 rounded-full hover:bg-terracotta hover:text-white transition-all duration-300"
          >
            Contacto
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-silver hover:text-terracotta transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-carbon border-b border-gray-dark overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('inicio')} className="text-left text-sm uppercase tracking-widest py-2 border-b border-gray-dark/50">Inicio</button>
              
              <div>
                <button 
                  onClick={() => toggleDropdown('servicios')} 
                  className="w-full text-left text-sm uppercase tracking-widest py-2 border-b border-gray-dark/50 flex justify-between items-center"
                >
                  Nuestros Servicios
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === 'servicios' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'servicios' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 flex flex-col gap-2 pt-2 overflow-hidden"
                    >
                      <button onClick={() => scrollToSection('servicios')} className="text-left text-sm py-2 text-silver/80">Organizacion Integral</button>
                      <button onClick={() => scrollToSection('servicios')} className="text-left text-sm py-2 text-silver/80">Coordinacion "Dia B"</button>
                      <button onClick={() => scrollToSection('servicios')} className="text-left text-sm py-2 text-silver/80">Coordinacion On-site / Logistica</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <button 
                  onClick={() => toggleDropdown('consultoria')} 
                  className="w-full text-left text-sm uppercase tracking-widest py-2 border-b border-gray-dark/50 flex justify-between items-center"
                >
                  Consultoria Turistica
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === 'consultoria' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'consultoria' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 flex flex-col gap-2 pt-2 overflow-hidden"
                    >
                      <button onClick={() => scrollToSection('consultoria')} className="text-left text-sm py-2 text-silver/80">Planificacion de Proyectos</button>
                      <button onClick={() => scrollToSection('consultoria')} className="text-left text-sm py-2 text-silver/80">Diseno de Rutas y Experiencias</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button onClick={() => scrollToSection('nosotros')} className="text-left text-sm uppercase tracking-widest py-2 border-b border-gray-dark/50">Quienes Somos</button>
              <button onClick={() => scrollToSection('contacto')} className="text-left text-sm uppercase tracking-widest py-2 text-terracotta">Contacto</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
