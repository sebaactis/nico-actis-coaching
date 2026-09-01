import React from 'react';
import { Brain, Compass, ShieldCheck, Trophy, Sparkles, CheckCircle2, HeartHandshake } from 'lucide-react';
import { ABOUT_DATA } from '../data/coachingData';

export const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-[#09090C] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16161D] border border-brand-yellow/30 text-brand-yellow text-xs font-black uppercase tracking-widest mb-4">
            <HeartHandshake className="w-4 h-4 text-brand-yellow" />
            <span>¿Quién Soy?</span>
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Soy <span className="text-brand-yellow">{ABOUT_DATA.intro.replace('Soy ', '')}</span>
          </h2>
          
          <p className="mt-3 text-lg font-bold text-zinc-300 uppercase tracking-wide">
            {ABOUT_DATA.role}
          </p>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111116] border border-brand-border shadow-card-glow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-8 bg-brand-yellow rounded-full" />
                <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-white tracking-wide">
                  {ABOUT_DATA.missionTitle}
                </h3>
              </div>

              <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
                <p className="font-bold text-white text-lg sm:text-xl border-b border-zinc-800 pb-4">
                  {ABOUT_DATA.missionSummary}
                </p>

                {ABOUT_DATA.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Big Quote Banner */}
              <div className="mt-8 p-6 rounded-2xl bg-[#171720] border-l-4 border-brand-yellow border border-zinc-800/80">
                <p className="text-base sm:text-lg font-extrabold text-brand-yellow tracking-wide italic">
                  “{ABOUT_DATA.highlightQuote}”
                </p>
              </div>
            </div>
          </div>

          {/* Right 4 Pillars Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-black text-brand-yellow uppercase tracking-widest mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-yellow" />
              Pilares de mi Acompañamiento
            </h4>

            {ABOUT_DATA.pillars.map((pillar, index) => {
              const icons = [Brain, Compass, ShieldCheck, Trophy];
              const IconComp = icons[index % icons.length];

              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#111115] border border-zinc-800/90 hover:border-brand-yellow/50 transition-all duration-300 hover:shadow-neon-sm group flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#191922] border border-zinc-700 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-all flex-shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-base font-extrabold text-white uppercase tracking-wide group-hover:text-brand-yellow transition-colors">
                      {pillar.title}
                    </h5>
                    <p className="mt-1 text-xs sm:text-sm text-zinc-400 leading-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Quick Action */}
            <div className="pt-4">
              <a
                href="#metodologia"
                className="w-full py-3.5 px-6 rounded-xl bg-[#181822] border border-zinc-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all"
              >
                <span>Conocer la Metodología de Trabajo</span>
                <CheckCircle2 className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
