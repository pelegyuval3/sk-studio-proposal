// SK Studio Installation Page

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wrench, CheckCircle, AlertTriangle, MessageCircle } from 'lucide-react';

const easyItems = ['Floor mats', 'Seat covers (basic)', 'Door sill protectors', 'Mirror caps (clip-on)', 'Cargo organizers', 'Wireless charging pads'];
const mediumItems = ['Ambient lighting kits', 'Front lip spoilers', 'Side skirts', 'Carbon trim sets'];
const proItems = ['Full body kits', 'Seat cover sets (complex)', 'Electrical modifications', 'Structural exterior parts'];

export default function Installation() {
  return (
    <div className="min-h-screen bg-[#080809]">
      <Header />
      <div className="pt-16">
        <div className="bg-[#0A0A0D] border-b border-white/[0.06] py-10">
          <div className="container">
            <p className="sk-label mb-2">Installation Support</p>
            <h1 className="font-['Space_Grotesk'] font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-white tracking-[-0.02em]">
              Installation Guide
            </h1>
          </div>
        </div>

        <div className="container py-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[15px] font-['Outfit'] text-white/65 leading-relaxed">
              Every product in our catalog includes an installation guide. Most accessories are designed for straightforward DIY installation. For more complex products, we recommend professional installation and can refer you to trusted installers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {/* Easy */}
            <div className="p-6 bg-[#0F0F12] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={16} className="text-green-400" />
                <p className="text-[12px] font-['Space_Grotesk'] font-semibold text-green-400 tracking-wide uppercase">Easy - DIY</p>
              </div>
              <p className="text-[13px] font-['Outfit'] text-white/55 mb-4">No tools required. Most people can install in under 30 minutes.</p>
              <ul className="space-y-2">
                {easyItems.map((item) => (
                  <li key={item} className="text-[13px] font-['Outfit'] text-white/70 flex items-center gap-2">
                    <span className="w-1 h-1 bg-green-400 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Medium */}
            <div className="p-6 bg-[#0F0F12] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-4">
                <Wrench size={16} className="text-yellow-400" />
                <p className="text-[12px] font-['Space_Grotesk'] font-semibold text-yellow-400 tracking-wide uppercase">Medium - Some Experience</p>
              </div>
              <p className="text-[13px] font-['Outfit'] text-white/55 mb-4">Basic tools needed. Follow the guide carefully. 30-90 minutes.</p>
              <ul className="space-y-2">
                {mediumItems.map((item) => (
                  <li key={item} className="text-[13px] font-['Outfit'] text-white/70 flex items-center gap-2">
                    <span className="w-1 h-1 bg-yellow-400 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro */}
            <div className="p-6 bg-[#0F0F12] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle size={16} className="text-orange-400" />
                <p className="text-[12px] font-['Space_Grotesk'] font-semibold text-orange-400 tracking-wide uppercase">Professional Recommended</p>
              </div>
              <p className="text-[13px] font-['Outfit'] text-white/55 mb-4">We recommend a professional installer for best results.</p>
              <ul className="space-y-2">
                {proItems.map((item) => (
                  <li key={item} className="text-[13px] font-['Outfit'] text-white/70 flex items-center gap-2">
                    <span className="w-1 h-1 bg-orange-400 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-6 bg-[#0F0F12] border border-white/[0.06] flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-10 h-10 bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center shrink-0">
              <MessageCircle size={18} className="text-[#25D366]" />
            </div>
            <div className="flex-1">
              <p className="text-[14px] font-['Space_Grotesk'] font-semibold text-white mb-1">Need installation help?</p>
              <p className="text-[13px] font-['Outfit'] text-white/55">Message us on WhatsApp. We can walk you through the process or refer you to a professional installer in your area.</p>
            </div>
            <a href="https://wa.me/972500000000" target="_blank" rel="noopener noreferrer" className="sk-btn-primary shrink-0">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
