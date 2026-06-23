import Header from '@/components/Header';
import ProcessHero from '@/components/process/ProcessHero';
import VerticalIntegration from '@/components/process/VerticalIntegration';
import ProcessStages from '@/components/process/ProcessStages';
import ProcessCTA from '@/components/process/ProcessCTA';
import Footer from '@/components/Footer';

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProcessHero />
            <ProcessStages />
      <VerticalIntegration />

      <ProcessCTA />
      <Footer />
    </div>
  );
}