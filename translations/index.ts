/**
 * translations/index.ts
 * Main exports for translations and localized data
 */

import { 
  Language, 
  TranslationType, 
  ProfileData,
  ExperienceItem
} from './types';

// Re-export types for easier imports elsewhere
export type { Language, TranslationType, ProfileData, ExperienceItem };

// English translations
const en: TranslationType = {
  // Common
  name: "PISOL UATTANKANJANA",
  title: "SOFTWARE ENGINEERING",
  bio: "A third-year Information Technology student at King Mongkut's Institute of Technology Ladkrabang with a focus on software development. Passionate about web and application development with experience in both front-end and back-end technologies. Dedicated to creating efficient digital solutions, optimizing systems, and continuously improving problem-solving and teamwork skills through hands-on projects.",
  location: "Bangkok, Thailand",
  allRightsReserved: "All rights reserved.",
  contactMe: "Contact Me",
  phone: "Phone",
  
  // Nav
  home: "Home",
  skills: "Skills",
  projects: "Projects",
  education: "Education",
  contact: "Contact",
  
  // Skills
  technicalSkills: "Technology Stack",
  frontend: "Frontend",
  backend: "Backend",
  toolsTech: "Tools & Technologies",
  otherLang: "Other Languages",
  softSkills: "Soft Skills",
  languages: "Languages",
  
  // Projects
  projectsHighlight: "Projects Highlight",
  viewProject: "View Project",
  viewMoreProjects: "View More Projects on GitHub",
  
  // Education
  academicJourney: "My academic journey and qualifications",
  degree: "Branch : Software development",
  programHighlights: "Program Highlights",
  keyCourses: "Key Courses",
  
  // Contact
  contactIntro: "Feel free to reach out for collaborations, internship opportunities, or just to say hello",
  yourName: "Your Name",
  yourEmail: "Your Email",
  subject: "Subject",
  message: "Message",
  sendMessage: "Send Message",
  contactVia: "Prefer a direct approach? Contact me via:",
  call: "Call",
  email: "Email",
  github: "GitHub",
  directApproach: "Prefer a direct approach? Contact me via:",
};

// Thai translations
const th: TranslationType = {
  // Common
  name: "พิศลย์ อุตตาลกาญจนา",
  title: "วิศวกรรมซอฟต์แวร์",
  bio: "นักศึกษาชั้นปีที่ 3 สาขาเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เน้นด้านการพัฒนาซอฟต์แวร์ มีความชื่นชอบในการพัฒนาเว็บและแอปพลิเคชัน มีประสบการณ์ทั้งด้าน front-end และ back-end มุ่งมั่นสร้างโซลูชั่นดิจิทัลที่มีประสิทธิภาพ ปรับปรุงระบบ และพัฒนาทักษะการแก้ปัญหาและการทำงานเป็นทีมผ่านโปรเจกต์ต่างๆ",
  location: "กรุงเทพมหานคร, ประเทศไทย",
  allRightsReserved: "สงวนลิขสิทธิ์",
  contactMe: "ติดต่อฉัน",
  phone: "โทรศัพท์",
  
  // Nav
  home: "หน้าหลัก",
  skills: "ทักษะ",
  projects: "โปรเจค",
  education: "การศึกษา",
  contact: "ติดต่อ",
  
  // Skills
  technicalSkills: "เทคโนโลยีที่ใช้",
  frontend: "ฟร้อนท์เอนด์",
  backend: "แบ็คเอนด์",
  toolsTech: "เครื่องมือและเทคโนโลยี",
  otherLang: "ภาษาอื่นๆ",
  softSkills: "ทักษะอื่นๆ",
  languages: "ภาษา",
  
  // Projects
  projectsHighlight: "โปรเจคที่โดดเด่น",
  viewProject: "ดูโปรเจค",
  viewMoreProjects: "ดูโปรเจกต์เพิ่มเติมบน GitHub",
  
  // Education
  academicJourney: "เส้นทางการศึกษาและคุณสมบัติของฉัน",
  degree: "สาขา : การพัฒนาซอฟต์แวร์",
  programHighlights: "จุดเด่นของหลักสูตร",
  keyCourses: "วิชาหลัก",
  
  // Contact
  contactIntro: "อย่าลังเลที่จะติดต่อเพื่อความร่วมมือ โอกาสในการฝึกงาน หรือเพียงแค่ทักทาย",
  yourName: "ชื่อของคุณ",
  yourEmail: "อีเมลของคุณ",
  subject: "หัวข้อ",
  message: "ข้อความ",
  sendMessage: "ส่งข้อความ",
  contactVia: "ต้องการติดต่อโดยตรง? ติดต่อฉันผ่าน:",
  call: "โทร",
  email: "อีเมล",
  github: "GitHub",
  directApproach: "ต้องการติดต่อโดยตรง? ติดต่อฉันผ่าน:",
};

// Combine translations into a single object
export const translations: Record<Language, TranslationType> = { en, th };

// Basic profile data (shared across languages)
export const profileData = {
  avatar: "/profile-image.jpg",
  email: "pisol.uatt@gmail.com",
  github: "Pisol00",
  phone: "+66 61 669 0550",
  skills: {
    frontend: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "React", "React Native"],
    backend: ["Python (Django)", "PostgreSQL", "MongoDB", "MySQL", "Node.js", "Neo4J", "REST APIs"],
    tools: ["Docker", "Jenkins", "Git", "GitHub", "AWS", "Google Cloud", "Nginx"],
    other: ["Java OOP", "C"]
  },
  // Multi-language soft skills
  softSkills: [
    {
      en: "Problem-Solving & Critical Thinking",
      th: "การแก้ปัญหาและการคิดเชิงวิพากษ์"
    },
    {
      en: "Teamwork & Collaboration",
      th: "การทำงานเป็นทีมและความร่วมมือ"
    },
    {
      en: "Adaptability & Learning Agility",
      th: "การปรับตัวและความคล่องตัวในการเรียนรู้"
    },
    {
      en: "Communication Skills",
      th: "ทักษะการสื่อสาร"
    }
  ],
  // Multi-language spoken languages
  languages: [
    {
      language: { en: "Thai", th: "ไทย" },
      level: { en: "Native", th: "ภาษาแม่" }
    },
    {
      language: { en: "English", th: "อังกฤษ" },
      level: { en: "Intermediate", th: "ระดับกลาง" }
    }
  ],
};

// Type definition for multi-language fields
interface MultiLanguageField {
  en: string;
  th: string;
}

// Education data with translations
export const educationData = [
  {
    institution: {
      en: "King Mongkut's Institute of Technology Ladkrabang",
      th: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"
    },
    degree: {
      en: "School of Information Technology, Branch: Software development",
      th: "คณะเทคโนโลยีสารสนเทศ สาขา: การพัฒนาซอฟต์แวร์"
    },
    duration: { en: "2022 - Present", th: "2565 - ปัจจุบัน" },
    location: { en: "Bangkok, Thailand", th: "กรุงเทพมหานคร, ประเทศไทย" },
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_wx9ytkWpaORplO5wMqeYtEtP23Wb3bSigw&s",
    highlights: [
      {
        en: "Focus on software development and modern web technologies",
        th: "เน้นการพัฒนาซอฟต์แวร์และเทคโนโลยีเว็บสมัยใหม่"
      },
      {
        en: "Project-based curriculum with real-world applications",
        th: "หลักสูตรที่เน้นโปรเจกต์จริงและการประยุกต์ใช้งานในโลกจริง"
      },
      {
        en: "Collaborative environment with industry partnerships",
        th: "สภาพแวดล้อมการทำงานร่วมกันกับพันธมิตรในอุตสาหกรรม"
      }
    ],
    courses: [
      { en: "Software Engineering", th: "วิศวกรรมซอฟต์แวร์" },
      { en: "Web Development", th: "การพัฒนาเว็บ" },
      { en: "Database Systems", th: "ระบบฐานข้อมูล" },
      { en: "Cloud Computing", th: "การประมวลผลคลาวด์" },
      { en: "Algorithm Design", th: "การออกแบบอัลกอริทึม" }
    ]
  },
  {
    institution: {
      en: "Satri Samut Prakan School",
      th: "โรงเรียนสตรีสมุทรปราการ"
    },
    degree: {
      en: "Special Program in Science, Math, Technology and Environment (SMTE)",
      th: "โครงการห้องเรียนพิเศษ SMTE (Science, Math, Technology and Environment) หรือ สสวท."
    },
    duration: { en: "2019 - 2022", th: "2562 - 2565" },
    location: { en: "Samut Prakan, Thailand", th: "สมุทรปราการ, ประเทศไทย" },
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Streesmutprakan_School_logo.png",
    description: {
      en: "A research and development program to enhance student potential in science and mathematics, organized by the Institute for the Promotion of Teaching Science and Technology.",
      th: "โครงการวิจัยและพัฒนาศักยภาพผู้เรียนสู่ความเป็นเลิศและห้องเรียนวิทยาศาสตร์ของสถาบันส่งเสริมการสอนวิทยาศาสตร์และเทคโนโลยี"
    },
    highlights: [
      {
        en: "Advanced curriculum in Science and Mathematics",
        th: "หลักสูตรขั้นสูงในวิชาวิทยาศาสตร์และคณิตศาสตร์"
      },
      {
        en: "Specialized laboratory training and research projects",
        th: "การฝึกปฏิบัติในห้องปฏิบัติการและโครงงานวิจัยเฉพาะทาง"
      },
      {
        en: "Focus on developing scientific methodology and critical thinking",
        th: "เน้นการพัฒนาวิธีการทางวิทยาศาสตร์และการคิดวิเคราะห์"
      }
    ]
  }
];

// Project data with translations
// Project data with translations
export const projectsData = [
  {
    title: "Kin-Arai-Dee KMITL",
    year: "2022",
    description: {
      en: "An academic project in Problem Solving and Computer Programming, built using ReactJS, TailwindCSS, Flask, and SQLite.",
      th: "โปรเจคเชิงวิชาการด้าน Problem Solving and Computer Programming สร้างด้วย ReactJS, TailwindCSS, Flask และ SQLite"
    },
    technologies: ["ReactJS", "TailwindCSS", "Flask", "SQLite"],
    link: "https://github.com/Pisol00"
  },
  {
    title: "HongFah Online",
    year: "2023",
    description: {
      en: "An academic project in Object-Oriented Programming, built using Java Swing and Firebase.",
      th: "โปรเจคเชิงวิชาการด้าน Object-Oriented Programming สร้างด้วย Java Swing และ Firebase"
    },
    technologies: ["Java Swing", "Firebase"],
    link: "https://github.com/Pisol00"
  },
  {
    title: "I-Landed-Airline",
    year: "2023",
    description: {
      en: "An academic project in Problem Solving and Computer Programming, built using ReactJS, TailwindCSS, Flask, and SQLite.",
      th: "โปรเจคเชิงวิชาการด้าน Problem Solving and Computer Programming สร้างด้วย ReactJS, TailwindCSS, Flask และ SQLite"
    },
    technologies: ["ReactJS", "TailwindCSS", "Flask", "SQLite"],
    link: "https://github.com/Pisol00"
  },
  {
    title: "ShopDee",
    year: "2024",
    description: {
      en: "An academic project in Server-Side Development, building a marketplace platform for buying and selling new and second-hand clothing using Django, HTML, CSS, Bootstrap 5, and PostgreSQL.",
      th: "โปรเจคเชิงวิชาการด้าน Server-Side Development สร้างแพลตฟอร์มตลาดสำหรับซื้อและขายเสื้อผ้าใหม่และมือสองโดยใช้ Django, HTML, CSS, Bootstrap 5 และ PostgreSQL"
    },
    technologies: ["Django", "HTML", "CSS", "Bootstrap 5", "PostgreSQL"],
    link: "https://github.com/Pisol00"
  },
  {
    title: "Connextra",
    year: "2024",
    description: {
      en: "An academic project on Cloud Computing, developing a real-time chat application using React, Node.js, TypeScript, and AWS services (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework).",
      th: "โปรเจคเชิงวิชาการด้าน Cloud Computing พัฒนาแอปพลิเคชันแชทแบบเรียลไทม์โดยใช้ React, Node.js, TypeScript และบริการ AWS (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework)"
    },
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    link: "https://github.com/Pisol00"
  },
  {
    title: "Job4ALL",
    year: "2024",
    description: {
      en: "A DevOps-focused academic project developing a job search platform for people with disabilities using React Native, Node.js, and MongoDB. It incorporates CI/CD pipelines via Jenkins and Docker for automated testing and deployment.",
      th: "โปรเจคเชิงวิชาการเน้น DevOps พัฒนาแพลตฟอร์มค้นหางานสำหรับผู้พิการโดยใช้ React Native, Node.js และ MongoDB รวมถึงการรวม CI/CD ผ่าน Jenkins และ Docker สำหรับการทดสอบอัตโนมัติและการติดตั้ง"
    },
    technologies: ["React Native", "Node.js", "MongoDB", "Jenkins", "Docker"],
    link: "https://github.com/Pisol00"
  },
  {
    title: "AroiDee",
    year: "2024",
    description: {
      en: "An academic project on Cloud Computing, developing a real-time chat application using React, Node.js, TypeScript, and AWS services (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework).",
      th: "โปรเจคเชิงวิชาการด้าน Cloud Computing พัฒนาแอปพลิเคชันแชทแบบเรียลไทม์โดยใช้ React, Node.js, TypeScript และบริการ AWS (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework)"
    },
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    link: "https://github.com/Pisol00"
  },
  {
    title: "KhonsongDee",
    year: "2024",
    description: {
      en: "An academic project on Cloud Computing, developing a real-time chat application using React, Node.js, TypeScript, and AWS services (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework).",
      th: "โปรเจคเชิงวิชาการด้าน Cloud Computing พัฒนาแอปพลิเคชันแชทแบบเรียลไทม์โดยใช้ React, Node.js, TypeScript และบริการ AWS (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework)"
    },
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    link: "https://github.com/Pisol00"
  },
  {
    title: "Learning Management System (LMS)",
    year: "2024",
    description: {
      en: "An academic project on Cloud Computing, developing a real-time chat application using React, Node.js, TypeScript, and AWS services (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework).",
      th: "โปรเจคเชิงวิชาการด้าน Cloud Computing พัฒนาแอปพลิเคชันแชทแบบเรียลไทม์โดยใช้ React, Node.js, TypeScript และบริการ AWS (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework)"
    },
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    link: "https://github.com/Pisol00"
  },
];

/**
 * Helper function to extract language-specific content
 * @param obj - Object with language keys
 * @param language - Target language
 */
function getLanguageValue<T extends MultiLanguageField>(obj: T, language: Language): string {
  return obj[language];
}

/**
 * Generate localized profile data for each language
 */
export function generateLocalizedData(): Record<Language, ProfileData> {
  const result: Record<Language, ProfileData> = {} as Record<Language, ProfileData>;
  
  // Generate for each language
  ['en', 'th'].forEach((lang) => {
    const language = lang as Language;
    const t = translations[language];
    
    result[language] = {
      name: t.name,
      title: t.title,
      bio: t.bio,
      avatar: profileData.avatar,
      location: t.location,
      email: profileData.email,
      github: profileData.github,
      phone: profileData.phone,
      address: language === 'en' 
        ? "667, Soi Chalong Krung 1, Lat Krabang Subdistrict, Lat Krabang District, Bangkok 10520, Thailand"
        : "667, ซอยฉลองกรุง 1, แขวงลาดกระบัง, เขตลาดกระบัง, กรุงเทพมหานคร 10520, ประเทศไทย",
      skills: {
        frontend: [...profileData.skills.frontend],
        backend: [...profileData.skills.backend],
        tools: [...profileData.skills.tools],
        other: [...profileData.skills.other]
      },
      softSkills: profileData.softSkills.map(item => item[language]),
      languages: profileData.languages.map(item => ({
        language: item.language[language],
        level: item.level[language]
      })),
      experience: [], // Not currently used
      education: educationData.map(edu => ({
        institution: edu.institution[language],
        degree: edu.degree[language],
        duration: edu.duration[language],
        description: edu.description?.[language]
      })),
      projects: projectsData.map(project => ({
        title: project.title,
        description: project.description[language],
        technologies: [...project.technologies],
        link: project.link,
        year: project.year // Add year information to localized data
      }))
    };
  });
  
  return result;
}

// Pre-generate the localized data
export const localizedData = generateLocalizedData();