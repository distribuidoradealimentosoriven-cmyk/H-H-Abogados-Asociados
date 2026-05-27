import { motion } from 'motion/react';
import { ShieldCheck, ArrowDown, ExternalLink, Compass } from 'lucide-react';
import { trustCounters } from '../data';

export default function Hero() {
  const handleScrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 15, 20, 0.8), rgba(10, 15, 20, 0.9)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920&auto=format&fit=crop')`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Decorative Golden Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gold-acento/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center" id="hero_text_group">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-acento/10 border border-gold-acento/30 text-gold-acento text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <ShieldCheck size={14} />
            Firma de Abogados Asociados · Guayana
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight lg:leading-tight mb-6"
          >
            Defensa Jurídica, <span className="text-gold-acento italic font-serif">Litigio Avanzado</span> y Soluciones Procesales
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-300 font-sans max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            Protegemos tus derechos, patrimonio y empresa mediante estrategias litigiosas de alto nivel en Venezuela. Asesoría de absoluta confianza y tramitación 100% remota desde nuestra sede principal en Puerto Ordaz.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={() => handleScrollTo('#contacto')}
              className="w-full sm:w-auto px-8 py-4 bg-gold-acento hover:bg-gold-hover text-bg-principal font-bold rounded shadow-lg shadow-gold-acento/25 transition-all duration-300 text-sm uppercase tracking-wider flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              id="hero_btn_consult"
            >
              Agendar Consulta Virtual
              <Compass size={16} />
            </button>
            <button
              onClick={() => handleScrollTo('#gestion-remota')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white font-semibold border border-white/20 rounded transition-all duration-200 text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              id="hero_btn_scenarios"
            >
              Consultar Casos a Distancia
              <ArrowDown size={16} />
            </button>
          </motion.div>
        </div>

        {/* Counter Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto w-full pt-6 border-t border-white/10"
          id="hero_counters_grid"
        >
          {trustCounters.map((counter, idx) => (
            <div
              key={idx}
              className="bg-bg-secundario/40 border border-white/5 backdrop-blur-sm p-5 rounded text-center transition-all duration-300 hover:border-gold-acento/30"
            >
              <div className="font-serif text-2xl sm:text-3xl font-bold text-gold-acento tracking-tight mb-1">
                {counter.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-sans tracking-wide">
                {counter.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bounce scroll down button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block animate-bounce z-10">
        <button
          onClick={() => handleScrollTo('#servicios')}
          className="text-gray-500 hover:text-gold-acento transition-colors duration-200 p-2"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
}
