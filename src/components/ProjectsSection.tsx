
import { ExternalLink, Github, Code, Smartphone, Globe, Gamepad2, Bot, Monitor } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectsSection = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t('projects.ai.title'),
      description: t('projects.ai.description'),
      tags: ['AI', 'Web Development', 'JavaScript', 'Python'],
      icon: <Bot className="w-6 h-6" />,
      status: t('projects.status.development'),
      type: 'ai',
      link: 'https://preview--diamond-cirriculum-assistant.lovable.app/'
    },
    {
      title: t('projects.minecraft.title'),
      description: t('projects.minecraft.description'),
      tags: ['Java', 'Maven', 'Spigot API', 'API Integration'],
      icon: <Gamepad2 className="w-6 h-6" />,
      github: 'https://github.com/TiNYsx/WelcomeAds',
      status: t('projects.status.completed'),
      type: 'game',
      link: 'https://www.spigotmc.org/resources/%E2%9C%A8welcomeads%E2%9C%A8-screen-page-scroll-animation-gui-1-20.122137/'
    },
    {
      title: t('projects.mobile.title'),
      description: t('projects.mobile.description'),
      tags: ['.NET MAUI', 'C#', 'Cross-platform', 'Mobile Development'],
      icon: <Smartphone className="w-6 h-6" />,
      status: t('projects.status.completed'),
      type: 'mobile',
      link: 'https://github.com/TiNYsx'
    },
    {
      title: t('projects.java.title'),
      description: t('projects.java.description'),
      tags: ['Java', 'GUI Development', 'Desktop Apps'],
      icon: <Monitor className="w-6 h-6" />,
      status: t('projects.status.completed'),
      type: 'desktop',
      link: 'https://github.com/TiNYsx'
    },
    {
      title: t('projects.python.title'),
      description: t('projects.python.description'),
      tags: ['Python', 'Tkinter', 'GUI Development'],
      icon: <Code className="w-6 h-6" />,
      status: t('projects.status.completed'),
      type: 'desktop',
      link: 'https://github.com/TiNYsx'
    },
    {
      title: t('projects.website.title'),
      description: t('projects.website.description'),
      tags: ['HTML', 'CSS', 'PHP'],
      icon: <Globe className="w-6 h-6" />,
      status: t('projects.status.completed'),
      type: 'web',
      link: 'https://github.com/TiNYsx'
    }
  ];

  const getStatusColor = (status: string) => {
    return status === t('projects.status.development') ? 'text-yellow-400' : 'text-hacker-green-400';
  };

  const getTypeColor = (type: string) => {
    const colors = {
      ai: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
      game: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
      mobile: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
      desktop: 'from-orange-500/20 to-red-500/20 border-orange-500/30',
      web: 'from-hacker-green-400/20 to-teal-500/20 border-hacker-green-400/30'
    };
    return colors[type as keyof typeof colors] || 'from-gray-500/20 to-gray-600/20 border-gray-500/30';
  };

  const handleProjectClick = (project: any) => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-dark-bg-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-hacker-green-400 mb-12 text-center">
          {t('projects.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => handleProjectClick(project)}
              className={`project-card bg-gradient-to-br ${getTypeColor(project.type)} hover:scale-105 transform transition-all duration-300 group cursor-hover-effect`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-hacker-green-400 group-hover:text-white transition-colors">
                  {project.icon}
                </div>
                <div className="flex space-x-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-hacker-green-400 transition-colors cursor-hover-effect"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.link && (
                    <ExternalLink className="w-5 h-5 text-foreground/60 hover:text-hacker-green-400 transition-colors cursor-hover-effect" />
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold font-mono text-foreground mb-2 group-hover:text-hacker-green-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-mono bg-dark-bg-900/50 text-hacker-green-400 rounded border border-hacker-green-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <span className={`text-xs font-mono ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
                <div className="w-2 h-2 bg-hacker-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="font-mono text-hacker-green-400/60 text-sm">
            {t('projects.more')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
