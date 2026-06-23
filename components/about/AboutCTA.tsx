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
          {/* Main CTA Card */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-gray-100 text-center">
            <span className="inline-block bg-[#fa3035] text-white px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              Let's Connect
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
              Ready to Partner with{' '}
              <span className="text-[#fa3035]">Primerival International Pte Ltd?</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Let's build something exceptional together. Reach out to discuss how we can support your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#fa3035] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-[#fa3035]/90 transition-all duration-300"
                >
                  Get in Touch
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:border-gray-400 transition-all duration-300"
                >
                  View Products
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 mt-12">
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