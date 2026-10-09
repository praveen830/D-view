import React, { useState } from 'react';
import { Calculator, MessageCircle, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroPriceCalculatorProps {
  citySlug: string;
  cityName: string;
}

export interface MaterialOption {
  id: string;
  grade: 'SS 316' | 'SS 304';
  thickness: string;
  label: string;
  ratePerSqFt: number;
}

// User-specified rates:
// SS 316: 3.0mm = ₹190, 2.5mm = ₹170, 2.0mm = ₹160
// SS 304: 3.0mm = ₹170, 2.5mm = ₹150, 2.0mm = ₹140
const MATERIAL_OPTIONS: MaterialOption[] = [
  // SS 316 (Marine Grade)
  {
    id: '316-2.5',
    grade: 'SS 316',
    thickness: '2.5 mm',
    label: 'SS 316 (Marine Grade) - 2.5 mm High Tensile (Recommended)',
    ratePerSqFt: 170,
  },
  {
    id: '316-3.0',
    grade: 'SS 316',
    thickness: '3.0 mm',
    label: 'SS 316 (Marine Grade) - 3.0 mm Heavy Duty Coastal',
    ratePerSqFt: 190,
  },
  {
    id: '316-2.0',
    grade: 'SS 316',
    thickness: '2.0 mm',
    label: 'SS 316 (Marine Grade) - 2.0 mm Standard',
    ratePerSqFt: 160,
  },

  // SS 304 (Standard Grade)
  {
    id: '304-2.5',
    grade: 'SS 304',
    thickness: '2.5 mm',
    label: 'SS 304 (Standard Grade) - 2.5 mm High Tensile',
    ratePerSqFt: 150,
  },
  {
    id: '304-3.0',
    grade: 'SS 304',
    thickness: '3.0 mm',
    label: 'SS 304 (Standard Grade) - 3.0 mm Heavy Duty',
    ratePerSqFt: 170,
  },
  {
    id: '304-2.0',
    grade: 'SS 304',
    thickness: '2.0 mm',
    label: 'SS 304 (Standard Grade) - 2.0 mm Economy',
    ratePerSqFt: 140,
  },
];

export default function HeroPriceCalculator({ citySlug, cityName }: HeroPriceCalculatorProps) {
  // Height and Width up to 100 Ft supported
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(8);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>('316-2.5');

  const selectedMaterial =
    MATERIAL_OPTIONS.find((m) => m.id === selectedMaterialId) || MATERIAL_OPTIONS[0];

  // Calculate only when width and height are provided
  const hasValidDimensions = width > 0 && height > 0;
  const area = hasValidDimensions ? width * height : 0;
  const estimatedPrice = hasValidDimensions ? area * selectedMaterial.ratePerSqFt : 0;

  // Handle number input clamped between 1 and 100
  const handleWidthChange = (val: string) => {
    if (val === '') {
      setWidth(0);
      return;
    }
    const num = Math.min(100, Math.max(0, parseInt(val, 10) || 0));
    setWidth(num);
  };

  const handleHeightChange = (val: string) => {
    if (val === '') {
      setHeight(0);
      return;
    }
    const num = Math.min(100, Math.max(0, parseInt(val, 10) || 0));
    setHeight(num);
  };

  const getWhatsAppEstimateUrl = () => {
    const text = `Hi D-View! I checked the ${cityName} balcony price calculator:
• Dimensions: ${width || 0} Ft (Width) × ${height || 0} Ft (Height)
• Total Area: ${area} Sq.Ft
• Material: ${selectedMaterial.label}
• Estimated Demo Price: ₹${estimatedPrice.toLocaleString('en-IN')}

I am interested in D-View Invisible Grills. Please schedule a 100% Free Site Visit & Measurement and apply the 10% – 15% Spot Discount.`;

    return `https://wa.me/919494328999?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-black/80 sm:bg-[#0B0D0C]/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-[#7CFF3A]/60 sm:border-2 sm:border-[#7CFF3A]/80 p-3.5 sm:p-5 shadow-[0_0_35px_rgba(124,255,58,0.25)] text-left relative overflow-hidden select-none">
      
      {/* Top Header: CHECK [CITY] PRICE NOW */}
      <div className="mb-3">
        <a
          href={getWhatsAppEstimateUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#028A0F] to-[#04B214] hover:from-[#04B214] hover:to-[#7CFF3A] hover:text-black text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(4,178,20,0.4)] transition-all group cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-black/30 flex items-center justify-center text-[#7CFF3A] group-hover:text-black">
              <Calculator className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </span>
            <span className="truncate">
              CHECK <strong className="text-[#7CFF3A] group-hover:text-black">{cityName}</strong> PRICE NOW
            </span>
          </div>
          <span className="text-base leading-none group-hover:translate-x-1 transition-transform">›</span>
        </a>
      </div>

      <div className="space-y-3">
        
        {/* Width & Height Inputs (1 to 100 Feet) */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* Width Input */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold text-gray-300 mb-1">
              Width (1 - 100 Ft):
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="100"
                value={width || ''}
                onChange={(e) => handleWidthChange(e.target.value)}
                placeholder="10"
                className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-[#141C18] border border-[#2B3A32] text-white font-bold text-xs sm:text-sm focus:outline-none focus:border-[#7CFF3A] pr-9"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 pointer-events-none">
                Ft
              </span>
            </div>
          </div>

          {/* Height Input */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold text-gray-300 mb-1">
              Height (1 - 100 Ft):
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="100"
                value={height || ''}
                onChange={(e) => handleHeightChange(e.target.value)}
                placeholder="8"
                className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-[#141C18] border border-[#2B3A32] text-white font-bold text-xs sm:text-sm focus:outline-none focus:border-[#7CFF3A] pr-9"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 pointer-events-none">
                Ft
              </span>
            </div>
          </div>
        </div>

        {/* Quick Presets for 100 Ft & Popular Balcony Dimensions */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <span className="text-[10px] text-gray-400 font-semibold shrink-0">Presets:</span>
          {[
            { label: '10×8 Ft', w: 10, h: 8 },
            { label: '15×9 Ft', w: 15, h: 9 },
            { label: '25×10 Ft', w: 25, h: 10 },
            { label: '50×10 Ft', w: 50, h: 10 },
            { label: '100×10 Ft', w: 100, h: 10 },
          ].map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => {
                setWidth(preset.w);
                setHeight(preset.h);
              }}
              className={`px-2 py-0.5 rounded-lg text-[10px] font-bold border transition shrink-0 cursor-pointer ${
                width === preset.w && height === preset.h
                  ? 'bg-[#7CFF3A]/20 border-[#7CFF3A] text-[#7CFF3A]'
                  : 'bg-[#141C18] border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Material Selection (SS 316 & SS 304) - Rates are NOT displayed in options */}
        <div>
          <label className="block text-[11px] sm:text-xs font-bold text-gray-300 mb-1">
            Wire Material & Thickness:
          </label>
          <div className="relative">
            <select
              value={selectedMaterialId}
              onChange={(e) => setSelectedMaterialId(e.target.value)}
              className="w-full appearance-none px-3 py-2 sm:py-2.5 rounded-xl bg-[#141C18] border border-[#2B3A32] text-white font-bold text-xs sm:text-sm focus:outline-none focus:border-[#7CFF3A] cursor-pointer pr-8"
            >
              <optgroup label="── SS 316 Marine Grade (Rust-Proof) ──">
                <option value="316-2.5">SS 316 (Marine Grade) - 2.5 mm High Tensile (Recommended)</option>
                <option value="316-3.0">SS 316 (Marine Grade) - 3.0 mm Heavy Duty Coastal</option>
                <option value="316-2.0">SS 316 (Marine Grade) - 2.0 mm Standard</option>
              </optgroup>
              <optgroup label="── SS 304 Standard Grade ──">
                <option value="304-2.5">SS 304 (Standard Grade) - 2.5 mm High Tensile</option>
                <option value="304-3.0">SS 304 (Standard Grade) - 3.0 mm Heavy Duty</option>
                <option value="304-2.0">SS 304 (Standard Grade) - 2.0 mm Economy</option>
              </optgroup>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]">▼</span>
          </div>
        </div>

        {/* Output Area: Price shown only when Width and Height are added */}
        {hasValidDimensions ? (
          <div className="bg-[#052920] border border-[#7CFF3A]/40 rounded-xl p-3 shadow-inner">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-gray-300">Total Area:</span>
              <span className="font-extrabold text-white">
                {area} Sq.Ft <span className="text-gray-400 text-xs">({width} Ft × {height} Ft)</span>
              </span>
            </div>
            <div className="flex items-baseline justify-between pt-1.5 border-t border-white/10 mt-1.5">
              <div>
                <span className="text-xs sm:text-sm font-extrabold text-white">Estimated Demo Price:</span>
                <span className="block text-[10px] text-gray-400 font-normal">
                  ({selectedMaterial.grade} • {selectedMaterial.thickness})
                </span>
              </div>
              <span className="text-2xl sm:text-3xl font-black text-[#7CFF3A] drop-shadow-[0_0_15px_rgba(124,255,58,0.4)]">
                ₹ {estimatedPrice.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        ) : (
          <div className="bg-[#101714] border border-amber-500/30 rounded-xl p-3 text-center">
            <p className="text-xs text-amber-300 font-semibold">
              ⚠️ Please enter Width & Height (1 - 100 Ft) above to see estimated demo price.
            </p>
          </div>
        )}

        {/* High-Converting Special Offer Box (English) - 10% to 15% Extra Discount on Call/Visit */}
        <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-[#0c2a1e] via-[#081f16] to-[#04140e] border-2 border-[#7CFF3A]/60 shadow-[0_0_25px_rgba(124,255,58,0.25)] text-left relative overflow-hidden">
          {/* Header Badge */}
          <div className="flex items-center justify-between mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#7CFF3A]/20 border border-[#7CFF3A]/50 text-[#7CFF3A] text-[10px] sm:text-[11px] font-black uppercase tracking-wider">
              🔥 SPECIAL ON-SITE OFFER
            </span>
            <span className="text-[11px] sm:text-xs font-black text-black bg-[#7CFF3A] px-2 py-0.5 rounded-lg shadow-sm">
              10% – 15% OFF
            </span>
          </div>

          <h4 className="text-xs sm:text-sm font-black text-white leading-snug">
            Worried about price? <span className="text-[#7CFF3A]">Get 10% to 15% Extra Discount on Call or Free Site Visit!</span>
          </h4>
          
          <p className="text-[10px] sm:text-[11px] text-gray-300 mt-1 leading-relaxed">
            * <strong className="text-white">Note:</strong> The price above is only a standard demo estimate. When you schedule a <strong className="text-[#7CFF3A]">100% Free Site Measurement Visit</strong> or call our engineering team, we inspect your balcony and unlock a <strong className="text-[#7CFF3A]">10% to 15% direct spot discount</strong> tailored to your site!
          </p>
        </div>

        {/* Action Buttons: Direct Call & WhatsApp Buttons */}
        <div className="space-y-2 pt-0.5">
          {/* WhatsApp Primary CTA */}
          <a
            href={getWhatsAppEstimateUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#028A0F] to-[#04B214] hover:from-[#04B214] hover:to-[#7CFF3A] text-white hover:text-black font-extrabold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(4,178,20,0.5)] active:scale-98 group cursor-pointer"
          >
            <span className="text-sm sm:text-base">👉</span>
            <span>Book Free Site Visit & Claim 15% Off (WhatsApp)</span>
          </a>

          {/* Direct Phone Call Button */}
          <a
            href="tel:+919494328999"
            className="w-full flex items-center justify-center gap-2 py-2 sm:py-2.5 px-4 rounded-xl bg-[#141C18] hover:bg-[#1a2620] border border-[#7CFF3A]/40 hover:border-[#7CFF3A] text-gray-200 hover:text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-98 cursor-pointer"
          >
            <span>📞</span>
            <span>Call Directly for Lowest Spot Quote: <strong className="text-[#7CFF3A] ml-1">+91 94943 28999</strong></span>
          </a>
        </div>

      </div>
    </div>
  );
}
