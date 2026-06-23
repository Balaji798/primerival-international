import Header from '@/components/Header';
import AboutHero from '@/components/about/AboutHero';
import AboutJourney from '@/components/about/AboutJourney';
import AboutVision from '@/components/about/AboutVision';
import AboutValues from '@/components/about/AboutValues';
import AboutTeam from '@/components/about/AboutTeam';
import AboutCTA from '@/components/about/AboutCTA';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutJourney />
      <AboutVision />
      <AboutValues />
      {/* <AboutTeam /> */}
      <AboutCTA />
      <Footer />
    </div>
  );
}