// SK Studio Homepage - Technical Edge Design System
// Full-bleed hero, vehicle finder, categories, products, trust layer

import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ChevronRight, Shield, Truck, MessageCircle, Wrench, CheckCircle, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories, vehicles, reviews } from '@/lib/data';
import { toast } from 'sonner';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663495322166/nR2rDEH5BHZhzMnxi5Bpfp/sk-hero-main-Ck3APDdgPJCr8qVV5UGTv8.webp';

const vehicleBrands = ['BMW', 'Mercedes', 'Audi', 'BYD', 'Chery', 'Jaecoo', 'Hyundai', 'Kia'];
const vehicleModels: Record<string, string[]> = {
  BMW: ['3 Series G20', '5 Series G30', 'X3 G01', 'X5 G05'],
  Mercedes: ['C-Class W206', 'E-Class W214', 'GLC W254', 'A-Class W177'],
  Audi: ['A4 B9', 'A6 C8', 'Q5 FY', 'Q7 4M'],
  BYD: ['Atto 3', 'Seal', 'Han', 'Tang'],
  Chery: ['Tiggo 8 Pro', 'Tiggo 7 Pro', 'Omoda 5'],
  Jaecoo: ['J7', 'J8'],
  Hyundai: ['Tucson NX4', 'Ioniq 5', 'Ioniq 6'],
  Kia: ['Sportage NQ5', 'EV6', 'Sorento MQ4'],
};

const trustPoints = [
  { icon: CheckCircle, title: 'Verified Fitment', desc: 'Every product includes exact compatibility data. We confirm before you buy.' },
  { icon: Shield, title: 'Premium Materials', desc: 'Sourced directly from certified manufacturers. Quality checked before dispatch.' },
  { icon: MessageCircle, title: 'WhatsApp Support', desc: 'Real answers before and after purchase. Not a chatbot.' },
  { icon: Wrench, title: 'Installation Guidance', desc: 'Step-by-step guides for every product. Professional referrals available.' },
  { icon: Truck, title: 'Fast Delivery', desc: '2-4 business days across Israel. Tracking on every order.' },
  { icon: Star, title: 'Trusted by Drivers', desc: 'Hundreds of verified purchases. Real reviews from real customers.' },
];

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [, navigate] = useLocation();

  const handleFindAccessories = () => {
    if (!selectedBrand) {
      toast.error('Please select a vehicle brand first');
      return;
    }
    const path = selectedModel
      ? `/vehicles/${selectedBrand.toLowerCase()}/${selectedModel.toLowerCase().replace(/\s+/g, '-')}`
      : `/shop?brand=${selectedBrand}`;
    navigate(path);
  };

  const bestSellers = products.filter((p) => p.badge === 'Best Seller');
  const newArrivals = products.filter((p) => p.badge === 'New');
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#080809]">
      <Header />

      {/* ─── HERO ─── */}
      <section className="relative h-[100svh] min-h-[600px] max-h-[900px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080809]/90 via-[#080809]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080809]/80 via-transparent to-transparent" />

        <div className="relative container pb-16 md:pb-20">
          <div className="max-w-xl animate-fade-up">
            <p className="sk-label mb-4">Premium Automotive Accessories</p>
            <h1 className="font-['Space_Grotesk'] font-bold text-[clamp(2rem,5vw,3.5rem)] text-white leading-[1.05] tracking-[-0.03em] mb-5">
              Tailored upgrades for drivers who care about detail
            </h1>
            <p className="text-[15px] font-['Outfit'] text-white/65 leading-relaxed mb-8 max-w-md">
              Interior, exterior, and lifestyle accessories designed to elevate your vehicle with precise fit and premium finish.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/shop">
                <button className="sk-btn-primary">Shop by Vehicle</button>
              </Link>
              <Link href="/shop?sort=new">
                <button className="sk-btn-outline">Explore New Arrivals</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 right-8 hidden md:flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-white/20" />
          <p className="text-[10px] font-['Space_Grotesk'] text-white/30 tracking-widest uppercase rotate-90 origin-center translate-y-4">Scroll</p>
        </div>
      </section>

      {/* ─── VEHICLE FINDER ─── */}
      <section className="bg-[#0F0F12] border-y border-white/[0.06]">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="shrink-0">
              <p className="sk-label mb-1">Find Your Fit</p>
              <p className="text-[13px] font-['Outfit'] text-white/50">Select your vehicle to view matching accessories only</p>
            </div>
            <div className="flex-1 flex flex-col sm:flex-row gap-3 w-full">
              <select
                className="flex-1 bg-[#17171C] border border-white/[0.08] text-[13px] font-['Outfit'] text-white/80 px-4 py-3 focus:outline-none focus:border-[#2563EB]/50 transition-colors"
                value={selectedBrand}
                onChange={(e) => { setSelectedBrand(e.target.value); setSelectedModel(''); }}
              >
                <option value="">Brand</option>
                {vehicleBrands.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
              <select
                className="flex-1 bg-[#17171C] border border-white/[0.08] text-[13px] font-['Outfit'] text-white/80 px-4 py-3 focus:outline-none focus:border-[#2563EB]/50 transition-colors disabled:opacity-40"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                disabled={!selectedBrand}
              >
                <option value="">Model</option>
                {selectedBrand && vehicleModels[selectedBrand]?.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <button
                className="sk-btn-primary whitespace-nowrap"
                onClick={handleFindAccessories}
              >
                Find Accessories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="sk-label mb-2">Browse by Type</p>
            <h2 className="font-['Space_Grotesk'] font-bold text-[clamp(1.5rem,3vw,2rem)] text-white tracking-[-0.02em]">
              Core Categories
            </h2>
          </div>
          <Link href="/shop">
            <span className="hidden sm:flex items-center gap-1.5 text-[12px] font-['Space_Grotesk'] font-semibold text-[#2563EB] hover:text-blue-400 transition-colors tracking-wide uppercase">
              View All <ChevronRight size={14} />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat, i) => (
            <Link key={cat.slug} href={`/shop/${cat.slug}`}>
              <div
                className={`group relative overflow-hidden aspect-square bg-[#0F0F12] border border-white/[0.06] hover:border-[#2563EB]/30 transition-all duration-200 cursor-pointer animate-fade-up animate-fade-up-delay-${i + 1}`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-[13px] font-['Space_Grotesk'] font-semibold text-white">{cat.name}</p>
                  <p className="text-[10px] font-['Outfit'] text-white/50">{cat.count} products</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── BEST SELLERS ─── */}
      <section className="bg-[#0A0A0D] border-y border-white/[0.04] py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="sk-label mb-2">Most Popular</p>
              <h2 className="font-['Space_Grotesk'] font-bold text-[clamp(1.5rem,3vw,2rem)] text-white tracking-[-0.02em]">
                Best Sellers
              </h2>
            </div>
            <Link href="/shop?sort=best">
              <span className="hidden sm:flex items-center gap-1.5 text-[12px] font-['Space_Grotesk'] font-semibold text-[#2563EB] hover:text-blue-400 transition-colors tracking-wide uppercase">
                See All <ChevronRight size={14} />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bestSellers.length > 0
              ? bestSellers.map((p) => <ProductCard key={p.id} product={p} />)
              : featuredProducts.slice(0, 3).map((p) => <ProductCard key={p.id} product={p} />)
            }
          </div>
        </div>
      </section>

      {/* ─── FEATURED VEHICLES ─── */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="sk-label mb-2">Shop by Vehicle</p>
            <h2 className="font-['Space_Grotesk'] font-bold text-[clamp(1.5rem,3vw,2rem)] text-white tracking-[-0.02em]">
              Popular Vehicles
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {vehicles.filter((v) => v.popular).map((v) => (
            <Link key={v.slug} href={`/vehicles/${v.brand.toLowerCase()}/${v.model.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="group relative overflow-hidden bg-[#0F0F12] border border-white/[0.06] hover:border-[#2563EB]/30 transition-all duration-200 cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={v.image}
                    alt={`${v.brand} ${v.model}`}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-[10px] font-['Space_Grotesk'] font-semibold text-[#2563EB] tracking-wide uppercase mb-0.5">{v.brand}</p>
                  <p className="text-[13px] font-['Space_Grotesk'] font-semibold text-white leading-tight">{v.model}</p>
                  <p className="text-[11px] font-['Outfit'] text-white/40">{v.year}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── NEW ARRIVALS ─── */}
      {newArrivals.length > 0 && (
        <section className="bg-[#0A0A0D] border-y border-white/[0.04] py-20">
          <div className="container">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="sk-label mb-2">Just Added</p>
                <h2 className="font-['Space_Grotesk'] font-bold text-[clamp(1.5rem,3vw,2rem)] text-white tracking-[-0.02em]">
                  New Arrivals
                </h2>
              </div>
              <Link href="/shop?sort=new">
                <span className="hidden sm:flex items-center gap-1.5 text-[12px] font-['Space_Grotesk'] font-semibold text-[#2563EB] hover:text-blue-400 transition-colors tracking-wide uppercase">
                  See All <ChevronRight size={14} />
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* ─── WHY BUY FROM US ─── */}
      <section className="container py-20">
        <div className="mb-10">
          <p className="sk-label mb-2">The Standard</p>
          <h2 className="font-['Space_Grotesk'] font-bold text-[clamp(1.5rem,3vw,2rem)] text-white tracking-[-0.02em]">
            Why SK Studio
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustPoints.map((point, i) => (
            <div
              key={point.title}
              className={`p-6 bg-[#0F0F12] border border-white/[0.06] animate-fade-up animate-fade-up-delay-${i + 1}`}
            >
              <div className="w-9 h-9 bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center mb-4">
                <point.icon size={16} className="text-[#2563EB]" />
              </div>
              <h3 className="text-[14px] font-['Space_Grotesk'] font-semibold text-white mb-2">{point.title}</h3>
              <p className="text-[13px] font-['Outfit'] text-white/50 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="bg-[#0A0A0D] border-y border-white/[0.04] py-20">
        <div className="container">
          <div className="mb-10">
            <p className="sk-label mb-2">Customer Reviews</p>
            <h2 className="font-['Space_Grotesk'] font-bold text-[clamp(1.5rem,3vw,2rem)] text-white tracking-[-0.02em]">
              What Drivers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((review) => (
              <div key={review.id} className="p-5 bg-[#0F0F12] border border-white/[0.06]">
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={11} className="text-[#2563EB] fill-[#2563EB]" />
                  ))}
                </div>
                <p className="text-[13px] font-['Outfit'] text-white/70 leading-relaxed mb-4">
                  "{review.text}"
                </p>
                <div className="border-t border-white/[0.06] pt-3">
                  <p className="text-[12px] font-['Space_Grotesk'] font-semibold text-white">{review.name}</p>
                  <p className="text-[11px] font-['Outfit'] text-white/40">{review.vehicle} · {review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="container py-20">
        <div className="bg-[#0F0F12] border border-white/[0.06] p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="sk-label mb-3">Need Help?</p>
            <h2 className="font-['Space_Grotesk'] font-bold text-[clamp(1.25rem,2.5vw,1.75rem)] text-white tracking-[-0.02em] mb-2">
              Not sure which accessories fit your vehicle?
            </h2>
            <p className="text-[14px] font-['Outfit'] text-white/55">
              Message us on WhatsApp. We confirm fitment before you order.
            </p>
          </div>
          <a
            href="https://wa.me/972500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 sk-btn-primary flex items-center gap-2"
          >
            <span className="w-4 h-4 bg-[#25D366] rounded-full flex items-center justify-center text-[8px] font-bold text-white">W</span>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/972500000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#25D366] flex items-center justify-center shadow-lg hover:bg-[#22c55e] transition-colors"
        title="Chat on WhatsApp"
      >
        <span className="text-white font-['Space_Grotesk'] font-bold text-[13px]">WA</span>
      </a>
    </div>
  );
}
