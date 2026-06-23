'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  initial: string;
  designation: string;
  company: string;
  location: string;
  product: string;
  date: string;
  rating: number;
  review: string;
  color: string;
  image?: string;
  orderSize?: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Somchai Chakrit',
    initial: 'S',
    designation: 'Procurement Manager',
    company: 'Bangkok Medical Supplies Co.',
    location: 'Bangkok, Thailand',
    product: 'PS54Y Latex Gloves',
    date: '27 May 2024',
    rating: 5,
    review: 'Exceptional quality latex gloves! The powder-free design and medical grade certification meet all our healthcare requirements. Consistent quality and reliable delivery have made Primerival International Pte Ltd our preferred supplier for medical disposables.',
    color: 'from-[#f6efaa] to-[#fef3c7]',
    orderSize: '10,000 boxes',
    verified: true,
  },
  {
    id: 2,
    name: 'Nalika Thammanoon',
    initial: 'N',
    designation: 'Hotel Operations Director',
    company: 'Luxury Hotels Group Thailand',
    location: 'Phuket, Thailand',
    product: 'Premium Latex Pillows',
    date: '16 Aug 2024',
    rating: 5,
    review: 'Outstanding quality pillows! Our guests consistently praise the comfort and ergonomic support. The breathable design and hypoallergenic properties have significantly improved guest satisfaction. Highly recommended for luxury hospitality!',
    color: 'from-gray-50 to-[#f6efaa]/30',
    orderSize: '500 units',
    verified: true,
  },
  {
    id: 3,
    name: 'Kamon Vongvan',
    initial: 'K',
    designation: 'CEO',
    company: 'Thai Comfort Living',
    location: 'Chiang Mai, Thailand',
    product: 'Natural Latex Mattress',
    date: '12 Sep 2024',
    rating: 5,
    review: 'Perfect spinal alignment and exceptional comfort! The zero motion transfer feature is ideal for couples. Our customers report improved sleep quality and reduced back pain. Primerival International Pte Ltd mattresses have transformed our product line!',
    color: 'from-[#fef3c7] to-white',
    orderSize: '200 units',
    verified: true,
  },
  {
    id: 4,
    name: 'Siriporn Jantarak',
    initial: 'S',
    designation: 'Quality Assurance Manager',
    company: 'Thai Healthcare Solutions',
    location: 'Pattaya, Thailand',
    product: 'Medical Grade Latex Gloves',
    date: '03 Oct 2024',
    rating: 5,
    review: 'Superior medical gloves that exceed industry standards! The polymer coating provides excellent durability while maintaining sensitivity. Perfect for our medical facilities. Professional team with outstanding technical support!',
    color: 'from-white to-gray-50',
    orderSize: '15,000 boxes',
    verified: true,
  },
  {
    id: 5,
    name: 'Anan Sukhumvit',
    initial: 'A',
    designation: 'Facilities Manager',
    company: 'Bangkok Royal Hospital',
    location: 'Bangkok, Thailand',
    product: 'Disposable Latex Gloves',
    date: '21 Oct 2024',
    rating: 5,
    review: 'Excellent protection and comfort for our medical staff! The ambidextrous design and non-sterile specification are perfect for general medical use. Consistent quality and competitive pricing. Primerival International Pte Ltd is our trusted partner!',
    color: 'from-gray-50 to-[#fef3c7]',
    orderSize: '8,000 boxes',
    verified: true,
  },
  {
    id: 6,
    name: 'Malee Srisuk',
    initial: 'M',
    designation: 'Product Development Head',
    company: 'Siam Sleep Wellness',
    location: 'Krabi, Thailand',
    product: 'Latex Mattress & Pillows',
    date: '08 Nov 2024',
    rating: 5,
    review: 'Outstanding sleep products! The natural latex material and orthopedic support have received excellent customer feedback. The durability and eco-friendly aspects align perfectly with our brand values. Highly recommend Primerival International Pte Ltd!',
    color: 'from-[#f6efaa]/30 to-white',
    orderSize: '150 units',
    verified: true,
  },
];

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#f6efaa]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#fa3035] text-white px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              Client Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              What Our Clients{' '}
              <span className="text-[#fa3035]">Say</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Don't just take our word for it. Here's what our valued partners across India have to say about working with us.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
          >
            {currentTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:shadow-2xl hover:border-[#fa3035]/30 transition-all duration-300 flex flex-col"
              >
                {/* Header with Light Gradient */}
                <div className={`bg-gradient-to-br ${testimonial.color} p-6 relative overflow-hidden border-b-2 border-gray-100`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full -mr-12 -mt-12"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-white rounded-full -ml-10 -mb-10"></div>
                  </div>
                  
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Avatar */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#fa3035] to-[#fa3035]/80 flex items-center justify-center text-2xl font-bold text-white border-2 border-white shadow-lg">
                        {testimonial.initial}
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                        <p className="text-xs text-gray-600">{testimonial.designation}</p>
                      </div>
                    </div>

                    {/* Verified Badge */}
                    {testimonial.verified && (
                      <div className="bg-green-500 rounded-full p-1.5">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Company Info */}
                  {/* <div className="mt-4 text-sm text-gray-700">
                    <div className="font-semibold">{testimonial.company}</div>
                    <div className="flex items-center space-x-1 mt-1 text-gray-600">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">{testimonial.location}</span>
                    </div>
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#fa3035]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
                    "{testimonial.review}"
                  </p>

                  {/* Footer Info */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                   

                   

                  
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-6">
          {/* Previous Button */}
          <button
            onClick={prevPage}
            disabled={totalPages <= 1}
            className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-[#fa3035] hover:text-[#fa3035] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Indicator */}
          <div className="flex items-center space-x-3">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentPage === index
                    ? 'w-12 h-3 bg-[#fa3035]'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextPage}
            disabled={totalPages <= 1}
            className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-[#fa3035] hover:text-[#fa3035] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#fa3035] transition-colors">
            <div className="text-4xl font-bold text-[#fa3035] mb-2">500+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#fa3035] transition-colors">
            <div className="text-4xl font-bold text-[#fa3035] mb-2">99%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#fa3035] transition-colors">
            <div className="text-4xl font-bold text-[#fa3035] mb-2">5 ⭐</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#fa3035] transition-colors">
            <div className="text-4xl font-bold text-[#fa3035] mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6 text-lg">
            Join our growing family of satisfied partners across Thailand
          </p>
          <button className="bg-[#fa3035] text-white px-10 py-4 rounded-full hover:bg-[#fa3035]/90 hover:shadow-xl transition-all duration-300 font-bold text-lg transform hover:-translate-y-1">
            Share Your Experience
          </button>
        </div>
      </div>
    </section>
  );
}