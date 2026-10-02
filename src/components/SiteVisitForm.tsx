import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  User, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  ShieldCheck,
  Building2,
  Sparkles
} from 'lucide-react';
import { ALL_LOCATIONS } from '../data/locations';

interface SiteVisitFormProps {
  defaultCitySlug?: string;
  cityName?: string;
}

export default function SiteVisitForm({ defaultCitySlug = 'rajahmundry', cityName = 'Rajahmundry' }: SiteVisitFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState(defaultCitySlug);
  const [area, setArea] = useState('');
  const [propertyType, setPropertyType] = useState('High-Rise Apartment');
  const [approxDimensions, setApproxDimensions] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeCity = ALL_LOCATIONS.find(c => c.slug === city) || ALL_LOCATIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setIsSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Hi D-VIEW Solutions!
I would like to schedule a Free On-Site Measurement:
- Name: ${name || 'Prospective Customer'}
- City: ${activeCity.name}
- Area/Colony: ${area || 'Not specified'}
- Property Type: ${propertyType}
- Dimensions: ${approxDimensions || 'To be measured by D-VIEW'}
- Preferred Date: ${preferredDate || 'Earliest available'}
${message ? `- Notes: ${message}` : ''}

Please confirm technician visit time.`;

    return `https://wa.me/919494328999?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="book-visit" className="relative py-20 bg-[#0B0D0C] border-t border-[#24322B] overflow-hidden">
      <div className="absolute inset-0 wire-grid-overlay opacity-25 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7CFF3A]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container */}
        <div className="bg-[#121816] rounded-3xl border border-[#24322B] shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#7CFF3A]/10 rounded-full blur-3xl pointer-events-none"></div>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151C19] border border-[#7CFF3A]/30 text-xs font-semibold text-[#7CFF3A] uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Zero Obligation • Accurate Laser Measurement</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  READY TO MAKE YOUR <br />
                  <span className="text-[#7CFF3A]">BALCONY SAFER?</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#C7CDD1]">
                  Book a free on-site consultation with our certified technical engineers in <strong className="text-white">{activeCity.name}</strong>. We bring wire samples, laser-measure your space, and provide transparent written pricing.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#64748B]" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full pl-10 pr-4 py-3 text-sm bg-[#151C19] border border-[#24322B] rounded-xl text-white placeholder-[#64748B] focus:outline-none focus:border-[#7CFF3A] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-[#64748B]" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9876543210"
                        className="w-full pl-10 pr-4 py-3 text-sm bg-[#151C19] border border-[#24322B] rounded-xl text-white placeholder-[#64748B] focus:outline-none focus:border-[#7CFF3A] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      City Hub *
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-[#151C19] border border-[#24322B] rounded-xl text-white focus:outline-none focus:border-[#7CFF3A] transition-colors"
                    >
                      {ALL_LOCATIONS.map((loc) => (
                        <option key={loc.slug} value={loc.slug}>
                          {loc.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Locality / Apartment *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-[#64748B]" />
                      <input
                        type="text"
                        required
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        placeholder="e.g. Morampudi / Yendada"
                        className="w-full pl-10 pr-4 py-3 text-sm bg-[#151C19] border border-[#24322B] rounded-xl text-white placeholder-[#64748B] focus:outline-none focus:border-[#7CFF3A] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Property Type
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-3.5 w-4 h-4 text-[#64748B]" />
                      <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 text-sm bg-[#151C19] border border-[#24322B] rounded-xl text-white focus:outline-none focus:border-[#7CFF3A] transition-colors"
                      >
                        <option>High-Rise Apartment</option>
                        <option>Gated Villa / Duplex</option>
                        <option>Penthouse / Open Terrace</option>
                        <option>Independent House</option>
                        <option>Commercial Property</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Approximate Opening Dimensions (Optional)
                    </label>
                    <input
                      type="text"
                      value={approxDimensions}
                      onChange={(e) => setApproxDimensions(e.target.value)}
                      placeholder="e.g. 12ft × 8ft (1 Balcony)"
                      className="w-full px-4 py-3 text-sm bg-[#151C19] border border-[#24322B] rounded-xl text-white placeholder-[#64748B] focus:outline-none focus:border-[#7CFF3A] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Preferred Date for Measurement Visit
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-[#64748B]" />
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 text-sm bg-[#151C19] border border-[#24322B] rounded-xl text-white focus:outline-none focus:border-[#7CFF3A] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                    Special Requirements or Questions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Toddler safety, pigeon protection, high wind area..."
                    className="w-full px-4 py-3 text-sm bg-[#151C19] border border-[#24322B] rounded-xl text-white placeholder-[#64748B] focus:outline-none focus:border-[#7CFF3A] transition-colors"
                  ></textarea>
                </div>

                {/* Submit and WhatsApp CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-extrabold text-sm sm:text-base text-[#0B0D0C] bg-[#7CFF3A] hover:bg-[#8FFF52] transition-all duration-200 shadow-[0_0_25px_rgba(124,255,58,0.25)] hover:shadow-[0_0_35px_rgba(124,255,58,0.4)]"
                  >
                    <span>BOOK FREE ON-SITE MEASUREMENT</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm text-[#C7CDD1] bg-[#151C19] hover:bg-[#1A2420] border border-[#24322B] hover:border-[#7CFF3A]/40 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#7CFF3A]" />
                    <span>WhatsApp Directly</span>
                  </a>
                </div>

              </form>
            </div>
          ) : (
            <div className="text-center py-10 space-y-4">
              <div className="w-20 h-20 rounded-full bg-[#7CFF3A]/20 border border-[#7CFF3A] flex items-center justify-center mx-auto text-[#7CFF3A]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-extrabold text-white">
                Free Site Visit Request Received!
              </h3>
              <p className="text-base text-[#C7CDD1] max-w-lg mx-auto">
                Thank you <strong className="text-white">{name}</strong>. Our local site engineer for <strong className="text-[#7CFF3A]">{activeCity.name}</strong> has received your request for <strong className="text-white">{area}</strong>.
              </p>
              <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-lg hover:opacity-90"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Details on WhatsApp for Instant Confirmation</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
