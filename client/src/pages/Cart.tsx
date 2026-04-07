// SK Studio Cart Page

import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function Cart() {
  return (
    <div className="min-h-screen bg-[#080809]">
      <Header />
      <div className="pt-16">
        <div className="bg-[#0A0A0D] border-b border-white/[0.06] py-10">
          <div className="container">
            <p className="sk-label mb-2">Your Selection</p>
            <h1 className="font-['Space_Grotesk'] font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-white tracking-[-0.02em]">
              Cart
            </h1>
          </div>
        </div>

        <div className="container py-16 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#0F0F12] border border-white/[0.06] flex items-center justify-center mb-6">
            <ShoppingCart size={24} className="text-white/30" />
          </div>
          <h2 className="font-['Space_Grotesk'] font-semibold text-[1.25rem] text-white mb-2">Your cart is empty</h2>
          <p className="text-[14px] font-['Outfit'] text-white/50 mb-8 max-w-sm">
            Browse our catalog and find accessories that fit your vehicle precisely.
          </p>
          <div className="flex gap-3">
            <Link href="/shop">
              <button className="sk-btn-primary flex items-center gap-2">
                Browse Products <ArrowRight size={14} />
              </button>
            </Link>
            <button
              className="sk-btn-outline"
              onClick={() => toast.info('Checkout coming soon')}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
