'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import ContactModal from '@/components/ContactModal';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { ShoppingCart, Heart, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { cart } = useCart();
  const { wishlist } = useWishlist();

  // Get unique categories from products
  const categories = Array.from(new Set(products.map(p => p.category)));

  // Group products by category for dropdown
  const productsByCategory = categories.reduce((acc, category) => {
    acc[category] = products.filter(p => p.category === category);
    return acc;
  }, {} as Record<string, typeof products>);

  // Calculate total items in cart
  const cartItemsCount = cart.items.reduce((total, item) => total + item.quantity, 0);
  const wishlistItemsCount = wishlist.length;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse enter with slight delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsProductsOpen(true);
  };

  // Handle mouse leave with slight delay to allow moving to dropdown
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 150);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'py-2'
          : 'py-3'
          }`}
      >
        {/* Glassmorphism Container */}
        <div className="container mx-auto px-4 lg:px-8">
          <nav
            className={`relative backdrop-blur-xl bg-gradient-to-r from-[#800000]/95 via-[#fa3035]/95 to-[#800000]/95 rounded-2xl shadow-2xl border border-white/20 transition-all duration-300 ${isScrolled
              ? 'shadow-[0_8px_32px_rgba(250,48,53,0.4)]'
              : 'shadow-[0_20px_60px_rgba(250,48,53,0.5)]'
              }`}
            style={{
              boxShadow: '0 8px 32px 0 rgba(250, 48, 53, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)',
            }}
          >
            {/* Gradient Overlay for 3D effect */}

            <div className="relative px-6 py-4 flex items-center justify-between">
              {/* Logo with White Box - Overflowing Top and Bottom */}
              <Link href="/" className="flex items-center z-10 -my-8">
                <div className="bg-white rounded-xl shadow-2xl px-6 py-6 border-2 border-gray-100">
                  <Image
                    src="/logo.png"
                    alt="Primerival International Logo"
                    width={168}
                    height={126}
                    className="object-contain h-20 w-auto"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8 z-10">
                <Link
                  href="/"
                  className="text-white hover:text-[#f6efaa] transition-all duration-300 font-semibold text-base relative group font-pally"
                >
                  <span className="relative z-10">Home</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f6efaa] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {/* <Link 
                  href="/process" 
                  className="text-white hover:text-[#f6efaa] transition-all duration-300 font-semibold text-base relative group font-pally"
                >
                  <span className="relative z-10">Process</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f6efaa] transition-all duration-300 group-hover:w-full"></span>
                </Link> */}

                {/* Products Dropdown */}
                <div
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="text-white hover:text-[#f6efaa] transition-all duration-300 font-semibold text-base flex items-center space-x-1 relative group font-pally">
                    <span className="relative z-10">Products</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f6efaa] transition-all duration-300 group-hover:w-full"></span>
                  </button>

                  {isProductsOpen && (
                    <div
                      className="absolute top-full left-0 mt-3 w-80 backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl border border-gray-100 py-3 max-h-[80vh] overflow-y-auto"
                      style={{
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* View All Products */}
                      <Link
                        href="/products"
                        className="block px-5 py-3 text-[#fa3035] font-bold hover:bg-gradient-to-r hover:from-[#f6efaa]/30 hover:to-[#fa3035]/10 transition-all duration-300 border-b border-gray-100 font-pally"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        View All Products →
                      </Link>

                      {/* Products by Category */}
                      {categories.map((category) => (
                        <div key={category} className="py-2">
                          {productsByCategory[category].map((product) => (
                            <Link
                              key={product.id}
                              href={`/products/${product.slug}`}
                              className="block px-5 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#f6efaa]/20 hover:to-transparent hover:text-[#fa3035] transition-all duration-300 font-pally"
                              onClick={() => setIsProductsOpen(false)}
                            >
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  className="text-white hover:text-[#f6efaa] transition-all duration-300 font-semibold text-base relative group font-pally"
                >
                  <span className="relative z-10">About</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f6efaa] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {/* <Link 
                  href="/mission" 
                  className="text-white hover:text-[#f6efaa] transition-all duration-300 font-semibold text-base relative group font-pally"
                >
                  <span className="relative z-10">Our Mission</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f6efaa] transition-all duration-300 group-hover:w-full"></span>
                </Link> */}

                {/* Cart and Wishlist Icons */}
                <div className="flex items-center space-x-3">
                  {/* Wishlist Icon */}
                  {/* <Link
                    href="/wishlist"
                    className="relative bg-white/20 backdrop-blur-sm text-white p-2.5 rounded-full hover:bg-white hover:text-[#800000] transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30 hover:scale-105 group"
                  >
                    <Heart className="w-5 h-5" />
                    {wishlistItemsCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#fa3035] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                        {wishlistItemsCount}
                      </span>
                    )}
                  </Link> */}

                  {/* Cart Icon */}
                  {/* <Link
                    href="/cart"
                    className="relative bg-white/20 backdrop-blur-sm text-white p-2.5 rounded-full hover:bg-white hover:text-[#800000] transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30 hover:scale-105 group"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {cartItemsCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#fa3035] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                        {cartItemsCount}
                      </span>
                    )}
                  </Link> */}
                  <Link
                    href="/get-quote"
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-2.5 rounded-full hover:bg-white hover:text-[#800000] transition-all duration-300 font-bold shadow-lg hover:shadow-xl border border-white/30 hover:scale-105 font-pally flex items-center gap-2"
                  >
                    Get Quote
                  </Link>
                  {/* Contact Button */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-2.5 rounded-full hover:bg-white hover:text-[#800000] transition-all duration-300 font-bold shadow-lg hover:shadow-xl border border-white/30 hover:scale-105 font-pally flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Contact
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white focus:outline-none p-2 z-10 hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden px-6 pb-4 space-y-1 border-t border-white/20 pt-4 max-h-[70vh] overflow-y-auto relative z-10">
                <Link
                  href="/"
                  className="block text-white hover:text-[#f6efaa] hover:bg-white/10 transition-all duration-300 font-semibold py-3 px-3 rounded-lg font-pally"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/process"
                  className="block text-white hover:text-[#f6efaa] hover:bg-white/10 transition-all duration-300 font-semibold py-3 px-3 rounded-lg font-pally"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Process
                </Link>

                <div>
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="w-full text-left text-white hover:text-[#f6efaa] hover:bg-white/10 transition-all duration-300 font-semibold py-3 px-3 rounded-lg flex items-center justify-between font-pally"
                  >
                    <span>Products</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isProductsOpen && (
                    <div className="pl-4 space-y-1 mt-1 bg-white/5 rounded-lg p-2">
                      <Link
                        href="/products"
                        className="block text-[#f6efaa] font-bold hover:text-white transition-colors py-2.5 px-3 rounded-lg hover:bg-white/10 font-pally"
                        onClick={() => {
                          setIsProductsOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        View All Products →
                      </Link>

                      {categories.map((category) => (
                        <div key={category} className="py-2">
                          <div className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-1 px-3 font-pally">
                            {category}
                          </div>
                          {productsByCategory[category].map((product) => (
                            <Link
                              key={product.id}
                              href={`/products/${product.slug}`}
                              className="block text-sm text-gray-200 hover:text-[#f6efaa] hover:bg-white/10 transition-colors py-1.5 px-3 rounded-lg font-pally"
                              onClick={() => {
                                setIsProductsOpen(false);
                                setIsMenuOpen(false);
                              }}
                            >
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  className="block text-white hover:text-[#f6efaa] hover:bg-white/10 transition-all duration-300 font-semibold py-3 px-3 rounded-lg font-pally"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/mission"
                  className="block text-white hover:text-[#f6efaa] hover:bg-white/10 transition-all duration-300 font-semibold py-3 px-3 rounded-lg font-pally"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Mission
                </Link>

                {/* Mobile Cart and Wishlist */}
                <div className="flex items-center space-x-3 pt-2">
                  <Link
                    href="/wishlist"
                    className="flex-1 relative bg-white/20 backdrop-blur-sm text-white py-3 rounded-full hover:bg-white hover:text-[#800000] transition-all duration-300 font-bold border border-white/30 font-pally flex items-center justify-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Heart className="w-4 h-4" />
                    Wishlist
                    {wishlistItemsCount > 0 && (
                      <span className="bg-[#fa3035] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {wishlistItemsCount}
                      </span>
                    )}
                  </Link>

                  <Link
                    href="/cart"
                    className="flex-1 relative bg-white/20 backdrop-blur-sm text-white py-3 rounded-full hover:bg-white hover:text-[#800000] transition-all duration-300 font-bold border border-white/30 font-pally flex items-center justify-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Cart
                    {cartItemsCount > 0 && (
                      <span className="bg-[#fa3035] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItemsCount}
                      </span>
                    )}
                  </Link>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-white/20 backdrop-blur-sm text-white px-7 py-3 rounded-full hover:bg-white hover:text-[#800000] transition-all duration-300 font-bold mt-4 border border-white/30 font-pally flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Contact Us
                </button>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName=""
      />
    </>
  );
}