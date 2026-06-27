import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-30">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#800000] mb-4 font-pally">
              Accessibility Statement
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#fa3035] to-[#800000] rounded-full"></div>
          </div>

          {/* Our Commitment Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6 font-pally">
              Our Commitment
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#fa3035]">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                At Primerival International, we are committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our website is designed to be inclusive and accessible to all users, regardless of their abilities or disabilities. We strive to provide an equal experience for all visitors.
              </p>
            </div>
          </section>

          {/* Conformance Status Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6 font-pally">
              Conformance Status
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#800000]">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We aim to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible to people with disabilities.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Our efforts to ensure accessibility include:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2 ml-4">
                <li>Providing alternative text for images</li>
                <li>Ensuring proper color contrast ratios</li>
                <li>Making all functionality available from a keyboard</li>
                <li>Providing clear and consistent navigation</li>
                <li>Using semantic HTML markup</li>
                <li>Ensuring responsive design for all screen sizes</li>
              </ul>
            </div>
          </section>

          {/* Feedback Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6 font-pally">
              Feedback
            </h2>
            <div className="bg-gradient-to-r from-[#fff5f5] to-white rounded-2xl p-8 border border-[#fa3035]/20">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                If you encounter any accessibility barriers on our website or have suggestions for improvement, please contact us. We value your feedback and will use it to enhance our accessibility efforts.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>Email:</strong>{' '}
                <a href="mailto:Pumtad@primerivalinternational.com" className="text-[#fa3035] font-semibold hover:underline">
                  Pumtad@primerivalinternational.com
                </a>
              </p>
            </div>
          </section>

          {/* Last Updated */}
          {/* <div className="text-center text-gray-500 text-sm mt-12 pt-8 border-t border-gray-200">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Accessibility