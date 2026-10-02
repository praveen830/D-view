import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface HeroPriceCalculatorProps {
  citySlug: string;
  cityName: string;
}

export default function HeroPriceCalculator({ citySlug, cityName }: HeroPriceCalculatorProps) {
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(8);
  const [wireSpec, setWireSpec] = useState<number>(165); // rate per sq.ft

  const area = Math.max(1, width * height);
  const estimatedTotal = Math.round(area * wireSpec);

  const getWhatsAppEstimateUrl = () => {
    const text = `Hello D-VIEW Solutions!
I calculated an instant estimate for my balcony in ${cityName}:
- Width: ${width} ft
- Height: ${height} ft
- Calculated Area: ${area} sq.ft
- Material: SS-316 Marine Grade
- Estimated Total: ₹${estimatedTotal.toLocaleString('en-IN')}

Please arrange a free on-site laser measurement to confirm.`;

    return `https://wa.me/919494328999?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-[#0B0D0C]/90 backdrop-blur-xl rounded-2xl border-2 border-[#7CFF3A]/80 p-5 sm:p-6 shadow-[0_0_35px_rgba(124,255,58,0.25)] relative overflow-hidden text-left">
      {/* Subtle top glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#7CFF3A]/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Header matching image 5: Check [City] Price Now */}
      <div className="mb-4">
        <h3 className="text-base sm:text-lg font-black text-white">
          Check <span className="text-[#7CFF3A]">{cityName} Price</span> Now
        </h3>
        <span className="text-[11px] text-[#94A3B8]">
          Instant indicative quote with SS-316 Marine Grade
        </span>
      </div>

      <div className="space-y-3">
        {/* Width (Feet) */}
        <div>
          <label className="block text-[11px] font-bold text-[#C7CDD1] uppercase tracking-wider mb-1">
            Width (Feet)
          </label>
          <input
            type="number"
            min="1"
            max="60"
            value={width}
            onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
            placeholder="Width (Feet)"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#121816] border border-[#24322B] text-white font-bold text-sm focus:outline-none focus:border-[#7CFF3A] transition-colors"
          />
        </div>

        {/* Height (Feet) */}
        <div>
          <label className="block text-[11px] font-bold text-[#C7CDD1] uppercase tracking-wider mb-1">
            Height (Feet)
          </label>
          <input
            type="number"
            min="1"
            max="25"
            step="0.5"
            value={height}
            onChange={(e) => setHeight(Math.max(1, Number(e.target.value)))}
            placeholder="Height (Feet)"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#121816] border border-[#24322B] text-white font-bold text-sm focus:outline-none focus:border-[#7CFF3A] transition-colors"
          />
        </div>

        {/* Material Selection Dropdown */}
        <div>
          <label className="block text-[11px] font-bold text-[#C7CDD1] uppercase tracking-wider mb-1">
            Material & Wire Spec
          </label>
          <select
            value={wireSpec}
            onChange={(e) => setWireSpec(Number(e.target.value))}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#121816] border border-[#24322B] text-white font-semibold text-xs sm:text-sm focus:outline-none focus:border-[#7CFF3A] transition-colors"
          >
            <option value={145}>Material (SS 316 - 2.0 mm Standard)</option>
            <option value={165}>Material (SS 316 - 2.5 mm High-Tensile)</option>
            <option value={195}>Material (SS 316 - 3.0 mm Coastal Heavy)</option>
            <option value={135}>Material (SS 316 - 1.5 mm Window Spec)</option>
          </select>
        </div>

        {/* Live Estimated Total Output matching image 5 */}
        <div className="pt-2">
          <div className="flex items-baseline justify-between py-1">
            <span className="text-xs text-[#94A3B8]">Area: <strong className="text-white">{area} sq.ft</strong></span>
            <div className="text-right">
              <span className="text-xs text-[#C7CDD1] mr-1">Estimated Total:</span>
              <span className="text-xl sm:text-2xl font-black text-[#7CFF3A]">
                ₹ {estimatedTotal.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>

        {/* Green Action Button matching image 5 */}
        <div className="pt-1">
          <a
            href={getWhatsAppEstimateUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-extrabold text-xs sm:text-sm text-[#0B0D0C] bg-[#7CFF3A] hover:bg-[#8FFF52] transition-all shadow-[0_0_20px_rgba(124,255,58,0.3)] hover:shadow-[0_0_30px_rgba(124,255,58,0.5)] active:translate-y-0.5"
          >
            <span>Calculate & Book Site Visit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#64748B] pt-1">
          <span>* Includes SS-316 + Track + Fitting</span>
          <a href="#calculator" className="text-[#7CFF3A] hover:underline">
            Advanced Tool ↓
          </a>
        </div>

      </div>
    </div>
  );
}
