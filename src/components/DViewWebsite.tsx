import React, { useState } from 'react';
import { 
  ShieldCheck, Phone, CheckCircle2, X, 
  Flame, Baby, Cat, HeartHandshake, Eye, Sparkles, 
  Droplets, ArrowUpRight, HelpCircle, MapPin
} from 'lucide-react';

// --- SUB-LOCATION CORRIDOR INTERFACE ---
export interface SubLocationCorridor {
  name: string;
  elevation: string;
  tag: string;
  desc: string;
  image: string;
}

// --- 6 LOCATIONS DATA (MASTER PRODUCTION PROMPT SPECIFICATION) ---
export interface LocationSlide {
  id: string;
  locationPath: string; // /locations/vizag, /locations/rajahmundry, etc.
  slug: string;
  name: string;
  cityShort: string;
  categoryTag: string;
  mainTitle: string;
  subline: string;
  microCue: string;
  badge: string;
  emotionHook: string;
  landmarkDesc: string;
  heroImage: string;
  activeBelts: string[];
  weatherChallenge: string;
  weatherSolution: string;
  subLocations: SubLocationCorridor[];
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
    subline: 'Balcony & Window Invisible Grills. Unobstructed RK Beach Panoramas.',
    microCue: 'Tap anywhere to explore Vizag corridors & pricing',
    badge: 'Coastal Marine Line SS-316',
    emotionHook: 'Wow! Mana Vizag sea coast view invisible grills valla asalu block avvakunda entha luxury ga undo!',
    landmarkDesc: 'Luxury penthouse interior balcony framing RK Beach coastal waves and Kailasagiri hillside through vertical SS-316 cables.',
    heroImage: '/assets/locations/visakhapatnam.png',
    activeBelts: ['Madhurawada (27-Floor High-Rises)', 'Yendada', 'Rushikonda', 'PM Palem', 'Anandapuram', 'Pendurthi', 'Gajuwaka'],
    weatherChallenge: "Vizag's high-salinity salt-air and marine damp humidity rapidly corrode cheap iron or low-grade steel wires within months.",
    weatherSolution: 'Strictly Marine Grade SS-316 infused with Molybdenum core for zero-decay corrosion resistance.',
    subLocations: [
      {
        name: 'Madhurawada (27-Floor High-Rises)',
        elevation: '25th-Floor Penthouse Balcony View',
        tag: 'G+27 Towers Lockdown',
        desc: 'Interior high-rise balcony looking through vertical SS-316 wires at Madhurawada valley towers (like MVV The Grand) with 100% child safety.',
        image: '/assets/locations/visakhapatnam.png'
      },
      {
        name: 'Yendada Sea-Facing Flats',
        elevation: 'High-Altitude Bay Panoramas',
        tag: 'Marine-Grade SS-316',
        desc: 'Unobstructed Bay of Bengal vistas with permanent salt-air rust immunity and strict 2-inch safe cable spacing.',
        image: '/assets/locations/visakhapatnam.png'
      },
      {
        name: 'Rushikonda Coastal Villas',
        elevation: 'Hillside Ocean Balconies',
        tag: 'Unblocked Ocean Waves',
        desc: 'Clear blue ocean waves breaking on the rocky beach framed through floor-to-ceiling invisible grill wires with zero breeze obstruction.',
        image: '/assets/locations/visakhapatnam.png'
      },
      {
        name: 'PM Palem High-Rise Enclaves',
        elevation: 'Cricket Stadium Road Communities',
        tag: 'Zero-Climb Toddler Safety',
        desc: 'Tight tensioned vertical cables offering solid fall protection for families with active toddlers and children.',
        image: '/assets/locations/visakhapatnam.png'
      },
      {
        name: 'Anandapuram Gated Communities',
        elevation: 'Valley Elevation Penthouses',
        tag: 'Natural Cross-Airflow',
        desc: 'Lush greenery and cool valley breezes enter your living rooms while providing high-tensile fall security.',
        image: '/assets/locations/visakhapatnam.png'
      },
      {
        name: 'Pendurthi & Gajuwaka Belt',
        elevation: 'Industrial & Urban Towers',
        tag: 'Anti-Static Dust Resistant',
        desc: 'Smooth nylon-12 coated SS-316 cables shed dust particles effortlessly and maintain long-term brilliance.',
        image: '/assets/locations/visakhapatnam.png'
      }
    ]
  },
  {
    id: 'rajahmundry',
    locationPath: '/locations/rajahmundry',
    slug: 'rajahmundry',
    name: 'Rajamahendravaram',
    cityShort: 'RAJAHMUNDRY',
    categoryTag: 'RIVERFRONT HERITAGE LIVING',
    mainTitle: 'SAFEGUARDING GODAVARI PRIDE — RAJAHMUNDRY',
    subline: '100% bird and fall protection while preserving fresh river breeze.',
    microCue: 'Tap anywhere to view Rajahmundry projects & pricing',
    badge: 'Godavari Riverfront Corridor',
    emotionHook: 'Pigeon problem lekunda, challani Godavari gaali & arch bridge view asalu aagakunda intiki 100% safety!',
    landmarkDesc: 'Modern apartment balcony with floor tiles, railing, and vertical invisible safety wires framing the Godavari Arch Bridge and river cruise boats.',
    heroImage: '/assets/locations/rajahmundry.png',
    activeBelts: ['Morampudi', 'Bommuru', 'Diwancheruvu', 'Lalacheruvu', 'Vemagiri', 'Gadaala Residential Belts'],
    weatherChallenge: 'Daily river vapor mist and heavy pigeon nesting colonies on open balcony ledges.',
    weatherSolution: 'Precision 2-inch SS-316 tensioned cables preventing bird entry while allowing 99% free river cross-ventilation.',
    subLocations: [
      {
        name: 'Morampudi Residential Towers',
        elevation: 'River-View Balcony Corridors',
        tag: 'Fresh River Breeze',
        desc: 'Uninterrupted fresh Godavari river breeze flowing into living rooms while stopping pigeon entry completely.',
        image: '/assets/locations/rajahmundry.png'
      },
      {
        name: 'Bommuru Gated Communities',
        elevation: 'Mid & High-Rise Apartments',
        tag: '100% Bird-Proof',
        desc: 'Zero pigeon messes and nesting on balcony ledges, keeping outdoor furniture spotless and hygienic.',
        image: '/assets/locations/rajahmundry.png'
      },
      {
        name: 'Diwancheruvu & Lalacheruvu',
        elevation: 'Highway High-Rise Towers',
        tag: 'Wind & Dust Shield',
        desc: 'Structural anchoring into concrete withstands high Godavari gusts without whistling or vibrating.',
        image: '/assets/locations/rajahmundry.png'
      },
      {
        name: 'Vemagiri Riverfront Belts',
        elevation: 'Godavari Bank Balconies',
        tag: '99% View Transparency',
        desc: 'Expansive riverfront view framing Godavari waters without dark prison-like iron bar cages.',
        image: '/assets/locations/rajahmundry.png'
      },
      {
        name: 'Gadaala Residential Hubs',
        elevation: 'Modern Family Gated Flats',
        tag: 'Toddler & Elder Security',
        desc: 'Firm SS-316 tensioned cables eliminate vertigo anxiety and protect children during evening balcony playtime.',
        image: '/assets/locations/rajahmundry.png'
      }
    ]
  },
  {
    id: 'vijayawada',
    locationPath: '/locations/vijayawada',
    slug: 'vijayawada-amaravati',
    name: 'Vijayawada & Amaravati',
    cityShort: 'VIJAYAWADA',
    categoryTag: 'CAPITAL SKYLINE SAFETY',
    mainTitle: 'MODERN LIVING IN AMARAVATI',
    subline: 'High-rise elevation security for Amaravati HappyNest & riverside towers.',
    microCue: 'Tap anywhere to view Amaravati towers & pricing',
    badge: 'Capital & Krishna Waterfront',
    emotionHook: 'Modern luxury high-rise look ki taggattu, iron bars cage lekunda uncompromised open balcony!',
    landmarkDesc: 'Skyscraper balcony overlooking Krishna River & illuminated Prakasam Barrage lights through vertical SS-316 cables.',
    heroImage: '/assets/locations/vijayawada.png',
    activeBelts: ['Benz Circle', 'Moghalrajpuram', 'Gunadala', 'Kanuru', 'Poranki', 'Amaravati HappyNest (G+18)', 'Tadepalli'],
    weatherChallenge: 'Intense summer thermal expansion and high-velocity wind gusts on skyscraper floors above 15 levels.',
    weatherSolution: 'High-tensile multi-strand core cables certified up to 400kg load per strand with thermal compensation.',
    subLocations: [
      {
        name: 'Benz Circle Corridor Towers',
        elevation: '15th-Floor Skyscraper Elevation',
        tag: 'Urban High-Rise Shield',
        desc: 'Vertical invisible cables protecting high-floor balconies while providing a grand view of wide avenues and night lights.',
        image: '/assets/locations/vijayawada.png'
      },
      {
        name: 'Amaravati HappyNest (G+18)',
        elevation: 'G+18 IT & Gov Housing Enclave',
        tag: 'High-Rise Certified',
        desc: 'Precision 50mm vertical wire spacing delivering 100% toddler fall security for HappyNest apartments.',
        image: '/assets/locations/vijayawada.png'
      },
      {
        name: 'Moghalrajpuram Hillside Flats',
        elevation: 'Elevated Ridge-View Apartments',
        tag: 'Vertigo Elimination',
        desc: 'Solid structural tension support providing calm reassurance for seniors on elevated valley terraces.',
        image: '/assets/locations/vijayawada.png'
      },
      {
        name: 'Gunadala & Ramavarappadu',
        elevation: 'Premium Gated Societies',
        tag: '400 KG / Cable Load',
        desc: 'Multi-strand core cables withstand body impacts and heavy leaning without slackening.',
        image: '/assets/locations/vijayawada.png'
      },
      {
        name: 'Kanuru & Poranki Belt',
        elevation: 'Expanding Luxury Suburbs',
        tag: '100% Cross Ventilation',
        desc: 'Natural daylight and cross-ventilation flow freely, cutting AC power loads while assuring child safety.',
        image: '/assets/locations/vijayawada.png'
      },
      {
        name: 'Tadepalli Riverside Towers',
        elevation: 'Krishna Riverfront Penthouses',
        tag: 'River Humidity Proof',
        desc: 'Marine grade SS-316 cables chemically immune to Krishna river vapor mist and monsoon rains.',
        image: '/assets/locations/vijayawada.png'
      }
    ]
  },
  {
    id: 'guntur',
    locationPath: '/locations/guntur',
    slug: 'guntur',
    name: 'Guntur',
    cityShort: 'GUNTUR',
    categoryTag: 'HIGH-RISE STRUCTURAL LIVING',
    mainTitle: 'GUARDIAN OF GUNTUR',
    subline: 'Say goodbye to dark cage iron grills. Uncompromised daylight and fall safety.',
    microCue: 'Tap anywhere to view Guntur corridors & pricing',
    badge: 'Kondaveedu Horizons Belt',
    emotionHook: 'Kondaveedu hill breeze intloki vasthundi, pillalu unna elevations bayam lekunda safe setup!',
    landmarkDesc: 'Balcony terrace framing Kondaveedu Fort ridge and city skyline through high-tensile invisible wires.',
    heroImage: '/assets/locations/guntur.png',
    activeBelts: ['Brodipet', 'Arundelpet', 'Amaravati Road', 'Namburu', 'Kaza & Tadepalli Belt (900+ listings)'],
    weatherChallenge: 'Heavy dry winds carrying abrasive dust particulates that erode and dull conventional iron bars.',
    weatherSolution: 'Anti-static smooth nylon-12 coated SS-316 cables shed dust effortlessly and maintain lifelong shine.',
    subLocations: [
      {
        name: 'Brodipet High-End Residencies',
        elevation: 'Prime City Balcony Flats',
        tag: 'Architectural Luxury',
        desc: 'Sleek stainless cables replace clunky rusted iron grilles, elevating exterior apartment facades.',
        image: '/assets/locations/guntur.png'
      },
      {
        name: 'Arundelpet Modern Towers',
        elevation: 'High-Density Residential Hub',
        tag: 'Zero-Climb Spacing',
        desc: 'Vertical 2-inch intervals with zero horizontal footing prevent climbing hazards completely.',
        image: '/assets/locations/guntur.png'
      },
      {
        name: 'Amaravati Road Corridor',
        elevation: 'Luxury Gated Towers',
        tag: 'Kondaveedu Ridge View',
        desc: 'Unblocked skyline vistas overlooking green ridges while providing structural safety.',
        image: '/assets/locations/guntur.png'
      },
      {
        name: 'Namburu IT & University Belt',
        elevation: 'Fast-Growing Skyscraper Colonies',
        tag: 'Anti-Static Nylon',
        desc: 'Special clear nylon outer layer sheds dust with every rain shower, keeping maintenance zero.',
        image: '/assets/locations/guntur.png'
      },
      {
        name: 'Kaza & Tadepalli Belt',
        elevation: 'Twin-City Expressway Towers',
        tag: '100% Daylighting',
        desc: 'Bright sunlight fills the interiors naturally without obstructing windows or balcony doors.',
        image: '/assets/locations/guntur.png'
      }
    ]
  },
  {
    id: 'kakinada',
    locationPath: '/locations/kakinada',
    slug: 'kakinada',
    name: 'Kakinada',
    cityShort: 'KAKINADA',
    categoryTag: 'MARINE GRADE SS-316 CORRIDOR',
    mainTitle: "KAKINADA'S COASTAL SHIELD",
    subline: 'Permanent rust immunity against salty coastal sea breezes.',
    microCue: 'Tap anywhere to view Kakinada coastal specs & pricing',
    badge: 'Deepwater Port & Coastal Corridor',
    emotionHook: 'Uppu gaali thupattu pattakunda, high-grade Marine wire security tho lifetime durability!',
    landmarkDesc: 'Coastal apartment balcony framing Vakalapudi Lighthouse and palm shoreline with marine-grade SS-316 wires.',
    heroImage: '/assets/locations/kakinada.png',
    activeBelts: ['Sarpavaram', 'Madhavapatnam', 'Ramanayyapeta', 'Vakalapudi', 'Jagannaickpur'],
    weatherChallenge: 'Aggressive industrial port emissions mixed with salty maritime mist causing pitting corrosion.',
    weatherSolution: 'Certified Marine Grade SS-316 tested against ASTM B117 standards for extreme saline resistance.',
    subLocations: [
      {
        name: 'Vakalapudi Port & Lighthouse Corridor',
        elevation: 'Sea-Front Balcony Residences',
        tag: 'Marine-Grade Alloy',
        desc: 'Direct view of Vakalapudi lighthouse protected with Molybdenum-infused SS-316 for lifetime rust immunity.',
        image: '/assets/locations/kakinada.png'
      },
      {
        name: 'Sarpavaram High-Rise Towers',
        elevation: 'Gated Residential Colonies',
        tag: 'Toddler Lockdown Safe',
        desc: 'Ensures absolute fall containment up to the highest floors while allowing sea breeze in.',
        image: '/assets/locations/kakinada.png'
      },
      {
        name: 'Madhavapatnam Residential Hub',
        elevation: 'Family Apartment Balconies',
        tag: 'Bird Dropping Barrier',
        desc: 'Prevents pigeons from perching on balcony rails and contaminating air-conditioning compressors.',
        image: '/assets/locations/kakinada.png'
      },
      {
        name: 'Ramanayyapeta Urban Flatted Living',
        elevation: 'City Center Elevations',
        tag: '1-Min Safe Fire Egress',
        desc: 'Standard manual wire cutters sever cables easily during emergency evacuation.',
        image: '/assets/locations/kakinada.png'
      },
      {
        name: 'Jagannaickpur Waterfront Enclaves',
        elevation: 'Canal & Coastal Flats',
        tag: 'Corrosion-Free Tracks',
        desc: 'Heavy-gauge anodized aluminum tracks anchored firmly into structural RCC concrete.',
        image: '/assets/locations/kakinada.png'
      }
    ]
  },
  {
    id: 'nellore',
    locationPath: '/locations/nellore',
    slug: 'nellore',
    name: 'Nellore',
    cityShort: 'NELLORE',
    categoryTag: 'RIVER BARRAGE TRANQUILITY',
    mainTitle: 'TRANQUILITY & TRUST — NELLORE',
    subline: 'Safe haven for children and elders on high-elevation balconies.',
    microCue: 'Tap anywhere to view Nellore projects & pricing',
    badge: 'Penna Riverfront Horizon',
    emotionHook: 'Pedda vallu, pillalu unna balcony lo nilabadataniki absolute strong and safe support!',
    landmarkDesc: 'High-rise balcony sunset view over Nellore Barrage and Penna River through vertical safety cables.',
    heroImage: '/assets/locations/nellore.png',
    activeBelts: ['Magunta Layout', 'Balaji Nagar', 'Dargamitta', 'Vedayapalem', 'Podalakur Road', 'Kavali Road'],
    weatherChallenge: 'Continuous seasonal monsoon dampness loosening weak anchor points and corroding inferior wires.',
    weatherSolution: 'Precision aluminum track tensioners anchored deep in structural concrete with non-corrosive fasteners.',
    subLocations: [
      {
        name: 'Magunta Layout Premium Flats',
        elevation: 'Central Luxury Balconies',
        tag: 'Penna River Sunset View',
        desc: 'Framing peaceful sunset horizons over the river while providing solid edge perimeter protection.',
        image: '/assets/locations/nellore.png'
      },
      {
        name: 'Balaji Nagar Elevated Residencies',
        elevation: 'High-Floor Family Apartments',
        tag: '400 KG / Cable Strength',
        desc: 'Solid cable structural reassurance preventing vertigo and loss-of-balance fears.',
        image: '/assets/locations/nellore.png'
      },
      {
        name: 'Dargamitta Corridors',
        elevation: 'Terrace & High Balcony Flats',
        tag: 'Anti-Sag Anchoring',
        desc: 'Calibrated tension turnbuckles prevent any cable sagging or loosening over time.',
        image: '/assets/locations/nellore.png'
      },
      {
        name: 'Vedayapalem Riverfront Belt',
        elevation: 'Waterfront Damp-Shield Balconies',
        tag: 'Monsoon Proof SS-316',
        desc: 'Immune to moisture staining, rust tears, or weathering during humid coastal monsoons.',
        image: '/assets/locations/nellore.png'
      },
      {
        name: 'Podalakur Road & Kavali Belt',
        elevation: 'Expanding Gated Communities',
        tag: 'Pest & Pigeon Control',
        desc: '50mm spacing physically keeps pigeons out, ensuring clean and enjoyable morning tea sessions.',
        image: '/assets/locations/nellore.png'
      }
    ]
  }
];

// --- 6-CARD PROBLEM SOLVER GALLERY (IMAGE-FIRST, REAL BALCONY SOLUTIONS) ---
export const PROBLEM_SOLVERS = [
  {
    icon: Baby,
    title: "Children's Safety",
    tagline: 'High-Rise Balcony Lockdown',
    badge: '400 KG / CABLE | HIGH-RISE BALCONY LOCKDOWN',
    desc: 'Anti-fall lockdown coverage up to 30th floor. Chinna pillalu unna elevations bayam lekunda safe setup.',
    teluguDesc: 'Chinna pillalu unna elevations bayam lekunda safe lockdown coverage.',
    image: '/assets/pillars/children-safety.png',
    stat: '400 KG / CABLE'
  },
  {
    icon: Cat,
    title: 'Pets Safety',
    tagline: 'Zero Gap Paw Architecture',
    badge: 'ZERO GAP HAZARD | ZERO GAP PAW ARCHITECTURE',
    desc: '2-inch precision vertical wire spacing. Cats and dogs cannot slip through.',
    teluguDesc: 'Cats leda dogs small space gaps nundi kindhaki slip avvakunda absolute zero gap safety wire structures.',
    image: '/assets/pillars/pets-safety.png',
    stat: 'ZERO GAP HAZARD'
  },
  {
    icon: HeartHandshake,
    title: 'Old Age Persons Safety',
    tagline: 'Vertigo & Tension Elimination',
    badge: '100% RIGID ANCHORING | VERTIGO & TENSION ELIMINATION',
    desc: 'Solid structural support on balcony edges eliminating height dizziness and loose railing anxiety.',
    teluguDesc: 'Pedda vallu loose railings or heights valla tension padakunda absolute strong support balcony edge frame structure.',
    image: '/assets/pillars/old-age-safety.png',
    stat: '100% RIGID ANCHORING'
  },
  {
    icon: Eye,
    title: 'Pigeons Safety',
    tagline: '100% Droppings Protection',
    badge: 'ZERO BIRDS ENTRY | 100% DROPPINGS PROTECTION',
    desc: '100% bird droppings and dirty maintenance prevention without blocking natural sea/river breeze or view.',
    teluguDesc: 'Balcony and local windows padavvakunda, dirty maintenance problems lekunda birds control protection mesh screen.',
    image: '/assets/pillars/pigeon-control.png',
    stat: 'ZERO BIRDS ENTRY'
  },
  {
    icon: Flame,
    title: '1-Minute Emergency Fire Escape',
    tagline: 'Life Saving Egress Speed',
    badge: '60 SEC CUT ESCAPE | LIFE SAVING EGRESS SPEED',
    desc: 'Traditional iron mesh cages trap residents in fire accidents. Our SS-316 wires can be cut in under 60 seconds with standard emergency wire cutters.',
    teluguDesc: 'Box type traditional iron mesh fixed ga untayi, fire accident time lo escape avvalem. Mana high-tensile wire setup lo standard cutter tho 1-minute lo easy wires cut chesi safe escape avvachu!',
    image: '/assets/pillars/fire-escape.png',
    stat: '60 SEC CUT ESCAPE'
  },
  {
    icon: Sparkles,
    title: 'Modern Luxury Look & Free Air',
    tagline: 'Eliminates Dark Iron Bars',
    badge: '99% TRANSPARENCY | ELIMINATES DARK IRON BARS',
    desc: 'Replaces dark, prison-like iron bars with invisible stainless-steel elegance, delivering 100% natural sunlight and cross-ventilation.',
    teluguDesc: 'Traditional heavy iron bars look pathadi aipoindi. Mana grills tho full lighting natural air flow stop avvadu. Balcony full open ventilation flat spaces premium architecture aesthetic build chesthundi.',
    image: '/assets/pillars/modern-airflow.png',
    stat: '99% TRANSPARENCY'
  }
];

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
      s => s.locationPath.replace('/', '').replace('locations/', '') === clean || 
           s.slug === clean || 
           s.id === clean || 
           clean.includes(s.id)
    );
    return idx >= 0 ? idx : 0;
  };

  const initialIndex = getIndexFromSlug(initialCitySlug);
  const activeSlide = CITIES_SLIDES[initialIndex];

  // Side Drawer Menu State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Selected Corridor for Sub-locations drill-down
  const [selectedCorridor, setSelectedCorridor] = useState<string>(activeSlide.subLocations[0]?.name || activeSlide.activeBelts[0]);

  // Calculator State
  const [width, setWidth] = useState(12);
  const [height, setHeight] = useState(8);
  const [cableThickness, setCableThickness] = useState('2.5');

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [selectedHub, setSelectedHub] = useState(activeSlide.name);

  // Pricing calculations
  const calculatedArea = width * height;
  const ratePerSqFt = cableThickness === '2.0' ? 140 : cableThickness === '2.5' ? 165 : 190;
  const estimatedMin = calculatedArea * ratePerSqFt;
  const estimatedMax = Math.round(estimatedMin * 1.15);

  const handleOpenBooking = (hubName?: string, corridorName?: string) => {
    setSelectedHub(hubName || activeSlide.name);
    if (corridorName) setSelectedCorridor(corridorName);
    setIsModalOpen(true);
  };

  const handleDrillDownToPillars = (corridor: SubLocationCorridor) => {
    setSelectedCorridor(corridor.name);
    scrollToId('problem-solver');
  };

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello D-View Invisible Safety Concierge!\n` +
      `I want to book a Free Site Visit & Measurement.\n\n` +
      `📍 City Hub: ${selectedHub}\n` +
      `🏢 Corridor/Community: ${selectedCorridor}\n` +
      `📐 Dimensions: ${width} ft (W) x ${height} ft (H) = ${calculatedArea} sq.ft\n` +
      `🛡️ Wire Grade: SS-316 Marine Grade (${cableThickness} mm)\n` +
      `💰 Indicative Range: ₹${estimatedMin.toLocaleString()} - ₹${estimatedMax.toLocaleString()}\n` +
      `👤 Name: ${customerName || 'Resident'}\n` +
      `📞 Phone: ${customerPhone || 'Via WhatsApp'}`
    );
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090d0b] text-[#f1f5f9] font-sans antialiased selection:bg-emerald-500 selection:text-black">
      
      {/* ========================================================= */}
      {/* 1. NAVIGATION BAR (INVISPROTECT EDITORIAL MINIMALISM)      */}
      {/* ========================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5 px-6 sm:px-12 flex items-center justify-between pointer-events-auto transition-all">
        
        {/* Left: Thin menu mark `= MENU` and brand title `D-VIEW INVISIBLE SAFETY` */}
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-300 hover:text-emerald-400 transition cursor-pointer font-medium"
          >
            <span className="text-base leading-none">=</span> MENU
          </button>

          <a href="/" className="flex items-center gap-2 group">
            <span className="text-sm sm:text-base font-light tracking-[0.25em] text-white uppercase">
              D-VIEW <span className="font-semibold text-emerald-400">INVISIBLE SAFETY</span>
            </span>
          </a>
        </div>

        {/* Right: Direct concierge telephone `+91 94943 28999` and `CONTACT US` */}
        <div className="flex items-center gap-6 sm:gap-8 text-xs uppercase tracking-[0.2em] text-slate-300 font-medium">
          <button
            type="button"
            onClick={() => handleOpenBooking()}
            className="hidden sm:inline-block hover:text-emerald-400 transition cursor-pointer"
          >
            CONTACT US
          </button>
          
          <a
            href="tel:+919494328999"
            className="text-white hover:text-emerald-400 transition flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400 stroke-[2]" />
            <span className="hidden sm:inline">+91 94943 28999</span>
          </a>
        </div>

      </header>

      {/* ========================================================= */}
      {/* SLEEK LUXURY SIDE DRAWER MENU                             */}
      {/* ========================================================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="relative w-full max-w-sm bg-[#090d0b] border-r border-white/10 h-full p-8 z-10 flex flex-col justify-between overflow-y-auto">
            
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold">
                  D-VIEW INVISIBLE SAFETY
                </span>
                <button 
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-400 hover:text-white p-1 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Service Locations List */}
              <div className="mt-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold block mb-4">
                  SELECT RESIDENTIAL HUB (TIER 1 → TIER 2)
                </span>
                <div className="space-y-2">
                  {CITIES_SLIDES.map((slide) => (
                    <a
                      key={slide.id}
                      href={slide.locationPath}
                      onClick={() => setIsMenuOpen(false)}
                      className="block p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-emerald-500/20 transition group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white group-hover:text-emerald-300">
                          {slide.name}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400" />
                      </div>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        {slide.categoryTag}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Navigation Links */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-3 text-xs tracking-wider text-slate-300 uppercase">
                <a 
                  href="#sub-locations"
                  onClick={() => { setIsMenuOpen(false); scrollToId('sub-locations'); }}
                  className="block hover:text-emerald-400 transition"
                >
                  Tier 2: City Corridors
                </a>
                <a 
                  href="#problem-solver"
                  onClick={() => { setIsMenuOpen(false); scrollToId('problem-solver'); }}
                  className="block hover:text-emerald-400 transition"
                >
                  Tier 3: 6-Pillar Proofs
                </a>
                <a 
                  href="#weather-trust"
                  onClick={() => { setIsMenuOpen(false); scrollToId('weather-trust'); }}
                  className="block hover:text-emerald-400 transition"
                >
                  SS-316 Weather Guide
                </a>
                <a 
                  href="#estimate-calculator"
                  onClick={() => { setIsMenuOpen(false); scrollToId('estimate-calculator'); }}
                  className="block hover:text-emerald-400 transition"
                >
                  Balcony Cost Estimator
                </a>
              </div>
            </div>

            {/* Concierge Info at Bottom */}
            <div className="pt-8 border-t border-white/10 text-xs text-slate-400 space-y-1">
              <p className="text-white font-bold tracking-wider">Direct Concierge</p>
              <p>+91 94943 28999</p>
              <p>contact@dviewsolutions.com</p>
            </div>

          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* TIER 1: MAIN DASHBOARD (100vh FULL-SCREEN SNAP-SCROLL SLIDES)         */}
      {/* ==================================================================== */}
      {!isSubPageDirect ? (
        <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
          {CITIES_SLIDES.map((slide, idx) => (
            <section
              key={slide.id}
              onClick={() => { window.location.href = slide.locationPath; }}
              className="relative w-full h-screen snap-start snap-always overflow-hidden flex items-end justify-start cursor-pointer select-none"
            >
              {/* Full Bleed Interior Luxury Balcony Photography */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.015]"
                style={{ backgroundImage: `url(${slide.heroImage})` }}
              >
                {/* Floor-to-Ceiling Vertical SS-316 Invisible Wire Lines Simulation (2-inch precision spacing) */}
                <div 
                  className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_26px,rgba(255,255,255,0.15)_27px,rgba(255,255,255,0.03)_28px)] pointer-events-none" 
                  aria-hidden="true"
                />

                {/* Balcony Ceiling & Floor Track Shadows */}
                <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-radial-vignette from-transparent via-black/25 to-black/70 pointer-events-none" />
              </div>

              {/* Minimal Text (Bottom-Left, subtle uppercase tracking - ZERO BUTTON CLUTTER) */}
              <div className="relative z-20 max-w-2xl text-left flex flex-col items-start px-6 sm:px-16 pb-12 sm:pb-16">
                
                {/* Kicker */}
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-slate-300 font-semibold mb-2 block">
                  {slide.categoryTag}
                </span>

                {/* Title */}
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-[0.08em] uppercase leading-tight mb-2 drop-shadow-xl">
                  {slide.mainTitle}
                </h2>

                {/* Subline */}
                <p className="text-xs sm:text-sm text-slate-300/90 font-light tracking-wide max-w-xl mb-3">
                  {slide.subline}
                </p>

                {/* Micro-cue */}
                <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-medium block">
                  {slide.microCue}
                </span>

              </div>

              {/* Slide Counter on Side */}
              <div className="absolute bottom-12 right-12 z-20 hidden md:block text-[11px] uppercase tracking-[0.25em] text-slate-400 font-mono">
                0{idx + 1} / 06
              </div>

            </section>
          ))}
        </main>
      ) : (
        /* ==================================================================== */
        /* TIER 2 & TIER 3: CITY SUB-LOCATION HUBS & 6-PILLAR CONVERSION ENGINE  */
        /* ==================================================================== */
        <main id="location-subpage" className="pt-20">
          
          {/* ----------------------------------------------------------------- */}
          {/* A. CITY HERO SECTION & LOCAL EMOTIONAL CONNECTION                 */}
          {/* ----------------------------------------------------------------- */}
          <section className="relative min-h-[85vh] flex items-center justify-center px-6 sm:px-12 py-16 overflow-hidden">
            {/* Full-bleed interior balcony view */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${activeSlide.heroImage})` }}
            >
              {/* Floor-to-ceiling vertical wire ropes simulation */}
              <div 
                className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_26px,rgba(255,255,255,0.15)_27px,rgba(255,255,255,0.03)_28px)] pointer-events-none" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d0b] via-[#090d0b]/75 to-black/60" />
            </div>

            <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
              
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold">
                  {activeSlide.badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-light uppercase text-white tracking-[0.08em] leading-tight mb-6">
                {activeSlide.mainTitle}
              </h1>

              {/* Localized Telugu Emotional Hook */}
              <div className="p-5 sm:p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 backdrop-blur-md max-w-3xl mb-8 shadow-2xl">
                <p className="text-emerald-300 font-medium text-base sm:text-lg italic leading-relaxed">
                  "{activeSlide.emotionHook}"
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
                {activeSlide.landmarkDesc} D-VIEW replaces traditional obstructive black iron bars with high-tensile 316-grade stainless steel cables, delivering 100% certified fall protection while preserving total architectural daylight.
              </p>

              {/* Quick Jump to Tier 2 Corridors */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button 
                  type="button"
                  onClick={() => scrollToId('sub-locations')}
                  className="bg-emerald-500 hover:bg-emerald-400 text-black px-7 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(16,185,129,0.35)] transition cursor-pointer"
                >
                  Explore High-Rise Corridors (Tier 2) ↓
                </button>
                <button 
                  type="button"
                  onClick={() => scrollToId('problem-solver')}
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm transition cursor-pointer"
                >
                  View 6-Pillar Proofs (Tier 3)
                </button>
              </div>

            </div>
          </section>

          {/* ================================================================= */}
          {/* TIER 2: CITY SUB-LOCATION HUBS (HIGH-RISE REALISTIC BALCONY CARDS) */}
          {/* ================================================================= */}
          <section id="sub-locations" className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#090d0b]">
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-3">
                  <span>TIER 2 • LOCAL RESIDENTIAL CORRIDORS</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-light uppercase text-white mt-1 tracking-tight">
                  High-Rise Balcony Corridors in {activeSlide.name}
                </h2>
                <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                  Dedicated architectural safety specifications for top gated communities & skyscraper towers across {activeSlide.name}. Click any corridor to explore the 6-pillar proof solutions & customized balcony pricing.
                </p>
              </div>

              {/* Sub-Location Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeSlide.subLocations.map((corridor, idx) => (
                  <div 
                    key={idx}
                    onClick={() => handleDrillDownToPillars(corridor)}
                    className="group rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/60 bg-[#0c1310] transition-all duration-300 flex flex-col hover:shadow-[0_0_35px_rgba(16,185,129,0.2)] cursor-pointer"
                  >
                    {/* Visual: Interior Balcony Perspective with SS-316 Wires */}
                    <div className="relative h-60 w-full overflow-hidden">
                      <img 
                        src={corridor.image} 
                        alt={`${corridor.name} Balcony SS-316 Invisible Grill View`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Wire simulation overlay */}
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.14)_21px,rgba(255,255,255,0.02)_22px)] pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1310] via-[#0c1310]/40 to-transparent" />
                      
                      {/* Elevation Badge */}
                      <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-500/40 text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-emerald-400" />
                        {corridor.elevation}
                      </div>

                      {/* Certification Pill */}
                      <div className="absolute top-4 right-4 bg-emerald-500 text-black text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {corridor.tag}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition mb-2">
                          {corridor.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {corridor.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                        <span className="text-emerald-400 font-semibold group-hover:translate-x-1 transition flex items-center gap-1">
                          View 6-Pillar Solutions & Pricing ↓
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400">
                          SS-316 Marine
                        </span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

              {/* Active Corridor Selector Notification */}
              {selectedCorridor && (
                <div className="mt-10 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Currently Focused Corridor: <strong className="text-white">{selectedCorridor}</strong></span>
                </div>
              )}

            </div>
          </section>

          {/* ================================================================= */}
          {/* TIER 3: THE 6-PILLAR PROBLEM-SOLVER & CONVERSION ENGINE           */}
          {/* ================================================================= */}

          {/* ----------------------------------------------------------------- */}
          {/* SECTION A: THE 6-PILLAR PROBLEM-SOLVER GRID                       */}
          {/* ----------------------------------------------------------------- */}
          <section id="problem-solver" className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#000000]">
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-3">
                  <span>TIER 3 • THE 6-PILLAR REAL PROOF SOLUTIONS</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-light uppercase text-white mt-1 tracking-tight">
                  The 6 Problem-Solver Pillar Solutions
                </h2>
                <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                  Real balcony photography demonstrating high-tensile SS-316 invisible wire engineering with zero-fall hazard.
                </p>
              </div>

              {/* 6 Grid Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROBLEM_SOLVERS.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div 
                      key={idx}
                      className="group rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/50 bg-[#090d0b] transition-all duration-300 flex flex-col hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                    >
                      {/* High-definition balcony photography */}
                      <div className="relative h-60 w-full overflow-hidden">
                        <img 
                          src={card.image} 
                          alt={card.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Wire simulation on card image */}
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.12)_21px,rgba(255,255,255,0.02)_22px)] pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090d0b] via-[#090d0b]/30 to-transparent" />
                        
                        <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md p-2.5 rounded-xl border border-emerald-500/30 text-emerald-400">
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
                            {card.badge}
                          </span>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {card.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-2">
                            {card.desc}
                          </p>
                          <p className="text-xs text-emerald-300/90 italic leading-relaxed">
                            "{card.teluguDesc}"
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

              {/* Closing Tagline in Telugu */}
              <div className="mt-14 text-center p-6 rounded-2xl bg-white/5 border border-emerald-500/30 max-w-4xl mx-auto">
                <p className="text-emerald-300 font-semibold text-sm sm:text-base italic">
                  "Okke Okka Balcony Installation... Enno High-Alert Safety Problems Nundi Mee Intiki Life-Time Premium Protection!"
                </p>
              </div>

            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* SECTION B: LOCAL WEATHER SHIELD & SS-316 METALLURGY TRUST         */}
          {/* ----------------------------------------------------------------- */}
          <section id="weather-trust" className="py-20 px-6 sm:px-12 border-t border-white/10 bg-gradient-to-b from-[#000000] to-[#090d0b]">
            <div className="max-w-7xl mx-auto">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold block">
                    SS-316 METALLURGY TRUST & GUARANTEES
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-light uppercase text-white tracking-tight">
                    Specific Weather Shield ({activeSlide.name})
                  </h2>
                  
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Why cheap steel fails in Andhra Pradesh: coastal salt-air and river mists cause immediate pitting and corrosion on ordinary mild steel and cheap SS-202 cables within months.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/40 border border-white/10">
                      <Droplets className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase">The Environmental Challenge</h4>
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
                        Anti-Rust Replacement Warranty
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <span className="text-xl sm:text-2xl font-black text-white block">1 YEAR FREE</span>
                      <span className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold block mt-0.5">
                        Periodic Tension Inspection
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <span className="text-xl sm:text-2xl font-black text-emerald-400 block">FREE GIFT</span>
                      <span className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold block mt-0.5">
                        Microfiber & SS Shine Kit
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

          {/* ----------------------------------------------------------------- */}
          {/* SECTION C: BALCONY ESTIMATE CALCULATOR & DYNAMIC WHATSAPP QR      */}
          {/* ----------------------------------------------------------------- */}
          <section id="estimate-calculator" className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#000000]">
            <div className="max-w-5xl mx-auto">
              
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold">
                  TRANSPARENT PRICING & ESTIMATOR
                </span>
                <h2 className="text-3xl sm:text-5xl font-light uppercase text-white mt-2 tracking-tight">
                  Balcony Estimate Calculator
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-2">
                  Instant indicative investment calculation for {activeSlide.name} • {selectedCorridor}.
                </p>
              </div>

              <div className="bg-[#090d0b] border border-emerald-500/30 rounded-3xl p-6 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
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
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
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
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                      <span>3 ft</span>
                      <span>8 ft</span>
                      <span>14 ft</span>
                    </div>
                  </div>

                  {/* Wire Gauge Selector */}
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
                <div className="lg:col-span-5 bg-[#000000] border border-white/10 rounded-2xl p-6 sm:p-8 text-center flex flex-col justify-between">
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
                      onClick={() => handleOpenBooking(activeSlide.name, selectedCorridor)}
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

          {/* ----------------------------------------------------------------- */}
          {/* TECHNICAL FAQS SECTION                                            */}
          {/* ----------------------------------------------------------------- */}
          <section id="faq-section" className="py-20 px-6 sm:px-12 border-t border-white/10 bg-[#090d0b]">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="text-2xl sm:text-4xl font-light uppercase text-white mt-2">
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

          {/* =============================================================== */}
          {/* 4. MINIMAL CONCIERGE FOOTER                                     */}
          {/* =============================================================== */}
          <footer className="border-t border-white/10 bg-[#000000] pt-16 pb-12 px-6 sm:px-12 text-slate-400 text-xs">
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
                  {CITIES_SLIDES.map(s => (
                    <li key={s.id}>
                      <a href={s.locationPath} className="hover:text-emerald-400 transition flex items-center justify-between">
                        <span>{s.name}</span>
                        <span className="text-[10px] text-slate-500">SS-316</span>
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

        </main>
      )}

      {/* ========================================================= */}
      {/* WHATSAPP LEAD MODAL WITH DYNAMIC QR CODE                  */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#090d0b] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
            
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
                  Selected City Hub
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
                  Corridor / Community
                </label>
                <input 
                  type="text"
                  placeholder="e.g. Madhurawada High-Rises"
                  value={selectedCorridor}
                  onChange={(e) => setSelectedCorridor(e.target.value)}
                  className="w-full bg-black/60 border border-emerald-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                >
                </input>
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

    </div>
  );
}
