'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Server, Layout, Database, Users, ShoppingBag, Code2, Github, ExternalLink, Check, Star, ChevronRight, Eye, Calendar, Hash, Target, Images } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/common/animations/AnimatedSection';

export default function ShopDeePage() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [currentLang, setCurrentLang] = useState<'en' | 'th'>('en');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Check if animations should be enabled
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setAnimationsEnabled(!mediaQuery.matches);
    
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setAnimationsEnabled(!e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  // Check for language preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang === 'th' || savedLang === 'en') {
          setCurrentLang(savedLang as 'en' | 'th');
        } else {
          const browserLang = navigator.language.startsWith('th') ? 'th' : 'en';
          setCurrentLang(browserLang as 'th' | 'en');
        }
      } catch (e) {
        console.error('Error accessing localStorage:', e);
      }
    }
  }, []);

  // ฟังก์ชันสำหรับเปลี่ยนภาพ
  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  // Translations
  const translations = {
    backButton: currentLang === 'en' ? 'Back to Projects' : 'กลับไปยังหน้าโปรเจค',
    title: currentLang === 'en' ? 'Shopdee - E-Commerce Marketplace' : 'Shopdee - แพลตฟอร์มอีคอมเมิร์ซแบบ Marketplace',
    subtitle: currentLang === 'en' 
      ? 'A StockX and GOAT-inspired marketplace platform for fashion items' 
      : 'แพลตฟอร์มตลาดสำหรับสินค้าแฟชั่น ได้แรงบันดาลใจจาก StockX และ GOAT',
    overview: currentLang === 'en' 
      ? 'Shopdee is an e-commerce marketplace platform developed with Django Framework, inspired by websites like StockX and GOAT. The platform facilitates buying and selling of fashion items, particularly sneakers, clothing, bags, and accessories.' 
      : 'Shopdee เป็นแพลตฟอร์มอีคอมเมิร์ซแบบ marketplace ที่พัฒนาด้วย Django Framework โดยมีแนวคิดคล้ายกับเว็บไซต์ StockX และ GOAT ที่ให้บริการซื้อขายสินค้าแฟชั่น โดยเฉพาะรองเท้าสนีกเกอร์ เสื้อผ้า กระเป๋า และอุปกรณ์เสริมต่างๆ',
    projectStructure: currentLang === 'en' ? 'Project Structure' : 'โครงสร้างโปรเจค',
    keyFeatures: currentLang === 'en' ? 'Key Features' : 'คุณสมบัติหลัก',
    technologies: currentLang === 'en' ? 'Technologies Used' : 'เทคโนโลยีที่ใช้ในการพัฒนา',
    implementation: currentLang === 'en' ? 'Implementation Details' : 'รายละเอียดการพัฒนา',
    gallery: currentLang === 'en' ? 'Project Gallery' : 'แกลเลอรีโปรเจค',
    conclusion: currentLang === 'en' 
      ? 'The Shopdee project demonstrates the ability to develop a comprehensive e-commerce system from user management to product management, buying/selling processes, and data analytics.'
      : 'โปรเจค Shopdee แสดงให้เห็นถึงความสามารถในการพัฒนาระบบอีคอมเมิร์ซแบบครบวงจร ตั้งแต่การจัดการผู้ใช้ การจัดการสินค้า กระบวนการซื้อขาย และระบบการวิเคราะห์ข้อมูล',
    viewCode: currentLang === 'en' ? 'View Code' : 'ดูโค้ด',
    githubButton: currentLang === 'en' ? 'View on GitHub' : 'ดูบน GitHub',
    techFront: currentLang === 'en' ? 'Frontend' : 'ฟร้อนท์เอนด์',
    techBack: currentLang === 'en' ? 'Backend' : 'แบ็คเอนด์',
    techStorage: currentLang === 'en' ? 'Storage' : 'พื้นที่จัดเก็บข้อมูล',
    techArch: currentLang === 'en' ? 'Architecture' : 'สถาปัตยกรรม',
    appTypes: currentLang === 'en' ? 'Django Apps' : 'แอป Django',
    dataStructure: currentLang === 'en' ? 'Data Structure' : 'โครงสร้างข้อมูล',
    displaySystem: currentLang === 'en' ? 'Display System' : 'ระบบการแสดงผล',
    projectYear: currentLang === 'en' ? 'Year' : 'ปีที่พัฒนา',
    projectType: currentLang === 'en' ? 'Project Type' : 'ประเภทโปรเจค',
    projectTypeValue: currentLang === 'en' ? 'Academic Project' : 'โปรเจครายวิชาเป็นคู่',
    projectRole: currentLang === 'en' ? 'Role' : 'บทบาท',
    projectRoleValue: currentLang === 'en' ? 'Full Stack Developer' : 'นักพัฒนา Full Stack',
    nextImage: currentLang === 'en' ? 'Next Image' : 'ภาพถัดไป',
    prevImage: currentLang === 'en' ? 'Previous Image' : 'ภาพก่อนหน้า',
    viewLiveDemo: currentLang === 'en' ? 'View Live Demo' : 'ดูตัวอย่างเว็บไซต์',
  };

  // Project structure apps
  const projectApps = [
    {
      name: 'authen',
      description: currentLang === 'en'
        ? 'Manages user authentication systems (registration, login, logout)'
        : 'จัดการระบบการยืนยันตัวตนของผู้ใช้ (สมัครสมาชิก, เข้าสู่ระบบ, ออกจากระบบ)'
    },
    {
      name: 'shop',
      description: currentLang === 'en'
        ? 'Handles the core shop system, including products, orders, and payment processing'
        : 'จัดการระบบหลักของร้านค้า รวมถึงสินค้า, คำสั่งซื้อ, และกระบวนการชำระเงิน'
    },
    {
      name: 'employee',
      description: currentLang === 'en'
        ? 'Manages the system for employees and administrators'
        : 'จัดการระบบสำหรับพนักงานและผู้ดูแลระบบ'
    }
  ];

  // Key features
  const keyFeatures = [
    {
      icon: <Users size={20} />,
      title: currentLang === 'en' ? 'User Management' : 'ระบบผู้ใช้งาน',
      description: currentLang === 'en'
        ? 'User registration, login, profile management, and shipping address management.'
        : 'การลงทะเบียนผู้ใช้, เข้าสู่ระบบ, จัดการโปรไฟล์, จัดการที่อยู่จัดส่ง'
    },
    {
      icon: <ShoppingBag size={20} />,
      title: currentLang === 'en' ? 'Product System' : 'ระบบสินค้า',
      description: currentLang === 'en'
        ? 'Product listings, collections, brands, categories, filtering, and search functionality.'
        : 'การแสดงรายการสินค้า, คอลเลกชัน, แบรนด์, หมวดหมู่, การกรอง และฟังก์ชันการค้นหา'
    },
    {
      icon: <Layout size={20} />,
      title: currentLang === 'en' ? 'Marketplace Trading' : 'การซื้อขายสินค้า',
      description: currentLang === 'en'
        ? 'Buying products, selling products, shopping cart system, payment processing.'
        : 'การซื้อสินค้า, การขายสินค้า, ระบบตะกร้าสินค้า, การชำระเงิน'
    },
    {
      icon: <Server size={20} />,
      title: currentLang === 'en' ? 'Order Management' : 'การจัดการคำสั่งซื้อ',
      description: currentLang === 'en'
        ? 'Order tracking, sales tracking, filtering by status, order details.'
        : 'การติดตามคำสั่งซื้อ, การติดตามการขาย, การกรองตามสถานะ, รายละเอียดคำสั่งซื้อ'
    },
    {
      icon: <Database size={20} />,
      title: currentLang === 'en' ? 'Admin Dashboard' : 'แดชบอร์ดสำหรับผู้ดูแลระบบ',
      description: currentLang === 'en'
        ? 'Collection overview, sales analytics, managing brands, collections, and sellers.'
        : 'ภาพรวมคอลเลกชัน, การวิเคราะห์ยอดขาย, การจัดการแบรนด์, คอลเลกชัน และผู้ขาย'
    }
  ];

  // Technology categories
  const technologies = [
    {
      category: translations.techFront,
      items: ['HTML/CSS/JavaScript', 'Bootstrap', 'jQuery', 'Font Awesome', 'SweetAlert']
    },
    {
      category: translations.techBack,
      items: ['Django Framework', 'PostgreSQL', 'Django Authentication', 'Django ORM', 'Django Migrations']
    },
    {
      category: translations.techStorage,
      items: ['AWS S3', 'boto3']
    },
    {
      category: translations.techArch,
      items: ['MVC Pattern', 'Class-Based Views', 'Mixins', 'Transactions']
    }
  ];

  // Data structure items
  const dataStructureItems = [
    currentLang === 'en' ? 'Brand - Stores brand information with details and image links' : 'แบรนด์ (Brand) - เก็บข้อมูลแบรนด์พร้อมรายละเอียดและลิงก์รูปภาพ',
    currentLang === 'en' ? 'Category - Divides products into main categories like shoes, clothing, bags, and accessories' : 'หมวดหมู่ (Category) - แบ่งสินค้าเป็นหมวดหมู่หลักต่างๆ เช่น รองเท้า, เสื้อผ้า, กระเป๋า และอุปกรณ์เสริม',
    currentLang === 'en' ? 'Collection - Groups products of the same series or collection' : 'คอลเลกชัน (Collection) - รวมกลุ่มสินค้าที่เป็นซีรีส์หรือคอลเลกชันเดียวกัน',
    currentLang === 'en' ? 'Product - Information about specific items with size, condition, and price' : 'สินค้า (Product) - ข้อมูลสินค้าเฉพาะชิ้นที่มีขนาด สภาพ และราคาเฉพาะ'
  ];

  // Display system items
  const displaySystemItems = [
    currentLang === 'en' ? 'Homepage - Displays latest and popular products' : 'หน้าแรก (Homepage) - แสดงสินค้าล่าสุดและยอดนิยม',
    currentLang === 'en' ? 'Explore - Shows all products with filters and search' : 'หน้าสำรวจ (Explore) - แสดงสินค้าทั้งหมดพร้อมตัวกรองและการค้นหา',
    currentLang === 'en' ? 'Collection Details - Shows collection information with images, starting price, and latest selling price' : 'หน้ารายละเอียดคอลเลกชัน - แสดงข้อมูลเกี่ยวกับคอลเลกชันพร้อมรูปภาพ, ราคาเริ่มต้น, และราคาขายล่าสุด',
    currentLang === 'en' ? 'Size Selection - Allows users to select the size they want to buy or sell' : 'หน้าเลือกขนาด - ให้ผู้ใช้เลือกขนาดสินค้าที่ต้องการซื้อหรือขาย',
    currentLang === 'en' ? 'Conditional Display - Shows products based on selected size and condition (new/used)' : 'หน้าแสดงสินค้าตามเงื่อนไข - แสดงสินค้าตามขนาดและสภาพที่เลือก (ใหม่/มือสอง)'
  ];

  // Screenshots placeholders
  const screenshots = [
    { 
      label: currentLang === 'en' ? 'Home Page' : 'หน้าแรก',
      desc: currentLang === 'en' ? 'Landing page showing featured products and collections' : 'หน้าแรกแสดงสินค้าแนะนำและคอลเลคชั่นต่างๆ'
    },
    { 
      label: currentLang === 'en' ? 'Product Listing' : 'รายการสินค้า',
      desc: currentLang === 'en' ? 'Browse all products with category filters and search' : 'ดูสินค้าทั้งหมดพร้อมตัวกรองหมวดหมู่และการค้นหา'
    },
    { 
      label: currentLang === 'en' ? 'Product Detail' : 'รายละเอียดสินค้า',
      desc: currentLang === 'en' ? 'Detailed view of a product with size selection and pricing' : 'มุมมองรายละเอียดของสินค้าพร้อมการเลือกขนาดและราคา'
    },
    { 
      label: currentLang === 'en' ? 'Admin Dashboard' : 'แดชบอร์ดผู้ดูแล',
      desc: currentLang === 'en' ? 'Administrative interface for managing products and users' : 'อินเตอร์เฟซสำหรับผู้ดูแลระบบในการจัดการสินค้าและผู้ใช้'
    },
  ];

  // Icon wrapper component
  const IconWrapper = ({ icon, className = '' }: { icon: React.ReactNode, className?: string }) => (
    <div className={`w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 ${className}`}>
      {icon}
    </div>
  );

  // Feature card component
  type FeatureCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
  };

  const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
    const colorSchemes = [
      { bg: "bg-blue-50 dark:bg-blue-900/10", icon: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400", border: "border-blue-200 dark:border-blue-800/30" },
      { bg: "bg-emerald-50 dark:bg-emerald-900/10", icon: "bg-emerald-100 dark:bg-emerald-900/30", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-200 dark:border-emerald-800/30" },
      { bg: "bg-purple-50 dark:bg-purple-900/10", icon: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-600 dark:text-purple-400", border: "border-purple-200 dark:border-purple-800/30" },
      { bg: "bg-amber-50 dark:bg-amber-900/10", icon: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-600 dark:text-amber-400", border: "border-amber-200 dark:border-amber-800/30" },
      { bg: "bg-pink-50 dark:bg-pink-900/10", icon: "bg-pink-100 dark:bg-pink-900/30", text: "text-pink-600 dark:text-pink-400", border: "border-pink-200 dark:border-pink-800/30" },
    ];
    
    const colorScheme = colorSchemes[index % colorSchemes.length];
    
    return (
      <div 
        className={`${colorScheme.bg} rounded-xl border ${colorScheme.border} p-5 sm:p-6 shadow-md hover:shadow-xl transition-all group hover:-translate-y-1`}
      >
        <div className="flex gap-4 items-start">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${colorScheme.icon} flex items-center justify-center ${colorScheme.text} flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
          </div>
        </div>
      </div>
    );
  };

  // เพิ่ม Key Facts สำหรับเกี่ยวกับโปรเจค
  const keyFacts = [
    { 
      icon: <Calendar size={16} />, 
      label: translations.projectYear, 
      value: "2024" 
    },
    { 
      icon: <Hash size={16} />, 
      label: translations.projectType, 
      value: translations.projectTypeValue 
    },
    { 
      icon: <Target size={16} />, 
      label: translations.projectRole, 
      value: translations.projectRoleValue 
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-black overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-20 w-80 h-80 rounded-full bg-gray-100 dark:bg-gray-800/20 blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-gray-100 dark:bg-gray-800/20 blur-3xl opacity-40"></div>
      </div>

      {/* Fixed Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-black/90 border-b border-gray-200/30 dark:border-gray-800/30">
        <div className="container max-w-5xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="rounded-full bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <Link href="/#projects">
              <ChevronLeft size={16} className="mr-1" />
              {translations.backButton}
            </Link>
          </Button>

          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              asChild
              className="rounded-full bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Link href="https://github.com/Pisol00" target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-1" />
                {translations.githubButton}
              </Link>
            </Button>
            
            <Button 
              variant="default" 
              size="sm"
              asChild
              className="rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-black dark:hover:bg-gray-100"
            >
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Eye size={16} className="mr-1" />
                {translations.viewLiveDemo}
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container max-w-5xl mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <AnimatedSection
          animation="fade-in"
          disabled={!animationsEnabled}
          className="mb-8 sm:mb-12"
        >
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {translations.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
              {translations.subtitle}
            </p>
            
            {/* Tech stack tags */}

          </div>

          {/* Featured Image */}
          <div className="relative w-full h-72 sm:h-96 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden mb-6 sm:mb-8 shadow-xl border border-gray-300 dark:border-gray-700 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-500/10 opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <ShoppingBag size={40} className="mb-4 opacity-70 group-hover:scale-110 transition-transform duration-500" />
              <span className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 dark:from-white dark:to-gray-400">Shopdee Platform</span>
              <span className="mt-2 text-sm text-gray-300 dark:text-gray-400 max-w-md text-center px-4">
                {currentLang === 'en'
                  ? "An e-commerce marketplace built with Django, featuring user authentication, product management, and secure payment processing"
                  : "แพลตฟอร์มอีคอมเมิร์ซแบบตลาดที่สร้างด้วย Django มีระบบยืนยันตัวตนผู้ใช้ การจัดการสินค้า และการประมวลผลการชำระเงินที่ปลอดภัย"}
              </span>
              <div className="flex gap-2 mt-6">
                <Badge className="bg-black/30 hover:bg-black/40 text-white border-0">E-Commerce</Badge>
                <Badge className="bg-black/30 hover:bg-black/40 text-white border-0">Marketplace</Badge>
                <Badge className="bg-black/30 hover:bg-black/40 text-white border-0">Fashion</Badge>
              </div>
            </div>
          </div>

          {/* Key Facts Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {keyFacts.map((fact, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400">
                    {fact.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{fact.label}</p>
                    <p className="font-medium text-gray-900 dark:text-white">{fact.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Project Overview */}
        <AnimatedSection
          animation="fade-in"
          disabled={!animationsEnabled}
          className="mb-12"
        >
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <Eye size={20} className="text-gray-600 dark:text-gray-400" />
              {currentLang === 'en' ? 'Project Overview' : 'ภาพรวมโปรเจค'}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {translations.overview}
            </p>
            
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 sm:mt-8">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 mx-auto mb-2">
                  <Users size={18} />
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">User-Centric</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 mx-auto mb-2">
                  <ShoppingBag size={18} />
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">Marketplace</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 mx-auto mb-2">
                  <Database size={18} />
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">Data-Driven</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Key Features Section */}
        <AnimatedSection
          animation="fade-in"
          disabled={!animationsEnabled}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="h-10 w-1.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 text-transparent">
              {translations.keyFeatures}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {keyFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>

          {/* Workflow Diagram */}
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 p-6 shadow-md mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              {currentLang === 'en' ? 'User Workflow' : 'ขั้นตอนการใช้งาน'}
            </h3>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex-1 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/20 text-center">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users size={18} className="text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-900 dark:text-white font-medium text-sm">
                  {currentLang === 'en' ? 'User Registration' : 'ลงทะเบียนผู้ใช้'}
                </p>
              </div>
              
              <div className="hidden sm:block text-gray-400">
                <ChevronRight size={20} />
              </div>
              <div className="block sm:hidden text-gray-400 self-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14"></path>
                  <path d="m19 12-7 7-7-7"></path>
                </svg>
              </div>
              
              <div className="flex-1 p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg border border-emerald-100 dark:border-emerald-900/20 text-center">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-800/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <ShoppingBag size={18} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-gray-900 dark:text-white font-medium text-sm">
                  {currentLang === 'en' ? 'Browse Products' : 'เรียกดูสินค้า'}
                </p>
              </div>
              
              <div className="hidden sm:block text-gray-400">
                <ChevronRight size={20} />
              </div>
              <div className="block sm:hidden text-gray-400 self-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14"></path>
                  <path d="m19 12-7 7-7-7"></path>
                </svg>
              </div>
              
              <div className="flex-1 p-4 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-900/20 text-center">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-800/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400">
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </svg>
                </div>
                <p className="text-gray-900 dark:text-white font-medium text-sm">
                  {currentLang === 'en' ? 'Add to Cart' : 'เพิ่มลงตะกร้า'}
                </p>
              </div>
              
              <div className="hidden sm:block text-gray-400">
                <ChevronRight size={20} />
              </div>
              <div className="block sm:hidden text-gray-400 self-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14"></path>
                  <path d="m19 12-7 7-7-7"></path>
                </svg>
              </div>
              
              <div className="flex-1 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-lg border border-amber-100 dark:border-amber-900/20 text-center">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-800/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 dark:text-amber-400">
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <p className="text-gray-900 dark:text-white font-medium text-sm">
                  {currentLang === 'en' ? 'Checkout' : 'ชำระเงิน'}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 text-center">
              {currentLang === 'en' 
                ? 'The platform streamlines the shopping experience from user registration to checkout, with a focus on ease of use and security.'
                : 'แพลตฟอร์มนี้ช่วยให้ประสบการณ์การช้อปปิ้งเป็นไปอย่างราบรื่นตั้งแต่การลงทะเบียนผู้ใช้จนถึงการชำระเงิน โดยเน้นที่ความง่ายในการใช้งานและความปลอดภัย'}
            </p>
          </div>
        </AnimatedSection>

        {/* Project Structure Section */}
        <AnimatedSection
          animation="fade-in"
          disabled={!animationsEnabled}
          className="mb-12"
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Code2 size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
              {translations.projectStructure}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {projectApps.map((app, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm border-l-4 border-gray-300 dark:border-gray-600"
                >
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {app.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Data Structure */}
        <AnimatedSection
          animation="fade-in"
          disabled={!animationsEnabled}
          className="mb-12"
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Database size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
              {translations.dataStructure}
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {dataStructureItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                >
                  <Check size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Display System */}
        <AnimatedSection
          animation="fade-in"
          disabled={!animationsEnabled}
          className="mb-12"
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Layout size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
              {translations.displaySystem}
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {displaySystemItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                >
                  <Check size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Technologies Section */}
        <AnimatedSection
          animation="fade-in"
          disabled={!animationsEnabled}
          className="mb-12"
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Code2 size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
              {translations.technologies}
            </h3>
            
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border-l-2 border-gray-300 dark:border-gray-600">
                  <h3 className="font-medium text-gray-900 dark:text-white text-base mb-4">{tech.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 py-1"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Visualization */}
        </AnimatedSection>

        {/* Gallery Section */}
        <AnimatedSection
          animation="fade-in"
          disabled={!animationsEnabled}
          className="mb-12"
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Images size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
              {translations.gallery}
            </h3>
            
            {/* Image Carousel */}
            <div className="relative">
              {/* Active Image */}
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-4 relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 p-4">
                  {/* Placeholder Icon */}
                  {activeImageIndex === 0 && <ShoppingBag size={28} className="mb-3 opacity-50" />}
                  {activeImageIndex === 1 && <Layout size={28} className="mb-3 opacity-50" />}
                  {activeImageIndex === 2 && <ShoppingBag size={28} className="mb-3 opacity-50" />}
                  {activeImageIndex === 3 && <Database size={28} className="mb-3 opacity-50" />}
                  
                  {/* Caption */}
                  <span className="font-medium text-lg">{screenshots[activeImageIndex].label}</span>
                  <p className="text-sm text-gray-400 dark:text-gray-500 text-center mt-2">
                    {screenshots[activeImageIndex].desc}
                  </p>
                  
                  {/* Placeholder image dimensions */}
                  <div className="absolute bottom-3 right-3 bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-0.5 text-xs">
                    1920 × 1080
                  </div>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <div className="absolute top-1/2 left-2 -translate-y-1/2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevImage}
                  className="rounded-full w-8 h-8 bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 cursor-pointer"
                  aria-label={translations.prevImage}
                >
                  <ChevronLeft size={16} className="text-gray-600 dark:text-gray-300" />
                </Button>
              </div>
              
              <div className="absolute top-1/2 right-2 -translate-y-1/2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextImage}
                  className="rounded-full w-8 h-8 bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 cursor-pointer"
                  aria-label={translations.nextImage}
                >
                  <ChevronRight size={16} className="text-gray-600 dark:text-gray-300" />
                </Button>
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {screenshots.map((screenshot, index) => (
                <div 
                  key={index} 
                  className={`aspect-video bg-gray-100 dark:bg-gray-800 rounded-md cursor-pointer flex items-center justify-center p-2 transition-all ${
                    activeImageIndex === index 
                      ? 'ring-2 ring-gray-900 dark:ring-white' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <span className="text-xs text-center text-gray-600 dark:text-gray-300 font-medium">
                    {screenshot.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}