'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import LoadingSpinner from '@/components/LoadingSpinner';
import Header from '@/components/Header';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart, isLoading } = useCart();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#e4d7bc]/20 via-white to-[#f6efaa]/10">
        <Header />
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-[#f6efaa] text-[#800000] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Shopping Cart
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#800000] mb-6">
              Your Cart
            </h1>
          </div>
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#e4d7bc]/20 via-white to-[#f6efaa]/10">
        <Header />
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-[#f6efaa] text-[#800000] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Shopping Cart
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#800000] mb-6">
              Your Cart
            </h1>
          </div>
 
          <div className="text-center py-12">
            <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 text-lg">Add some premium products to get started!</p>
            <Link
              href="/products"
              className="bg-[#fa3035] text-white px-8 py-4 rounded-full hover:bg-[#800000] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl inline-block"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
 <div className="min-h-screen bg-gradient-to-br from-[#e4d7bc]/20 via-white to-[#f6efaa]/10">
      <Header />
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#f6efaa] text-[#800000] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Shopping Cart
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#800000] mb-6">
            Your Cart
          </h1>
          <p className="text-lg text-gray-700">
            Review your selected premium Latex products before checkout
          </p>
        </div>
 
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {cart.items.map((item, index) => (
                <div key={item.id} className={`p-6 ${index !== cart.items.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="flex gap-6">
                    <div className="relative w-24 h-24 flex-shrink-0 bg-[#e4d7bc] rounded-xl overflow-hidden">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className="object-contain p-3"
                        sizes="96px"
                      />
                    </div>
 
                    <div className="flex-1">
                      <Link href={`/products/${item.id}`}>
                        <h3 className="text-xl font-bold text-[#800000] hover:text-[#fa3035] transition-colors mb-2">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-3">Premium Quality Product</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center border-2 border-gray-200 rounded-full">
                            <button
                              onClick={() => updateQuantity(Number(item.id), item.quantity - 1)}
                              className="px-3 py-2 text-gray-600 hover:bg-[#f6efaa] hover:text-[#800000] transition-colors rounded-l-full"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 py-2 text-gray-800 font-semibold min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(Number(item.id), item.quantity + 1)}
                              className="px-3 py-2 text-gray-600 hover:bg-[#f6efaa] hover:text-[#800000] transition-colors rounded-r-full"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
 
                          <button
                            onClick={() => removeFromCart(Number(item.id))}
                            className="p-2.5 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
 
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Price per item</p>
                          <p className="text-xl font-bold text-[#800000]">
                            ${item.price?.toFixed(2) || '0.00'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
 
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Subtotal ({item.quantity} items)</span>
                      <span className="text-2xl font-bold text-[#800000]">
                        ${(item?.price || 0 * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
 
            {cart.items.length > 0 && (
              <div className="mt-6 flex justify-between items-center">
                <Link
                  href="/products"
                  className="text-[#fa3035] hover:text-[#800000] transition-colors font-semibold flex items-center gap-2"
                >
                  ← Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800 transition-colors font-semibold"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </div>
 
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 sticky top-8">
              <h2 className="text-2xl font-bold text-[#800000] mb-6">Order Summary</h2>
 
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({cart.items.length} items)</span>
                  <span className="font-semibold">${cart.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span className="font-semibold">$0.00</span>
                </div>
                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-bold text-[#800000]">
                    <span>Total</span>
                    <span>${cart.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
 
              <Link
                href="/checkout"
                className="w-full bg-gradient-to-r from-[#fa3035] to-[#800000] text-white py-4 px-6 rounded-full hover:shadow-2xl transition-all duration-300 font-bold text-lg text-center block mb-4"
              >
                Proceed to Checkout
              </Link>
 
              <Link
                href="/products"
                className="w-full border-2 border-[#800000] text-[#800000] py-3.5 px-6 rounded-full hover:bg-[#800000] hover:text-white transition-all duration-300 font-semibold text-center block"
              >
                Add More Products
              </Link>
 
              {/* Trust Badge */}
              <div className="mt-6 p-4 bg-[#f6efaa]/20 rounded-xl">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-600">✓</span>
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 mt-1">
                  <span className="text-green-600">✓</span>
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}