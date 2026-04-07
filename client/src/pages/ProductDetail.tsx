// SK Studio Product Detail Page - Technical Edge Design System

import { useParams } from 'wouter';
import { useState } from 'react';
import { Link } from 'wouter';
import { ChevronRight, Star, Shield, Truck, MessageCircle, Plus, Minus, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';
import { toast } from 'sonner';

const difficultyLabel = { easy: 'Easy - DIY', medium: 'Medium - Some experience', pro: 'Professional recommended' };
const difficultyColor = { easy: 'text-green-400', medium: 'text-yellow-400', pro: 'text-orange-400' };

export default function ProductDetail() {
  const params = useParams<{ slug: string }>();
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find((p) => p.slug === params.slug) || products[0];
  const related = products.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);

  const tabs = ['description', 'fitment', 'installation', 'shipping'];

  return (
    <div className="min-h-screen bg-[#080809]">
      <Header />
      <div className="pt-16">
        {/* Breadcrumb */}
        <div className="border-b border-white/[0.06] bg-[#0A0A0D]">
          <div className="container py-3 flex items-center gap-1.5 text-[11px] font-['Outfit'] text-white/40">
            <Link href="/"><span className="hover:text-white transition-colors">Home</span></Link>
            <ChevronRight size={10} />
            <Link href="/shop"><span className="hover:text-white transition-colors">Shop</span></Link>
            <ChevronRight size={10} />
            <Link href={`/shop/${product.categorySlug}`}><span className="hover:text-white transition-colors">{product.category}</span></Link>
            <ChevronRight size={10} />
            <span className="text-white/70">{product.name}</span>
          </div>
        </div>

        {/* Main product section */}
        <div className="container py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
            {/* Gallery */}
            <div>
              <div className="aspect-[4/3] bg-[#0F0F12] border border-white/[0.06] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {[product.image, product.image, product.image, product.image].map((img, i) => (
                  <div key={i} className="aspect-square bg-[#0F0F12] border border-white/[0.06] overflow-hidden cursor-pointer hover:border-[#2563EB]/40 transition-colors">
                    <img src={img} alt="" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="sk-label mb-3">{product.category}</p>
              <h1 className="font-['Space_Grotesk'] font-bold text-[clamp(1.5rem,2.5vw,2rem)] text-white tracking-[-0.02em] mb-2">
                {product.name}
              </h1>
              <p className="text-[14px] font-['Outfit'] text-white/55 mb-4">{product.subtitle}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className={i < Math.floor(product.rating) ? 'text-[#2563EB] fill-[#2563EB]' : 'text-white/20'} />
                  ))}
                </div>
                <span className="text-[12px] font-['Outfit'] text-white/50">{product.rating} ({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/[0.06]">
                <span className="text-[2rem] font-['Space_Grotesk'] font-bold text-white">
                  ₪{(product.salePrice || product.price).toLocaleString()}
                </span>
                {product.salePrice && (
                  <span className="text-[1.25rem] font-['Outfit'] text-white/30 line-through">
                    ₪{product.price.toLocaleString()}
                  </span>
                )}
                <span className={`text-[11px] font-['Space_Grotesk'] font-semibold tracking-wide uppercase ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                  {product.inStock ? '● In Stock' : '● Out of Stock'}
                </span>
              </div>

              {/* Value bullets */}
              <ul className="space-y-2 mb-6">
                {[
                  'Precision fit for selected models',
                  'Premium finish and durable materials',
                  'Non-destructive installation where applicable',
                  'Support available before and after purchase',
                ].map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <Check size={13} className="text-[#2563EB] mt-0.5 shrink-0" />
                    <span className="text-[13px] font-['Outfit'] text-white/65">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Fitment summary */}
              <div className="bg-[#0F0F12] border border-[#2563EB]/20 p-4 mb-6">
                <p className="sk-label mb-2">Compatible With</p>
                <ul className="space-y-1">
                  {product.fitment.map((f) => (
                    <li key={f} className="text-[13px] font-['Outfit'] text-white/70 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#2563EB] rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qty + CTA */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center border border-white/[0.1]">
                  <button
                    className="w-10 h-11 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 text-center text-[14px] font-['Space_Grotesk'] font-semibold text-white">{qty}</span>
                  <button
                    className="w-10 h-11 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
                    onClick={() => setQty(qty + 1)}
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <button
                  className="flex-1 sk-btn-primary"
                  onClick={() => toast.success(`${product.name} added to cart`)}
                  disabled={!product.inStock}
                >
                  Add to Cart
                </button>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/972500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] font-['Outfit'] text-white/50 hover:text-white transition-colors mb-6"
              >
                <MessageCircle size={14} className="text-[#25D366]" />
                Need help confirming fitment? Message us on WhatsApp
              </a>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.06]">
                {[
                  { icon: Shield, label: 'Secure Checkout' },
                  { icon: Truck, label: '2-4 Day Delivery' },
                  { icon: MessageCircle, label: 'WhatsApp Support' },
                ].map((badge) => (
                  <div key={badge.label} className="flex flex-col items-center gap-1.5 text-center">
                    <badge.icon size={16} className="text-[#2563EB]" />
                    <span className="text-[10px] font-['Outfit'] text-white/40">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-14">
            <div className="flex border-b border-white/[0.06] mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-5 py-3 text-[12px] font-['Space_Grotesk'] font-semibold tracking-wide uppercase transition-colors border-b-2 -mb-px ${
                    activeTab === tab
                      ? 'border-[#2563EB] text-white'
                      : 'border-transparent text-white/40 hover:text-white/70'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'description' && (
              <div className="max-w-2xl">
                <p className="text-[14px] font-['Outfit'] text-white/70 leading-relaxed mb-4">{product.description}</p>
                {product.material && (
                  <p className="text-[13px] font-['Outfit'] text-white/50">Material: <span className="text-white/80">{product.material}</span></p>
                )}
                {product.installDifficulty && (
                  <p className="text-[13px] font-['Outfit'] text-white/50 mt-1">
                    Installation: <span className={difficultyColor[product.installDifficulty]}>{difficultyLabel[product.installDifficulty]}</span>
                  </p>
                )}
              </div>
            )}
            {activeTab === 'fitment' && (
              <div className="max-w-2xl">
                <p className="sk-label mb-4">Compatible Vehicles</p>
                <ul className="space-y-2">
                  {product.fitment.map((f) => (
                    <li key={f} className="flex items-center gap-3 py-2 border-b border-white/[0.05]">
                      <Check size={13} className="text-[#2563EB]" />
                      <span className="text-[13px] font-['Outfit'] text-white/70">{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[12px] font-['Outfit'] text-white/40 mt-4">
                  Not sure if this fits your vehicle? <a href="https://wa.me/972500000000" className="text-[#2563EB] hover:underline">Message us on WhatsApp</a>.
                </p>
              </div>
            )}
            {activeTab === 'installation' && (
              <div className="max-w-2xl">
                <p className="text-[14px] font-['Outfit'] text-white/70 leading-relaxed mb-4">
                  Installation guides are included with every product. For complex installations, we recommend a professional installer.
                </p>
                {product.includes && (
                  <>
                    <p className="sk-label mb-3">What's Included</p>
                    <ul className="space-y-2">
                      {product.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-[13px] font-['Outfit'] text-white/70">
                          <Check size={12} className="text-[#2563EB]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
            {activeTab === 'shipping' && (
              <div className="max-w-2xl space-y-4">
                <div>
                  <p className="text-[13px] font-['Space_Grotesk'] font-semibold text-white mb-1">Delivery</p>
                  <p className="text-[13px] font-['Outfit'] text-white/60">Standard delivery 2-4 business days across Israel. Express options available at checkout.</p>
                </div>
                <div>
                  <p className="text-[13px] font-['Space_Grotesk'] font-semibold text-white mb-1">Returns</p>
                  <p className="text-[13px] font-['Outfit'] text-white/60">14-day return policy for unused items in original packaging. Contact us to initiate a return.</p>
                </div>
              </div>
            )}
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-16">
              <p className="sk-label mb-2">Related for Your Vehicle</p>
              <h2 className="font-['Space_Grotesk'] font-bold text-[1.25rem] text-white tracking-[-0.02em] mb-6">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {related.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
