/* eslint-disable react-hooks/purity */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ContactModal from '@/components/ContactModal';
import { Product } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { ShoppingCart, Heart, Minus, Plus } from 'lucide-react';
import Link from 'next/link';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

const price = product.price || 0;

  const handleAddToCart = () => {
    console.log(11)
    const productWithPrice = {
      ...product,
      rating: {
        rate: 4.5 + Math.random() * 0.5,
        count: Math.floor(Math.random() * 100) + 10
      }
    };
    addToCart(productWithPrice, quantity);
  };

  const handleWishlistToggle = () => {
    const productWithPrice = {
      ...product,
      price,
      rating: {
        rate: 4.5 + Math.random() * 0.5,
        count: Math.floor(Math.random() * 100) + 10
      }
    };
    
    if (isInWishlist(Number(product.id))) {
      removeFromWishlist(Number(product.id));
    } else {
      addToWishlist(productWithPrice);
    }
  };

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      case 'doc':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#e4d7bc]/20 via-white to-[#f6efaa]/10">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><a href="/" className="hover:text-[#fa3035]">Home</a></li>
              <li>/</li>
              <li><a href="/products" className="hover:text-[#fa3035]">Products</a></li>
              <li>/</li>
              <li className="text-[#800000] font-semibold">{product.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left - Images Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Image with Navigation */}
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-4 sm:mb-6 bg-white group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={product.images[activeImage]}
                      alt={product.name}
                      fill
                      className="object-contain p-4 sm:p-6 lg:p-8"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows - Only show if more than 1 image */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-[#800000] hover:bg-[#fa3035] hover:text-white transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-[#800000] hover:bg-[#fa3035] hover:text-white transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black/70 text-white px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {activeImage + 1} / {product.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery - Dynamic based on array length */}
              <div 
                className={`grid gap-2 sm:gap-3 lg:gap-4 ${
                  product.images.length === 1 ? 'grid-cols-1' :
                  product.images.length === 2 ? 'grid-cols-2' :
                  product.images.length === 3 ? 'grid-cols-3' :
                  'grid-cols-4'
                }`}
              >
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative h-16 sm:h-20 lg:h-24 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === index
                        ? 'border-[#fa3035] shadow-lg scale-105'
                        : 'border-gray-200 hover:border-[#800000]'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 25vw, 150px"
                    />
                    {/* Active Indicator */}
                    {activeImage === index && (
                      <div className="absolute inset-0 bg-[#fa3035]/10 border-2 border-[#fa3035]"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Image Info Badge */}
              <div className="mt-3 sm:mt-4 text-center">
                <span className="inline-flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <span>
                    {product.images.length === 1 
                      ? 'Product image' 
                      : `${product.images.length} professional product images`}
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Right - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Category Badge */}
              <span className="inline-block bg-[#f6efaa] text-[#800000] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                {product.category}
              </span>

              {/* Product Name */}
              <h1 className="text-4xl md:text-5xl font-bold text-[#800000]">
                {product.name}
              </h1>

              {/* Price Display */}
              {/* <div className="flex items-baseline space-x-2">
                <span className="text-3xl md:text-4xl font-bold text-[#fa3035]">
                  ${price.toFixed(2)}
                </span>
                <span className="text-gray-500">per unit</span>
              </div> */}

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-200">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Form</div>
                  <div className="font-semibold text-[#800000]">{product.form}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Origin</div>
                  <div className="font-semibold text-[#800000]">{product.countryOfOrigin}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Type</div>
                  <div className="font-semibold text-[#800000]">{product.type}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Business Type</div>
                  <div className="font-semibold text-[#800000]">{product.businessType.join(', ')}</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-[#800000] mb-3">Product Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              {/* Material & Application */}
              <div className="bg-gradient-to-br from-[#f6efaa]/20 to-white rounded-2xl p-6 space-y-4">
                <div>
                  <div className="text-sm font-semibold text-[#800000] mb-2">Material</div>
                  <div className="text-gray-700">{product.material}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#800000] mb-2">Application</div>
                  <div className="text-gray-700">{product.application}</div>
                </div>
                {product.additionalInfo && (
                  <div>
                    <div className="text-sm font-semibold text-[#800000] mb-2">Additional Information</div>
                    <div className="text-gray-700">{product.additionalInfo}</div>
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <label className="text-gray-700 font-medium">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border-0 focus:ring-0"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  //onClick={handleAddToCart}
                  href="/get-quote"
                  className="flex-1 bg-gradient-to-r from-[#fa3035] to-[#800000] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  {/* <ShoppingCart className="w-5 h-5" />
                  Add to Cart */}
                  Get Quote
                </Link>
                {/* <button
                  onClick={handleWishlistToggle}
                  className={`flex-1 border-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isInWishlist(Number(product.id))
                      ? 'border-[#fa3035] text-[#fa3035] bg-[#fa3035]/10'
                      : 'border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isInWishlist(Number(product.id)) ? 'fill-current' : ''}`} />
                  {isInWishlist(Number(product.id)) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button> */}
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Quality Assured</span>
                </span>
                <span className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                  <span>Global Shipping</span>
                </span>
                <span className="inline-flex items-center space-x-2 bg-[#f6efaa] text-[#800000] px-4 py-2 rounded-full text-sm font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Certified</span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Rest of the sections remain the same... */}
          {/* Specifications Section */}
          {product.specifications && product.specifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#800000] mb-8 text-center">
                Product <span className="text-[#fa3035]">Specifications</span>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.specifications.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                  >
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">{spec.label}</h3>
                    <p className="text-2xl font-bold text-[#800000]">{spec.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Collagen Types Section */}
          {product.collagenTypes && product.collagenTypes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#800000] mb-8 text-center">
                Collagen <span className="text-[#fa3035]">Composition</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {product.collagenTypes.map((collagen, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#fa3035]"
                  >
                    <div className="text-5xl mb-4">{collagen.icon}</div>
                    <h3 className="text-xl font-bold text-[#800000] mb-3">{collagen.type}</h3>
                    <p className="text-gray-600 leading-relaxed">{collagen.description}</p>
                  </motion.div>
                ))}
              </div>

              {product.otherComponents && (
                <div className="mt-8 bg-gradient-to-br from-[#f6efaa]/30 to-white rounded-2xl p-8">
                  <h4 className="text-lg font-bold text-[#800000] mb-3">Other Components</h4>
                  <p className="text-gray-700 leading-relaxed">{product.otherComponents}</p>
                </div>
              )}
            </motion.div>
          )}

          {/* Features & Benefits */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-[#800000] mb-6">Key Features</h3>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#fa3035] to-[#800000] flex items-center justify-center text-white text-sm mt-0.5">
                      ✓
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-[#800000] mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f6efaa] flex items-center justify-center text-[#800000] text-sm font-bold mt-0.5">
                      +
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Documents Section */}
          {product.documents && product.documents.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#800000] mb-8 text-center">
                Product <span className="text-[#fa3035]">Documentation</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#f6efaa]">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fa3035] to-[#800000] flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                        <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#800000]">Technical Documentation</h3>
                      <p className="text-sm text-gray-600">Download certified reports and product specifications</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.documents.map((doc, index) => (
                      <a
                        key={index}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-[#f6efaa]/10 rounded-xl hover:from-[#f6efaa]/20 hover:to-[#fa3035]/10 transition-all duration-300 group border border-gray-200 hover:border-[#fa3035] hover:shadow-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#800000] group-hover:text-[#fa3035] transition-colors">
                            {getDocumentIcon(doc.type)}
                          </div>
                          <div>
                            <span className="font-bold text-gray-800 group-hover:text-[#fa3035] transition-colors block">
                              {doc.name}
                            </span>
                            <span className="text-xs text-gray-500">PDF Document</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-[#fa3035] group-hover:translate-x-1 transition-transform">
                          <span className="text-sm font-semibold hidden sm:inline">Download</span>
                          <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm text-blue-800">
                        All documents are verified and certified. For additional technical documentation or customized reports, please contact our technical team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.name}
      />
    </>
  );
}