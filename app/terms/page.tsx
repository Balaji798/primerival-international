import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Terms = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="container mx-auto px-4 lg:px-8 py-30">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#800000] mb-4 font-pally">
                            Terms & Conditions
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#fa3035] to-[#800000] mx-auto rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-10">
                        {/* Acceptance of Terms */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#800000] mb-4 font-pally">
                                Acceptance of Terms
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                By accessing and using the Prime International website, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our website or services.
                            </p>
                        </section>

                        {/* Intellectual Property Rights */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#800000] mb-4 font-pally">
                                Intellectual Property Rights
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Prime International or its content suppliers and is protected by international copyright laws. Unauthorized use of any material from this website is strictly prohibited.
                            </p>
                        </section>

                        {/* Product Accuracy & Specifications */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#800000] mb-4 font-pally">
                                Product Accuracy & Specifications
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                While we strive to ensure that all product descriptions, specifications, and images on our website are accurate, errors may occur. We reserve the right to correct any errors and to update information at any time without prior notice. Product colors may vary slightly due to monitor settings and lighting conditions.
                            </p>
                        </section>

                        {/* Governing Law */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#800000] mb-4 font-pally">
                                Governing Law
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                These comprehensive Terms and Conditions, along with any operational policies or disputes arising from your digital interaction with this website, are governed by, interpreted, and enforced in accordance with the laws of the jurisdiction where Prime International is registered. Any legal actions, claims, or contractual disputes relating directly or indirectly to these terms will be subject to the exclusive legal jurisdiction of the courts in that jurisdiction.
                            </p>
                        </section>

                        {/* Last Updated */}
                        <div className="pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-500">
                                Last Updated: June 2026
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Terms