import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import ProductDetail from '@/components/products/ProductDetail';
import Footer from '@/components/Footer';
import { getProductBySlug, getAllProductSlugs } from '@/data/products';

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  
  // Debug: Log the slugs to make sure they're correct
  console.log('Generated slugs:', slugs);
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: `${product.name} | Prime International Products`,
    description: product.description.substring(0, 160),
    openGraph: {
      title: product.name,
      description: product.description.substring(0, 160),
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Debug: Log the requested slug
  console.log('Requested slug:', slug);
  
  const product = getProductBySlug(slug);

  // Debug: Log if product was found
  console.log('Product found:', product ? product.name : 'Not found');

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </div>
  );
}