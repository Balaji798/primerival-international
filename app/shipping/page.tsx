'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ShippingPolicy() {
    return (
        <div className="min-h-screen bg-white">

            <Header />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#800000] mb-4 font-pally">
                                Shipping Policy
                            </h1>
                            <p className="text-gray-600 text-lg">
                                Everything you need to know about our shipping process and delivery timelines.
                            </p>
                        </div>

                        {/* Content Card */}
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">

                            {/* Section 1: Order Processing Time */}
                            <div className="mb-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-gradient-to-r from-[#800000] to-[#fa3035] p-3 rounded-xl">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#800000] font-pally">
                                        Order Processing Time
                                    </h2>
                                </div>
                                <div className="pl-14 space-y-3">
                                    <p className="text-gray-700 leading-relaxed">
                                        Orders are processed within <span className="font-semibold text-[#fa3035]">3-7 business days</span> (excluding weekends and holidays) after order confirmation.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        For bulk B2B or OEM orders, lead times will be specified in the official quotation or proforma invoice.
                                    </p>
                                </div>
                            </div>

                            {/* Section 2: Domestic & International Shipping */}
                            <div className="mb-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-gradient-to-r from-[#800000] to-[#fa3035] p-3 rounded-xl">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#800000] font-pally">
                                        Domestic & International Shipping
                                    </h2>
                                </div>
                                <div className="pl-14 space-y-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        We offer both domestic shipping within Hong Kong and international ocean/air freight shipping worldwide.
                                    </p>

                                    {/* Domestic Shipping */}
                                    <div className="bg-gradient-to-r from-[#fff5f5] to-white p-5 rounded-xl border-l-4 border-[#fa3035]">
                                        <h3 className="font-bold text-[#800000] mb-2">Domestic Shipping</h3>
                                        <p className="text-gray-700">
                                            Estimated delivery within mainland Hong Kong is <span className="font-semibold">2-5 business days</span> from dispatch, depending on the provincial destination.
                                        </p>
                                    </div>

                                    {/* International Freight */}
                                    <div className="bg-gradient-to-r from-[#fff5f5] to-white p-5 rounded-xl border-l-4 border-[#fa3035]">
                                        <h3 className="font-bold text-[#800000] mb-2">International Freight</h3>
                                        <p className="text-gray-700 mb-3">
                                            We support various international standard commercial shipping arrangements including:
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className="bg-[#fa3035] text-white px-3 py-1 rounded-full text-sm font-semibold">EXW</span>
                                            <span className="bg-[#fa3035] text-white px-3 py-1 rounded-full text-sm font-semibold">FOB</span>
                                            <span className="bg-[#fa3035] text-white px-3 py-1 rounded-full text-sm font-semibold">CIF</span>
                                            <span className="bg-[#fa3035] text-white px-3 py-1 rounded-full text-sm font-semibold">DDU/DDP</span>
                                        </div>
                                        <p className="text-gray-700">
                                            International transit times vary by target country, chosen port of entry, and customs clearance. Tracking codes and Bill of Lading (B/L) data are provided upon port departure.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Shipping Rates */}
                            <div className="mb-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-gradient-to-r from-[#800000] to-[#fa3035] p-3 rounded-xl">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#800000] font-pally">
                                        Shipping Rates
                                    </h2>
                                </div>
                                <div className="pl-14 space-y-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        Shipping charges are calculated at checkout or manually by our sales team for bulk logistics (especially for heavy items like premium mattresses and folding wagons).
                                    </p>

                                    {/* Bulk & Industrial Logistics */}
                                    <div className="bg-gradient-to-r from-[#f6efaa]/20 to-white p-5 rounded-xl border-l-4 border-[#f6efaa]">
                                        <h3 className="font-bold text-[#800000] mb-2">Bulk & Industrial Logistics</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            For large-volume commercial distributions and high-density freight (e.g., natural latex mattresses, heavy-duty folding wagons), rates are not automated. Our dedicated logistics division manually calculates the most cost-effective freight rates based on total volume, weight, and delivery zone, providing a custom logistical quotation before cargo dispatch.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4: Damages & Missing Items */}
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-gradient-to-r from-[#800000] to-[#fa3035] p-3 rounded-xl">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#800000] font-pally">
                                        Damages & Missing Items
                                    </h2>
                                </div>
                                <div className="pl-14 space-y-3">
                                    <p className="text-gray-700 leading-relaxed">
                                        We are not liable for products damaged or lost by third-party carriers during transit.
                                    </p>
                                    <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
                                        <p className="text-gray-700 leading-relaxed">
                                            If your order arrives damaged, please take <span className="font-semibold text-red-600">clear photos of the packaging and product</span> and contact our support team within <span className="font-semibold text-red-600">48 hours of receipt</span> to assist with filing a claim.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <div className="bg-gradient-to-r from-[#800000]/5 to-[#fa3035]/5 p-6 rounded-xl">
                                    <p className="text-center text-gray-700 mb-2">
                                        Have questions about shipping?
                                    </p>
                                    <p className="text-center">
                                        <a href="mailto:info@primerival.com" className="text-[#fa3035] font-semibold hover:underline">
                                            Contact our support team
                                        </a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}