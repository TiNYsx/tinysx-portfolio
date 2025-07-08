
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.languages'),
      skills: [
        { name: 'Java', level: 90, color: '#f89820' },
        { name: 'Python', level: 85, color: '#3776ab' },
        { name: 'JavaScript', level: 80, color: '#f7df1e' },
        { name: 'HTML', level: 95, color: '#e34f26' },
        { name: 'CSS', level: 90, color: '#1572b6' },
      ]
    },
    {
      title: t('skills.technologies'),
      skills: [
        { name: 'Git', level: 85, color: '#f05032' },
        { name: 'GitHub', level: 90, color: '#181717' },
        { name: 'VS Code', level: 95, color: '#007acc' },
        { name: 'Android Studio', level: 75, color: '#3ddc84' },
        { name: 'Maven', level: 80, color: '#c71a36' },
      ]
    },
    {
      title: t('skills.specializations'),
      skills: [
        { name: 'AI Integration', level: 75, color: '#39ff14' },
        { name: 'Web Development', level: 85, color: '#39ff14' },
        { name: 'Game Development', level: 80, color: '#39ff14' },
        { name: 'Mobile Apps', level: 70, color: '#39ff14' },
        { name: 'GUI Development', level: 85, color: '#39ff14' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-hacker-green-400 mb-12 text-center">
          {t('skills.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-hacker-green-400/50 transition-all duration-300 cursor-hover-effect"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-mono text-hacker-green-400 mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group cursor-hover-effect"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-sm text-foreground group-hover:text-hacker-green-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-foreground/60 font-mono">
                        {hoveredSkill === skill.name ? `${skill.level}%` : ''}
                      </span>
                    </div>
                    
                    <div className="w-full bg-dark-bg-900 rounded-full h-2 border border-border">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                          background: `linear-gradient(90deg, ${skill.color === '#39ff14' ? skill.color : skill.color}, #39ff14)`,
                          boxShadow: hoveredSkill === skill.name ? `0 0 10px ${skill.color}` : 'none',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="font-mono text-xs text-hacker-green-400/60 text-center">
                  {t('skills.hover')}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card border border-border rounded-lg p-6 max-w-2xl mx-auto">
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
