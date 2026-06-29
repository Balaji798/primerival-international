'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { products } from '@/data/products';

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    selectedProducts: [] as string[],
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleProductToggle = (productName: string) => {
    setFormData(prev => ({
      ...prev,
      selectedProducts: prev.selectedProducts.includes(productName)
        ? prev.selectedProducts.filter(p => p !== productName)
        : [...prev.selectedProducts, productName]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          products: formData.selectedProducts.join(', '),
          message: formData.message,
        },
                { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        selectedProducts: [],
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send quote request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#800000] mb-4 font-pally">
              Get a Quote
            </h1>
            <p className="text-gray-600 text-lg">
              Fill out the form below and we'll get back to you with a customized quote for your needs.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            {submitStatus === 'success' && (
              <div className="mb-8 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">Thank you! Your quote request has been sent successfully. We'll get back to you soon.</span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="font-semibold">{errorMessage}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#fa3035] focus:ring-2 focus:ring-[#fa3035]/20 transition-all outline-none"
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
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#fa3035] focus:ring-2 focus:ring-[#fa3035]/20 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone and Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#fa3035] focus:ring-2 focus:ring-[#fa3035]/20 transition-all outline-none"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#fa3035] focus:ring-2 focus:ring-[#fa3035]/20 transition-all outline-none"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              {/* Product Interest - Multiple Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Product Interest * (Select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                  {products.map((product) => (
                    <label
                      key={product.id}
                      className={`flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        formData.selectedProducts.includes(product.name)
                          ? 'border-[#fa3035] bg-[#fff5f5]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.selectedProducts.includes(product.name)}
                        onChange={() => handleProductToggle(product.name)}
                        className="w-5 h-5 text-[#fa3035] rounded border-gray-300 focus:ring-[#fa3035] focus:ring-2"
                      />
                      <span className="ml-3 text-sm font-medium text-gray-700">{product.name}</span>
                    </label>
                  ))}
                </div>
                {formData.selectedProducts.length === 0 && (
                  <p className="mt-2 text-sm text-red-500">Please select at least one product</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#fa3035] focus:ring-2 focus:ring-[#fa3035]/20 transition-all outline-none resize-none"
                  placeholder="Please describe your requirements, quantity needed, delivery timeline, and any other details..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || formData.selectedProducts.length === 0}
                className="w-full bg-gradient-to-r from-[#800000] via-[#fa3035] to-[#800000] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 font-pally"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Quote Request'
                )}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600">
                Prefer to contact us directly? Email us at{' '}
                <a href="mailto:Pumtad@primerivalinternational.com" className="text-[#fa3035] font-semibold hover:underline">
                  Pumtad@primerivalinternational.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}