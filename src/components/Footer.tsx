import { useState } from 'react';
import { PrivacyModal } from './PrivacyModal';

export function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#0a0a0a] py-12 border-t border-gray-dark/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-serif font-bold text-silver tracking-wide">
            GRUPO <span className="text-terracotta">VAQUIER</span>
          </div>
          
          <div className="text-sm text-silver/50 text-center md:text-left">
            &copy; {new Date().getFullYear()} Grupo Vaquier. Todos los derechos reservados.
          </div>

          <div className="flex gap-6 text-sm text-silver/50">
            <button 
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-terracotta transition-colors"
            >
              Aviso de Privacidad
            </button>
            <button 
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-terracotta transition-colors"
            >
              Términos y Condiciones
            </button>
          </div>
        </div>
      </footer>

      <PrivacyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
    </>
  );
}
