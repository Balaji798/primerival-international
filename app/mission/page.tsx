import Header from '@/components/Header';
import MissionHero from '@/components/mission/MissionHero';
import MissionCore from '@/components/mission/MissionCore';
import MissionImpact from '@/components/mission/MissionImpact';
import MissionCTA from '@/components/mission/MissionCTA';
import Footer from '@/components/Footer';

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MissionHero />
      <MissionCore />
      <MissionImpact />
      {/* <MissionCTA /> */}
      <Footer />
    </div>
  );
}