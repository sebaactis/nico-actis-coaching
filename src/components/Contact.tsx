import type React from "react";
import { useState } from "react";
import {
  Send,
  MessageCircle,
  Mail,
  MapPin,
  Instagram,
  CheckCircle2,
} from "lucide-react";
import { COACH_INFO, whatsappLink, emailLink } from "../data/coachingData";
import { SoccerCleatIcon } from "./SoccerCleatIcon";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    deporte: "",
    nivel: "Profesional / Alto Rendimiento",
    telefono: "",
    modalidad: "Online",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message for WhatsApp (sin emojis: se rompen en algunos clientes)
    const messageText = `Hola Nico! Mi nombre es ${formData.nombre}.
- Deporte / Disciplina: ${formData.deporte}
- Nivel: ${formData.nivel}
- Modalidad de preferencia: ${formData.modalidad}
- Teléfono / WhatsApp: ${formData.telefono}
- Mensaje / Desafío actual: ${formData.mensaje}`;

    const whatsappUrl = whatsappLink(messageText);
    if (!whatsappUrl.startsWith("https://wa.me/")) return;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="contacto"
      className="py-24 bg-[#070708] relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16161D] border border-brand-yellow/30 text-brand-yellow text-xs font-black uppercase tracking-widest mb-4">
            <MessageCircle className="w-4 h-4 text-brand-yellow" />
            <span>Contacto & Agendamiento</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Comenzá tu <span className="text-brand-yellow">Transformación</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Completá el formulario o comunicate directamente por WhatsApp para
            coordinar tu primera sesión de diagnóstico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Contact Info & Direct Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#111116] border border-brand-border shadow-card-glow space-y-6">
              <h3 className="text-2xl font-display font-black uppercase text-white tracking-wide">
                Hablemos de tus Objetivos
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Cada proceso es 100% individualizado. Respetamos tu calendario
                de entrenamientos, tu momento deportivo y tus metas a corto y
                largo plazo.
              </p>

              {/* Channels List */}
              <div className="space-y-4 pt-4 border-t border-zinc-800">
                {/* Primera Charla Gratuita (Google Calendar) */}
                <a
                  href={COACH_INFO.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#171720] border border-zinc-800 hover:border-brand-yellow/50 hover:bg-[#1A1A24] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-all">
                    <SoccerCleatIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-zinc-400 uppercase">
                      Primera Charla Gratuita
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-white group-hover:text-brand-yellow transition-colors">
                      Agendar horario
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappLink(
                    "Hola Nico, quiero coordinar una sesión de coaching.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#171720] border border-zinc-800 hover:border-brand-yellow/50 hover:bg-[#1A1A24] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-all">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-zinc-400 uppercase">
                      WhatsApp Directo
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-white group-hover:text-brand-yellow transition-colors">
                      Tocar para abrir el chat
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={COACH_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#171720] border border-zinc-800 hover:border-brand-yellow/50 hover:bg-[#1A1A24] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-all">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-zinc-400 uppercase">
                      Instagram Oficial
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-white group-hover:text-brand-yellow transition-colors">
                      @{COACH_INFO.instagram}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={emailLink()}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#171720] border border-zinc-800 hover:border-brand-yellow/50 hover:bg-[#1A1A24] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-zinc-400 uppercase">
                      Email de Contacto
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-white group-hover:text-brand-yellow transition-colors">
                      Tocar para escribirme
                    </span>
                  </div>
                </a>

                {/* Location / Modality */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#171720] border border-zinc-800">
                  <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-zinc-400 uppercase">
                      Modalidad
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-white">
                      {COACH_INFO.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111116] border border-brand-border shadow-card-glow">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-8 bg-brand-yellow rounded-full" />
                <h3 className="text-2xl font-display font-black uppercase text-white tracking-wide">
                  Formulario de Agendamiento
                </h3>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-brand-yellow/15 border border-brand-yellow/40 text-brand-yellow flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                  <p className="text-xs sm:text-sm font-bold">
                    ¡Gracias! Se ha abierto WhatsApp con tu mensaje listo para
                    enviar.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nombre y Apellido */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    placeholder="Ej: Lucas Martínez"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#171720] border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-sm"
                  />
                </div>

                {/* Deporte y Nivel */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      Deporte / Disciplina *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.deporte}
                      onChange={(e) =>
                        setFormData({ ...formData, deporte: e.target.value })
                      }
                      placeholder="Ej: Fútbol, Tenis, Básquet..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#171720] border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      Nivel Competitivo
                    </label>
                    <select
                      value={formData.nivel}
                      onChange={(e) =>
                        setFormData({ ...formData, nivel: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-[#171720] border border-zinc-800 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-sm"
                    >
                      <option value="Profesional / Primera División">
                        Profesional / Primera División
                      </option>
                      <option value="Alto Rendimiento / Liga Nacional">
                        Alto Rendimiento / Liga Nacional
                      </option>
                      <option value="Formativo / Juvenil con Proyección">
                        Formativo / Juvenil con Proyección
                      </option>
                      <option value="Amateur Avanzado / Competitivo">
                        Amateur Avanzado / Competitivo
                      </option>
                    </select>
                  </div>
                </div>

                {/* Teléfono y Modalidad */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      WhatsApp / Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) =>
                        setFormData({ ...formData, telefono: e.target.value })
                      }
                      placeholder="Ej: +54 9 11 1234 5678"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#171720] border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      Modalidad de Preferencia
                    </label>
                    <select
                      value={formData.modalidad}
                      onChange={(e) =>
                        setFormData({ ...formData, modalidad: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-[#171720] border border-zinc-800 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-sm"
                    >
                      <option value="Online (Videollamada)">
                        Online (Videollamada)
                      </option>
                      <option value="Presencial">Presencial</option>
                      <option value="Indistinto">Indistinto</option>
                    </select>
                  </div>
                </div>

                {/* Mensaje o Desafío */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    ¿Cuál es tu principal desafío u objetivo actual?
                  </label>
                  <textarea
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) =>
                      setFormData({ ...formData, mensaje: e.target.value })
                    }
                    placeholder="Contame brevemente qué te gustaría trabajar (presión, concentración, frustración, confianza, etc.)"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#171720] border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-sm resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-yellow text-black font-display font-black text-sm uppercase tracking-wider hover:bg-brand-yellowHover shadow-neon hover:shadow-neon-strong transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Enviar y Agendar por WhatsApp</span>
                </button>

                <p className="text-center text-[11px] text-zinc-500">
                  Tus datos son 100% confidenciales bajo el código de ética
                  profesional ICF.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
