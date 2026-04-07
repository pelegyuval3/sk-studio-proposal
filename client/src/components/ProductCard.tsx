// SK Studio ProductCard - Technical Edge Design System

import { Link } from 'wouter';
import { Heart, Star } from 'lucide-react';
import { toast } from 'sonner';
import type { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  const discount = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : null;

  return (
    <Link href={`/product/${product.slug}`}>
      <div className={`group bg-[#0F0F12] border border-white/[0.06] hover:border-[#2563EB]/30 transition-all duration-200 cursor-pointer ${className}`}>
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3] bg-[#0A0A0D]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.badge && (
              <span className="px-2 py-0.5 bg-[#2563EB] text-white text-[10px] font-['Space_Grotesk'] font-semibold tracking-wide uppercase">
                {product.badge}
              </span>
            )}
            {discount && (
              <span className="px-2 py-0.5 bg-[#DC2626] text-white text-[10px] font-['Space_Grotesk'] font-semibold tracking-wide uppercase">
                -{discount}%
              </span>
            )}
          </div>
          {/* Wishlist */}
          <button
            className="absolute top-3 right-3 w-7 h-7 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#2563EB]/80"
            onClick={(e) => {
              e.preventDefault();
              toast.success('Added to wishlist');
            }}
          >
            <Heart size={13} className="text-white" />
          </button>
          {/* Fitment badge */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-[10px] font-['Outfit'] text-white/70 truncate">
              {product.fitment[0]}
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="sk-label mb-1">{product.category}</p>
          <h3 className="text-[14px] font-['Space_Grotesk'] font-semibold text-white leading-tight mb-1">
            {product.name}
          </h3>
          <p className="text-[12px] font-['Outfit'] text-white/50 mb-3 truncate">
            {product.subtitle}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={i < Math.floor(product.rating) ? 'text-[#2563EB] fill-[#2563EB]' : 'text-white/20'}
                />
              ))}
            </div>
            <span className="text-[11px] font-['Outfit'] text-white/40">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[16px] font-['Space_Grotesk'] font-bold text-white">
                ₪{(product.salePrice || product.price).toLocaleString()}
              </span>
              {product.salePrice && (
                <span className="text-[13px] font-['Outfit'] text-white/30 line-through">
                  ₪{product.price.toLocaleString()}
                </span>
              )}
            </div>
            <span className={`text-[10px] font-['Space_Grotesk'] font-semibold tracking-wide uppercase ${product.inStock ? 'text-[#2563EB]' : 'text-[#DC2626]'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
