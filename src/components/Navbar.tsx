import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall, 
  ArrowRight,
  Calculator,
  Grid3X3,
  HelpCircle,
  FolderKanban,
  MapPin
} from 'lucide-react';
import { ALL_LOCATIONS } from '../data/locations';

interface NavbarProps {
  currentSlug?: string;
}

export default function Navbar({ currentSlug }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLocation = ALL_LOCATIONS.find(loc => loc.slug === currentSlug);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0f0d]/95 backdrop-blur-md border-b border-[#7CFF3A]/20 shadow-2xl py-3' 
          : 'bg-gradient-to-b from-[#0a0f0d]/90 via-[#0a0f0d]/50 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#121816] to-[#1A2420] border border-[#24322B] group-hover:border-[#7CFF3A]/60 flex items-center justify-center transition-all duration-300 shadow-md">
                <div className="relative">
                  <ShieldCheck className="w-5 h-5 text-[#7CFF3A]" />
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#7CFF3A] rounded-full animate-ping"></span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-white group-hover:text-[#7CFF3A] transition-colors">
                    D-VIEW
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#7CFF3A]/15 text-[#7CFF3A] font-black tracking-wider uppercase border border-[#7CFF3A]/30">
                    LUXURY
                  </span>
                </div>
                <span className="text-[9px] tracking-widest text-[#94a3b8] uppercase font-bold">
                  BALCONY SAFETY ENGINEERING
                </span>
              </div>
            </a>

            {/* City Selector Pill */}
            <div className="relative hidden xl:block ml-2">
              <button
                type="button"
                onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                onBlur={() => setTimeout(() => setCityDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#131b17] border border-[#24322B] hover:border-[#7CFF3A]/50 text-[#cbd5e1] hover:text-white transition-all"
              >
                <MapPin className="w-3 h-3 text-[#7CFF3A]" />
                <span>{activeLocation ? activeLocation.name : 'Select City'}</span>
                <ChevronDown className="w-3 h-3 text-[#94a3b8]" />
              </button>

              {cityDropdownOpen && (
                <div className="absolute top-full mt-2 left-0 w-64 rounded-xl bg-[#0a0f0d] border border-[#7CFF3A]/20 shadow-2xl p-2 z-50 animate-in fade-in backdrop-blur-xl">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#94a3b8] border-b border-[#24322B]">
                    7 Andhra Pradesh Hubs
                  </div>
                  <div className="mt-1 space-y-1">
                    {ALL_LOCATIONS.map((loc) => (
                      <a
                        key={loc.slug}
                        href={`/locations/${loc.slug}`}
                        className="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs text-[#cbd5e1] hover:bg-[#131b17] hover:text-[#7CFF3A] transition-all"
                      >
                        <span>{loc.name}</span>
                        <span className="text-[10px] text-[#64748b]">{loc.district}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links - STRICTLY REQUESTED ITEMS */}
          <nav className="hidden lg:flex items-center gap-2">
            
            {/* 1. Solutions (ONLY ONE single button dropdown) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                onBlur={() => setTimeout(() => setSolutionsDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold text-[#cbd5e1] hover:text-white hover:bg-[#131b17] border border-transparent hover:border-[#24322B] transition-all"
                aria-expanded={solutionsDropdownOpen}
              >
                <Grid3X3 className="w-4 h-4 text-[#7CFF3A]" />
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#94a3b8] transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {solutionsDropdownOpen && (
                <div className="absolute top-full mt-2 left-0 w-64 rounded-xl bg-[#0a0f0d] border border-[#7CFF3A]/25 shadow-2xl p-2 z-50 animate-in fade-in backdrop-blur-xl">
                  <a
                    href="#solutions"
                    className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-[#131b17] text-left transition-all group"
                  >
                    <span className="text-sm font-bold text-white group-hover:text-[#7CFF3A]">
                      Balcony SS-316 Grills
                    </span>
                    <span className="text-[11px] text-[#94a3b8]">
                      Full-height luxury invisible grills for high-rises
                    </span>
                  </a>
                  <a
                    href="#solutions"
                    className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-[#131b17] text-left transition-all group"
                  >
                    <span className="text-sm font-bold text-white group-hover:text-[#7CFF3A]">
                      Window Grills
                    </span>
                    <span className="text-[11px] text-[#94a3b8]">
                      Zero-rust slim cables for open window ventilation
                    </span>
                  </a>
                  <a
                    href="#solutions"
                    className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-[#131b17] text-left transition-all group"
                  >
                    <span className="text-sm font-bold text-white group-hover:text-[#7CFF3A]">
                      High-Rise Elevation Grills
                    </span>
                    <span className="text-[11px] text-[#94a3b8]">
                      Structural &gt;400kg tensioned coastal elevation grills
                    </span>
                  </a>
                </div>
              )}
            </div>

            {/* 2. Estimate Calculator */}
            <a 
              href="#calculator" 
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold text-[#cbd5e1] hover:text-white hover:bg-[#131b17] border border-transparent hover:border-[#24322B] transition-all"
            >
              <Calculator className="w-4 h-4 text-[#7CFF3A]" />
              <span>Estimate Calculator</span>
            </a>

            {/* 3. Projects */}
            <a 
              href="#projects" 
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold text-[#cbd5e1] hover:text-white hover:bg-[#131b17] border border-transparent hover:border-[#24322B] transition-all"
            >
              <FolderKanban className="w-4 h-4 text-[#7CFF3A]" />
              <span>Projects</span>
            </a>

            {/* 4. FAQ */}
            <a 
              href="#faq" 
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold text-[#cbd5e1] hover:text-white hover:bg-[#131b17] border border-transparent hover:border-[#24322B] transition-all"
            >
              <HelpCircle className="w-4 h-4 text-[#7CFF3A]" />
              <span>FAQ</span>
            </a>

            {/* 5. Direct Call */}
            <a
              href="tel:+919494328999"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-[#131b17] hover:bg-[#1A2420] border border-[#24322B] hover:border-[#7CFF3A]/50 transition-all ml-1"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#7CFF3A]" />
              <span>+91 94943 28999</span>
            </a>

          </nav>

          {/* Right CTA Button: Neon Green Button -> 'Book Free Site Visit ->' */}
          <div className="hidden lg:flex items-center">
            <a
              href="#book-visit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-extrabold text-black bg-[#7CFF3A] hover:bg-[#8eff50] transition-all duration-200 shadow-[0_0_20px_rgba(124,255,58,0.35)] hover:shadow-[0_0_30px_rgba(124,255,58,0.55)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Book Free Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+919494328999"
              className="p-2 rounded-lg bg-[#131b17] border border-[#24322B] text-[#7CFF3A]"
              aria-label="Call Direct"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <a
              href="#book-visit"
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-black bg-[#7CFF3A]"
            >
              Free Visit
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#131b17] border border-[#24322B] text-white hover:text-[#7CFF3A]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f0d]/98 border-b border-[#7CFF3A]/20 px-4 pt-4 pb-6 space-y-4 backdrop-blur-2xl">
          
          {/* City Selection in Mobile Drawer */}
          <div className="bg-[#131b17] rounded-xl p-3 border border-[#24322B]">
            <div className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#7CFF3A]" />
              <span>Select City Hub</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {ALL_LOCATIONS.map((loc) => {
                const isActive = loc.slug === currentSlug;
                return (
                  <a
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold text-left truncate transition-colors ${
                      isActive
                        ? 'bg-[#7CFF3A] text-black font-bold'
                        : 'bg-[#0a0f0d] text-[#cbd5e1] hover:text-white border border-[#24322B]'
                    }`}
                  >
                    {loc.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Strict Nav Links */}
          <div className="space-y-1">
            <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">
              Solutions
            </div>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-sm text-[#cbd5e1] hover:bg-[#131b17] hover:text-white"
            >
              • Balcony SS-316 Grills
            </a>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-sm text-[#cbd5e1] hover:bg-[#131b17] hover:text-white"
            >
              • Window Grills
            </a>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-sm text-[#cbd5e1] hover:bg-[#131b17] hover:text-white"
            >
              • High-Rise Elevation Grills
            </a>

            <div className="pt-2 border-t border-[#24322B]"></div>

            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-[#cbd5e1] hover:bg-[#131b17] hover:text-white"
            >
              <span className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#7CFF3A]" />
                Estimate Calculator
              </span>
              <ArrowRight className="w-4 h-4 text-[#94a3b8]" />
            </a>

            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-[#cbd5e1] hover:bg-[#131b17] hover:text-white"
            >
              <span className="flex items-center gap-2">
                <FolderKanban className="w-4 h-4 text-[#7CFF3A]" />
                Projects
              </span>
              <ArrowRight className="w-4 h-4 text-[#94a3b8]" />
            </a>

            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-[#cbd5e1] hover:bg-[#131b17] hover:text-white"
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#7CFF3A]" />
                FAQ
              </span>
              <ArrowRight className="w-4 h-4 text-[#94a3b8]" />
            </a>
          </div>

          {/* Action CTA */}
          <div className="pt-2 border-t border-[#24322B] space-y-2">
            <a
              href="#book-visit"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#7CFF3A] text-black font-extrabold text-sm shadow-[0_0_20px_rgba(124,255,58,0.35)]"
            >
              <span>Book Free Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+919494328999"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#24322B] bg-[#131b17] text-[#cbd5e1] text-xs font-semibold"
            >
              <PhoneCall className="w-4 h-4 text-[#7CFF3A]" />
              <span>Call Direct: +91 94943 28999</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
