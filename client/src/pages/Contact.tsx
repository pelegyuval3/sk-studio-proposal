// SK Studio Contact Page

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageCircle, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent. We will get back to you shortly.');
  };

  return (
    <div className="min-h-screen bg-[#080809]">
      <Header />
      <div className="pt-16">
        <div className="bg-[#0A0A0D] border-b border-white/[0.06] py-10">
          <div className="container">
            <p className="sk-label mb-2">Get in Touch</p>
            <h1 className="font-['Space_Grotesk'] font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-white tracking-[-0.02em]">
              Contact Us
            </h1>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <p className="text-[15px] font-['Outfit'] text-white/65 leading-relaxed mb-8">
                We are available before and after purchase. If you have a fitment question, a product inquiry, or need support - reach out. We prefer to answer questions before you buy.
              </p>
              <div className="space-y-4">
                <a href="https://wa.me/972500000000" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-[#0F0F12] border border-white/[0.06] hover:border-[#25D366]/30 transition-colors">
                  <div className="w-10 h-10 bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center shrink-0">
                    <MessageCircle size={18} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-['Space_Grotesk'] font-semibold text-white">WhatsApp</p>
                    <p className="text-[12px] font-['Outfit'] text-white/50">Fastest response - usually within 1 hour</p>
                  </div>
                </a>
                <a href="mailto:info@sk-studio.co.il"
                  className="flex items-center gap-4 p-5 bg-[#0F0F12] border border-white/[0.06] hover:border-[#2563EB]/30 transition-colors">
                  <div className="w-10 h-10 bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-['Space_Grotesk'] font-semibold text-white">Email</p>
                    <p className="text-[12px] font-['Outfit'] text-white/50">info@sk-studio.co.il</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-5 bg-[#0F0F12] border border-white/[0.06]">
                  <div className="w-10 h-10 bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-white/40" />
                  </div>
                  <div>
                    <p className="text-[13px] font-['Space_Grotesk'] font-semibold text-white">Hours</p>
                    <p className="text-[12px] font-['Outfit'] text-white/50">Sun-Thu 9:00-18:00 · Fri 9:00-14:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="sk-label block mb-2">Name</label>
                  <input type="text" required placeholder="Your name"
                    className="w-full bg-[#0F0F12] border border-white/[0.08] text-[13px] font-['Outfit'] text-white px-4 py-3 focus:outline-none focus:border-[#2563EB]/50 placeholder-white/30" />
                </div>
                <div>
                  <label className="sk-label block mb-2">Phone</label>
                  <input type="tel" placeholder="05X-XXXXXXX"
                    className="w-full bg-[#0F0F12] border border-white/[0.08] text-[13px] font-['Outfit'] text-white px-4 py-3 focus:outline-none focus:border-[#2563EB]/50 placeholder-white/30" />
                </div>
              </div>
              <div>
                <label className="sk-label block mb-2">Email</label>
                <input type="email" required placeholder="your@email.com"
                  className="w-full bg-[#0F0F12] border border-white/[0.08] text-[13px] font-['Outfit'] text-white px-4 py-3 focus:outline-none focus:border-[#2563EB]/50 placeholder-white/30" />
              </div>
              <div>
                <label className="sk-label block mb-2">Vehicle (optional)</label>
                <input type="text" placeholder="e.g. BMW 3 Series G20 2021"
                  className="w-full bg-[#0F0F12] border border-white/[0.08] text-[13px] font-['Outfit'] text-white px-4 py-3 focus:outline-none focus:border-[#2563EB]/50 placeholder-white/30" />
              </div>
              <div>
                <label className="sk-label block mb-2">Message</label>
                <textarea required rows={5} placeholder="Your question or inquiry..."
                  className="w-full bg-[#0F0F12] border border-white/[0.08] text-[13px] font-['Outfit'] text-white px-4 py-3 focus:outline-none focus:border-[#2563EB]/50 placeholder-white/30 resize-none" />
              </div>
              <button type="submit" className="sk-btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
