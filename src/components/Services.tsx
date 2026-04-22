import { motion } from 'motion/react';
import { Crown, Gift, CalendarCheck, CheckCircle2, Music, Utensils, Sparkles, Camera, Baby } from 'lucide-react';

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-carbon relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-terracotta text-sm uppercase tracking-[0.2em] font-semibold mb-4">Nuestros Servicios</p>
          <h2 className="text-4xl md:text-5xl font-serif font-light">Experiencias a la Medida</h2>
          <div className="w-24 h-[1px] bg-gray-dark mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {/* Eventos Grandes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center p-8 border border-gray-dark/50 rounded-2xl hover:border-terracotta/50 transition-colors bg-gradient-to-b from-gray-dark/20 to-transparent"
          >
            <Crown size={40} className="text-terracotta mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-serif mb-4 uppercase tracking-wider">Eventos Grandes</h3>
            <p className="text-silver/70 text-sm mb-6 leading-relaxed">
              XV años, Bodas (tradicionales y de plata), Bautizos y Graduaciones.
            </p>
            <ul className="text-sm text-silver/60 space-y-2 text-left w-full border-t border-gray-dark/50 pt-6">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-terracotta" /> Salón y Banquete</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-terracotta" /> Decoración e Iluminación</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-terracotta" /> Entretenimiento y Música</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-terracotta" /> Fotografía y Video</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-terracotta" /> Coordinación Total</li>
            </ul>
          </motion.div>

          {/* Eventos Pequeños */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center p-8 border border-gray-dark/50 rounded-2xl hover:border-terracotta/50 transition-colors bg-gradient-to-b from-gray-dark/20 to-transparent"
          >
            <Gift size={40} className="text-terracotta mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-serif mb-4 uppercase tracking-wider">Eventos Pequeños</h3>
            <p className="text-silver/70 text-sm mb-6 leading-relaxed">
              Baby shower, Revelación de género, Despedidas, Cumpleaños y Fiestas infantiles.
            </p>
            <ul className="text-sm text-silver/60 space-y-2 text-left w-full border-t border-gray-dark/50 pt-6">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-terracotta" /> Decoración Temática</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-terracotta" /> Organización Completa</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-terracotta" /> Actividades y Dinámicas</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-terracotta" /> Detalles Personalizados</li>
            </ul>
          </motion.div>

          {/* Coordinacion Dia B */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center text-center p-8 border border-terracotta/30 rounded-2xl hover:border-terracotta transition-colors bg-gradient-to-b from-terracotta/5 to-transparent relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-terracotta text-white text-[10px] uppercase tracking-widest py-1 px-3 rounded-bl-lg font-semibold">
              Destacado
            </div>
            <CalendarCheck size={40} className="text-terracotta mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-serif mb-4 uppercase tracking-wider">Coordinación "Día B"</h3>
            <p className="text-silver/70 text-sm mb-6 leading-relaxed">
              Ideal para clientes que ya organizaron todo, pero necesitan apoyo profesional.
            </p>
            <ul className="text-sm text-silver/60 space-y-3 text-left w-full border-t border-gray-dark/50 pt-6">
              <li><strong className="text-silver block mb-1">Día 1 - Preparación:</strong> Recepción y confirmación de proveedores.</li>
              <li><strong className="text-silver block mb-1">Día 2 - Ajustes:</strong> Cronograma minuto a minuto.</li>
              <li><strong className="text-silver block mb-1">Día 3 - Evento:</strong> Supervisión, tiempos y resolución de imprevistos.</li>
            </ul>
            <p className="mt-6 text-terracotta italic text-sm">"Tú disfrutas, yo me encargo de todo"</p>
          </motion.div>
        </div>

        {/* Checklist Visual */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif font-light mb-4">Detalle de Servicios</h3>
            <p className="text-silver/60 text-sm max-w-2xl mx-auto">Cuidamos cada aspecto de tu evento para garantizar la perfección.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Utensils, title: "Banquete", items: ["Comida o cena", "Menú infantil", "Bebidas y coctelería"] },
              { icon: Music, title: "Audio e Iluminación", items: ["Luz ambiental", "Proyección", "Pista / estrado"] },
              { icon: Sparkles, title: "Decoración", items: ["Temática", "Centros de mesa", "Letras grandes"] },
              { icon: Camera, title: "Entretenimiento", items: ["Música en vivo", "Animadores", "Cabina 360"] },
              { icon: Baby, title: "Área de Niños", items: ["Inflables", "Menú especial", "Cuidado"] },
              { icon: Gift, title: "Extras", items: ["Recuerditos", "Carritos de dulces", "Kit de baño"] }
            ].map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-gray-dark/20 p-6 rounded-xl border border-gray-dark/50 text-center flex flex-col items-center"
              >
                <category.icon size={28} className="text-terracotta mb-4" strokeWidth={1.5} />
                <h4 className="font-serif text-lg mb-4">{category.title}</h4>
                <ul className="text-xs text-silver/60 space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
