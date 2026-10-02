import React, { useState } from 'react';
import { 
  ShieldCheck, Phone, CheckCircle2, ChevronRight, X, 
  Flame, Baby, Cat, HeartHandshake, Eye, Sparkles, QrCode
} from 'lucide-react';

// --- 6 LOCATIONS DATA (MATCHING EXACT RAJAHMUNDRY REFERENCE STYLE) ---
export const LOCATIONS = [
  {
    id: 'vizag',
    slug: 'vizag',
    name: 'Visakhapatnam',
    badge: 'Coastal Marine Line',
    headline: 'UNBLOCKED VIZAG VIEWS, 101% BREATHTAKING & SECURE',
    emotionHook: "Mana Vizag sea coast view invisible grills valla asalu block avvakunda entha luxury ga undo!",
    landmarkDesc: 'RK Beach & Kailasagiri Ocean Vista framed through SS-316 Invisible Grills',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85',
    activeBelts: ['Madhurawada (27-Floor High-Rises)', 'Yendada', 'Rushikonda', 'PM Palem', 'Anandapuram', 'Pendurthi', 'Gajuwaka'],
    weatherChallenge: 'Continuous coastal salt-air and marine damp humidity rapidly rust ordinary wire rods.',
    weatherSolution: 'Strictly Marine Grade SS-316 structural cables with 10-Year Rust Guarantee.'
  },
  {
    id: 'rajahmundry',
    slug: 'rajahmundry',
    name: 'Rajamahendravaram',
    badge: 'Godavari Riverfront',
    headline: 'SAFEGUARDING THE RIVER VIEW: GODAVARI ARCH BRIDGE',
    emotionHook: "Pigeon problem lekunda, challani Godavari gaali & bridge view asalu aagakunda intiki 100% safety!",
    landmarkDesc: 'Historic Godavari Arch Bridge & river skyline framed via vertical safety wires',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85',
    activeBelts: ['Morampudi', 'Bommuru', 'Diwancheruvu', 'Lalacheruvu', 'Vemagiri', 'Gadaala Residential Hubs'],
    weatherChallenge: 'High river humidity and heavy pigeon colonies nesting on open balcony ledges.',
    weatherSolution: 'Zero-corrosion SS-316 wire barrier blocking birds 100% while allowing free breeze.'
  },
  {
    id: 'vijayawada',
    slug: 'vijayawada-amaravati',
    name: 'Vijayawada & Amaravati',
    badge: 'Capital & Krishna Waterfront',
    headline: 'MODERN LIVING IN AMARAVATI: KRISHNA RIVER PRIDE',
    emotionHook: "Modern luxury high-rise look ki taggattu, iron bars cage lekunda uncompromised open balcony!",
    landmarkDesc: 'Prakasam Barrage skyline & Amaravati HappyNest high-rise balcony elevations',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    activeBelts: ['Benz Circle', 'Moghalrajpuram', 'Gunadala', 'Kanuru', 'Poranki', 'Amaravati HappyNest (G+18)', 'Tadepalli'],
    weatherChallenge: 'Extreme summer heat requiring 100% unobstructed cross-ventilation for high floors.',
    weatherSolution: 'Ultra-thin high-tensile cables allowing maximum airflow with child-safe load resistance.'
  },
  {
    id: 'guntur',
    slug: 'guntur',
    name: 'Guntur',
    badge: 'Heritage & Urban Growth',
    headline: 'GUARDIAN OF GUNTUR: KONDAVEEDU FORT & HORIZONS',
    emotionHook: "Kondaveedu hill breeze intloki vasthundi, pillalu unna elevations bayam lekunda safe setup!",
    landmarkDesc: 'Panoramic city vista & hill silhouettes safely framed without visual block',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
    activeBelts: ['Brodipet', 'Arundelpet', 'Amaravati Road', 'Namburu', 'Kaza & Tadepalli Growth Corridor (900+ Projects)'],
    weatherChallenge: 'Dust accumulation and heavy winds on modern open apartment balconies.',
    weatherSolution: 'Smooth anti-static coated SS-316 cables, easily cleaned with our complimentary kit.'
  },
  {
    id: 'kakinada',
    slug: 'kakinada',
    name: 'Kakinada',
    badge: 'Smart Port Corridor',
    headline: "KAKINADA'S COASTAL CHARM: VAKALAPUDI LIGHTHOUSE",
    emotionHook: "Uppu gaali thupattu pattakunda, high-grade Marine wire security tho lifetime durability!",
    landmarkDesc: 'Vakalapudi coastal line & coconut palm views framed in architectural safety',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85',
    activeBelts: ['Sarpavaram', 'Madhavapatnam', 'Ramanayyapeta', 'Vakalapudi', 'Jagannaickpur'],
    weatherChallenge: 'Heavy sea-salt spray and chemical port atmosphere damaging mild steel components.',
    weatherSolution: 'Molybdenum-reinforced SS-316 high-tension wires offering zero corrosion.'
  },
  {
    id: 'nellore',
    slug: 'nellore',
    name: 'Nellore',
    badge: 'Penna River Corridor',
    headline: 'TRANQUILITY & TRUST: NELLORE BARRAGE & PENNA RIVER',
    emotionHook: "Pedda vallu, pillalu unna balcony lo nilabadataniki absolute strong and safe support!",
    landmarkDesc: 'Penna River sunset & Barrage view framed in high-tension safety cables',
    heroImage: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=2000&q=85',
    activeBelts: ['Magunta Layout', 'Balaji Nagar', 'Dargamitta', 'Vedayapalem', 'Podalakur Road', 'Kavali Road'],
    weatherChallenge: 'River-basin moisture cycles loosening weak wire fixtures.',
    weatherSolution: 'Precision aluminum track tensioners locked with high-tensile core cables.'
  }
];

// --- 6 PROBLEM-SOLVER PILLARS (IMAGE-FIRST) ---
export const PROBLEM_SOLVERS = [
  {
    icon: Baby,
    title: "Children's Safety",
    tagline: 'High-Rise Balcony Lockdown',
    desc: 'Chinna pillalu unna elevations bayam lekunda safe coverage. Zero fall-risk up to 30th floors.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: Cat,
    title: 'Pets Safety',
    tagline: 'Zero Gap Architecture',
    desc: 'Cats leda dogs small space gaps nundi kindhaki slip avvakunda absolute zero-gap vertical wire spacing.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: HeartHandshake,
    title: 'Old Age Persons Safety',
    tagline: 'Vertigo & Tension Free',
    desc: 'Pedda vallu loose railings or heights valla tension padakunda solid, rigid anchoring support.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: Eye,
    title: 'Pigeon & Birds Control',
    tagline: '100% Mess-Free Balconies',
    desc: 'Dirty maintenance & foul smell lekunda birds control without blocking sunlight or ventilation.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: Flame,
    title: '1-Min Emergency Fire Escape',
    tagline: 'Life-Saving Advantage',
    desc: 'Traditional iron cages trap families during fire. Mana SS wires standard cutter tho 60 secs lo easy escape!',
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: Sparkles,
    title: 'Modern Luxury & Free Air',
    tagline: '99% View Transparency',
    desc: 'Black iron bars pathadi aipoindi. Full lighting & natural air flow to premium apartment architectural look.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
  }
];

interface DViewWebsiteProps {
  initialCitySlug?: string;
}

export default function DViewWebsite({ initialCitySlug }: DViewWebsiteProps) {
  const initialIndex = initialCitySlug 
    ? Math.max(0, LOCATIONS.findIndex(l => l.slug === initialCitySlug || l.id === initialCitySlug))
    : 0;

  const [selectedCityIndex, setSelectedCityIndex] = useState(initialIndex);
  const [showSubPage, setShowSubPage] = useState(false);
  
  // Calculator States
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(8);
  const [cableThickness, setCableThickness] = useState('2.5');
  
  // Lead / Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[initialIndex].name);

  const activeCity = LOCATIONS[selectedCityIndex];
  const calculatedArea = width * height;
  const rateMultiplier = cableThickness === '2.0' ? 140 : cableThickness === '2.5' ? 165 : 190;
  const minEstimate = calculatedArea * rateMultiplier;
  const maxEstimate = minEstimate + calculatedArea * 25;

  const handleOpenBooking = () => {
    setSelectedLocation(activeCity.name);
    setIsModalOpen(true);
  };

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello D-View Solutions! I want to book a Free Site Measurement for Invisible Grills.\n` +
      `Location: ${selectedLocation}\n` +
      `Estimated Area: ${calculatedArea} sq.ft (${width}ft x ${height}ft)\n` +
      `Cable Spec: SS-316 ${cableThickness} mm\n` +
      `Estimated Range: ₹${minEstimate.toLocaleString()} - ₹${maxEstimate.toLocaleString()}\n` +
      `Name: ${customerName || 'Customer'}\nPhone: ${customerPhone || 'Not provided'}`
    );
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090d0b] text-[#f1f5f9] font-sans antialiased selection:bg-emerald-500 selection:text-black">
      
      {/* --- MINIMAL LUXURY NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#090d0b]/85 backdrop-blur-md border-b border-emerald-500/15 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setShowSubPage(false)}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            <ShieldCheck className="w-6 h-6 text-black stroke-[2.5]" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-wider text-white">D-VIEW</span>
            <span className="block text-[9px] uppercase tracking-[0.25em] text-emerald-400 font-semibold">Balcony Safety Engineering</span>
          </div>
        </div>

        {/* SINGLE SOLUTION & REFINED LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
          <button 
            type="button"
            onClick={() => {
              setShowSubPage(true);
              scrollToSection('corridors-section');
            }} 
            className="hover:text-emerald-400 transition flex items-center gap-1 cursor-pointer"
          >
            Solutions <ChevronRight className="w-3.5 h-3.5 rotate-90 text-emerald-400" />
          </button>
          <a href="#estimate-calculator" className="hover:text-emerald-400 transition">Estimate Calculator</a>
          <a href="#problem-solver" className="hover:text-emerald-400 transition">Visual Proof</a>
          <a href="#footer-regions" className="hover:text-emerald-400 transition">Hubs</a>
          <a href="tel:+919494328999" className="text-emerald-400 flex items-center gap-1.5 hover:underline">
            <Phone className="w-3.5 h-3.5" /> +91 94943 28999
          </a>
        </div>

        <button 
          type="button"
          onClick={handleOpenBooking}
          className="bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all transform hover:scale-[1.03] cursor-pointer"
        >
          Book Free Site Visit
        </button>
      </nav>

      {/* --- DASHBOARD / 100vh FULL-SCREEN HERO SLIDER --- */}
      <section className="relative w-full h-screen overflow-hidden flex items-end pb-16 px-6 md:px-16 pt-24">
        {/* Background Image with Balcony Perspective */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out transform scale-105"
          style={{ backgroundImage: `url(${activeCity.heroImage})` }}
        >
          {/* Invisible Grills Simulation Vertical Lines Overlay */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_28px,rgba(255,255,255,0.08)_29px,rgba(255,255,255,0.08)_30px)] pointer-events-none" />
          {/* Subtle Balcony Shadow / Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d0b] via-[#090d0b]/40 to-black/30" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {activeCity.badge}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase leading-[1.1] mb-3 drop-shadow-md">
            {activeCity.headline}
          </h1>

          <p className="text-emerald-300 font-medium text-base sm:text-lg mb-2 italic">
            "{activeCity.emotionHook}"
          </p>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-6">
            {activeCity.landmarkDesc}. 100% Rust-Free SS-316 Marine Grade Invisible Grills with uncompromised ventilation.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button 
              type="button"
              onClick={() => {
                setShowSubPage(true);
                scrollToSection('corridors-section');
              }}
              className="bg-emerald-500 hover:bg-emerald-400 text-black px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition cursor-pointer"
            >
              Explore {activeCity.name} Hub & Coverage <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
            <button 
              type="button"
              onClick={handleOpenBooking}
              className="border border-white/20 hover:border-emerald-400/50 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition cursor-pointer"
            >
              Schedule Laser Measurement
            </button>
          </div>
        </div>

        {/* 6 CITY THUMBNAIL SWITCHER DOCK (BOTTOM-RIGHT) */}
        <div className="hidden lg:flex absolute bottom-8 right-8 z-20 bg-black/60 backdrop-blur-xl border border-white/10 p-2 rounded-2xl gap-2">
          {LOCATIONS.map((loc, idx) => (
            <button
              key={loc.id}
              type="button"
              onClick={() => setSelectedCityIndex(idx)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                selectedCityIndex === idx 
                  ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {loc.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </section>

      {/* --- SUB-PAGE / CITY CORRIDORS & TRUST GRID (TRIGGERED VIA EXPLORE) --- */}
      <section id="corridors-section" className="py-20 px-6 md:px-16 border-t border-emerald-500/15 bg-gradient-to-b from-[#090d0b] to-[#0d1411]">
        
        {/* ACTIVE LOCALITY APARTMENT HUBS */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold">Active Corridors</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mt-1">
              {activeCity.name} Residential & High-Rise Coverage
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {activeCity.activeBelts.map((belt, i) => (
              <span key={i} className="bg-white/5 border border-emerald-500/25 px-4 py-2 rounded-full text-xs font-semibold text-slate-200 shadow-sm">
                📍 {belt}
              </span>
            ))}
          </div>

          {/* LOCAL WEATHER SHIELD TECHNICAL TRUST BLOCK */}
          <div className="mt-8 bg-gradient-to-r from-emerald-950/40 via-black/40 to-emerald-950/40 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg font-bold text-white uppercase flex items-center justify-center md:justify-start gap-2">
                <ShieldCheck className="text-emerald-400 w-5 h-5" /> Local Weather Guarantee: SS-316 Marine Grade
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                {activeCity.weatherChallenge} {activeCity.weatherSolution}
              </p>
            </div>
            <div className="text-center md:text-right shrink-0">
              <span className="text-2xl font-black text-emerald-400">10 YEARS</span>
              <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Anti-Rust Warranty</span>
            </div>
          </div>
        </div>

        {/* --- 6-PILLAR PROBLEM SOLVER GRID (IMAGE-FIRST) --- */}
        <div id="problem-solver" className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold">Absolute Protection</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mt-1">
              One Balcony Installation. Total Peace Of Mind.
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
              Real high-rise balcony elevations framed with invisible stainless-steel security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROBLEM_SOLVERS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all duration-300 bg-white/5 flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md p-2 rounded-xl border border-emerald-500/30 text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">{item.tagline}</span>
                      <h4 className="text-lg font-bold text-white mt-0.5">{item.title}</h4>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Certified SS-316 Standard</span>
                      <span className="text-emerald-400 font-semibold">100% Reliable</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs sm:text-sm text-emerald-300 font-medium mt-8 italic">
            "Okke Okka Balcony Installation... Enno High-Alert Safety Problems Nundi Mee Intiki Life-Time Premium Protection!"
          </p>
        </div>
      </section>

      {/* --- STREAMLINED ESTIMATE CALCULATOR (NO LOCATION CARDS) --- */}
      <section id="estimate-calculator" className="py-20 px-6 md:px-16 border-t border-emerald-500/15 bg-[#090d0b]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold">Transparent Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mt-1">
              Estimate Your Balcony Safety Investment
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Select your opening dimensions and cable grade for an instant indicative estimate.
            </p>
          </div>

          <div className="bg-white/5 border border-emerald-500/25 rounded-3xl p-6 sm:p-10 backdrop-blur-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* INPUT SLIDERS */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-semibold uppercase text-slate-300 mb-2">
                  <span>Width (Span)</span>
                  <span className="text-emerald-400 font-bold text-sm">{width} Feet</span>
                </div>
                <input 
                  type="range" 
                  min="4" 
                  max="35" 
                  value={width} 
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold uppercase text-slate-300 mb-2">
                  <span>Height (Floor to Ceiling)</span>
                  <span className="text-emerald-400 font-bold text-sm">{height} Feet</span>
                </div>
                <input 
                  type="range" 
                  min="3" 
                  max="14" 
                  value={height} 
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                  Cable Grade & Thickness
                </label>
                <select 
                  value={cableThickness} 
                  onChange={(e) => setCableThickness(e.target.value)}
                  className="w-full bg-[#0d1411] border border-emerald-500/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400"
                >
                  <option value="2.0">2.0 mm Standard (SS-316 Multi-Strand)</option>
                  <option value="2.5">2.5 mm High-Tensile (Most Popular - Marine Grade)</option>
                  <option value="3.0">3.0 mm Heavy Duty (Extreme High-Rise Security)</option>
                </select>
              </div>
            </div>

            {/* REAL-TIME ESTIMATE SUMMARY CARD */}
            <div className="bg-[#0b100d] border border-white/10 rounded-2xl p-6 text-center flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Total Area</span>
                <div className="text-3xl font-black text-white mt-1 mb-4">{calculatedArea} <span className="text-sm font-normal text-slate-400">sq.ft</span></div>

                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Estimated Price Range</span>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1 mb-2">
                  ₹{minEstimate.toLocaleString()} - ₹{maxEstimate.toLocaleString()}
                </div>
                <p className="text-[11px] text-slate-400">Includes SS-316 high-tensile wire rope, powder-coated tracks & certified installation.</p>
              </div>

              <div className="mt-6">
                <button 
                  type="button"
                  onClick={handleOpenBooking}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-3.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.35)] transition cursor-pointer"
                >
                  Book Free Site Visit With This Quote →
                </button>
                <span className="block text-[10px] text-emerald-400 mt-2">🎁 Special Free Gift: SS Shine Spray & Microfiber Kit on Site Survey!</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- LEAD BOOKING MODAL WITH PERSONAL DETAILS & CITY SELECTOR --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-[#0d1411] border border-emerald-500/40 rounded-3xl p-6 shadow-2xl">
            <button 
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-black uppercase text-white mb-1">Confirm Laser Measurement</h3>
            <p className="text-xs text-slate-300 mb-4">Rough Quote: ₹{minEstimate.toLocaleString()} - ₹{maxEstimate.toLocaleString()} ({calculatedArea} sq.ft)</p>

            <div className="space-y-3">
              <div>
                <label className="text-[11px] uppercase font-bold text-slate-300">Select Your City Hub</label>
                <select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full mt-1 bg-black/60 border border-emerald-500/30 rounded-xl px-3 py-2 text-sm text-white focus:outline-none"
                >
                  {LOCATIONS.map(loc => (
                    <option key={loc.id} value={loc.name}>{loc.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] uppercase font-bold text-slate-300">Your Full Name</label>
                <input 
                  type="text"
                  placeholder="e.g. Ramesh Varma"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full mt-1 bg-black/60 border border-emerald-500/30 rounded-xl px-3 py-2 text-sm text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase font-bold text-slate-300">Mobile Number (For WhatsApp Quote)</label>
                <input 
                  type="tel"
                  placeholder="+91 99999 99999"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full mt-1 bg-black/60 border border-emerald-500/30 rounded-xl px-3 py-2 text-sm text-white focus:outline-none"
                />
              </div>

              {/* DYNAMIC QR CODE DISPLAY */}
              <div className="bg-black/80 border border-white/10 rounded-2xl p-4 text-center mt-4">
                <div className="w-32 h-32 mx-auto bg-white p-2 rounded-xl flex items-center justify-center">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://wa.me/919494328999?text=${getWhatsAppMessage()}`} 
                    alt="WhatsApp QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="block text-[11px] text-slate-400 mt-2">Scan with camera to launch WhatsApp booking instantly</span>
              </div>

              <a 
                href={`https://wa.me/919494328999?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-3 rounded-xl text-xs font-black uppercase tracking-wider block text-center shadow-[0_0_15px_rgba(16,185,129,0.3)] mt-2"
              >
                Send Details via WhatsApp Directly →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* --- HIGH-END CONCIERGE FOOTER (MATCHING REFERENCE) --- */}
      <footer id="footer-regions" className="border-t border-emerald-500/20 bg-black pt-16 pb-12 px-6 md:px-16 text-slate-400 text-xs">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-3">
            <h4 className="text-white font-bold tracking-wider text-sm">INVISIBLE SAFETY</h4>
            <p className="text-[11px] leading-relaxed">
              India's premier architectural invisible grill specialist for modern luxury high-rises and private residences.
            </p>
            <div className="space-y-1 text-slate-300 text-[11px] pt-2">
              <p>📞 Call: +91 94943 28999</p>
              <p>💬 WhatsApp: +91 94943 28999</p>
              <p>✉️ invisiblesafety4@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-amber-500 font-bold uppercase tracking-wider text-xs mb-3">Collections</h4>
            <ul className="space-y-2 text-[11px]">
              <li>Balcony SS-316 Grills</li>
              <li>Window Safety Grills</li>
              <li>Staircase Safety Grills</li>
              <li>High-Rise Elevation Grills</li>
              <li>Pigeon Prevention Mesh</li>
            </ul>
          </div>

          <div>
            <h4 className="text-amber-500 font-bold uppercase tracking-wider text-xs mb-3">Tools & Standards</h4>
            <ul className="space-y-2 text-[11px]">
              <li>Instant Cost Estimator</li>
              <li>Virgin SS-316 Metallurgy</li>
              <li>Real Installation Gallery</li>
              <li>10-Year Warranty Terms</li>
              <li>Why Invisible Safety</li>
            </ul>
          </div>

          <div>
            <h4 className="text-amber-500 font-bold uppercase tracking-wider text-xs mb-3">Service Regions</h4>
            <ul className="space-y-2 text-[11px]">
              {LOCATIONS.map((loc, idx) => (
                <li 
                  key={loc.id} 
                  onClick={() => {
                    setSelectedCityIndex(idx);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-emerald-400 cursor-pointer transition-colors"
                >
                  {loc.name} High-Rise Belts
                </li>
              ))}
            </ul>
            <p className="text-[10px] text-slate-500 mt-4">
              Doorstep laser measurement across all gated societies and high-rise apartments.
            </p>
          </div>

        </div>

        <div className="max-w-6xl mx-auto pt-6 border-t border-white/5 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} D-View Invisible Safety Grills. All Rights Reserved. Architectural Safety & Aesthetics.
        </div>
      </footer>

    </div>
  );
}
