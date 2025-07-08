
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-dark-bg-900 text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-hacker-green-400/20 bg-dark-bg-950">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-mono text-hacker-green-400/60 text-sm mb-2">
            {t('footer.copyright')}
          </div>
          <div className="font-mono text-xs text-foreground/40">
            {t('footer.built')}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
