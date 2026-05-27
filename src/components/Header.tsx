import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Scale, ShieldAlert, PhoneCall } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Especialidades', href: '#servicios' },
    { label: 'Gestión Remota', href: '#gestion-remota' },
    { label: 'Consultas', href: '#contacto' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-bg-secundario/95 border-b border-gold-acento/50 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Custom Brand Logo */}
            <a 
              href="#inicio" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
              className="group flex items-center space-x-3 cursor-pointer"
              id="header_logo"
            >
              <div className="relative flex flex-col items-center justify-center px-3 py-1 bg-gradient-to-b from-bg-principal to-bg-principal/80 border border-gold-acento/30 rounded shadow-inner">
                <div className="font-serif text-3xl font-medium tracking-tight text-white leading-none relative group-hover:text-gold-acento transition-colors duration-300">
                  H<span className="text-gold-acento font-serif italic text-2xl mx-px relative -top-0.5">&amp;</span>H
                </div>
                <div className="font-serif text-[9px] uppercase tracking-[0.35em] text-gold-acento leading-none mt-1 border-t border-gold-acento/20 pt-1 width-full text-center">
                  Abogados
                </div>
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-white text-sm font-semibold tracking-wider uppercase font-serif">H&amp;H Asociados</span>
                <span className="text-[10px] text-gray-400 font-sans tracking-tight">Especialistas en Litigio &amp; Gestión Procesal</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" id="desktop_nav">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="font-sans text-sm font-medium text-gray-300 hover:text-gold-acento transition-colors duration-200 relative py-1 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-acento transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contacto');
                }}
                className="bg-gold-acento/15 hover:bg-gold-acento text-gold-acento hover:text-bg-principal border border-gold-acento/50 px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all duration-300"
              >
                Consulta Express
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-gold-acento focus:outline-none p-2"
                aria-label="Toggle menu"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-bg-secundario border-b border-gold-acento/50 shadow-2xl md:hidden backdrop-blur-md"
            id="mobile-menu-drawer"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block px-4 py-3 rounded-md text-base font-semibold text-gray-200 hover:bg-white/5 hover:text-gold-acento transition-all duration-200 border-l-2 border-transparent hover:border-gold-acento"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/5 px-4">
                <a
                  href="https://wa.me/584249124547"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-verde-whatsapp text-white py-3 px-4 rounded-md text-center font-bold text-sm shadow-md transition-all duration-300 hover:brightness-110"
                >
                  <PhoneCall size={16} />
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
