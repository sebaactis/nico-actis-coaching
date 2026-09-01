import React from 'react';
import { ArrowRight, Zap, Star, ChevronDown, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COACH_INFO } from '../data/coachingData';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#070708] bg-hero-pattern">
      {/* Background Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute -top-32 right-0 w-[450px] h-[450px] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      {/* Subtle athletic diagonal background accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16161D] border border-brand-yellow/30 text-brand-yellow shadow-neon-sm animate-pulse">
              <Zap className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
              <span className="text-xs font-black uppercase tracking-widest">
                Coaching Ontológico & Deportivo
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl leading-[1.05] tracking-tight uppercase text-white">
              POTENCIÁ TU MENTE.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-yellowHover to-white text-glow">
                ELEVÁ TU RENDIMIENTO.
              </span>
            </h1>

            {/* Subtitle & Mission Premise */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed">
              Acompañamiento integral para deportistas profesionales y de alto rendimiento. Fortalecé tus recursos mentales y emocionales para competir al máximo nivel.
            </p>

            {/* Core Philosophy Punchline */}
            <div className="w-full max-w-2xl p-4 sm:p-5 rounded-2xl bg-[#111115] border-l-4 border-brand-yellow border-t border-r border-b border-brand-border">
              <p className="text-sm sm:text-base font-semibold text-zinc-200 italic">
                “Porque antes que deportistas, somos personas. El deportista puede ser quien compite, pero la persona es quien vive todo el proceso.”
              </p>
              <span className="block mt-2 text-xs font-extrabold text-brand-yellow uppercase tracking-wider">
                — Nico Actis | Coach Profesional ICF & AACOP
              </span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs font-semibold text-zinc-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14141A] border border-zinc-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow" />
                Certificado ICF
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14141A] border border-zinc-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow" />
                Avalado AACOP
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14141A] border border-zinc-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow" />
                Barça Innovation Hub
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14141A] border border-zinc-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow" />
                Neurociencia Aplicada (CIEMEC)
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-yellow text-black font-display font-black text-sm uppercase tracking-wider hover:bg-brand-yellowHover shadow-neon hover:shadow-neon-strong transform hover:-translate-y-1 transition-all duration-200 group"
              >
                <span>Agendar Primera Sesión</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#testimonios"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#141418] text-white font-bold text-sm uppercase tracking-wider border border-zinc-700 hover:border-brand-yellow/60 hover:text-brand-yellow transition-all"
              >
                <span>Ver Testimonios ({COACH_INFO.stats[3].value})</span>
              </a>
            </div>

          </div>

          {/* Right Visual Athlete Card (Featuring Tomas Cuello Main) */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Background Box */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-1 bg-gradient-to-b from-brand-yellow/40 via-zinc-800/40 to-transparent shadow-2xl">
              <div className="relative rounded-[22px] overflow-hidden bg-[#0F0F14] border border-zinc-800">
                
                {/* Main Entry Image */}
                <div className="relative h-[440px] sm:h-[500px] overflow-hidden">
                  <img
                    src="/images/Tomas_cuello_main.jpeg"
                    alt="Tomás Cuello - Atlético Mineiro"
                    className="w-full h-full object-cover object-top scale-105 hover:scale-100 transition-transform duration-700 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F14] via-[#0F0F14]/40 to-transparent" />
                  
                  {/* Floating VIP Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-brand-yellow/60 text-brand-yellow text-xs font-black uppercase tracking-wider shadow-lg">
                    <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                    <span>Deportistas de Élite</span>
                  </div>

                  {/* Player Caption */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-zinc-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-black text-white uppercase tracking-wide">
                          Tomás Cuello
                        </h4>
                        <p className="text-xs font-semibold text-brand-yellow">
                          Atlético Mineiro • Brasil
                        </p>
                      </div>
                      <span className="text-[10px] uppercase font-bold px-2 py-1 bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow rounded">
                        Fútbol Pro
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-zinc-300 italic line-clamp-2">
                      “El acompañamiento mental y emocional con Nico es clave para sostener el alto nivel en la competencia profesional.”
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Metric Card 1 */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 p-4 rounded-2xl bg-[#13131A]/95 backdrop-blur-md border border-brand-yellow/40 shadow-neon-sm">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                <ShieldCheck className="w-7 h-7 text-brand-yellow" />
              </div>
              <div>
                <span className="block text-2xl font-black text-white font-display">
                  +10
                </span>
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                  Certificaciones Internacionales
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-20 pt-10 border-t border-brand-border grid grid-cols-2 md:grid-cols-4 gap-6">
          {COACH_INFO.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start p-4 rounded-xl bg-[#101014] border border-zinc-800/80 hover:border-brand-yellow/40 transition-colors">
              <span className="text-3xl sm:text-4xl font-display font-black text-brand-yellow text-glow-sm">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-white uppercase tracking-wide mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-zinc-400 mt-0.5 text-center sm:text-left">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Down indicator */}
      <div className="flex justify-center mt-12">
        <a
          href="#sobre-mi"
          className="p-2.5 rounded-full bg-[#121216] border border-zinc-800 text-zinc-400 hover:text-brand-yellow hover:border-brand-yellow/50 transition-all animate-bounce"
          aria-label="Ir a sección Sobre Mí"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
