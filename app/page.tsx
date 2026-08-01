import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import CommitmentSection from '@/components/CommitmentSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProductsSection />
      <CommitmentSection />
      {/* <TestimonialsSection /> */}
      <Footer />
    </div>
  );
}

