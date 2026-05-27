import { Phone, Mail, MapPin, Scale, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { coreValues } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060a0e] text-gray-400 border-t border-borde-sutil">
      
      {/* Decorative Core Values Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/5">
        {coreValues.map((val, i) => (
          <div key={i} className="flex gap-4 p-4 bg-bg-secundario/30 border border-white/5 rounded transition-all duration-300 hover:border-gold-acento/20">
            <div className="text-gold-acento shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-white mb-1">{val.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-light">{val.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Brand Column (col-span-5) */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={handleScrollToTop}>
            <div className="relative flex flex-col items-center justify-center px-4 py-1.5 bg-bg-principal border border-gold-acento/30 rounded">
              <span className="font-serif text-3xl font-medium tracking-tight text-white leading-none">
                H<span className="text-gold-acento italic text-2xl mx-px relative -top-0.5">&amp;</span>H
              </span>
              <span className="font-serif text-[9px] uppercase tracking-[0.35em] text-gold-acento leading-none mt-1 border-t border-gold-acento/20 pt-1 width-full text-center">
                Abogados
              </span>
            </div>
            <div>
              <span className="text-white text-base font-semibold tracking-wider uppercase font-serif block">H&amp;H Abogados Asociados</span>
              <span className="text-xs text-gold-acento font-light">Especialistas en Litigio, Civil y Mercantil</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 font-light max-w-sm leading-relaxed">
            Ofrecemos defensa jurídica de alto nivel ante todas las instancias procesales del estado civil, mercantil y familiar en Venezuela. Especialistas en gestión remota para la diáspora.
          </p>

          <div className="flex items-center gap-2 text-xs text-gold-acento/80">
            <Clock size={12} />
            <span>Atención: Lunes a Viernes (8:00 AM - 5:00 PM AST)</span>
          </div>
        </div>

        {/* Directory Links Column (col-span-3) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider relative inline-block pb-1.5 border-b border-gold-acento/30">
            Secciones
          </h4>
          <ul className="space-y-2 text-xs font-light">
            <li>
              <a href="#inicio" className="hover:text-gold-acento transition-colors">Inicio de Plataforma</a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-gold-acento transition-colors">Especialidades Penales/Civiles</a>
            </li>
            <li>
              <a href="#gestion-remota" className="hover:text-gold-acento transition-colors">Dossier para el Exterior</a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-gold-acento transition-colors">Consultar Expediente Virtual</a>
            </li>
          </ul>
        </div>

        {/* Real Direct Actions (col-span-4) */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider relative inline-block pb-1.5 border-b border-gold-acento/30">
            Despacho Principal
          </h4>
          
          <div className="space-y-4 text-xs font-light">
            {/* Phone */}
            <a
              href="https://wa.me/584249124547"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2.5 group hover:text-white transition-colors"
            >
              <Phone size={14} className="text-gold-acento shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <span className="font-semibold block text-gray-300 group-hover:text-gold-acento">Directo WhatsApp:</span>
                <span>+58 424-9124547</span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:vanessahamilton8686@gmail.com"
              className="flex items-start gap-2.5 group hover:text-white transition-colors"
            >
              <Mail size={14} className="text-gold-acento shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <span className="font-semibold block text-gray-300 group-hover:text-gold-acento">Despacho de Entrada:</span>
                <span className="break-all">vanessahamilton8686@gmail.com</span>
              </div>
            </a>

            {/* Map pin */}
            <div className="flex items-start gap-2.5">
              <MapPin size={14} className="text-gold-acento shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-gray-300">Ubicación Física:</span>
                <span>Puerto Ordaz, Estado Bolívar, Venezuela</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Extreme Bottom Bar */}
      <div className="bg-[#030609] py-6 border-t border-white/5 text-center text-xs font-light tracking-wide text-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} H&amp;H Abogados Asociados. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#inicio" className="hover:text-gold-acento transition-colors text-[11px]">Subir</a>
            <span>|</span>
            <span className="text-gold-acento/50 text-[11px]">Puerto Ordaz, Venezuela</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
