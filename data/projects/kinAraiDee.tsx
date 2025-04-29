import { 
    ShoppingBag, 
    Calendar, 
    Hash, 
    Target, 
    Users, 
    Server, 
    Layout, 
    Database 
  } from 'lucide-react';
  
  export const kinAraiDeeProject = {
    title: "Kin Arai Dee KMITL",
    subtitle: {
      en: "A food recommendation platform for KMITL students to easily decide what to eat",
      th: "แพลตฟอร์มแนะนำอาหารสำหรับนักศึกษา KMITL เพื่อช่วยตัดสินใจว่าจะกินอะไรดี"
    },
    platformDescription: {
      en: "A decision-making tool for students to find and choose restaurants and menus around KMITL campus.",
      th: "เครื่องมือช่วยตัดสินใจสำหรับนักศึกษาในการค้นหาและเลือกร้านอาหารและเมนูรอบๆ มจธ."
    },
    icon: <ShoppingBag size={40} className="mb-4 opacity-70 group-hover:scale-110 transition-transform duration-500" />,
    badges: ["Food", "Restaurant", "Recommendation"],
    githubUrl: "https://github.com/misterfocusth/Kin-Arai-Dee-KMITL",
    demoUrl: "#",
    bgGradient: "from-yellow-600/20 to-red-600/20",
    
    // Key facts
    keyFacts: [
      { 
        icon: <Calendar size={16} />, 
        label: {
          en: "Year",
          th: "ปีที่พัฒนา"
        }, 
        value: "2022" 
      },
      { 
        icon: <Hash size={16} />, 
        label: {
          en: "Project Type",
          th: "ประเภทโปรเจค"
        }, 
        value: {
          en: "Academic Project",
          th: "โปรเจคการศึกษา"
        }
      },
      { 
        icon: <Target size={16} />, 
        label: {
          en: "Course",
          th: "วิชา"
        }, 
        value: {
          en: "Problem Solving and Computer Programming",
          th: "การแก้ปัญหาและการเขียนโปรแกรมคอมพิวเตอร์"
        }
      },
    ],
    
    // Overview section
    overview: {
      title: {
        en: "Project Overview",
        th: "ภาพรวมโปรเจค"
      },
      description: {
        en: "Kin Arai Dee KMITL ('What Should I Eat Today?') is a comprehensive food recommendation platform designed to help KMITL students make quick and informed decisions about their meals. The platform aggregates information about restaurants and menus from around the campus, allowing users to browse, search, and get random suggestions. It integrates with LINE for user authentication and features a robust review system to help users discover quality food options.",
        th: "Kin Arai Dee KMITL ('วันนี้กินอะไรดี') เป็นแพลตฟอร์มแนะนำอาหารที่ครบวงจรออกแบบมาเพื่อช่วยนักศึกษา KMITL ตัดสินใจเกี่ยวกับอาหารได้อย่างรวดเร็วและมีข้อมูล แพลตฟอร์มรวบรวมข้อมูลร้านอาหารและเมนูจากรอบๆ มหาวิทยาลัย ช่วยให้ผู้ใช้สามารถเรียกดู ค้นหา และรับคำแนะนำแบบสุ่ม รวมถึงรองรับการเข้าใช้งานผ่าน LINE และมีระบบรีวิวที่ช่วยให้ผู้ใช้ค้นพบตัวเลือกอาหารที่มีคุณภาพ"
      },
      quickStats: [
        {
          icon: <Users size={18} />,
          label: "User-Centric"
        },
        {
          icon: <ShoppingBag size={18} />,
          label: "Food Catalog"
        },
        {
          icon: <Database size={18} />,
          label: "Data-Driven"
        }
      ]
    },
    
    // Features section
    features: {
      title: {
        en: "Key Features",
        th: "คุณสมบัติหลัก"
      },
      items: [
        {
          icon: <Users size={20} />,
          title: {
            en: "User System",
            th: "ระบบผู้ใช้งาน"
          },
          description: {
            en: "User authentication through LINE LIFF, account management, and personalized recommendations.",
            th: "การยืนยันตัวตนผู้ใช้ผ่าน LINE LIFF การจัดการบัญชี และคำแนะนำส่วนบุคคล"
          }
        },
        {
          icon: <ShoppingBag size={20} />,
          title: {
            en: "Restaurant Management",
            th: "การจัดการร้านอาหาร"
          },
          description: {
            en: "Comprehensive restaurant information, menus, reviews, and ratings.",
            th: "ข้อมูลร้านอาหารที่ครบถ้วน เมนู รีวิว และการให้คะแนน"
          }
        },
        {
          icon: <Layout size={20} />,
          title: {
            en: "Menu Catalog",
            th: "แคตาล็อกเมนู"
          },
          description: {
            en: "Extensive catalog of menu items with detailed information, categorization, and filtering.",
            th: "แคตาล็อกเมนูอาหารที่ครอบคลุมพร้อมข้อมูลโดยละเอียด การจัดหมวดหมู่ และการกรอง"
          }
        },
        {
          icon: <Server size={20} />,
          title: {
            en: "Random Selection",
            th: "การสุ่มเลือก"
          },
          description: {
            en: "Intelligent random meal selector to help users make quick decisions on what to eat.",
            th: "ตัวเลือกอาหารแบบสุ่มอัจฉริยะเพื่อช่วยผู้ใช้ตัดสินใจอย่างรวดเร็วว่าจะกินอะไร"
          }
        },
        {
          icon: <Database size={20} />,
          title: {
            en: "Review System",
            th: "ระบบรีวิว"
          },
          description: {
            en: "User-generated reviews and ratings for restaurants and menu items.",
            th: "รีวิวและการให้คะแนนจากผู้ใช้สำหรับร้านอาหารและเมนู"
          }
        }
      ],
      workflow: {
        title: {
          en: "User Workflow",
          th: "ขั้นตอนการใช้งาน"
        },
        steps: [
          {
            icon: <Users size={18} className="text-blue-600 dark:text-blue-400" />,
            label: {
              en: "LINE Login",
              th: "เข้าสู่ระบบผ่าน LINE"
            },
            bgColor: "bg-blue-50 dark:bg-blue-900/10",
            iconBgColor: "bg-blue-100 dark:bg-blue-800/30",
            textColor: "text-blue-600 dark:text-blue-400"
          },
          {
            icon: <ShoppingBag size={18} className="text-emerald-600 dark:text-emerald-400" />,
            label: {
              en: "Browse Restaurants",
              th: "เรียกดูร้านอาหาร"
            },
            bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
            iconBgColor: "bg-emerald-100 dark:bg-emerald-800/30",
            textColor: "text-emerald-600 dark:text-emerald-400"
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400">
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
              <path d="M7 2v20"></path>
              <path d="M21 15V2"></path>
              <path d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"></path>
            </svg>,
            label: {
              en: "View Menus",
              th: "ดูเมนู"
            },
            bgColor: "bg-purple-50 dark:bg-purple-900/10",
            iconBgColor: "bg-purple-100 dark:bg-purple-800/30",
            textColor: "text-purple-600 dark:text-purple-400"
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 dark:text-amber-400">
              <path d="M4 20h16"></path>
              <path d="m6 9 6 6 6-6"></path>
              <path d="M12 3v12"></path>
            </svg>,
            label: {
              en: "Get Random Menu",
              th: "รับเมนูแบบสุ่ม"
            },
            bgColor: "bg-amber-50 dark:bg-amber-900/10",
            iconBgColor: "bg-amber-100 dark:bg-amber-800/30",
            textColor: "text-amber-600 dark:text-amber-400"
          }
        ],
        description: {
          en: "A streamlined user experience from login to meal decision, helping students save time and discover new food options.",
          th: "ประสบการณ์ผู้ใช้ที่คล่องตัวตั้งแต่การเข้าสู่ระบบจนถึงการตัดสินใจเลือกอาหาร ช่วยให้นักศึกษาประหยัดเวลาและค้นพบตัวเลือกอาหารใหม่ๆ"
        }
      }
    },
    
    // Project structure
    structure: {
      title: {
        en: "Project Structure",
        th: "โครงสร้างโปรเจค"
      },
      apps: [
        {
          name: "frontend",
          description: {
            en: "React application with TailwindCSS for the user interface.",
            th: "แอปพลิเคชัน React พร้อม TailwindCSS สำหรับส่วนติดต่อผู้ใช้"
          }
        },
        {
          name: "backend",
          description: {
            en: "Python Flask API with SQLite database and ORM.",
            th: "Python Flask API พร้อมฐานข้อมูล SQLite และ ORM"
          }
        },
        {
          name: "database",
          description: {
            en: "SQLite with SQLAlchemy ORM for data persistence.",
            th: "SQLite พร้อม SQLAlchemy ORM สำหรับการจัดเก็บข้อมูล"
          }
        }
      ]
    },
    
    // Data sections
    dataSections: {
      dataStructure: {
        title: {
          en: "Data Structure",
          th: "โครงสร้างข้อมูล"
        },
        icon: <Database size={20} className="mr-3 text-gray-500 dark:text-gray-400" />,
        items: [
          {
            en: "User model with LINE integration and user preferences",
            th: "โมเดลผู้ใช้พร้อมการผสานกับ LINE และการตั้งค่าผู้ใช้"
          },
          {
            en: "Restaurant model with location, category, and contact information",
            th: "โมเดลร้านอาหารพร้อมข้อมูลตำแหน่ง หมวดหมู่ และข้อมูลติดต่อ"
          },
          {
            en: "Menu items with pricing, categories, and restaurant relationships",
            th: "รายการเมนูพร้อมราคา หมวดหมู่ และความสัมพันธ์กับร้านอาหาร"
          },
          {
            en: "Review system for both restaurants and menu items",
            th: "ระบบรีวิวสำหรับทั้งร้านอาหารและรายการเมนู"
          },
          {
            en: "Random selection history for user recommendations",
            th: "ประวัติการสุ่มเลือกสำหรับคำแนะนำส่วนบุคคล"
          }
        ]
      },
      displaySystem: {
        title: {
          en: "User Interface Pages",
          th: "หน้าส่วนติดต่อผู้ใช้"
        },
        icon: <Layout size={20} className="mr-3 text-gray-500 dark:text-gray-400" />,
        items: [
          {
            en: "Dynamic homepage with menu listing and category filtering",
            th: "หน้าแรกแบบไดนามิกพร้อมรายการเมนูและการกรองตามหมวดหมู่"
          },
          {
            en: "Restaurant pages with detailed information and menu items",
            th: "หน้าร้านอาหารพร้อมข้อมูลโดยละเอียดและรายการเมนู"
          },
          {
            en: "Menu detail views with image, price, and reviews",
            th: "มุมมองรายละเอียดเมนูพร้อมรูปภาพ ราคา และรีวิว"
          },
          {
            en: "Random menu selection with category filtering options",
            th: "การสุ่มเลือกเมนูพร้อมตัวเลือกการกรองตามหมวดหมู่"
          },
          {
            en: "User profile and history of random selections",
            th: "โปรไฟล์ผู้ใช้และประวัติการสุ่มเลือก"
          }
        ]
      }
    },
    
    // Technologies
    technologies: {
      title: {
        en: "Technologies Used",
        th: "เทคโนโลยีที่ใช้"
      },
      categories: [
        {
          category: {
            en: "Frontend Technologies",
            th: "เทคโนโลยีฟร้อนท์เอนด์"
          },
          items: ['HTML/CSS', 'JavaScript', 'ReactJS', 'TailwindCSS', 'Mantine UI', 'Material UI']
        },
        {
          category: {
            en: "Backend Technologies",
            th: "เทคโนโลยีแบ็คเอนด์"
          },
          items: ['Python', 'Flask', 'Flask RESTful', 'SQLAlchemy ORM', 'JWT Authentication']
        },
        {
          category: {
            en: "Storage & Integration",
            th: "การจัดเก็บและการผสานรวม"
          },
          items: ['SQLite', 'Azure Blob Storage', 'LINE LIFF SDK']
        },
        {
          category: {
            en: "Architecture & Tools",
            th: "สถาปัตยกรรมและเครื่องมือ"
          },
          items: ['RESTful API', 'MVC Pattern', 'Responsive Design', 'ngrok']
        }
      ]
    },
    
    // Gallery
    gallery: {
      title: {
        en: "Screenshot Gallery",
        th: "แกลเลอรีภาพหน้าจอ"
      },
      nextImageLabel: {
        en: "Next Image",
        th: "ภาพถัดไป"
      },
      prevImageLabel: {
        en: "Previous Image",
        th: "ภาพก่อนหน้า"
      },
      screenshots: [
        { 
          label: {
            en: "Home Page",
            th: "หน้าแรก"
          },
          desc: {
            en: "Main landing page showing menu items from all restaurants with category filtering.",
            th: "หน้าแรกที่แสดงรายการเมนูจากทุกร้านพร้อมตัวกรองตามหมวดหมู่"
          },
          icon: <ShoppingBag size={28} className="mb-3 opacity-50" />
        },
        { 
          label: {
            en: "Restaurant Listing",
            th: "รายการร้านอาหาร"
          },
          desc: {
            en: "Complete list of restaurants with search functionality.",
            th: "รายการร้านอาหารทั้งหมดพร้อมฟังก์ชันการค้นหา"
          },
          icon: <Layout size={28} className="mb-3 opacity-50" />
        },
        { 
          label: {
            en: "Menu Details",
            th: "รายละเอียดเมนู"
          },
          desc: {
            en: "Detailed view of menu items with pricing and restaurant information.",
            th: "มุมมองโดยละเอียดของรายการเมนูพร้อมราคาและข้อมูลร้านอาหาร"
          },
          icon: <ShoppingBag size={28} className="mb-3 opacity-50" />
        },
        { 
          label: {
            en: "Random Menu",
            th: "เมนูแบบสุ่ม"
          },
          desc: {
            en: "Random menu selection page with user history.",
            th: "หน้าสุ่มเลือกเมนูพร้อมประวัติของผู้ใช้"
          },
          icon: <Database size={28} className="mb-3 opacity-50" />
        }
      ]
    }
  };