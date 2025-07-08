
import { ExternalLink, Github, Code, Smartphone, Globe, Gamepad2, Bot } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered Web Applications',
      description: 'Currently developing two separate web projects that leverage the power of AI to create intelligent and responsive user experiences.',
      tags: ['AI', 'Web Development', 'JavaScript', 'Python'],
      icon: <Bot className="w-6 h-6" />,
      status: 'In Development',
      type: 'ai'
    },
    {
      title: 'WelcomeAds - Minecraft Plugin',
      description: 'Developed a custom server-side plugin for Minecraft using Java and Maven. The plugin integrates with APIs from other popular plugins to create a seamless welcome experience.',
      tags: ['Java', 'Maven', 'Spigot API', 'Game Development', 'API Integration'],
      icon: <Gamepad2 className="w-6 h-6" />,
      github: 'https://github.com/TiNYsx/WelcomeAds',
      status: 'Completed',
      type: 'game'
    },
    {
      title: 'Java-Based Mobile App',
      description: 'Developed a functional mobile application based on an original Java GUI program, translating desktop logic into a mobile-first experience.',
      tags: ['Mobile Development', 'Java', 'Android'],
      icon: <Smartphone className="w-6 h-6" />,
      status: 'Completed',
      type: 'mobile'
    },
    {
      title: 'Desktop GUI Programs',
      description: 'Created user-friendly desktop applications using Python and Java, focusing on intuitive graphical user interfaces and solid backend logic.',
      tags: ['Python', 'Java', 'GUI Development'],
      icon: <Code className="w-6 h-6" />,
      status: 'Completed',
      type: 'desktop'
    },
    {
      title: 'Competitive & School Websites',
      description: 'Honed front-end skills by building a comprehensive school website and participating in a fast-paced website creation competition.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Competitive Programming'],
      icon: <Globe className="w-6 h-6" />,
      status: 'Completed',
      type: 'web'
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'In Development' ? 'text-yellow-400' : 'text-hacker-green-400';
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

  return (
    <section id="projects" className="py-20 px-4 bg-dark-bg-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">
          {'> Executing Programs: My Projects'}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card bg-gradient-to-br ${getTypeColor(project.type)} hover:scale-105 transform transition-all duration-300 group`}
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
                      className="text-foreground/60 hover:text-hacker-green-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.status === 'Completed' && (
                    <ExternalLink className="w-5 h-5 text-foreground/60 hover:text-hacker-green-400 transition-colors cursor-pointer" />
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
            {'// More projects in development...'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
