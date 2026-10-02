import React, { useState, useEffect, useId } from 'react';
import QRCode from 'qrcode';
import { 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle, 
  Sparkles, 
  MessageSquare, 
  X,
  Phone,
  User,
  MapPin,
  Calendar,
  Building
} from 'lucide-react';
import { ALL_LOCATIONS } from '../data/locations';

interface PriceCalculatorProps {
  defaultCitySlug?: string;
  cityName?: string;
}

interface ThicknessOption {
  value: string;
  label: string;
  minRate: number;
  maxRate: number;
  description: string;
  recommendedFor: string;
}

const THICKNESS_OPTIONS: ThicknessOption[] = [
  {
    value: '1.5mm',
    label: '1.5 mm Ultra-Slim',
    minRate: 115,
    maxRate: 135,
    description: 'Lightweight SS-316 slim wire for small window openings & low-load grills.',
    recommendedFor: 'Lower floors (G+1 to G+3), stairwell safety, and small interior atrium balustrades.'
  },
  {
    value: '2.0mm',
    label: '2.0 mm Standard',
    minRate: 135,
    maxRate: 155,
    description: 'SS-316 multi-strand core with clear nylon coating.',
    recommendedFor: 'Low to mid-rise balconies (floors 1-6) & standard window openings.'
  },
  {
    value: '2.5mm',
    label: '2.5 mm High-Tensile (Most Popular)',
    minRate: 155,
    maxRate: 185,
    description: 'SS-316 marine-grade with 1800 N/mm² tensile strength.',
    recommendedFor: 'High-rise apartments (floors 7-20+), coastal zones & child safety.'
  },
  {
    value: '3.0mm',
    label: '3.0 mm Marine Heavy-Duty',
    minRate: 185,
    maxRate: 225,
    description: 'Max-strength SS-316 cable core for extreme wind load & coastal exposure.',
    recommendedFor: 'Penthouse balconies, oceanfront high-rises (Vizag/Kakinada) & commercial spans.'
  }
];

export default function PriceCalculator({ defaultCitySlug = 'rajahmundry', cityName = 'Rajahmundry' }: PriceCalculatorProps) {
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(8);
  const [quantity, setQuantity] = useState<number>(1);
  const [thickness, setThickness] = useState<string>('2.5mm');
  const [selectedCity, setSelectedCity] = useState<string>(defaultCitySlug);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');

  // Form states in modal
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('');
  const [propertyType, setPropertyType] = useState('High-Rise Apartment');
  const [preferredDate, setPreferredDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedThicknessObj = THICKNESS_OPTIONS.find(t => t.value === thickness) || THICKNESS_OPTIONS[1];
  const activeCityObj = ALL_LOCATIONS.find(loc => loc.slug === selectedCity) || ALL_LOCATIONS[0];

  // Calculation
  const singleArea = Math.max(0, width * height);
  const totalArea = singleArea * Math.max(1, quantity);
  const minEstimate = Math.round(totalArea * selectedThicknessObj.minRate);
  const maxEstimate = Math.round(totalArea * selectedThicknessObj.maxRate);

  // Validation warnings
  const isWidthWarning = width > 35;
  const isHeightWarning = height > 15;
  const isValid = width > 0 && height > 0 && totalArea > 0;

  // Prepare pre-filled WhatsApp message
  const createWhatsAppUrl = () => {
    const message = `Hello D-VIEW Solutions!
I calculated an estimate on your website for my balcony:
- City: ${activeCityObj.name}
- Dimensions: ${width} ft (W) × ${height} ft (H)
- Quantity: ${quantity} balcony/openings
- Total Area: ${totalArea} sq.ft
- Wire Thickness: ${selectedThicknessObj.label}
- Estimated Price Range: ₹${minEstimate.toLocaleString('en-IN')} – ₹${maxEstimate.toLocaleString('en-IN')}

Please arrange a Free On-Site Digital Measurement and confirmation.`;

    return `https://wa.me/919494328999?text=${encodeURIComponent(message)}`;
  };

  // Generate QR code when modal opens
  useEffect(() => {
    if (isModalOpen) {
      const waUrl = createWhatsAppUrl();
      QRCode.toDataURL(waUrl, {
        width: 220,
        margin: 2,
        color: {
          dark: '#0B0D0C',
          light: '#FFFFFF'
        }
      })
      .then((url) => setQrCodeDataUrl(url))
      .catch((err) => console.error('QR code error', err));
    }
  }, [isModalOpen, width, height, quantity, thickness, selectedCity]);

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section id="calculator" className="relative py-20 bg-[#0B0D0C] border-y border-[#24322B] overflow-hidden">
      {/* Background Wire Grids and Glows */}
      <div className="absolute inset-0 wire-grid-overlay opacity-30 pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#7CFF3A]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#16A34A]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151C19] border border-[#7CFF3A]/30 text-xs font-semibold text-[#7CFF3A] uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimation Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ESTIMATE YOUR BALCONY <br className="hidden sm:inline" />
            <span className="text-[#7CFF3A]">SAFETY INVESTMENT</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#C7CDD1]">
            Select your opening dimensions and cable grade for an instant, transparent price range tailored for <strong className="text-white">{activeCityObj.name}</strong> properties.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#151C19] rounded-2xl border border-[#24322B] p-6 sm:p-8 shadow-xl">
            <div className="space-y-6">
              
              {/* City Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                  1. Location Hub
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {ALL_LOCATIONS.map((loc) => (
                    <button
                      key={loc.slug}
                      type="button"
                      onClick={() => setSelectedCity(loc.slug)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all text-left flex items-center justify-between border ${
                        selectedCity === loc.slug
                          ? 'bg-[#7CFF3A]/15 border-[#7CFF3A] text-[#7CFF3A]'
                          : 'bg-[#121816] border-[#24322B] text-[#C7CDD1] hover:border-[#384C42]'
                      }`}
                    >
                      <span>{loc.name}</span>
                      {selectedCity === loc.slug && <span className="w-1.5 h-1.5 rounded-full bg-[#7CFF3A]"></span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dimensions Input */}
              <div className="pt-2 border-t border-[#24322B]">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-3">
                  2. Balcony Opening Dimensions (in Feet)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Width */}
                  <div className="bg-[#121816] rounded-xl p-4 border border-[#24322B]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-[#C7CDD1]">Width (Span)</span>
                      <span className="text-sm font-bold text-[#7CFF3A]">{width} ft</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="40"
                      step="1"
                      value={width}
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className="w-full h-1.5 bg-[#24322B] rounded-lg appearance-none cursor-pointer accent-[#7CFF3A]"
                    />
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[11px] text-[#94A3B8]">Manual:</span>
                      <div className="flex items-center gap-1.5">
                        <input
                          type="number"
                          min="1"
                          max="60"
                          value={width}
                          onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
                          className="w-20 px-2 py-1 text-xs text-center bg-[#1A2420] border border-[#24322B] rounded text-white font-semibold focus:outline-none focus:border-[#7CFF3A]"
                        />
                        <span className="text-xs text-[#94A3B8]">ft</span>
                      </div>
                    </div>
                  </div>

                  {/* Height */}
                  <div className="bg-[#121816] rounded-xl p-4 border border-[#24322B]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-[#C7CDD1]">Height (Floor to Ceiling)</span>
                      <span className="text-sm font-bold text-[#7CFF3A]">{height} ft</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="15"
                      step="0.5"
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full h-1.5 bg-[#24322B] rounded-lg appearance-none cursor-pointer accent-[#7CFF3A]"
                    />
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[11px] text-[#94A3B8]">Manual:</span>
                      <div className="flex items-center gap-1.5">
                        <input
                          type="number"
                          min="1"
                          max="20"
                          step="0.5"
                          value={height}
                          onChange={(e) => setHeight(Math.max(1, Number(e.target.value)))}
                          className="w-20 px-2 py-1 text-xs text-center bg-[#1A2420] border border-[#24322B] rounded text-white font-semibold focus:outline-none focus:border-[#7CFF3A]"
                        />
                        <span className="text-xs text-[#94A3B8]">ft</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Validation Warnings if oversized */}
                {(isWidthWarning || isHeightWarning) && (
                  <div className="mt-3 p-3 rounded-lg bg-[#2D1A10] border border-amber-500/30 flex items-start gap-2.5 text-xs text-amber-200">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Large dimensions detected ({width}×{height} ft). Balconies above 30ft width benefit from mid-span structural stiffener tracks, which our engineer will evaluate during the free site visit.</span>
                  </div>
                )}
              </div>

              {/* Wire Thickness Options */}
              <div className="pt-2 border-t border-[#24322B]">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                    3. SS-316 Marine Cable Thickness
                  </label>
                  <span className="text-[11px] text-[#7CFF3A] font-semibold">100% Genuine SS-316</span>
                </div>
                <div className="space-y-2.5">
                  {THICKNESS_OPTIONS.map((opt) => (
                    <div
                      key={opt.value}
                      onClick={() => setThickness(opt.value)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        thickness === opt.value
                          ? 'bg-[#1A2420] border-[#7CFF3A] shadow-[0_0_15px_rgba(124,255,58,0.15)]'
                          : 'bg-[#121816] border-[#24322B] hover:border-[#384C42]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            thickness === opt.value ? 'border-[#7CFF3A] bg-[#7CFF3A]' : 'border-[#64748B]'
                          }`}>
                            {thickness === opt.value && <div className="w-1.5 h-1.5 rounded-full bg-[#0B0D0C]"></div>}
                          </div>
                          <div>
                            <span className="text-sm font-bold text-white">{opt.label}</span>
                            <span className="block text-xs text-[#94A3B8]">{opt.description}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold text-[#7CFF3A]">₹{opt.minRate} - ₹{opt.maxRate}</span>
                          <span className="block text-[10px] text-[#94A3B8]">per sq.ft</span>
                        </div>
                      </div>
                      <div className="mt-2 pl-7 text-[11px] text-[#C7CDD1]/80">
                        <strong className="text-white">Best for:</strong> {opt.recommendedFor}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Number of Openings / Balconies */}
              <div className="pt-2 border-t border-[#24322B] flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] block">4. Number of Openings / Balconies</span>
                  <span className="text-[11px] text-[#94A3B8]">Multiply calculations for whole-home safety</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-[#121816] border border-[#24322B] text-white hover:border-[#7CFF3A] flex items-center justify-center font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm font-bold text-white">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-[#121816] border border-[#24322B] text-white hover:border-[#7CFF3A] flex items-center justify-center font-bold text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#151C19] to-[#0F1412] rounded-2xl border border-[#24322B] p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7CFF3A]/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center justify-between pb-4 border-b border-[#24322B]">
              <span className="text-xs font-bold tracking-wider uppercase text-[#94A3B8]">
                Estimated Quote
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#7CFF3A]/10 text-[#7CFF3A] border border-[#7CFF3A]/20">
                {activeCityObj.name} Hub
              </span>
            </div>

            {/* Area Metric */}
            <div className="py-6 border-b border-[#24322B] space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-[#C7CDD1]">Total Calculated Area:</span>
                <span className="text-2xl font-black text-white">{totalArea} <span className="text-sm font-normal text-[#94A3B8]">sq.ft</span></span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs bg-[#121816] p-3 rounded-xl border border-[#24322B]">
                <div>
                  <span className="text-[#94A3B8] block text-[10px] uppercase">Dimensions</span>
                  <span className="text-white font-medium">{width} ft × {height} ft</span>
                </div>
                <div>
                  <span className="text-[#94A3B8] block text-[10px] uppercase">Wire Spec</span>
                  <span className="text-[#7CFF3A] font-semibold">{selectedThicknessObj.label}</span>
                </div>
              </div>
            </div>

            {/* Estimated Price Range Highlight */}
            <div className="py-6">
              <span className="block text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-1">
                Estimated Investment Range
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                ₹{minEstimate.toLocaleString('en-IN')} <span className="text-lg text-[#94A3B8] font-normal">to</span> ₹{maxEstimate.toLocaleString('en-IN')}
              </div>
              {/* Complimentary Gift Hook */}
              <div className="p-3 rounded-xl bg-[#1A2420] border border-[#7CFF3A]/30 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#7CFF3A] shrink-0" />
                <span className="text-xs font-semibold text-[#E2E8F0]">
                  <strong className="text-[#7CFF3A]">Free Bonus:</strong> Includes complimentary Microfiber Cloth + SS Shine Spray Kit.
                </span>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Includes: SS-316 high-tensile wire rope, 6063-T6 aluminum tracks, stainless steel tensioners, and certified installation.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-extrabold text-sm text-[#0B0D0C] bg-[#7CFF3A] hover:bg-[#8FFF52] transition-all shadow-[0_0_25px_rgba(124,255,58,0.25)] hover:shadow-[0_0_35px_rgba(124,255,58,0.4)]"
              >
                <span>BOOK FREE SITE VISIT WITH THIS QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs text-[#C7CDD1] bg-[#121816] hover:bg-[#1A2420] border border-[#24322B] hover:border-[#7CFF3A]/50 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#7CFF3A]" />
                <span>Discuss on WhatsApp with Saved Dimensions</span>
              </a>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 pt-4 border-t border-[#24322B]">
              <p className="text-[11px] text-[#64748B] leading-relaxed">
                * <strong className="text-[#94A3B8]">Disclaimer:</strong> Indicative estimate only. Final pricing may vary based on actual on-site laser measurements, scaffold/height requirements, structural anchor substrate, and customized architectural profiles.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Modal: Book Site Visit & Dynamic WhatsApp QR */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-[#0F1412] border border-[#24322B] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#94A3B8] hover:text-white rounded-lg bg-[#151C19] border border-[#24322B]"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#7CFF3A]"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7CFF3A]">
                    Free On-Site Digital Measurement
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Schedule Free Measurement in {activeCityObj.name}
                </h3>
                <p className="mt-1 text-sm text-[#C7CDD1]">
                  Estimated: <strong className="text-white">₹{minEstimate.toLocaleString('en-IN')} – ₹{maxEstimate.toLocaleString('en-IN')}</strong> ({totalArea} sq.ft, {selectedThicknessObj.label})
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
                  
                  {/* Lead Form */}
                  <form onSubmit={handleSubmitLead} className="md:col-span-7 space-y-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Your Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-[#64748B]" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Suresh Varma"
                          className="w-full pl-9 pr-3 py-2 text-sm bg-[#151C19] border border-[#24322B] rounded-xl text-white focus:outline-none focus:border-[#7CFF3A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Phone Number (WhatsApp Preferred)</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-[#64748B]" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 9876543210"
                          className="w-full pl-9 pr-3 py-2 text-sm bg-[#151C19] border border-[#24322B] rounded-xl text-white focus:outline-none focus:border-[#7CFF3A]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Locality / Colony</label>
                        <input
                          type="text"
                          required
                          value={locality}
                          onChange={(e) => setLocality(e.target.value)}
                          placeholder="e.g. Morampudi"
                          className="w-full px-3 py-2 text-sm bg-[#151C19] border border-[#24322B] rounded-xl text-white focus:outline-none focus:border-[#7CFF3A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Property Type</label>
                        <select
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full px-3 py-2 text-sm bg-[#151C19] border border-[#24322B] rounded-xl text-white focus:outline-none focus:border-[#7CFF3A]"
                        >
                          <option>Apartment Balcony</option>
                          <option>Penthouse / Terrace</option>
                          <option>Independent Villa</option>
                          <option>Commercial Space</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Preferred Date for Free Site Visit</label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-[#151C19] border border-[#24322B] rounded-xl text-white focus:outline-none focus:border-[#7CFF3A]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-extrabold text-sm text-[#0B0D0C] bg-[#7CFF3A] hover:bg-[#8FFF52] transition-all shadow-[0_0_20px_rgba(124,255,58,0.2)]"
                    >
                      Confirm Booking & Lock Quote
                    </button>
                  </form>

                  {/* Dynamic QR Code side */}
                  <div className="md:col-span-5 flex flex-col items-center justify-center p-4 rounded-xl bg-[#121816] border border-[#24322B] text-center">
                    <span className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-2">
                      Scan with Phone to Send
                    </span>
                    {qrCodeDataUrl ? (
                      <div className="p-2.5 bg-white rounded-xl shadow-md">
                        <img 
                          src={qrCodeDataUrl} 
                          alt="Dynamic WhatsApp QR Code for Balcony Estimate" 
                          className="w-36 h-36"
                        />
                      </div>
                    ) : (
                      <div className="w-36 h-36 bg-[#1A2420] rounded-xl flex items-center justify-center text-xs text-[#94A3B8]">
                        Generating QR...
                      </div>
                    )}
                    <span className="mt-3 text-xs text-[#C7CDD1] font-medium">
                      Direct WhatsApp Connect
                    </span>
                    <span className="text-[10px] text-[#64748B] mt-0.5">
                      Pre-filled with your {totalArea} sq.ft dimensions
                    </span>
                  </div>

                </div>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#7CFF3A]/20 border border-[#7CFF3A] flex items-center justify-center mx-auto text-[#7CFF3A]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">Booking Confirmed!</h3>
                <p className="text-sm text-[#C7CDD1] max-w-md mx-auto">
                  Thank you <strong className="text-white">{name}</strong>. Our local <strong className="text-[#7CFF3A]">{activeCityObj.name}</strong> field engineer will call you at <strong className="text-white">{phone}</strong> within 2 hours to confirm your laser measurement visit.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={createWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:opacity-90 transition-opacity"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open in WhatsApp Now</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setIsModalOpen(false);
                    }}
                    className="px-6 py-3 rounded-xl bg-[#151C19] border border-[#24322B] text-white text-sm font-semibold hover:bg-[#1A2420]"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
