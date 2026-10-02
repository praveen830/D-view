import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, Phone, CheckCircle2, ChevronRight, ChevronLeft, X, 
  Flame, Baby, Cat, HeartHandshake, Eye, Sparkles, QrCode, ArrowRight,
  Shield, Droplets, Wrench, HelpCircle
} from 'lucide-react';

// --- 6 LOCATIONS DATA (MATCHING EXACT INVISPROTECT ARCHITECTURAL STANDARD) ---
export interface LocationSlide {
  id: string;
  locationPath: string; // e.g. /locations/vizag
  slug: string;
  name: string;
  cityShort: string;
  categoryTag: string;
  mainTitle: string;
  subtext: string;
  buttonText: string;
  badge: string;
  emotionHook: string;
  landmarkDesc: string;
  heroImage: string;
  activeBelts: string[];
  weatherChallenge: string;
  weatherSolution: string;
}

export const CITIES_SLIDES: LocationSlide[] = [
  {
    id: 'vizag',
    locationPath: '/locations/vizag',
    slug: 'visakhapatnam',
    name: 'Visakhapatnam',
    cityShort: 'VIZAG',
    categoryTag: 'COASTAL ARCHITECTURAL SAFETY',
    mainTitle: 'THE INVISIBLE THRESHOLD — VIZAG',
    subtext: 'Architectural safety for modern sea-facing homes. 100% unblocked view.',
    buttonText: '[ DISCOVER VIZAG ]',
    badge: 'Coastal Marine Line SS-316',
    emotionHook: 'Wow! Mana Vizag sea coast view invisible grills valla asalu block avvakunda entha luxury ga undo!',
    landmarkDesc: 'Luxury penthouse balcony with floor-to-ceiling vertical invisible wires overlooking RK Beach coastal waves & Kailasagiri hilltop.',
    heroImage: '/images/visakhapatnam-hero.jpg',
    activeBelts: ['Madhurawada (27-Floor High-Rises)', 'Yendada', 'Rushikonda', 'PM Palem', 'Anandapuram', 'Pendurthi', 'Gajuwaka'],
    weatherChallenge: "Vizag's high-salinity salt-air and marine damp humidity rapidly corrode low-grade steel within months.",
    weatherSolution: 'Strictly Marine Grade SS-316 infused with Molybdenum for zero-decay corrosion resistance.'
  },
  {
    id: 'rajahmundry',
    locationPath: '/locations/rajahmundry',
    slug: 'rajahmundry',
    name: 'Rajamahendravaram',
    cityShort: 'RAJAHMUNDRY',
    categoryTag: 'RIVERFRONT HERITAGE LIVING',
    mainTitle: 'SAFEGUARDING GODAVARI PRIDE',
    subtext: 'Preserving river breeze with 100% bird control and fall protection.',
    buttonText: '[ DISCOVER RAJAHMUNDRY ]',
    badge: 'Godavari Riverfront Corridor',
    emotionHook: 'Pigeon problem lekunda, challani Godavari gaali & arch bridge view asalu aagakunda intiki 100% safety!',
    landmarkDesc: 'Apartment balcony tiled floor and railing framing the iconic Godavari Arch Bridge and river cruise boats through vertical safety wires.',
    heroImage: '/images/rajahmundry-hero.jpg',
    activeBelts: ['Morampudi', 'Bommuru', 'Diwancheruvu', 'Lalacheruvu', 'Vemagiri', 'Danavaipeta', 'Kotilingala Ghat Road', 'Gadaala Residential Hubs'],
    weatherChallenge: 'High river moisture vapor combined with aggressive pigeon nesting colonies on open balcony ledges.',
    weatherSolution: 'Precision 2-inch SS-316 tensioned cables preventing bird entry while allowing 99% free river breeze.'
  },
  {
    id: 'vijayawada',
    locationPath: '/locations/vijayawada',
    slug: 'vijayawada-amaravati',
    name: 'Vijayawada & Amaravati',
    cityShort: 'VIJAYAWADA',
    categoryTag: 'CAPITAL SKYLINE SAFETY',
    mainTitle: 'MODERN LIVING IN AMARAVATI',
    subtext: 'High-rise elevation security for Amaravati HappyNest & riverside towers.',
    buttonText: '[ DISCOVER VIJAYAWADA ]',
    badge: 'Capital & Krishna Waterfront',
    emotionHook: 'Modern luxury high-rise look ki taggattu, iron bars cage lekunda uncompromised open balcony!',
    landmarkDesc: 'Modern high-rise balcony looking out at Prakasam Barrage lights and Krishna River horizon through vertical SS-316 cables.',
    heroImage: '/images/vijayawada-hero.jpg',
    activeBelts: ['Benz Circle', 'Moghalrajpuram', 'Gunadala', 'Kanuru', 'Poranki', 'Amaravati HappyNest (G+18)', 'Tadepalli', 'Undavalli'],
    weatherChallenge: 'Intense summer thermal expansion and high-velocity wind gusts on skyscraper floors above 15 levels.',
    weatherSolution: 'High-tensile multi-strand core cables certified up to 400kg load per strand with thermal compensation.'
  },
  {
    id: 'guntur',
    locationPath: '/locations/guntur',
    slug: 'guntur',
    name: 'Guntur',
    cityShort: 'GUNTUR',
    categoryTag: 'HIGH-RISE STRUCTURAL LIVING',
    mainTitle: 'GUARDIAN OF GUNTUR',
    subtext: 'Say goodbye to dark cage iron grills. Uncompromised daylight and fall safety.',
    buttonText: '[ DISCOVER GUNTUR ]',
    badge: 'Kondaveedu Horizons Belt',
    emotionHook: 'Kondaveedu hill breeze intloki vasthundi, pillalu unna elevations bayam lekunda safe setup!',
    landmarkDesc: 'High-rise terrace framing Kondaveedu Fort ridge and city skyline through invisible steel cables.',
    heroImage: '/images/guntur-hero.jpg',
    activeBelts: ['Brodipet', 'Arundelpet', 'Amaravati Road', 'Namburu', 'Kaza & Tadepalli Growth Corridor', 'Gorantla'],
    weatherChallenge: 'Heavy dry winds carrying abrasive dust particulates that erode and dull conventional iron bars.',
    weatherSolution: 'Anti-static smooth nylon-12 coated SS-316 cables shed dust effortlessly and maintain lifelong shine.'
  },
  {
    id: 'kakinada',
    locationPath: '/locations/kakinada',
    slug: 'kakinada',
    name: 'Kakinada',
    cityShort: 'KAKINADA',
    categoryTag: 'MARINE GRADE SS-316 CORRIDOR',
    mainTitle: "KAKINADA'S COASTAL SHIELD",
    subtext: 'Permanent rust immunity against salty sea breezes.',
    buttonText: '[ DISCOVER KAKINADA ]',
    badge: 'Deepwater Port & Coastal Corridor',
    emotionHook: 'Uppu gaali thupattu pattakunda, high-grade Marine wire security tho lifetime durability!',
    landmarkDesc: 'Coastal balcony framing Vakalapudi Lighthouse and palm shoreline with marine-grade SS-316 wires.',
    heroImage: '/images/kakinada-hero.jpg',
    activeBelts: ['Sarpavaram', 'Madhavapatnam', 'Ramanayyapeta', 'Vakalapudi', 'Jagannaickpur', 'Bhanugudi Junction'],
    weatherChallenge: 'Aggressive industrial port emissions mixed with salty maritime mist causing pitting corrosion.',
    weatherSolution: 'Certified Marine Grade SS-316 tested against ASTM B117 standards for extreme saline resistance.'
  },
  {
    id: 'nellore',
    locationPath: '/locations/nellore',
    slug: 'nellore',
    name: 'Nellore',
    cityShort: 'NELLORE',
    categoryTag: 'RIVER BARRAGE TRANQUILITY',
    mainTitle: 'TRANQUILITY & TRUST — NELLORE',
    subtext: 'Safe haven for children and elders on high-elevation balconies.',
    buttonText: '[ DISCOVER NELLORE ]',
    badge: 'Penna Riverfront Horizon',
    emotionHook: 'Pedda vallu, pillalu unna balcony lo nilabadataniki absolute strong and safe support!',
    landmarkDesc: 'Sunset view over Nellore Barrage and Penna River through vertical safety wire barriers.',
    heroImage: '/images/nellore-hero.jpg',
    activeBelts: ['Magunta Layout', 'Balaji Nagar', 'Dargamitta', 'Vedayapalem', 'Podalakur Road', 'Kavali Road', 'Haranathapuram'],
    weatherChallenge: 'Continuous seasonal monsoon dampness loosening weak anchor points and corroding inferior wires.',
    weatherSolution: 'Precision aluminum track tensioners anchored deep in structural concrete with non-corrosive fasteners.'
  }
];

// --- 6-CARD PROBLEM SOLVER GALLERY (IMAGE-FIRST) ---
export const PROBLEM_SOLVERS = [
  {
    icon: Baby,
    title: "Children's Safety",
    tagline: 'High-Rise Balcony Lockdown',
    desc: 'High-rise balcony railings with zero-fall lockdown coverage for high elevations. 2-inch safe spacing strictly prevents climbing accidents or head entrapment.',
    image: '/images/child-safety-balcony.jpg',
    stat: '400 KG / Cable'
  },
  {
    icon: Cat,
    title: 'Pets Safety',
    tagline: 'Zero-Gap Paw Architecture',
    desc: '2-inch precision spacing preventing cats and dogs from slipping through. Smooth nylon-sheathed wires protect paws from cuts and pinches.',
    image: '/images/pet-safety.jpg',
    stat: 'Zero Gap Hazard'
  },
  {
    icon: HeartHandshake,
    title: 'Old Age Persons Safety',
    tagline: 'Vertigo & Tension Elimination',
    desc: 'Solid structural tension support eliminating height anxiety and loose railing fears. Creates a secure physical boundary for elderly parents.',
    image: '/images/project-penthouse.jpg',
    stat: '100% Rigid Anchoring'
  },
  {
    icon: Eye,
    title: 'Pigeons Safety',
    tagline: '100% Droppings Protection',
    desc: '100% bird droppings and dirt control without blocking coastal breeze or sunlight. No dark netting, no dirty cages, zero foul smell.',
    image: '/images/rajahmundry-hero.jpg',
    stat: 'Zero Birds Entry'
  },
  {
    icon: Flame,
    title: '1-Minute Emergency Fire Escape',
    tagline: 'Life-Saving Egress Speed',
    desc: 'Unlike welded iron cages that trap families during high-rise emergencies, SS-316 wires can be cut in under 60 seconds with standard emergency wire cutters.',
    image: '/images/wire-engineering.jpg',
    stat: '60 Sec Cut Escape'
  },
  {
    icon: Sparkles,
    title: 'Modern Luxury Look & Free Air',
    tagline: 'Eliminates Dark Iron Bars',
    desc: 'Replaces ugly black iron bars with invisible stainless-steel elegance. Maximizes daylight and unblocked natural ventilation for luxury apartments.',
    image: '/images/visakhapatnam-hero.jpg',
    stat: '99% Transparency'
  }
];

// --- FAQS DATA ---
export const FAQS = [
  {
    q: "Can invisible grills really support a child's weight or adult impact?",
    a: "Yes. D-VIEW uses high-tensile SS-316 multi-strand wire ropes with each strand certified to withstand tensile loads exceeding 400 kg. Spaced precisely at 2-inch intervals, they provide unbreakable fall protection."
  },
  {
    q: "How does SS-316 prevent rust in coastal areas like Vizag and Kakinada?",
    a: "SS-316 contains 2.0% - 3.0% Molybdenum, a rare alloy element specifically developed for marine resistance. It is chemically immune to chloride pitting and coastal humidity, unlike standard SS-202 or SS-304."
  },
  {
    q: "How is emergency fire escape handled compared to iron grates?",
    a: "Welded iron bars require heavy gas cutters or angle grinders, creating death traps during high-rise fires. In contrast, D-VIEW invisible grills can be severed with standard emergency manual wire cutters in under 60 seconds."
  },
  {
    q: "Will pigeons and birds still be able to enter my balcony?",
    a: "No. The 2-inch (50 mm) vertical wire spacing physically prevents pigeons and common birds from squeezing into your balcony space, permanently solving droppings and nesting issues without dark nylon netting."
  }
];

interface DViewWebsiteProps {
  initialCitySlug?: string;
  isSubPageDirect?: boolean;
}

export default function DViewWebsite({ initialCitySlug, isSubPageDirect = false }: DViewWebsiteProps) {
  const getIndexFromSlug = (slug?: string) => {
    if (!slug) return 0;
    const clean = slug.toLowerCase();
    const idx = CITIES_SLIDES.findIndex(
      s => s.locationPath.includes(clean) || s.slug === clean || s.id === clean || clean.includes(s.id)
    );
    return idx >= 0 ? idx : 0;
  };

  const [currentSlideIndex, setCurrentSlideIndex] = useState(getIndexFromSlug(initialCitySlug));
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  
  // Calculator State
  const [width, setWidth] = useState(12);
  const [height, setHeight] = useState(8);
  const [cableThickness, setCableThickness] = useState('2.5');

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  
  const activeSlide = CITIES_SLIDES[currentSlideIndex];
  const [selectedHub, setSelectedHub] = useState(activeSlide.name);

  // Sync if initialCitySlug changes
  useEffect(() => {
    if (initialCitySlug) {
      const idx = getIndexFromSlug(initialCitySlug);
      setCurrentSlideIndex(idx);
      setSelectedHub(CITIES_SLIDES[idx].name);
    }
  }, [initialCitySlug]);

  // Pricing calculations
  const calculatedArea = width * height;
  const ratePerSqFt = cableThickness === '2.0' ? 140 : cableThickness === '2.5' ? 165 : 190;
  const estimatedMin = calculatedArea * ratePerSqFt;
  const estimatedMax = Math.round(estimatedMin * 1.15);

  // Slide navigation
  const handlePrevSlide = () => {
    setCurrentSlideIndex(prev => (prev === 0 ? CITIES_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex(prev => (prev === CITIES_SLIDES.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for slides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevSlide();
      if (e.key === 'ArrowRight') handleNextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenBooking = (hubName?: string) => {
    setSelectedHub(hubName || activeSlide.name);
    setIsModalOpen(true);
  };

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello D-View Invisible Safety Concierge!\n` +
      `I want to book a Free Site Visit & Measurement.\n\n` +
      `📍 City Hub: ${selectedHub}\n` +
      `📐 Area: ${calculatedArea} sq.ft (${width} ft x ${height} ft)\n` +
      `🛡️ Wire Grade: SS-316 Marine Grade (${cableThickness} mm)\n` +
      `💰 Indicative Estimate: ₹${estimatedMin.toLocaleString()} - ₹${estimatedMax.toLocaleString()}\n` +
      `👤 Name: ${customerName || 'Resident'}\n` +
      `📞 Phone: ${customerPhone || 'Via WhatsApp'}`
    );
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070b09] text-[#f1f5f9] font-sans antialiased selection:bg-emerald-500 selection:text-black">
      
      {/* ========================================================= */}
      {/* 3. GLOBAL NAVIGATION (INVISPROTECT MINIMALISM)            */}
      {/* ========================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#070b09]/80 backdrop-blur-xl border-b border-white/10 px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Mark: "D-VIEW" with "BALCONY SAFETY ENGINEERING" */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 p-[1px] shadow-[0_0_20px_rgba(16,185,129,0.35)] transition transform group-hover:scale-105">
              <div className="w-full h-full bg-[#070b09] rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-400 stroke-[2.2]" />
              </div>
            </div>
            <div>
              <span className="text-base sm:text-lg font-black tracking-[0.2em] text-white block">
                D-VIEW
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-emerald-400 font-semibold block">
                BALCONY SAFETY ENGINEERING
              </span>
            </div>
          </a>

          {/* Nav Links: Solutions (Single Dropdown), Estimate Calculator, FAQ, Concierge */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
            
            {/* Single Solutions Dropdown */}
            <div className="relative">
              <button 
                type="button"
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                onBlur={() => setTimeout(() => setSolutionsDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 hover:text-emerald-400 transition cursor-pointer"
              >
                Solutions <ChevronRight className={`w-3.5 h-3.5 transition-transform ${solutionsDropdownOpen ? 'rotate-90 text-emerald-400' : ''}`} />
              </button>

              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-[#0d1411]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 shadow-2xl space-y-1">
                  <a 
                    href="#problem-solver"
                    onClick={() => setSolutionsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-xl text-[11px] hover:bg-emerald-500/10 hover:text-emerald-400 transition"
                  >
                    <span className="font-bold text-white block">Balcony SS-316 Grills</span>
                    <span className="text-slate-400 text-[10px]">Unblocked high-rise living</span>
                  </a>
                  <a 
                    href="#problem-solver"
                    onClick={() => setSolutionsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-xl text-[11px] hover:bg-emerald-500/10 hover:text-emerald-400 transition"
                  >
                    <span className="font-bold text-white block">Window Safety Grills</span>
                    <span className="text-slate-400 text-[10px]">Child safe window security</span>
                  </a>
                  <a 
                    href="#problem-solver"
                    onClick={() => setSolutionsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-xl text-[11px] hover:bg-emerald-500/10 hover:text-emerald-400 transition"
                  >
                    <span className="font-bold text-white block">High-Rise Elevation Grills</span>
                    <span className="text-slate-400 text-[10px]">Certified up to 30th floor</span>
                  </a>
                </div>
              )}
            </div>

            <button 
              type="button"
              onClick={() => scrollToId('estimate-calculator')}
              className="hover:text-emerald-400 transition cursor-pointer"
            >
              Estimate Calculator
            </button>

            <button 
              type="button"
              onClick={() => scrollToId('faq-section')}
              className="hover:text-emerald-400 transition cursor-pointer"
            >
              FAQ
            </button>

            <a 
              href="tel:+919494328999" 
              className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Concierge: +91 94943 28999</span>
            </a>
          </nav>

          {/* Right CTA Button */}
          <button 
            type="button"
            onClick={() => handleOpenBooking()}
            className="bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-2.5 rounded-full text-[11px] uppercase tracking-wider font-extrabold shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all transform hover:scale-[1.03] cursor-pointer"
          >
            Book Free Site Visit
          </button>

        </div>
      </header>

      {/* ==================================================================== */}
      {/* 1. MAIN DASHBOARD: 100vh CINEMATIC FULL-SCREEN SLIDESHOW (NO CLUTTER) */}
      {/* ==================================================================== */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Full Viewport Cross-Fading Architectural Hero Backgrounds */}
        {CITIES_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Interior Balcony Image: Tiled floor, railing, and city background */}
            <div 
              className="w-full h-full bg-cover bg-center transform scale-105 transition-transform duration-10000"
              style={{ backgroundImage: `url(${slide.heroImage})` }}
            />

            {/* Vertical SS-316 Invisible Wire Lines Simulation (2-inch spacing) */}
            <div 
              className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_26px,rgba(255,255,255,0.15)_27px,rgba(255,255,255,0.03)_28px)] pointer-events-none" 
              aria-hidden="true"
            />

            {/* Balcony Ceiling & Floor Track Shadows */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#070b09] via-[#070b09]/80 to-transparent pointer-events-none" />
            
            {/* Luxury Vignette */}
            <div className="absolute inset-0 bg-radial-vignette from-transparent via-black/30 to-black/75 pointer-events-none" />
          </div>
        ))}

        {/* Center Overlay (Invisprotect Minimalist Luxury Style - NO BUTTON CLUTTER) */}
        <div className="relative z-20 max-w-4xl px-6 text-center flex flex-col items-center">
          
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-400 font-bold">
              {activeSlide.categoryTag}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-[0.08em] uppercase leading-[1.08] mb-5 drop-shadow-2xl">
            {activeSlide.mainTitle}
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-lg text-slate-200/90 font-light tracking-wide max-w-2xl mb-8 leading-relaxed">
            {activeSlide.subtext}
          </p>

          {/* Action Element: Minimal centered pill button [ DISCOVER ... ] */}
          <div className="flex justify-center">
            <a
              href={activeSlide.locationPath}
              className="border border-white/60 hover:border-emerald-400 text-white hover:text-emerald-300 px-9 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.25em] bg-black/40 backdrop-blur-md transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.6)] cursor-pointer"
            >
              {activeSlide.buttonText}
            </a>
          </div>

        </div>

        {/* Prev / Next Arrows */}
        <button
          type="button"
          onClick={handlePrevSlide}
          aria-label="Previous Location"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white hover:text-emerald-400 hover:border-emerald-400/60 flex items-center justify-center transition cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
        </button>

        <button
          type="button"
          onClick={handleNextSlide}
          aria-label="Next Location"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white hover:text-emerald-400 hover:border-emerald-400/60 flex items-center justify-center transition cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 stroke-[1.5]" />
        </button>

        {/* Minimal City Dock at Bottom */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex flex-col items-center gap-3">
          <div className="flex items-center gap-1.5 sm:gap-3 bg-black/60 backdrop-blur-xl border border-white/10 p-1.5 sm:p-2 rounded-full max-w-[95vw] overflow-x-auto scrollbar-none">
            {CITIES_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlideIndex(idx)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  currentSlideIndex === idx
                    ? 'bg-emerald-500 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {slide.cityShort}
              </button>
            ))}
          </div>

          <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400 flex items-center gap-2">
            <span>0{currentSlideIndex + 1}</span>
            <span className="w-8 h-[1px] bg-slate-700" />
            <span>06</span>
          </div>
        </div>

      </section>

      {/* ========================================================= */}
      {/* 2. LOCATION SUB-PAGE SYSTEM (SECTION A, B, C, D)          */}
      {/* ========================================================= */}
      <main id="location-subpage">
        
        {/* --------------------------------------------------------- */}
        {/* SECTION A: MEGA VISUAL CONNECTION & LOCAL IDENTITY       */}
        {/* --------------------------------------------------------- */}
        <section className="relative py-24 px-6 sm:px-12 border-t border-emerald-500/20 bg-gradient-to-b from-[#070b09] via-[#0a110e] to-[#070b09]">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Local Emotional Hook & Residential Belts */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-bold">
                    {activeSlide.badge}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-[1.1]">
                  {activeSlide.name} Balcony Safety
                </h2>

                {/* Emotional Local Hook (Telugu) */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/20 border-l-4 border-emerald-400 border-y border-r border-emerald-500/20">
                  <p className="text-emerald-300 font-medium text-base sm:text-lg italic leading-relaxed">
                    "{activeSlide.emotionHook}"
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeSlide.landmarkDesc} D-VIEW replaces traditional obstructive black iron bars with high-tensile 316-grade stainless steel cables, delivering 100% certified fall protection while preserving total architectural aesthetics.
                </p>

                {/* Target Localities Showcase */}
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold block mb-3">
                    Target Residential Corridors:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeSlide.activeBelts.map((belt, i) => (
                      <span 
                        key={i} 
                        className="bg-white/5 border border-white/10 hover:border-emerald-500/40 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 transition"
                      >
                        📍 {belt}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={() => handleOpenBooking(activeSlide.name)}
                    className="bg-emerald-500 hover:bg-emerald-400 text-black px-7 py-3 rounded-full text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.35)] transition cursor-pointer"
                  >
                    Book Free Site Survey in {activeSlide.name}
                  </button>
                  <button 
                    type="button"
                    onClick={() => scrollToId('estimate-calculator')}
                    className="border border-white/20 hover:border-emerald-400 text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 transition cursor-pointer"
                  >
                    Estimate Cost
                  </button>
                </div>

              </div>

              {/* Right Column: Architectural Photography Balcony Frame */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-[0_0_40px_rgba(0,0,0,0.8)] group">
                  <img 
                    src={activeSlide.heroImage} 
                    alt={`${activeSlide.name} interior balcony view invisible grills`} 
                    className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Vertical SS-316 Wires Simulation */}
                  <div 
                    className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_24px,rgba(255,255,255,0.15)_25px,rgba(255,255,255,0.04)_26px)] pointer-events-none" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold block">
                      Interior Perspective Standard
                    </span>
                    <p className="text-xs text-slate-200 mt-1">
                      Indoor floor, modern glass railing & floor-to-ceiling SS-316 vertical wires.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* SECTION B: THE COMPLETE PROBLEM-SOLVER GRID (IMAGE-FIRST) */}
        {/* --------------------------------------------------------- */}
        <section id="problem-solver" className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#070b09]">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold">
                REAL ARCHITECTURAL SOLUTIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white mt-2 tracking-tight">
                The 6-Card Problem-Solver Grid
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                Real high-rise balcony photography demonstrating certified SS-316 invisible wire engineering.
              </p>
            </div>

            {/* 6 Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROBLEM_SOLVERS.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div 
                    key={idx}
                    className="group rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/50 bg-[#0d1411]/70 backdrop-blur-md transition-all duration-300 flex flex-col hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                  >
                    {/* Architectural Balcony Image */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Wire simulation */}
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.12)_21px,rgba(255,255,255,0.02)_22px)] pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1411] via-[#0d1411]/30 to-transparent" />
                      
                      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md p-2.5 rounded-xl border border-emerald-500/30 text-emerald-400">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="absolute top-4 right-4 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                        {card.stat}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 block mb-1">
                          {card.tagline}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {card.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {card.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Certified SS-316
                        </span>
                        <span className="uppercase text-[10px] tracking-wider text-slate-400">
                          100% Reliable
                        </span>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Impact Tagline in Telugu */}
            <div className="mt-14 text-center p-6 rounded-2xl bg-white/5 border border-emerald-500/30 max-w-4xl mx-auto">
              <p className="text-emerald-300 font-semibold text-sm sm:text-base italic">
                "Okke Okka Balcony Installation... Enno High-Alert Safety Problems Nundi Mee Intiki Life-Time Premium Protection!"
              </p>
            </div>

          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* SECTION C: COASTAL WEATHER SHIELD & SS-316 METALLURGY     */}
        {/* --------------------------------------------------------- */}
        <section className="py-20 px-6 sm:px-12 border-t border-white/10 bg-gradient-to-b from-[#070b09] to-[#0d1411]">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold block">
                  TECHNICAL TRUST & METALLURGY
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                  Coastal Weather Shield: Marine Grade SS-316
                </h2>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Why cheap steel fails in Andhra Pradesh: coastal salt-air and river mists cause immediate pitting and corrosion on ordinary mild steel and cheap SS-202 cables within months.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/40 border border-white/10">
                    <Droplets className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase">The Problem: Environmental Corrosion</h4>
                      <p className="text-xs text-slate-300 mt-1">{activeSlide.weatherChallenge}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/40 border border-emerald-500/30">
                    <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-emerald-400 uppercase">The Material: Molybdenum-Infused SS-316</h4>
                      <p className="text-xs text-slate-300 mt-1">{activeSlide.weatherSolution}</p>
                    </div>
                  </div>
                </div>

                {/* Trust Guarantees */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                    <span className="text-xl sm:text-2xl font-black text-emerald-400 block">10 YEARS</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold block mt-0.5">
                      Anti-Rust Warranty
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="text-xl sm:text-2xl font-black text-white block">1 YEAR FREE</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold block mt-0.5">
                      Tension Inspection
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="text-xl sm:text-2xl font-black text-emerald-400 block">FREE GIFT</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold block mt-0.5">
                      Shine Spray & Cloth Kit
                    </span>
                  </div>
                </div>

              </div>

              {/* Maintenance Gift Kit Photo */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl">
                  <img 
                    src="/images/maintenance-kit.jpg" 
                    alt="D-VIEW SS-316 Care Kit and Shine Spray" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center gap-2 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                      Special Free Gift On Installation
                    </div>
                    <h4 className="text-lg font-bold text-white">SS-316 Maintenance Gift Kit</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      High-grade microfiber cloth and special SS shine spray to keep your cables looking pristine for decades.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* SECTION D: BALCONY ESTIMATE CALCULATOR & QR BOOKING       */}
        {/* --------------------------------------------------------- */}
        <section id="estimate-calculator" className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#070b09]">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold">
                TRANSPARENT PRICING
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white mt-2 tracking-tight">
                Balcony Estimate Calculator
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">
                Instant indicative investment calculation for {activeSlide.name}.
              </p>
            </div>

            <div className="bg-[#0e1613] border border-emerald-500/30 rounded-3xl p-6 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Sliders Column */}
              <div className="lg:col-span-7 space-y-7">
                
                {/* Width Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs uppercase font-bold text-slate-300 mb-2">
                    <span>Width (Feet)</span>
                    <span className="text-emerald-400 text-base font-black">{width} Feet</span>
                  </div>
                  <input 
                    type="range" 
                    min="4" 
                    max="35" 
                    value={width} 
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>4 ft</span>
                    <span>18 ft</span>
                    <span>35 ft</span>
                  </div>
                </div>

                {/* Height Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs uppercase font-bold text-slate-300 mb-2">
                    <span>Height (Feet)</span>
                    <span className="text-emerald-400 text-base font-black">{height} Feet</span>
                  </div>
                  <input 
                    type="range" 
                    min="3" 
                    max="14" 
                    value={height} 
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>3 ft</span>
                    <span>8 ft</span>
                    <span>14 ft</span>
                  </div>
                </div>

                {/* Cable Thickness Selector */}
                <div>
                  <label className="block text-xs uppercase font-bold text-slate-300 mb-2">
                    Wire Gauge Specification
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { val: '2.0', label: '2.0 mm Standard', desc: 'Standard Windows' },
                      { val: '2.5', label: '2.5 mm High-Tensile', desc: 'Most Popular' },
                      { val: '3.0', label: '3.0 mm Heavy Duty', desc: 'High Floors (G+15)' }
                    ].map(spec => (
                      <button
                        key={spec.val}
                        type="button"
                        onClick={() => setCableThickness(spec.val)}
                        className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
                          cableThickness === spec.val
                            ? 'bg-emerald-500/15 border-emerald-400 text-white'
                            : 'bg-black/40 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        <span className="text-xs font-bold block">{spec.label}</span>
                        <span className="text-[10px] text-emerald-400 block mt-0.5">{spec.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Estimate Summary Column */}
              <div className="lg:col-span-5 bg-[#080d0a] border border-white/10 rounded-2xl p-6 sm:p-8 text-center flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    Calculated Area
                  </span>
                  <div className="text-3xl font-black text-white mt-1 mb-4">
                    {calculatedArea} <span className="text-sm font-normal text-slate-400">sq.ft</span>
                  </div>

                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    Real-Time Estimated Total
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1 mb-2">
                    ₹{estimatedMin.toLocaleString()} - ₹{estimatedMax.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Includes SS-316 high-tension wires, anodized mounting tracks, laser installation & 10-year warranty.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  <button 
                    type="button"
                    onClick={() => handleOpenBooking()}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-4 rounded-xl text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.35)] transition cursor-pointer"
                  >
                    Book Free Site Measurement With This Quote →
                  </button>
                  <span className="text-[10px] text-emerald-400 block font-medium">
                    🎁 Includes Complimentary SS Shine Spray & Microfiber Kit!
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* FAQS SECTION                                              */}
        {/* --------------------------------------------------------- */}
        <section id="faq-section" className="py-20 px-6 sm:px-12 border-t border-white/10 bg-[#0a110e]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white mt-2">
                Architectural Safety Insights
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ========================================================= */}
      {/* WHATSAPP LEAD MODAL WITH DYNAMIC QR CODE                  */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#0d1411] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
            
            <button 
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-left mb-5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-bold block">
                Instant Concierge Booking
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white mt-1">
                Book Free Site Measurement
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Indicative Quote: ₹{estimatedMin.toLocaleString()} - ₹{estimatedMax.toLocaleString()} ({calculatedArea} sq.ft)
              </p>
            </div>

            <div className="space-y-3.5">
              <div>
                <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1">
                  Select Your City Hub
                </label>
                <select 
                  value={selectedHub}
                  onChange={(e) => setSelectedHub(e.target.value)}
                  className="w-full bg-black/60 border border-emerald-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                >
                  {CITIES_SLIDES.map(slide => (
                    <option key={slide.id} value={slide.name}>{slide.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1">
                  Your Full Name
                </label>
                <input 
                  type="text"
                  placeholder="e.g. Ramesh Varma"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-black/60 border border-emerald-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1">
                  Phone Number (For WhatsApp Confirmation)
                </label>
                <input 
                  type="tel"
                  placeholder="+91 94943 28999"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-black/60 border border-emerald-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              {/* Dynamic WhatsApp QR Code */}
              <div className="bg-black/90 border border-white/10 rounded-2xl p-4 text-center mt-3">
                <div className="w-32 h-32 mx-auto bg-white p-2 rounded-xl flex items-center justify-center">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://wa.me/919494328999?text=${getWhatsAppMessage()}`} 
                    alt="WhatsApp QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="block text-[11px] text-slate-400 mt-2">
                  Scan with camera to launch WhatsApp booking instantly
                </span>
              </div>

              <a 
                href={`https://wa.me/919494328999?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-3.5 rounded-xl text-xs font-black uppercase tracking-wider block text-center shadow-[0_0_20px_rgba(16,185,129,0.35)] mt-3 transition"
              >
                Send Details via WhatsApp Directly →
              </a>

            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. GLOBAL FOOTER (INVISPROTECT MINIMALISM)                */}
      {/* ========================================================= */}
      <footer className="border-t border-white/10 bg-[#050806] pt-16 pb-12 px-6 sm:px-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-bold tracking-widest text-sm uppercase">D-VIEW INVISIBLE SAFETY</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              India's premier architectural invisible grill specialist for modern luxury high-rises and private residences.
            </p>
            <div className="space-y-1.5 text-slate-300 text-[11px] pt-2">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" /> Call: +91 94943 28999
              </p>
              <p className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">WA:</span> WhatsApp: +91 94943 28999
              </p>
              <p className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">@:</span> contact@dviewsolutions.com
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-3">
              Collections
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#problem-solver" className="hover:text-emerald-400 transition">Balcony SS-316 Grills</a></li>
              <li><a href="#problem-solver" className="hover:text-emerald-400 transition">Window Safety Grills</a></li>
              <li><a href="#problem-solver" className="hover:text-emerald-400 transition">High-Rise Elevation Grills</a></li>
              <li><a href="#problem-solver" className="hover:text-emerald-400 transition">Pigeon Prevention Mesh</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-3">
              Tools & Standards
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#estimate-calculator" className="hover:text-emerald-400 transition">Instant Cost Estimator</a></li>
              <li><span className="text-slate-300">Virgin SS-316 Metallurgy</span></li>
              <li><span className="text-slate-300">10-Year Warranty Terms</span></li>
              <li><span className="text-slate-300">1-Year Free Tension Inspection</span></li>
              <li><span className="text-slate-300">Complimentary SS Shine Kit</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-3">
              Service Regions
            </h4>
            <ul className="space-y-2 text-[11px]">
              {CITIES_SLIDES.map((slide, idx) => (
                <li key={slide.id}>
                  <a 
                    href={slide.locationPath}
                    onClick={() => {
                      setCurrentSlideIndex(idx);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-emerald-400 transition flex items-center justify-between"
                  >
                    <span>{slide.name}</span>
                    <span className="text-[10px] text-slate-500">→</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-[10px] text-slate-500 mt-4 leading-normal">
              Doorstep laser measurement across all gated societies and high-rise apartments.
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} D-VIEW INVISIBLE SAFETY. All Rights Reserved. Architectural Safety Engineering.</p>
          <div className="flex gap-4">
            <span className="text-emerald-400 font-semibold">100% Invisible Grills</span>
            <span>•</span>
            <span>Zero Safety Nets</span>
            <span>•</span>
            <span>SS-316 Marine Grade</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
