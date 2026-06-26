'use client';

import { motion } from 'framer-motion';

export default function AboutVision() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-[#f6efaa]/20 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f6efaa]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Vision Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
            <div className="grid lg:grid-cols-5">
              {/* Left Side - Light Gradient */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#f6efaa] to-[#fef3c7] p-12 flex flex-col justify-center items-center relative overflow-hidden border-r-2 border-gray-100">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -ml-24 -mb-24"></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-8xl mb-6"
                  >
                    🎯
                  </motion.div>
                  <h2 className="text-4xl font-bold mb-3 text-gray-800">Our Vision</h2>
                  <div className="w-24 h-1 bg-[#fa3035] mx-auto"></div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="lg:col-span-3 p-12 bg-white">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Our vision at <span className="font-bold text-gray-800">Prime International</span> is to be the{' '}
                  <span className="font-bold text-[#fa3035]">leading provider of latex product solutions</span>, setting the benchmark for excellence and innovation in the global industry.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We strive to continuously push the boundaries of latex processing technology and create a{' '}
                  <span className="font-semibold text-gray-800">sustainable impact</span> on the markets we serve.
                </p>

                {/* Vision Pillars */}
                <div className="grid sm:grid-cols-2 gap-6 mt-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-[#f6efaa]/20 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center text-2xl shadow-sm">
                      🏆
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Excellence</h4>
                      <p className="text-sm text-gray-600">Setting industry benchmarks</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-[#f6efaa]/20 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center text-2xl shadow-sm">
                      💡
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Innovation</h4>
                      <p className="text-sm text-gray-600">Pushing technological boundaries</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-[#f6efaa]/20 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center text-2xl shadow-sm">
                      🌍
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Global Impact</h4>
                      <p className="text-sm text-gray-600">Leading worldwide markets</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-[#f6efaa]/20 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center text-2xl shadow-sm">
                      🌱
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Sustainability</h4>
                      <p className="text-sm text-gray-600">Creating lasting value</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}