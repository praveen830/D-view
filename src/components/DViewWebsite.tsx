import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Phone, CheckCircle2, ChevronRight, ChevronLeft, X, 
  Flame, Baby, Cat, HeartHandshake, Eye, Sparkles, QrCode, ArrowRight,
  Shield, Layers, Award, Droplets, Wind, Wrench
} from 'lucide-react';

// --- 6 LOCATIONS DATA (INVISPROTECT LUXURY STANDARD & TELUGU LOCAL HOOKS) ---
export interface LocationSlide {
  id: string;
  path: string;
  slug: string;
  name: string;
  cityShort: string;
  categoryTag: string;
  mainTitle: string;
  subtitle: string;
  buttonText: string;
  badge: string;
  emotionHook: string;
  landmarkDesc: string;
  heroImage: string;
  activeBelts: string[];
  weatherChallenge: string;
  weatherSolution: string;
  technicalHighlight: string;
}

export const CITIES_SLIDES: LocationSlide[] = [
  {
    id: 'vizag',
    path: 'vizag',
    slug: 'visakhapatnam',
    name: 'Visakhapatnam',
    cityShort: 'VIZAG',
    categoryTag: 'COASTAL ARCHITECTURAL SAFETY',
    mainTitle: 'THE INVISIBLE THRESHOLD — VIZAG',
    subtitle: 'Unblocked RK Beach & Kailasagiri Panoramas. 100% Fall Protection.',
    buttonText: '[ DISCOVER VIZAG ]',
    badge: 'Coastal Marine Line SS-316',
    emotionHook: 'Mana Vizag sea coast view invisible grills valla asalu block avvakunda entha luxury ga undo!',
    landmarkDesc: 'Penthouse glass balcony with vertical stainless-steel invisible grills overlooking RK Beach coastal waves & Kailasagiri horizon.',
    heroImage: '/images/visakhapatnam-hero.jpg',
    activeBelts: ['Madhurawada (27-Floor High-Rises)', 'Yendada', 'Rushikonda', 'PM Palem', 'Anandapuram', 'Pendurthi', 'Gajuwaka'],
    weatherChallenge: 'Continuous airborne salt chlorides and marine damp humidity rapidly rust ordinary wire rods.',
    weatherSolution: 'Molybdenum-infused SS-316 Marine Grade alloy impervious to salt corrosion with 10-Year Warranty.',
    technicalHighlight: 'Certified SS-316 Marine Grade with 2.5% Molybdenum content resistant to heavy coastal air.'
  },
  {
    id: 'rajahmundry',
    path: 'rajahmundry',
    slug: 'rajahmundry',
    name: 'Rajamahendravaram',
    cityShort: 'RAJAHMUNDRY',
    categoryTag: 'RIVERFRONT HERITAGE & LIVING',
    mainTitle: 'SAFEGUARDING GODAVARI PRIDE',
    subtitle: 'Preserve the fresh river breeze and arch bridge skyline with zero pigeon infestation.',
    buttonText: '[ DISCOVER RAJAHMUNDRY ]',
    badge: 'Godavari Riverfront Corridor',
    emotionHook: 'Pigeon problem lekunda, challani Godavari gaali & bridge view asalu aagakunda intiki 100% safety!',
    landmarkDesc: 'Luxury apartment balcony tiled floor, sleek railing, and floor-to-ceiling invisible steel wires framing the historic Godavari Arch Bridge and sunset water boats.',
    heroImage: '/images/rajahmundry-hero.jpg',
    activeBelts: ['Morampudi', 'Bommuru', 'Diwancheruvu', 'Lalacheruvu', 'Vemagiri', 'Danavaipeta', 'Kotilingala Ghat Road', 'Gadaala Residential Hubs'],
    weatherChallenge: 'High river mist humidity and aggressive pigeon colonies nesting on open balcony ledges.',
    weatherSolution: 'Precision 2-inch tensioned wire grid eliminating birds while preserving 99% river cross-breeze.',
    technicalHighlight: 'Zero-corrosion SS-316 wire barrier blocking birds 100% while allowing uninterrupted natural ventilation.'
  },
  {
    id: 'vijayawada',
    path: 'vijayawada',
    slug: 'vijayawada-amaravati',
    name: 'Vijayawada & Amaravati',
    cityShort: 'VIJAYAWADA',
    categoryTag: 'CAPITAL SKYLINE SAFETY',
    mainTitle: 'MODERN LIVING IN AMARAVATI',
    subtitle: 'High-rise elevation security for Amaravati HappyNest and riverside towers.',
    buttonText: '[ DISCOVER VIJAYAWADA ]',
    badge: 'Capital & Krishna Waterfront',
    emotionHook: 'Modern luxury high-rise look ki taggattu, iron bars cage lekunda uncompromised open balcony!',
    landmarkDesc: 'Modern skyscraper balcony framing Prakasam Barrage lights and Krishna River horizon through ultra-thin safety cables.',
    heroImage: '/images/vijayawada-hero.jpg',
    activeBelts: ['Benz Circle', 'Moghalrajpuram', 'Gunadala', 'Kanuru', 'Poranki', 'Amaravati HappyNest (G+18)', 'Tadepalli', 'Undavalli'],
    weatherChallenge: 'High thermal expansion from scorching summer heat and high-velocity wind shears above 15 floors.',
    weatherSolution: 'High-tensile multi-strand cables with tension-retention spring barrels preventing sagging under heat.',
    technicalHighlight: 'High-rise structural certified up to G+30 floors with 400kg tensile load capacity per strand.'
  },
  {
    id: 'guntur',
    path: 'guntur',
    slug: 'guntur',
    name: 'Guntur',
    cityShort: 'GUNTUR',
    categoryTag: 'HIGH-RISE STRUCTURAL LIVING',
    mainTitle: 'GUARDIAN OF GUNTUR',
    subtitle: 'Say goodbye to dark cage iron grills. Uncompromised daylight and fall safety.',
    buttonText: '[ DISCOVER GUNTUR ]',
    badge: 'Kondaveedu Horizons Belt',
    emotionHook: 'Kondaveedu hill breeze intloki vasthundi, pillalu unna elevations bayam lekunda safe setup!',
    landmarkDesc: 'Expansive terrace balcony framing Kondaveedu Fort ridge and Guntur city horizon through high-tensile invisible wires.',
    heroImage: '/images/guntur-hero.jpg',
    activeBelts: ['Brodipet', 'Arundelpet', 'Amaravati Road', 'Namburu', 'Kaza & Tadepalli Growth Corridor', 'Gorantla'],
    weatherChallenge: 'Heavy dry winds carrying airborne particulate dust that tarnishes and scratches conventional railings.',
    weatherSolution: 'Electro-polished nylon-12 coated SS-316 cables with anti-static dust-shedding surface.',
    technicalHighlight: 'Seamless architectural integration for new high-density gated townships along Amaravati Road.'
  },
  {
    id: 'kakinada',
    path: 'kakinada',
    slug: 'kakinada',
    name: 'Kakinada',
    cityShort: 'KAKINADA',
    categoryTag: 'MARINE GRADE SS-316 CORRIDOR',
    mainTitle: "KAKINADA'S COASTAL SHIELD",
    subtitle: 'Permanent rust immunity against salty sea breezes.',
    buttonText: '[ DISCOVER KAKINADA ]',
    badge: 'Deepwater Port & Coastal Corridor',
    emotionHook: 'Uppu gaali thupattu pattakunda, high-grade Marine wire security tho lifetime durability!',
    landmarkDesc: 'Coastal apartment balcony framing Vakalapudi Lighthouse and palm shoreline with marine-grade SS-316 stainless-steel wires.',
    heroImage: '/images/kakinada-hero.jpg',
    activeBelts: ['Sarpavaram', 'Madhavapatnam', 'Ramanayyapeta', 'Vakalapudi', 'Jagannaickpur', 'Bhanugudi Junction'],
    weatherChallenge: 'Intense industrial port air combined with coastal salt fog inducing chemical pitting.',
    weatherSolution: 'Marine Grade SS-316 structural alloy anchored with isolated nylon gaskets to prevent contact electrolysis.',
    technicalHighlight: 'Tested against ASTM B117 salt spray standards for exceeding 1000 hours without rust inception.'
  },
  {
    id: 'nellore',
    path: 'nellore',
    slug: 'nellore',
    name: 'Nellore',
    cityShort: 'NELLORE',
    categoryTag: 'RIVER BARRAGE TRANQUILITY',
    mainTitle: 'TRANQUILITY & TRUST — NELLORE',
    subtitle: 'Safe haven for children and elders on high-elevation balconies.',
    buttonText: '[ DISCOVER NELLORE ]',
    badge: 'Penna Riverfront Horizon',
    emotionHook: 'Pedda vallu, pillalu unna balcony lo nilabadataniki absolute strong and safe support!',
    landmarkDesc: 'Sunset over Nellore Barrage and Penna River viewed through vertical safety wire barriers.',
    heroImage: '/images/nellore-hero.jpg',
    activeBelts: ['Magunta Layout', 'Balaji Nagar', 'Dargamitta', 'Vedayapalem', 'Podalakur Road', 'Kavali Road', 'Haranathapuram'],
    weatherChallenge: 'River-basin moisture cycles combined with strong seasonal monsoonal winds.',
    weatherSolution: 'Precision aluminum track tensioners locked into structural concrete columns.',
    technicalHighlight: 'Child-proof and senior vertigo relief with anchored horizontal bracing at 3-foot railing heights.'
  }
];

// --- 6-CARD PROBLEM SOLVER GRID (ARCHITECTURAL IMAGE-FIRST) ---
export const PROBLEM_SOLVERS = [
  {
    icon: Baby,
    title: "Children's Safety",
    tagline: 'Anti-Fall Certified Lockdown',
    desc: 'High-rise balcony railings with anti-fall certified lockdown coverage. 2-inch strict spacing prevents head entrapment and accidental climbing slips.',
    image: '/images/child-safety-balcony.jpg',
    stat: '400 KG / Cable'
  },
  {
    icon: Cat,
    title: 'Pets Safety',
    tagline: 'Zero-Gap Paw Architecture',
    desc: 'Cats & dogs zero-gap barrier preventing accidental slips. Smooth nylon-sheathed wires protect paws from pinches or cuts.',
    image: '/images/pet-safety.jpg',
    stat: 'Zero Gap Spacing'
  },
  {
    icon: HeartHandshake,
    title: 'Old Age Persons Safety',
    tagline: 'Vertigo & Tension Elimination',
    desc: 'Firm structural support eliminating height dizziness & vertigo fears. Solid visual boundary lets elderly family members enjoy fresh air safely.',
    image: '/images/project-penthouse.jpg',
    stat: '100% Rigid Anchoring'
  },
  {
    icon: Eye,
    title: 'Pigeon & Birds Safety',
    tagline: '100% Droppings Protection',
    desc: '100% droppings protection while retaining 99% sea breeze and ventilation. Zero nests, zero bird ticks, zero foul odors without dark netting.',
    image: '/images/rajahmundry-hero.jpg',
    stat: 'Zero Pigeons'
  },
  {
    icon: Flame,
    title: '1-Minute Emergency Fire Escape',
    tagline: 'Life-Saving Egress Speed',
    desc: 'Unlike traditional welded iron cages that trap families during high-rise fires, SS-316 wires can be severed in 60 seconds with standard emergency wire cutters.',
    image: '/images/wire-engineering.jpg',
    stat: '60 Sec Escape'
  },
  {
    icon: Sparkles,
    title: 'Modern Luxury Look & Free Air',
    tagline: 'Eliminates Ugly Iron Bars',
    desc: 'Eliminates ugly black iron bars. Enhances sunlight, architectural facade, and property resale value while retaining 99% natural breeze.',
    image: '/images/visakhapatnam-hero.jpg',
    stat: '99% Transparency'
  }
];

interface DViewWebsiteProps {
  initialCitySlug?: string;
  isSubPageDirect?: boolean;
}

export default function DViewWebsite({ initialCitySlug, isSubPageDirect = false }: DViewWebsiteProps) {
  // Find index matching initialCitySlug (handles 'vizag', 'visakhapatnam', 'rajahmundry', etc.)
  const getIndexFromSlug = (slug?: string) => {
    if (!slug) return 0;
    const clean = slug.toLowerCase();
    const idx = CITIES_SLIDES.findIndex(
      s => s.path === clean || s.slug === clean || s.id === clean || clean.includes(s.id)
    );
    return idx >= 0 ? idx : 0;
  };

  const [currentSlideIndex, setCurrentSlideIndex] = useState(getIndexFromSlug(initialCitySlug));
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  // Synchronize if initialCitySlug changes
  useEffect(() => {
    if (initialCitySlug) {
      setCurrentSlideIndex(getIndexFromSlug(initialCitySlug));
    }
  }, [initialCitySlug]);

  const activeSlide = CITIES_SLIDES[currentSlideIndex];

  // Calculator State
  const [width, setWidth] = useState(12);
  const [height, setHeight] = useState(8);
  const [cableThickness, setCableThickness] = useState('2.5');

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [selectedHub, setSelectedHub] = useState(activeSlide.name);

  // Pricing formula
  const calculatedArea = width * height;
  const ratePerSqFt = cableThickness === '2.0' ? 140 : cableThickness === '2.5' ? 165 : 190;
  const estimatedMin = calculatedArea * ratePerSqFt;
  const estimatedMax = Math.round(estimatedMin * 1.15);

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? CITIES_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === CITIES_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const handleOpenBooking = (hubName?: string) => {
    setSelectedHub(hubName || activeSlide.name);
    setIsModalOpen(true);
  };

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello D-View Invisible Safety!\n` +
      `I would like to book a Free Site Survey & Laser Measurement.\n\n` +
      `📍 Location Hub: ${selectedHub}\n` +
      `📐 Opening Area: ${calculatedArea} sq.ft (${width} ft x ${height} ft)\n` +
      `🛡️ Wire Spec: SS-316 Marine Grade (${cableThickness} mm)\n` +
      `💰 Indicative Estimate: ₹${estimatedMin.toLocaleString()} - ₹${estimatedMax.toLocaleString()}\n` +
      `👤 Client Name: ${customerName || 'Resident'}\n` +
      `📞 Contact: ${customerPhone || 'Via WhatsApp'}`
    );
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070b09] text-[#f1f5f9] font-sans antialiased selection:bg-emerald-500 selection:text-black">
      
      {/* ========================================================= */}
      {/* 4. CONCISE LUXURY NAVBAR (MINIMAL BRAND, SINGLE DROPDOWN) */}
      {/* ========================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#070b09]/80 backdrop-blur-xl border-b border-white/10 px-6 sm:px-12 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Minimal Brand Mark: "D-VIEW INVISIBLE SAFETY" */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 p-[1px] shadow-[0_0_20px_rgba(16,185,129,0.35)] transition transform group-hover:scale-105">
              <div className="w-full h-full bg-[#070b09] rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-400 stroke-[2.2]" />
              </div>
            </div>
            <div>
              <span className="text-base sm:text-lg font-black tracking-[0.18em] text-white block">
                D-VIEW
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-emerald-400 font-semibold block">
                INVISIBLE SAFETY
              </span>
            </div>
          </a>

          {/* Navigation Links: Single Solutions dropdown, Estimate Calculator, Call Concierge */}
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
                    <span className="font-bold text-white block">Window Invisible Grills</span>
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
                  <a 
                    href="#problem-solver"
                    onClick={() => setSolutionsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-xl text-[11px] hover:bg-emerald-500/10 hover:text-emerald-400 transition"
                  >
                    <span className="font-bold text-white block">Pigeon Barrier Grills</span>
                    <span className="text-slate-400 text-[10px]">100% droppings protection</span>
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

            <a 
              href="tel:+919494328999" 
              className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call Concierge: +91 94943 28999</span>
            </a>
          </nav>

          {/* Action CTA Button */}
          <button 
            type="button"
            onClick={() => handleOpenBooking()}
            className="bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-2.5 rounded-full text-[11px] uppercase tracking-wider font-extrabold shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all transform hover:scale-[1.03] cursor-pointer"
          >
            Book Free Site Survey
          </button>

        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. MAIN DASHBOARD: 6-LOCATION 100vh CINEMATIC SLIDER      */}
      {/* ========================================================= */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Architectural Photography Backgrounds with Cross-Fade */}
        {CITIES_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image: Strictly Balcony floor, railings, and city vista */}
            <div 
              className="w-full h-full bg-cover bg-center transform scale-105 transition-transform duration-10000"
              style={{ backgroundImage: `url(${slide.heroImage})` }}
            />

            {/* Floor-to-Ceiling Vertical Stainless-Steel Invisible Wire Lines Simulation */}
            <div 
              className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_26px,rgba(255,255,255,0.14)_27px,rgba(255,255,255,0.03)_28px)] pointer-events-none" 
              aria-hidden="true"
            />

            {/* Top & Bottom Balcony Tension Track Shadows (giving true luxury balcony interior perspective) */}
            <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#070b09] via-[#070b09]/80 to-transparent pointer-events-none" />
            
            {/* Center Subtle Cinematic Vignette */}
            <div className="absolute inset-0 bg-radial-vignette from-transparent via-black/35 to-black/75 pointer-events-none" />
          </div>
        ))}

        {/* Center Overlay Typography (Invisprotect Minimalist Luxury Styling) */}
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

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-200/90 font-light tracking-wide max-w-2xl mb-8 leading-relaxed">
            {activeSlide.subtitle}
          </p>

          {/* Minimal Outline Pill Button: [ DISCOVER {CITY} ] */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`/${activeSlide.path}`}
              onClick={(e) => {
                // If on single page mode or wants to scroll down, smoothly scroll to sub-page
                if (isSubPageDirect) {
                  scrollToId('location-subpage');
                }
              }}
              className="border border-white/50 hover:border-emerald-400 text-white hover:text-emerald-300 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.25em] bg-black/30 backdrop-blur-md transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              {activeSlide.buttonText}
            </a>

            <button
              type="button"
              onClick={() => handleOpenBooking(activeSlide.name)}
              className="bg-emerald-500/90 hover:bg-emerald-400 text-black px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] shadow-[0_0_25px_rgba(16,185,129,0.35)] transition cursor-pointer"
            >
              Free Site Survey →
            </button>
          </div>

        </div>

        {/* Cinematic Arrow Navigation (Prev / Next) */}
        <button
          type="button"
          onClick={handlePrevSlide}
          aria-label="Previous City"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white hover:text-emerald-400 hover:border-emerald-400/60 flex items-center justify-center transition cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
        </button>

        <button
          type="button"
          onClick={handleNextSlide}
          aria-label="Next City"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white hover:text-emerald-400 hover:border-emerald-400/60 flex items-center justify-center transition cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 stroke-[1.5]" />
        </button>

        {/* Bottom City Selector Dock (100vh Slider Switcher) */}
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
      {/* 3. LOCATION SUB-PAGE STRUCTURE                            */}
      {/* ========================================================= */}
      <div id="location-subpage">
        
        {/* 1. HERO SECTION: Full-Bleed Balcony Photo with Sea/River/City Horizon */}
        <section className="relative py-24 px-6 sm:px-12 border-t border-emerald-500/20 bg-gradient-to-b from-[#070b09] via-[#0a110e] to-[#070b09]">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Local Emotional Hook & Corridors */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-bold">
                    {activeSlide.badge}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-[1.1]">
                  {activeSlide.name} Architectural Safety
                </h2>

                {/* Local Telugu Emotional Hook */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/20 border-l-4 border-emerald-400 border-y border-r border-emerald-500/20">
                  <p className="text-emerald-300 font-medium text-base sm:text-lg italic leading-relaxed">
                    "{activeSlide.emotionHook}"
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeSlide.landmarkDesc} D-VIEW invisible grills replace dark, obstructive iron cages with high-tensile 316-grade stainless steel cables, delivering 100% certified fall prevention with zero view obstruction.
                </p>

                {/* Active High-Rise Corridors */}
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold block mb-3">
                    Active High-Rise Residential Corridors:
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

                {/* Quick Actions */}
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
                    Check Pricing
                  </button>
                </div>

              </div>

              {/* Right Column: Architectural Balcony Photography Frame */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-[0_0_40px_rgba(0,0,0,0.8)] group">
                  <img 
                    src={activeSlide.heroImage} 
                    alt={`${activeSlide.name} invisible safety grills balcony`} 
                    className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Vertical Wires Simulation */}
                  <div 
                    className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_24px,rgba(255,255,255,0.15)_25px,rgba(255,255,255,0.04)_26px)] pointer-events-none" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md border border-white/10 p-3.5 rounded-2xl">
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold block">
                      Interior Perspective Proof
                    </span>
                    <p className="text-xs text-slate-200 mt-0.5">
                      Balcony floor, railing & vertical wires framing {activeSlide.name} skyline.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 2. THE COMPLETE 6-CARD PROBLEM-SOLVER GRID (IMAGE-FIRST) */}
        <section id="problem-solver" className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#070b09]">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold">
                100% INVISIBLE GRILLS ONLY • ZERO NETTING
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white mt-2 tracking-tight">
                The 6-Point Balcony Problem Solver
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                Architectural photography demonstrating real-world apartment installations with floor-to-ceiling high-tensile safety wires.
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
                      {/* Wire simulation on card image */}
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
                          High-Rise Rated
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

        {/* 3. LOCAL WEATHER & SS-316 TECHNICAL GUIDE */}
        <section className="py-20 px-6 sm:px-12 border-t border-white/10 bg-gradient-to-b from-[#070b09] to-[#0d1411]">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold block">
                  Metallurgical Integrity
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                  Local Weather Shield: Marine Grade SS-316
                </h2>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Why cheap steel fails in Andhra Pradesh: coastal salt winds and humid river mists cause immediate pitting and rust in generic mild steel and low-grade SS-202 wire cables.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/40 border border-white/10">
                    <Droplets className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase">Atmospheric Challenge ({activeSlide.name})</h4>
                      <p className="text-xs text-slate-300 mt-1">{activeSlide.weatherChallenge}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/40 border border-emerald-500/30">
                    <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-emerald-400 uppercase">D-VIEW Engineering Solution</h4>
                      <p className="text-xs text-slate-300 mt-1">{activeSlide.weatherSolution}</p>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400 block">10 YEARS</span>
                    <span className="text-[11px] uppercase tracking-wider text-slate-300 font-semibold block mt-0.5">
                      Anti-Rust Warranty
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="text-2xl sm:text-3xl font-black text-white block">FREE GIFT</span>
                    <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block mt-0.5">
                      Shine Spray & Microfiber Kit
                    </span>
                  </div>
                </div>

              </div>

              {/* Gift Kit & Engineering Photo */}
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
                      Complimentary With Every Site Installation
                    </div>
                    <h4 className="text-lg font-bold text-white">SS-316 Maintenance Gift Kit</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Professional anti-static spray & premium microfiber cloth ensures lifetime mirror luster.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 4. ESTIMATE CALCULATOR */}
        <section id="estimate-calculator" className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#070b09]">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold">
                Transparent Pricing
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white mt-2 tracking-tight">
                Estimate Your Balcony Investment
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">
                Adjust width, height, and cable gauge for an instant indicative estimate for {activeSlide.name}.
              </p>
            </div>

            <div className="bg-[#0e1613] border border-emerald-500/30 rounded-3xl p-6 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Sliders Column */}
              <div className="lg:col-span-7 space-y-7">
                
                {/* Width Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs uppercase font-bold text-slate-300 mb-2">
                    <span>Opening Width (Span)</span>
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
                    <span>Opening Height (Floor to Ceiling)</span>
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
                    SS-316 Cable Specification
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { val: '2.0', label: '2.0 mm Standard', desc: 'Light & Windows' },
                      { val: '2.5', label: '2.5 mm High-Tensile', desc: 'Most Popular' },
                      { val: '3.0', label: '3.0 mm Heavy-Duty', desc: 'High Floors (G+15)' }
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

              {/* Result Column */}
              <div className="lg:col-span-5 bg-[#080d0a] border border-white/10 rounded-2xl p-6 sm:p-8 text-center flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    Calculated Area
                  </span>
                  <div className="text-3xl font-black text-white mt-1 mb-4">
                    {calculatedArea} <span className="text-sm font-normal text-slate-400">sq.ft</span>
                  </div>

                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    Estimated Investment Range
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1 mb-2">
                    ₹{estimatedMin.toLocaleString()} - ₹{estimatedMax.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Includes certified SS-316 high-tension cables, anodized aluminum tracks, precision laser installation & 10-year warranty.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  <button 
                    type="button"
                    onClick={() => handleOpenBooking()}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-4 rounded-xl text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.35)] transition cursor-pointer"
                  >
                    Book Free Site Measurement →
                  </button>
                  <span className="text-[10px] text-emerald-400 block font-medium">
                    🎁 Includes Complimentary SS Shine Spray & Microfiber Kit!
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>

      {/* ========================================================= */}
      {/* WHATSAPP BOOKING MODAL WITH DYNAMIC QR CODE               */}
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
                  Your Name
                </label>
                <input 
                  type="text"
                  placeholder="e.g. Anand Varma"
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
                  Scan with your phone camera to launch WhatsApp booking instantly
                </span>
              </div>

              <a 
                href={`https://wa.me/919494328999?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-3.5 rounded-xl text-xs font-black uppercase tracking-wider block text-center shadow-[0_0_20px_rgba(16,185,129,0.35)] mt-3 transition"
              >
                Launch WhatsApp Chat Directly →
              </a>

            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 4. CONCISE LUXURY EDITORIAL FOOTER                        */}
      {/* ========================================================= */}
      <footer className="border-t border-white/10 bg-[#050806] pt-16 pb-12 px-6 sm:px-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-bold tracking-widest text-sm uppercase">D-VIEW INVISIBLE SAFETY</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Andhra Pradesh's premier architectural invisible safety grill specialist. Certified SS-316 high-tensile engineering for luxury high-rises and private balconies.
            </p>
            <div className="space-y-1.5 text-slate-300 text-[11px] pt-2">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" /> Call: +91 94943 28999
              </p>
              <p className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">WA:</span> WhatsApp: +91 94943 28999
              </p>
              <p className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">@:</span> invisiblesafety4@gmail.com
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-3">
              Collections
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#problem-solver" className="hover:text-emerald-400 transition">Balcony SS-316 Invisible Grills</a></li>
              <li><a href="#problem-solver" className="hover:text-emerald-400 transition">Window Safety Invisible Grills</a></li>
              <li><a href="#problem-solver" className="hover:text-emerald-400 transition">High-Rise Elevation Structural Grills</a></li>
              <li><a href="#problem-solver" className="hover:text-emerald-400 transition">Pigeon & Bird Exclusion Grid</a></li>
              <li><a href="#problem-solver" className="hover:text-emerald-400 transition">Pet & Children Safe Balconies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-3">
              Tools & Standards
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#estimate-calculator" className="hover:text-emerald-400 transition">Live Price Estimator</a></li>
              <li><span className="text-slate-300">Virgin SS-316 Marine Grade Alloy</span></li>
              <li><span className="text-slate-300">10-Year Anti-Rust Warranty</span></li>
              <li><span className="text-slate-300">60-Sec Fire Escape Compliance</span></li>
              <li><span className="text-slate-300">Complimentary SS Shine Spray Gift</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-3">
              Service Regions (AP)
            </h4>
            <ul className="space-y-2 text-[11px]">
              {CITIES_SLIDES.map((slide, idx) => (
                <li key={slide.id}>
                  <a 
                    href={`/${slide.path}`}
                    onClick={(e) => {
                      setCurrentSlideIndex(idx);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-emerald-400 transition flex items-center justify-between"
                  >
                    <span>{slide.name} Hub</span>
                    <span className="text-[10px] text-slate-500">→</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-[10px] text-slate-500 mt-4 leading-normal">
              Free doorstep laser measurement across all high-rise gated societies.
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} D-VIEW INVISIBLE SAFETY. All Rights Reserved. Luxury Balcony Engineering.</p>
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
