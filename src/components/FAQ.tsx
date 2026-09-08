import type React from "react";
import { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageCircle,
} from "lucide-react";
import { FAQ_DATA, whatsappLink } from "../data/coachingData";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#09090C] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16161D] border border-brand-yellow/30 text-brand-yellow text-xs font-black uppercase tracking-widest mb-4">
            <HelpCircle className="w-4 h-4 text-brand-yellow" />
            <span>Resolvé tus Dudas</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Preguntas <span className="text-brand-yellow">Frecuentes</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Todo lo que necesitás saber sobre cómo funciona el coaching
            ontológico y deportivo.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#121217] border-brand-yellow/50 shadow-neon-sm"
                    : "bg-[#101014] border-zinc-800/80 hover:border-zinc-700"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen
                        ? "bg-brand-yellow text-black rotate-180"
                        : "bg-[#181822] text-zinc-400 border border-zinc-700"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-7 pt-1 border-t border-zinc-800/60">
                    <div className="text-zinc-300 text-sm sm:text-base leading-relaxed space-y-3 whitespace-pre-line font-normal">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Help Box */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#121218] via-[#171722] to-[#121218] border border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-black text-white uppercase font-display">
              ¿Tenés alguna consulta puntual?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Escribime directamente por WhatsApp para coordinar una charla
              previa sin compromiso.
            </p>
          </div>

          <a
            href={whatsappLink(
              "Hola Nico, tengo una duda sobre las sesiones de coaching.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-yellow text-black font-extrabold text-xs uppercase tracking-wider hover:bg-brand-yellowHover shadow-neon-sm transition-all flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
