import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[85vh] bg-[#0a0a0a] border border-gray-dark/50 rounded-2xl shadow-2xl z-[101] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-dark/50">
              <h2 className="text-2xl font-serif text-silver">Aviso de Privacidad</h2>
              <button 
                onClick={onClose}
                className="p-2 text-silver/50 hover:text-terracotta hover:bg-white/5 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar text-silver/80 space-y-6 text-sm leading-relaxed">
              <p>
                <strong>GRUPO VAQUIER</strong>, con domicilio en México, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
              </p>

              <div>
                <h3 className="text-terracotta font-semibold mb-2 uppercase tracking-widest text-xs">¿Para qué fines utilizaremos sus datos personales?</h3>
                <p>
                  Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Proveer los servicios de organización, coordinación y consultoría de eventos que ha solicitado.</li>
                  <li>Contactarlo para dar seguimiento a sus cotizaciones y solicitudes de información.</li>
                  <li>Facturación y cobro de los servicios prestados.</li>
                  <li>Evaluar la calidad del servicio que le brindamos.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-terracotta font-semibold mb-2 uppercase tracking-widest text-xs">¿Qué datos personales utilizaremos para estos fines?</h3>
                <p>
                  Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Nombre completo.</li>
                  <li>Teléfono (fijo o celular / WhatsApp).</li>
                  <li>Correo electrónico.</li>
                  <li>Detalles específicos de su evento (fecha, número de invitados, horarios).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-terracotta font-semibold mb-2 uppercase tracking-widest text-xs">¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso?</h3>
                <p>
                  Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
                </p>
                <p className="mt-2">
                  Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del correo electrónico: <strong>grupovaquier@gmail.com</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-terracotta font-semibold mb-2 uppercase tracking-widest text-xs">¿Cómo puede conocer los cambios en este aviso de privacidad?</h3>
                <p>
                  El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.
                </p>
                <p className="mt-2">
                  Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de nuestra página web.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-dark/30 text-xs text-silver/50">
                <p>Última actualización: {new Date().toLocaleDateString('es-MX')}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
