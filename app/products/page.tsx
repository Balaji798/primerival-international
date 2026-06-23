import Header from '@/components/Header';
import ProductsGrid from '@/components/products/ProductsGrid';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Products | Primerival International Pte Ltd',
  description: 'Explore our premium range of latex products including mattress, pillow, gloves and folding wagon.',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductsGrid />
      <Footer />
    </div>
  );
}