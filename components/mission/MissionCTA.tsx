'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactModal from '../ContactModal';

export default function MissionCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fefcf6] via-white to-[#f6efaa]/10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f6efaa]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-100 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block bg-white border-2 border-gray-200 rounded-full px-6 py-3 mb-8 shadow-sm"
              >
                <span className="text-gray-700 font-semibold text-sm uppercase tracking-wider font-pally">
                  Let&apos;s Work Together
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight font-pally">
                Ready to Partner with
                <br />
                <span className="bg-gradient-to-r from-[#fa3035] to-[#800000] bg-clip-text text-transparent">
                  Industry Leaders?
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of B2C partners who trust Prime International for premium, reliable latex products. Let&apos;s create success together.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-[#fa3035] to-[#800000] text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-pally"
                >
                  Start Partnership
                </motion.button>
                
                <motion.a
                  href="/products"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-gray-300 text-gray-800 px-10 py-5 rounded-full font-bold text-lg hover:border-gray-400 hover:shadow-lg transition-all duration-300 font-pally"
                >
                  Explore Products
                </motion.a>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { label: 'ISO 22000', sublabel: 'Certified' },
                { label: 'FSSC 22000', sublabel: 'Compliant' },
                { label: 'HALAL', sublabel: 'Approved' },
                { label: 'Global', sublabel: 'Export Ready' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-gray-900 mb-1 font-pally">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {item.sublabel}
                  </div>
                </motion.div>
              ))}
            </motion.div>
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