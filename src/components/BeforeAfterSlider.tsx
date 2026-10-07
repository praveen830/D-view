import React, { useState, useRef, useEffect, useCallback } from 'react';

export interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
}

export default function BeforeAfterSlider({
  beforeImage = '/images/balcony-before.jpg',
  afterImage = '/images/balcony-after.jpg',
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Synchronize container width on mount and resize for pixel-perfect image alignment
  const updateWidth = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateWidth);
      observer.disconnect();
    };
  }, [updateWidth]);

  const rafId = useRef<number | null>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }
    rafId.current = requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percent = (x / rect.width) * 100;
      if (percent < 0) percent = 0;
      if (percent > 100) percent = 100;
      setSliderPos(percent);
    });
  }, []);

  useEffect(() => {
    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // Global mouse & touch listeners for continuous dragging even outside container
  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    const handleWindowTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    const handleWindowEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleWindowMouseMove);
      window.addEventListener('mouseup', handleWindowEnd);
      window.addEventListener('touchmove', handleWindowTouchMove, { passive: true });
      window.addEventListener('touchend', handleWindowEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowEnd);
      window.removeEventListener('touchmove', handleWindowTouchMove);
      window.removeEventListener('touchend', handleWindowEnd);
    };
  }, [isDragging, handleMove]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto my-6 px-4 select-none">
      <div className="text-center mb-4">
        <span className="inline-block px-3 py-0.5 rounded-full bg-[#7CFF3A]/10 border border-[#7CFF3A]/30 text-[#7CFF3A] text-[11px] font-bold tracking-wider uppercase mb-1.5">
          Live Split Comparison
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Before vs After <span className="text-[#7CFF3A]">Installation</span>
        </h3>
        <p className="text-xs text-[#3DED97] mt-1 font-medium">
          Drag the slider handle ⇄ left or right
        </p>
      </div>

      {/* 9:16 Aspect Ratio Frame */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/20 cursor-ew-resize touch-none ring-1 ring-white/10"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* AFTER IMAGE (Solution - Background) */}
        <img 
          src={afterImage} 
          alt="After D-VIEW Invisible Safety" 
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          draggable={false}
          loading="lazy"
          decoding="async"
        />
        <span className="absolute top-4 right-4 bg-emerald-950/85 backdrop-blur-md border border-emerald-500/40 text-emerald-200 text-xs px-2.5 py-1 rounded-full font-bold shadow-lg z-10 pointer-events-none">
          AFTER: 100% Safe
        </span>

        {/* BEFORE IMAGE (Problem - Clipped Top Layer) */}
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none z-10 select-none"
          style={{ width: `${sliderPos}%` }}
        >
          <img 
            src={beforeImage} 
            alt="Before Installation Danger" 
            className="absolute inset-0 w-full h-full object-cover max-w-none select-none pointer-events-none"
            style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
            draggable={false}
            loading="lazy"
            decoding="async"
          />
          <span className="absolute top-4 left-4 bg-red-950/85 backdrop-blur-md border border-red-500/40 text-red-200 text-xs px-2.5 py-1 rounded-full font-bold shadow-lg pointer-events-none whitespace-nowrap">
            BEFORE: Danger & Fear
          </span>
        </div>

        {/* Divider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl pointer-events-none z-20"
          style={{ left: `${sliderPos}%` }}
        >
          <div className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-black font-black text-sm flex items-center justify-center border-2 border-[#028A0F] shadow-2xl transition-transform ${
            isDragging ? 'scale-110 ring-4 ring-[#7CFF3A]/40' : ''
          }`}>
            ⇄
          </div>
        </div>
      </div>

      {/* Problem vs Solution Comparison Text Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4">
        <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-left">
          <p className="text-[10px] font-bold text-red-400 uppercase tracking-wide">Before Case</p>
          <p className="text-xs font-semibold text-red-200 mt-0.5">
            Low railing danger & bird infestation
          </p>
        </div>
        <div className="p-3 rounded-xl bg-[#0F2218]/80 border border-[#7CFF3A]/30 text-left">
          <p className="text-[10px] font-bold text-[#7CFF3A] uppercase tracking-wide">With D-VIEW</p>
          <p className="text-xs font-semibold text-emerald-200 mt-0.5">
            100% child-safe SS-316 invisible protection
          </p>
        </div>
      </div>
    </div>
  );
}

export { BeforeAfterSlider };
