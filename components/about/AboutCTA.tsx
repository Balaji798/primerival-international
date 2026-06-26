'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-[#f6efaa]/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f6efaa]/40 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full -ml-48 -mb-48"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-gray-100 hover:border-[#fa3035] transition-colors"
            >
              <div className="text-4xl font-bold text-[#fa3035] mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-gray-100 hover:border-[#fa3035] transition-colors"
            >
              <div className="text-4xl font-bold text-[#fa3035] mb-2">100%</div>
              <div className="text-sm text-gray-600">Quality Assured</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-gray-100 hover:border-[#fa3035] transition-colors"
            >
              <div className="text-4xl font-bold text-[#fa3035] mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}