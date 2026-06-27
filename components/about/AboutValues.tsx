'use client';

import { motion } from 'framer-motion';

const values = [
  {
    icon: '🎯',
    title: 'Safety First:',
    description: 'Strict zero-defect policy and global testing for all latex and hardware products.',
    color: 'from-[#fa3035] to-[#800000]',
  },
  {
    icon: '🤝',
    title: 'Eco-Friendly:',
    description: '100% pure natural latex sourced from sustainable, certified plantations',
    color: 'from-[#800000] to-[#fa3035]',
  },
  {
    icon: '💡',
    title: 'Precision Built:',
    description: 'Advanced CNC machinery and robotic welding for maximum durability.',
    color: 'from-[#fa3035] to-[#f6efaa]',
  },
  {
    icon: '🌍',
    title: 'B2B Smart Logistics:',
    description: 'Space-saving packaging designed to slash your global shipping costs.',
    color: 'from-[#800000] to-[#f6efaa]',
  },
];

export default function AboutValues() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-[#f6efaa] text-[#800000] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            Our Core Values
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#800000] mb-6">
            What <span className="text-[#fa3035]">Drives Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#fa3035] h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-3xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {value.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#800000] mb-3 group-hover:text-[#fa3035] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}