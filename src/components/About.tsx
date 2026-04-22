import { motion } from 'motion/react';

export function About() {
  return (
    <section id="nosotros" className="py-24 bg-carbon relative border-t border-gray-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
              <img 
                src="https://raw.githubusercontent.com/eduardomg1499/img-web-GrupoVaquier/main/vaquier.jpeg" 
                alt="Ariadne Rivas Vaquier" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent opacity-80"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-terracotta text-white p-6 rounded-xl hidden md:block max-w-xs shadow-2xl">
              <p className="font-serif italic text-lg mb-2">"Mi enfoque combina el rigor administrativo con una visión creativa."</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full md:w-1/2">
            <p className="text-terracotta text-sm uppercase tracking-[0.2em] font-semibold mb-4">Quiénes Somos</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-2">Ariadne Rivas Vaquier</h2>
            <p className="text-silver/60 text-sm uppercase tracking-widest mb-8">Directora de Grupo Vaquier</p>
            
            <div className="space-y-6 text-sm text-silver/80 leading-relaxed mb-10">
              <p>
                Licenciada en Turismo por el Instituto Politécnico Nacional, especializada en la planificación y gestión integral de proyectos. Transformo ideas en experiencias memorables.
              </p>
              
              <div className="border-l-2 border-terracotta pl-6 py-2 my-8">
                <h4 className="font-serif text-lg text-silver mb-2">Experiencia Destacada</h4>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-terracotta block text-xs uppercase tracking-wider mb-1">Eventos de Alto Impacto</strong>
                    Trayectoria liderando proyectos culturales y sociales en Milpa Alta y Estado de México, incluyendo la "Rectificación del Plan de Ayala" y festivales comunitarios.
                  </li>
                  <li>
                    <strong className="text-terracotta block text-xs uppercase tracking-wider mb-1">Logística Especializada</strong>
                    Gestión de eventos técnicos y científicos, como la dirección logística en la Sociedad Astronómica ESIA Ticomán (SAET).
                  </li>
                  <li>
                    <strong className="text-terracotta block text-xs uppercase tracking-wider mb-1">Gestión de Proyectos Sociales</strong>
                    Representante en programas de autogestión juvenil (INJUVE), manejando presupuestos y relaciones públicas.
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-dark/50">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-silver/50 mb-4">Nuestro Enfoque</h4>
                <ul className="space-y-2 text-sm text-silver/80">
                  <li>Organización</li>
                  <li>Logística</li>
                  <li>Solución de problemas</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-silver/50 mb-4">Diferenciador</h4>
                <ul className="space-y-2 text-sm text-silver/80">
                  <li>Atención personalizada</li>
                  <li>Control total del evento</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
