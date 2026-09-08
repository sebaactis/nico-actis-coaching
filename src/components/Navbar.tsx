import type React from "react";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { COACH_INFO } from "../data/coachingData";
import { SoccerCleatIcon } from "./SoccerCleatIcon";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "¿Quién Soy?", href: "#sobre-mi" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Certificaciones", href: "#certificaciones" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070708]/90 backdrop-blur-md border-b border-brand-border py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#inicio" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#141418] border border-brand-yellow/40 flex items-center justify-center font-display font-black text-brand-yellow text-lg group-hover:shadow-[0_0_15px_rgba(230,255,0,0.5)] transition-all">
              NA
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg tracking-wider text-white uppercase group-hover:text-brand-yellow transition-colors">
                Nico Actis
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-brand-yellow uppercase">
                Coaching Deportivo
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-zinc-300 hover:text-brand-yellow transition-colors rounded-lg hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COACH_INFO.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-yellow text-black font-extrabold text-xs uppercase tracking-wider hover:bg-brand-yellowHover shadow-[0_0_20px_rgba(230,255,0,0.35)] hover:shadow-[0_0_30px_rgba(230,255,0,0.6)] transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <SoccerCleatIcon className="w-4 h-4" />
              <span>Agendar Sesión</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#141418] border border-brand-border text-zinc-300 hover:text-brand-yellow focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0F] border-b border-brand-border px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-zinc-200 hover:text-black hover:bg-brand-yellow transition-all"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </a>
          ))}
          <div className="pt-2">
            <a
              href={COACH_INFO.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-brand-yellow text-black font-extrabold text-sm uppercase tracking-wider shadow-neon"
            >
              <SoccerCleatIcon className="w-5 h-5" />
              <span>Agendar Primera Charla Gratuita</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
