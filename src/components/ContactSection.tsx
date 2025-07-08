
import { Mail, Github, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      name: 'Primary Email',
      value: 'jiwjirawat@gmail.com',
      href: 'mailto:jiwjirawat@gmail.com',
      icon: <Mail className="w-6 h-6" />,
      description: 'Personal email for general inquiries'
    },
    {
      name: 'University Email',
      value: 'jirawat.thip@bumail.net',
      href: 'mailto:jirawat.thip@bumail.net',
      icon: <Mail className="w-6 h-6" />,
      description: 'Academic and co-op related communications'
    },
    {
      name: 'GitHub',
      value: 'github.com/TiNYsx',
      href: 'https://github.com/TiNYsx',
      icon: <Github className="w-6 h-6" />,
      description: 'View my projects and contributions'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-dark-bg-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">
          {'> Establish Connection: Get In Touch'}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={method.name}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : '_self'}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="project-card group hover:scale-105 transform transition-all duration-300"
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
            {'> Ready to collaborate?'}
          </div>
          
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            I'm actively seeking co-op opportunities where I can contribute my skills in AI, web development, 
            and software engineering while continuing to learn and grow. Whether you're looking for a 
            dedicated team member or want to discuss a project, I'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">
            <div className="bg-dark-bg-900/50 border border-hacker-green-400/20 rounded p-4">
              <div className="text-hacker-green-400 mb-2">{'$ cat availability.txt'}</div>
              <div className="text-foreground/80">Open for co-op positions and project collaborations</div>
            </div>
            
            <div className="bg-dark-bg-900/50 border border-hacker-green-400/20 rounded p-4">
              <div className="text-hacker-green-400 mb-2">{'$ echo $INTERESTS'}</div>
              <div className="text-foreground/80">AI • Web Development • Game Development • Mobile Apps</div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <div className="font-mono text-xs text-hacker-green-400/60">
              {'// Looking forward to building something amazing together!'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
