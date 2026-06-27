'use client';

import { motion } from 'framer-motion';

export default function MissionCore() {
  const missions = [
    {
      id: 1,
      number: '01',
      title: 'Uncompressed Quality & Safety',
      description: 'From medical-grade latex gloves and orthopedic mattresses to heavy-duty folding wagons, quality is our absolute priority. We adhere strictly to international testing standards, ensuring every product is safe, durable, and reliable before leaving our facility.',
      description2: "Industrial Excellence: Our quality assurance protocol involves rigorous zero-defect benchmarking. This means every batch of gloves undergoes microscopic puncture inspections, our bedding lines face localized fatigue compression tests, and our mobility hardware is subjected to extreme weight-load fatigue testing to guarantee infallible safety under any real-world condition."
    },
    {
      id: 2,
      number: '02',
      title: 'Sustainable & Eco-Friendly Innovation ',
      description: 'We actively minimize our environmental footprint by sourcing 100% pure natural rubber latex from eco-responsible plantations. Our advanced post-processing methods reduce chemical waste, creating hypoallergenic products that care for both our users and the planet.',
      description2:"Green Manufacturing: Our commitment to sustainability extends deeply into our operational pipeline. We implement clean vulcanization and water-recycling closed loops during our intensive leaching process to eliminate dangerous chemical residues. By selecting fully recyclable steel components and non-toxic coatings for our hardware, we ensure that our manufacturing practices actively preserve ecosystems for future generations."
    },
    {
      id: 3,
      number: '03',
      title: 'Integrated Manufacturing Excellence',
      description: 'By combining high-speed automated latex dipping technology with robotic hardware fabrication, we offer an unmatched vertically integrated supply chain. This diversification allows us to optimize manufacturing costs and maintain exceptional design flexibility for global markets.',
      description2:"Tailored Solutions: By controlling the entire supply chain from raw liquid latex compounding to automated robotic steel fabrication, we offer unmatched OEM and ODM design flexibility. This internal integration allows us to optimize manufacturing cycles, maintain tight dimensional tolerances, and respond dynamically to custom market specifications."
    },
    {
      id: 4,
      number: '04',
      title: 'Customer-Centric Global Partnerships',
      description: "We don't just supply products; we build long-term international relationships. By providing custom-tailored solutions, space-saving packaging for efficient logistics, and transparent communication, we empower our global partners to scale their businesses successfully.",
      description2:'Smart Logistics & Growth: We specialize in developing space-saving, freight-efficient packaging solutions such as our vacuum-compressed "Roll-in-Box" mattresses and ultra-compact flat-folding wagons expressly designed to slash international container shipping costs. Through full barcode traceability and localized regulatory compliance, we empower our B2B partners to scale their global distribution with complete financial confidence.'
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
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-lg text-gray-600 leading-relaxed mb-8"
                    >
{mission.description2}
                    </motion.p>
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