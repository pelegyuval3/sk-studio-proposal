// SK Studio 404 Page - Technical Edge Design System

import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080809]">
      <Header />
      <div className="pt-16 flex flex-col items-center justify-center min-h-[70vh] text-center container">
        <p className="text-[8rem] font-['Space_Grotesk'] font-bold text-white/[0.04] leading-none mb-4">404</p>
        <h1 className="font-['Space_Grotesk'] font-bold text-[1.5rem] text-white tracking-[-0.02em] mb-3">
          Page not found
        </h1>
        <p className="text-[14px] font-['Outfit'] text-white/50 mb-8 max-w-sm">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <button className="sk-btn-primary">Back to Home</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
