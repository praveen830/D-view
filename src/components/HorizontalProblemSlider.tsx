import React, { useRef } from 'react';

export interface ShowcaseCard {
  id: number;
  type: 'problem' | 'solution';
  category: string;
  tag: string;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  bullet: string;
}

export const SHOWCASE_8_CARDS: ShowcaseCard[] = [
  // 1. Children Problem
  {
    id: 1,
    type: 'problem',
    category: 'CHILDREN SAFETY',
    tag: '01 • PROBLEM',
    badge: '⚠️ DANGER: ACCIDENTAL FALL RISK',
    title: 'Children Fall Hazard',
    subtitle: 'Low Railings & Unprotected Open Ledges',
    image: '/images/before-child-danger.jpg',
    description: 'Low open railings cause constant panic for parents. Toddlers can easily drag a chair or slip through wide gaps. One misstep can be fatal.',
    bullet: 'Parents keep balcony doors locked in permanent fear.',
  },
  // 2. Children Solution
  {
    id: 2,
    type: 'solution',
    category: 'CHILDREN SAFETY',
    tag: '02 • D-VIEW SOLUTION',
    badge: '🛡️ 100% TODDLER FALL PROTECTION',
    title: 'Children Freedom & Safety',
    subtitle: 'High-Tensile SS-316 @ 2" Safe Gap',
    image: '/images/after-child-safety.jpg',
    description: 'Floor-to-ceiling high-tensile SS-316 vertical wire cables with strict 2-inch safe spacing. Zero horizontal footholds to climb. Supports >400 kg load per strand.',
    bullet: 'Toddlers explore and play freely right at the edge without fear.',
  },

  // 3. Pigeon Problem
  {
    id: 3,
    type: 'problem',
    category: 'PIGEON MENACE',
    tag: '03 • PROBLEM',
    badge: '⚠️ UNHYGIENIC: DROPPINGS & BACTERIA',
    title: 'Wild Pigeon Infestation',
    subtitle: 'Foul Droppings, Mites & Feathers',
    image: '/images/before-pigeon-mess.jpg',
    description: 'Flocks of wild pigeons roost on open railings and AC outdoor units, leaving acidic droppings, feathers, and foul odor across floor tiles and balcony furniture.',
    bullet: 'Balcony becomes an unusable, dirty maintenance headache.',
  },
  // 4. Pigeon Solution
  {
    id: 4,
    type: 'solution',
    category: 'PIGEON MENACE',
    tag: '04 • D-VIEW SOLUTION',
    badge: '🛡️ 100% BIRD-FREE CLEAN HYGIENE',
    title: 'Zero Pigeon Menace',
    subtitle: 'Precision 50mm Structural Physical Barrier',
    image: '/images/after-pigeon-free.jpg',
    description: 'Precision 50mm vertical spacing physically prevents pigeons and birds from entering or nesting, without ugly dark nylon pigeon nets.',
    bullet: 'Spotless marble floors, fresh clean air, and pristine luxury living.',
  },

  // 5. View & Airflow Problem
  {
    id: 5,
    type: 'problem',
    category: 'VIEW & AIRFLOW',
    tag: '05 • PROBLEM',
    badge: '⚠️ HAZARD: BLOCKED BREEZE & FIRE TRAP',
    title: 'Traditional Heavy Iron Cage',
    subtitle: 'Blocks 40% Daylight & Deadly Fire Trap',
    image: '/images/before-height-anxiety.jpg',
    description: 'Heavy welded iron grilles block 40% of natural sunlight and fresh cross-ventilation. In sudden high-rise fire emergencies, iron cages trap families inside.',
    bullet: 'Claustrophobic prison-like feeling with blocked city panoramas.',
  },
  // 6. View & Airflow Solution
  {
    id: 6,
    type: 'solution',
    category: 'VIEW & AIRFLOW',
    tag: '06 • D-VIEW SOLUTION',
    badge: '🛡️ 99% AIRFLOW & 1-MIN FIRE ESCAPE',
    title: '100% Open Air & Fire Safety',
    subtitle: 'Unobstructed Panoramic Views',
    image: '/images/after-luxury-lounge.jpg',
    description: 'Ultra-slim vertical stainless steel cables preserve 99% optical transparency and river/coastal breeze. Fully severable in under 60 seconds with emergency cutters.',
    bullet: 'Pure sunlight, complete airflow, and certified life-saving fire egress.',
  },

  // 7. Old Age Problem
  {
    id: 7,
    type: 'problem',
    category: 'SENIOR CITIZENS',
    tag: '07 • PROBLEM',
    badge: '⚠️ ANXIETY: VERTIGO & RUSTED CAGES',
    title: 'Senior Anxiety & Vertigo',
    subtitle: 'Fear of Heights & Rusted Railing Shaking',
    image: '/images/before-elder-pigeons.jpg',
    description: 'Dark rusted bars make high-rise balconies look grim and unsafe. Weak, rattling railings trigger severe dizziness, vertigo, and anxiety for grandparents.',
    bullet: 'Elders feel confined indoors, avoiding balcony spaces completely.',
  },
  // 8. Old Age Solution
  {
    id: 8,
    type: 'solution',
    category: 'SENIOR CITIZENS',
    tag: '08 • D-VIEW SOLUTION',
    badge: '🛡️ PEACEFUL SUNLIT RETIREMENT',
    title: 'Senior Citizens Comfort',
    subtitle: 'Solid High-Tension Structural Security',
    image: '/images/after-elderly-peace.jpg',
    description: 'Rigidly anchored SS-316 vertical cables provide reassuring structural tension. Grandparents can lean safely, sip morning tea, and read newspapers with peace of mind.',
    bullet: 'Relaxed outdoor living with zero fear and 100% structural security.',
  },
];

interface HorizontalProblemSliderProps {
  cityName?: string;
}

export const HorizontalProblemSlider: React.FC<HorizontalProblemSliderProps> = ({
  cityName = 'Andhra Pradesh',
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#031B15] py-14 px-4 sm:px-6 lg:px-8 text-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7CFF3A]/15 border border-[#7CFF3A]/30 text-[#7CFF3A] text-xs font-bold tracking-widest uppercase mb-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#7CFF3A] animate-pulse"></span>
              Real Balcony Problem vs Solution Showcase
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              8 Real-World Scenarios: <span className="text-[#7CFF3A]">Problems & D-VIEW Solutions</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">
              Scroll horizontally from left to right. Each problem case is followed immediately by the certified D-VIEW invisible safety solution.
            </p>
          </div>

          {/* Desktop / Tablet Scroll Buttons */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-[#052920] border border-white/20 hover:border-[#7CFF3A] text-white hover:text-[#7CFF3A] flex items-center justify-center transition shadow-lg active:scale-95 cursor-pointer text-lg"
              aria-label="Scroll Left"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-[#052920] border border-white/20 hover:border-[#7CFF3A] text-white hover:text-[#7CFF3A] flex items-center justify-center transition shadow-lg active:scale-95 cursor-pointer text-lg"
              aria-label="Scroll Right"
            >
              →
            </button>
          </div>
        </div>

        {/* 8 Horizontal Cards Container (Left to Right Scrolling, No Toggles) */}
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-2 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SHOWCASE_8_CARDS.map((card) => {
            const isProblem = card.type === 'problem';

            return (
              <div
                key={card.id}
                className={`w-[300px] sm:w-[350px] md:w-[370px] shrink-0 snap-center rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 ${
                  isProblem
                    ? 'bg-[#180C0E] border-2 border-red-600/40 hover:border-red-500 hover:shadow-[0_15px_40px_rgba(239,68,68,0.25)]'
                    : 'bg-[#052920] border-2 border-[#7CFF3A]/40 hover:border-[#7CFF3A] hover:shadow-[0_15px_40px_rgba(124,255,58,0.25)]'
                }`}
              >
                {/* Visual Area with Image */}
                <div className="relative h-[340px] sm:h-[370px] w-full overflow-hidden bg-black/80">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      isProblem
                        ? 'from-[#180C0E] via-transparent to-black/60'
                        : 'from-[#052920] via-transparent to-black/60'
                    } pointer-events-none`}
                  />

                  {/* Top Tag */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-md border shadow-lg ${
                        isProblem
                          ? 'bg-red-950/90 text-red-300 border-red-500/50'
                          : 'bg-emerald-950/90 text-[#7CFF3A] border-[#7CFF3A]/50'
                      }`}
                    >
                      {card.tag}
                    </span>

                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider backdrop-blur-md ${
                        isProblem
                          ? 'bg-red-600 text-white'
                          : 'bg-[#7CFF3A] text-black font-black'
                      }`}
                    >
                      {isProblem ? 'PROBLEM CASE' : 'SOLUTION CASE'}
                    </span>
                  </div>

                  {/* Bottom Image Floating Badge */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold backdrop-blur-md border shadow-lg ${
                        isProblem
                          ? 'bg-red-950/95 text-red-200 border-red-500/50'
                          : 'bg-emerald-950/95 text-[#7CFF3A] border-[#7CFF3A]/50'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isProblem ? 'bg-red-500 animate-pulse' : 'bg-[#7CFF3A]'
                        }`}
                      />
                      <span>{card.badge}</span>
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col justify-between flex-grow text-left">
                  <div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest block mb-1 ${
                        isProblem ? 'text-red-400' : 'text-[#7CFF3A]'
                      }`}
                    >
                      {card.category}
                    </span>
                    <h3
                      className={`text-lg font-black tracking-tight leading-snug transition-colors ${
                        isProblem
                          ? 'text-white group-hover:text-red-300'
                          : 'text-white group-hover:text-[#7CFF3A]'
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-300 font-semibold mb-3">
                      {card.subtitle}
                    </p>

                    {/* Description Box */}
                    <div
                      className={`p-3 rounded-2xl border text-xs leading-relaxed mb-3 ${
                        isProblem
                          ? 'bg-[#241013] border-red-900/60 text-red-100/90'
                          : 'bg-[#092B1F] border-[#7CFF3A]/30 text-emerald-100/90'
                      }`}
                    >
                      <p>{card.description}</p>
                    </div>

                    {/* Key Bullet */}
                    <div className="flex items-start gap-1.5 text-[11px] font-semibold text-gray-300">
                      <span className={isProblem ? 'text-red-400' : 'text-[#7CFF3A]'}>
                        {isProblem ? '✕' : '✓'}
                      </span>
                      <span>{card.bullet}</span>
                    </div>
                  </div>

                  {/* Bottom Action CTA */}
                  <a
                    href={`/contact?reason=${encodeURIComponent(card.category)}`}
                    className={`mt-4 w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-300 text-center block shadow-lg cursor-pointer ${
                      isProblem
                        ? 'bg-red-700/80 hover:bg-red-600 text-white'
                        : 'bg-[#028A0F] hover:bg-[#7CFF3A] hover:text-black text-white'
                    }`}
                  >
                    {isProblem ? `Solve This in ${cityName} →` : `Get Certified Protection in ${cityName} →`}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Indicator Prompt */}
        <div className="text-center mt-4">
          <span className="text-xs text-gray-400 font-medium inline-flex items-center gap-2">
            <span>⇄</span> Scroll horizontally to see all 8 problems & solutions
          </span>
        </div>
      </div>
    </section>
  );
};

export default HorizontalProblemSlider;
