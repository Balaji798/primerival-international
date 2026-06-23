'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/useCart';
import { CheckoutForm } from '@/types';
import { ArrowLeft, CreditCard, Shield, Truck, Lock } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<CheckoutForm>({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async () => {
    setIsSubmitting(true);
    const items = cart.items.map((item) => {
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }
    })
    try {
      const response =
        await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            items,
            user: {
              name: formData.name,
              email: formData.email,
              address: formData.address,
              city: formData.city,
              zipCode: formData.zipCode,
              country: formData.country
            },
          }),
        });


      const data = await response.json();

      if (!data.url) {
        throw new Error('Failed to create checkout session');
      }

      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

      if (!stripe) {
        throw new Error('Stripe failed to load');
      }



      if (data.error) {
        console.error('Stripe redirect error:', data.error);
        alert('Payment failed. Please try again.');
      }
      // redirect directly
      window.location.href = data.url;
    } catch (error) {
      console.error('Buy now error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#e4d7bc]/20 via-white to-[#f6efaa]/10">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-[#f6efaa] text-[#800000] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Checkout
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#800000] mb-6">
              Your Cart is Empty
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Add some premium products to proceed with checkout
            </p>
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
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <Link href="/cart" className="inline-flex items-center text-[#fa3035] hover:text-[#800000] transition-colors font-semibold mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cart
        </Link>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#f6efaa] text-[#800000] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Checkout
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#800000] mb-6">
            Secure Checkout
          </h1>
          <p className="text-lg text-gray-700">
            Complete your order with our secure and simple checkout process
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Billing Form */}
          <div className="lg:col-span-2">

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#800000] mb-6">Billing Information</h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fa3035] focus:border-[#fa3035] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fa3035] focus:border-[#fa3035] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fa3035] focus:border-[#fa3035] transition-colors"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fa3035] focus:border-[#fa3035] transition-colors"
                      placeholder="New York"
                    />
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fa3035] focus:border-[#fa3035] transition-colors"
                      placeholder="10001"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fa3035] focus:border-[#fa3035] transition-colors"
                    placeholder="United States"
                  />
                </div>
              </div>

              {/* Security Badges */}
              <div className="mt-8 p-4 bg-[#f6efaa]/20 rounded-xl">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#800000]" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#800000]" />
                    <span>SSL Encrypted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#800000]" />
                    <span>Fast Delivery</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 bg-gradient-to-r from-[#fa3035] to-[#800000] text-white py-4 px-6 rounded-full hover:shadow-2xl transition-all duration-300 font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Processing Order...</>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Complete Order
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 sticky top-8">
              <h2 className="text-2xl font-bold text-[#800000] mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">{item.name}</h4>
                      <p className="text-gray-600 text-xs">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-[#800000]">
                      ${(item?.price ? item.price : 0 * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-gray-200 pt-4 space-y-3">
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

              {/* Trust Badge */}
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center gap-2 text-green-700">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold text-sm">100% Secure Checkout</span>
                </div>
                <p className="text-green-600 text-xs mt-1">Your payment information is encrypted and secure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}