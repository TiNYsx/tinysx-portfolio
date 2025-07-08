
import { Mail, Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  
  const contactMethods = [
    {
      name: t('contact.primary'),
      value: 'jiwjirawat@gmail.com',
      href: 'mailto:jiwjirawat@gmail.com',
      icon: <Mail className="w-6 h-6" />,
      description: t('contact.primary.desc')
    },
    {
      name: t('contact.university'),
      value: 'jirawat.thip@bumail.net',
      href: 'mailto:jirawat.thip@bumail.net',
      icon: <Mail className="w-6 h-6" />,
      description: t('contact.university.desc')
    },
    {
      name: 'GitHub',
      value: 'github.com/TiNYsx',
      href: 'https://github.com/TiNYsx',
      icon: <Github className="w-6 h-6" />,
      description: t('contact.github.desc')
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-dark-bg-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-hacker-green-400 mb-12 text-center">
          {t('contact.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={method.name}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : '_self'}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="project-card group hover:scale-105 transform transition-all duration-300 cursor-hover-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-hacker-green-400 group-hover:text-white transition-colors mb-4 flex justify-center">
                  {method.icon}
                </div>
                
                <h3 className="font-mono text-lg text-foreground group-hover:text-hacker-green-400 transition-colors mb-2">
                  {method.name}
                </h3>
                
                <p className="text-hacker-green-400 font-mono text-sm mb-2 break-all">
                  {method.value}
                </p>
                
                <p className="text-foreground/60 text-xs">
                  {method.description}
                </p>

                <div className="mt-4 flex justify-center">
                  <ExternalLink className="w-4 h-4 text-foreground/40 group-hover:text-hacker-green-400 transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <div className="font-mono text-hacker-green-400 text-lg mb-4">
            {t('contact.collaborate')}
          </div>
          
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            {t('contact.collaborate.desc')}
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">
            <div className="bg-dark-bg-900/50 border border-hacker-green-400/20 rounded p-4">
              <div className="text-hacker-green-400 mb-2">{t('contact.availability')}</div>
              <div className="text-foreground/80">{t('contact.availability.text')}</div>
            </div>
            
            <div className="bg-dark-bg-900/50 border border-hacker-green-400/20 rounded p-4">
              <div className="text-hacker-green-400 mb-2">{t('contact.interests')}</div>
              <div className="text-foreground/80">{t('contact.interests.text')}</div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <div className="font-mono text-xs text-hacker-green-400/60">
              {t('contact.footer')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
