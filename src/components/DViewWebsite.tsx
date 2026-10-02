import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Phone, CheckCircle2, X, 
  Flame, Baby, Cat, HeartHandshake, Eye, Sparkles, 
  Droplets, ArrowUpRight, HelpCircle, MapPin, ArrowLeft,
  Wrench, Lock, Gift, Mail, MessageSquare, Building2
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
    emotionHook: 'Mana Vizag sea coast view invisible grills valla asalu block avvakunda entha luxury ga undo!',
    landmarkDesc: 'Luxury penthouse interior balcony framing RK Beach coastal waves and Kailasagiri hillside through vertical SS-316 cables.',
    heroImage: '/assets/locations/vizag-novotel-straight.jpg',
    activeBelts: ['Madhurawada (27-Floor High-Rises)', 'Yendada', 'Rushikonda', 'PM Palem', 'Anandapuram', 'Pendurthi', 'Gajuwaka'],
    weatherChallenge: "Vizag's high-salinity salt-air and marine damp humidity rapidly corrode cheap iron or low-grade steel wires within months.",
    weatherSolution: 'Strictly Marine Grade SS-316 infused with Molybdenum core for zero-decay corrosion resistance.',
    subLocations: [
      {
        name: 'Madhurawada (27-Floor High-Rises)',
        elevation: '25th-Floor Penthouse Balcony View',
        tag: '25TH-FLOOR PENTHOUSE | 27 TOWERS LOCKDOWN',
        desc: '25th-floor penthouse balcony looking through vertical SS-316 wires at high-rise valley towers (like MVV The Grand) surrounded by green coastal hills.',
        image: '/assets/locations/sub/vizag-madhurawada.png'
      },
      {
        name: 'Yendada Sea-Facing Corridor',
        elevation: 'High-Altitude Bay Panoramas',
        tag: 'HIGH-ALTITUDE BAY PANORAMA | MARINE-GRADE SS-316',
        desc: 'Wide balcony perspective facing the deep coastal ocean shoreline through crisp, transparent safety cables.',
        image: '/assets/locations/sub/vizag-yendada.png'
      },
      {
        name: 'Rushikonda Luxury Hillside',
        elevation: 'Coastal Villa Balconies',
        tag: 'COASTAL VILLA BALCONIES | UNBLOCKED BLUE WAVES',
        desc: 'Luxury coastal hillside villa balcony overlooking turquoise blue ocean waves crashing near rocky shores, perfectly framed by vertical safety wires.',
        image: '/assets/locations/sub/vizag-rushikonda.png'
      },
      {
        name: 'PM Palem (Cricket Stadium Road)',
        elevation: 'Gated Community High-Rises',
        tag: 'GATED COMMUNITY HIGH-RISE | ZERO-CLIMB TODDLER SAFE',
        desc: 'Modern gated community high-rise elevation looking towards mountain ridges through 2-inch safe spaced cables.',
        image: '/assets/locations/sub/vizag-pmpalem.png'
      },
      {
        name: 'Anandapuram Growth Corridor',
        elevation: 'Valley Elevation Penthouses',
        tag: 'VALLEY ELEVATION PENTHOUSE | NATURAL CROSS-AIRFLOW',
        desc: 'High-rise apartment balcony overlooking lush green open landscapes and modern expressway developments.',
        image: '/assets/locations/sub/vizag-anandapuram.png'
      },
      {
        name: 'Gajuwaka & Pendurthi Belt',
        elevation: 'Industrial & Urban Towers',
        tag: 'INDUSTRIAL & URBAN TOWERS | ANTI-STATIC DUST RESISTANT',
        desc: 'Urban high-rise apartment balcony framed with anti-dust coated SS-316 wires.',
        image: '/assets/locations/sub/vizag-gajuwaka.png'
      }
    ]
  },
  {
    id: 'rajahmundry',
    locationPath: '/locations/rajahmundry',
    slug: 'rajahmundry',
    name: 'Rajamahendravaram',
    cityShort: 'RAJAHMUNDRY',
    categoryTag: 'RIVERFRONT HERITAGE LIVING | BRIGHT & SUNLIT ELEVATIONS',
    mainTitle: 'SAFEGUARDING GODAVARI PRIDE — RAJAMAHENDRY',
    subline: 'SS-316 Invisible Grills with Unobstructed Godavari Arch Bridge Views.',
    microCue: 'Tap anywhere to view Rajamahendravaram projects & pricing',
    badge: 'Godavari Riverfront Corridor',
    emotionHook: 'Pigeon problem lekunda, challani Godavari gaali & arch bridge view asalu aagakunda intiki 100% safety!',
    landmarkDesc: 'Modern apartment balcony with floor tiles, railing, and vertical invisible safety wires framing the Godavari Arch Bridge and river cruise boats.',
    heroImage: '/assets/locations/rajahmundry-godavari-bridge.jpg',
    activeBelts: ['Morampudi', 'Bommuru', 'Diwancheruvu', 'Lalacheruvu', 'Vemagiri', 'Gadaala Residential Belts'],
    weatherChallenge: 'Daily river vapor mist and heavy pigeon nesting colonies on open balcony ledges.',
    weatherSolution: 'Precision 2-inch SS-316 tensioned cables preventing bird entry while allowing 99% free river cross-ventilation.',
    subLocations: [
      {
        name: 'Morampudi Residential Towers',
        elevation: 'River-View Balcony Corridors',
        tag: 'RIVER-VIEW BALCONY | FRESH RIVER BREEZE',
        desc: 'High-rise apartment balcony looking out at open green residential layouts and fresh Godavari breeze through vertical wires.',
        image: '/assets/locations/sub/rajahmundry-morampudi.png'
      },
      {
        name: 'Godavari Arch Bridge Riverfront',
        elevation: 'Historic River Panorama',
        tag: 'ICONIC HERITAGE VIEW | 100% PIGEON SHIELD',
        desc: 'Balcony view directly framing the yellow Godavari Arch Bridge and boats drifting on the water through transparent SS-316 wires.',
        image: '/assets/locations/rajahmundry-godavari-bridge.jpg'
      },
      {
        name: 'Bommuru Gated Communities',
        elevation: 'Mid & High-Rise Apartments',
        tag: 'ZERO BIRD DROPPINGS | 2-INCH SAFE SPACING',
        desc: 'Luxury society balcony view with pigeon-proof vertical safety wire screens.',
        image: '/assets/locations/sub/rajahmundry-bommuru.png'
      },
      {
        name: 'Diwancheruvu & Lalacheruvu Hub',
        elevation: 'Highway High-Rise Towers',
        tag: 'ELEVATED HIGHWAY TOWERS | WIND & DUST SHIELD',
        desc: 'Elevated highway residential towers with clean sunlight penetration.',
        image: '/assets/locations/sub/rajahmundry-diwancheruvu.png'
      },
      {
        name: 'Vemagiri Riverfront Belts',
        elevation: 'Godavari Bank Balconies',
        tag: 'RIVERBANK APARTMENT TERRACE | ZERO FALL HAZARD',
        desc: 'Riverbank apartment terrace overlooking water streams through stainless-steel invisible grills.',
        image: '/assets/locations/sub/rajahmundry-vemagiri.png'
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
        image: '/assets/corridors/vijayawada-benzcircle.jpg'
      },
      {
        name: 'Amaravati HappyNest (G+18)',
        elevation: 'G+18 IT & Gov Housing Enclave',
        tag: 'High-Rise Certified',
        desc: 'Precision 50mm vertical wire spacing delivering 100% toddler fall security for HappyNest apartments.',
        image: '/assets/corridors/vijayawada-happynest.jpg'
      },
      {
        name: 'Moghalrajpuram Hillside Flats',
        elevation: 'Elevated Ridge-View Apartments',
        tag: 'Vertigo Elimination',
        desc: 'Solid structural tension support providing calm reassurance for seniors on elevated valley terraces.',
        image: '/assets/corridors/vijayawada-moghalrajpuram.jpg'
      },
      {
        name: 'Gunadala & Ramavarappadu',
        elevation: 'Premium Gated Societies',
        tag: '400 KG / Cable Load',
        desc: 'Multi-strand core cables withstand body impacts and heavy leaning without slackening.',
        image: '/assets/corridors/vijayawada-gunadala.jpg'
      },
      {
        name: 'Kanuru & Poranki Belt',
        elevation: 'Expanding Luxury Suburbs',
        tag: '100% Cross Ventilation',
        desc: 'Natural daylight and cross-ventilation flow freely, cutting AC power loads while assuring child safety.',
        image: '/assets/corridors/vijayawada-kanuru.jpg'
      },
      {
        name: 'Tadepalli Riverside Towers',
        elevation: 'Krishna Riverfront Penthouses',
        tag: 'River Humidity Proof',
        desc: 'Marine grade SS-316 cables chemically immune to Krishna river vapor mist and monsoon rains.',
        image: '/assets/corridors/vijayawada-tadepalli.jpg'
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
        image: '/assets/corridors/guntur-brodipet.jpg'
      },
      {
        name: 'Arundelpet Modern Towers',
        elevation: 'High-Density Residential Hub',
        tag: 'Zero-Climb Spacing',
        desc: 'Vertical 2-inch intervals with zero horizontal footing prevent climbing hazards completely.',
        image: '/assets/corridors/guntur-arundelpet.jpg'
      },
      {
        name: 'Amaravati Road Corridor',
        elevation: 'Luxury Gated Towers',
        tag: 'Kondaveedu Ridge View',
        desc: 'Unblocked skyline vistas overlooking green ridges while providing structural safety.',
        image: '/assets/corridors/guntur-amaravatiroad.jpg'
      },
      {
        name: 'Namburu IT & University Belt',
        elevation: 'Fast-Growing Skyscraper Colonies',
        tag: 'Anti-Static Nylon',
        desc: 'Special clear nylon outer layer sheds dust with every rain shower, keeping maintenance zero.',
        image: '/assets/corridors/guntur-namburu.jpg'
      },
      {
        name: 'Kaza & Tadepalli Belt',
        elevation: 'Twin-City Expressway Towers',
        tag: '100% Daylighting',
        desc: 'Bright sunlight fills the interiors naturally without obstructing windows or balcony doors.',
        image: '/assets/corridors/guntur-kaza.jpg'
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
        image: '/assets/corridors/kakinada-vakalapudi.jpg'
      },
      {
        name: 'Sarpavaram High-Rise Towers',
        elevation: 'Gated Residential Colonies',
        tag: 'Toddler Lockdown Safe',
        desc: 'Ensures absolute fall containment up to the highest floors while allowing sea breeze in.',
        image: '/assets/corridors/kakinada-sarpavaram.jpg'
      },
      {
        name: 'Madhavapatnam Residential Hub',
        elevation: 'Family Apartment Balconies',
        tag: 'Bird Dropping Barrier',
        desc: 'Prevents pigeons from perching on balcony rails and contaminating air-conditioning compressors.',
        image: '/assets/corridors/kakinada-madhavapatnam.jpg'
      },
      {
        name: 'Ramanayyapeta Urban Flatted Living',
        elevation: 'City Center Elevations',
        tag: '1-Min Safe Fire Egress',
        desc: 'Standard manual wire cutters sever cables easily during emergency evacuation.',
        image: '/assets/corridors/kakinada-ramanayyapeta.jpg'
      },
      {
        name: 'Jagannaickpur Waterfront Enclaves',
        elevation: 'Canal & Coastal Flats',
        tag: 'Corrosion-Free Tracks',
        desc: 'Heavy-gauge anodized aluminum tracks anchored firmly into structural RCC concrete.',
        image: '/assets/corridors/kakinada-jagannaickpur.jpg'
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
        image: '/assets/corridors/nellore-maguntalayout.jpg'
      },
      {
        name: 'Balaji Nagar Elevated Residencies',
        elevation: 'High-Floor Family Apartments',
        tag: '400 KG / Cable Strength',
        desc: 'Solid cable structural reassurance preventing vertigo and loss-of-balance fears.',
        image: '/assets/corridors/nellore-balajinagar.jpg'
      },
      {
        name: 'Dargamitta Corridors',
        elevation: 'Terrace & High Balcony Flats',
        tag: 'Anti-Sag Anchoring',
        desc: 'Calibrated tension turnbuckles prevent any cable sagging or loosening over time.',
        image: '/assets/corridors/nellore-dargamitta.jpg'
      },
      {
        name: 'Vedayapalem Riverfront Belt',
        elevation: 'Waterfront Damp-Shield Balconies',
        tag: 'Monsoon Proof SS-316',
        desc: 'Immune to moisture staining, rust tears, or weathering during humid coastal monsoons.',
        image: '/assets/corridors/nellore-vedayapalem.jpg'
      },
      {
        name: 'Podalakur Road & Kavali Belt',
        elevation: 'Expanding Gated Communities',
        tag: 'Pest & Pigeon Control',
        desc: '50mm spacing physically keeps pigeons out, ensuring clean and enjoyable morning tea sessions.',
        image: '/assets/corridors/nellore-podalakur.jpg'
      }
    ]
  }
];

// --- CORRIDOR SPECIFIC ASSET REGISTRY (BRIGHT BALCONY PERSPECTIVES) ---
export interface CorridorAssetInfo {
  image: string;
  title: string;
  spec: string;
  cityId?: string;
}

export const CORRIDOR_ASSETS: Record<string, CorridorAssetInfo> = {
  // Vizag Corridors
  "Madhurawada": {
    image: "/assets/corridors/vizag-madhurawada.jpg",
    title: "Madhurawada 27-Floor High-Rises",
    spec: "Valley Elevation | 27 Towers Lockdown",
    cityId: "vizag"
  },
  "Madhurawada (27-Floor High-Rises)": {
    image: "/assets/corridors/vizag-madhurawada.jpg",
    title: "Madhurawada 27-Floor High-Rises",
    spec: "Valley Elevation | 27 Towers Lockdown",
    cityId: "vizag"
  },
  "Yendada": {
    image: "/assets/corridors/vizag-yendada.jpg",
    title: "Yendada Sea-Facing Corridor",
    spec: "High-Altitude Bay Panoramas",
    cityId: "vizag"
  },
  "Yendada Sea-Facing Corridor": {
    image: "/assets/corridors/vizag-yendada.jpg",
    title: "Yendada Sea-Facing Corridor",
    spec: "High-Altitude Bay Panoramas",
    cityId: "vizag"
  },
  "Rushikonda": {
    image: "/assets/corridors/vizag-rushikonda.jpg",
    title: "Rushikonda Luxury Hillside",
    spec: "Coastal Villa Balconies | Unblocked Waves",
    cityId: "vizag"
  },
  "Rushikonda Luxury Hillside": {
    image: "/assets/corridors/vizag-rushikonda.jpg",
    title: "Rushikonda Luxury Hillside",
    spec: "Coastal Villa Balconies | Unblocked Waves",
    cityId: "vizag"
  },
  "PM Palem": {
    image: "/assets/corridors/vizag-pmpalem.jpg",
    title: "PM Palem (Cricket Stadium Road)",
    spec: "Gated Community High-Rise | Toddler Safe",
    cityId: "vizag"
  },
  "PM Palem (Cricket Stadium Road)": {
    image: "/assets/corridors/vizag-pmpalem.jpg",
    title: "PM Palem (Cricket Stadium Road)",
    spec: "Gated Community High-Rise | Toddler Safe",
    cityId: "vizag"
  },
  "Anandapuram": {
    image: "/assets/corridors/vizag-anandapuram.jpg",
    title: "Anandapuram Growth Corridor",
    spec: "Valley Elevation Penthouses | Cross-Airflow",
    cityId: "vizag"
  },
  "Anandapuram Growth Corridor": {
    image: "/assets/corridors/vizag-anandapuram.jpg",
    title: "Anandapuram Growth Corridor",
    spec: "Valley Elevation Penthouses | Cross-Airflow",
    cityId: "vizag"
  },
  "Gajuwaka": {
    image: "/assets/corridors/vizag-gajuwaka.jpg",
    title: "Gajuwaka & Pendurthi Belt",
    spec: "Industrial & Urban Towers | Anti-Dust",
    cityId: "vizag"
  },
  "Gajuwaka & Pendurthi Belt": {
    image: "/assets/corridors/vizag-gajuwaka.jpg",
    title: "Gajuwaka & Pendurthi Belt",
    spec: "Industrial & Urban Towers | Anti-Dust",
    cityId: "vizag"
  },

  // Rajahmundry Corridors
  "Morampudi": {
    image: "/assets/corridors/rajahmundry-morampudi.jpg",
    title: "Morampudi Residential Towers",
    spec: "Riverfront Airflow | High-Rise Shield",
    cityId: "rajahmundry"
  },
  "Morampudi Residential Towers": {
    image: "/assets/corridors/rajahmundry-morampudi.jpg",
    title: "Morampudi Residential Towers",
    spec: "Riverfront Airflow | High-Rise Shield",
    cityId: "rajahmundry"
  },
  "Godavari Arch Bridge": {
    image: "/assets/locations/rajahmundry-godavari-bridge.jpg",
    title: "Godavari Arch Bridge Riverfront",
    spec: "Iconic Heritage View | 100% Pigeon Shield",
    cityId: "rajahmundry"
  },
  "Godavari Arch Bridge Riverfront": {
    image: "/assets/locations/rajahmundry-godavari-bridge.jpg",
    title: "Godavari Arch Bridge Riverfront",
    spec: "Iconic Heritage View | 100% Pigeon Shield",
    cityId: "rajahmundry"
  },
  "Bommuru": {
    image: "/assets/corridors/rajahmundry-bommuru.jpg",
    title: "Bommuru Gated Communities",
    spec: "Zero Bird Droppings | 2-Inch Safe Spacing",
    cityId: "rajahmundry"
  },
  "Bommuru Gated Communities": {
    image: "/assets/corridors/rajahmundry-bommuru.jpg",
    title: "Bommuru Gated Communities",
    spec: "Zero Bird Droppings | 2-Inch Safe Spacing",
    cityId: "rajahmundry"
  },
  "Diwancheruvu": {
    image: "/assets/corridors/rajahmundry-diwancheruvu.jpg",
    title: "Diwancheruvu & Lalacheruvu Hub",
    spec: "Elevated Highway Towers | Wind & Dust Shield",
    cityId: "rajahmundry"
  },
  "Diwancheruvu & Lalacheruvu Hub": {
    image: "/assets/corridors/rajahmundry-diwancheruvu.jpg",
    title: "Diwancheruvu & Lalacheruvu Hub",
    spec: "Elevated Highway Towers | Wind & Dust Shield",
    cityId: "rajahmundry"
  },
  "Vemagiri": {
    image: "/assets/corridors/rajahmundry-vemagiri.jpg",
    title: "Vemagiri Riverfront Belts",
    spec: "Riverbank Apartment Terrace | Zero Fall Hazard",
    cityId: "rajahmundry"
  },
  "Vemagiri Riverfront Belts": {
    image: "/assets/corridors/rajahmundry-vemagiri.jpg",
    title: "Vemagiri Riverfront Belts",
    spec: "Riverbank Apartment Terrace | Zero Fall Hazard",
    cityId: "rajahmundry"
  },

  // Vijayawada Corridors
  "Benz Circle": {
    image: "/assets/corridors/vijayawada-benzcircle.jpg",
    title: "Benz Circle Corridor Towers",
    spec: "15th-Floor Skyscraper Elevation | Urban View",
    cityId: "vijayawada"
  },
  "Benz Circle Corridor Towers": {
    image: "/assets/corridors/vijayawada-benzcircle.jpg",
    title: "Benz Circle Corridor Towers",
    spec: "15th-Floor Skyscraper Elevation | Urban View",
    cityId: "vijayawada"
  },
  "Amaravati HappyNest": {
    image: "/assets/corridors/vijayawada-happynest.jpg",
    title: "Amaravati HappyNest (G+18)",
    spec: "G+18 Floodplain Panoramas | 100% Toddler Safe",
    cityId: "vijayawada"
  },
  "Amaravati HappyNest (G+18)": {
    image: "/assets/corridors/vijayawada-happynest.jpg",
    title: "Amaravati HappyNest (G+18)",
    spec: "G+18 Floodplain Panoramas | 100% Toddler Safe",
    cityId: "vijayawada"
  },
  "Moghalrajpuram": {
    image: "/assets/corridors/vijayawada-moghalrajpuram.jpg",
    title: "Moghalrajpuram Hillside Flats",
    spec: "Elevated Ridge-View Apartments",
    cityId: "vijayawada"
  },
  "Gunadala": {
    image: "/assets/corridors/vijayawada-gunadala.jpg",
    title: "Gunadala & Ramavarappadu",
    spec: "Premium Gated Societies | 400 KG Load",
    cityId: "vijayawada"
  },
  "Kanuru": {
    image: "/assets/corridors/vijayawada-kanuru.jpg",
    title: "Kanuru & Poranki Belt",
    spec: "Expanding Luxury Suburbs | Cross-Ventilation",
    cityId: "vijayawada"
  },
  "Tadepalli": {
    image: "/assets/corridors/vijayawada-tadepalli.jpg",
    title: "Tadepalli Riverside Towers",
    spec: "Krishna Riverfront Penthouses",
    cityId: "vijayawada"
  },

  // Guntur Corridors
  "Brodipet": {
    image: "/assets/corridors/guntur-brodipet.jpg",
    title: "Brodipet High-End Residencies",
    spec: "Prime City Balcony Flats | Architectural Luxury",
    cityId: "guntur"
  },
  "Arundelpet": {
    image: "/assets/corridors/guntur-arundelpet.jpg",
    title: "Arundelpet Modern Towers",
    spec: "High-Density Residential Hub | Zero-Climb",
    cityId: "guntur"
  },
  "Amaravati Road": {
    image: "/assets/corridors/guntur-amaravatiroad.jpg",
    title: "Amaravati Road Corridor",
    spec: "Luxury Gated Towers | Kondaveedu View",
    cityId: "guntur"
  },
  "Namburu": {
    image: "/assets/corridors/guntur-namburu.jpg",
    title: "Namburu IT & University Belt",
    spec: "Skyscraper Colonies | Anti-Static Nylon",
    cityId: "guntur"
  },
  "Kaza": {
    image: "/assets/corridors/guntur-kaza.jpg",
    title: "Kaza & Tadepalli Belt",
    spec: "Expressway Towers | 100% Daylighting",
    cityId: "guntur"
  },

  // Kakinada Corridors
  "Vakalapudi": {
    image: "/assets/corridors/kakinada-vakalapudi.jpg",
    title: "Vakalapudi Port & Lighthouse Corridor",
    spec: "Sea-Front Balcony Residences | Marine-Grade Alloy",
    cityId: "kakinada"
  },
  "Sarpavaram": {
    image: "/assets/corridors/kakinada-sarpavaram.jpg",
    title: "Sarpavaram High-Rise Towers",
    spec: "Gated Residential Colonies | Toddler Lockdown",
    cityId: "kakinada"
  },
  "Madhavapatnam": {
    image: "/assets/corridors/kakinada-madhavapatnam.jpg",
    title: "Madhavapatnam Residential Hub",
    spec: "Family Balconies | Bird Dropping Barrier",
    cityId: "kakinada"
  },
  "Ramanayyapeta": {
    image: "/assets/corridors/kakinada-ramanayyapeta.jpg",
    title: "Ramanayyapeta Urban Flatted Living",
    spec: "City Center Elevations | 1-Min Fire Egress",
    cityId: "kakinada"
  },
  "Jagannaickpur": {
    image: "/assets/corridors/kakinada-jagannaickpur.jpg",
    title: "Jagannaickpur Waterfront Enclaves",
    spec: "Canal & Coastal Flats | Corrosion-Free Tracks",
    cityId: "kakinada"
  },

  // Nellore Corridors
  "Magunta Layout": {
    image: "/assets/corridors/nellore-maguntalayout.jpg",
    title: "Magunta Layout Premium Flats",
    spec: "Central Luxury Balconies | Sunset View",
    cityId: "nellore"
  },
  "Balaji Nagar": {
    image: "/assets/corridors/nellore-balajinagar.jpg",
    title: "Balaji Nagar Elevated Residencies",
    spec: "High-Floor Family Apartments | 400 KG Strength",
    cityId: "nellore"
  },
  "Dargamitta": {
    image: "/assets/corridors/nellore-dargamitta.jpg",
    title: "Dargamitta Corridors",
    spec: "Terrace & High Balcony Flats | Anti-Sag Anchoring",
    cityId: "nellore"
  },
  "Vedayapalem": {
    image: "/assets/corridors/nellore-vedayapalem.jpg",
    title: "Vedayapalem Riverfront Belt",
    spec: "Waterfront Balconies | Monsoon Proof SS-316",
    cityId: "nellore"
  },
  "Podalakur Road": {
    image: "/assets/corridors/nellore-podalakur.jpg",
    title: "Podalakur Road & Kavali Belt",
    spec: "Expanding Gated Communities | Pest Control",
    cityId: "nellore"
  }
};

// --- REAL SOCIETY INSTALLATIONS & SOCIAL PROOF DATA ---
export interface SocietyInstallation {
  id: string;
  cityId: string;
  cityName: string;
  societyName: string;
  corridor: string;
  floor: string;
  specs: string;
  highlight: string;
  image: string;
  unitsProtected: string;
  customerNote: string;
}

export const SOCIETY_INSTALLATIONS: SocietyInstallation[] = [
  // Visakhapatnam Hub
  {
    id: 'mvv-grand',
    cityId: 'vizag',
    cityName: 'Visakhapatnam',
    societyName: 'MVV GV The Grand',
    corridor: 'Madhurawada',
    floor: '25th-Floor Penthouse',
    specs: '2.5mm Marine SS-316',
    highlight: '100% Unblocked Hilltop & Valley View',
    image: '/assets/locations/sub/vizag-madhurawada.png',
    unitsProtected: '34 Balconies Secured',
    customerNote: 'Valley breeze passes freely with zero vertigo risk for kids up to 25 floors.'
  },
  {
    id: 'sanskriti-bayfront',
    cityId: 'vizag',
    cityName: 'Visakhapatnam',
    societyName: 'Sanskriti Bayfront',
    corridor: 'Rushikonda',
    floor: 'Sea-Facing Tower (14th Floor)',
    specs: '2.5mm Molybdenum SS-316',
    highlight: 'Zero-Decay Marine Coating | Pet & Child Lockdown',
    image: '/assets/locations/sub/vizag-rushikonda.png',
    unitsProtected: '22 Balconies Secured',
    customerNote: 'Zero rust from coastal salt air. Pristine view of turquoise waves.'
  },
  {
    id: 'oceanus-towers',
    cityId: 'vizag',
    cityName: 'Visakhapatnam',
    societyName: 'Oceanus Towers',
    corridor: 'Yendada',
    floor: '18th-Floor Coastal Flat',
    specs: '2.5mm Marine SS-316',
    highlight: 'Pigeon Exclusion Grid & Coastal Bay Protection',
    image: '/assets/locations/sub/vizag-yendada.png',
    unitsProtected: '28 Balconies Secured',
    customerNote: '100% bird droppings prevention without blocking the morning ocean sunrise.'
  },

  // Rajamahendravaram Hub
  {
    id: 'godavari-riverfront',
    cityId: 'rajahmundry',
    cityName: 'Rajamahendravaram',
    societyName: 'Godavari Riverfront Enclave',
    corridor: 'Morampudi',
    floor: '12th-Floor Riverfront Balcony',
    specs: '2.5mm Marine SS-316',
    highlight: 'River-Breeze Balcony | 10-Year Anti-Rust Certified',
    image: '/assets/locations/sub/rajahmundry-morampudi.png',
    unitsProtected: '19 Balconies Secured',
    customerNote: 'Continuous river humidity tested. Zero corrosion with 99% clear river sightline.'
  },
  {
    id: 'sri-krishna-gated',
    cityId: 'rajahmundry',
    cityName: 'Rajamahendravaram',
    societyName: 'Sri Krishna Gated Society',
    corridor: 'Bommuru',
    floor: 'Duplex Terrace & Balcony',
    specs: '2.5mm Virgin SS-316',
    highlight: 'Toddler Fall-Safe Lockdown | 2-Inch Safe Spacing',
    image: '/assets/locations/sub/rajahmundry-bommuru.png',
    unitsProtected: '15 Balconies Secured',
    customerNote: 'Eliminated pigeon roosting and gives parents complete peace of mind.'
  },

  // Vijayawada & Amaravati Hub
  {
    id: 'happynest-amaravati',
    cityId: 'vijayawada',
    cityName: 'Vijayawada & Amaravati',
    societyName: 'APCRDA HappyNest',
    corridor: 'Amaravati (G+18)',
    floor: '16th-Floor High-Rise Unit',
    specs: '3.0mm Heavy-Duty SS-316',
    highlight: 'High-Rise Safety Mesh | 1-Min Fire Cutter Egress Compliant',
    image: '/assets/corridors/vijayawada-happynest.jpg',
    unitsProtected: '48 Balconies Secured',
    customerNote: 'Complies with fire safety norms with clean 60-second emergency cutter escape.'
  },
  {
    id: 'tadepalli-riverside',
    cityId: 'vijayawada',
    cityName: 'Vijayawada & Amaravati',
    societyName: 'Tadepalli Riverside Residences',
    corridor: 'Tadepalli',
    floor: '10th-Floor Riverbank Flat',
    specs: '2.5mm Marine SS-316',
    highlight: 'Krishna River Mist Protection | SS-316 Metallurgy',
    image: '/assets/corridors/vijayawada-tadepalli.jpg',
    unitsProtected: '26 Balconies Secured',
    customerNote: 'Uninterrupted view of Prakasam Barrage waters and Krishna greenery.'
  },

  // Guntur Hub
  {
    id: 'brodipet-heights',
    cityId: 'guntur',
    cityName: 'Guntur',
    societyName: 'Brodipet Heights',
    corridor: 'Brodipet',
    floor: '14th-Floor Luxury Flat',
    specs: '2.5mm High-Tensile SS-316',
    highlight: 'High-Wind Resistance & Child Proofing',
    image: '/assets/corridors/guntur-brodipet.jpg',
    unitsProtected: '18 Balconies Secured',
    customerNote: 'Withstands strong gusts from Kondaveedu hills with zero wire vibration.'
  },

  // Kakinada Hub
  {
    id: 'vakalapudi-port-view',
    cityId: 'kakinada',
    cityName: 'Kakinada',
    societyName: 'Vakalapudi Port View Towers',
    corridor: 'Vakalapudi Port Corridor',
    floor: '11th-Floor Port Harbor Flat',
    specs: '2.5mm Marine Grade SS-316',
    highlight: 'Salt-Spray Corrosion Immunity | Flat Coastal Panoramas',
    image: '/assets/corridors/kakinada-vakalapudi.jpg',
    unitsProtected: '21 Balconies Secured',
    customerNote: 'Full view of lighthouse and Bay of Bengal shipping vessels with zero rust.'
  },

  // Nellore Hub
  {
    id: 'magunta-luxury',
    cityId: 'nellore',
    cityName: 'Nellore',
    societyName: 'Magunta Layout Luxury Flats',
    corridor: 'Magunta Layout',
    floor: '8th-Floor Riverfront View',
    specs: '2.5mm Marine SS-316',
    highlight: '400 KG Tensile Strength Fall Protection',
    image: '/assets/corridors/nellore-magunta.jpg',
    unitsProtected: '17 Balconies Secured',
    customerNote: 'Penna river breeze stays unblocked while toddlers play safely.'
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
    desc: 'Unlike welded iron cages that trap families during fires, SS-316 wires can be severed in under 60 seconds with emergency cutters.',
    teluguDesc: 'Box type traditional iron mesh fixed ga untayi, fire accident time lo escape avvalem. Mana high-tensile wire setup lo standard cutter tho 1-minute lo easy wires cut chesi safe escape avvachu!',
    image: '/assets/pillars/fire-escape.png',
    stat: '60 SEC CUT ESCAPE'
  },
  {
    icon: Sparkles,
    title: 'Modern Luxury Look & Free Air',
    tagline: 'Eliminates Dark Iron Bars',
    badge: '99% TRANSPARENCY | ELIMINATES DARK IRON BARS',
    desc: 'Replaces ugly dark iron bars with invisible stainless-steel elegance, delivering 100% natural sunlight and cross-ventilation.',
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

// --- MOBILE FOCAL POINT & LANDMARK FRAMING HELPERS (< 768px) ---
export const getMobileFocalPosition = (nameOrKey?: string): string => {
  if (!nameOrKey) return 'center center';
  const clean = nameOrKey.toLowerCase();
  if (clean.includes('rushikonda')) return '40% center';
  if (clean.includes('madhurawada')) return '60% center';
  if (clean.includes('yendada')) return '35% center';
  if (clean.includes('morampudi')) return '45% center';
  if (clean.includes('bommuru')) return '40% center';
  if (clean.includes('rajahmundry') || clean.includes('arch bridge')) return 'center bottom 25%';
  if (clean.includes('vizag') || clean.includes('visakhapatnam')) return '35% center';
  if (clean.includes('benz') || clean.includes('vijayawada')) return '45% center';
  if (clean.includes('happynest') || clean.includes('amaravati')) return '55% center';
  if (clean.includes('kakinada') || clean.includes('vakalapudi')) return '35% center';
  if (clean.includes('guntur') || clean.includes('brodipet')) return '50% center';
  if (clean.includes('nellore')) return '50% center';
  return 'center center';
};

export const getMobileLandmarkClass = (nameOrKey?: string): string => {
  if (!nameOrKey) return '';
  const clean = nameOrKey.toLowerCase();
  if (clean.includes('rushikonda')) return 'landmark-rushikonda';
  if (clean.includes('madhurawada')) return 'landmark-madhurawada';
  if (clean.includes('yendada')) return 'landmark-yendada';
  if (clean.includes('morampudi')) return 'landmark-morampudi';
  if (clean.includes('rajahmundry') || clean.includes('arch bridge')) return 'landmark-rajahmundry';
  if (clean.includes('vizag') || clean.includes('visakhapatnam')) return 'landmark-vizag';
  if (clean.includes('benz') || clean.includes('vijayawada')) return 'landmark-vijayawada';
  if (clean.includes('happynest') || clean.includes('amaravati')) return 'landmark-happynest';
  if (clean.includes('guntur')) return 'landmark-guntur';
  if (clean.includes('kakinada')) return 'landmark-kakinada';
  if (clean.includes('nellore')) return 'landmark-nellore';
  return '';
};

interface DViewWebsiteProps {
  initialCitySlug?: string;
  initialCorridor?: string;
  tier?: 'tier1' | 'tier2' | 'tier3';
}

export const WARRANTY_BADGES = [
  {
    icon: ShieldCheck,
    title: '10-Year 100% Anti-Rust Replacement Warranty',
    highlight: 'SS-316 Molybdenum Core',
    desc: 'Manufactured strictly using SS-316 with 2-3% Molybdenum core. If any rust, oxidation, or corrosion occurs in coastal salt-air or river humidity, we provide 100% FREE wire-and-track replacement.'
  },
  {
    icon: Lock,
    title: '400 KG / Cable Tensile Breakage Guarantee',
    highlight: 'UV-Nylon Multi-Strand',
    desc: 'Multi-strand 316-grade stainless steel cables encased in UV-stabilized, transparent high-grade nylon. Guaranteed zero structural breakage under extreme high-rise impacts.'
  },
  {
    icon: Wrench,
    title: 'Lifetime Zero-Loose Wires Service Guarantee',
    highlight: '6063-T6 Structural Tracks',
    desc: 'Solid anchored installation using 6063-T6 heavy-duty structural aluminum tracks. Includes free periodic wire tension inspections and re-tightening support.'
  },
  {
    icon: Gift,
    title: 'Complimentary Maintenance Care Kit (Free Gift)',
    highlight: 'Free Kit On Installation',
    desc: 'Every confirmed site installation receives a complimentary High-Grade Microfiber Cleaning Cloth + Specialized SS Surface Shine Spray Kit for lifetime wire clarity.'
  }
];

export default function DViewWebsite({ initialCitySlug, initialCorridor, tier = 'tier1' }: DViewWebsiteProps) {
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
  const [selectedCorridor, setSelectedCorridor] = useState<string>(() => {
    if (initialCorridor) return initialCorridor;
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const c = params.get('corridor');
      if (c) return c;
    }
    return activeSlide.subLocations[0]?.name || activeSlide.activeBelts[0] || '';
  });

  // Read corridor from URL if available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateFromUrl = () => {
        const params = new URLSearchParams(window.location.search);
        const corridorParam = params.get('corridor');
        if (corridorParam) {
          setSelectedCorridor(corridorParam);
        } else if (initialCorridor) {
          setSelectedCorridor(initialCorridor);
        }
      };

      updateFromUrl();
      window.addEventListener('popstate', updateFromUrl);
      return () => window.removeEventListener('popstate', updateFromUrl);
    }
  }, [initialCorridor]);

  // Helper to resolve active corridor asset for dynamic Tier 3 Hero
  const getActiveCorridorAsset = () => {
    const q = (selectedCorridor || '').trim();
    if (!q) {
      const defaultSub = activeSlide.subLocations[0];
      return {
        name: defaultSub?.name || activeSlide.name,
        title: defaultSub?.name || activeSlide.name,
        image: defaultSub?.image || activeSlide.heroImage,
        spec: defaultSub?.tag || activeSlide.badge
      };
    }

    const cleanQ = q.toLowerCase();

    // 1. Direct or fuzzy lookup in CORRIDOR_ASSETS
    for (const [key, val] of Object.entries(CORRIDOR_ASSETS)) {
      const cleanKey = key.toLowerCase();
      if (cleanKey === cleanQ || cleanKey.includes(cleanQ) || cleanQ.includes(cleanKey)) {
        return {
          name: q,
          title: val.title || key,
          image: val.image,
          spec: val.spec
        };
      }
    }

    // 2. Lookup in activeSlide.subLocations
    const subMatch = activeSlide.subLocations.find(s => {
      const cleanSub = s.name.toLowerCase();
      return cleanSub === cleanQ || cleanSub.includes(cleanQ) || cleanQ.includes(cleanSub);
    });

    if (subMatch) {
      return {
        name: subMatch.name,
        title: subMatch.name,
        image: subMatch.image,
        spec: subMatch.tag
      };
    }

    // 3. Fallback
    return {
      name: q,
      title: q,
      image: activeSlide.subLocations[0]?.image || activeSlide.heroImage,
      spec: activeSlide.badge
    };
  };

  const activeCorridorAsset = getActiveCorridorAsset();
  const currentHeroImage = activeCorridorAsset.image;
  const currentCorridorDisplayName = activeCorridorAsset.title || selectedCorridor || activeSlide.name;

  // Calculator State
  const [width, setWidth] = useState(10);
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

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello D-View Invisible Safety Concierge!\n` +
      `I want to book a Free Site Visit & Measurement.\n\n` +
      `📍 City Hub: ${selectedHub}\n` +
      `🏢 Community / Corridor: ${currentCorridorDisplayName}\n` +
      `📐 Dimensions: ${width} ft (W) x ${height} ft (H) = ${calculatedArea} sq.ft\n` +
      `🛡️ Wire Grade: SS-316 Marine Grade (${cableThickness} mm)\n` +
      `💰 Indicative Range: ₹${estimatedMin.toLocaleString()} - ₹${estimatedMax.toLocaleString()}\n` +
      `👤 Name: ${customerName || 'Resident'}\n` +
      `📞 Phone: ${customerPhone || 'Via WhatsApp'}`
    );
  };

  // Society Proof Filter State
  const [societyFilter, setSocietyFilter] = useState<string>(activeSlide.id);

  useEffect(() => {
    setSocietyFilter(activeSlide.id);
  }, [activeSlide.id]);

  const filteredSocieties = societyFilter === 'all'
    ? SOCIETY_INSTALLATIONS
    : SOCIETY_INSTALLATIONS.filter(s => s.cityId === societyFilter);

  // =========================================================================
  // REUSABLE GLOBAL SECTIONS: PROOF, A (WARRANTY), B (CALCULATOR), C (FOOTER)
  // =========================================================================

  const renderSocietyProofSection = (isSnap = false) => (
    <section id="society-proof-section" className={`${isSnap ? 'snap-start' : ''} relative py-16 sm:py-20 px-5 sm:px-12 bg-[#090d0b] border-t border-white/10`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-3">
            <Building2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>REAL HIGH-RISE PROOF • 850+ VERIFIED APARTMENTS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-light uppercase text-slate-100 tracking-tight">
            RECENTLY COMPLETED INSTALLATIONS ACROSS ANDHRA SOCIETIES
          </h2>
          <p className="text-[#cbd5e1] text-xs sm:text-sm mt-3 leading-relaxed font-light">
            Over 850+ luxury high-rise balconies secured with certified SS-316 marine-grade invisible safety cables.
          </p>
        </div>

        {/* City Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All AP Hubs (850+)' },
            { id: 'vizag', label: 'Visakhapatnam' },
            { id: 'rajahmundry', label: 'Rajamahendravaram' },
            { id: 'vijayawada', label: 'Vijayawada & Amaravati' },
            { id: 'guntur', label: 'Guntur' },
            { id: 'kakinada', label: 'Kakinada' },
            { id: 'nellore', label: 'Nellore' },
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSocietyFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition cursor-pointer ${
                societyFilter === tab.id
                  ? 'bg-emerald-500 text-black shadow-[0_0_18px_rgba(16,185,129,0.4)]'
                  : 'bg-[#101714] text-slate-300 border border-white/10 hover:border-emerald-500/40 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Society Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSocieties.map((society) => (
            <div
              key={society.id}
              className="group rounded-3xl overflow-hidden border border-emerald-500/25 hover:border-emerald-500/60 bg-[#101714] transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(16,185,129,0.22)]"
            >
              <div>
                {/* 100% Clean Architectural Balcony Photo - ZERO floating badges over image */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden">
                  <img
                    src={society.image}
                    alt={`${society.societyName} SS-316 Balcony Invisible Grills`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    width="640"
                    height="360"
                  />
                  {/* Subtle vertical wire simulation overlay */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.18)_21px,rgba(255,255,255,0.02)_22px)] pointer-events-none" />
                  {/* Natural Daytime Architectural Clarity: Subtle bottom blend only */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#101714] to-transparent pointer-events-none" />
                </div>

                {/* Content Container Below Image */}
                <div className="p-6">
                  {/* Top Status & Units Row */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verified Installation</span>
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-200 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                      {society.unitsProtected}
                    </span>
                  </div>

                  {/* Society Name */}
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition mb-1">
                    {society.societyName}
                  </h3>

                  {/* Location Subline */}
                  <div className="flex items-center gap-1.5 text-xs text-[#cbd5e1] mb-3">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{society.corridor}, {society.cityName}</span>
                  </div>

                  {/* Specs & Floor Pill Container */}
                  <div className="p-3 rounded-xl bg-[#090d0b] border border-white/10 mb-3 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Elevation:</span>
                      <span className="text-slate-200 font-semibold">{society.floor}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Metallurgy:</span>
                      <span className="text-emerald-400 font-bold">{society.specs}</span>
                    </div>
                  </div>

                  {/* Highlight Feature */}
                  <div className="text-xs font-semibold text-emerald-300/90 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{society.highlight}</span>
                  </div>

                  {/* Resident / Society Feedback Note */}
                  <p className="text-xs text-slate-300 italic font-light leading-relaxed">
                    "{society.customerNote}"
                  </p>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#cbd5e1] font-medium">
                    10-Year Anti-Rust Guaranteed
                  </span>
                  <button
                    type="button"
                    onClick={() => handleOpenBooking(society.cityName, society.societyName)}
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Similar Setup</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );

  const renderWarrantySection = (isSnap = false) => (
    <section id="warranty-section" className={`${isSnap ? 'snap-start' : ''} relative py-20 px-5 sm:px-12 bg-[#090d0b] border-t border-white/10`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold block mb-2">
            UNCONDITIONAL PEACE OF MIND • STRUCTURAL INTEGRITY
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light uppercase text-slate-100 tracking-tight">
            OFFICIAL 10-YEAR STRUCTURAL WARRANTY & UNCONDITIONAL GUARANTEE
          </h2>
          <p className="text-[#cbd5e1] text-xs sm:text-sm mt-3 font-light leading-relaxed">
            Certified Virgin Marine-Grade SS-316 metallurgy engineered for coastal & riverfront longevity.
          </p>
        </div>

        {/* 4 Core Trust Cards (Grid layout with Emerald Borders & Glow) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WARRANTY_BADGES.map((badge, bIdx) => {
            const Icon = badge.icon;
            return (
              <div 
                key={bIdx}
                className="rounded-3xl p-6 sm:p-8 bg-[#101714] border border-emerald-500/25 hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(16,185,129,0.18)] group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    {badge.highlight}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {badge.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-emerald-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% Certified
                  </span>
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider">
                    D-View Guarantee
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Complimentary Maintenance Care Kit (Free Gift) Banner */}
        <div className="mt-12 rounded-3xl overflow-hidden bg-gradient-to-r from-[#101714] via-[#121f19] to-[#101714] border border-emerald-500/30 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
              <Gift className="w-3.5 h-3.5 text-emerald-400" />
              <span>Complimentary Care Kit on Site Installation</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Free SS-316 Maintenance & Surface Shine Care Kit
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-2xl leading-relaxed">
              Every confirmed site installation receives a complimentary High-Grade Microfiber Cleaning Cloth + Specialized SS Surface Shine Spray Kit for lifetime wire clarity.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleOpenBooking(selectedHub)}
            className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.35)] shrink-0 transition cursor-pointer"
          >
            Claim With Free Survey →
          </button>
        </div>
      </div>
    </section>
  );

  const renderCalculatorSection = (isSnap = false) => (
    <section id="estimate-calculator" className={`${isSnap ? 'snap-start' : ''} relative py-20 px-5 sm:px-12 bg-[#0c120f] border-t border-white/10`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold block mb-2">
            TRANSPARENT PRICING & ESTIMATOR
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light uppercase text-slate-100 tracking-tight">
            INSTANT BALCONY SAFETY ESTIMATE CALCULATOR
          </h2>
          <p className="text-[#cbd5e1] text-xs sm:text-sm mt-3 font-light leading-relaxed">
            Transparent, real-time pricing tailored to your balcony dimensions.
          </p>
        </div>

        <div className="bg-[#101714] border border-emerald-500/30 rounded-3xl p-6 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Sliders Column */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* City Selector */}
            <div>
              <label className="block text-xs uppercase font-bold text-slate-300 mb-2">
                Target City Hub
              </label>
              <select
                value={selectedHub}
                onChange={(e) => setSelectedHub(e.target.value)}
                className="w-full bg-[#090d0b] border border-emerald-500/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400 font-medium"
              >
                <option value="Visakhapatnam">Visakhapatnam (VIZAG)</option>
                <option value="Rajamahendravaram">Rajamahendravaram (RAJAHMUNDRY)</option>
                <option value="Vijayawada">Vijayawada & Amaravati (VIJAYAWADA)</option>
                <option value="Guntur">Guntur (GUNTUR)</option>
                <option value="Kakinada">Kakinada (KAKINADA)</option>
                <option value="Nellore">Nellore (NELLORE)</option>
              </select>
            </div>

            {/* Width Slider */}
            <div>
              <div className="flex justify-between items-center text-xs uppercase font-bold text-slate-300 mb-2">
                <span>Balcony Width (Feet)</span>
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
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>4 ft</span>
                <span>18 ft</span>
                <span>35 ft</span>
              </div>
            </div>

            {/* Height Slider */}
            <div>
              <div className="flex justify-between items-center text-xs uppercase font-bold text-slate-300 mb-2">
                <span>Balcony Height (Feet)</span>
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
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>3 ft</span>
                <span>8 ft (Default)</span>
                <span>14 ft</span>
              </div>
            </div>

            {/* Cable Specification Selector */}
            <div>
              <label className="block text-xs uppercase font-bold text-slate-300 mb-2">
                SS-316 Cable Thickness Selector
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { val: '2.0', label: '2.0 mm Standard', desc: 'Multi-strand transparent nylon coated' },
                  { val: '2.5', label: '2.5 mm High-Tensile', desc: 'Most Recommended Marine Grade' },
                  { val: '3.0', label: '3.0 mm Heavy-Duty', desc: 'Skyscraper Armor (G+15)' }
                ].map(spec => (
                  <button
                    key={spec.val}
                    type="button"
                    onClick={() => setCableThickness(spec.val)}
                    className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                      cableThickness === spec.val
                        ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.25)]'
                        : 'bg-[#090d0b] border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-bold block">{spec.label}</span>
                    <span className="text-[10px] text-emerald-400 block mt-1">{spec.desc}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Instant Live Pricing Card & Direct WhatsApp Booking */}
          <div className="lg:col-span-5 bg-[#090d0b] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="text-center">
              <span className="text-[11px] uppercase tracking-wider text-[#cbd5e1] font-semibold">
                Total Area
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white mt-1 mb-3">
                {calculatedArea} <span className="text-sm font-normal text-slate-400">sq.ft</span>
              </div>

              <span className="text-[11px] uppercase tracking-wider text-[#cbd5e1] font-semibold">
                Estimated Total
              </span>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1 mb-2 drop-shadow-[0_0_15px_rgba(16,185,129,0.35)]">
                ₹{estimatedMin.toLocaleString()} - ₹{estimatedMax.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-300 leading-normal font-light">
                Includes SS-316 cables, tracks, tensioners & installation.
              </p>
            </div>

            {/* Direct Inputs */}
            <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
              <div>
                <label className="text-[10px] uppercase font-bold text-[#cbd5e1] block mb-1">
                  Customer Name
                </label>
                <input 
                  type="text"
                  placeholder="e.g. Ramesh Varma"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#101714] border border-emerald-500/30 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-[#cbd5e1] block mb-1">
                  Phone Number
                </label>
                <input 
                  type="tel"
                  placeholder="+91 94943 28999"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-[#101714] border border-emerald-500/30 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            {/* Dynamic WhatsApp QR Code Inline */}
            <div className="bg-[#101714] border border-white/10 rounded-2xl p-4 text-center mt-4">
              <div className="w-28 h-28 mx-auto bg-white p-2 rounded-xl flex items-center justify-center shadow-lg">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://wa.me/919494328999?text=${getWhatsAppMessage()}`} 
                  alt="Dynamic WhatsApp QR Code"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                  width="112"
                  height="112"
                />
              </div>
              <span className="block text-[10px] text-slate-300 mt-2 font-medium">
                Scan QR code or click below for instant WhatsApp booking
              </span>
            </div>

            <div className="mt-4 space-y-2">
              <button
                type="button"
                onClick={() => handleOpenBooking(selectedHub)}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider block text-center shadow-[0_0_20px_rgba(16,185,129,0.35)] transition cursor-pointer"
              >
                Book Free Laser Measurement With This Quote →
              </button>
              <a 
                href={`https://wa.me/919494328999?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-white/5 hover:bg-white/10 border border-emerald-500/40 text-emerald-400 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider block text-center transition"
              >
                Direct WhatsApp Chat (+91 94943 28999)
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );

  const renderLuxuryFooter = (isSnap = false) => (
    <footer className={`${isSnap ? 'snap-start' : ''} relative border-t border-white/10 bg-[#090d0b] pt-16 pb-28 md:pb-14 px-5 sm:px-12 text-slate-400 text-xs`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Column 1: Brand & Direct Personal Concierge */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-white font-bold tracking-widest text-sm uppercase">D-VIEW INVISIBLE SAFETY GRILLS</span>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-300 font-light">
            India's premier architectural invisible safety grill specialist. 100% safety, zero view obstruction.
          </p>
          <div className="space-y-2 text-slate-200 text-xs pt-1">
            <a href="tel:+919494328999" className="flex items-center gap-2 hover:text-emerald-400 transition">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>📞 Direct Call: +91 94943 28999</span>
            </a>
            <a 
              href={`https://wa.me/919494328999?text=${getWhatsAppMessage()}`}
              target="_blank"
              rel="noreferrer" 
              className="flex items-center gap-2 hover:text-emerald-400 transition"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>💬 WhatsApp Concierge: +91 94943 28999</span>
            </a>
            <a href="mailto:invisiblesafety4@gmail.com" className="flex items-center gap-2 hover:text-emerald-400 transition">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>✉️ Official Email: invisiblesafety4@gmail.com</span>
            </a>
            <div className="pt-2 text-[11px] text-slate-400 leading-relaxed border-t border-white/5">
              <span className="text-slate-300 font-semibold block">🏢 Registered Head Office:</span>
              Rajamahendravaram, Andhra Pradesh.
            </div>
          </div>
        </div>

        {/* Column 2: Safety Collections */}
        <div>
          <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-3.5">
            Safety Collections
          </h4>
          <ul className="space-y-2 text-[11px] text-slate-300">
            <li><a href="/safety-pillars/vizag" className="hover:text-emerald-400 transition block">SS-316 Balcony Invisible Grills</a></li>
            <li><a href="/safety-pillars/vizag" className="hover:text-emerald-400 transition block">Window Architectural Safety Cables</a></li>
            <li><a href="/safety-pillars/vizag" className="hover:text-emerald-400 transition block">Penthouse & High-Rise Elevation Grills</a></li>
            <li><a href="/safety-pillars/vizag" className="hover:text-emerald-400 transition block">Duplex Staircase & Terrace Railing Grills</a></li>
            <li><a href="/safety-pillars/vizag" className="hover:text-emerald-400 transition block">Anti-Pigeon & Bird Exclusion Systems</a></li>
          </ul>
        </div>

        {/* Column 3: Quality Standards & Customer Assurance */}
        <div>
          <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-3.5">
            Quality Standards & Customer Assurance
          </h4>
          <ul className="space-y-2 text-[11px] text-slate-300">
            <li><span className="text-slate-300 block">100% Certified Virgin SS-316 Metallurgy</span></li>
            <li><span className="text-slate-300 block">10-Year Anti-Rust Written Warranty Certificate</span></li>
            <li><span className="text-slate-300 block">Zero-Sag Lifetime Tensioning Commitment</span></li>
            <li><span className="text-slate-300 block">Complimentary SS Shine Spray & Microfiber Kit</span></li>
            <li><span className="text-emerald-400 font-medium block">Free Doorstep Precision Laser Site Measurement</span></li>
          </ul>
        </div>

        {/* Column 4: 6 Regional Hubs & Coverage Corridors */}
        <div>
          <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-3.5">
            6 Regional Hubs & Coverage Corridors
          </h4>
          <ul className="space-y-2.5 text-[11px]">
            <li>
              <a href="/locations/vizag" className="hover:text-emerald-400 transition block">
                <span className="text-white font-medium">Visakhapatnam Hub</span>
                <span className="text-[10px] text-slate-400 block">Madhurawada (27-Floor Towers), Yendada, Rushikonda, PM Palem, Anandapuram, Gajuwaka.</span>
              </a>
            </li>
            <li>
              <a href="/locations/rajahmundry" className="hover:text-emerald-400 transition block">
                <span className="text-white font-medium">Rajamahendravaram Hub</span>
                <span className="text-[10px] text-slate-400 block">Morampudi, Bommuru, Diwancheruvu, Lalacheruvu, Vemagiri, Gadaala Belts.</span>
              </a>
            </li>
            <li>
              <a href="/locations/vijayawada" className="hover:text-emerald-400 transition block">
                <span className="text-white font-medium">Vijayawada & Amaravati Hub</span>
                <span className="text-[10px] text-slate-400 block">Benz Circle, Moghalrajpuram, HappyNest G+18, Tadepalli Riverside.</span>
              </a>
            </li>
            <li>
              <a href="/locations/guntur" className="hover:text-emerald-400 transition block">
                <span className="text-white font-medium">Guntur Hub</span>
                <span className="text-[10px] text-slate-400 block">Brodipet, Arundelpet, Amaravati Road, Namburu, Kaza Belt.</span>
              </a>
            </li>
            <li>
              <a href="/locations/kakinada" className="hover:text-emerald-400 transition block">
                <span className="text-white font-medium">Kakinada Hub</span>
                <span className="text-[10px] text-slate-400 block">Sarpavaram, Vakalapudi Lighthouse Belt, Ramanayyapeta.</span>
              </a>
            </li>
            <li>
              <a href="/locations/nellore" className="hover:text-emerald-400 transition block">
                <span className="text-white font-medium">Nellore Hub</span>
                <span className="text-[10px] text-slate-400 block">Magunta Layout, Penna Riverfront, Balaji Nagar.</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Universal Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
        <p>© 2026 D-View Invisible Safety Grills. All Rights Reserved. Protecting Families Across Andhra Pradesh.</p>
        <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-wider">
          <span className="text-emerald-400 font-semibold">100% Invisible Grills</span>
          <span>•</span>
          <span>Zero Safety Nets</span>
          <span>•</span>
          <span>SS-316 Marine Grade</span>
          <span>•</span>
          <span>10-Year Warranty</span>
        </div>
      </div>
    </footer>
  );

  const quickConnectWAMessage = encodeURIComponent(
    "Hello D-View, I am interested in SS-316 invisible safety grills for my balcony. Please share details and free site measurement availability."
  );

  const renderFloatingQuickConnect = () => (
    <aside aria-label="Quick Connect Floating Actions">
      {/* 1. Floating WhatsApp Button (Bottom-Right on ALL devices) */}
      <a
        href={`https://wa.me/919494328999?text=${quickConnectWAMessage}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with D-View on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#10b981] hover:bg-[#059669] text-black shadow-[0_0_30px_rgba(16,185,129,0.55)] transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
      >
        {/* Subtle Breathing Pulse Glow Animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping -z-10 pointer-events-none" />
        
        {/* WhatsApp SVG Icon */}
        <svg 
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-[#090d0b]" 
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.222-.553-1.821-.755-3.003-2.617-3.093-2.738-.09-.12-1.002-1.334-1.002-2.545 0-1.21.636-1.807.863-2.052.226-.245.496-.307.662-.307.166 0 .331.002.477.009.153.008.358-.058.558.423.209.502.712 1.737.774 1.862.062.126.104.272.02.438-.083.167-.125.271-.249.417-.124.145-.262.325-.374.436-.125.124-.256.26-.11.511.146.252.648 1.07 1.39 1.732.955.851 1.76 1.114 2.012 1.239.252.126.4.105.548-.063.147-.168.627-.732.793-.984.167-.251.332-.209.559-.125.227.084 1.442.68 1.689.805.247.126.413.188.474.293.061.104.061.606-.083 1.011z"/>
        </svg>

        {/* Desktop Hover Tooltip */}
        <span className="hidden md:group-hover:block absolute right-full mr-3 px-3.5 py-2 rounded-xl bg-[#101714] border border-emerald-500/40 text-emerald-400 text-xs font-semibold whitespace-nowrap shadow-xl">
          WhatsApp Concierge (+91 94943 28999)
        </span>
      </a>

      {/* 2. Floating Quick Call Button (Bottom-Left on Mobile) */}
      <a
        href="tel:+919494328999"
        aria-label="Direct Phone Call"
        className="md:hidden fixed bottom-6 left-5 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-[#101714]/95 backdrop-blur-md border border-emerald-500/40 text-slate-100 shadow-[0_0_20px_rgba(0,0,0,0.8)] active:scale-95 transition-all text-xs font-semibold uppercase tracking-wider group cursor-pointer"
      >
        <Phone className="w-4 h-4 text-emerald-400 shrink-0 stroke-[2.5]" />
        <span className="text-white font-bold tracking-normal">Call +91 94943 28999</span>
      </a>
    </aside>
  );

  return (
    <div className="min-h-screen bg-[#0a0f0d] text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-black">
      
      {/* ========================================================= */}
      {/* 1. TOP MINIMAL NAVIGATION HEADER                          */}
      {/* ========================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 px-6 sm:px-12 flex items-center justify-between pointer-events-auto transition-all">
        
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
              D-VIEW <span className="font-semibold text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.35)]">INVISIBLE SAFETY</span>
            </span>
          </a>
        </div>

        {/* Right: Direct concierge telephone `+91 94943 28999` and `CONTACT US` */}
        <div className="flex items-center gap-6 sm:gap-8 text-xs uppercase tracking-[0.2em] text-slate-300 font-medium">
          <button
            type="button"
            onClick={() => handleOpenBooking()}
            className="hidden sm:inline-block hover:text-emerald-400 transition cursor-pointer text-slate-300"
          >
            CONTACT US
          </button>
          
          <a
            href="tel:+919494328999"
            className="text-white hover:text-emerald-400 transition flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400 stroke-[2]" />
            <span className="hidden sm:inline text-slate-200">+91 94943 28999</span>
          </a>
        </div>

      </header>

      {/* ========================================================= */}
      {/* SLEEK LUXURY SIDE DRAWER MENU                             */}
      {/* ========================================================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="relative w-full max-w-sm bg-[#0a0f0d] border-r border-white/10 h-full p-8 z-10 flex flex-col justify-between overflow-y-auto">
            
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

              {/* Service Locations List (Tier 1 -> Tier 2) */}
              <div className="mt-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold block mb-4">
                  SELECT CITY HUB (TIER 2 CORRIDORS)
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
                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400" />
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
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-emerald-400 transition"
                >
                  Tier 1: City Showcase Slides
                </a>
                <a 
                  href={`/locations/${activeSlide.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-emerald-400 transition"
                >
                  Tier 2: {activeSlide.name} Corridors
                </a>
                <a 
                  href={`/safety-pillars/${activeSlide.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-emerald-400 transition text-emerald-400"
                >
                  Tier 3: 6-Pillar Proofs & Pricing
                </a>
              </div>
            </div>

            {/* Concierge Info at Bottom */}
            <div className="pt-8 border-t border-white/10 text-xs text-slate-400 space-y-1">
              <p className="text-white font-bold tracking-wider">Direct Concierge</p>
              <p className="text-slate-300">+91 94943 28999</p>
              <p className="text-slate-400">contact@dviewsolutions.com</p>
            </div>

          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* TIER 1: MAIN DASHBOARD (100vh FULL-SCREEN SNAP-SCROLL SLIDES)         */}
      {/* ==================================================================== */}
      {tier === 'tier1' && (
        <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
          {CITIES_SLIDES.map((slide, idx) => (
            <section
              key={slide.id}
              onClick={() => { window.location.href = slide.locationPath; }}
              className="relative w-full h-screen snap-start snap-always overflow-hidden flex items-end justify-start cursor-pointer select-none"
            >
              {/* Full Bleed Bright Interior Balcony Photography with Mobile Portrait Landmark Framing */}
              <div 
                className={`bg-adaptive-landmark absolute inset-0 bg-cover transition-transform duration-700 hover:scale-[1.015] ${getMobileLandmarkClass(slide.id)}`}
                style={{ 
                  backgroundImage: `url(${slide.heroImage})`,
                  ['--bg-pos-mob' as any]: getMobileFocalPosition(slide.id)
                }}
              >
                {/* High Priority Eager Download for Slide 0 LCP Core Web Vitals */}
                {idx === 0 && (
                  <img
                    src={slide.heroImage}
                    alt=""
                    aria-hidden="true"
                    className="hidden"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, 1920px"
                  />
                )}

                {/* Crisp Floor-to-Ceiling Vertical SS-316 Invisible Wire Lines Simulation - Portrait High Density on Mobile */}
                <div 
                  className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.2)_21px,rgba(255,255,255,0.03)_22px)] sm:bg-[repeating-linear-gradient(90deg,transparent,transparent_26px,rgba(255,255,255,0.18)_27px,rgba(255,255,255,0.03)_28px)] pointer-events-none" 
                  aria-hidden="true"
                />

                {/* Natural Daytime Architectural Clarity: Minimal non-dimming contrast gradients */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#090d0b]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Minimal Text at Bottom-Left: Pushed to bottom 25%, NEVER blocks the landmark on mobile */}
              <div className="relative z-20 max-w-2xl text-left flex flex-col items-start px-5 sm:px-16 pb-8 sm:pb-16">
                
                {/* Category in Brushed Metallic Silver / Deep Green */}
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#10b981] font-semibold mb-1 block">
                  {slide.categoryTag}
                </span>

                {/* Title in Deep Emerald Green with Soft Glow */}
                <h2 className="text-xl sm:text-4xl md:text-5xl font-light text-emerald-400 tracking-[0.06em] uppercase leading-tight mb-1.5 drop-shadow-[0_2px_15px_rgba(16,185,129,0.3)]">
                  {slide.mainTitle}
                </h2>

                {/* Subline in Brushed Silver */}
                <p className="text-xs sm:text-sm text-slate-300/90 font-light tracking-wide max-w-xl mb-2 line-clamp-2 sm:line-clamp-none">
                  {slide.subline}
                </p>

                {/* Micro-cue */}
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-emerald-400/90 font-medium block">
                  {slide.microCue}
                </span>

              </div>

              {/* Slide Counter on Side & Scroll Down Cue */}
              <div className="absolute bottom-8 right-5 sm:bottom-12 sm:right-12 z-20 flex flex-col items-end text-right">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-slate-300 font-mono">
                  0{idx + 1} / 06
                </span>
                {idx === 5 && (
                  <span className="hidden sm:inline-block text-[9px] uppercase tracking-widest text-emerald-400 font-mono mt-1 animate-pulse">
                    Scroll down for Proof, Warranty & Calculator ↓
                  </span>
                )}
              </div>

            </section>
          ))}

          {/* ==================================================================== */}
          {/* GLOBAL SECTIONS: PROOF, A (WARRANTY), B (CALCULATOR), C (FOOTER)     */}
          {/* ==================================================================== */}
          {renderSocietyProofSection(true)}
          {renderWarrantySection(true)}
          {renderCalculatorSection(true)}
          {renderLuxuryFooter(true)}
          {renderFloatingQuickConnect()}

        </main>
      )}

      {/* ==================================================================== */}
      {/* TIER 2: CITY SUB-LOCATIONS GRID PAGE (e.g. /locations/vizag)         */}
      {/* CRITICAL: ONLY LOCAL PROMINENT CORRIDORS - ZERO 6-PILLAR GRID HERE!  */}
      {/* ==================================================================== */}
      {tier === 'tier2' && (
        <main id="location-tier2" className="min-h-screen pb-28 sm:pb-20">
          
          {/* Top 35vh (Mobile) / 45vh (Desktop) Bright Hero Background Section */}
          <section className="relative h-[35vh] sm:h-[45vh] min-h-[260px] w-full overflow-hidden flex items-end justify-start">
            {/* Bright Signature City Interior Balcony Background - Mobile Landmark Focal Point */}
            <div 
              className={`bg-adaptive-landmark absolute inset-0 bg-cover transition-transform duration-700 ${getMobileLandmarkClass(activeSlide.id)}`}
              style={{ 
                backgroundImage: `url(${activeSlide.heroImage})`,
                ['--bg-pos-mob' as any]: getMobileFocalPosition(activeSlide.id)
              }}
            >
              {/* Vertical Wire Line Simulation Overlay */}
              <div 
                className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.2)_21px,rgba(255,255,255,0.03)_22px)] sm:bg-[repeating-linear-gradient(90deg,transparent,transparent_26px,rgba(255,255,255,0.18)_27px,rgba(255,255,255,0.03)_28px)] pointer-events-none" 
                aria-hidden="true"
              />
              {/* Natural Daytime Architectural Clarity: 100% Bright Sunlit View */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#090d0b] to-transparent pointer-events-none" />
            </div>

            {/* Concise Header in Bottom-Left */}
            <div className="relative z-20 max-w-5xl px-5 sm:px-12 pb-6 sm:pb-8">
              {/* Breadcrumb Back */}
              <a 
                href="/" 
                className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#cbd5e1] hover:text-emerald-400 transition mb-2 group font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition" />
                <span>City Showcase (Tier 1)</span>
              </a>

              {/* 1 concise line emotion tag in Emerald Green */}
              <p className="text-emerald-400 font-medium text-xs sm:text-base italic drop-shadow-[0_2px_10px_rgba(16,185,129,0.3)] mb-1 line-clamp-1">
                "{activeSlide.emotionHook}"
              </p>

              {/* 1 title in Brushed Silver */}
              <h1 className="text-xl sm:text-4xl font-light uppercase text-[#cbd5e1] tracking-tight drop-shadow-md">
                {activeSlide.name} • Prominent Residential & High-Rise Corridors
              </h1>
            </div>
          </section>

          {/* Sub-Locations Grid Section - 1 Column Stack on Mobile */}
          <div className="max-w-7xl mx-auto px-5 sm:px-12 pt-8 sm:pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {activeSlide.subLocations.map((corridor, idx) => (
                <a
                  key={idx}
                  href={`/safety-pillars/${activeSlide.id}?corridor=${encodeURIComponent(corridor.name)}`}
                  className="group rounded-3xl overflow-hidden border border-emerald-500/25 hover:border-emerald-500/60 bg-[#101714] transition-all duration-300 flex flex-col hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] cursor-pointer"
                >
                  {/* High-Definition Sunlit Balcony Visual - 100% CLEAN & UNOBSTRUCTED */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <img 
                      src={corridor.image} 
                      alt={`${corridor.name} Balcony SS-316 Invisible Grills`} 
                      style={{ objectPosition: getMobileFocalPosition(corridor.name) }}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${getMobileLandmarkClass(corridor.name)}`}
                      loading={idx === 0 ? "eager" : "lazy"}
                      fetchPriority={idx === 0 ? "high" : "auto"}
                      decoding="async"
                      width="640"
                      height="360"
                      sizes="(max-width: 768px) 100vw, 1920px"
                    />
                    {/* Clear Vertical Wire Simulation Overlay */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.2)_21px,rgba(255,255,255,0.02)_22px)] pointer-events-none" />
                    {/* Natural Daytime Architectural Clarity: Subtle bottom blend only */}
                    <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#101714] to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content in Brushed Silver & Deep Green */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Specifications Row Below Image */}
                      <div className="flex flex-wrap items-center gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                          <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          {corridor.elevation}
                        </span>
                        <span className="text-white/20 text-xs">•</span>
                        <span className="text-[10px] uppercase font-semibold tracking-wider text-[#cbd5e1] px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                          {corridor.tag}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition mb-1.5 sm:mb-2">
                        {corridor.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                        {corridor.desc}
                      </p>
                    </div>

                    <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-emerald-400 font-semibold group-hover:translate-x-1 transition flex items-center gap-1 text-[11px] sm:text-xs">
                        View 6-Pillar Solutions & Pricing →
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-[#cbd5e1]">
                        SS-316 Certified
                      </span>
                    </div>
                  </div>

                </a>
              ))}
            </div>
          </div>

          {/* ==================================================================== */}
          {/* GLOBAL SECTIONS: PROOF, A (WARRANTY), B (CALCULATOR), C (FOOTER)     */}
          {/* ==================================================================== */}
          {renderSocietyProofSection(false)}
          {renderWarrantySection(false)}
          {renderCalculatorSection(false)}
          {renderLuxuryFooter(false)}
          {renderFloatingQuickConnect()}

        </main>
      )}

      {/* ==================================================================== */}
      {/* TIER 3: THE 6-PILLAR PROBLEM-SOLVER & CONVERSION PAGE                 */}
      {/* OPENS ONLY AFTER CLICKING A TIER 2 SUB-LOCATION CARD!                 */}
      {/* ==================================================================== */}
      {tier === 'tier3' && (
        <main id="location-tier3" className="min-h-screen pb-28 sm:pb-20">
          
          {/* Dynamic Top Hero Section (Height: 32vh on mobile, 42vh on desktop) */}
          <section className="relative h-[32vh] sm:h-[42vh] min-h-[240px] w-full overflow-hidden flex items-end justify-start">
            {/* Bright Corridor-Specific Interior Balcony Background with Mobile Landmark Framing */}
            <div 
              className={`bg-adaptive-landmark absolute inset-0 bg-cover transition-transform duration-700 ${getMobileLandmarkClass(selectedCorridor)}`}
              style={{ 
                backgroundImage: `url(${currentHeroImage})`,
                ['--bg-pos-mob' as any]: getMobileFocalPosition(selectedCorridor)
              }}
            >
              {/* Floor-to-Ceiling Vertical SS-316 Invisible Wire Lines Simulation - Portrait High Density on Mobile */}
              <div 
                className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.2)_21px,rgba(255,255,255,0.03)_22px)] sm:bg-[repeating-linear-gradient(90deg,transparent,transparent_26px,rgba(255,255,255,0.18)_27px,rgba(255,255,255,0.03)_28px)] pointer-events-none" 
                aria-hidden="true"
              />
              {/* Natural Daytime Architectural Clarity: 100% Bright Sunlit View */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#090d0b] to-transparent pointer-events-none" />
            </div>

            {/* Header Micro-Copy in Bottom-Left */}
            <div className="relative z-20 max-w-5xl px-5 sm:px-12 pb-6 sm:pb-8">
              
              {/* Top Back Link & Focused Corridor Badge */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <a 
                  href={`/locations/${activeSlide.id}`} 
                  className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#cbd5e1] hover:text-emerald-400 transition group font-medium"
                >
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition" />
                  <span>Back to {activeSlide.name} Corridors (Tier 2)</span>
                </a>

                {/* Corridor Pill Badge with Deep Emerald Green #10b981 border and glow */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#10b981] text-[10px] sm:text-[11px] font-semibold text-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.35)]">
                  <span>📍 Focused Corridor: {currentCorridorDisplayName}</span>
                </div>
              </div>

              {/* Heading (Silver & Emerald) */}
              <h1 className="text-xl sm:text-4xl md:text-5xl font-light uppercase text-[#10b981] tracking-tight drop-shadow-[0_2px_15px_rgba(16,185,129,0.3)]">
                THE 6-PILLAR PROBLEM-SOLVER SOLUTIONS
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#cbd5e1] font-light tracking-wide mt-1 sm:mt-2 drop-shadow-md line-clamp-2 sm:line-clamp-none">
                Tailored architectural invisible grill engineering for {currentCorridorDisplayName} residences.
              </p>

            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* SECTION A: THE 6-PILLAR PROBLEM-SOLVER GRID                       */}
          {/* ----------------------------------------------------------------- */}
          <section id="pillars-section" className="py-10 sm:py-12 px-5 sm:px-12">
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2">
                  <span>REAL PROOF SOLUTIONS • SS-316 ARCHITECTURAL CERTIFIED</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-light uppercase text-slate-100 tracking-tight">
                  High-Definition Balcony Protection
                </h2>
                <p className="text-[#cbd5e1] text-xs sm:text-sm mt-1.5 sm:mt-2 leading-relaxed font-light">
                  Engineered specifically for {currentCorridorDisplayName} high-rises and residential balconies.
                </p>
              </div>

              {/* 6 Grid Cards with Crisp Sunlight Imagery & Emerald Badges - 1 Column Stack on Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {PROBLEM_SOLVERS.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div 
                      key={idx}
                      className="group rounded-3xl overflow-hidden border border-emerald-500/25 hover:border-emerald-500/60 bg-[#101714] transition-all duration-300 flex flex-col hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                    >
                      {/* High-Definition Sunlit Balcony Photography - 100% CLEAN & UNOBSTRUCTED */}
                      <div className="relative h-64 w-full overflow-hidden">
                        <img 
                          src={card.image} 
                          alt={card.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading={idx === 0 ? "eager" : "lazy"}
                          fetchPriority={idx === 0 ? "high" : "auto"}
                          decoding="async"
                          width="640"
                          height="360"
                          sizes="(max-width: 768px) 100vw, 1920px"
                        />
                        {/* Wire simulation on card image */}
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.18)_21px,rgba(255,255,255,0.02)_22px)] pointer-events-none" />
                        {/* Natural Daytime Architectural Clarity: Subtle bottom blend only */}
                        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#101714] to-transparent pointer-events-none" />
                      </div>

                      {/* Content in Deep Emerald Green & Brushed Silver */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Specification Row Below Image */}
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                              <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                                <Icon className="w-4 h-4 text-emerald-400" />
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400">
                                {card.badge}
                              </span>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                              {card.stat}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-white mb-2">
                            {card.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-2 font-light">
                            {card.desc}
                          </p>
                          <p className="text-xs text-emerald-400/90 italic leading-relaxed">
                            "{card.teluguDesc}"
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Certified SS-316
                          </span>
                          <span className="uppercase text-[10px] tracking-wider text-[#cbd5e1]">
                            100% Reliable
                          </span>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Closing Tagline in Telugu */}
              <div className="mt-14 text-center p-6 rounded-2xl bg-[#101714] border border-emerald-500/30 max-w-4xl mx-auto shadow-xl">
                <p className="text-emerald-400 font-semibold text-sm sm:text-base italic">
                  "Okke Okka Balcony Installation... Enno High-Alert Safety Problems Nundi Mee Intiki Life-Time Premium Protection!"
                </p>
              </div>

            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* REAL SOCIETY INSTALLATIONS & SOCIAL PROOF ENGINE                   */}
          {/* ----------------------------------------------------------------- */}
          {renderSocietyProofSection(false)}

          {/* ----------------------------------------------------------------- */}
          {/* SECTION B: LOCAL WEATHER GUIDE & SS-316 TECHNICAL TRUST         */}
          {/* ----------------------------------------------------------------- */}
          <section id="weather-trust" className="py-20 px-6 sm:px-12 border-t border-white/10 bg-[#090d0b]">
            <div className="max-w-7xl mx-auto">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold block">
                    SS-316 METALLURGY TRUST & GUARANTEES
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-light uppercase text-slate-100 tracking-tight">
                    Specific Weather Shield ({activeSlide.name})
                  </h2>
                  
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    Why cheap steel fails in Andhra Pradesh: coastal salt-air and river mists cause immediate pitting and corrosion on ordinary mild steel and cheap SS-202 cables within months.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#101714] border border-white/10">
                      <Droplets className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase">The Environmental Challenge</h4>
                        <p className="text-xs text-slate-300 mt-1">{activeSlide.weatherChallenge}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#101714] border border-emerald-500/40">
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
                      <span className="text-[10px] uppercase tracking-wider text-[#cbd5e1] font-semibold block mt-0.5">
                        Anti-Rust Replacement Warranty
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#101714] border border-white/10 text-center">
                      <span className="text-xl sm:text-2xl font-black text-white block">1 YEAR FREE</span>
                      <span className="text-[10px] uppercase tracking-wider text-[#cbd5e1] font-semibold block mt-0.5">
                        Periodic Tension Inspection
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                      <span className="text-xl sm:text-2xl font-black text-emerald-400 block">FREE GIFT</span>
                      <span className="text-[10px] uppercase tracking-wider text-[#cbd5e1] font-semibold block mt-0.5">
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
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#101714] to-transparent pointer-events-none" />
                    
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
          {/* SECTION A: WARRANTY & SECTION B: ESTIMATE CALCULATOR              */}
          {/* ----------------------------------------------------------------- */}
          {renderWarrantySection(false)}

          {renderCalculatorSection(false)}


          {/* ----------------------------------------------------------------- */}
          {/* TECHNICAL FAQS SECTION                                            */}
          {/* ----------------------------------------------------------------- */}
          <section id="faq-section" className="py-20 px-6 sm:px-12 border-t border-white/10 bg-[#090d0b]">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="text-2xl sm:text-4xl font-light uppercase text-slate-100 mt-2">
                  Architectural Safety Insights
                </h2>
              </div>

              <div className="space-y-4">
                {FAQS.map((faq, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-[#101714] border border-white/10">
                    <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      {faq.q}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6 font-light">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* GLOBAL LUXURY CONCIERGE FOOTER */}
          {renderLuxuryFooter(false)}

          {/* Persistent Floating WhatsApp & Call Buttons */}
          {renderFloatingQuickConnect()}

        </main>
      )}

      {/* ========================================================= */}
      {/* WHATSAPP LEAD MODAL WITH DYNAMIC QR CODE                  */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#111815] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
            
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
              <p className="text-xs text-[#cbd5e1] mt-1">
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
                  className="w-full bg-[#0a0f0d] border border-emerald-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400 font-medium"
                >
                  <option value="Visakhapatnam">Visakhapatnam</option>
                  <option value="Rajamahendravaram">Rajamahendravaram</option>
                  <option value="Vijayawada">Vijayawada</option>
                  <option value="Guntur">Guntur</option>
                  <option value="Kakinada">Kakinada</option>
                  <option value="Nellore">Nellore</option>
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
                  className="w-full bg-[#0a0f0d] border border-emerald-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                />
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
                  className="w-full bg-[#0a0f0d] border border-emerald-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
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
                  className="w-full bg-[#0a0f0d] border border-emerald-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              {/* Dynamic WhatsApp QR Code */}
              <div className="bg-[#0a0f0d] border border-white/10 rounded-2xl p-4 text-center mt-3">
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
