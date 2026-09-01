import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COACH_INFO } from '../data/coachingData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {showTooltip && (
        <div className="relative p-3.5 bg-[#121217] border border-brand-yellow/50 rounded-2xl shadow-2xl max-w-xs text-xs text-zinc-200 hidden sm:block animate-fadeIn">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-[#20202A] text-zinc-400 hover:text-white rounded-full flex items-center justify-center border border-zinc-700 text-[10px]"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
            <span className="font-bold text-brand-yellow uppercase tracking-wider text-[11px]">Nico Actis</span>
          </div>
          <p>¡Hola! ¿Querés potenciar tu mentalidad y rendimiento? Escribime directamente.</p>
        </div>
      )}

      <a
        href={`https://wa.me/${COACH_INFO.whatsappNumber}?text=${encodeURIComponent('Hola Nico, quiero consultar por las sesiones de coaching deportivo.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-yellow text-black flex items-center justify-center shadow-neon hover:shadow-neon-strong hover:scale-110 active:scale-95 transition-all duration-200 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-black" />
      </a>
    </div>
  );
};
