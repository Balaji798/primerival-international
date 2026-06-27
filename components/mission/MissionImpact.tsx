'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MissionImpact() {
  const [activeTab, setActiveTab] = useState(0);

  const impacts = [
    {
      id: 0,
      title: 'Industry Leadership',
      description: 'Setting benchmarks for quality and innovation in egg processing',
      metrics: [
        { label: 'Global Presence', value: '15+', unit: 'Countries' },
        { label: 'B2C Partners', value: '500+', unit: 'Businesses' },
        { label: 'Daily Capacity', value: '100K+', unit: 'Latex Processed' }
      ]
    },
    {
      id: 1,
      title: 'Environmental Responsibility',
      description: 'Committed to sustainable practices that protect our planet',
      metrics: [
        { label: 'Carbon Reduction', value: '40%', unit: 'Year over Year' },
        { label: 'Waste Recycled', value: '95%', unit: 'Of Total Waste' },
        { label: 'Water Conservation', value: '30%', unit: 'Less Usage' }
      ]
    },
    {
      id: 2,
      title: 'Community Impact',
      description: 'Supporting local communities through ethical partnerships',
      metrics: [
        { label: 'Farmers Supported', value: '200+', unit: 'Families' },
        { label: 'Employment', value: '500+', unit: 'Direct Jobs' },
        { label: 'Training Programs', value: '50+', unit: 'Annually' }
      ]
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-[#fefcf6] via-white to-[#f6efaa]/5 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 font-pally"
          >
            Our Impact
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-pally text-gray-900">
            Measuring Success Beyond Numbers
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Our commitment extends beyond business metrics to create lasting positive impact.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {impacts.map((impact) => (
            <button
              key={impact.id}
              onClick={() => setActiveTab(impact.id)}
              className={`px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 font-pally ${
                activeTab === impact.id
                  ? 'bg-gradient-to-r from-[#fa3035] to-[#800000] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
              }`}
            >
              {impact.title}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-100 overflow-hidden">
            {/* Description */}
            <div className="p-12 text-center border-b-2 border-gray-100">
              <p className="text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
                {impacts[activeTab].description}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {impacts[activeTab].metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-12 text-center hover:bg-gray-50 transition-colors duration-300"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                    className="text-6xl font-bold bg-gradient-to-r from-[#fa3035] to-[#800000] bg-clip-text text-transparent mb-3 font-pally"
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-lg text-gray-600 font-medium mb-2">{metric.unit}</div>
                  <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider font-pally">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}