// translations/index.ts
import { Language, TranslationEntry, LocalizedProject, LocalizedEducation } from './types';

/**
 * Main translation dataset that stores all translations in one place
 * Organized by translation key and then by language
 */
export const translationData = {
  // Common translations
  name: {
    en: "PISOL UATTANKANJANA",
    th: "พิศลย์ อุตตาลกาญจนา"
  },
  title: {
    en: "SOFTWARE ENGINEERING",
    th: "วิศวกรรมซอฟต์แวร์"
  },
  bio: {
    en: "A third-year Information Technology student at King Mongkut's Institute of Technology Ladkrabang with a focus on software development. Passionate about web and application development with experience in both front-end and back-end technologies. Dedicated to creating efficient digital solutions, optimizing systems, and continuously improving problem-solving and teamwork skills through hands-on projects.",
    th: "ผมเป็นนักศึกษาชั้นปีที่ 4 สาขาเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เน้นด้านการพัฒนาซอฟต์แวร์ มีความชื่นชอบในการพัฒนาเว็บและแอปพลิเคชัน มีประสบการณ์ทั้งด้าน front-end และ back-end มุ่งมั่นสร้างโซลูชั่นดิจิทัลที่มีประสิทธิภาพ ปรับปรุงระบบ และพัฒนาทักษะการแก้ปัญหาและการทำงานเป็นทีมผ่านโปรเจกต์ต่างๆ"
  },
  location: {
    en: "Bangkok, Thailand",
    th: "กรุงเทพมหานคร, ประเทศไทย"
  },
  allRightsReserved: {
    en: "All rights reserved.",
    th: "สงวนลิขสิทธิ์"
  },
  contactMe: {
    en: "Contact Me",
    th: "ติดต่อฉัน"
  },
  phone: {
    en: "Phone",
    th: "โทรศัพท์"
  },
  
  // Navigation
  home: {
    en: "Home",
    th: "หน้าหลัก"
  },
  skills: {
    en: "Skills",
    th: "ทักษะ"
  },
  projects: {
    en: "Projects",
    th: "โปรเจค"
  },
  education: {
    en: "Education",
    th: "การศึกษา"
  },
  contact: {
    en: "Contact",
    th: "ติดต่อ"
  },
  
  // Skills
  technicalSkills: {
    en: "Technology Stack",
    th: "เทคโนโลยีที่ใช้"
  },
  frontend: {
    en: "Frontend",
    th: "ฟร้อนท์เอนด์"
  },
  backend: {
    en: "Backend",
    th: "แบ็คเอนด์"
  },
  toolsTech: {
    en: "Tools & Technologies",
    th: "เครื่องมือและเทคโนโลยี"
  },
  otherLang: {
    en: "Other Languages",
    th: "ภาษาอื่นๆ"
  },
  softSkills: {
    en: "Soft Skills",
    th: "ทักษะอื่นๆ"
  },
  languages: {
    en: "Languages",
    th: "ภาษา"
  },
  
  // Projects
  projectsHighlight: {
    en: "Projects Highlight",
    th: "โปรเจคที่โดดเด่น"
  },
  projectsIntro: {
    en: "Featured projects showcasing my skills and experience",
    th: "โปรเจกต์เด่นที่แสดงให้เห็นถึงทักษะและประสบการณ์ของฉัน"
  },
  viewProject: {
    en: "View Project",
    th: "ดูโปรเจค"
  },
  viewMoreProjects: {
    en: "View More Projects on GitHub",
    th: "ดูโปรเจกต์เพิ่มเติมบน GitHub"
  },
  allProjects: {
    en: "All Projects",
    th: "ทั้งหมด"
  },
  
  // Education
  academicJourney: {
    en: "My academic journey and qualifications",
    th: "เส้นทางการศึกษาและคุณสมบัติของฉัน"
  },
  degree: {
    en: "Branch : Software development",
    th: "สาขา : การพัฒนาซอฟต์แวร์"
  },
  programHighlights: {
    en: "Program Highlights",
    th: "จุดเด่นของหลักสูตร"
  },
  keyCourses: {
    en: "Key Courses",
    th: "วิชาหลัก"
  },
  
  // Contact
  contactIntro: {
    en: "Feel free to reach out for collaborations, internship opportunities, or just to say hello",
    th: "อย่าลังเลที่จะติดต่อเพื่อความร่วมมือ โอกาสในการฝึกงาน หรือเพียงแค่ทักทาย"
  },
  yourName: {
    en: "Your Name",
    th: "ชื่อของคุณ"
  },
  yourEmail: {
    en: "Your Email",
    th: "อีเมลของคุณ"
  },
  subject: {
    en: "Subject",
    th: "หัวข้อ"
  },
  message: {
    en: "Message",
    th: "ข้อความ"
  },
  sendMessage: {
    en: "Send Message",
    th: "ส่งข้อความ"
  },
  contactVia: {
    en: "Prefer a direct approach? Contact me via:",
    th: "ต้องการติดต่อโดยตรง? ติดต่อฉันผ่าน:"
  },
  call: {
    en: "Call",
    th: "โทร"
  },
  email: {
    en: "Email",
    th: "อีเมล"
  },
  github: {
    en: "GitHub",
    th: "GitHub"
  },
  directApproach: {
    en: "Prefer a direct approach? Contact me via:",
    th: "ต้องการติดต่อโดยตรง? ติดต่อฉันผ่าน:"
  },
  
  // Other common phrases
  viewLiveDemo: {
    en: "View Live Demo",
    th: "ดูตัวอย่างเว็บไซต์"
  },
  backButton: {
    en: "Back to Projects",
    th: "กลับไปยังหน้าโปรเจค"
  },
  yearLabel: {
    en: "Year",
    th: "ปีที่พัฒนา"
  },
  projectType: {
    en: "Project Type",
    th: "ประเภทโปรเจค"
  },
  academicProject: {
    en: "Academic Project",
    th: "โปรเจครายวิชาเป็นคู่"
  },
  roleLabel: {
    en: "Role",
    th: "บทบาท"
  },
  fullStackDeveloper: {
    en: "Full Stack Developer",
    th: "นักพัฒนา Full Stack"
  },
  nextImage: {
    en: "Next Image",
    th: "ภาพถัดไป"
  },
  prevImage: {
    en: "Previous Image",
    th: "ภาพก่อนหน้า"
  }
};

// Dataset for profile information
export const profileData = {
  avatar: "/profile-image.jpg",
  email: "pisol.uatt@gmail.com",
  github: "Pisol00",
  phone: "+66 61 669 0550",
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "React", "React Native", "NextJS"],
    backend: ["PostgreSQL", "MongoDB", "MySQL", "Django", "Flask", "Node.js", "Neo4J", "REST APIs", "PHP"],
    tools: ["Docker", "Jenkins", "Git", "GitHub", "AWS", "Google Cloud", "Nginx"],
    other: ["Java OOP", "C"]
  },
  // Multi-language soft skills using translation keys
  softSkills: [
    {
      key: "problemSolving",
      translations: {
        en: "Problem-Solving & Critical Thinking",
        th: "การแก้ปัญหาและการคิดเชิงวิพากษ์"
      }
    },
    {
      key: "teamwork",
      translations: {
        en: "Teamwork & Collaboration",
        th: "การทำงานเป็นทีมและความร่วมมือ"
      }
    },
    {
      key: "adaptability",
      translations: {
        en: "Adaptability & Learning Agility",
        th: "การปรับตัวและความคล่องตัวในการเรียนรู้"
      }
    },
    {
      key: "communication",
      translations: {
        en: "Communication Skills",
        th: "ทักษะการสื่อสาร"
      }
    }
  ],
  // Multi-language spoken languages
  languages: [
    {
      key: "thai",
      translations: {
        language: {
          en: "Thai (Native)",
          th: "ไทย (ภาษาแม่)"
        },
        level: {
          en: "Native",
          th: "ภาษาแม่"
        }
      }
    },
    {
      key: "english",
      translations: {
        language: {
          en: "English (Intermediate)",
          th: "อังกฤษ (ระดับกลาง)"
        },
        level: {
          en: "Intermediate",
          th: "ระดับกลาง"
        }
      }
    }
  ]
};

// Dataset for education information
export const educationData = [
  {
    key: "kmitl",
    translations: {
      institution: {
        en: "King Mongkut's Institute of Technology Ladkrabang",
        th: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"
      },
      degree: {
        en: "School of Information Technology, Branch: Software development",
        th: "คณะเทคโนโลยีสารสนเทศ สาขา: การพัฒนาซอฟต์แวร์"
      },
      duration: {
        en: "2022 - Present",
        th: "2565 - ปัจจุบัน"
      },
      location: {
        en: "Bangkok, Thailand",
        th: "กรุงเทพมหานคร, ประเทศไทย"
      }
    },
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_wx9ytkWpaORplO5wMqeYtEtP23Wb3bSigw&s",
    highlights: [
      {
        key: "highlight1",
        translations: {
          en: "Focus on software development and modern web technologies",
          th: "เน้นการพัฒนาซอฟต์แวร์และเทคโนโลยีเว็บสมัยใหม่"
        }
      },
      {
        key: "highlight2",
        translations: {
          en: "Project-based curriculum with real-world applications",
          th: "หลักสูตรที่เน้นโปรเจกต์จริงและการประยุกต์ใช้งานในโลกจริง"
        }
      },
      {
        key: "highlight3",
        translations: {
          en: "Collaborative environment with industry partnerships",
          th: "สภาพแวดล้อมการทำงานร่วมกันกับพันธมิตรในอุตสาหกรรม"
        }
      }
    ],
    courses: [
      { 
        key: "course1",
        translations: {
          en: "Software Engineering",
          th: "วิศวกรรมซอฟต์แวร์"
        }
      },
      { 
        key: "course2",
        translations: {
          en: "Web Development",
          th: "การพัฒนาเว็บ"
        }
      },
      { 
        key: "course3",
        translations: {
          en: "Database Systems",
          th: "ระบบฐานข้อมูล"
        }
      },
      { 
        key: "course4",
        translations: {
          en: "Cloud Computing",
          th: "การประมวลผลคลาวด์"
        }
      },
      { 
        key: "course5",
        translations: {
          en: "Algorithm Design",
          th: "การออกแบบอัลกอริทึม"
        }
      }
    ]
  },
  {
    key: "satri",
    translations: {
      institution: {
        en: "Satri Samut Prakan School",
        th: "โรงเรียนสตรีสมุทรปราการ"
      },
      degree: {
        en: "Special Program in Science, Math, Technology and Environment (SMTE)",
        th: "โครงการห้องเรียนพิเศษ SMTE (Science, Math, Technology and Environment) หรือ สสวท."
      },
      duration: {
        en: "2019 - 2022",
        th: "2562 - 2565"
      },
      location: {
        en: "Samut Prakan, Thailand",
        th: "สมุทรปราการ, ประเทศไทย"
      },
      description: {
        en: "A research and development program to enhance student potential in science and mathematics, organized by the Institute for the Promotion of Teaching Science and Technology.",
        th: "โครงการวิจัยและพัฒนาศักยภาพผู้เรียนสู่ความเป็นเลิศและห้องเรียนวิทยาศาสตร์ของสถาบันส่งเสริมการสอนวิทยาศาสตร์และเทคโนโลยี"
      }
    },
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Streesmutprakan_School_logo.png",
    highlights: [
      {
        key: "highlight1",
        translations: {
          en: "Advanced curriculum in Science and Mathematics",
          th: "หลักสูตรขั้นสูงในวิชาวิทยาศาสตร์และคณิตศาสตร์"
        }
      },
      {
        key: "highlight2",
        translations: {
          en: "Specialized laboratory training and research projects",
          th: "การฝึกปฏิบัติในห้องปฏิบัติการและโครงงานวิจัยเฉพาะทาง"
        }
      },
      {
        key: "highlight3",
        translations: {
          en: "Focus on developing scientific methodology and critical thinking",
          th: "เน้นการพัฒนาวิธีการทางวิทยาศาสตร์และการคิดวิเคราะห์"
        }
      }
    ]
  }
];

// Dataset for projects information
export const projectsData = [
  {
    key: "kinarai",
    title: "Kin-Arai-Dee KMITL",
    year: "2022",
    translations: {
      description: {
        en: "An academic project in Problem Solving and Computer Programming, built using ReactJS, TailwindCSS, Flask, and SQLite.",
        th: "โปรเจคเชิงวิชาการด้าน Problem Solving and Computer Programming สร้างด้วย ReactJS, TailwindCSS, Flask และ SQLite"
      }
    },
    technologies: ["ReactJS", "TailwindCSS", "Flask", "SQLite"],
    link: "https://github.com/Pisol00"
  },
  {
    key: "hongfah",
    title: "HongFah Online",
    year: "2023",
    translations: {
      description: {
        en: "An academic project in Object-Oriented Programming, built using Java Swing and Firebase.",
        th: "โปรเจคเชิงวิชาการด้าน Object-Oriented Programming สร้างด้วย Java Swing และ Firebase"
      }
    },
    technologies: ["Java Swing", "Firebase"],
    link: "https://github.com/Pisol00"
  },
  {
    key: "ilanded",
    title: "I-Landed-Airline",
    year: "2023",
    translations: {
      description: {
        en: "An academic project in Problem Solving and Computer Programming, built using ReactJS, TailwindCSS, Flask, and SQLite.",
        th: "โปรเจคเชิงวิชาการด้าน Problem Solving and Computer Programming สร้างด้วย ReactJS, TailwindCSS, Flask และ SQLite"
      }
    },
    technologies: ["ReactJS", "TailwindCSS", "Flask", "SQLite"],
    link: "https://github.com/Pisol00"
  },
  {
    key: "shopdee",
    title: "ShopDee",
    year: "2024",
    translations: {
      description: {
        en: "An academic project in Server-Side Development, building a marketplace platform for buying and selling new and second-hand clothing using Django, HTML, CSS, Bootstrap 5, and PostgreSQL.",
        th: "โปรเจคเชิงวิชาการด้าน Server-Side Development สร้างแพลตฟอร์มตลาดสำหรับซื้อและขายเสื้อผ้าใหม่และมือสองโดยใช้ Django, HTML, CSS, Bootstrap 5 และ PostgreSQL"
      }
    },
    technologies: ["Django", "HTML", "CSS", "Bootstrap 5", "PostgreSQL"],
    link: "/project/shopdee"
  },
  {
    key: "connextra",
    title: "Connextra",
    year: "2024",
    translations: {
      description: {
        en: "An academic project on Cloud Computing, developing a real-time chat application using React, Node.js, TypeScript, and AWS services (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework).",
        th: "โปรเจคเชิงวิชาการด้าน Cloud Computing พัฒนาแอปพลิเคชันแชทแบบเรียลไทม์โดยใช้ React, Node.js, TypeScript และบริการ AWS (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework)"
      }
    },
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    link: "https://github.com/Pisol00"
  },
  {
    key: "job4all",
    title: "Job4ALL",
    year: "2024",
    translations: {
      description: {
        en: "A DevOps-focused academic project developing a job search platform for people with disabilities using React Native, Node.js, and MongoDB. It incorporates CI/CD pipelines via Jenkins and Docker for automated testing and deployment.",
        th: "โปรเจคเชิงวิชาการเน้น DevOps พัฒนาแพลตฟอร์มค้นหางานสำหรับผู้พิการโดยใช้ React Native, Node.js และ MongoDB รวมถึงการรวม CI/CD ผ่าน Jenkins และ Docker สำหรับการทดสอบอัตโนมัติและการติดตั้ง"
      }
    },
    technologies: ["React Native", "Node.js", "MongoDB", "Jenkins", "Docker"],
    link: "https://github.com/Pisol00"
  },
  {
    key: "aroidee",
    title: "AroiDee",
    year: "2024",
    translations: {
      description: {
        en: "An academic project on Cloud Computing, developing a real-time chat application using React, Node.js, TypeScript, and AWS services (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework).",
        th: "โปรเจคเชิงวิชาการด้าน Cloud Computing พัฒนาแอปพลิเคชันแชทแบบเรียลไทม์โดยใช้ React, Node.js, TypeScript และบริการ AWS (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework)"
      }
    },
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    link: "https://github.com/Pisol00"
  },
  {
    key: "khonsongdee",
    title: "KhonsongDee",
    year: "2024",
    translations: {
      description: {
        en: "An academic project on Cloud Computing, developing a real-time chat application using React, Node.js, TypeScript, and AWS services (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework).",
        th: "โปรเจคเชิงวิชาการด้าน Cloud Computing พัฒนาแอปพลิเคชันแชทแบบเรียลไทม์โดยใช้ React, Node.js, TypeScript และบริการ AWS (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework)"
      }
    },
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    link: "https://github.com/Pisol00"
  },
  {
    key: "lms",
    title: "Learning Management System (LMS)",
    year: "2024",
    translations: {
      description: {
        en: "An academic project on Cloud Computing, developing a real-time chat application using React, Node.js, TypeScript, and AWS services (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework).",
        th: "โปรเจคเชิงวิชาการด้าน Cloud Computing พัฒนาแอปพลิเคชันแชทแบบเรียลไทม์โดยใช้ React, Node.js, TypeScript และบริการ AWS (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework)"
      }
    },
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    link: "https://github.com/Pisol00"
  }
];

// Function to create a flattened translation object for a specific language
export function createTranslationObject(language: Language) {
  const translationObj: Record<string, string> = {};
  
  // Add all translations from translationData
  for (const key in translationData) {
    if (Object.prototype.hasOwnProperty.call(translationData, key)) {
      const entry = translationData[key as keyof typeof translationData];
      translationObj[key] = entry[language];
    }
  }
  
  return translationObj;
}

// Helper function to get a translated value for a dataset entry
export function getTranslation(
  data: any, 
  language: Language, 
  path: string = ''
) {
  // Handle direct translation objects like { en: "text", th: "ข้อความ" }
  if (data && typeof data === 'object' && 'en' in data && 'th' in data) {
    return data[language];
  }
  
  // Handle nested paths like "translations.description"
  if (path) {
    const parts = path.split('.');
    let value = data;
    
    for (const part of parts) {
      if (value && typeof value === 'object' && part in value) {
        value = value[part];
      } else {
        return undefined;
      }
    }
    
    if (value && typeof value === 'object' && language in value) {
      return value[language];
    }
    
    return value;
  }
  
  return undefined;
}

// Helper function to get localized project data
export function getLocalizedProjects(language: Language): LocalizedProject[] {
  return projectsData.map(project => ({
    title: project.title,
    year: project.year,
    description: getTranslation(project.translations, language, 'description'),
    technologies: project.technologies,
    link: project.link
  }));
}

// Helper function to get localized education data
export function getLocalizedEducation(language: Language): LocalizedEducation[] {
  return educationData.map(edu => ({
    institution: getTranslation(edu.translations, language, 'institution'),
    degree: getTranslation(edu.translations, language, 'degree'),
    duration: getTranslation(edu.translations, language, 'duration'),
    location: getTranslation(edu.translations, language, 'location'),
    description: getTranslation(edu.translations, language, 'description'),
    logo: edu.logo,
    highlights: edu.highlights?.map(highlight => 
      getTranslation(highlight.translations, language)
    ),
    courses: edu.courses?.map(course => 
      getTranslation(course.translations, language)
    )
  }));
}