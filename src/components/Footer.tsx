import type React from "react";
import { Instagram, Mail, MessageCircle, ChevronUp } from "lucide-react";
import { COACH_INFO, whatsappLink, emailLink } from "../data/coachingData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050507] border-t border-brand-border py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#141418] border border-brand-yellow/40 flex items-center justify-center font-display font-black text-brand-yellow text-lg">
                NA
              </div>
              <div>
                <h4 className="font-display font-black text-lg uppercase tracking-wider text-white">
                  Nico Actis
                </h4>
                <p className="text-xs font-semibold text-brand-yellow uppercase tracking-widest">
                  Coaching Deportivo & Ontológico
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Acompañamiento integral para deportistas profesionales y de alto
              rendimiento. Desarrollá recursos mentales y emocionales para
              alcanzar tu máximo nivel.
            </p>

            <p className="text-xs font-bold text-zinc-300 italic border-l-2 border-brand-yellow pl-3">
              “{COACH_INFO.motto}”
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-black text-brand-yellow uppercase tracking-widest">
              Navegación
            </h5>
            <ul className="space-y-2 text-xs font-semibold text-zinc-400">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#sobre-mi"
                  className="hover:text-brand-yellow transition-colors"
                >
                  ¿Quién Soy y Misión?
                </a>
              </li>
              <li>
                <a
                  href="#metodologia"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Metodología de Trabajo
                </a>
              </li>
              <li>
                <a
                  href="#certificaciones"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Certificaciones
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-xs font-black text-brand-yellow uppercase tracking-widest">
              Contacto Directo
            </h5>
            <div className="space-y-2 text-xs text-zinc-400">
              <p>
                <strong className="text-zinc-200">Modalidad:</strong>{" "}
                {COACH_INFO.location}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COACH_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#14141A] border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-brand-yellow hover:border-brand-yellow transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#14141A] border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-brand-yellow hover:border-brand-yellow transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href={emailLink()}
                className="w-10 h-10 rounded-xl bg-[#14141A] border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-brand-yellow hover:border-brand-yellow transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Nico Actis Coaching. Todos los derechos
            reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-brand-yellow transition-colors font-bold uppercase tracking-wider"
          >
            <span>Volver arriba</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
