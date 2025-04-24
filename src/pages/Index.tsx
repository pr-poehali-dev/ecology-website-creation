import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ProjectsSection from '../components/ProjectsSection';
import StatisticsSection from '../components/StatisticsSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ProjectsSection />
        <StatisticsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
