import React, { useState } from 'react';
import { Award, CheckCircle, GraduationCap, Brain, Shield, Sparkles, BookOpen } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/coachingData';

export const Certifications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas (+10)' },
    { id: 'icf_aacop', label: 'ICF & AACOP' },
    { id: 'barca', label: 'Barça Innovation Hub' },
    { id: 'neuroscience', label: 'Neurociencia (CIEMEC)' },
    { id: 'cognitive', label: 'Terapia Cognitivo-Conductual' },
  ];

  const filteredCerts = activeCategory === 'all'
    ? CERTIFICATIONS_DATA
    : CERTIFICATIONS_DATA.filter((c) => c.category === activeCategory);

  return (
    <section id="certificaciones" className="py-24 bg-[#09090C] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16161D] border border-brand-yellow/30 text-brand-yellow text-xs font-black uppercase tracking-widest mb-4">
            <Award className="w-4 h-4 text-brand-yellow" />
            <span>Formación y Respaldo Profesional</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Certificaciones y <span className="text-brand-yellow">Especializaciones</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Formación continua en las instituciones más prestigiosas del coaching, neurociencia deportiva y psicología del alto rendimiento internacional.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-brand-yellow text-black shadow-neon-sm scale-105'
                  : 'bg-[#14141A] text-zinc-400 border border-zinc-800 hover:border-brand-yellow/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-3xl bg-[#111116] border border-zinc-800/90 hover:border-brand-yellow/50 transition-all duration-300 hover:shadow-card-glow flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow">
                    {cert.badgeLabel || 'Certificación'}
                  </span>
                  {cert.year && (
                    <span className="text-xs font-semibold text-zinc-400">
                      {cert.year}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black font-display uppercase text-white group-hover:text-brand-yellow transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-bold text-zinc-300 uppercase tracking-wide mb-4">
                  <GraduationCap className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  <span>{cert.institution}</span>
                </div>

                {cert.description && (
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/70 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 text-zinc-300 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-yellow" />
                  Verificado & Avalado
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Key Endorsement Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#121218] border border-zinc-800 text-center">
          <div className="flex flex-wrap items-center justify-around gap-6 sm:gap-10 text-xs sm:text-sm font-black uppercase tracking-widest text-zinc-400">
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" /> ICF (International Coach Federation)
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" /> AACOP Avalado
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" /> Barça Innovation Hub
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" /> CIEMEC Neurociencia
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" /> ITCC TCC
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
