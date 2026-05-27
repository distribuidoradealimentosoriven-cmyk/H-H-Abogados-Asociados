import React, { useState, useEffect, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MessageSquare, CheckCircle, MapPin, User, Mail, FileText, Phone, Sparkles } from 'lucide-react';

interface ContactFormProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function ContactForm({
  selectedCategory,
  setSelectedCategory,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    ubicacion: 'Exterior',
    caso: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'submitting'>('idle');
  const [submittedChannel, setSubmittedChannel] = useState<'whatsapp' | 'email' | null>(null);

  // Keep state sync with props
  const handleCategoryChange = (val: string) => {
    setSelectedCategory(val);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Compile formatted legal message
  const composeLegalMessage = () => {
    const divider = '==============================';
    return `*SOLEMNES CONSULTAS - H&H ABOGADOS*
${divider}
*Delineación para:* Dra. Vanessa Hamilton
*Cliente:* ${formData.nombre || 'No proporcionado'}
*Correo:* ${formData.correo || 'No proporcionado'}
*Teléfono:* ${formData.telefono || 'No proporcionado'}
*Origen:* ${formData.ubicacion}
*Ramo Legal:* ${selectedCategory || 'General'}
${divider}
*Síntesis del Problema:* 
${formData.caso || 'No provisto'}
${divider}
_Solicitud tramitada digitalmente_`;
  };

  const executeSendWhatsApp = () => {
    setFormStatus('submitting');
    setTimeout(() => {
      const text = encodeURIComponent(composeLegalMessage());
      const url = `https://wa.me/584249124547?text=${text}`;
      window.open(url, '_blank', 'noreferrer,noopener');
      setFormStatus('success');
      setSubmittedChannel('whatsapp');
    }, 600);
  };

  const executeSendEmail = () => {
    setFormStatus('submitting');
    setTimeout(() => {
      const subject = encodeURIComponent(`Consulta Legal H&H: [${selectedCategory}] - ${formData.nombre}`);
      const body = encodeURIComponent(composeLegalMessage());
      const url = `mailto:vanessahamilton8686@gmail.com?subject=${subject}&body=${body}`;
      window.open(url, '_self');
      setFormStatus('success');
      setSubmittedChannel('email');
    }, 600);
  };

  const resetFormStatus = () => {
    setFormStatus('idle');
    setSubmittedChannel(null);
  };

  return (
    <section id="contacto" className="py-24 bg-bg-principal border-b border-borde-sutil relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white tracking-tight uppercase relative inline-block pb-4">
            Iniciar Consulta Legal
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gold-acento" />
          </h2>
          <p className="mt-4 font-sans text-gray-400 text-sm sm:text-base font-light">
            Escriba los pormenores de su caso. Nuestro equipo procesal analizará su viabilidad, emitiendo un diagnóstico estratégico formal.
          </p>
        </div>

        {/* Action Panel and Form Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Form Segment (col-span-7) */}
          <div className="lg:col-span-7 bg-bg-secundario border border-borde-sutil rounded-lg p-6 sm:p-8 shadow-xl relative">
            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-12 flex flex-col items-center justify-center h-full"
                  id="form-success-state"
                >
                  <div className="w-16 h-16 bg-gold-acento/10 rounded-full flex items-center justify-center text-gold-acento mb-6 border border-gold-acento/30">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    ¡Solicitud de Caso Canalizada!
                  </h3>
                  <p className="text-sm text-gray-400 max-w-md mx-auto mb-8 font-sans">
                    Su consulta ha sido redactada de manera formal. Si eligió WhatsApp, se abrió una pestaña para enviar el mensaje inmediato a nuestra línea. Si fue por correo, la plantilla ya se encuentra configurada en su gestor de correo predeterminado.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={resetFormStatus}
                      className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded text-xs uppercase tracking-wider transition-colors border border-white/10"
                    >
                      Editar o Enviar otra Consulta
                    </button>
                    {submittedChannel === 'whatsapp' ? (
                      <button
                        onClick={executeSendEmail}
                        className="px-6 py-2.5 bg-gold-acento text-bg-principal font-bold rounded text-xs uppercase tracking-wider hover:bg-gold-hover transition-all shadow"
                      >
                        Enviar también copia por Correo
                      </button>
                    ) : (
                      <button
                        onClick={executeSendWhatsApp}
                        className="px-6 py-2.5 bg-verde-whatsapp text-white font-bold rounded text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow"
                      >
                        Enviar también por WhatsApp
                      </button>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  id="form-input-state"
                >
                  <span className="text-xs font-bold text-gold-acento uppercase tracking-wider block mb-6">
                    Formulario Oficial de Diagnóstico
                  </span>

                  <div className="space-y-6">
                    {/* Grid of Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name */}
                      <div className="relative group">
                        <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <User size={12} className="text-gold-acento" /> Nombre Completo
                        </label>
                        <input
                          type="text"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          required
                          placeholder="Ej. Juan Pérez"
                          className="w-full bg-bg-principal border border-borde-sutil rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-acento transition-colors placeholder:text-gray-600"
                        />
                      </div>

                      {/* Email */}
                      <div className="relative group">
                        <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Mail size={12} className="text-gold-acento" /> Correo Electrónico
                        </label>
                        <input
                          type="email"
                          name="correo"
                          value={formData.correo}
                          onChange={handleInputChange}
                          required
                          placeholder="ejemplo@correo.com"
                          className="w-full bg-bg-principal border border-borde-sutil rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-acento transition-colors placeholder:text-gray-600"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Phone */}
                      <div className="relative group">
                        <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Phone size={12} className="text-gold-acento" /> Teléfono de Contacto
                        </label>
                        <input
                          type="tel"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          placeholder="Ej. +58 412-1234567"
                          className="w-full bg-bg-principal border border-borde-sutil rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-acento transition-colors placeholder:text-gray-600"
                        />
                      </div>

                      {/* Client Location */}
                      <div className="relative group">
                        <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <MapPin size={12} className="text-gold-acento" /> Ubicación del Solicitante
                        </label>
                        <select
                          name="ubicacion"
                          value={formData.ubicacion}
                          onChange={handleInputChange}
                          className="w-full bg-bg-principal border border-borde-sutil rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-acento transition-colors"
                        >
                          <option value="Puerto Ordaz (Guayana)">En Puerto Ordaz / Estado Bolívar</option>
                          <option value="Otra Ciudad (Venezuela)">En otra región de Venezuela</option>
                          <option value="Exterior (EE.UU. / Norteamérica)">En el Exterior (Norteamérica)</option>
                          <option value="Exterior (España / Europa)">En el Exterior (España / Europa)</option>
                          <option value="Exterior (Suramérica / Chile / Perú / Colombia)">En el Exterior (Suramérica)</option>
                        </select>
                      </div>

                    </div>

                    {/* Specialty dropdown selector */}
                    <div className="relative group">
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <FileText size={12} className="text-gold-acento" /> Ramo de Consulta Principal
                      </label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="w-full bg-bg-principal border border-borde-sutil rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-acento transition-colors"
                      >
                        <option value="Civil">Derecho Civil y Patrimonial (Inmuebles, desalojos, opciones de compra)</option>
                        <option value="Mercantil">Derecho Mercantil (Cobro de pagarés, insolvencias, asambleas de socios)</option>
                        <option value="Procesal">Derecho Procesal y Litigio Complejo (Juicios, apelaciones, amparos)</option>
                        <option value="Familia">Familia y Sucesiones (Herencias, permisos LOPNNA, divorcios remotos)</option>
                        <option value="General">Inquietud / Otra consulta específica</option>
                      </select>
                    </div>

                    {/* Case Description */}
                    <div className="relative group">
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                        Hechos Relatados del Caso
                      </label>
                      <textarea
                        name="caso"
                        value={formData.caso}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Describa de manera pormenorizada los hechos, fechas importantes, documentos disponibles y el objetivo jurídico que desea alcanzar..."
                        className="w-full bg-bg-principal border border-borde-sutil rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-acento transition-colors placeholder:text-gray-600 resize-none"
                      />
                    </div>

                    {/* Dispatch Button Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      <button
                        type="button"
                        onClick={executeSendWhatsApp}
                        disabled={formStatus === 'submitting' || !formData.nombre || !formData.caso}
                        className="w-full bg-verde-whatsapp hover:brightness-110 disabled:brightness-50 text-white font-bold py-4 rounded text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-verde-whatsapp/15 disabled:cursor-not-allowed"
                        id="submit_whatsapp"
                      >
                        <MessageSquare size={16} fill="currentColor" />
                        Canalizar por WhatsApp
                      </button>

                      <button
                        type="button"
                        onClick={executeSendEmail}
                        disabled={formStatus === 'submitting' || !formData.nombre || !formData.caso}
                        className="w-full bg-gold-acento hover:bg-gold-hover disabled:bg-gold-acento/40 text-bg-principal font-bold py-4 rounded text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-gold-acento/10 disabled:cursor-not-allowed"
                        id="submit_email"
                      >
                        <Send size={15} />
                        Enviar por Correo
                      </button>
                    </div>

                    <div className="text-center pt-2">
                      <span className="text-[10px] text-gray-500 font-sans italic">
                        *Al presionar cualquiera de los dos canales de envío, sus datos se ordenarán en un informe formal antes de despacharse.*
                      </span>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Visual Intake Slip Preview (col-span-5) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-bg-secundario to-bg-principal border border-borde-sutil rounded-lg p-6 flex flex-col justify-between relative shadow-2xl overflow-hidden self-start lg:sticky lg:top-24">
            {/* Watermark brand logo */}
            <div className="absolute right-2 top-2 opacity-5 font-serif text-[120px] select-none pointer-events-none">
              H
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="text-xs font-bold text-gold-acento uppercase tracking-widest flex items-center gap-1">
                  <Sparkles size={12} className="animate-spin-slow" /> Hoja de Entrada Legal
                </span>
                <span className="text-[9px] text-gray-500 font-mono">ID: HU-{(formData.nombre ? formData.nombre.slice(0,3).toUpperCase() : 'NEW')}-2026</span>
              </div>

              {/* Dynamic intake preview visual */}
              <div className="space-y-4 font-serif text-sm text-gray-300 antialiased pt-2">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-sans text-[11px] font-bold text-gray-500 uppercase">SOLICITANTE</span>
                  <span className="text-right text-white max-w-[200px] truncate">{formData.nombre || 'Completa tu nombre...'}</span>
                </div>

                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-sans text-[11px] font-bold text-gray-500 uppercase">CORREO</span>
                  <span className="text-right text-white max-w-[200px] truncate">{formData.correo || 'Completa tu correo...'}</span>
                </div>

                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-sans text-[11px] font-bold text-gray-500 uppercase">TELÉFONO</span>
                  <span className="text-right text-white">{formData.telefono || 'Por determinar'}</span>
                </div>

                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-sans text-[11px] font-bold text-gray-500 uppercase">PROCEDENCIA</span>
                  <span className="text-right text-gold-acento font-sans text-xs font-semibold">{formData.ubicacion}</span>
                </div>

                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-sans text-[11px] font-bold text-gray-500 uppercase">ÁREA LEGAL</span>
                  <span className="text-right text-white font-sans text-xs font-semibold">{selectedCategory}</span>
                </div>

                {/* Case description snippet */}
                <div className="space-y-1.5 mt-2">
                  <span className="font-sans text-[11px] font-bold text-gray-500 uppercase block">RELATO DE HECHOS</span>
                  <div className="p-3 bg-bg-principal rounded text-xs text-gray-400 font-light border border-white/5 leading-relaxed min-h-[110px]">
                    {formData.caso ? (
                      <p className="line-clamp-6 whitespace-pre-line">{formData.caso}</p>
                    ) : (
                      <p className="italic text-gray-600">Redacte el resumen de su caso en el campo de entrada a la izquierda. Su síntesis cargará automáticamente en este informe...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <div className="flex h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className="bg-gold-acento transition-all duration-300"
                  style={{
                    width: `${
                      ((formData.nombre ? 20 : 0) +
                        (formData.correo ? 20 : 0) +
                        (formData.telefono ? 20 : 0) +
                        (formData.caso ? 40 : 0))
                    }%`,
                  }}
                />
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-[10px] text-gray-500">Completitud del Expediente</span>
                <span className="text-[10px] font-semibold text-gold-acento">
                  {((formData.nombre ? 20 : 0) +
                    (formData.correo ? 20 : 0) +
                    (formData.telefono ? 20 : 0) +
                    (formData.caso ? 40 : 0))}
                  %
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
