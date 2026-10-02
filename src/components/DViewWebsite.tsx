import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Phone, CheckCircle2, X, 
  Flame, Baby, Cat, HeartHandshake, Eye, Sparkles, 
  Droplets, ArrowUpRight, HelpCircle, MapPin, ArrowLeft
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
    heroImage: '/assets/locations/visakhapatnam.png',
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
        tag: 'RIVER-VIEW BALCONY | FRESH RIVER BREEZE',
        desc: 'High-rise apartment balcony looking out at open green residential layouts and fresh Godavari breeze through vertical wires.',
        image: '/assets/locations/sub/rajahmundry-morampudi.png'
      },
      {
        name: 'Godavari Arch Bridge Riverfront',
        elevation: 'Historic River Panorama',
        tag: 'ICONIC HERITAGE VIEW | 100% PIGEON SHIELD',
        desc: 'Balcony view directly framing the yellow Godavari Arch Bridge and boats drifting on the water through transparent SS-316 wires.',
        image: '/assets/locations/rajahmundry.png'
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
    image: "/assets/locations/rajahmundry.png",
    title: "Godavari Arch Bridge Riverfront",
    spec: "Iconic Heritage View | 100% Pigeon Shield",
    cityId: "rajahmundry"
  },
  "Godavari Arch Bridge Riverfront": {
    image: "/assets/locations/rajahmundry.png",
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
    image: "/assets/locations/vijayawada.png",
    title: "Moghalrajpuram Hillside Flats",
    spec: "Elevated Ridge-View Apartments",
    cityId: "vijayawada"
  },
  "Gunadala": {
    image: "/assets/locations/vijayawada.png",
    title: "Gunadala & Ramavarappadu",
    spec: "Premium Gated Societies | 400 KG Load",
    cityId: "vijayawada"
  },
  "Kanuru": {
    image: "/assets/locations/vijayawada.png",
    title: "Kanuru & Poranki Belt",
    spec: "Expanding Luxury Suburbs | Cross-Ventilation",
    cityId: "vijayawada"
  },
  "Tadepalli": {
    image: "/assets/locations/vijayawada.png",
    title: "Tadepalli Riverside Towers",
    spec: "Krishna Riverfront Penthouses",
    cityId: "vijayawada"
  },

  // Guntur Corridors
  "Brodipet": {
    image: "/assets/locations/guntur.png",
    title: "Brodipet High-End Residencies",
    spec: "Prime City Balcony Flats | Architectural Luxury",
    cityId: "guntur"
  },
  "Arundelpet": {
    image: "/assets/locations/guntur.png",
    title: "Arundelpet Modern Towers",
    spec: "High-Density Residential Hub | Zero-Climb",
    cityId: "guntur"
  },
  "Amaravati Road": {
    image: "/assets/locations/guntur.png",
    title: "Amaravati Road Corridor",
    spec: "Luxury Gated Towers | Kondaveedu View",
    cityId: "guntur"
  },
  "Namburu": {
    image: "/assets/locations/guntur.png",
    title: "Namburu IT & University Belt",
    spec: "Skyscraper Colonies | Anti-Static Nylon",
    cityId: "guntur"
  },
  "Kaza": {
    image: "/assets/locations/guntur.png",
    title: "Kaza & Tadepalli Belt",
    spec: "Expressway Towers | 100% Daylighting",
    cityId: "guntur"
  },

  // Kakinada Corridors
  "Vakalapudi": {
    image: "/assets/locations/kakinada.png",
    title: "Vakalapudi Port & Lighthouse Corridor",
    spec: "Sea-Front Balcony Residences | Marine-Grade Alloy",
    cityId: "kakinada"
  },
  "Sarpavaram": {
    image: "/assets/locations/kakinada.png",
    title: "Sarpavaram High-Rise Towers",
    spec: "Gated Residential Colonies | Toddler Lockdown",
    cityId: "kakinada"
  },
  "Madhavapatnam": {
    image: "/assets/locations/kakinada.png",
    title: "Madhavapatnam Residential Hub",
    spec: "Family Balconies | Bird Dropping Barrier",
    cityId: "kakinada"
  },
  "Ramanayyapeta": {
    image: "/assets/locations/kakinada.png",
    title: "Ramanayyapeta Urban Flatted Living",
    spec: "City Center Elevations | 1-Min Fire Egress",
    cityId: "kakinada"
  },
  "Jagannaickpur": {
    image: "/assets/locations/kakinada.png",
    title: "Jagannaickpur Waterfront Enclaves",
    spec: "Canal & Coastal Flats | Corrosion-Free Tracks",
    cityId: "kakinada"
  },

  // Nellore Corridors
  "Magunta Layout": {
    image: "/assets/locations/nellore.png",
    title: "Magunta Layout Premium Flats",
    spec: "Central Luxury Balconies | Sunset View",
    cityId: "nellore"
  },
  "Balaji Nagar": {
    image: "/assets/locations/nellore.png",
    title: "Balaji Nagar Elevated Residencies",
    spec: "High-Floor Family Apartments | 400 KG Strength",
    cityId: "nellore"
  },
  "Dargamitta": {
    image: "/assets/locations/nellore.png",
    title: "Dargamitta Corridors",
    spec: "Terrace & High Balcony Flats | Anti-Sag Anchoring",
    cityId: "nellore"
  },
  "Vedayapalem": {
    image: "/assets/locations/nellore.png",
    title: "Vedayapalem Riverfront Belt",
    spec: "Waterfront Balconies | Monsoon Proof SS-316",
    cityId: "nellore"
  },
  "Podalakur Road": {
    image: "/assets/locations/nellore.png",
    title: "Podalakur Road & Kavali Belt",
    spec: "Expanding Gated Communities | Pest Control",
    cityId: "nellore"
  }
};

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

interface DViewWebsiteProps {
  initialCitySlug?: string;
  tier?: 'tier1' | 'tier2' | 'tier3';
}

export default function DViewWebsite({ initialCitySlug, tier = 'tier1' }: DViewWebsiteProps) {
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
      const params = new URLSearchParams(window.location.search);
      const corridorParam = params.get('corridor');
      if (corridorParam) {
        setSelectedCorridor(corridorParam);
      }
    }
  }, []);

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
              {/* Full Bleed Bright Interior Balcony Photography - NO DULL BLACK OVERLAYS */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.015]"
                style={{ backgroundImage: `url(${slide.heroImage})` }}
              >
                {/* Crisp Floor-to-Ceiling Vertical SS-316 Invisible Wire Lines Simulation */}
                <div 
                  className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_26px,rgba(255,255,255,0.18)_27px,rgba(255,255,255,0.03)_28px)] pointer-events-none" 
                  aria-hidden="true"
                />

                {/* Minimal Top & Bottom Clean Fade for Text Contrast Only (Max 20-30%) */}
                <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0f0d]/90 via-[#0a0f0d]/30 to-transparent pointer-events-none" />
              </div>

              {/* Minimal Text at Bottom-Left: Brushed Silver & Deep Emerald Green ONLY */}
              <div className="relative z-20 max-w-2xl text-left flex flex-col items-start px-6 sm:px-16 pb-12 sm:pb-16">
                
                {/* Category in Brushed Metallic Silver */}
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#cbd5e1] font-semibold mb-2 block">
                  {slide.categoryTag}
                </span>

                {/* Title in Deep Emerald Green with Soft Glow */}
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-emerald-400 tracking-[0.08em] uppercase leading-tight mb-2 drop-shadow-[0_2px_15px_rgba(16,185,129,0.3)]">
                  {slide.mainTitle}
                </h2>

                {/* Subline in Brushed Silver */}
                <p className="text-xs sm:text-sm text-slate-300/90 font-light tracking-wide max-w-xl mb-3">
                  {slide.subline}
                </p>

                {/* Micro-cue */}
                <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-400/90 font-medium block">
                  {slide.microCue}
                </span>

              </div>

              {/* Slide Counter on Side */}
              <div className="absolute bottom-12 right-12 z-20 hidden md:block text-[11px] uppercase tracking-[0.25em] text-slate-300 font-mono">
                0{idx + 1} / 06
              </div>

            </section>
          ))}
        </main>
      )}

      {/* ==================================================================== */}
      {/* TIER 2: CITY SUB-LOCATIONS GRID PAGE (e.g. /locations/vizag)         */}
      {/* CRITICAL: ONLY LOCAL PROMINENT CORRIDORS - ZERO 6-PILLAR GRID HERE!  */}
      {/* ==================================================================== */}
      {tier === 'tier2' && (
        <main id="location-tier2" className="min-h-screen pb-20">
          
          {/* Top 45vh Bright Hero Background Section */}
          <section className="relative h-[45vh] min-h-[340px] w-full overflow-hidden flex items-end justify-start">
            {/* Bright Signature City Interior Balcony Background - NO DULL MASKS */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
              style={{ backgroundImage: `url(${activeSlide.heroImage})` }}
            >
              {/* Vertical Wire Line Simulation Overlay */}
              <div 
                className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_26px,rgba(255,255,255,0.18)_27px,rgba(255,255,255,0.03)_28px)] pointer-events-none" 
                aria-hidden="true"
              />
              {/* Minimal Clean Fade Only for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-black/15 to-black/35 pointer-events-none" />
            </div>

            {/* Concise Header in Bottom-Left: 1 Emotion Tag in Emerald Green, 1 Title in Silver */}
            <div className="relative z-20 max-w-5xl px-6 sm:px-12 pb-8">
              {/* Breadcrumb Back */}
              <a 
                href="/" 
                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#cbd5e1] hover:text-emerald-400 transition mb-3 group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition" />
                <span>City Showcase (Tier 1)</span>
              </a>

              {/* 1 concise line emotion tag in Emerald Green */}
              <p className="text-emerald-400 font-medium text-sm sm:text-base italic drop-shadow-[0_2px_10px_rgba(16,185,129,0.3)] mb-1">
                "{activeSlide.emotionHook}"
              </p>

              {/* 1 title in Brushed Silver */}
              <h1 className="text-2xl sm:text-4xl font-light uppercase text-[#cbd5e1] tracking-tight drop-shadow-md">
                {activeSlide.name} • Prominent Residential & High-Rise Corridors
              </h1>
            </div>
          </section>

          {/* Sub-Locations Grid Section */}
          <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeSlide.subLocations.map((corridor, idx) => (
                <a
                  key={idx}
                  href={`/safety-pillars/${activeSlide.id}?corridor=${encodeURIComponent(corridor.name)}`}
                  className="group rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/60 bg-[#111815] transition-all duration-300 flex flex-col hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] cursor-pointer"
                >
                  {/* High-Definition Sunlit Balcony Visual - NO DULL BLACK MASKS */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <img 
                      src={corridor.image} 
                      alt={`${corridor.name} Balcony SS-316 Invisible Grills`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Clear Vertical Wire Simulation Overlay */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.2)_21px,rgba(255,255,255,0.02)_22px)] pointer-events-none" />
                    {/* Minimal bottom fade only for typography legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111815] via-transparent to-transparent pointer-events-none" />
                    
                    {/* Elevation Badge in Deep Green & Brushed Silver */}
                    <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-500/40 text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>{corridor.elevation}</span>
                    </div>

                    {/* Tag in Deep Green */}
                    <div className="absolute top-4 right-4 bg-emerald-500 text-black text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
                      {corridor.tag}
                    </div>
                  </div>

                  {/* Card Content in Brushed Silver & Deep Green */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition mb-2">
                        {corridor.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                        {corridor.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-emerald-400 font-semibold group-hover:translate-x-1 transition flex items-center gap-1">
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

          {/* Minimal Concierge Footer */}
          <footer className="mt-24 border-t border-white/10 bg-[#0a0f0d] pt-12 pb-8 px-6 sm:px-12 text-slate-400 text-xs">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
              <p>© {new Date().getFullYear()} D-VIEW INVISIBLE SAFETY. All Rights Reserved.</p>
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

      {/* ==================================================================== */}
      {/* TIER 3: THE 6-PILLAR PROBLEM-SOLVER & CONVERSION PAGE                 */}
      {/* OPENS ONLY AFTER CLICKING A TIER 2 SUB-LOCATION CARD!                 */}
      {/* ==================================================================== */}
      {tier === 'tier3' && (
        <main id="location-tier3" className="min-h-screen pb-20">
          
          {/* Dynamic Top Hero Section (Height: 40vh to 45vh) */}
          <section className="relative h-[42vh] min-h-[340px] w-full overflow-hidden flex items-end justify-start">
            {/* Bright Corridor-Specific Interior Balcony Background - NO DULL MASKS */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
              style={{ backgroundImage: `url(${currentHeroImage})` }}
            >
              {/* Floor-to-Ceiling Vertical SS-316 Invisible Wire Lines Simulation */}
              <div 
                className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_26px,rgba(255,255,255,0.18)_27px,rgba(255,255,255,0.03)_28px)] pointer-events-none" 
                aria-hidden="true"
              />
              {/* Clean, subtle gradient at bottom blending into the 6-pillar grid below */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-black/10 to-black/35 pointer-events-none" />
            </div>

            {/* Header Micro-Copy in Bottom-Left */}
            <div className="relative z-20 max-w-5xl px-6 sm:px-12 pb-8">
              
              {/* Top Back Link & Focused Corridor Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <a 
                  href={`/locations/${activeSlide.id}`} 
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#cbd5e1] hover:text-emerald-400 transition group font-medium"
                >
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition" />
                  <span>← Back to {activeSlide.name} Corridors (Tier 2)</span>
                </a>

                {/* Corridor Pill Badge with Deep Emerald Green #10b981 border and glow */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#10b981] text-[11px] font-semibold text-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.35)]">
                  <span>📍 Focused Corridor: {currentCorridorDisplayName}</span>
                </div>
              </div>

              {/* Heading (Silver & Emerald) */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-light uppercase text-[#10b981] tracking-tight drop-shadow-[0_2px_15px_rgba(16,185,129,0.3)]">
                THE 6-PILLAR PROBLEM-SOLVER SOLUTIONS
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#cbd5e1] font-light tracking-wide mt-2 drop-shadow-md">
                Tailored architectural invisible grill engineering for {currentCorridorDisplayName} residences.
              </p>

            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* SECTION A: THE 6-PILLAR PROBLEM-SOLVER GRID                       */}
          {/* ----------------------------------------------------------------- */}
          <section id="pillars-section" className="py-12 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2">
                  <span>REAL PROOF SOLUTIONS • SS-316 ARCHITECTURAL CERTIFIED</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-light uppercase text-slate-100 tracking-tight">
                  High-Definition Balcony Protection
                </h2>
                <p className="text-[#cbd5e1] text-xs sm:text-sm mt-2 leading-relaxed font-light">
                  Engineered specifically for {currentCorridorDisplayName} high-rises and residential balconies.
                </p>
              </div>

              {/* 6 Grid Cards with Crisp Sunlight Imagery & Emerald Badges */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROBLEM_SOLVERS.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div 
                      key={idx}
                      className="group rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/50 bg-[#111815] transition-all duration-300 flex flex-col hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                    >
                      {/* High-Definition Sunlit Balcony Photography - NO DULL BLACK OVERLAYS */}
                      <div className="relative h-64 w-full overflow-hidden">
                        <img 
                          src={card.image} 
                          alt={card.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Wire simulation on card image */}
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.18)_21px,rgba(255,255,255,0.02)_22px)] pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111815] via-transparent to-transparent pointer-events-none" />
                        
                        <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md p-2.5 rounded-xl border border-emerald-500/40 text-emerald-400 shadow-md">
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="absolute top-4 right-4 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                          {card.stat}
                        </div>
                      </div>

                      {/* Content in Deep Emerald Green & Brushed Silver */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Badge in Deep Green */}
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 block mb-1">
                            {card.badge}
                          </span>
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
              <div className="mt-14 text-center p-6 rounded-2xl bg-[#111815] border border-emerald-500/40 max-w-4xl mx-auto shadow-xl">
                <p className="text-emerald-400 font-semibold text-sm sm:text-base italic">
                  "Okke Okka Balcony Installation... Enno High-Alert Safety Problems Nundi Mee Intiki Life-Time Premium Protection!"
                </p>
              </div>

            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* SECTION B: LOCAL WEATHER GUIDE & SS-316 TECHNICAL TRUST         */}
          {/* ----------------------------------------------------------------- */}
          <section id="weather-trust" className="py-20 px-6 sm:px-12 border-t border-white/10 bg-[#0c120f]">
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
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#111815] border border-white/10">
                      <Droplets className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase">The Environmental Challenge</h4>
                        <p className="text-xs text-slate-300 mt-1">{activeSlide.weatherChallenge}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#111815] border border-emerald-500/40">
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

                    <div className="p-4 rounded-2xl bg-[#111815] border border-white/10 text-center">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    
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
          <section id="estimate-calculator" className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0f0d]">
            <div className="max-w-5xl mx-auto">
              
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold">
                  TRANSPARENT PRICING & ESTIMATOR
                </span>
                <h2 className="text-3xl sm:text-5xl font-light uppercase text-slate-100 mt-2 tracking-tight">
                  Balcony Estimate Calculator
                </h2>
                <p className="text-[#cbd5e1] text-xs sm:text-sm mt-2">
                  Instant indicative investment calculation for {activeSlide.name} • {currentCorridorDisplayName}.
                </p>
              </div>

              <div className="bg-[#111815] border border-emerald-500/40 rounded-3xl p-6 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
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
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
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
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
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
                              ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]'
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

                {/* Estimate Summary & Direct WhatsApp Booking Column */}
                <div className="lg:col-span-5 bg-[#0a0f0d] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                  <div className="text-center">
                    <span className="text-[11px] uppercase tracking-wider text-[#cbd5e1] font-semibold">
                      Calculated Area
                    </span>
                    <div className="text-3xl font-black text-white mt-1 mb-3">
                      {calculatedArea} <span className="text-sm font-normal text-slate-400">sq.ft</span>
                    </div>

                    <span className="text-[11px] uppercase tracking-wider text-[#cbd5e1] font-semibold">
                      Real-Time Estimated Total
                    </span>
                    <div className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1 mb-2 drop-shadow-[0_0_12px_rgba(16,185,129,0.35)]">
                      ₹{estimatedMin.toLocaleString()} - ₹{estimatedMax.toLocaleString()}
                    </div>
                    <p className="text-[11px] text-slate-300 leading-normal font-light">
                      SS-316 high-tension wires, structural tracks, laser installation & 10-year warranty.
                    </p>
                  </div>

                  {/* Customer Booking Inputs */}
                  <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-[#cbd5e1] block mb-1">
                        Your Full Name
                      </label>
                      <input 
                        type="text"
                        placeholder="e.g. Ramesh Varma"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full bg-[#111815] border border-emerald-500/30 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold text-[#cbd5e1] block mb-1">
                        Mobile Number (For WhatsApp Quote)
                      </label>
                      <input 
                        type="tel"
                        placeholder="+91 94943 28999"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full bg-[#111815] border border-emerald-500/30 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  {/* Dynamic WhatsApp QR Code Inline */}
                  <div className="bg-[#111815] border border-white/10 rounded-2xl p-3.5 text-center mt-4">
                    <div className="w-28 h-28 mx-auto bg-white p-2 rounded-xl flex items-center justify-center shadow-lg">
                      <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://wa.me/919494328999?text=${getWhatsAppMessage()}`} 
                        alt="Dynamic WhatsApp QR Code"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="block text-[10px] text-slate-300 mt-2 font-medium">
                      Scan QR code or click below for instant 1-tap WhatsApp consultation
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <a 
                      href={`https://wa.me/919494328999?text=${getWhatsAppMessage()}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-3.5 rounded-xl text-xs font-black uppercase tracking-wider block text-center shadow-[0_0_20px_rgba(16,185,129,0.35)] transition"
                    >
                      Instant WhatsApp Consultation →
                    </a>
                    <span className="text-[10px] text-emerald-400 block text-center font-medium">
                      🎁 Free SS Shine Spray & Microfiber Kit on Booking!
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* TECHNICAL FAQS SECTION                                            */}
          {/* ----------------------------------------------------------------- */}
          <section id="faq-section" className="py-20 px-6 sm:px-12 border-t border-white/10 bg-[#0c120f]">
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
                  <div key={i} className="p-6 rounded-2xl bg-[#111815] border border-white/10">
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

          {/* Minimal Concierge Footer */}
          <footer className="border-t border-white/10 bg-[#0a0f0d] pt-16 pb-12 px-6 sm:px-12 text-slate-400 text-xs">
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
                  <li><a href="#pillars-section" className="hover:text-emerald-400 transition">Balcony SS-316 Grills</a></li>
                  <li><a href="#pillars-section" className="hover:text-emerald-400 transition">Window Safety Grills</a></li>
                  <li><a href="#pillars-section" className="hover:text-emerald-400 transition">High-Rise Elevation Grills</a></li>
                  <li><a href="#pillars-section" className="hover:text-emerald-400 transition">Pigeon Prevention Mesh</a></li>
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
                  className="w-full bg-[#0a0f0d] border border-emerald-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
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
