import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import CommitmentSection from '@/components/CommitmentSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProductsSection />
      <CommitmentSection />
      {/* <TestimonialsSection /> */}
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

