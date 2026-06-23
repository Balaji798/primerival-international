/* eslint-disable react/no-unescaped-entities */
'use client';

import Link from 'next/link';
import { CheckCircle, ShoppingBag, Truck, Shield } from 'lucide-react';

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e4d7bc]/20 via-white to-[#f6efaa]/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-[#f6efaa] text-[#800000] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Order Confirmation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#800000] mb-6">
              Order Successful!
            </h1>
            <p className="text-lg text-gray-700">
              Thank you for your order. We've received your purchase and will process it shortly.
            </p>
          </div>

          {/* Success Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 mb-8">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-[#800000] mb-4">Thank You for Your Order!</h2>
              <p className="text-gray-600 text-lg">
                Your order has been successfully placed and is now being processed.
              </p>
            </div>

            {/* Order Details */}
            <div className="bg-[#f6efaa]/20 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-[#800000] mb-4">Order Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Order Number</p>
                  <p className="font-semibold text-gray-800">#ORD-2024-1234</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Order Date</p>
                  <p className="font-semibold text-gray-800">{new Date().toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Payment Method</p>
                  <p className="font-semibold text-gray-800">Secure Payment</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Status</p>
                  <p className="font-semibold text-green-600">Processing</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f6efaa] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-8 h-8 text-[#800000]" />
                </div>
                <h4 className="font-bold text-[#800000] mb-2">Fast Delivery</h4>
                <p className="text-gray-600 text-sm">Your order will be delivered within 3-5 business days</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f6efaa] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-[#800000]" />
                </div>
                <h4 className="font-bold text-[#800000] mb-2">Quality Guaranteed</h4>
                <p className="text-gray-600 text-sm">All products are quality checked and guaranteed fresh</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f6efaa] rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-[#800000]" />
                </div>
                <h4 className="font-bold text-[#800000] mb-2">Customer Support</h4>
                <p className="text-gray-600 text-sm">24/7 support for all your queries and concerns</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-gradient-to-r from-[#fa3035] to-[#800000] text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 font-bold text-lg shadow-lg text-center"
              >
                <ShoppingBag className="w-5 h-5 inline mr-2" />
                Continue Shopping
              </Link>
              
              <Link
                href="/contact"
                className="border-2 border-[#800000] text-[#800000] px-8 py-4 rounded-full hover:bg-[#800000] hover:text-white transition-all duration-300 font-bold text-lg text-center"
              >
                Contact Support
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#800000] mb-6 text-center">What's Next?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#fa3035] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Order Confirmation</h4>
                  <p className="text-gray-600">You'll receive an email confirmation shortly with your order details.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#fa3035] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Order Processing</h4>
                  <p className="text-gray-600">Our team will carefully process your order and prepare it for shipment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#fa3035] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Shipping & Delivery</h4>
                  <p className="text-gray-600">Your order will be shipped and delivered within the estimated timeframe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}