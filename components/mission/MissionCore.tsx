'use client';

import { motion } from 'framer-motion';

export default function MissionCore() {
  const missions = [
    {
      id: 1,
      number: '01',
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in latex processing through rigorous quality control, advanced technology, and continuous improvement. Every product is a testament to our commitment to excellence.',
      highlights: ['ISO 22000 Certified', 'FSSC 22000 Compliant', 'HALAL Approved', 'Daily Quality Checks']
    },
    {
      id: 2,
      number: '02',
      title: 'Sustainable Operations',
      description: 'Environmental stewardship is at the core of our operations. We implement sustainable farming practices, energy-efficient processing, and eco-friendly packaging to minimize our environmental impact.',
      highlights: ['Zero-Waste Goal', 'Renewable Energy', 'Sustainable Sourcing', 'Water Conservation']
    },
    {
      id: 3,
      number: '03',
      title: 'Innovation & Technology',
      description: 'We invest in cutting-edge processing technology and R&D to deliver innovative solutions. Our state-of-the-art facilities enable us to meet evolving market demands with precision.',
      highlights: ['Advanced Processing', 'R&D Laboratory', 'Smart Automation', 'Product Innovation']
    },
    {
      id: 4,
      number: '04',
      title: 'Strategic Partnerships',
      description: 'Building lasting relationships with B2C partners through transparency, reliability, and customized solutions. We grow together by understanding your unique needs and delivering consistent value.',
      highlights: ['Dedicated Support', 'Custom Solutions', 'Flexible Terms', 'Global Reach']
    }
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 font-pally"
          >
            Our Pillars
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-pally text-gray-900">
            Built on Strong Foundations
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Four core principles that define our approach to excellence and guide every decision we make.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="max-w-7xl mx-auto space-y-12">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="grid lg:grid-cols-12 gap-0">
                  {/* Number Side */}
                  <div className="lg:col-span-3 bg-white border-r-2 border-gray-100 p-12 flex flex-col justify-center items-center relative overflow-hidden">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative z-10"
                    >
                      <div className="text-8xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors duration-500 font-pally">
                        {mission.number}
                      </div>
                      <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#fa3035] to-[#800000] rounded-full"></div>
                    </motion.div>
                    
                    {/* Subtle decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f6efaa]/20 to-transparent rounded-full blur-2xl"></div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:col-span-9 p-12">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-pally"
                    >
                      {mission.title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-lg text-gray-600 leading-relaxed mb-8"
                    >
                      {mission.description}
                    </motion.p>

                    {/* Highlights Grid */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="grid grid-cols-2 md:grid-cols-4 gap-3"
                    >
                      {mission.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-center hover:border-[#fa3035] hover:shadow-md transition-all duration-300"
                        >
                          <div className="text-sm font-semibold text-gray-700 font-pally">
                            {highlight}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}