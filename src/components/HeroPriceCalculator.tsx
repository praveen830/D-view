import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Tag } from 'lucide-react';

interface HeroPriceCalculatorProps {
  citySlug: string;
  cityName: string;
}

export default function HeroPriceCalculator({ citySlug, cityName }: HeroPriceCalculatorProps) {
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(8);
  const [material, setMaterial] = useState<string>('SS 316 (2.5 mm High Tensile)');
  const [couponCode, setCouponCode] = useState<string>('');
  const [couponApplied, setCouponApplied] = useState<boolean>(true);

  const baseRatePerSqFt = material.includes('3.0') ? 200 : material.includes('2.5') ? 165 : 145;
  const area = Math.max(1, width * height);
  const marketTotal = Math.round(area * (baseRatePerSqFt * 1.25));
  const discountAmount = Math.round(marketTotal * 0.20);
  const offerTotal = couponApplied ? marketTotal - discountAmount : marketTotal;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponApplied(true);
  };

  const getWhatsAppEstimateUrl = () => {
    const text = `Hi D-View! I checked your ${cityName} balcony calculator.
- Width: ${width} Feet
- Height: ${height} Feet (${area} sq.ft)
- Material: ${material}
- Offer Price: ₹${offerTotal.toLocaleString('en-IN')} (20% Launch Discount Applied)
Please quote your lowest spot price and book free site measurement.`;

    return `https://wa.me/919494328999?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-black/75 sm:bg-[#0B0D0C]/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-[#7CFF3A]/60 sm:border-2 sm:border-[#7CFF3A]/80 p-3.5 sm:p-6 shadow-[0_0_35px_rgba(124,255,58,0.25)] text-left relative overflow-hidden select-none">
      
      {/* Top Header: CHECK [CITY] PRICE NOW › */}
      <div className="mb-2.5 sm:mb-4">
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
            <span className="truncate">CHECK <strong className="text-[#7CFF3A] group-hover:text-black">{cityName}</strong> PRICE NOW</span>
          </div>
          <span className="text-base leading-none group-hover:translate-x-1 transition-transform">›</span>
        </a>
      </div>

      <div className="space-y-2 sm:space-y-2.5">
        
        {/* Width & Height Side-by-Side (Saves massive mobile vertical space) */}
        <div className="grid grid-cols-2 gap-2">
          {/* Width */}
          <div className="relative">
            <label className="sr-only">Width (Feet)</label>
            <select
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="w-full appearance-none px-3 py-2 sm:py-2.5 rounded-xl bg-[#141C18] border border-[#2B3A32] text-white font-bold text-xs sm:text-sm focus:outline-none focus:border-[#7CFF3A] cursor-pointer truncate"
            >
              <option value={6}>Width: 6 Ft</option>
              <option value={8}>Width: 8 Ft</option>
              <option value={10}>Width: 10 Ft (Std)</option>
              <option value={12}>Width: 12 Ft</option>
              <option value={15}>Width: 15 Ft</option>
              <option value={18}>Width: 18 Ft</option>
              <option value={20}>Width: 20 Ft</option>
              <option value={25}>Width: 25 Ft</option>
              <option value={30}>Width: 30 Ft</option>
            </select>
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]">▼</span>
          </div>

          {/* Height */}
          <div className="relative">
            <label className="sr-only">Height (Feet)</label>
            <select
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full appearance-none px-3 py-2 sm:py-2.5 rounded-xl bg-[#141C18] border border-[#2B3A32] text-white font-bold text-xs sm:text-sm focus:outline-none focus:border-[#7CFF3A] cursor-pointer truncate"
            >
              <option value={4}>Height: 4 Ft</option>
              <option value={5}>Height: 5 Ft</option>
              <option value={6}>Height: 6 Ft</option>
              <option value={7}>Height: 7 Ft</option>
              <option value={8}>Height: 8 Ft (Floor-Ceiling)</option>
              <option value={9}>Height: 9 Ft</option>
              <option value={10}>Height: 10 Ft</option>
              <option value={12}>Height: 12 Ft</option>
            </select>
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]">▼</span>
          </div>
        </div>

        {/* Material (SS 316) Dropdown */}
        <div className="relative">
          <label className="sr-only">Material (SS 316)</label>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full appearance-none px-3 py-2 sm:py-2.5 rounded-xl bg-[#141C18] border border-[#2B3A32] text-white font-bold text-xs sm:text-sm focus:outline-none focus:border-[#7CFF3A] cursor-pointer"
          >
            <option value="SS 316 (2.5 mm High Tensile)">Material (SS 316 - 2.5 mm High Tensile)</option>
            <option value="SS 316 (2.0 mm Standard)">Material (SS 316 - 2.0 mm Standard)</option>
            <option value="SS 316 (3.0 mm Coastal Heavy)">Material (SS 316 - 3.0 mm Coastal Heavy)</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]">▼</span>
        </div>

        {/* Market Price & Offer Price Row */}
        <div className="flex items-center justify-between pt-1 text-xs sm:text-sm font-bold">
          <span className="text-gray-300">
            Market Price: <span className="text-red-500 line-through font-extrabold ml-1">₹ {marketTotal.toLocaleString('en-IN')}</span>
          </span>
          <span className="px-2 py-0.5 rounded bg-[#028A0F]/20 border border-[#7CFF3A]/40 text-[#7CFF3A] text-[11px] font-extrabold">
            🏷️ 20% OFF
          </span>
        </div>

        {/* Launch Coupon Box (Compact on mobile) */}
        <div className="p-2 sm:p-2.5 rounded-xl bg-[#082219] border border-[#7CFF3A]/30">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-[#7CFF3A] mb-1">
            <span className="flex items-center gap-1">
              <Tag className="w-3 h-3 text-[#7CFF3A]" />
              <span>{cityName} Launch Coupon</span>
            </span>
            <span className="text-gray-300 text-[10px]">Save: ₹ {discountAmount.toLocaleString('en-IN')}</span>
          </div>
          <form onSubmit={handleApplyCoupon} className="flex gap-1.5 sm:gap-2">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter Coupon Code"
              className="flex-grow bg-[#101714] border border-[#2B3A32] rounded-lg px-2.5 py-1 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#7CFF3A]"
            />
            <button
              type="submit"
              className="px-3 py-1 rounded-lg bg-[#028A0F] hover:bg-[#7CFF3A] hover:text-black text-white font-black text-xs transition uppercase"
            >
              APPLY
            </button>
          </form>
        </div>

        {/* Your Offer Price Banner */}
        <div className="flex items-baseline justify-between pt-0.5">
          <span className="text-xs sm:text-sm font-extrabold text-white">Your Offer Price:</span>
          <span className="text-xl sm:text-3xl font-black text-[#7CFF3A] drop-shadow-[0_0_15px_rgba(124,255,58,0.4)]">
            ₹ {offerTotal.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Disclaimer */}
        <p className="text-[9px] sm:text-[10px] text-gray-400 leading-tight">
          *Prices vary based on wire material (Economy vs Premium SS 316). Spot measurement is 100% free.
        </p>

        {/* Green WhatsApp Action Button */}
        <div className="pt-1">
          <a
            href={getWhatsAppEstimateUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#028A0F] to-[#04B214] hover:from-[#04B214] hover:to-[#7CFF3A] text-white hover:text-black font-extrabold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(4,178,20,0.5)] active:scale-98 group cursor-pointer"
          >
            <span className="text-sm sm:text-base">👉</span>
            <span>Unlock Extra Local Discount on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}

