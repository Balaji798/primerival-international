'use client';

import { motion } from 'framer-motion';

export default function AboutTeam() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#e4d7bc]/20 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block bg-gradient-to-r from-[#fa3035] to-[#800000] text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#800000] mb-8">
            Founder-Led <span className="text-[#fa3035]">Excellence</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Our founder-led approach keeps us <span className="font-bold text-[#800000]">agile</span>,{' '}
            <span className="font-bold text-[#800000]">authentic</span>, and{' '}
            <span className="font-bold text-[#fa3035]">quality-obsessed</span>.
          </p>

          {/* Leadership Qualities */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {['Agile', 'Authentic', 'Quality-Obsessed'].map((quality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="text-4xl font-bold text-[#fa3035] mb-2">{quality}</div>
                <div className="h-1 w-16 bg-gradient-to-r from-[#fa3035] to-[#800000] mx-auto"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}