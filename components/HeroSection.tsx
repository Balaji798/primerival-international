'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactModal from './ContactModal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-[#f6efaa]/20 to-white pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="container mx-auto px-4 lg:px-8 pt-14">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-5 md:space-y-7 order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-pally">
                <span className="text-gray-800 block">Welcome to</span>
                <span className="text-[#fa3035] block mt-2">Primerival International Pte Ltd </span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-semibold font-pally">
                Natural Latex Excellence,{' '}
                <span className="text-[#fa3035]">Comfort in Every Layer</span>
              </p>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
    Primerival International Pte Ltd is a dynamic company that has swiftly carved a niche in the latex industry. We are prominent manufacturers, exporters, traders & suppliers specializing in innovative natural latex products including disposable gloves, ergonomic pillows, and premium mattresses for global partners.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link 
                  href="/products"
                  className="bg-[#fa3035] text-white px-8 py-3.5 rounded-full hover:bg-[#fa3035]/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-center font-pally"
                >
                  Explore Products
                </Link>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3.5 rounded-full hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 font-semibold text-center font-pally"
                >
                  Partner With Us
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 border-t border-gray-200">
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#fa3035] font-pally">B2C</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1 font-medium">Focused Solutions</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#fa3035] font-pally">100%</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1 font-medium">Quality Assured</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#fa3035] font-pally">Global</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1 font-medium">Export Ready</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/product/mattress/natural-para-later.jpg"
                  alt="Premium Mattress Products"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="hidden md:block absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-5 border-2 border-[#f6efaa]">
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Trusted by
                </div>
                <div className="text-lg font-bold text-gray-800 font-pally">
                  Food Industry Leaders
                </div>
              </div>

              {/* Quality Badge */}
              <div className="hidden md:block absolute -top-4 -right-4 bg-[#fa3035] text-white rounded-xl shadow-xl p-5">
                <div className="text-3xl font-bold font-pally">A+</div>
                <div className="text-xs uppercase tracking-wide">Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}