// SK Studio Footer - Technical Edge Design System

import { Link } from 'wouter';
import { Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0D] border-t border-white/[0.06] mt-24">
      {/* WhatsApp CTA Strip */}
      <div className="bg-[#25D366]/10 border-b border-[#25D366]/20">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] font-['Outfit'] text-white/70">
            Need help confirming fitment? Message us before ordering.
          </p>
          <a
            href="https://wa.me/972500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-[12px] font-['Space_Grotesk'] font-semibold tracking-wide uppercase hover:bg-[#22c55e] transition-colors"
          >
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 bg-[#2563EB] flex items-center justify-center">
              <span className="text-white font-['Space_Grotesk'] font-bold text-xs">SK</span>
            </div>
            <span className="font-['Space_Grotesk'] font-bold text-[15px] text-white tracking-[-0.02em]">SK STUDIO</span>
          </div>
          <p className="text-[13px] font-['Outfit'] text-white/50 leading-relaxed mb-4">
            Precision automotive accessories tailored to your vehicle. Built for drivers who care about detail.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors">
              <Instagram size={14} />
            </a>
            <a href="#" className="w-8 h-8 border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors">
              <Youtube size={14} />
            </a>
            <a href="#" className="w-8 h-8 border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors text-[10px] font-bold font-['Space_Grotesk']">
              TT
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <p className="sk-label mb-4">Shop</p>
          <ul className="space-y-2.5">
            {['Interior', 'Exterior', 'Lighting', 'Carbon Style', 'Protection', 'Utility'].map((item) => (
              <li key={item}>
                <Link href={`/shop/${item.toLowerCase().replace(' ', '-')}`}>
                  <span className="text-[13px] font-['Outfit'] text-white/50 hover:text-white transition-colors">{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <p className="sk-label mb-4">Support</p>
          <ul className="space-y-2.5">
            {[
              { label: 'Contact', href: '/contact' },
              { label: 'FAQ', href: '/faq' },
              { label: 'Installation Help', href: '/installation' },
              { label: 'Shipping & Returns', href: '/faq' },
              { label: 'Track Order', href: '/contact' },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href}>
                  <span className="text-[13px] font-['Outfit'] text-white/50 hover:text-white transition-colors">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="sk-label mb-4">Company</p>
          <ul className="space-y-2.5">
            {[
              { label: 'About', href: '/about' },
              { label: 'Blog', href: '#' },
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms & Conditions', href: '#' },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href}>
                  <span className="text-[13px] font-['Outfit'] text-white/50 hover:text-white transition-colors">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] font-['Outfit'] text-white/30">
            © 2026 SK Studio. All rights reserved.
          </p>
          <p className="text-[11px] font-['Outfit'] text-white/30">
            Premium Automotive Accessories · Israel
          </p>
        </div>
      </div>
    </footer>
  );
}
