'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const commitmentCards = [
  {
    id: 1,
    title: 'Who We Are',
    subtitle: 'Excellence in Every Product',
    description: 'Prime International excels in providing top-notch latex products.',
    icon: '🏆',
    color: 'from-gray-50 to-[#f6efaa]/30',
  },
  {
    id: 2,
    title: 'Our Heritage',
    subtitle: 'Industry Leadership',
    description: 'As a leading B2C manufacturer of latex gloves, pillows, and mattresses, Prime International serves sectors like healthcare, hospitality, and home comfort, ensuring superior quality and technical consistency. Our pledge to quality and innovation drives our success.',
    icon: '🚀',
    color: 'from-[#f6efaa]/30 to-white',
  },
  {
    id: 3,
    title: 'Our Vision',
    subtitle: 'Building Trust, Inspiring Confidence',
    description: 'Prime International envisions a world where comfort products are crafted with integrity, shared with care, and trusted by all. We aim to be more than a supplier, serving as a partner that inspires confidence through quality, transparency, and a commitment to better comfort solutions for future generations.',
    icon: '🌟',
    color: 'from-white to-gray-50',
  },
  {
    id: 4,
    title: 'Quality & Assurance',
    subtitle: 'Excellence at Every Stage',
    description: 'At Prime International, quality is more than a promise. It\'s built into every stage of our process. From raw material sourcing to final delivery, we ensure safety, consistency, and transparency so you can trust every product that carries our name.',
    icon: '✓',
    color: 'from-gray-50 to-[#f6efaa]/20',
  },
];

export default function CommitmentSection() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#f6efaa]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#fa3035] text-white px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              Our Foundation
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Our Commitment to{' '}
              <span className="text-[#fa3035]">Quality</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Built on integrity, driven by innovation, and committed to excellence in every product we deliver.
            </p>
          </motion.div>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {commitmentCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveCard(card.id)}
              className={`group cursor-pointer transition-all duration-500 ${
                activeCard === card.id ? 'scale-105' : 'hover:scale-102'
              }`}
            >
              <div
                className={`relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                  activeCard === card.id
                    ? 'border-[#fa3035]'
                    : 'border-gray-200'
                }`}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                ></div>

                <div className="relative p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f6efaa] to-white flex items-center justify-center text-3xl shadow-lg transform group-hover:rotate-6 transition-transform duration-500 border-2 border-gray-100`}
                    >
                      {card.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#fa3035] transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm font-semibold text-gray-600 mb-4">
                    {card.subtitle}
                  </p>

                  {/* Indicator */}
                  <div className="flex items-center space-x-2">
                    <div
                      className={`h-1 rounded-full transition-all duration-500 ${
                        activeCard === card.id
                          ? 'w-12 bg-[#fa3035]'
                          : 'w-6 bg-gray-300'
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Content Display */}
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100"
        >
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left Side - Light Gradient */}
            <div
              className={`lg:col-span-2 bg-gradient-to-br ${
                commitmentCards.find((c) => c.id === activeCard)?.color
              } p-12 flex flex-col justify-center items-center relative overflow-hidden border-r-2 border-gray-100`}
            >
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#f6efaa] rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -ml-24 -mb-24"></div>
              </div>
              <div className="relative z-10 text-center">
                <div className="text-7xl mb-6">
                  {commitmentCards.find((c) => c.id === activeCard)?.icon}
                </div>
                <h3 className="text-3xl font-bold mb-3 text-gray-800">
                  {commitmentCards.find((c) => c.id === activeCard)?.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {commitmentCards.find((c) => c.id === activeCard)?.subtitle}
                </p>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-3 p-12 bg-white">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {commitmentCards.find((c) => c.id === activeCard)?.description}
                </p>

                {/* Additional Features */}
                <div className="grid sm:grid-cols-2 gap-6 mt-10">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-[#f6efaa]/20 transition-colors duration-300">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        Certified Excellence
                      </h4>
                      <p className="text-sm text-gray-600">
                        Industry-leading certifications and standards
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-[#f6efaa]/20 transition-colors duration-300">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm">
                      <span className="text-2xl">🔬</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        Advanced Testing
                      </h4>
                      <p className="text-sm text-gray-600">
                        State-of-the-art quality control
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-[#f6efaa]/20 transition-colors duration-300">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        Sustainable Practices
                      </h4>
                      <p className="text-sm text-gray-600">
                        Environmentally responsible sourcing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-[#f6efaa]/20 transition-colors duration-300">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        Partner Support
                      </h4>
                      <p className="text-sm text-gray-600">
                        Dedicated customer service team
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-10">
                  <button className="bg-[#fa3035] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#fa3035]/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Learn More About Our Process
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20">
          {[
            { number: '100%', label: 'Quality Assured' },
            { number: '24/7', label: 'Support' },
            { number: 'Global', label: 'Reach' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#fa3035] transition-colors duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#fa3035] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}