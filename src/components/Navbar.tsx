import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall, 
  ArrowRight,
  Calculator,
  Layers,
  Sparkles
} from 'lucide-react';
import { ALL_LOCATIONS } from '../data/locations';

interface NavbarProps {
  currentSlug?: string;
}

export default function Navbar({ currentSlug }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          ? 'bg-[#0B0D0C]/90 backdrop-blur-md border-b border-[#24322B] shadow-2xl py-3' 
          : 'bg-gradient-to-b from-[#0B0D0C]/80 via-[#0B0D0C]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#121816] to-[#1A2420] border border-[#24322B] group-hover:border-[#7CFF3A]/60 flex items-center justify-center transition-all duration-300 shadow-md">
              <div className="relative">
                <ShieldCheck className="w-5 h-5 text-[#7CFF3A]" />
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#7CFF3A] rounded-full animate-ping"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-[#7CFF3A] transition-colors">
                  D-VIEW
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-[#7CFF3A]/10 text-[#7CFF3A] font-semibold tracking-wider uppercase border border-[#7CFF3A]/20">
                  SOLUTIONS
                </span>
              </div>
              <span className="text-[10px] tracking-wider text-[#94A3B8] uppercase font-medium">
                Balcony Safety Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* City Switcher Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                onBlur={() => setTimeout(() => setCityDropdownOpen(false), 200)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                  activeLocation 
                    ? 'bg-[#151C19] border-[#7CFF3A]/40 text-[#7CFF3A]' 
                    : 'bg-[#121816]/60 border-[#24322B] text-[#C7CDD1] hover:text-white hover:border-[#384C42]'
                }`}
                aria-expanded={cityDropdownOpen}
                aria-haspopup="true"
              >
                <MapPin className="w-4 h-4 text-[#7CFF3A]" />
                <span>{activeLocation ? activeLocation.name : 'Select City'}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#94A3B8] transition-transform duration-200 ${cityDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {cityDropdownOpen && (
                <div className="absolute top-full mt-2 left-0 w-72 rounded-xl bg-[#0F1412] border border-[#24322B] shadow-2xl p-2 z-50 animate-in fade-in duration-150 backdrop-blur-xl">
                  <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#94A3B8] border-b border-[#24322B]/60">
                    6 Andhra Pradesh Hubs
                  </div>
                  <div className="mt-1 space-y-1">
                    {ALL_LOCATIONS.map((loc) => {
                      const isActive = loc.slug === currentSlug;
                      return (
                        <a
                          key={loc.slug}
                          href={`/locations/${loc.slug}`}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                            isActive
                              ? 'bg-[#7CFF3A]/10 text-[#7CFF3A] font-semibold border border-[#7CFF3A]/30'
                              : 'text-[#C7CDD1] hover:bg-[#1A2420] hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#7CFF3A]' : 'bg-[#384C42]'}`}></span>
                            <span>{loc.name}</span>
                          </div>
                          <span className="text-[10px] text-[#94A3B8] font-normal">{loc.district}</span>
                        </a>
                      );
                    })}
                  </div>
                  <div className="mt-2 pt-2 border-t border-[#24322B]/60">
                    <a 
                      href="/locations" 
                      className="block text-center text-xs font-medium text-[#7CFF3A] hover:underline py-1"
                    >
                      View All 6 Hubs Dashboard →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a 
              href="/" 
              className="px-3 py-2 rounded-lg text-sm text-[#C7CDD1] hover:text-white hover:bg-[#151C19] transition-colors"
            >
              Home
            </a>

            <a 
              href="/locations" 
              className="px-3 py-2 rounded-lg text-sm text-[#C7CDD1] hover:text-white hover:bg-[#151C19] transition-colors"
            >
              Locations
            </a>

            <a 
              href="#calculator" 
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-[#C7CDD1] hover:text-white hover:bg-[#151C19] transition-colors"
            >
              <Calculator className="w-4 h-4 text-[#7CFF3A]" />
              <span>Calculator</span>
            </a>

            <a 
              href="#technical" 
              className="px-3 py-2 rounded-lg text-sm text-[#C7CDD1] hover:text-white hover:bg-[#151C19] transition-colors"
            >
              SS-316 Weather Guide
            </a>

            <a 
              href="#trust" 
              className="px-3 py-2 rounded-lg text-sm text-[#C7CDD1] hover:text-white hover:bg-[#151C19] transition-colors"
            >
              Trust Badges
            </a>

            <a 
              href="#book-visit" 
              className="px-3 py-2 rounded-lg text-sm text-[#C7CDD1] hover:text-white hover:bg-[#151C19] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919494328999"
              className="flex items-center gap-2 text-xs font-medium text-[#C7CDD1] hover:text-white px-3 py-2 rounded-lg border border-[#24322B] bg-[#121816]/60 hover:bg-[#151C19] transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#7CFF3A]" />
              <span>+91 94943 28999</span>
            </a>

            <a
              href="#book-visit"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-black bg-[#22c55e] hover:bg-[#16a34a] transition-all duration-200 shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:shadow-[0_0_30px_rgba(34,197,94,0.55)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Book Free Site Measurement</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#book-visit"
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#0B0D0C] bg-[#7CFF3A]"
            >
              Get Quote
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#151C19] border border-[#24322B] text-white hover:text-[#7CFF3A]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0D0C]/98 border-b border-[#24322B] px-4 pt-4 pb-6 space-y-4 backdrop-blur-2xl">
          
          {/* City Selector for Mobile */}
          <div className="bg-[#121816] rounded-xl p-3 border border-[#24322B]">
            <div className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-2 flex items-center gap-1.5">
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
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left truncate transition-colors ${
                      isActive
                        ? 'bg-[#7CFF3A] text-[#0B0D0C] font-bold'
                        : 'bg-[#151C19] text-[#C7CDD1] hover:text-white border border-[#24322B]'
                    }`}
                  >
                    {loc.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-1">
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-[#C7CDD1] hover:bg-[#151C19] hover:text-white"
            >
              <span className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#7CFF3A]" />
                Price Calculator
              </span>
              <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
            </a>

            <a
              href="#problems"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-[#C7CDD1] hover:bg-[#151C19] hover:text-white"
            >
              <span>Problem & Safety Grid</span>
              <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
            </a>

            <a
              href="#technical"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-[#C7CDD1] hover:bg-[#151C19] hover:text-white"
            >
              <span>Local Weather & Corrosion Guide</span>
              <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
            </a>

            <a
              href="#engineering"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-[#C7CDD1] hover:bg-[#151C19] hover:text-white"
            >
              <span>Engineering & SS-316 Materials</span>
              <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
            </a>

            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-[#C7CDD1] hover:bg-[#151C19] hover:text-white"
            >
              <span>Recent Projects</span>
              <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
            </a>

            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-[#C7CDD1] hover:bg-[#151C19] hover:text-white"
            >
              <span>Frequently Asked Questions</span>
              <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
            </a>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 border-t border-[#24322B] space-y-2">
            <a
              href="#book-visit"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#7CFF3A] text-[#0B0D0C] font-bold text-sm shadow-[0_0_20px_rgba(124,255,58,0.25)]"
            >
              <span>Book Free Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+919494328999"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#24322B] bg-[#121816] text-[#C7CDD1] text-xs font-semibold"
            >
              <PhoneCall className="w-4 h-4 text-[#7CFF3A]" />
              <span>Call Helpline: +91 94943 28999</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
