
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-hacker-green-400 mb-12 text-center">
          {t('about.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
              <div className="text-hacker-green-400 mb-2">{t('about.whoami')}</div>
              <div className="text-foreground/80">
                {t('about.whoami.text')}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
              <div className="text-hacker-green-400 mb-2">{t('about.journey')}</div>
              <div className="text-foreground/80 leading-relaxed">
                {t('about.journey.text')}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
              <div className="text-hacker-green-400 mb-2">{t('about.passion')}</div>
              <div className="text-foreground/80 leading-relaxed">
                {t('about.passion.text')}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
              <div className="text-hacker-green-400 mb-2">{t('about.goals')}</div>
              <div className="text-foreground/80 leading-relaxed">
                {t('about.goals.text')}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-hacker-green-400/20 to-transparent rounded-lg p-8 border border-hacker-green-400/30">
              <div className="font-mono text-xs text-hacker-green-400 mb-4">
                {t('about.status.title')}
              </div>
              
              <div className="space-y-4 font-sans">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-hacker-green-400 rounded-full animate-pulse"></div>
                  <span className="text-foreground">{t('about.status.student')}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-hacker-green-400 rounded-full animate-pulse"></div>
                  <span className="text-foreground">{t('about.status.coop')}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-hacker-green-400 rounded-full animate-pulse"></div>
                  <span className="text-foreground">{t('about.status.focus')}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-hacker-green-400/20">
                <div className="font-mono text-xs text-hacker-green-400/80">
                  {t('about.status.comment')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
