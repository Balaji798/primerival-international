'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { products } from '@/data/products';

export default function ProductsSection() {
  const [filter, setFilter] = useState<'all' | 'Disposable Gloves' | 'Latex Pillow' | 'Latex Mattress' | 'Heavy-duty Steel Frame'>('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  // Get unique categories from products
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#f6efaa] text-[#800000] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#800000] mb-6">
            Premium Latex Products
          </h2>
          <p className="text-lg text-gray-700">
            Discover our comprehensive range of high-quality latex products, crafted to meet the highest industry standards.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-[#fa3035] text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-[#f6efaa]'
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as any)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-[#fa3035] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-[#f6efaa]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-[#e4d7bc] overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#800000] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#800000] mb-4 line-clamp-2 min-h-[3.5rem]">
                  {product.name}
                </h3>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href={`/products/${product.slug}`}
                    className="flex-1 bg-[#fa3035] text-white px-4 py-2.5 rounded-full hover:bg-[#800000] transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg text-center"
                  >
                    View Detail
                  </Link>
                  {/* <Link 
                    href={`/products/${product.slug}`}
                    className="flex-1 border-2 border-[#800000] text-[#800000] px-4 py-2.5 rounded-full hover:bg-[#800000] hover:text-white transition-all duration-300 font-semibold text-sm text-center"
                  >
                    View More
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6 text-lg">
            Can't find what you're looking for?
          </p>
          <Link href="/contact">
            <button className="bg-gradient-to-r from-[#fa3035] to-[#800000] text-white px-10 py-4 rounded-full hover:shadow-2xl transition-all duration-300 font-bold text-lg">
              Request Custom Product
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}