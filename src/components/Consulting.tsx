import { motion } from 'motion/react';
import { TrendingUp, Map, Briefcase, Share2 } from 'lucide-react';

export function Consulting() {
  return (
    <section id="consultoria" className="py-24 bg-carbon relative border-t border-gray-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column - Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <p className="text-terracotta text-sm uppercase tracking-[0.2em] font-semibold mb-4">Consultoría & Presencia Digital</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-6">
              Impulsa tu <br />
              <span className="italic text-silver/80">Negocio o Marca</span>
            </h2>
            <p className="text-silver/70 text-sm leading-relaxed mb-8">
              No solo organizamos eventos, también ayudamos a que los negocios turísticos, gastronómicos y de servicios crezcan, se ordenen y conecten digitalmente con sus clientes. Diseñamos estrategias operativas y optimizamos tu presencia en redes sociales para convertirlas en oportunidades reales de ventas.
            </p>
            <div className="bg-terracotta/10 border border-terracotta/20 p-6 rounded-xl">
              <p className="text-terracotta font-serif italic text-lg mb-2">Mi objetivo es claro:</p>
              <p className="text-sm text-silver/90">Convertir tu presencia física y digital en una marca organizada, atractiva y altamente rentable.</p>
            </div>
          </div>

          {/* Right Column - Services List */}
          <div className="lg:w-2/3 space-y-12">
            
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full border border-gray-dark flex items-center justify-center shrink-0 group-hover:border-terracotta transition-colors">
                  <TrendingUp size={24} className="text-terracotta" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-4">Crecimiento de Negocios</h3>
                  <p className="text-silver/70 text-sm mb-6 leading-relaxed">
                    Estrategias integrales para empresas turísticas, ecoturísticas, restaurantes y hoteles. Ideal si tu negocio está estancado o quieres escalar.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-silver/60">
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Organización y reestructura</li>
                      <li>Gestión de personal y liderazgo</li>
                      <li>Estrategias de marketing</li>
                      <li>Manejo de temporadas</li>
                    </ul>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Optimización de procesos</li>
                      <li>Herramientas de automatización</li>
                      <li>Protocolos de seguridad</li>
                      <li>Análisis de mercado</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="w-full h-[1px] bg-gray-dark/50"></div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full border border-gray-dark flex items-center justify-center shrink-0 group-hover:border-terracotta transition-colors">
                  <Briefcase size={24} className="text-terracotta" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-4">Planificación y Desarrollo de Proyectos</h3>
                  <p className="text-silver/70 text-sm mb-6 leading-relaxed">
                    De la idea a la realidad operativa. Transformamos conceptos en proyectos turísticos rentables y sostenibles mediante una metodología integral.
                  </p>
                  <ul className="space-y-4 text-sm text-silver/60">
                    <li><strong className="text-silver">Estudios de Viabilidad:</strong> Análisis profundo de mercado y competencia.</li>
                    <li><strong className="text-silver">Optimización de Espacios Públicos:</strong> Evaluación y diseño estratégico (especialidad en Centros Culturales).</li>
                    <li><strong className="text-silver">Puesta en Marcha:</strong> Gestión del desarrollo paso a paso, desde planeación hasta ejecución.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <div className="w-full h-[1px] bg-gray-dark/50"></div>

            {/* Service 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full border border-gray-dark flex items-center justify-center shrink-0 group-hover:border-terracotta transition-colors">
                  <Map size={24} className="text-terracotta" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-4">Diseño de Rutas y Experiencias Turísticas</h3>
                  <p className="text-silver/70 text-sm mb-6 leading-relaxed">
                    Creación de productos que cautivan al viajero. Diseñamos servicios y paquetes a la medida que elevan el valor de tu destino o empresa.
                  </p>
                  <ul className="space-y-4 text-sm text-silver/60">
                    <li><strong className="text-silver">Ingeniería de Rutas:</strong> Creación de itinerarios logísticamente eficientes y atractivos.</li>
                    <li><strong className="text-silver">Empaquetado de Servicios:</strong> Estructuración de ofertas que combinan transporte, actividades y servicios.</li>
                    <li><strong className="text-silver">Curaduría de Experiencias:</strong> Desarrollo de servicios de guía y actividades únicas.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <div className="w-full h-[1px] bg-gray-dark/50"></div>

            {/* Service 4 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full border border-gray-dark flex items-center justify-center shrink-0 group-hover:border-terracotta transition-colors">
                  <Share2 size={24} className="text-terracotta" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-4">Community Management & Redes Sociales</h3>
                  <p className="text-silver/70 text-sm mb-6 leading-relaxed">
                    Especializado en marcas del sector gastronómico, hotelero, turístico y organizadores de eventos. Conectamos tu negocio con el público ideal a través de narrativas atractivas y un diseño visual armónico.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-silver/60">
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Creación de contenido para Instagram, TikTok y Facebook</li>
                      <li>Copywriting profesional y storytelling</li>
                      <li>Gestión de comunidad y respuesta rápida interactiva</li>
                    </ul>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Calendario y planeación estratégica mensual</li>
                      <li>Diseño de identidad visual para feeds e historias</li>
                      <li>Estrategias de interacción con marcas locales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
