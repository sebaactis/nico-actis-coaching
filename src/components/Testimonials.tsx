import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Quote, ChevronLeft, ChevronRight, CheckCircle2, Star, Pause, Play, Users, MessageCircle } from 'lucide-react';
import { TESTIMONIALS_DATA, COACH_INFO } from '../data/coachingData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const total = TESTIMONIALS_DATA.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  // Scroll ONLY the horizontal container WITHOUT moving the window viewport
  useEffect(() => {
    if (thumbnailsRef.current) {
      const container = thumbnailsRef.current;
      const activeBtn = container.children[currentIndex] as HTMLElement;
      if (activeBtn) {
        const targetScrollLeft = activeBtn.offsetLeft - (container.clientWidth / 2) + (activeBtn.clientWidth / 2);
        container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
      }
    }
  }, [currentIndex]);

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonios" className="py-24 bg-[#070708] relative overflow-hidden">
      {/* Dynamic Glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16161D] border border-brand-yellow/30 text-brand-yellow text-xs font-black uppercase tracking-widest mb-4">
            <Trophy className="w-4 h-4 text-brand-yellow" />
            <span>Algunos de los deportistas que acompañamos</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Deportistas que <span className="text-brand-yellow">Confían en el Proceso</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Una selección de los atletas que entrenan su mente y potencian su rendimiento día a día.
          </p>
        </div>

        {/* Quick Player Selector Pills (Horizontal Scroll) */}
        <div className="mb-6">
          <div
            ref={thumbnailsRef}
            className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-zinc-800 no-scrollbar"
          >
            {TESTIMONIALS_DATA.map((player, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={player.id}
                  onClick={() => goToSlide(idx)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 border flex-shrink-0 ${
                    isActive
                      ? 'bg-brand-yellow text-black border-brand-yellow shadow-neon-sm scale-105'
                      : 'bg-[#121217] text-zinc-400 border-zinc-800 hover:border-brand-yellow/40 hover:text-white'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-black' : 'bg-brand-yellow'}`} />
                  <span>{player.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CAROUSEL MAIN CONTAINER WITH FIXED RIGID PROPORTIONS */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card Frame with Golden Glow Border */}
          <div className="rounded-3xl p-1 bg-gradient-to-r from-brand-yellow/50 via-zinc-800 to-brand-yellow/30 shadow-2xl transition-all duration-300">
            <div className="rounded-[22px] bg-[#0E0E13] border border-zinc-800 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[560px] lg:h-[580px]">
                
                {/* Photo Column - RIGID FIXED HEIGHT & PERFECT OBJECT-COVER (ZERO JUMP) */}
                <div className="lg:col-span-5 relative h-[380px] sm:h-[440px] lg:h-full w-full overflow-hidden bg-[#0A0A0E] flex items-center justify-center">
                  <img
                    key={currentTestimonial.id}
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-700 filter contrast-105 select-none"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E13] via-[#0E0E13]/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0E0E13]" />

                  {/* Sport & Elite Pill Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-brand-yellow/70 text-brand-yellow text-xs font-black uppercase tracking-wider shadow-lg">
                    <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                    <span>{currentTestimonial.sport}</span>
                  </div>

                  {/* Mobile caption */}
                  <div className="absolute bottom-4 left-4 right-4 lg:hidden p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-zinc-800">
                    <h4 className="text-base font-black text-white uppercase">{currentTestimonial.name}</h4>
                    <p className="text-xs font-bold text-brand-yellow">{currentTestimonial.teamOrRole}</p>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-4 lg:h-full overflow-hidden">
                  
                  {/* Top Bar inside Card */}
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded bg-brand-yellow text-black text-xs font-black uppercase tracking-wider">
                          {currentTestimonial.sport}
                        </span>
                        <span className="px-3 py-1 rounded bg-[#181822] text-brand-yellow border border-brand-yellow/30 text-xs font-bold uppercase tracking-wider">
                          {currentTestimonial.highlight}
                        </span>
                      </div>

                      {/* Slide Indicator */}
                      <span className="font-display font-black text-sm text-zinc-400 uppercase tracking-widest">
                        <span className="text-brand-yellow text-base">
                          {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}
                        </span> / {total < 10 ? `0${total}` : total}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black uppercase text-white tracking-wide">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-sm sm:text-base font-extrabold text-brand-yellow mt-1">
                      {currentTestimonial.teamOrRole}
                    </p>
                  </div>

                  {/* Quote Body with Min Height to Prevent Vertical Shifts */}
                  <div className="relative pl-6 sm:pl-8 border-l-4 border-brand-yellow py-2 my-auto min-h-[100px] flex items-center">
                    <Quote className="w-8 h-8 text-brand-yellow/20 absolute -top-4 -left-2 pointer-events-none" />
                    <p className="text-base sm:text-lg lg:text-xl text-zinc-200 font-medium italic leading-relaxed">
                      “{currentTestimonial.quote}”
                    </p>
                  </div>

                  {/* Stats & Key Outcomes */}
                  {currentTestimonial.stats && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-zinc-800/80">
                      {currentTestimonial.stats.map((s, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-[#14141B] border border-zinc-800/80">
                          <span className="block text-[10px] font-semibold text-zinc-400 uppercase">
                            {s.label}
                          </span>
                          <span className="text-xs sm:text-sm font-black text-white truncate block">
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bottom Strip: Navigation Arrows & Trust Badge */}
                  <div className="pt-3 flex items-center justify-between border-t border-zinc-800/60">
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-zinc-300 truncate mr-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                      Acompañamiento Integral en Alta Competencia
                    </span>

                    {/* Navigation Buttons inside card */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={prevSlide}
                        className="w-11 h-11 rounded-xl bg-[#181822] border border-zinc-700 text-zinc-300 hover:text-black hover:bg-brand-yellow hover:border-brand-yellow transition-all flex items-center justify-center shadow-md active:scale-95"
                        aria-label="Testimonio anterior"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="w-11 h-11 rounded-xl bg-[#181822] border border-zinc-700 text-zinc-300 hover:text-black hover:bg-brand-yellow hover:border-brand-yellow transition-all flex items-center justify-center shadow-md active:scale-95"
                        aria-label="Siguiente testimonio"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Bottom Indicators & Autoplay Control */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {TESTIMONIALS_DATA.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-brand-yellow shadow-neon-sm'
                      : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                  aria-label={`Ir a jugador ${t.name}`}
                  title={t.name}
                />
              ))}
            </div>

            {/* Auto-rotation notice / status */}
            <div className="flex items-center gap-3 text-xs text-zinc-400 font-semibold">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14141A] border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white transition-all"
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-brand-yellow" />
                    <span>Pausar Carrusel</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-brand-yellow" />
                    <span>Reproducir Carrusel</span>
                  </>
                )}
              </button>
              <span>{currentIndex + 1} de {total} deportistas</span>
            </div>

          </div>

        </div>

        {/* Bottom Banner: Simple Clarification & Invitation */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#121218] via-[#161622] to-[#121218] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-black uppercase mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>Acompañamiento Integral</span>
            </div>
            <h4 className="text-lg sm:text-xl font-display font-black uppercase text-white">
              ¿Querés conocer más sobre el acompañamiento?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
              Estos son solo algunos de los deportistas que forman parte del proceso en diferentes ligas y disciplinas.
            </p>
          </div>

          <a
            href={`https://wa.me/${COACH_INFO.whatsappNumber}?text=${encodeURIComponent('Hola Nico, vi los testimonios en la web y me gustaría consultar por mi disciplina y objetivos.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-yellow text-black font-extrabold text-xs uppercase tracking-wider hover:bg-brand-yellowHover shadow-neon-sm transition-all flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Consultar por mi Deporte</span>
          </a>
        </div>

      </div>
    </section>
  );
};
