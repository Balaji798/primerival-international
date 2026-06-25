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
                Welcome to{' '}
                <span className="text-[#fa3035]">Prime International</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-800 font-semibold mb-8">
                From Farm to Table, 
{' '}
                <span className="text-[#fa3035]">Excellence in Every Latex Product</span>
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Prime International is a <span className="font-semibold text-[#800000]"> innovation-first</span> company redefining latex processing for B2C food systems. Headquartered in Thailand, we manufacture and export premium latex-based ingredients built for performance, consistency, and shelf-stability.
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
                  src="https://static.wixstatic.com/media/92604c_0e1a7b42bbdf47b8b508ecdc2634cd37~mv2.png/v1/fill/w_1536,h_360,al_c,q_90,enc_auto/92604c_0e1a7b42bbdf47b8b508ecdc2634cd37~mv2.png"
                  alt="Prime International Latex Product"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/30 to-transparent"></div>
              </div>

              {/* Two Smaller Images */}
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://static.wixstatic.com/media/92604c_c51f52dc9bb042aaa6fcdcad6d869fbd~mv2.jpg/v1/fill/w_950,h_583,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/92604c_c51f52dc9bb042aaa6fcdcad6d869fbd~mv2.jpg"
                  alt="Latex Processing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://static.wixstatic.com/media/92604c_fa8ba41d52604e698634fd4f19216271~mv2.jpg"
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