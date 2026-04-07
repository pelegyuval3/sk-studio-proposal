// SK Studio FAQ Page

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { faqs } from '@/lib/data';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#080809]">
      <Header />
      <div className="pt-16">
        <div className="bg-[#0A0A0D] border-b border-white/[0.06] py-10">
          <div className="container">
            <p className="sk-label mb-2">Common Questions</p>
            <h1 className="font-['Space_Grotesk'] font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-white tracking-[-0.02em]">
              FAQ
            </h1>
          </div>
        </div>

        <div className="container py-12 max-w-3xl">
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#0F0F12] border border-white/[0.06]">
                <button
                  className="w-full flex items-center justify-between p-5 text-start"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-[14px] font-['Space_Grotesk'] font-semibold text-white pr-4">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-white/40 shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 border-t border-white/[0.05]">
                    <p className="text-[13px] font-['Outfit'] text-white/60 leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-[#0F0F12] border border-white/[0.06]">
            <p className="text-[14px] font-['Space_Grotesk'] font-semibold text-white mb-2">Still have a question?</p>
            <p className="text-[13px] font-['Outfit'] text-white/55 mb-4">Message us on WhatsApp for the fastest answer.</p>
            <a href="https://wa.me/972500000000" target="_blank" rel="noopener noreferrer" className="sk-btn-primary inline-block">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
