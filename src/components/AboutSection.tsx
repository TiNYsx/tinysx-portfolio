
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">
          {'> Accessing Mainframe: About Me'}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
              <div className="text-hacker-green-400 mb-2">{'$ whoami'}</div>
              <div className="text-foreground/80">
                My name is <span className="text-hacker-green-400 font-semibold">Jirawat Thipphinit</span> (จิรวัฒน์ ทิพย์พินิจ).
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
              <div className="text-hacker-green-400 mb-2">{'$ cat journey.txt'}</div>
              <div className="text-foreground/80 leading-relaxed">
                My journey into the digital world began at 14, sparked by a love for competitive games 
                like <span className="text-hacker-green-400">Valorant</span>, <span className="text-hacker-green-400">RTS</span>, 
                and the creative freedom of <span className="text-hacker-green-400">Minecraft</span>.
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
              <div className="text-hacker-green-400 mb-2">{'$ echo $PASSION'}</div>
              <div className="text-foreground/80 leading-relaxed">
                This passion for gaming naturally evolved into a deep interest in 
                <span className="text-hacker-green-400"> programming</span>. I love the challenge of building things 
                from the ground up, from my first school website project to competing in a 
                <span className="text-hacker-green-400"> web development competition</span>.
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
              <div className="text-hacker-green-400 mb-2">{'$ ls future_goals/'}</div>
              <div className="text-foreground/80 leading-relaxed">
                Now, I'm captivated by the potential of <span className="text-hacker-green-400">Artificial Intelligence</span> and 
                am actively developing <span className="text-hacker-green-400">two AI-integrated web projects</span>.
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-hacker-green-400/20 to-transparent rounded-lg p-8 border border-hacker-green-400/30">
              <div className="font-mono text-xs text-hacker-green-400 mb-4">
                {'/* Current Status */'}
              </div>
              
              <div className="space-y-4 font-sans">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-hacker-green-400 rounded-full animate-pulse"></div>
                  <span className="text-foreground">University Student</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-hacker-green-400 rounded-full animate-pulse"></div>
                  <span className="text-foreground">Seeking Co-op Opportunities</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-hacker-green-400 rounded-full animate-pulse"></div>
                  <span className="text-foreground">AI & Web Development Focus</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-hacker-green-400 rounded-full animate-pulse"></div>
                  <span className="text-foreground">Competitive Gaming Background</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-hacker-green-400/20">
                <div className="font-mono text-xs text-hacker-green-400/80">
                  {'// Driven by curiosity, powered by caffeine'}
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
