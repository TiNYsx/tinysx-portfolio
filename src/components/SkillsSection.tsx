
import { useLanguage } from '../contexts/LanguageContext';

const SkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.languages'),
      skills: [
        { name: 'Java', level: 80, color: '#f89820' },
        { name: 'Python', level: 70, color: '#3776ab' },
        { name: 'HTML', level: 80, color: '#e34f26' },
        { name: 'PHP', level: 40, color: '#777bb4' },
      ]
    },
    {
      title: t('skills.technologies'),
      skills: [
        { name: 'Git', level: 85, color: '#f05032' },
        { name: 'GitHub', level: 90, color: '#181717' },
        { name: 'VS Code', level: 95, color: '#007acc' },
        { name: 'Maven', level: 80, color: '#c71a36' },
      ]
    },
    {
      title: t('skills.specializations'),
      skills: [
        { name: 'AI Integration', level: 75, color: '#9d4edd' },
        { name: 'Web Development', level: 85, color: '#06d6a0' },
        { name: 'Mobile Apps', level: 70, color: '#f77f00' },
        { name: 'GUI Development', level: 85, color: '#fcbf49' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-hacker-green-400 mb-8 sm:mb-12 text-center">
          {t('skills.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:border-hacker-green-400/50 transition-all duration-300 cursor-hover-effect"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-lg sm:text-xl font-mono text-hacker-green-400 mb-4 sm:mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-sm text-foreground group-hover:text-hacker-green-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-foreground/60 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-dark-bg-900 rounded-full h-2 border border-border">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                          boxShadow: `0 0 10px ${skill.color}`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-card border border-border rounded-lg p-4 sm:p-6 max-w-2xl mx-auto">
            <div className="font-mono text-hacker-green-400 text-sm mb-2">
              {'$ echo "' + t('skills.learning') + '"'}
            </div>
            <p className="text-foreground/80 text-sm">
              {t('skills.learning.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
