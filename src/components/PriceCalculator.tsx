import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  MessageSquare, 
  X,
  Phone,
  User,
  MapPin,
  AlertCircle
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
}

const THICKNESS_OPTIONS: ThicknessOption[] = [
  {
    value: '2.0mm',
    label: '2.0 mm Standard',
    minRate: 135,
    maxRate: 155,
    description: 'SS-316 multi-strand core with clear nylon coating.'
  },
  {
    value: '2.5mm',
    label: '2.5 mm High-Tensile (Most Popular)',
    minRate: 155,
    maxRate: 185,
    description: 'SS-316 marine-grade with 1800 N/mm² tensile strength.'
  },
  {
    value: '3.0mm',
    label: '3.0 mm Heavy Duty',
    minRate: 185,
    maxRate: 225,
    description: 'Max-strength SS-316 cable core for extreme wind load & coastal exposure.'
  }
];

export default function PriceCalculator({ defaultCitySlug = 'visakhapatnam', cityName = 'Visakhapatnam' }: PriceCalculatorProps) {
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(8);
  const [thickness, setThickness] = useState<string>('2.5mm');
  const [selectedCity, setSelectedCity] = useState<string>(defaultCitySlug);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');

  // Form states in modal
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [modalCity, setModalCity] = useState(defaultCitySlug);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedThicknessObj = THICKNESS_OPTIONS.find(t => t.value === thickness) || THICKNESS_OPTIONS[1];
  const activeCityObj = ALL_LOCATIONS.find(loc => loc.slug === selectedCity) || ALL_LOCATIONS[0];
  const modalCityObj = ALL_LOCATIONS.find(loc => loc.slug === modalCity) || activeCityObj;

  // Calculation
  const totalArea = Math.max(1, width * height);
  const minEstimate = Math.round(totalArea * selectedThicknessObj.minRate);
  const maxEstimate = Math.round(totalArea * selectedThicknessObj.maxRate);

  // Validation warnings
  const isWidthWarning = width > 35;
  const isHeightWarning = height > 15;

  // Prepare pre-filled WhatsApp message
  const createWhatsAppUrl = () => {
    const message = `Hello D-VIEW Solutions!
I calculated an estimate on your website for my balcony:
- City: ${modalCityObj.name}
- Dimensions: ${width} ft (W) × ${height} ft (H)
- Total Area: ${totalArea} sq.ft
- Wire Thickness: ${selectedThicknessObj.label}
- Estimated Investment: ₹${minEstimate.toLocaleString('en-IN')} – ₹${maxEstimate.toLocaleString('en-IN')}

Please arrange a Free On-Site Digital Measurement visit.`;

    return `https://wa.me/919494328999?text=${encodeURIComponent(message)}`;
  };

  // Generate QR code when modal opens or calculation changes
  useEffect(() => {
    const waUrl = createWhatsAppUrl();
    QRCode.toDataURL(waUrl, {
      width: 220,
      margin: 2,
      color: {
        dark: '#0a0f0d',
        light: '#FFFFFF'
      }
    })
    .then((url) => setQrCodeDataUrl(url))
    .catch((err) => console.error('QR code generation error', err));
  }, [isModalOpen, width, height, thickness, selectedCity, modalCity]);

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section id="calculator" className="relative py-20 bg-[#0a0f0d] border-y border-[#24322B] overflow-hidden">
      {/* Background Wire Grids and Emerald Glows */}
      <div className="absolute inset-0 wire-grid-overlay opacity-25 pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#22c55e]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#22c55e]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131b17] border border-[#22c55e]/30 text-xs font-bold text-[#22c55e] uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            ESTIMATE YOUR BALCONY <br className="hidden sm:inline" />
            <span className="text-[#22c55e]">SAFETY INVESTMENT</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#cbd5e1]">
            Select your opening dimensions and cable grade for an instant, transparent price range.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#131b17] rounded-2xl border border-[#24322B] p-6 sm:p-8 shadow-xl">
            <div className="space-y-6">
              
              {/* City Selection */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#94a3b8] mb-2.5">
                  1. Select Location Hub
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {ALL_LOCATIONS.map((loc) => (
                    <button
                      key={loc.slug}
                      type="button"
                      onClick={() => {
                        setSelectedCity(loc.slug);
                        setModalCity(loc.slug);
                      }}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-left flex items-center justify-between border ${
                        selectedCity === loc.slug
                          ? 'bg-[#22c55e]/15 border-[#22c55e] text-[#22c55e]'
                          : 'bg-[#0a0f0d] border-[#24322B] text-[#cbd5e1] hover:border-[#384C42]'
                      }`}
                    >
                      <span>{loc.name}</span>
                      {selectedCity === loc.slug && <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dimensions Input */}
              <div className="pt-2 border-t border-[#24322B]">
                <label className="block text-xs font-black uppercase tracking-wider text-[#94a3b8] mb-3">
                  2. Balcony Opening Dimensions (Feet)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Width */}
                  <div className="bg-[#0a0f0d] rounded-xl p-4 border border-[#24322B]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-[#cbd5e1]">Width (Span)</span>
                      <span className="text-sm font-black text-[#22c55e]">{width} ft</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="40"
                      step="1"
                      value={width}
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className="w-full h-1.5 bg-[#24322B] rounded-lg appearance-none cursor-pointer accent-[#22c55e]"
                    />
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[11px] text-[#94a3b8]">Numeric:</span>
                      <div className="flex items-center gap-1.5">
                        <input
                          type="number"
                          min="1"
                          max="60"
                          value={width}
                          onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
                          className="w-20 px-2 py-1 text-xs text-center bg-[#131b17] border border-[#24322B] rounded-lg text-white font-bold focus:outline-none focus:border-[#22c55e]"
                        />
                        <span className="text-xs text-[#94a3b8]">ft</span>
                      </div>
                    </div>
                  </div>

                  {/* Height */}
                  <div className="bg-[#0a0f0d] rounded-xl p-4 border border-[#24322B]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-[#cbd5e1]">Height (Floor to Ceiling)</span>
                      <span className="text-sm font-black text-[#22c55e]">{height} ft</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="15"
                      step="0.5"
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full h-1.5 bg-[#24322B] rounded-lg appearance-none cursor-pointer accent-[#22c55e]"
                    />
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[11px] text-[#94a3b8]">Numeric:</span>
                      <div className="flex items-center gap-1.5">
                        <input
                          type="number"
                          min="1"
                          max="20"
                          step="0.5"
                          value={height}
                          onChange={(e) => setHeight(Math.max(1, Number(e.target.value)))}
                          className="w-20 px-2 py-1 text-xs text-center bg-[#131b17] border border-[#24322B] rounded-lg text-white font-bold focus:outline-none focus:border-[#22c55e]"
                        />
                        <span className="text-xs text-[#94a3b8]">ft</span>
                      </div>
                    </div>
                  </div>

                </div>

                {(isWidthWarning || isHeightWarning) && (
                  <div className="mt-3 p-3 rounded-lg bg-[#2D1A10] border border-amber-500/30 flex items-start gap-2.5 text-xs text-amber-200">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Large dimensions detected ({width}×{height} ft). Balconies above 30ft width benefit from mid-span structural stiffener tracks, which our engineer will inspect during the free site visit.</span>
                  </div>
                )}
              </div>

              {/* Wire Thickness Options */}
              <div className="pt-2 border-t border-[#24322B]">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-black uppercase tracking-wider text-[#94a3b8]">
                    3. SS-316 Marine Cable Thickness
                  </label>
                  <span className="text-[11px] text-[#22c55e] font-bold">100% Genuine SS-316</span>
                </div>
                <div className="space-y-2.5">
                  {THICKNESS_OPTIONS.map((opt) => (
                    <div
                      key={opt.value}
                      onClick={() => setThickness(opt.value)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        thickness === opt.value
                          ? 'bg-[#1a2420] border-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.15)]'
                          : 'bg-[#0a0f0d] border-[#24322B] hover:border-[#384C42]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            thickness === opt.value ? 'border-[#22c55e] bg-[#22c55e]' : 'border-[#64748B]'
                          }`}>
                            {thickness === opt.value && <div className="w-1.5 h-1.5 rounded-full bg-black"></div>}
                          </div>
                          <div>
                            <span className="text-sm font-bold text-white">{opt.label}</span>
                            <span className="block text-xs text-[#94a3b8]">{opt.description}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold text-[#22c55e]">₹{opt.minRate} - ₹{opt.maxRate}</span>
                          <span className="block text-[10px] text-[#94a3b8]">per sq.ft</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#131b17] to-[#0a0f0d] rounded-2xl border border-[#24322B] p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e]/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center justify-between pb-4 border-b border-[#24322B]">
              <span className="text-xs font-black tracking-wider uppercase text-[#94a3b8]">
                Real-Time Calculated Output
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30">
                {activeCityObj.name} Hub
              </span>
            </div>

            {/* Area Metric */}
            <div className="py-6 border-b border-[#24322B] space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-[#cbd5e1] font-medium">Total Calculated Area:</span>
                <span className="text-3xl font-black text-white">{totalArea} <span className="text-sm font-normal text-[#94a3b8]">sq.ft</span></span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs bg-[#0a0f0d] p-3 rounded-xl border border-[#24322B]">
                <div>
                  <span className="text-[#94a3b8] block text-[10px] uppercase font-bold">Dimensions</span>
                  <span className="text-white font-semibold">{width} ft × {height} ft</span>
                </div>
                <div>
                  <span className="text-[#94a3b8] block text-[10px] uppercase font-bold">Cable Gauge</span>
                  <span className="text-[#22c55e] font-bold">{selectedThicknessObj.label.split(' ')[0]}</span>
                </div>
              </div>
            </div>

            {/* Estimated Price Range Highlight */}
            <div className="py-6">
              <span className="block text-xs font-bold text-[#94a3b8] uppercase tracking-wider mb-1">
                Estimated Investment Range
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                ₹{minEstimate.toLocaleString('en-IN')} <span className="text-lg text-[#94a3b8] font-normal">to</span> ₹{maxEstimate.toLocaleString('en-IN')}
              </div>
              <p className="mt-2 text-xs text-[#94a3b8] leading-relaxed">
                Includes SS-316 wire rope, 6063-T6 aluminum tracks, and certified installation.
              </p>
            </div>

            {/* Action Button */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-extrabold text-sm text-black bg-[#22c55e] hover:bg-[#16a34a] transition-all shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)]"
              >
                <span>Book Free Site Visit With This Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs text-[#cbd5e1] bg-[#0a0f0d] hover:bg-[#1A2420] border border-[#24322B] hover:border-[#22c55e]/50 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#22c55e]" />
                <span>Discuss on WhatsApp with Saved Dimensions</span>
              </a>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 pt-4 border-t border-[#24322B]">
              <p className="text-[11px] text-[#64748B] leading-relaxed">
                * Indicative estimate. Final pricing confirmed during free on-site laser measurement based on anchor substrate and structural profiles.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Modal: Book Site Visit & Dynamic WhatsApp QR */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-[#0a0f0d] border border-[#22c55e]/30 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#94a3b8] hover:text-white rounded-lg bg-[#131b17] border border-[#24322B]"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
                  <span className="text-xs font-black uppercase tracking-wider text-[#22c55e]">
                    Free On-Site Laser Measurement
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white">
                  Book Free Site Visit With This Quote
                </h3>
                <p className="mt-1 text-sm text-[#cbd5e1]">
                  Estimated: <strong className="text-white">₹{minEstimate.toLocaleString('en-IN')} – ₹{maxEstimate.toLocaleString('en-IN')}</strong> ({totalArea} sq.ft, {selectedThicknessObj.label})
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
                  
                  {/* Clean Lead Form */}
                  <form onSubmit={handleSubmitLead} className="md:col-span-7 space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#94a3b8] mb-1">Your Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-[#64748B]" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Ramesh Varma"
                          className="w-full pl-9 pr-3 py-2.5 text-sm bg-[#131b17] border border-[#24322B] rounded-xl text-white focus:outline-none focus:border-[#22c55e]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#94a3b8] mb-1">Phone Number (WhatsApp Preferred)</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-[#64748B]" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 9494328999"
                          className="w-full pl-9 pr-3 py-2.5 text-sm bg-[#131b17] border border-[#24322B] rounded-xl text-white focus:outline-none focus:border-[#22c55e]"
                        />
                      </div>
                    </div>

                    {/* Simple Location Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-[#94a3b8] mb-1">Location / City</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-[#64748B]" />
                        <select
                          value={modalCity}
                          onChange={(e) => setModalCity(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 text-sm bg-[#131b17] border border-[#24322B] rounded-xl text-white focus:outline-none focus:border-[#22c55e]"
                        >
                          <option value="visakhapatnam">Visakhapatnam</option>
                          <option value="rajahmundry">Rajamahendravaram</option>
                          <option value="vijayawada-amaravati">Vijayawada</option>
                          <option value="guntur">Guntur</option>
                          <option value="kakinada">Kakinada</option>
                          <option value="nellore">Nellore</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-black text-sm text-black bg-[#22c55e] hover:bg-[#16a34a] transition-all shadow-[0_0_20px_rgba(34,197,94,0.35)]"
                    >
                      Confirm Free Site Visit Booking
                    </button>
                  </form>

                  {/* WhatsApp QR Code side */}
                  <div className="md:col-span-5 flex flex-col items-center justify-center p-4 rounded-xl bg-[#131b17] border border-[#24322B] text-center">
                    <span className="text-[10px] font-black text-[#94a3b8] uppercase tracking-wider mb-2">
                      Scan with Phone to Send
                    </span>
                    {qrCodeDataUrl ? (
                      <div className="p-2 bg-white rounded-xl shadow-md">
                        <img 
                          src={qrCodeDataUrl} 
                          alt="Dynamic WhatsApp QR Code for Balcony Estimate" 
                          className="w-32 h-32 sm:w-36 sm:h-36"
                        />
                      </div>
                    ) : (
                      <div className="w-32 h-32 bg-[#0a0f0d] rounded-xl flex items-center justify-center text-xs text-[#94a3b8]">
                        Generating QR...
                      </div>
                    )}
                    <span className="mt-2.5 text-xs text-white font-bold">
                      Direct WhatsApp Chat
                    </span>
                    <span className="text-[10px] text-[#94a3b8] mt-0.5">
                      Links to chat with your {totalArea} sq.ft quote
                    </span>
                  </div>

                </div>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#22c55e]/20 border border-[#22c55e] flex items-center justify-center mx-auto text-[#22c55e]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white">Site Visit Confirmed!</h3>
                <p className="text-sm text-[#cbd5e1] max-w-md mx-auto">
                  Thank you <strong className="text-white">{name}</strong>. Our certified <strong className="text-[#22c55e]">{modalCityObj.name}</strong> installation team will contact you at <strong className="text-white">{phone}</strong> to confirm your complimentary laser measurement visit.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={createWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#22c55e] text-black font-extrabold text-sm hover:bg-[#16a34a] transition-all"
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
                    className="px-6 py-3 rounded-xl bg-[#131b17] border border-[#24322B] text-white text-sm font-semibold hover:bg-[#1A2420]"
                  >
                    Close
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
