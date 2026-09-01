import React from 'react';
import { Target, Flame, Users, Activity, Check, Globe, Calendar, ArrowRight } from 'lucide-react';
import { METHODOLOGY_DATA, COACH_INFO } from '../data/coachingData';

export const Methodology: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Target: <Target className="w-7 h-7 text-brand-yellow" />,
    Flame: <Flame className="w-7 h-7 text-brand-yellow" />,
    Users: <Users className="w-7 h-7 text-brand-yellow" />,
    Activity: <Activity className="w-7 h-7 text-brand-yellow" />,
  };

  return (
    <section id="metodologia" className="py-24 bg-[#070708] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16161D] border border-brand-yellow/30 text-brand-yellow text-xs font-black uppercase tracking-widest mb-4">
            <Activity className="w-4 h-4 text-brand-yellow" />
            <span>Proceso Paso a Paso</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Metodología de <span className="text-brand-yellow">Trabajo</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Un plan estructurado, integral y personalizado para transformar el mundo mental y emocional del atleta y transferirlo a su máximo nivel en la competencia.
          </p>
        </div>

        {/* Highlight Banner: Online & Presencial */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#121218] via-[#161622] to-[#121218] border border-brand-yellow/30 shadow-neon-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow flex-shrink-0">
                <Globe className="w-6 h-6 text-brand-yellow" />
              </div>
              <div>
                <h4 className="text-white font-black text-base uppercase">Online o Presencial</h4>
                <p className="text-xs text-zinc-400">Sesiones 1 a 1 para deportistas en cualquier parte del mundo.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow flex-shrink-0">
                <Calendar className="w-6 h-6 text-brand-yellow" />
              </div>
              <div>
                <h4 className="text-white font-black text-base uppercase">Objetivos Planificados</h4>
                <p className="text-xs text-zinc-400">Metas anuales, de temporada y semanales claras.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow flex-shrink-0">
                <Activity className="w-6 h-6 text-brand-yellow" />
              </div>
              <div>
                <h4 className="text-white font-black text-base uppercase">Tareas y Ejercicios</h4>
                <p className="text-xs text-zinc-400">Herramientas prácticas durante la semana.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {METHODOLOGY_DATA.map((step) => (
            <div
              key={step.number}
              className="relative p-8 rounded-3xl bg-[#111116] border border-zinc-800/90 hover:border-brand-yellow/50 transition-all duration-300 shadow-card-glow group flex flex-col justify-between"
            >
              {/* Step Number Watermark */}
              <div className="absolute top-6 right-8 font-display font-black text-6xl text-white/5 group-hover:text-brand-yellow/10 transition-colors pointer-events-none">
                {step.number}
              </div>

              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#181822] border border-zinc-700 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-black group-hover:shadow-neon-sm transition-all">
                    {iconMap[step.iconName] || <Target className="w-7 h-7 text-brand-yellow" />}
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-yellow uppercase tracking-widest">
                      Paso {step.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white tracking-wide">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  {step.subtitle}
                </p>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2.5 pt-4 border-t border-zinc-800/80">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-medium">
                      <div className="w-4 h-4 rounded-full bg-brand-yellow/15 text-brand-yellow flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 flex items-center text-xs font-extrabold text-brand-yellow uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                <span>Enfocado en el crecimiento integral</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-16 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-brand-yellow text-black font-display font-black text-sm uppercase tracking-wider hover:bg-brand-yellowHover shadow-neon hover:shadow-neon-strong transition-all transform hover:-translate-y-0.5"
          >
            <span>Iniciar mi Plan de Acompañamiento</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
