import { motion, AnimatePresence } from 'motion/react';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, CheckCircle, X, Loader2 } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/grupovaquier@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        setMensaje('');
      } else {
        alert("Hubo un error al enviar el formulario. Por favor, intenta de nuevo.");
      }
    } catch (error) {
      alert("Hubo un error de conexión. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <a href="https://wa.me/525562038498" target="_blank" rel="noopener noreferrer" className="text-xl font-serif hover:text-terracotta transition-colors flex items-center gap-3">
                  <Phone size={20} className="text-terracotta" />
                  55 6203 8498
                </a>
              </div>
              
              <div>
                <h4 className="text-xs uppercase tracking-widest text-silver/50 mb-2">Bolsa de Trabajo</h4>
                <a href="mailto:grupovaquier@gmail.com" className="text-lg hover:text-terracotta transition-colors flex items-center gap-3">
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

            <motion.form layout onSubmit={handleSubmit} className="space-y-6">
              {/* Configuracion de FormSubmit para AJAX */}
              <input type="hidden" name="_subject" value="Nueva solicitud de evento - Grupo Vaquier" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              {/* Honeypot para evitar spam sin usar captcha visible */}
              <input type="text" name="_honey" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-silver/70 ml-1">Nombre</label>
                  <input 
                    type="text" 
                    name="Nombre" 
                    required 
                    maxLength={50}
                    pattern="[a-zA-ZÀ-ÿ\s]+"
                    title="Solo letras y espacios"
                    placeholder="Nombre" 
                    className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-silver/70 ml-1">Apellido</label>
                  <input 
                    type="text" 
                    name="Apellido" 
                    required 
                    maxLength={50}
                    pattern="[a-zA-ZÀ-ÿ\s]+"
                    title="Solo letras y espacios"
                    placeholder="Apellido" 
                    className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-silver/70 ml-1">Correo electronico</label>
                <input 
                  type="email" 
                  name="Email" 
                  required 
                  maxLength={100}
                  placeholder="Correo electronico" 
                  className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-silver/70 ml-1">Telefono</label>
                <input 
                  type="tel" 
                  name="Telefono" 
                  required 
                  maxLength={12}
                  minLength={10}
                  pattern="[0-9]+"
                  title="Ingresa entre 10 y 12 dígitos numéricos"
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  placeholder="WhatsApp (10 a 12 dígitos)" 
                  className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-silver/70 ml-1">Numero de personas</label>
                  <input 
                    type="number" 
                    name="Numero_de_personas" 
                    min="1"
                    max="10000"
                    onKeyPress={(e) => {
                      if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    placeholder="# de personas" 
                    className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-silver/70 ml-1">Fecha del evento</label>
                  <input 
                    type="date" 
                    name="Fecha_del_evento" 
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-silver/70 ml-1">Horario de inicio</label>
                  <input type="time" name="Horario_inicio" className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-silver/70 ml-1">Horario de finalizacion</label>
                  <input type="time" name="Horario_fin" className="w-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow" />
                </div>
              </div>

              <motion.div layout className="space-y-2">
                <label className="text-xs text-silver/70 ml-1">Mensaje / Detalles del evento</label>
                <div className="grid">
                  <div 
                    className="invisible whitespace-pre-wrap break-words px-4 py-3 col-start-1 row-start-1 w-full min-h-[120px] text-base"
                    aria-hidden="true"
                  >
                    {mensaje + ' '}
                  </div>
                  <textarea 
                    name="Mensaje" 
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    maxLength={500}
                    placeholder="Escribe aqui los detalles de tu evento... (max. 500 caracteres)" 
                    className="col-start-1 row-start-1 w-full h-full bg-white text-carbon px-4 py-3 rounded outline-none focus:ring-2 focus:ring-terracotta transition-shadow resize-none overflow-hidden text-base"
                  />
                </div>
              </motion.div>

              <motion.button 
                layout
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-terracotta text-white font-semibold uppercase tracking-widest py-4 rounded hover:bg-white hover:text-carbon transition-colors mt-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Solicitud'
                )}
              </motion.button>
            </motion.form>
          </motion.div>

        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccess(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#0a0a0a] border border-gray-dark/50 rounded-2xl shadow-2xl z-[101] overflow-hidden flex flex-col items-center text-center p-8"
            >
              <button 
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 p-2 text-silver/50 hover:text-terracotta hover:bg-white/5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-20 h-20 bg-terracotta/20 rounded-full flex items-center justify-center mb-6 text-terracotta"
              >
                <CheckCircle size={40} />
              </motion.div>

              <h2 className="text-2xl font-serif text-silver mb-3">¡Solicitud Enviada!</h2>
              <p className="text-silver/70 text-sm leading-relaxed mb-8">
                Gracias por contactarnos. Hemos recibido tu información correctamente. Un Asesor Autorizado de Ventas se comunicará contigo a la brevedad para afinar los detalles de tu evento.
              </p>

              <button 
                onClick={() => setShowSuccess(false)}
                className="w-full bg-terracotta text-white font-semibold uppercase tracking-widest py-4 rounded hover:bg-white hover:text-carbon transition-colors"
              >
                Aceptar
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
