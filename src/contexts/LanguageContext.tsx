
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'th' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  th: {
    // Navigation
    'nav.home': 'หน้าแรก',
    'nav.about': 'เกี่ยวกับ',
    'nav.projects': 'โครงการ',
    'nav.skills': 'ทักษะ',
    'nav.contact': 'ติดต่อ',
    
    // Hero Section
    'hero.tagline': '> สร้างอนาคต ทีละบรรทัดโค้ด_',
    
    // About Section
    'about.title': '01. การเดินทางของฉัน',
    'about.whoami': '$ whoami',
    'about.whoami.text': 'ชื่อของฉันคือ จิรวัฒน์ ทิพย์พินิจ (Jirawat Thipphinit)',
    'about.journey': '$ cat journey.txt',
    'about.journey.text': 'การเดินทางสู่โลกดิจิทัลของฉันเริ่มต้นเมื่ออายุ 14 ปี จากความหลงใหลใน Minecraft การสร้าง Server เพื่อเล่นกับเพื่อนทำให้ฉันต้องเรียนรู้ภาษาอังกฤษและ Java อ่านเอกสารมากมาย และฝึกฝนการแก้ปัญหา การทำงานกับ Skript และการอ่าน Javadocs เป็นประตูสู่ความเข้าใจในโปรแกรมมิ่ง Java อย่างลึกซึ้ง',
    'about.passion': '$ echo $PASSION',
    'about.passion.text': 'ความหลงใหลในเกมพัฒนาไปสู่ความสนใจในการเขียนโปรแกรมอย่างลึกซึ้ง ฉันชอบความท้าทายในการสร้างสิ่งต่างๆ ตั้งแต่เริ่มต้น ตั้งแต่โครงการเว็บไซต์โรงเรียนแรกไปจนถึงการแข่งขันพัฒนาเว็บไซต์',
    'about.goals': '$ ls future_goals/',
    'about.goals.text': 'ตอนนี้ฉันหลงใหลในศักยภาพของปัญญาประดิษฐ์ และกำลังพัฒนาโครงการเว็บไซต์ที่ผสานกับ AI อยู่ 2 โครงการ',
    'about.status.title': '/* สถานะปัจจุบัน */',
    'about.status.student': 'นักศึกษามหาวิทยาลัย',
    'about.status.coop': 'มองหาโอกาสฝึกงาน Co-op',
    'about.status.focus': 'เน้น AI และการพัฒนาเว็บไซต์',
    'about.status.comment': '// ขับเคลื่อนด้วยความอยากรู้ พลังงานจากกาแฟ',
    
    // Projects Section
    'projects.title': '02. โครงการของฉัน',
    'projects.ai.title': 'แอปพลิเคชันเว็บที่ใช้ AI',
    'projects.ai.description': 'กำลังพัฒนาโครงการเว็บไซต์ 2 โครงการแยกกัน ที่ใช้ประโยชน์จากพลัง AI เพื่อสร้างประสบการณ์ผู้ใช้ที่ฉลาดและตอบสนองได้',
    'projects.minecraft.title': 'WelcomeAds - Minecraft Plugin',
    'projects.minecraft.description': 'พัฒนาปลั๊กอินสำหรับเซิร์ฟเวอร์ Minecraft โดยใช้ Java และ Maven ปลั๊กอินดังกล่าวผสานรวมกับ API จากปลั๊กอินยอดนิยมอื่นๆ เพื่อสร้างประสบการณ์การต้อนรับที่ลื่นไหล',
    'projects.mobile.title': 'แอปมือถือ .NET MAUI',
    'projects.mobile.description': 'พัฒนาแอปพลิเคชันมือถือที่ใช้งานได้จริงโดยใช้ .NET MAUI แปลงโลจิกจากโปรแกรม GUI เดิมให้เป็นประสบการณ์ที่เน้นมือถือเป็นหลัก',
    'projects.java.title': 'โปรแกรม Java GUI',
    'projects.java.description': 'สร้างแอปพลิเคชันเดสก์ท็อปที่ใช้งานง่ายด้วย Java โดยเน้นอินเทอร์เฟซผู้ใช้แบบกราฟิกที่ใช้งานง่ายและโลจิกแบ็กเอนด์ที่แข็งแกร่ง',
    'projects.python.title': 'โปรแกรม Python GUI',
    'projects.python.description': 'พัฒนาแอปพลิเคชันเดสก์ท็อปด้วย Python โดยเน้นการออกแบบอินเทอร์เฟซที่สวยงามและการทำงานที่มีประสิทธิภาพ',
    'projects.website.title': 'เว็บไซต์การแข่งขันและโรงเรียน',
    'projects.website.description': 'ฝึกฝนทักษะ Front-end ด้วยการสร้างเว็บไซต์โรงเรียนที่ครอบคลุมและเข้าร่วมการแข่งขันสร้างเว็บไซต์อย่างรวดเร็ว',
    'projects.status.development': 'กำลังพัฒนา',
    'projects.status.completed': 'เสร็จสิ้น',
    'projects.more': '// โครงการเพิ่มเติมกำลังพัฒนา...',
    
    // Skills Section
    'skills.title': '03. ทักษะของฉัน',
    'skills.languages': 'ภาษาโปรแกรมมิ่ง',
    'skills.technologies': 'เทคโนโลยีและเครื่องมือ',
    'skills.specializations': 'ความเชี่ยวชาญ',
    'skills.hover': '// เลื่อนเมาส์เพื่อดูระดับความชำนาญ',
    'skills.learning': 'เรียนรู้อย่างต่อเนื่อง เติบโตอย่างไม่หยุดยั้ง',
    'skills.learning.desc': 'ขยายชุดทักษะอย่างต่อเนื่องผ่านโครงการที่ได้ลงมือทำจริง การแข่งขัน และการสำรวจเทคโนโลยีใหม่ๆ',
    
    // Contact Section
    'contact.title': '04. ติดต่อฉัน',
    'contact.primary': 'อีเมลหลัก',
    'contact.primary.desc': 'อีเมลส่วนตัวสำหรับการติดต่อทั่วไป',
    'contact.university': 'อีเมลมหาวิทยาลัย',
    'contact.university.desc': 'การสื่อสารด้านวิชาการและงาน Co-op',
    'contact.github.desc': 'ดูโครงการและผลงานต่างๆ',
    'contact.collaborate': '> พร้อมที่จะทำงานร่วมกัน?',
    'contact.collaborate.desc': 'ฉันกำลังมองหาโอกาสฝึกงาน Co-op ที่จะได้นำทักษะใน AI การพัฒนาเว็บ และวิศวกรรมซอฟต์แวร์มาใช้ ในขณะที่ได้เรียนรู้และเติบโตต่อไป ไม่ว่าคุณจะกำลังมองหาสมาชิกทีมที่ทุ่มเทหรือต้องการพูดคุยเรื่องโครงการ ฉันยินดีที่จะรับฟังจากคุณ!',
    'contact.availability': '$ cat availability.txt',
    'contact.availability.text': 'เปิดรับตำแหน่งฝึกงาน Co-op และการทำงานร่วมกันในโครงการ',
    'contact.interests': '$ echo $INTERESTS',
    'contact.interests.text': 'AI • การพัฒนาเว็บ • การพัฒนาเกม • แอปมือถือ',
    'contact.footer': '// หวังว่าจะได้สร้างสิ่งที่ยอดเยี่ยมร่วมกัน!',
    
    // Footer
    'footer.copyright': '© 2024 Jirawat Thipphinit. สงวนลิขสิทธิ์',
    'footer.built': '// สร้างด้วย React, Tailwind CSS และกาแฟเป็นจำนวนมาก ☕'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.tagline': '> Building the future, one line of code at a time_',
    
    // About Section
    'about.title': '01. My Journey',
    'about.whoami': '$ whoami',
    'about.whoami.text': 'My name is Jirawat Thipphinit (จิรวัฒน์ ทิพย์พินิจ)',
    'about.journey': '$ cat journey.txt',
    'about.journey.text': 'My journey into the digital world began at 14, sparked by Minecraft. Creating a server to play with friends required me to learn English and Java, read extensive documentation, and master problem-solving. Working with Skript and reading Javadocs was my gateway to understanding the depths of Java programming.',
    'about.passion': '$ echo $PASSION',
    'about.passion.text': 'This passion for gaming naturally evolved into a deep interest in programming. I love the challenge of building things from the ground up, from my first school website project to competing in a web development competition.',
    'about.goals': '$ ls future_goals/',
    'about.goals.text': 'Now, I\'m captivated by the potential of Artificial Intelligence and am actively developing two AI-integrated web projects.',
    'about.status.title': '/* Current Status */',
    'about.status.student': 'University Student',
    'about.status.coop': 'Seeking Co-op Opportunities',
    'about.status.focus': 'AI & Web Development Focus',
    'about.status.comment': '// Driven by curiosity, powered by caffeine',
    
    // Projects Section
    'projects.title': '02. My Projects',
    'projects.ai.title': 'AI-Powered Web Applications',
    'projects.ai.description': 'Currently developing two separate web projects that leverage the power of AI to create intelligent and responsive user experiences.',
    'projects.minecraft.title': 'WelcomeAds - Minecraft Plugin',
    'projects.minecraft.description': 'Developed a custom server-side plugin for Minecraft using Java and Maven. The plugin integrates with APIs from other popular plugins to create a seamless welcome experience.',
    'projects.mobile.title': '.NET MAUI Base Mobile App',
    'projects.mobile.description': 'Developed a functional mobile application using .NET MAUI, translating desktop logic into a mobile-first experience with cross-platform compatibility.',
    'projects.java.title': 'Java GUI Programs',
    'projects.java.description': 'Created user-friendly desktop applications using Java, focusing on intuitive graphical user interfaces and solid backend logic.',
    'projects.python.title': 'Python GUI Programs',
    'projects.python.description': 'Developed desktop applications with Python, emphasizing beautiful interface design and efficient functionality.',
    'projects.website.title': 'Competitive & School Websites',
    'projects.website.description': 'Honed front-end skills by building a comprehensive school website and participating in a fast-paced website creation competition.',
    'projects.status.development': 'In Development',
    'projects.status.completed': 'Completed',
    'projects.more': '// More projects in development...',
    
    // Skills Section
    'skills.title': '03. My Skills',
    'skills.languages': 'Languages',
    'skills.technologies': 'Technologies & Tools',
    'skills.specializations': 'Specializations',
    'skills.hover': '// Hover to see proficiency',
    'skills.learning': 'Always learning, always growing',
    'skills.learning.desc': 'Continuously expanding my skill set through hands-on projects, competitions, and exploration of emerging technologies.',
    
    // Contact Section
    'contact.title': '04. Get In Touch',
    'contact.primary': 'Primary Email',
    'contact.primary.desc': 'Personal email for general inquiries',
    'contact.university': 'University Email',
    'contact.university.desc': 'Academic and co-op related communications',
    'contact.github.desc': 'View my projects and contributions',
    'contact.collaborate': '> Ready to collaborate?',
    'contact.collaborate.desc': 'I\'m actively seeking co-op opportunities where I can contribute my skills in AI, web development, and software engineering while continuing to learn and grow. Whether you\'re looking for a dedicated team member or want to discuss a project, I\'d love to hear from you!',
    'contact.availability': '$ cat availability.txt',
    'contact.availability.text': 'Open for co-op positions and project collaborations',
    'contact.interests': '$ echo $INTERESTS',
    'contact.interests.text': 'AI • Web Development • Game Development • Mobile Apps',
    'contact.footer': '// Looking forward to building something amazing together!',
    
    // Footer
    'footer.copyright': '© 2024 Jirawat Thipphinit. All rights reserved.',
    'footer.built': '// Built with React, Tailwind CSS, and lots of caffeine ☕'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('th'); // Default to Thai

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'th' ? 'en' : 'th');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['th']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
