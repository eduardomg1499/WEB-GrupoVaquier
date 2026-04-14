import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="py-24 bg-carbon relative border-t border-gray-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <p className="text-terracotta text-sm uppercase tracking-[0.2em] font-semibold mb-4">Contacto</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">Hablemos de tu proximo proyecto.</h2>
            
            <div className="space-y-8 mb-12">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-silver/50 mb-2">Telefono / WhatsApp</h4>
                <a href="https://wa.me/525561257703" target="_blank" rel="noopener noreferrer" className="text-xl font-serif hover:text-terracotta transition-colors flex items-center gap-3">
                  <Phone size={20} className="text-terracotta" />
                  55 6125 7703
                </a>
              </div>
              
              <div>
                <h4 className="text-xs uppercase tracking-widest text-silver/50 mb-2">Bolsa de Trabajo</h4>
                <a href="mailto:contacto@grupovaquier.com" className="text-lg hover:text-terracotta transition-colors flex items-center gap-3">
                  <Mail size={20} className="text-terracotta" />
                  Unete a nuestro equipo
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-silver/50 mb-4">Siguenos</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-dark flex items-center justify-center hover:bg-terracotta hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-dark flex items-center justify-center hover:bg-terracotta hover:text-white transition-colors">
                  <Youtube size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-dark flex items-center justify-center hover:bg-terracotta hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-dark flex items-center justify-center hover:bg-terracotta hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-dark flex items-center justify-center hover:bg-terracotta hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music-2"><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3 bg-[#0a0a0a] p-8 md:p-12 rounded-2xl border border-gray-dark/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-widest text-silver/80 mb-2">Asesor Autorizado de Ventas te contactara para confirmar tu evento y checar los detalles.</h3>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-silver/70 ml-1">Nombre</label>
                  <input type="text" placeholder="Nombre" className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-silver/70 ml-1">Apellido</label>
                  <input type="text" placeholder="Apellido" className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-silver/70 ml-1">Correo electronico</label>
                <input type="email" placeholder="Correo electronico" className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow" />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-silver/70 ml-1">Telefono</label>
                <input type="tel" placeholder="Whatsapp" className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-silver/70 ml-1">Numero de personas</label>
                  <input type="number" placeholder="# de personas" className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-silver/70 ml-1">Fecha del evento</label>
                  <input type="date" className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-silver/70 ml-1">Horario de inicio</label>
                  <input type="time" className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-silver/70 ml-1">Horario de finalizacion</label>
                  <input type="time" className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-silver/70 ml-1">Mensaje / Detalles del evento</label>
                <textarea rows={4} placeholder="Escribe aqui los detalles de tu evento..." className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow resize-none"></textarea>
              </div>

              <button type="button" className="w-full bg-terracotta text-white font-semibold uppercase tracking-widest py-4 rounded hover:bg-white hover:text-carbon transition-colors mt-4">
                Enviar Solicitud
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
