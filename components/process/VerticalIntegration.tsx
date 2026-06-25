'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    icon: '✓',
    title: 'Complete Quality Control',
    description: 'Every step meets our exacting standards, eliminating third-party variables that could compromise product integrity.',
    color: 'from-[#fa3035] to-[#800000]',
  },
  {
    icon: '🔍',
    title: 'Full Traceability',
    description: 'We can trace every egg product back to its source farm, feed batch, and production date, ensuring transparency and accountability.',
    color: 'from-[#800000] to-[#fa3035]',
  },
  {
    icon: '🌱',
    title: 'Sustainable Excellence',
    description: 'Our integrated approach optimizes resource use, reduces waste, and maintains consistent environmental standards across all operations.',
    color: 'from-[#fa3035] to-[#f6efaa]',
  },
];

export default function VerticalIntegration() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#800000] mb-6">
            What Vertical Integration{' '}
            <span className="text-[#fa3035]">Means for You</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Vertical integration means Prime International owns and operates every stage of the egg production process – from feed manufacturing to final packaging. This comprehensive control delivers three critical advantages:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#fa3035] h-full">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-3xl text-white mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#800000] mb-4 group-hover:text-[#fa3035] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}