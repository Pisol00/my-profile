// translations.ts
export type Language = 'th' | 'en';

export type ProfileTranslations = {
  name: string;
  title: string;
  bio: string;
  location: string;
  contact: string;
  skills: string;
  education: string;
  experience: string;
  projects: string;
  viewProject: string;
  allRightsReserved: string;
  degree: string;
  softSkills: string;
  languages: string;
  technicalSkills: string;
  frontend: string;
  backend: string;
  toolsTech: string;
  otherLang: string;
  projectsHighlight: string;
  contactMe: string;
  home: string;
  phone: string;
};

export const translations: Record<Language, ProfileTranslations> = {
  en: {
    name: "PISOL UATTANKANJANA",
    title: "SOFTWARE ENGINEERING",
    bio: "A third-year Information Technology student at King Mongkut's Institute of Technology Ladkrabang, seeking a 2-month internship in Full-Stack Development. Passionate about web and application development, eager to apply knowledge, optimize systems, and develop problem-solving and teamwork skills through real-world experience.",
    location: "Bangkok, Thailand",
    contact: "Contact",
    skills: "Skills",
    education: "Education",
    experience: "Projects",
    projects: "Projects",
    viewProject: "View Project",
    allRightsReserved: "All rights reserved.",
    degree: "Branch : Software development",
    softSkills: "Soft Skills",
    languages: "Languages",
    technicalSkills: "Technology Stack",
    frontend: "Frontend",
    backend: "Backend",
    toolsTech: "Tools & Technologies",
    otherLang: "Other Languages",
    projectsHighlight: "Projects Highlight",
    contactMe: "Contact Me",
    home: "Home",
    phone: "Phone",
  },
  th: {
    name: "พิศลย์ อุตตาลกาญจนา",
    title: "วิศวกรรมซอฟต์แวร์",
    bio: "นักศึกษาชั้นปีที่ 3 สาขาเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง กำลังมองหาการฝึกงาน 2 เดือนในด้าน Full-Stack Development มีความชื่นชอบในการพัฒนาเว็บและแอปพลิเคชัน กระตือรือร้นที่จะนำความรู้ไปประยุกต์ใช้ เพิ่มประสิทธิภาพระบบ และพัฒนาทักษะการแก้ปัญหาและการทำงานเป็นทีมผ่านประสบการณ์จริง",
    location: "กรุงเทพมหานคร, ประเทศไทย",
    contact: "ติดต่อ",
    skills: "ทักษะ",
    education: "การศึกษา",
    experience: "โปรเจค",
    projects: "โปรเจค",
    viewProject: "ดูโปรเจค",
    allRightsReserved: "สงวนลิขสิทธิ์",
    degree: "สาขา : การพัฒนาซอฟต์แวร์",
    softSkills: "ทักษะอื่นๆ",
    languages: "ภาษา",
    technicalSkills: "เทคโนโลยีที่ใช้",
    frontend: "ฟร้อนท์เอนด์",
    backend: "แบ็คเอนด์",
    toolsTech: "เครื่องมือและเทคโนโลยี",
    otherLang: "ภาษาอื่นๆ",
    projectsHighlight: "โปรเจคที่โดดเด่น",
    contactMe: "ติดต่อฉัน",
    home: "หน้าหลัก",
    phone: "โทรศัพท์",
  }
};

export type ProjectData = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
};

export type EducationData = {
  institution: string;
  degree: string;
  duration: string;
  description?: string;
};

export type ProfileData = {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  github: string;
  phone: string;
  address: string;
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
    other: string[];
  };
  softSkills: string[];
  languages: {
    language: string;
    level: string;
  }[];
  experience: {
    company: string;
    position: string;
    duration: string;
    description: string;
  }[];
  education: EducationData[];
  projects: ProjectData[];
};

// Define localized profile data
export const localizedData: Record<Language, ProfileData> = {
  en: {
    name: "PISOL UATTANKANJANA",
    title: "SOFTWARE ENGINEERING",
    bio: "A third-year Information Technology student at King Mongkut's Institute of Technology Ladkrabang, seeking a 2-month internship in Full-Stack Development. Passionate about web and application development, eager to apply knowledge, optimize systems, and develop problem-solving and teamwork skills through real-world experience.",
    avatar: "/profile-image.jpg",
    location: "Bangkok, Thailand",
    email: "pisol.uatt@gmail.com",
    github: "Pisol00",
    phone: "+66 61 669 0550",
    address: "667, Soi Chalong Krung 1, Lat Krabang Subdistrict, Lat Krabang District, Bangkok 10520, Thailand",
    skills: {
      frontend: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "React", "React Native"],
      backend: ["Python (Django)", "PostgreSQL", "MongoDB", "MySQL", "Node.js", "Neo4J", "REST APIs"],
      tools: ["Docker", "Jenkins", "Git", "GitHub", "AWS", "Google Cloud", "Nginx"],
      other: ["Java OOP", "C"]
    },
    softSkills: [
      "Problem-Solving & Critical Thinking",
      "Teamwork & Collaboration",
      "Adaptability & Learning Agility",
      "Communication Skills",
      "Project Management"
    ],
    languages: [
      {
        language: "Thai",
        level: "Native"
      },
      {
        language: "English",
        level: "Intermediate"
      }
    ],
    experience: [],
    education: [
      {
        institution: "King Mongkut's Institute of Technology Ladkrabang",
        degree: "School of Information Technology, Branch: Software development",
        duration: "2022 - Present"
      },
      {
        institution: "Satri Samut Prakan School",
        degree: "Special Program in Science, Math, Technology and Environment (SMTE)",
        duration: "2019 - 2022",
        description: "A research and development program to enhance student potential in science and mathematics, organized by the Institute for the Promotion of Teaching Science and Technology."
      }
    ],
    projects: [
      {
        title: "Job4ALL",
        description: "A DevOps-focused academic project developing a job search platform for people with disabilities using React Native, Node.js, and MongoDB. It incorporates CI/CD pipelines via Jenkins and Docker for automated testing and deployment. The app connects job seekers with employers and features personalized job recommendations, accessibility filters, and real-time application tracking, fostering inclusive employment and workplace diversity.",
        technologies: ["React Native", "Node.js", "MongoDB", "Jenkins", "Docker"],
        link: "https://github.com/Pisol00"
      },
      {
        title: "Connextra",
        description: "An academic project on Cloud Computing, developing a real-time chat application using React, Node.js, TypeScript, and AWS services (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework). The system supports instant messaging, group chats, file sharing, and message history retrieval while ensuring data security and high system stability.",
        technologies: ["React", "Node.js", "TypeScript", "AWS"],
        link: "https://github.com/Pisol00"
      },
      {
        title: "ShopDee",
        description: "An academic project in Server-Side Development, building a marketplace platform for buying and selling new and second-hand clothing using Django, HTML, CSS, Bootstrap 5, and PostgreSQL. The platform features product listings, filtered searches, and customer reviews, along with an admin dashboard for analyzing sales data and platform usage.",
        technologies: ["Django", "HTML", "CSS", "Bootstrap 5", "PostgreSQL"],
        link: "https://github.com/Pisol00"
      },
      {
        title: "HongFah Online",
        description: "An academic project in Object-Oriented Programming, built using Java Swing and Firebase.",
        technologies: ["Java Swing", "Firebase"],
        link: "https://github.com/Pisol00"
      },
      {
        title: "Kin-Arai-Dee KMITL",
        description: "An academic project in Problem Solving and Computer Programming, built using ReactJS, TailwindCSS, Flask, and SQLite.",
        technologies: ["ReactJS", "TailwindCSS", "Flask", "SQLite"],
        link: "https://github.com/Pisol00"
      }
    ]
  },
  th: {
    name: "พิศลย์ อุตตาลกาญจนา",
    title: "วิศวกรรมซอฟต์แวร์",
    bio: "นักศึกษาชั้นปีที่ 3 สาขาเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง กำลังมองหาการฝึกงาน 2 เดือนในด้าน Full-Stack Development มีความชื่นชอบในการพัฒนาเว็บและแอปพลิเคชัน กระตือรือร้นที่จะนำความรู้ไปประยุกต์ใช้ เพิ่มประสิทธิภาพระบบ และพัฒนาทักษะการแก้ปัญหาและการทำงานเป็นทีมผ่านประสบการณ์จริง",
    avatar: "/profile-image.jpg",
    location: "กรุงเทพมหานคร, ประเทศไทย",
    email: "pisol.uatt@gmail.com",
    github: "Pisol00",
    phone: "+66 61 669 0550",
    address: "667, ซอยฉลองกรุง 1, แขวงลาดกระบัง, เขตลาดกระบัง, กรุงเทพมหานคร 10520, ประเทศไทย",
    skills: {
      frontend: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "React", "React Native"],
      backend: ["Python (Django)", "PostgreSQL", "MongoDB", "MySQL", "Node.js", "Neo4J", "REST APIs"],
      tools: ["Docker", "Jenkins", "Git", "GitHub", "AWS", "Google Cloud", "Nginx"],
      other: ["Java OOP", "C"]
    },
    softSkills: [
      "การแก้ปัญหาและการคิดเชิงวิพากษ์",
      "การทำงานเป็นทีมและความร่วมมือ",
      "การปรับตัวและความคล่องตัวในการเรียนรู้",
      "ทักษะการสื่อสาร",
      "การจัดการโครงการ"
    ],
    languages: [
      {
        language: "ไทย",
        level: "ภาษาแม่"
      },
      {
        language: "อังกฤษ",
        level: "ระดับกลาง"
      }
    ],
    experience: [],
    education: [
      {
        institution: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
        degree: "คณะเทคโนโลยีสารสนเทศ สาขา: การพัฒนาซอฟต์แวร์",
        duration: "2565 - ปัจจุบัน"
      },
      {
        institution: "โรงเรียนสตรีสมุทรปราการ",
        degree: "โครงการห้องเรียนพิเศษ SMTE (Science, Math, Technology and Environment) หรือ สสวท.",
        duration: "2562 - 2565",
        description: "โครงการวิจัยและพัฒนาศักยภาพผู้เรียนสู่ความเป็นเลิศและห้องเรียนวิทยาศาสตร์ของสถาบันส่งเสริมการสอนวิทยาศาสตร์และเทคโนโลยี"
      }
    ],
    projects: [
      {
        title: "Job4ALL",
        description: "โปรเจคเชิงวิชาการเน้น DevOps พัฒนาแพลตฟอร์มค้นหางานสำหรับผู้พิการโดยใช้ React Native, Node.js และ MongoDB รวมถึงการรวม CI/CD ผ่าน Jenkins และ Docker สำหรับการทดสอบอัตโนมัติและการติดตั้ง แอปเชื่อมโยงผู้หางานกับนายจ้างและมีคุณสมบัติการแนะนำงานส่วนบุคคล ตัวกรองการเข้าถึง และการติดตามการสมัครแบบเรียลไทม์",
        technologies: ["React Native", "Node.js", "MongoDB", "Jenkins", "Docker"],
        link: "https://github.com/Pisol00"
      },
      {
        title: "Connextra",
        description: "โปรเจคเชิงวิชาการด้าน Cloud Computing พัฒนาแอปพลิเคชันแชทแบบเรียลไทม์โดยใช้ React, Node.js, TypeScript และบริการ AWS (S3, RDS, EC2, Lambda, WebSocket, Serverless Framework) ระบบรองรับการส่งข้อความทันที, แชทกลุ่ม, การแชร์ไฟล์ และการดึงประวัติข้อความ พร้อมทั้งรับประกันความปลอดภัยของข้อมูลและความเสถียรของระบบ",
        technologies: ["React", "Node.js", "TypeScript", "AWS"],
        link: "https://github.com/Pisol00"
      },
      {
        title: "ShopDee",
        description: "โปรเจคเชิงวิชาการด้าน Server-Side Development สร้างแพลตฟอร์มตลาดสำหรับซื้อและขายเสื้อผ้าใหม่และมือสองโดยใช้ Django, HTML, CSS, Bootstrap 5 และ PostgreSQL แพลตฟอร์มมีคุณสมบัติการลงรายการสินค้า, การค้นหาแบบกรอง, รีวิวลูกค้า พร้อมทั้งแดชบอร์ดผู้ดูแลระบบสำหรับวิเคราะห์ข้อมูลการขายและการใช้งานแพลตฟอร์ม",
        technologies: ["Django", "HTML", "CSS", "Bootstrap 5", "PostgreSQL"],
        link: "https://github.com/Pisol00"
      },
      {
        title: "HongFah Online",
        description: "โปรเจคเชิงวิชาการด้าน Object-Oriented Programming สร้างด้วย Java Swing และ Firebase",
        technologies: ["Java Swing", "Firebase"],
        link: "https://github.com/Pisol00"
      },
      {
        title: "Kin-Arai-Dee KMITL",
        description: "โปรเจคเชิงวิชาการด้าน Problem Solving and Computer Programming สร้างด้วย ReactJS, TailwindCSS, Flask และ SQLite",
        technologies: ["ReactJS", "TailwindCSS", "Flask", "SQLite"],
        link: "https://github.com/Pisol00"
      }
    ]
  }
};

// For backward compatibility, keep profileData pointing to the English version
export const profileData = localizedData.en;