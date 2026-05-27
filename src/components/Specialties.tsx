import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, Briefcase, Home, Users, CheckCircle, FileText, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { specialties } from '../data';
import { SpecialtyKey } from '../types';

interface SpecialtiesProps {
  onSelectCategory: (category: string) => void;
}

const iconMap = {
  procesal: Scale,
  mercantil: Briefcase,
  civil: Home,
  familia: Users,
};

export default function Specialties({ onSelectCategory }: SpecialtiesProps) {
  const [activeTab, setActiveTab] = useState<SpecialtyKey>('procesal');
  const [hoveredCard, setHoveredCard] = useState<SpecialtyKey | null>(null);

  const handleStartConsultation = (id: SpecialtyKey) => {
    // Scroll to contact section
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Update parent state to pre-fill category
    let mappedCategory = '';
    if (id === 'procesal') mappedCategory = 'Procesal';
    else if (id === 'mercantil') mappedCategory = 'Mercantil';
    else if (id === 'civil') mappedCategory = 'Civil';
    else if (id === 'familia') mappedCategory = 'Familia';

    onSelectCategory(mappedCategory);
  };

  return (
    <section id="servicios" className="py-24 bg-bg-principal border-b border-borde-sutil relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-15">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white tracking-tight uppercase relative inline-block pb-4">
            Áreas de Especialización
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gold-acento" />
          </h2>
          <p className="mt-4 font-sans text-gray-400 text-base sm:text-lg italic font-light">
            Ejerciendo el Derecho con absoluto rigor técnico, enfoque procesal estratégico y estricta ética profesional.
          </p>
        </div>

        {/* Dynamic Mobile Layout: Accordion, Desktop Layout: Side-by-Side tabs or Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* List of Specialty Cards (col-span-5) */}
          <div className="lg:col-span-5 space-y-4" id="specialties_nav_cards">
            {specialties.map((specialty) => {
              const IconComponent = iconMap[specialty.id];
              const isActive = activeTab === specialty.id;
              
              return (
                <div
                  key={specialty.id}
                  onClick={() => setActiveTab(specialty.id)}
                  onMouseEnter={() => setHoveredCard(specialty.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group text-left p-6 rounded border cursor-pointer transition-all duration-300 relative ${
                    isActive
                      ? 'bg-bg-secundario border-gold-acento shadow-lg shadow-gold-acento/5'
                      : 'bg-bg-secundario/50 border-white/5 hover:border-gold-acento/30 hover:bg-bg-secundario/80'
                  }`}
                >
                  {/* Active highlight side line */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-gold-acento rounded-l transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 group-hover:opacity-50 group-hover:scale-y-70'
                    }`}
                  />

                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-md transition-colors duration-300 ${
                        isActive ? 'bg-gold-acento/15 text-gold-acento' : 'bg-white/5 text-gray-400 group-hover:text-gold-acento group-hover:bg-white/10'
                      }`}
                    >
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-serif text-lg font-semibold transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {specialty.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1 font-sans font-light line-clamp-1">
                        {specialty.subtitle}
                      </p>
                    </div>
                    
                    {/* Tiny Indicator for mobile/tablet */}
                    <div className="text-gold-acento/40 group-hover:text-gold-acento transition-colors duration-300 lg:hidden">
                      {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {/* Mobile Accordion Content */}
                  <div className="block lg:hidden">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-4 pt-4 border-t border-white/5"
                        >
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            {specialty.description}
                          </p>
                          
                          <div className="mb-4">
                            <span className="text-xs font-bold text-gold-acento uppercase tracking-wider block mb-2">
                              Sujetos de Acción Legal:
                            </span>
                            <ul className="space-y-2">
                              {specialty.cases.map((_case, i) => (
                                <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                                  <span className="text-gold-acento text-base font-serif leading-none">•</span>
                                  <span>{_case}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-4">
                            <span className="text-xs font-bold text-gold-acento uppercase tracking-wider block mb-2">
                              Documentos Base Recomendados:
                            </span>
                            <div className="grid grid-cols-1 gap-1">
                              {specialty.documents.map((doc, i) => (
                                <span key={i} className="text-[11px] text-gray-400 flex items-center gap-1.5 p-1 bg-white/5 rounded">
                                  <FileText size={10} className="text-gold-acento shrink-0" />
                                  <span className="truncate">{doc}</span>
                                </span>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStartConsultation(specialty.id);
                            }}
                            className="w-full flex items-center justify-center gap-2 py-3 bg-gold-acento text-bg-principal font-bold rounded text-xs uppercase tracking-wider hover:bg-gold-hover transition-colors shadow-md mt-4"
                          >
                            Consultar este Ramo 
                            <ArrowRight size={14} />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Detail Panel (col-span-7) */}
          <div className="hidden lg:col-span-7 bg-bg-secundario border border-borde-sutil p-8 rounded min-h-[460px] flex flex-col justify-between shadow-xl relative overflow-hidden" id="specialty-detail-panel_desktop">
            {/* Background design accents */}
            <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 border border-gold-acento/10 rounded-full select-none pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-40 h-40 bg-gold-acento/5 rounded-full blur-3xl pointer-events-none" />

            {(() => {
              const activeData = specialties.find(s => s.id === activeTab) || specialties[0];
              const IconComp = iconMap[activeData.id];

              return (
                <div className="relative z-10 flex flex-col h-full justify-between" key={activeData.id}>
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                      <div className="p-3 bg-gold-acento/10 text-gold-acento rounded">
                        <IconComp size={30} />
                      </div>
                      <div>
                        <div className="text-xs font-bold font-sans tracking-widest text-gold-acento uppercase">
                          Especialidad Legal
                        </div>
                        <h4 className="font-serif text-2xl font-semibold text-white mt-0.5">
                          {activeData.title}
                        </h4>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed mb-6 font-light">
                      {activeData.description}
                    </p>

                    {/* Grid of details */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      {/* Left: Typical Cases */}
                      <div className="space-y-3">
                        <span className="text-xs font-bold text-gold-acento uppercase tracking-wider block">
                          Tipos de Procesos Comunes
                        </span>
                        <ul className="space-y-2">
                          {activeData.cases.map((item, i) => (
                            <li key={i} className="text-xs text-gray-400 flex items-start gap-2 leading-relaxed">
                              <span className="text-gold-acento font-bold mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Prerequisite documents */}
                      <div className="space-y-3">
                        <span className="text-xs font-bold text-gold-acento uppercase tracking-wider block">
                          Recaudos Previos Sugeridos
                        </span>
                        <div className="space-y-2">
                          {activeData.documents.map((doc, i) => (
                            <div key={i} className="text-[11px] text-gray-400 flex gap-2 p-2 bg-bg-principal/50 border border-white/5 rounded">
                              <FileText size={12} className="text-gold-acento shrink-0 mt-0.5" />
                              <span className="leading-tight">{doc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Legal Focus Value */}
                    <div className="p-3 bg-bg-principal/60 border-l-2 border-gold-acento rounded-r text-xs text-gray-400 font-sans italic flex items-center gap-2 mb-6">
                      <CheckCircle size={14} className="text-gold-acento shrink-0" />
                      <span><strong>Enfoque H&amp;H:</strong> {activeData.approach}</span>
                    </div>
                  </div>

                  {/* Footer Dynamic consult trigger */}
                  <div className="flex justify-end pt-4 border-t border-white/5">
                    <button
                      onClick={() => handleStartConsultation(activeData.id)}
                      className="py-3 px-6 bg-gold-acento hover:bg-gold-hover text-bg-principal font-bold rounded shadow-md text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
                    >
                      Iniciar Consulta de {activeData.title}
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
}
