import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FaqItem } from '../data/locations';

interface FaqAccordionProps {
  faqs: FaqItem[];
  cityName: string;
}

export default function FaqAccordion({ faqs, cityName }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3.5 max-w-4xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen 
                ? 'bg-[#151C19] border-[#7CFF3A]/40 shadow-[0_0_20px_rgba(124,255,58,0.08)]' 
                : 'bg-[#121816]/70 border-[#24322B] hover:border-[#384C42]'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full shrink-0 ${isOpen ? 'bg-[#7CFF3A]' : 'bg-[#64748B]'}`}></span>
                <span className={`text-base sm:text-lg font-bold transition-colors ${
                  isOpen ? 'text-white' : 'text-[#C7CDD1]'
                }`}>
                  {faq.question}
                </span>
              </div>
              <div className={`p-1.5 rounded-lg border transition-transform duration-200 shrink-0 ${
                isOpen ? 'rotate-180 bg-[#7CFF3A]/10 border-[#7CFF3A]/30 text-[#7CFF3A]' : 'border-[#24322B] text-[#94A3B8]'
              }`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#C7CDD1] leading-relaxed border-t border-[#24322B]/60 pt-4">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
