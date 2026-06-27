'use client';

import { motion } from 'framer-motion';

export default function ProcessHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#e4d7bc] via-[#f6efaa]/30 to-white overflow-hidden pt-24 pb-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-0 w-96 h-96 bg-[#fa3035]/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-0 w-96 h-96 bg-[#800000]/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-14">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-gradient-to-r from-[#fa3035] to-[#800000] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest mb-8 shadow-lg">
              Our Process
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#800000] mb-6 leading-tight">
              From Raw Materials to Final Products –
              <span className="text-[#fa3035]">A Fully Integrated Journey</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Complete control over every step means uncompromising quality in every latex and hardware product we deliver worldwide.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              At our company, we don’t just manufacture – we actively manage and control the entire production journey, starting from the liquid latex extracted at eco-friendly plantations to the heavy-duty folding wagons built in our engineering division. Our strict, vertically integrated approach ensures consistent product durability, full batch traceability, and sustainable manufacturing practices at every single stage of the supply chain.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#fa3035] to-[#800000] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Explore Our Process
              <span className="ml-2">↓</span>
            </motion.button>
          </motion.div>

          {/* Animated Process Flow Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex justify-center items-center space-x-4"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((step, index) => (
              <motion.div
                key={step}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="relative"
              >
                <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-[#fa3035]' : 'bg-gray-300'}`}></div>
                {index < 8 && (
                  <div className="absolute top-1/2 left-full w-8 h-0.5 bg-gray-300 -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}