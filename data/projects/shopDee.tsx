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
  
  export const shopDeeProject = {
    title: "ShopDee - E-Commerce Marketplace",
    subtitle: {
      en: "A StockX and GOAT-inspired marketplace platform for fashion items",
      th: "แพลตฟอร์มตลาดสำหรับสินค้าแฟชั่น ได้แรงบันดาลใจจาก StockX และ GOAT"
    },
    platformDescription: {
      en: "An e-commerce marketplace built with Django, featuring user authentication, product management, and secure payment processing",
      th: "แพลตฟอร์มอีคอมเมิร์ซแบบตลาดที่สร้างด้วย Django มีระบบยืนยันตัวตนผู้ใช้ การจัดการสินค้า และการประมวลผลการชำระเงินที่ปลอดภัย"
    },
    icon: <ShoppingBag size={40} className="mb-4 opacity-70 group-hover:scale-110 transition-transform duration-500" />,
    badges: ["E-Commerce", "Marketplace", "Fashion"],
    githubUrl: "https://github.com/Pisol00",
    demoUrl: "#",
    bgGradient: "from-blue-600/20 to-purple-600/20",
    
    // Key facts
    keyFacts: [
      { 
        icon: <Calendar size={16} />, 
        label: {
          en: "Year",
          th: "ปีที่พัฒนา"
        }, 
        value: "2024" 
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
          en: "Role",
          th: "บทบาท"
        }, 
        value: {
          en: "Full Stack Developer",
          th: "นักพัฒนา Full Stack"
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
        en: "Shopdee is an e-commerce marketplace platform developed with Django Framework, inspired by websites like StockX and GOAT. The platform facilitates buying and selling of fashion items, particularly sneakers, clothing, bags, and accessories.",
        th: "Shopdee เป็นแพลตฟอร์มอีคอมเมิร์ซแบบ marketplace ที่พัฒนาด้วย Django Framework โดยมีแนวคิดคล้ายกับเว็บไซต์ StockX และ GOAT ที่ให้บริการซื้อขายสินค้าแฟชั่น โดยเฉพาะรองเท้าสนีกเกอร์ เสื้อผ้า กระเป๋า และอุปกรณ์เสริมต่างๆ"
      },
      quickStats: [
        {
          icon: <Users size={18} />,
          label: "User-Centric"
        },
        {
          icon: <ShoppingBag size={18} />,
          label: "Marketplace"
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
            en: "User Management",
            th: "ระบบผู้ใช้งาน"
          },
          description: {
            en: "User registration, login, profile management, and shipping address management.",
            th: "การลงทะเบียนผู้ใช้, เข้าสู่ระบบ, จัดการโปรไฟล์, จัดการที่อยู่จัดส่ง"
          }
        },
        {
          icon: <ShoppingBag size={20} />,
          title: {
            en: "Product System",
            th: "ระบบสินค้า"
          },
          description: {
            en: "Product listings, collections, brands, categories, filtering, and search functionality.",
            th: "การแสดงรายการสินค้า, คอลเลกชัน, แบรนด์, หมวดหมู่, การกรอง และฟังก์ชันการค้นหา"
          }
        },
        {
          icon: <Layout size={20} />,
          title: {
            en: "Marketplace Trading",
            th: "การซื้อขายสินค้า"
          },
          description: {
            en: "Buying products, selling products, shopping cart system, payment processing.",
            th: "การซื้อสินค้า, การขายสินค้า, ระบบตะกร้าสินค้า, การชำระเงิน"
          }
        },
        {
          icon: <Server size={20} />,
          title: {
            en: "Order Management",
            th: "การจัดการคำสั่งซื้อ"
          },
          description: {
            en: "Order tracking, sales tracking, filtering by status, order details.",
            th: "การติดตามคำสั่งซื้อ, การติดตามการขาย, การกรองตามสถานะ, รายละเอียดคำสั่งซื้อ"
          }
        },
        {
          icon: <Database size={20} />,
          title: {
            en: "Admin Dashboard",
            th: "แดชบอร์ดสำหรับผู้ดูแลระบบ"
          },
          description: {
            en: "Collection overview, sales analytics, managing brands, collections, and sellers.",
            th: "ภาพรวมคอลเลกชัน, การวิเคราะห์ยอดขาย, การจัดการแบรนด์, คอลเลกชัน และผู้ขาย"
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
              en: "User Registration",
              th: "ลงทะเบียนผู้ใช้"
            },
            bgColor: "bg-blue-50 dark:bg-blue-900/10",
            iconBgColor: "bg-blue-100 dark:bg-blue-800/30",
            textColor: "text-blue-600 dark:text-blue-400"
          },
          {
            icon: <ShoppingBag size={18} className="text-emerald-600 dark:text-emerald-400" />,
            label: {
              en: "Browse Products",
              th: "เรียกดูสินค้า"
            },
            bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
            iconBgColor: "bg-emerald-100 dark:bg-emerald-800/30",
            textColor: "text-emerald-600 dark:text-emerald-400"
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400">
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>,
            label: {
              en: "Add to Cart",
              th: "เพิ่มลงตะกร้า"
            },
            bgColor: "bg-purple-50 dark:bg-purple-900/10",
            iconBgColor: "bg-purple-100 dark:bg-purple-800/30",
            textColor: "text-purple-600 dark:text-purple-400"
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 dark:text-amber-400">
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <line x1="2" x2="22" y1="10" y2="10"></line>
            </svg>,
            label: {
              en: "Checkout",
              th: "ชำระเงิน"
            },
            bgColor: "bg-amber-50 dark:bg-amber-900/10",
            iconBgColor: "bg-amber-100 dark:bg-amber-800/30",
            textColor: "text-amber-600 dark:text-amber-400"
          }
        ],
        description: {
          en: "The platform streamlines the shopping experience from user registration to checkout, with a focus on ease of use and security.",
          th: "แพลตฟอร์มนี้ช่วยให้ประสบการณ์การช้อปปิ้งเป็นไปอย่างราบรื่นตั้งแต่การลงทะเบียนผู้ใช้จนถึงการชำระเงิน โดยเน้นที่ความง่ายในการใช้งานและความปลอดภัย"
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
          name: "authen",
          description: {
            en: "Manages user authentication systems (registration, login, logout)",
            th: "จัดการระบบการยืนยันตัวตนของผู้ใช้ (สมัครสมาชิก, เข้าสู่ระบบ, ออกจากระบบ)"
          }
        },
        {
          name: "shop",
          description: {
            en: "Handles the core shop system, including products, orders, and payment processing",
            th: "จัดการระบบหลักของร้านค้า รวมถึงสินค้า, คำสั่งซื้อ, และกระบวนการชำระเงิน"
          }
        },
        {
          name: "employee",
          description: {
            en: "Manages the system for employees and administrators",
            th: "จัดการระบบสำหรับพนักงานและผู้ดูแลระบบ"
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
            en: "Brand - Stores brand information with details and image links",
            th: "แบรนด์ (Brand) - เก็บข้อมูลแบรนด์พร้อมรายละเอียดและลิงก์รูปภาพ"
          },
          {
            en: "Category - Divides products into main categories like shoes, clothing, bags, and accessories",
            th: "หมวดหมู่ (Category) - แบ่งสินค้าเป็นหมวดหมู่หลักต่างๆ เช่น รองเท้า, เสื้อผ้า, กระเป๋า และอุปกรณ์เสริม"
          },
          {
            en: "Collection - Groups products of the same series or collection",
            th: "คอลเลกชัน (Collection) - รวมกลุ่มสินค้าที่เป็นซีรีส์หรือคอลเลกชันเดียวกัน"
          },
          {
            en: "Product - Information about specific items with size, condition, and price",
            th: "สินค้า (Product) - ข้อมูลสินค้าเฉพาะชิ้นที่มีขนาด สภาพ และราคาเฉพาะ"
          },
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
            en: "Homepage - Displays latest and popular products",
            th: "หน้าแรก (Homepage) - แสดงสินค้าล่าสุดและยอดนิยม"
          },
          {
            en: "Explore - Shows all products with filters and search",
            th: "หน้าสำรวจ (Explore) - แสดงสินค้าทั้งหมดพร้อมตัวกรองและการค้นหา"
          },
          {
            en: "Collection Details - Shows collection information with images, starting price, and latest selling price",
            th: "หน้ารายละเอียดคอลเลกชัน - แสดงข้อมูลเกี่ยวกับคอลเลกชันพร้อมรูปภาพ, ราคาเริ่มต้น, และราคาขายล่าสุด"
          },
          {
            en: "Size Selection - Allows users to select the size they want to buy or sell",
            th: "หน้าเลือกขนาด - ให้ผู้ใช้เลือกขนาดสินค้าที่ต้องการซื้อหรือขาย"
          },
          {
            en: "Conditional Display - Shows products based on selected size and condition (new/used)",
            th: "หน้าแสดงสินค้าตามเงื่อนไข - แสดงสินค้าตามขนาดและสภาพที่เลือก (ใหม่/มือสอง)"
          },
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
            en: "Frontend",
            th: "ฟร้อนท์เอนด์"
          },
          items: ['HTML/CSS/JavaScript', 'Bootstrap', 'jQuery', 'Font Awesome', 'SweetAlert']
        },
        {
          category: {
            en: "Backend",
            th: "แบ็คเอนด์"
          },
          items: ['Django Framework', 'PostgreSQL', 'Django Authentication', 'Django ORM', 'Django Migrations']
        },
        {
          category: {
            en: "Storage",
            th: "การจัดเก็บข้อมูล"
          },
          items: ['AWS S3', 'boto3']
        },
        {
          category: {
            en: "Architecture",
            th: "สถาปัตยกรรม"
          },
          items: ['MVC Pattern', 'Class-Based Views', 'Mixins', 'Transactions']
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
            en: "Landing page showing featured products and collections",
            th: "หน้าแรกแสดงสินค้าแนะนำและคอลเลคชั่นต่างๆ"
          },
          icon: <ShoppingBag size={28} className="mb-3 opacity-50" />
        },
        { 
          label: {
            en: "Product Listing",
            th: "รายการสินค้า"
          },
          desc: {
            en: "Browse all products with category filters and search",
            th: "ดูสินค้าทั้งหมดพร้อมตัวกรองหมวดหมู่และการค้นหา"
          },
          icon: <Layout size={28} className="mb-3 opacity-50" />
        },
        { 
          label: {
            en: "Product Detail",
            th: "รายละเอียดสินค้า"
          },
          desc: {
            en: "Detailed view of a product with size selection and pricing",
            th: "มุมมองรายละเอียดของสินค้าพร้อมการเลือกขนาดและราคา"
          },
          icon: <ShoppingBag size={28} className="mb-3 opacity-50" />
        },
        { 
          label: {
            en: "Admin Dashboard",
            th: "แดชบอร์ดผู้ดูแล"
          },
          desc: {
            en: "Administrative interface for managing products and users",
            th: "อินเตอร์เฟซสำหรับผู้ดูแลระบบในการจัดการสินค้าและผู้ใช้"
          },
          icon: <Database size={28} className="mb-3 opacity-50" />
        }
      ]
    }
  };