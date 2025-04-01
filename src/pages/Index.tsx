
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import HowItWorks from '@/components/HowItWorks';
import TestimonialsSection from '@/components/TestimonialsSection';
import DownloadApp from '@/components/DownloadApp';
import CTASection from '@/components/CTASection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <HowItWorks />
        <TestimonialsSection />
        <DownloadApp />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
