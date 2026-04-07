// SK Studio Shop Page - Technical Edge Design System

import { useState, useMemo } from 'react';
import { useParams } from 'wouter';
import { SlidersHorizontal, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/data';

const sortOptions = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'best', label: 'Best Selling' },
  { value: 'new', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

export default function Shop() {
  const params = useParams<{ category?: string }>();
  const [sort, setSort] = useState('recommended');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(params.category || '');

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory) {
      list = list.filter((p) => p.categorySlug === selectedCategory);
    }
    switch (sort) {
      case 'best': return list.filter((p) => p.badge === 'Best Seller').concat(list.filter((p) => p.badge !== 'Best Seller'));
      case 'new': return list.filter((p) => p.badge === 'New').concat(list.filter((p) => p.badge !== 'New'));
      case 'price-asc': return list.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
      case 'price-desc': return list.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
      default: return list;
    }
  }, [selectedCategory, sort]);

  const activeCategory = categories.find((c) => c.slug === selectedCategory);

  return (
    <div className="min-h-screen bg-[#080809]">
      <Header />
      <div className="pt-16">
        {/* Page header */}
        <div className="bg-[#0A0A0D] border-b border-white/[0.06] py-10">
          <div className="container">
            <p className="sk-label mb-2">
              {activeCategory ? `Shop / ${activeCategory.name}` : 'Shop / All Products'}
            </p>
            <h1 className="font-['Space_Grotesk'] font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-white tracking-[-0.02em]">
              {activeCategory ? activeCategory.name : 'All Products'}
            </h1>
            {activeCategory && (
              <p className="text-[14px] font-['Outfit'] text-white/50 mt-2">{activeCategory.description}</p>
            )}
          </div>
        </div>

        <div className="container py-8">
          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap mb-6">
            <button
              className={`px-4 py-2 text-[12px] font-['Space_Grotesk'] font-semibold tracking-wide uppercase border transition-colors ${
                !selectedCategory
                  ? 'bg-[#2563EB] border-[#2563EB] text-white'
                  : 'bg-transparent border-white/[0.1] text-white/60 hover:border-white/30 hover:text-white'
              }`}
              onClick={() => setSelectedCategory('')}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                className={`px-4 py-2 text-[12px] font-['Space_Grotesk'] font-semibold tracking-wide uppercase border transition-colors ${
                  selectedCategory === cat.slug
                    ? 'bg-[#2563EB] border-[#2563EB] text-white'
                    : 'bg-transparent border-white/[0.1] text-white/60 hover:border-white/30 hover:text-white'
                }`}
                onClick={() => setSelectedCategory(cat.slug)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
            <p className="text-[13px] font-['Outfit'] text-white/50">
              {filtered.length} products
            </p>
            <div className="flex items-center gap-3">
              <select
                className="bg-[#0F0F12] border border-white/[0.08] text-[12px] font-['Outfit'] text-white/70 px-3 py-2 focus:outline-none focus:border-[#2563EB]/50"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                {sortOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-[16px] font-['Space_Grotesk'] font-semibold text-white/50 mb-2">No products found</p>
              <p className="text-[13px] font-['Outfit'] text-white/30">Try a different category or filter</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
