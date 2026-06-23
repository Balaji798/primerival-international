'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

export default function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-[#e4d7bc]/20 via-white to-[#f6efaa]/10 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block bg-gradient-to-r from-[#fa3035] to-[#800000] text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            Our Products
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#800000] mb-6">
            Premium <span className="text-[#fa3035]">Latex Products</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Discover our comprehensive range of high-quality latex-based products designed for B2C applications worldwide.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#fa3035] to-[#800000] text-white shadow-lg scale-105'
                  : 'bg-white text-[#800000] border-2 border-[#800000] hover:bg-[#800000] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/products/${product.slug}`}>
                <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-[#fa3035] h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#800000] px-4 py-2 rounded-full text-sm font-bold">
                      {product.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-[#800000] mb-3 group-hover:text-[#fa3035] transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                      {product.description}
                    </p>

                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-[#fa3035]">📦</span>
                        <span className="text-gray-700">{product.form}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#fa3035]">🌍</span>
                        <span className="text-gray-700">{product.countryOfOrigin}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-[#fa3035] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        View Details →
                      </span>
                      <div className="flex space-x-2">
                        <span className="w-2 h-2 rounded-full bg-[#fa3035] group-hover:scale-150 transition-transform duration-300"></span>
                        <span className="w-2 h-2 rounded-full bg-[#800000] group-hover:scale-150 transition-transform duration-300"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🥚</div>
            <h3 className="text-2xl font-bold text-[#800000] mb-2">No Products Found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-[#800000] to-[#fa3035] rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            We offer custom solutions for your specific requirements. Get in touch with our team to discuss your needs.
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#800000] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}