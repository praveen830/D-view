import React, { useRef, useState, useEffect } from 'react';

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

  // 9. Fire Emergency Trap Problem (MS Grills)
  {
    id: 9,
    type: 'problem',
    category: 'FIRE SAFETY & ESCAPE',
    tag: '09 • PROBLEM',
    badge: '🔥 CRITICAL: DEADLY MS GRILL FIRE TRAP',
    title: 'Overheated MS Iron Grill Fire Trap',
    subtitle: 'Welded Iron Cages Prevent Life-Saving Egress',
    image: '/images/before-ms-grill-fire-trap.jpg',
    description: 'When sudden fire erupts and apartment doors are blocked by smoke and flames, the balcony is the only escape route. Heavy welded MS iron grills become scorching hot and impossible to cut or break without industrial machinery, fatally trapping families inside.',
    bullet: 'Welded iron cages block emergency exits, turning high-rise balconies into fatal death traps.',
  },
  // 10. Fire Safety Solution (D-View)
  {
    id: 10,
    type: 'solution',
    category: 'FIRE SAFETY & ESCAPE',
    tag: '10 • D-VIEW SOLUTION',
    badge: '🧯 60-SEC EMERGENCY LIFE-SAVING EGRESS',
    title: '60-Second Fire Escape System',
    subtitle: 'Instant Cable-Cut & Fire Brigade Ladder Evacuation',
    image: '/images/after-dview-fire-escape.jpg',
    description: 'Unlike impenetrable welded iron cages, D-View SS-316 high-tension cables provide 400kg fall security daily, yet can be cleanly severed in under 60 seconds with emergency cutters. Fire brigade turntable ladders can easily reach and rescue families.',
    bullet: 'Life-saving emergency balcony evacuation with certified quick-cut cable technology.',
  },

  // 11. Pet Safety Problem
  {
    id: 11,
    type: 'problem',
    category: 'PET SAFETY & FREEDOM',
    tag: '11 • PROBLEM',
    badge: '⚠️ DANGER: ACCIDENTAL PET FALL HAZARD',
    title: 'Pet Balcony Fall Anxiety',
    subtitle: 'Curious Cats & Dogs at Risk on Open Balconies',
    image: '/images/before-pet-danger.jpg',
    description: 'High-rise open balconies with low railings terrify pet owners. Curious cats and energetic dogs can easily slip through railings or leap after birds. Pet parents live in constant stress, restricting pets indoors and keeping balcony doors locked in fear.',
    bullet: 'Pets confined indoors; owners constantly panicked about tragic high-altitude falls.',
  },
  // 12. Pet Safety Solution
  {
    id: 12,
    type: 'solution',
    category: 'PET SAFETY & FREEDOM',
    tag: '12 • D-VIEW SOLUTION',
    badge: '🐾 100% SECURE PET FREEDOM & RELAXATION',
    title: 'Safe Pet Balcony Living',
    subtitle: 'Relaxed Sunbathing & Unrestricted Peace of Mind',
    image: '/images/after-pet-freedom.jpg',
    description: 'Floor-to-ceiling SS-316 high-tension vertical cables with precision 50mm safe spacing ensure cats cannot slip out and dogs cannot jump over. Pet parents can enjoy morning tea and panoramic views while their furry friends bask safely in the fresh breeze.',
    bullet: 'Zero fall risk, total freedom for pets, and complete peace of mind for owners.',
  },
];

interface HorizontalProblemSliderProps {
  cityName?: string;
}

export const HorizontalProblemSlider: React.FC<HorizontalProblemSliderProps> = ({
  cityName = 'Andhra Pradesh',
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  // High-performance 60fps RAF scroll (zero lag, snappy easeOutCubic curve)
  const smoothScrollTo = (targetLeft: number, duration: number = 350) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const startLeft = el.scrollLeft;
    const distance = targetLeft - startLeft;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Fast, snappy easeOut curve for responsive modern sliding
      const ease = 1 - Math.pow(1 - progress, 3);
      el.scrollLeft = startLeft + distance * ease;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      const cardWidth = el.firstElementChild?.clientWidth || 310;
      const step = cardWidth + 24;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const target = direction === 'left' ? Math.max(0, el.scrollLeft - step) : Math.min(maxScroll, el.scrollLeft + step);
      smoothScrollTo(target, 320);
    }
    // Temporarily pause auto-slide for 4 seconds when user manually clicks arrows
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  // Fast, responsive auto-sliding interval (1.8 seconds) with zero lag
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const el = scrollRef.current;
        const cardWidth = el.firstElementChild?.clientWidth || 310;
        const step = cardWidth + 24;
        const maxScroll = el.scrollWidth - el.clientWidth;

        // Loop smoothly when reaching the end
        if (el.scrollLeft >= maxScroll - 25) {
          smoothScrollTo(0, 400);
        } else {
          smoothScrollTo(el.scrollLeft + step, 350);
        }
      }
    }, 1800); // 1.8s snappy interval - fast, lively, no server lag feel

    return () => clearInterval(interval);
  }, [autoPlay, isPaused]);

  return (
    <section className="w-full bg-[#031B15] py-14 px-4 sm:px-6 lg:px-8 text-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Navigation Arrows & Auto-Slide Indicator */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7CFF3A]/15 border border-[#7CFF3A]/30 text-[#7CFF3A] text-xs font-bold tracking-widest uppercase mb-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#7CFF3A] animate-pulse"></span>
              Real Balcony Problem vs Solution Showcase
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              12 Real-World Scenarios: <span className="text-[#7CFF3A]">Problems & D-VIEW Solutions</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">
              Automatic showcase smoothly slides through each scenario. Hover or touch any card to stop and read details.
            </p>
          </div>

          {/* Controls: Auto-Play Indicator & Manual Arrow Buttons */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            {/* Auto-Slide Status Toggle */}
            <button
              type="button"
              onClick={() => setAutoPlay(!autoPlay)}
              title={autoPlay ? 'Click to pause auto-sliding' : 'Click to resume auto-sliding'}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#052920] border border-white/20 hover:border-[#7CFF3A]/60 text-xs font-medium text-gray-200 transition shadow-md active:scale-95 cursor-pointer"
            >
              {autoPlay ? (
                <>
                  <span className={`w-2.5 h-2.5 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-[#7CFF3A] animate-pulse'}`}></span>
                  <span className="text-[11px] sm:text-xs font-semibold">
                    {isPaused ? 'Paused (Reading)' : 'Fast Auto-Slide (1.8s)'}
                  </span>
                </>
              ) : (
                <>
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  <span className="text-[11px] sm:text-xs text-gray-400">Auto-Slide Paused</span>
                </>
              )}
            </button>

            {/* Manual Left/Right Scroll Arrows */}
            <div className="flex items-center gap-2">
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
        </div>

        {/* 12 Horizontal Cards Container with Fast 60fps Auto-Sliding & Interactive Pause */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
            pauseTimerRef.current = setTimeout(() => setIsPaused(false), 2500);
          }}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 no-scrollbar cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SHOWCASE_8_CARDS.map((card) => {
            const isProblem = card.type === 'problem';

            return (
              <div
                key={card.id}
                className={`w-[260px] sm:w-[290px] md:w-[310px] shrink-0 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${
                  isProblem
                    ? 'bg-[#180C0E] border border-red-600/40 hover:border-red-500 hover:shadow-[0_10px_25px_rgba(239,68,68,0.25)]'
                    : 'bg-[#052920] border border-[#7CFF3A]/40 hover:border-[#7CFF3A] hover:shadow-[0_10px_25px_rgba(124,255,58,0.25)]'
                }`}
              >
                {/* Visual Area with Image - Reduced Compact Height */}
                <div className="relative h-[210px] sm:h-[230px] w-full overflow-hidden bg-black/80">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider backdrop-blur-md border shadow-md ${
                        isProblem
                          ? 'bg-red-950/90 text-red-300 border-red-500/50'
                          : 'bg-emerald-950/90 text-[#7CFF3A] border-[#7CFF3A]/50'
                      }`}
                    >
                      {card.tag}
                    </span>

                    <span
                      className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider backdrop-blur-md ${
                        isProblem
                          ? 'bg-red-600 text-white'
                          : 'bg-[#7CFF3A] text-black font-black'
                      }`}
                    >
                      {isProblem ? 'PROBLEM' : 'SOLUTION'}
                    </span>
                  </div>

                  {/* Bottom Image Floating Badge */}
                  <div className="absolute bottom-2 left-2 right-2 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold backdrop-blur-md border shadow-md truncate max-w-full ${
                        isProblem
                          ? 'bg-red-950/95 text-red-200 border-red-500/50'
                          : 'bg-emerald-950/95 text-[#7CFF3A] border-[#7CFF3A]/50'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          isProblem ? 'bg-red-500 animate-pulse' : 'bg-[#7CFF3A]'
                        }`}
                      />
                      <span className="truncate">{card.badge}</span>
                    </span>
                  </div>
                </div>

                {/* Content Area - Compact Main Text Only */}
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-grow text-left">
                  <div>
                    <span
                      className={`text-[9px] font-extrabold uppercase tracking-widest block mb-0.5 ${
                        isProblem ? 'text-red-400' : 'text-[#7CFF3A]'
                      }`}
                    >
                      {card.category}
                    </span>
                    <h3
                      className={`text-base font-black tracking-tight leading-snug transition-colors ${
                        isProblem
                          ? 'text-white group-hover:text-red-300'
                          : 'text-white group-hover:text-[#7CFF3A]'
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-gray-300 font-medium mt-1 leading-snug">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Bottom Action CTA */}
                  <a
                    href={`/contact?reason=${encodeURIComponent(card.category)}`}
                    className={`mt-3 w-full py-2 rounded-xl text-[11px] font-bold transition-all duration-300 text-center block shadow-md cursor-pointer ${
                      isProblem
                        ? 'bg-red-700/80 hover:bg-red-600 text-white'
                        : 'bg-[#028A0F] hover:bg-[#7CFF3A] hover:text-black text-white'
                    }`}
                  >
                    {isProblem ? `Solve in ${cityName} →` : `Protect in ${cityName} →`}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Indicator Prompt */}
        <div className="text-center mt-4">
          <span className="text-xs text-gray-400 font-medium inline-flex items-center gap-2">
            <span>⇄</span> Scroll horizontally to see all 12 problems & solutions
          </span>
        </div>
      </div>
    </section>
  );
};

export default HorizontalProblemSlider;
