
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ScreenshotsSection } from '@/components/ScreenshotsSection';
import { CTASection } from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        {/* <ScreenshotsSection /> */}
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
