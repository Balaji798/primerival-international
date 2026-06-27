import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 lg:px-8 py-30">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#800000] mb-4 font-pally">
              Refund Policy
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#800000] via-[#fa3035] to-[#800000] mx-auto"></div>
          </div>

          {/* Custom & B2B Bulk Orders */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-[#fff5f5] to-white rounded-2xl p-8 border-l-4 border-[#fa3035]">
              <h2 className="text-2xl font-bold text-[#800000] mb-4 font-pally">
                Custom & B2B Bulk Orders
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Custom orders, tailor-made specifications, private label contracts, or bulk industrial-scale wholesale purchases are <span className="font-semibold text-[#fa3035]">strictly non-refundable, non-exchangeable, and non-returnable</span> once mass production has started.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Exceptions are only made for clear, verifiable structural manufacturing defects or significant deviations from agreed-upon technical blueprints, proven through documentation and formal evaluation.
              </p>
            </div>
          </div>

          {/* Refund Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#800000] mb-6 font-pally flex items-center gap-3">
              <span className="w-10 h-10 bg-[#fa3035] rounded-full flex items-center justify-center text-white text-lg">🔄</span>
              Refund Process
            </h2>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#800000] to-[#fa3035] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#800000] mb-2">Inspection Protocol</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Returned items undergo structural and physical examination by quality control specialists.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#800000] to-[#fa3035] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#800000] mb-2">Status Notification</h3>
                  <p className="text-gray-700 leading-relaxed">
                    An official email confirms receipt of returned goods and informs of approval or rejection based on return criteria.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#800000] to-[#fa3035] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#800000] mb-2">Credit Initiation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Approved returns trigger a credit reversal to the original payment method or corporate bank account within <span className="font-semibold">7-10 business days</span>, depending on banking processing cycles and transaction policies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Return Shipping Costs */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#800000] mb-6 font-pally flex items-center gap-3">
              <span className="w-10 h-10 bg-[#fa3035] rounded-full flex items-center justify-center text-white text-lg">📦</span>
              Return Shipping Costs
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Customer Responsibility */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#fa3035] transition-all duration-300">
                <div className="w-12 h-12 bg-[#fff5f5] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#fa3035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#800000] mb-3">Customer Responsibility</h3>
                <p className="text-gray-700 leading-relaxed">
                  The customer is responsible for organizing logistics and paying for shipping and freight handling costs when returning an item.
                </p>
              </div>

              {/* Non-Refundable Expenditures */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#fa3035] transition-all duration-300">
                <div className="w-12 h-12 bg-[#fff5f5] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#fa3035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#800000] mb-3">Non-Refundable Expenditures</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Initial shipping fees, export tariffs, customs clearance duties, and logistics costs are non-refundable.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If a refund is approved, the cost of return freight handling incurred by the factory will be deducted from the final refund amount.
                </p>
              </div>
            </div>

            {/* Recommendation Box */}
            <div className="mt-6 bg-[#f6efaa]/20 border border-[#f6efaa] rounded-xl p-4">
              <p className="text-gray-700 flex items-start gap-3">
                <span className="text-xl">💡</span>
                <span className="font-medium">Recommendation:</span>
                <span>We recommend using a traceable freight carrier and purchasing shipping insurance for high-value cargo.</span>
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-[#800000] via-[#fa3035] to-[#800000] rounded-2xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-3 font-pally">Have Questions About Our Refund Policy?</h3>
            <p className="mb-4 opacity-90">Our team is here to help clarify any concerns you may have.</p>
            <a 
              href="mailto:Pumtad@primerivalinternational.com" 
              className="inline-block bg-white text-[#800000] px-8 py-3 rounded-full font-bold hover:bg-[#f6efaa] transition-all duration-300 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default RefundPolicy