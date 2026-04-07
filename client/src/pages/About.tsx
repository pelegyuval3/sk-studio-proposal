// SK Studio About Page - Technical Edge Design System

import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Target, Zap, Users } from 'lucide-react';

const ABOUT_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663495322166/nR2rDEH5BHZhzMnxi5Bpfp/sk-about-Xcz7MftFBZiLLBqWjQXvAR.webp';

const values = [
  { icon: Target, title: 'Fitment First', desc: 'We do not list a product unless we can confirm it fits. Compatibility data is verified before every listing goes live.' },
  { icon: Shield, title: 'Material Standard', desc: 'Every product is sourced from certified manufacturers. We inspect before dispatch. No compromise on quality.' },
  { icon: Zap, title: 'Direct Access', desc: 'Direct factory relationships mean better pricing, faster availability, and full control over quality at the source.' },
  { icon: Users, title: 'Support Philosophy', desc: 'We answer before you buy. We answer after you buy. Real people, not automated responses.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#080809]">
      <Header />
      <div className="pt-16">
        {/* Hero */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img src={ABOUT_IMAGE} alt="SK Studio" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080809]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080809]/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container pb-10">
            <p className="sk-label mb-2">Our Standard</p>
            <h1 className="font-['Space_Grotesk'] font-bold text-[clamp(1.75rem,4vw,3rem)] text-white tracking-[-0.03em]">
              About SK Studio
            </h1>
          </div>
        </div>

        <div className="container py-16">
          {/* Brand statement */}
          <div className="max-w-3xl mb-16">
            <p className="text-[clamp(1rem,2vw,1.25rem)] font-['Outfit'] text-white/80 leading-relaxed mb-6">
              SK Studio is a premium automotive accessories brand built for the Israeli market. We focus on precision fitment, material quality, and a purchase experience drivers can trust.
            </p>
            <p className="text-[15px] font-['Outfit'] text-white/55 leading-relaxed mb-6">
              We are not a generic parts store. We are not a dropshipping operation. We are a focused brand with direct factory relationships in China, deep knowledge of the Israeli market, and a clear standard for what we carry.
            </p>
            <p className="text-[15px] font-['Outfit'] text-white/55 leading-relaxed">
              Every product in our catalog was chosen for a specific reason: it fits real vehicles on Israeli roads, it is made to a standard we would use ourselves, and it solves a real problem for the driver who buys it.
            </p>
          </div>

          {/* Values */}
          <div className="mb-16">
            <p className="sk-label mb-2">What We Stand For</p>
            <h2 className="font-['Space_Grotesk'] font-bold text-[1.5rem] text-white tracking-[-0.02em] mb-8">
              The Standard Behind the Brand
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="p-6 bg-[#0F0F12] border border-white/[0.06]">
                  <div className="w-9 h-9 bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center mb-4">
                    <v.icon size={16} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-[14px] font-['Space_Grotesk'] font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-[13px] font-['Outfit'] text-white/55 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#0F0F12] border border-white/[0.06] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="font-['Space_Grotesk'] font-semibold text-[1.1rem] text-white mb-1">Ready to upgrade your vehicle?</h3>
              <p className="text-[13px] font-['Outfit'] text-white/50">Browse our full catalog or message us to confirm fitment.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/shop">
                <button className="sk-btn-primary">Shop Now</button>
              </Link>
              <Link href="/contact">
                <button className="sk-btn-outline">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
