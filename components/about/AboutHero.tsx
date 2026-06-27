'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#e4d7bc] via-white to-[#f6efaa]/20 overflow-hidden pt-24 pb-16">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#fa3035]/10 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-14">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#800000] mb-6 leading-tight">
                <span className="text-[#fa3035]">Primerival International</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-800 font-semibold mb-8">
                <span className="text-[#fa3035]">Excellence in Mattress, Gloves, Pillow Latex Product</span>
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Primerival International is a <span className="font-semibold text-[#800000]"> innovation-first</span> company redefining latex processing for B2C systems. Headquartered in Thailand, we manufacture and export premium latex-based product built for performance, consistency, and shelf-stability.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8">

              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="text-4xl font-bold text-[#fa3035] mb-2"
                >
                  Global
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">Presence</div>
              </div>
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, type: "spring" }}
                  className="text-4xl font-bold text-[#fa3035] mb-2"
                >
                  B2C
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">Focused</div>
              </div>
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="text-4xl font-bold text-[#fa3035] mb-2"
                >
                  100%

                </motion.div>
                <div className="text-sm text-gray-600 font-medium">Quality Assured
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#fa3035] to-[#800000] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Our Story
                <span className="ml-2">→</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#800000] text-[#800000] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#800000] hover:text-white transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Main Large Image */}
              <div className="col-span-2 relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/product/mattress/natural-para-later.jpg"
                  alt="Primerival International Latex Product"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/30 to-transparent"></div>
              </div>

              {/* Two Smaller Images */}
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/product/pillow/pillow-1.jpg"
                  alt="Latex Processing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/product/glo/pexels-karola.jpg"
                  alt="Quality Assurance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border-2 border-[#f6efaa]"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#fa3035] to-[#800000] flex items-center justify-center text-white text-2xl font-bold">
                  A+
                </div>
                <div>
                  <div className="text-sm text-gray-600">Certified</div>
                  <div className="text-lg font-bold text-[#800000]">Premium Quality</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}