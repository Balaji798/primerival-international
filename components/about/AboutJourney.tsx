'use client';

import { motion } from 'framer-motion';

export default function AboutJourney() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center"
          >
            <div>
              <span className="inline-block bg-[#f6efaa] text-[#800000] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#800000] mb-6">
                Our <span className="text-[#fa3035]">Journey</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                
                <span className="font-bold text-[#800000]">Prime International</span>,  began with a mission to modernize latex processing for scale and reliability.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                With cutting-edge facilities and a customer-centric mindset, we've grown into a trusted name across India and global markets. Our founder-led approach keeps us agile, authentic, and quality-obsessed.
              </p>
            </div>

            {/* Key Milestones */}
            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fa3035] to-[#800000] flex items-center justify-center text-white shadow-xl">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#800000] mb-2">Innovation-First Approach</h4>
                  <p className="text-gray-600">Cutting-edge technology meets traditional quality standards</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fa3035] to-[#800000] flex items-center justify-center text-white shadow-xl">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#800000] mb-2">Customer-Centric Mindset</h4>
                  <p className="text-gray-600">Building lasting partnerships through reliability and trust</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fa3035] to-[#800000] flex items-center justify-center text-white shadow-xl">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#800000] mb-2">Global Reach</h4>
                  <p className="text-gray-600">From Navi Mumbai to markets worldwide</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}