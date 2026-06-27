'use client';

import { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function ContactModal({ isOpen, onClose, productName }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    productInterest: productName || '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full my-4 sm:my-8 relative border-2 border-gray-100 max-h-[95vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="sticky top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 ml-auto w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10 float-right"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="bg-gradient-to-br from-white via-[#f6efaa]/30 to-white border-b-2 border-gray-100 p-4 sm:p-6 md:p-8 rounded-t-2xl sm:rounded-t-3xl clear-both">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800 font-pally">Get in Touch</h2>
                <p className="text-sm sm:text-base text-gray-600">
                  {productName ? `Interested in ${productName}? ` : ''}
                  Fill out the form and we'll get back to you within 24 business hours.
                </p>
              </div>

              {/* Form Content */}
              <div className="p-4 sm:p-6 md:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 sm:py-8"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 font-pally">Thank You!</h3>
                    <p className="text-sm sm:text-base text-gray-600">We'll be in touch shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 sm:mb-2 font-pally">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border-2 border-gray-200 focus:border-[#fa3035] focus:outline-none text-gray-800 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 sm:mb-2 font-pally">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border-2 border-gray-200 focus:border-[#fa3035] focus:outline-none text-gray-800 transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 sm:mb-2 font-pally">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border-2 border-gray-200 focus:border-[#fa3035] focus:outline-none text-gray-800 transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 sm:mb-2 font-pally">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border-2 border-gray-200 focus:border-[#fa3035] focus:outline-none text-gray-800 transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    {productName && (
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 sm:mb-2 font-pally">
                          Product of Interest
                        </label>
                        <input
                          type="text"
                          name="productInterest"
                          value={formData.productInterest}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-800"
                          readOnly
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 sm:mb-2 font-pally">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border-2 border-gray-200 focus:border-[#fa3035] focus:outline-none text-gray-800 transition-colors resize-none"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                      <button
                        type="button"
                        onClick={onClose}
                        className="w-full sm:flex-1 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-300 font-pally"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="w-full sm:flex-1 bg-[#fa3035] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-bold hover:shadow-xl hover:bg-[#fa3035]/90 transition-all duration-300 font-pally"
                      >
                        Send Inquiry
                      </button>
                    </div>

                    <p className="text-center text-[10px] sm:text-xs text-gray-600 pt-2">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy-policy" className="text-[#fa3035] hover:underline font-semibold">Privacy Policy</a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}