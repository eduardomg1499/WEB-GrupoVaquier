import { motion } from 'motion/react';
import { TrendingUp, Map, Briefcase } from 'lucide-react';

export function Consulting() {
  return (
    <section id="consultoria" className="py-24 bg-carbon relative border-t border-gray-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column - Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <p className="text-terracotta text-sm uppercase tracking-[0.2em] font-semibold mb-4">Consultoria Turistica</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-6">
              Impulsa tu <br />
              <span className="italic text-silver/80">Negocio Turistico</span>
            </h2>
            <p className="text-silver/70 text-sm leading-relaxed mb-8">
              No solo organizamos eventos, tambien ayudamos a que los negocios turisticos crezcan, se ordenen y generen mas ingresos. Analizamos tu empresa a fondo para detectar que esta fallando y convertirlo en oportunidades reales de crecimiento.
            </p>
            <div className="bg-terracotta/10 border border-terracotta/20 p-6 rounded-xl">
              <p className="text-terracotta font-serif italic text-lg mb-2">Mi objetivo es claro:</p>
              <p className="text-sm text-silver/90">Convertir tu negocio en una empresa organizada, rentable y lista para crecer.</p>
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
                    Estrategias integrales para empresas turisticas, ecoturisticas, restaurantes y hoteles. Ideal si tu negocio esta estancado o quieres escalar.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-silver/60">
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Organizacion y reestructura</li>
                      <li>Gestion de personal y liderazgo</li>
                      <li>Estrategias de marketing</li>
                      <li>Manejo de temporadas</li>
                    </ul>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Optimizacion de procesos</li>
                      <li>Herramientas de automatizacion</li>
                      <li>Protocolos de seguridad</li>
                      <li>Analisis de mercado</li>
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
                  <h3 className="text-2xl font-serif mb-4">Planificacion y Desarrollo de Proyectos</h3>
                  <p className="text-silver/70 text-sm mb-6 leading-relaxed">
                    De la idea a la realidad operativa. Transformamos conceptos en proyectos turisticos rentables y sostenibles mediante una metodologia integral.
                  </p>
                  <ul className="space-y-4 text-sm text-silver/60">
                    <li><strong className="text-silver">Estudios de Viabilidad:</strong> Analisis profundo de mercado y competencia.</li>
                    <li><strong className="text-silver">Optimizacion de Espacios Publicos:</strong> Evaluacion y diseno estrategico (especialidad en Centros Culturales).</li>
                    <li><strong className="text-silver">Puesta en Marcha:</strong> Gestion del desarrollo paso a paso, desde planeacion hasta ejecucion.</li>
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
                  <h3 className="text-2xl font-serif mb-4">Diseno de Rutas y Experiencias Turisticas</h3>
                  <p className="text-silver/70 text-sm mb-6 leading-relaxed">
                    Creacion de productos que cautivan al viajero. Disenamos servicios y paquetes a la medida que elevan el valor de tu destino o empresa.
                  </p>
                  <ul className="space-y-4 text-sm text-silver/60">
                    <li><strong className="text-silver">Ingenieria de Rutas:</strong> Creacion de itinerarios logisticamente eficientes y atractivos.</li>
                    <li><strong className="text-silver">Empaquetado de Servicios:</strong> Estructuracion de ofertas que combinan transporte, actividades y servicios.</li>
                    <li><strong className="text-silver">Curaduria de Experiencias:</strong> Desarrollo de servicios de guia y actividades unicas.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
