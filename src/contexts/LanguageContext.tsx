import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the available languages
type Language = 'th' | 'en';

// Define the shape of the context
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Store all translations in this object
const translations = {
  th: {
    // Navigation
    'nav.home': 'หน้าแรก',
    'nav.about': 'เกี่ยวกับ',
    'nav.projects': 'ผลงาน',
    'nav.skills': 'ทักษะ',
    'nav.contact': 'ติดต่อ',
    
    // Hero Section
    'hero.tagline': '> สร้างอนาคต ในโค้ดทุกๆ 1 บรรทัด_',
    
    // About Section
    'about.title': '01. การเดินทางของผม',
    'about.whoami': '$ whoami',
    'about.whoami.text': 'ผมชื่อ จิรวัฒน์ ทิพย์พินิจ (Jirawat Thipphinit) ชื่อเล่น จิ๋ว เกิดปี 2546(2003) ยินดีที่ได้รู้จักครับ :)',
    'about.journey': '$ cat journey.txt',
    'about.journey.text': 'เส้นทางการเขียนโปรแกรมของผมเริ่มต้นตอนอายุ 14 ปี จากความหลงใหลในการสร้าง Server Minecraft เพื่อเล่นกับเพื่อน ทำให้ผมต้องเรียนรู้ภาษาอังกฤษและอ่านเอกสาร Java เยอะมากๆ และจากการฝึกฝนการแก้ปัญหาในการลองใช้และเรียนรู้ภาษา Skript และการอ่าน Javadocs เป็นประจำ ทำให้ผมเข้าใจในภาษา Java ได้ดีเป็นอย่างมาก',
    'about.passion': '$ echo $PASSION',
    'about.passion.text': 'ความหลงใหลในเกมพัฒนาไปสู่ความสนใจในการเขียนโปรแกรม ผมชอบความท้าทายในการสร้างสิ่งต่างๆ ตั้งแต่การลองสร้างเว็บไซต์สำหรับเลือกชมรมในโรงเรียน เว็บไซต์สำหรับจับคู่สายรหัสระหว่างพี่ ม.6 กับน้องๆ ไปจนถึงการแข่งขันพัฒนาเว็บไซต์',
    'about.goals': '$ ls future_goals/',
    'about.goals.text': 'ตอนนี้ผมหลงใหลในศักยภาพของ AI และกำลังพัฒนาเว็บไซต์ที่ผสานกับ AI อยู่ 2 โครงการ หนึ่งในนั้นคือเว็บไซต์หลักสูตร ซึ่งเป็น Chat-Bot ที่ทำงานบนเว็บไซต์คล้ายๆ ChatGPT และ AI Chatbot อื่นๆ',
    'about.status.title': '/* สถานะปัจจุบัน */',
    'about.status.student': 'นักศึกษามหาวิทยาลัย',
    'about.status.coop': 'มองหาโอกาสฝึกงาน Co-op',
    'about.status.focus': 'เน้น AI และการพัฒนาเว็บไซต์',
    'about.status.comment': '// ขับเคลื่อนด้วยความอยากรู้ด้วยพลังงานชาเขียว',
    
    // Projects Section
    'projects.title': '02. ผลงานที่ผ่านๆมา',
    'projects.ai.title': 'เว็บแอปพลิเคชันที่ใช้ AI',
    'projects.ai.description': 'กำลังพัฒนาโครงการเว็บไซต์ 2 โครงการแยกกัน ที่ใช้ประโยชน์จากพลัง AI เพื่อสร้างประสบการณ์ผู้ใช้ที่ฉลาดและตอบสนองได้',
    'projects.minecraft.title': 'WelcomeAds - Minecraft Plugin',
    'projects.minecraft.description': 'พัฒนาปลั๊กอินสำหรับเซิร์ฟเวอร์ Minecraft โดยใช้ Java และ Maven ปลั๊กอินดังกล่าวผสานรวมกับ API จากปลั๊กอินยอดนิยมอื่นๆ เพื่อสร้างประสบการณ์การต้อนรับที่ลื่นไหล',
    'projects.mobile.title': 'แอปมือถือ .NET MAUI',
    'projects.mobile.description': 'พัฒนาแอปพลิเคชันมือถือที่ใช้งานได้จริงโดยใช้ .NET MAUI แปลงโลจิกจากโปรแกรม GUI เดิมให้เป็นประสบการณ์ที่เน้นมือถือเป็นหลัก (สร้างเป็น Application โดยใช้ design เดิมต่อจาก Planner ที่สร้างบน Java)',
    'projects.java.title': 'โปรแกรม Java GUI',
    'projects.java.description': 'สร้างแอปพลิเคชันเดสก์ท็อปที่ใช้งานง่ายด้วย Java โดยเน้นอินเทอร์เฟซผู้ใช้แบบกราฟิกที่ใช้งานง่าย โดยเป็นโปรแกรมการบันทึกกิจวัตรประจำวันและการบันทึก Planner',
    'projects.python.title': 'โปรแกรม Python GUI',
    'projects.python.description': 'พัฒนาแอปพลิเคชันเดสก์ท็อปด้วย Python โดยเน้นการออกแบบอินเทอร์เฟซที่สวยงามและการทำงานที่มีประสิทธิภาพ เป็นโปรแกรมเกียวกับการจองโต๊ะร้านอาหาร มีการใช้งาน SQLite ในการบันทึกข้อมูล',
    'projects.website.title': 'การแข่งขันการสร้างเว็บไซต์และโรงเรียน',
    'projects.website.description': 'ฝึกฝนทักษะ Front-end ด้วยการสร้างเว็บไซต์โรงเรียนที่ครอบคลุมและเข้าร่วมการแข่งขันสร้างเว็บไซต์ ถึงจะได้รางวัล อันดับที่ 2 แต่ก็ได้รับประสบการณ์การเรียนรู้มากมายจากการแข่งขันนี้',
    'projects.status.development': 'กำลังพัฒนา',
    'projects.status.completed': 'เสร็จสิ้น',
    'projects.more': '// โครงการเพิ่มเติมกำลังพัฒนา...',
    
    // Skills Section
    'skills.title': '03. ทักษะของผม',
    'skills.languages': 'ภาษาโปรแกรมมิ่ง',
    'skills.technologies': 'เทคโนโลยีและเครื่องมือ',
    'skills.specializations': 'ความเชี่ยวชาญ',
    'skills.hover': '',
    'skills.learning': 'เรียนรู้อย่างต่อเนื่อง เติบโตอย่างไม่หยุดยั้ง',
    'skills.learning.desc': 'พัฒนาทักษะอย่างต่อเนื่องผ่านโครงการที่ได้ลงมือทำจริง การแข่งขัน และการสำรวจเทคโนโลยีใหม่ๆ',
    
    // Contact Section
    'contact.title': '04. ติดต่อผม',
    'contact.primary': 'อีเมลหลัก',
    'contact.primary.desc': 'อีเมลส่วนตัวสำหรับการติดต่อทั่วไป',
    'contact.university': 'อีเมลมหาวิทยาลัย',
    'contact.university.desc': 'การสื่อสารด้านวิชาการและงาน Co-op',
    'contact.github.desc': 'ดูโครงการและผลงานต่างๆ',
    'contact.collaborate': '> พร้อมที่จะทำงานร่วมกัน?',
    'contact.collaborate.desc': 'ผมกำลังมองหาโอกาสฝึกงานที่จะได้นำทักษะใน AI การพัฒนาเว็บ และวิศวกรรมซอฟต์แวร์มาใช้ ในขณะที่ได้เรียนรู้และเติบโตต่อไป ไม่ว่าคุณจะกำลังมองหาสมาชิกทีมที่ทุ่มเทหรือต้องการพูดคุยเรื่องโครงการ ผมยินดีที่จะรับฟังจากคุณ!',
    'contact.availability': '$ cat availability.txt',
    'contact.availability.text': 'เปิดรับตำแหน่งฝึกงานและการทำงานร่วมกันในโครงการ',
    'contact.interests': '$ echo $INTERESTS',
    'contact.interests.text': 'AI • การพัฒนาเว็บ • การพัฒนาเกม • แอปมือถือ',
    'contact.footer': '// หวังว่าจะได้สร้างสิ่งที่ยอดเยี่ยมร่วมกัน!',
    
    // Footer
    'footer.copyright': '© 2024 Jirawat Thipphinit. สงวนลิขสิทธิ์',
    'footer.built': '// สร้างด้วย React, Tailwind CSS และชาเขียวเป็นจำนวนมาก 🍵'
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
    'about.journey.text': 'My journey into the digital world began at 14, sparked by a passion for creating a Minecraft Server to play with friends. This led me to learn English, read extensive Java documentation, and practice problem-solving. Working with Skript and reading Javadocs was my gateway to a deep understanding of the Java language.',
    'about.passion': '$ echo $PASSION',
    'about.passion.text': 'This passion for gaming evolved into a deep interest in programming. I love the challenge of building things from the ground up, from my first school website project to web development competitions.',
    'about.goals': '$ ls future_goals/',
    'about.goals.text': 'Now, I\'m passionate about the potential of AI and am developing two AI-integrated websites. One of them is a course website, featuring a Chat-Bot that functions like ChatGPT and other AI chatbots.',
    'about.status.title': '/* Current Status */',
    'about.status.student': 'University Student',
    'about.status.coop': 'Seeking Co-op Opportunities',
    'about.status.focus': 'Focusing on AI & Web Development',
    'about.status.comment': '// Driven by curiosity, powered by coffee',
    
    // Projects Section
    'projects.title': '02. My Projects',
    'projects.ai.title': 'AI-Powered Web Applications',
    'projects.ai.description': 'Currently developing two separate web projects that leverage the power of AI to create intelligent and responsive user experiences.',
    'projects.minecraft.title': 'WelcomeAds - Minecraft Plugin',
    'projects.minecraft.description': 'Developed a plugin for Minecraft servers using Java and Maven. The plugin integrates with APIs from other popular plugins to create a seamless welcome experience.',
    'projects.mobile.title': '.NET MAUI Mobile App',
    'projects.mobile.description': 'Developed a functional mobile application using .NET MAUI, converting logic from a previous GUI program to a mobile-first experience (built as an Application using the original design from the Planner created in Java).',
    'projects.java.title': 'Java GUI Program',
    'projects.java.description': 'Created a user-friendly desktop application with Java, focusing on an intuitive graphical user interface. The program is for recording daily routines and a Planner.',
    'projects.python.title': 'Python GUI Program',
    'projects.python.description': 'Developed a desktop application with Python, focusing on beautiful interface design and efficient functionality. It is a restaurant table reservation program that uses SQLite for data storage.',
    'projects.website.title': 'Competitive & School Websites',
    'projects.website.description': 'Honed front-end skills by building a comprehensive school website and participating in a website creation competition. Although I won 2nd place, I gained a lot of valuable learning experience from it.',
    'projects.status.development': 'In Development',
    'projects.status.completed': 'Completed',
    'projects.more': '// More projects in development...',
    
    // Skills Section
    'skills.title': '03. My Skills',
    'skills.languages': 'Programming Languages',
    'skills.technologies': 'Technologies & Tools',
    'skills.specializations': 'Specializations',
    'skills.hover': '',
    'skills.learning': 'Always learning, always growing',
    'skills.learning.desc': 'Continuously expanding my skill set through hands-on projects, competitions, and exploration of emerging technologies.',
    
    // Contact Section
    'contact.title': '04. Get In Touch',
    'contact.primary': 'Primary Email',
    'contact.primary.desc': 'Personal email for general inquiries',
    'contact.university': 'University Email',
    'contact.university.desc': 'For academic and co-op related communications',
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
    'footer.built': '// Built with React, Tailwind CSS, and lots of green tea 🍵'
  }
};

// Create the context with a default undefined value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create the provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Default language is Thai
  const [language, setLanguage] = useState<Language>('th'); 

  // Function to toggle between 'th' and 'en'
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'th' ? 'en' : 'th');
  };

  // Translation function
  const t = (key: string): string => {
    // Access the translations for the current language, fall back to the key itself if not found
    return translations[language][key as keyof typeof translations['th']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // This error is thrown if the hook is used outside of a LanguageProvider
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};