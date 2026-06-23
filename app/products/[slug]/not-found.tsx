import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-16 min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-8xl mb-8">🥚</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#800000] mb-6">
              Product Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, we couldn't find the product you're looking for. It may have been moved or doesn't exist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products"
                className="bg-gradient-to-r from-[#fa3035] to-[#800000] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                View All Products
              </Link>
              <Link 
                href="/"
                className="border-2 border-[#800000] text-[#800000] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#800000] hover:text-white transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}