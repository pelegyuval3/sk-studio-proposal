// SK Studio Header - Technical Edge Design System
// Sticky, compresses on scroll, dark background, blue accent

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, ShoppingCart, Heart, Menu, X, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'By Vehicle', href: '/vehicles', hasDropdown: true },
  { label: 'New Arrivals', href: '/shop?sort=new' },
  { label: 'Best Sellers', href: '/shop?sort=best' },
  { label: 'Installation', href: '/installation' },
  { label: 'About', href: '/about' },
];

const vehicleDropdown = [
  { brand: 'BMW', models: ['3 Series G20', '5 Series G30'] },
  { brand: 'Mercedes', models: ['C-Class W206'] },
  { brand: 'Audi', models: ['A4 B9'] },
  { brand: 'BYD', models: ['Atto 3', 'Seal'] },
  { brand: 'Chery', models: ['Tiggo 8 Pro'] },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [vehicleOpen, setVehicleOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setVehicleOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'h-14 bg-[#080809]/98 backdrop-blur-md border-b border-white/[0.06]'
            : 'h-16 bg-[#080809]/90 backdrop-blur-sm'
        }`}
      >
        <div className="container h-full flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-7 h-7 bg-[#2563EB] flex items-center justify-center">
                <span className="text-white font-['Space_Grotesk'] font-bold text-xs tracking-tight">SK</span>
              </div>
              <span className="font-['Space_Grotesk'] font-bold text-[15px] text-white tracking-[-0.02em]">
                SK STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-[13px] font-['Space_Grotesk'] font-medium text-white/70 hover:text-white transition-colors"
                    onMouseEnter={() => setVehicleOpen(true)}
                    onMouseLeave={() => setVehicleOpen(false)}
                  >
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform ${vehicleOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {vehicleOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-72 bg-[#0F0F12] border border-white/[0.08] shadow-2xl"
                      onMouseEnter={() => setVehicleOpen(true)}
                      onMouseLeave={() => setVehicleOpen(false)}
                    >
                      <div className="p-4 grid grid-cols-1 gap-3">
                        {vehicleDropdown.map((group) => (
                          <div key={group.brand}>
                            <p className="sk-label mb-1.5">{group.brand}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {group.models.map((model) => (
                                <Link
                                  key={model}
                                  href={`/vehicles/${group.brand.toLowerCase()}/${model.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                  <span className="text-[12px] font-['Outfit'] text-white/60 hover:text-white transition-colors px-2 py-1 border border-white/[0.06] hover:border-[#2563EB]/40">
                                    {model}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.label} href={link.href}>
                  <span
                    className={`px-3 py-2 text-[13px] font-['Space_Grotesk'] font-medium transition-colors ${
                      location === link.href
                        ? 'text-white'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              className="hidden md:flex w-8 h-8 items-center justify-center text-white/50 hover:text-white transition-colors"
              onClick={() => toast.info('Search coming soon')}
            >
              <Search size={16} />
            </button>
            <button
              className="hidden md:flex w-8 h-8 items-center justify-center text-white/50 hover:text-white transition-colors"
              onClick={() => toast.info('Wishlist coming soon')}
            >
              <Heart size={16} />
            </button>
            <Link href="/cart">
              <button className="flex w-8 h-8 items-center justify-center text-white/50 hover:text-white transition-colors relative">
                <ShoppingCart size={16} />
                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-[#2563EB] text-white text-[9px] font-bold flex items-center justify-center">
                  0
                </span>
              </button>
            </Link>
            <button
              className="lg:hidden flex w-8 h-8 items-center justify-center text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#080809] pt-16 overflow-y-auto">
          <div className="container py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <div className="py-3 border-b border-white/[0.06] text-[15px] font-['Space_Grotesk'] font-medium text-white/80 hover:text-white transition-colors">
                  {link.label}
                </div>
              </Link>
            ))}
            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <a
                href="https://wa.me/972500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 text-[14px] font-['Outfit'] text-white/70"
              >
                <span className="w-8 h-8 bg-[#25D366] flex items-center justify-center text-white text-[11px] font-bold">WA</span>
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
