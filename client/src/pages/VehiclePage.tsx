// SK Studio Vehicle Page - Technical Edge Design System

import { useParams } from 'wouter';
import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, vehicles } from '@/lib/data';

export default function VehiclePage() {
  const params = useParams<{ brand: string; model: string }>();
  const brandName = params.brand ? params.brand.charAt(0).toUpperCase() + params.brand.slice(1) : '';
  const modelName = params.model ? params.model.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : '';

  const vehicle = vehicles.find((v) => v.slug === `${params.brand}-${params.model}`);
  const vehicleProducts = products.filter((p) =>
    p.fitment.some((f) => f.toLowerCase().includes(brandName.toLowerCase()) || f.toLowerCase().includes(modelName.toLowerCase()))
  );
  const allProducts = vehicleProducts.length > 0 ? vehicleProducts : products.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#080809]">
      <Header />
      <div className="pt-16">
        {/* Hero */}
        <div className="relative h-56 md:h-72 overflow-hidden">
          {vehicle?.image ? (
            <img src={vehicle.image} alt={`${brandName} ${modelName}`} className="w-full h-full object-cover opacity-60" />
          ) : (
            <div className="w-full h-full bg-[#0F0F12]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080809]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080809]/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container pb-8">
            <div className="flex items-center gap-1.5 text-[11px] font-['Outfit'] text-white/40 mb-3">
              <Link href="/"><span className="hover:text-white transition-colors">Home</span></Link>
              <ChevronRight size={10} />
              <span className="hover:text-white transition-colors cursor-pointer">By Vehicle</span>
              <ChevronRight size={10} />
              <span className="text-white/70">{brandName} {modelName}</span>
            </div>
            <p className="sk-label mb-2">{brandName}</p>
            <h1 className="font-['Space_Grotesk'] font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-white tracking-[-0.02em]">
              Accessories for {brandName} {modelName}
            </h1>
            {vehicle && (
              <p className="text-[13px] font-['Outfit'] text-white/50 mt-1">{vehicle.year}</p>
            )}
          </div>
        </div>

        <div className="container py-10">
          <div className="flex items-center justify-between mb-8">
            <p className="text-[13px] font-['Outfit'] text-white/50">{allProducts.length} accessories found</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allProducts.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
