import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plane, Building, FileText, UserMinus, Clock, CheckCircle2, Phone, ClipboardList, RefreshCw } from 'lucide-react';
import { scenarios } from '../data';
import { ScenarioKey } from '../types';

const scenarioIcons = {
  viaje: Plane,
  venta_inmueble: Building,
  divorcio: UserMinus,
  sucesiones: ClipboardList,
};

export default function RemoteManagement() {
  const [selectedScenarioId, setSelectedScenarioId] = useState<ScenarioKey>('viaje');

  const selectedScenario = scenarios.find(s => s.id === selectedScenarioId) || scenarios[0];
  const IconComponent = scenarioIcons[selectedScenarioId];

  return (
    <section id="gestion-remota" className="py-24 bg-bg-secundario border-b border-borde-sutil relative overflow-hidden">
      {/* Decorative architectural grid background overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none bg-[linear-gradient(to_right,#c5a880_1px,transparent_1px),linear-gradient(to_bottom,#c5a880_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-gold-acento uppercase mb-2 block"
          >
            Alcance Global · Domiciliados en Puerto Ordaz
          </motion.div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white tracking-tight uppercase">
            ¿Te encuentras lejos o fuera de Venezuela?
          </h2>
          <p className="mt-4 font-sans text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Gestionamos tu caso desde Puerto Ordaz y te representamos ante Registros, Notarías y Tribunales locales sin necesidad de que viajes al país. Coordinación 100% virtual, segura y con información transparente en tiempo real.
          </p>
        </div>

        {/* Dynamic Requirements Explorer */}
        <div className="bg-bg-principal/60 border border-white/5 rounded-lg p-6 sm:p-8 lg:p-10 mb-12 shadow-2xl backdrop-blur-sm">
          
          <div className="text-center mb-6">
            <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Selecciona tu Trámite Distante para ver Requisitos y Pasos:
            </span>
          </div>

          {/* Quick tab pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10" id="remote_scenario_selector">
            {scenarios.map((sc) => {
              const IsSelected = selectedScenarioId === sc.id;
              const ScIcon = scenarioIcons[sc.id];

              return (
                <button
                  key={sc.id}
                  onClick={() => setSelectedScenarioId(sc.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                    IsSelected
                      ? 'bg-gold-acento text-bg-principal shadow-lg shadow-gold-acento/10'
                      : 'bg-white/5 text-gray-300 hover:bg-white/15'
                  }`}
                >
                  <ScIcon size={14} />
                  {sc.title}
                </button>
              );
            })}
          </div>

          {/* Tab Screen Output */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="scenario-output-viewer">
            
            {/* Left: Intro & Soportes (col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-gold-acento/10 text-gold-acento rounded">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                    {selectedScenario.title}
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-6 font-sans">
                  {selectedScenario.description}
                </p>

                {/* Soportes Checklist */}
                <div className="bg-bg-secundario/80 border border-white/5 p-5 rounded space-y-3">
                  <span className="text-xs font-bold text-gold-acento uppercase tracking-wider flex items-center gap-1.5 border-b border-white/5 pb-2">
                    <FileText size={12} /> Soportes exigidos desde el exterior
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedScenario.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle2 size={12} className="text-gold-acento shrink-0 mt-0.5" />
                        <span className="leading-tight">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic Duration Alert */}
              <div className="mt-6 p-4 bg-gold-acento/5 border border-gold-acento/20 rounded-md flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gold-acento shrink-0 animate-pulse" />
                  <span className="text-xs font-medium text-gray-300">Tiempo Estimado de Tramitación:</span>
                </div>
                <span className="text-xs font-bold text-gold-acento">{selectedScenario.timeline}</span>
              </div>
            </div>

            {/* Right: Steps Visual Path (col-span-6) */}
            <div className="lg:col-span-6 bg-bg-secundario/40 border border-white/5 p-6 rounded-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-white uppercase tracking-wider block mb-4 border-b border-white/5 pb-2 flex items-center gap-2">
                  <RefreshCw size={12} className="text-gold-acento" />
                  Flujo de Trabajo 100% Remoto:
                </span>

                {/* Vertical roadmap items */}
                <div className="space-y-5 relative pl-4 border-l border-gold-acento/20">
                  {selectedScenario.steps.map((st, sIdx) => (
                    <div key={sIdx} className="relative">
                      {/* Number spot */}
                      <div className="absolute -left-[27px] top-0 w-5 h-5 bg-gold-acento text-bg-principal rounded-full text-[10px] font-bold flex items-center justify-center border border-bg-principal">
                        {sIdx + 1}
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed font-sans pl-2">
                        {st}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-center lg:text-left">
                <span className="text-[11px] text-gray-400 font-sans italic block mb-3">
                  *Nosotros redactamos y formalizamos todo el papeleo legal local, enviándote respaldos digitales y físicos vía Courier si es necesario.
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Major WhatsApp urgent call block */}
        <div className="max-w-3xl mx-auto text-center" id="emergency_whatsapp_block">
          <div className="bg-gradient-to-r from-bg-secundario to-bg-principal border border-gold-acento/20 p-8 rounded-lg shadow-xl relative overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gold-acento/5 rounded-l-full blur-3xl pointer-events-none" />
            
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-2">
              ¿Tu caso requiere atención o representación inmediata en Guayana?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mb-6">
              Inicia comunicación directa inmediata con la abogada Vanessa Hamilton para consulta de urgencia o defensa legal en curso.
            </p>
            <a
              href="https://wa.me/584249124547"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-verde-whatsapp hover:bg-[#20ba59] text-white px-8 py-3.5 rounded font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-lg shadow-verde-whatsapp/25 transform hover:-translate-y-0.5"
            >
              <Phone size={16} fill="currentColor" />
              Contactar Urgente por WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
