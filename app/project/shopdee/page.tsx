'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Server, Layout, Database, Users, ShoppingBag, Code, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/common/animations/AnimatedSection';
import { AppProviders } from '@/contexts';

// Wrap page content in providers
export default function ShopdeePage() {
  return (
    <AppProviders>
      <ShopDeeContent />
    </AppProviders>
  );
}

// Actual page content
function ShopDeeContent() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [currentLang, setCurrentLang] = useState<'en' | 'th'>('en');
  
  // Check if animations should be enabled
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setAnimationsEnabled(!mediaQuery.matches);
    
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setAnimationsEnabled(!e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    // Clean up event listener
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  // Check for language preference
  useEffect(() => {
    // Try to get saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang === 'th' || savedLang === 'en') {
      setCurrentLang(savedLang);
    } else {
      // Check browser language
      const browserLang = navigator.language.startsWith('th') ? 'th' : 'en';
      setCurrentLang(browserLang as 'th' | 'en');
    }
  }, []);

  // Translations
  const t = {
    backButton: currentLang === 'en' ? 'Back to Projects' : 'กลับไปยังหน้าโปรเจค',
    githubButton: currentLang === 'en' ? 'View on GitHub' : 'ดูบน GitHub',
    title: currentLang === 'en' ? 'Shopdee - E-Commerce Marketplace' : 'Shopdee - แพลตฟอร์มอีคอมเมิร์ซแบบ Marketplace',
    subtitle: currentLang === 'en' 
      ? 'A StockX and GOAT-inspired marketplace platform for fashion items' 
      : 'แพลตฟอร์มตลาดสำหรับสินค้าแฟชั่น ได้แรงบันดาลใจจาก StockX และ GOAT',
    overview: {
      title: currentLang === 'en' ? 'Project Overview' : 'ภาพรวมโปรเจค',
      content: currentLang === 'en' 
        ? 'Shopdee is an e-commerce marketplace platform developed with Django Framework, inspired by websites like StockX and GOAT. The platform facilitates buying and selling of fashion items, particularly sneakers, clothing, bags, and accessories.' 
        : 'Shopdee เป็นแพลตฟอร์มอีคอมเมิร์ซแบบ marketplace ที่พัฒนาด้วย Django Framework โดยมีแนวคิดคล้ายกับเว็บไซต์ StockX และ GOAT ที่ให้บริการซื้อขายสินค้าแฟชั่น โดยเฉพาะรองเท้าสนีกเกอร์ เสื้อผ้า กระเป๋า และอุปกรณ์เสริมต่างๆ'
    },
    projectStructure: {
      title: currentLang === 'en' ? 'Project Structure' : 'โครงสร้างโปรเจค',
      content: currentLang === 'en'
        ? 'Shopdee is divided into three main Django apps:'
        : 'โปรเจค Shopdee แบ่งออกเป็น 3 แอปหลักใน Django:',
    },
    keyFeatures: {
      title: currentLang === 'en' ? 'Key Features' : 'คุณสมบัติหลัก',
    },
    technologies: {
      title: currentLang === 'en' ? 'Technologies Used' : 'เทคโนโลยีที่ใช้ในการพัฒนา',
    },
    implementation: {
      title: currentLang === 'en' ? 'Implementation Details' : 'รายละเอียดการพัฒนา',
      dataStructure: {
        title: currentLang === 'en' ? 'Data Structure' : 'โครงสร้างข้อมูล',
      },
      displaySystem: {
        title: currentLang === 'en' ? 'Display System' : 'ระบบการแสดงผล',
      }
    },
    gallery: {
      title: currentLang === 'en' ? 'Project Gallery' : 'แกลเลอรีโปรเจค',
      description: currentLang === 'en'
        ? 'Visual representations of the Shopdee platform, showcasing the user interface and key features.'
        : 'ภาพแสดงแพลตฟอร์ม Shopdee แสดงให้เห็นส่วนติดต่อผู้ใช้และคุณสมบัติหลัก'
    },
    conclusion: {
      title: currentLang === 'en' ? 'Conclusion' : 'บทสรุป',
      content: currentLang === 'en'
        ? 'The Shopdee project demonstrates the ability to develop a comprehensive e-commerce system from user management to product management, buying/selling processes, and data analytics.'
        : 'โปรเจค Shopdee แสดงให้เห็นถึงความสามารถในการพัฒนาระบบอีคอมเมิร์ซแบบครบวงจร ตั้งแต่การจัดการผู้ใช้ การจัดการสินค้า กระบวนการซื้อขาย และระบบการวิเคราะห์ข้อมูล'
    },
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
      icon: <Users size={22} />,
      title: currentLang === 'en' ? 'User Management' : 'ระบบผู้ใช้งาน',
      description: currentLang === 'en'
        ? 'User registration, login, profile management, and shipping address management.'
        : 'การลงทะเบียนผู้ใช้, เข้าสู่ระบบ, จัดการโปรไฟล์, จัดการที่อยู่จัดส่ง'
    },
    {
      icon: <ShoppingBag size={22} />,
      title: currentLang === 'en' ? 'Product System' : 'ระบบสินค้า',
      description: currentLang === 'en'
        ? 'Product listings, collections, brands, categories, filtering, and search functionality.'
        : 'การแสดงรายการสินค้า, คอลเลกชัน, แบรนด์, หมวดหมู่, การกรอง และฟังก์ชันการค้นหา'
    },
    {
      icon: <Layout size={22} />,
      title: currentLang === 'en' ? 'Marketplace Trading' : 'การซื้อขายสินค้า',
      description: currentLang === 'en'
        ? 'Buying products, selling products, shopping cart system, payment processing.'
        : 'การซื้อสินค้า, การขายสินค้า, ระบบตะกร้าสินค้า, การชำระเงิน'
    },
    {
      icon: <Server size={22} />,
      title: currentLang === 'en' ? 'Order Management' : 'การจัดการคำสั่งซื้อ',
      description: currentLang === 'en'
        ? 'Order tracking, sales tracking, filtering by status, order details.'
        : 'การติดตามคำสั่งซื้อ, การติดตามการขาย, การกรองตามสถานะ, รายละเอียดคำสั่งซื้อ'
    },
    {
      icon: <Database size={22} />,
      title: currentLang === 'en' ? 'Admin Dashboard' : 'แดชบอร์ดสำหรับผู้ดูแลระบบ',
      description: currentLang === 'en'
        ? 'Collection overview, sales analytics, managing brands, collections, and sellers.'
        : 'ภาพรวมคอลเลกชัน, การวิเคราะห์ยอดขาย, การจัดการแบรนด์, คอลเลกชัน และผู้ขาย'
    }
  ];

  // Technology categories
  const technologyCategories = [
    {
      name: currentLang === 'en' ? 'Backend' : 'แบ็คเอนด์',
      items: ['Django Framework', 'PostgreSQL', 'Django Authentication', 'Django ORM', 'Django Migrations']
    },
    {
      name: currentLang === 'en' ? 'Frontend' : 'ฟร้อนท์เอนด์',
      items: ['HTML/CSS/JavaScript', 'Bootstrap', 'jQuery', 'Font Awesome', 'SweetAlert']
    },
    {
      name: currentLang === 'en' ? 'Storage' : 'พื้นที่จัดเก็บข้อมูล',
      items: ['AWS S3', 'boto3']
    },
    {
      name: currentLang === 'en' ? 'Architecture' : 'สถาปัตยกรรม',
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

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Fixed Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200/30 dark:border-gray-800/30">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:py-4 flex items-center justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="rounded-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <Link href="/">
              <ChevronLeft size={16} className="mr-1" />
              {t.backButton}
            </Link>
          </Button>
        </div>
      </header>

      {/* Project Title Section */}
      <section 
        className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 relative overflow-hidden bg-white dark:bg-black">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-gray-50 dark:bg-gray-900/20 blur-3xl opacity-70"></div>
          <div className="absolute -bottom-20 -left-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-gray-50 dark:bg-gray-900/20 blur-3xl opacity-70"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <pattern id="project-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-500 dark:text-gray-400" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#project-grid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <AnimatedSection 
            animation="fade-in" 
            disabled={!animationsEnabled}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              {t.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            
            {/* Tech stack tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-6 sm:mt-8">
              <Badge variant="outline" className="bg-gray-50/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700">
                Django
              </Badge>
              <Badge variant="outline" className="bg-gray-50/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700">
                Bootstrap
              </Badge>
              <Badge variant="outline" className="bg-gray-50/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700">
                PostgreSQL
              </Badge>
              <Badge variant="outline" className="bg-gray-50/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700">
                AWS S3
              </Badge>
              <Badge variant="outline" className="bg-gray-50/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700">
                jQuery
              </Badge>
            </div>
            
            {/* GitHub button */}
            <div className="mt-8">
              <Button 
                variant="outline" 
                className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                asChild
              >
                <Link href="https://github.com/Pisol00" target="_blank" rel="noopener noreferrer">
                  <Github size={18} className="mr-2" />
                  {t.githubButton}
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Overview */}
      <section 
        className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900/20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <AnimatedSection
            animation="fade-in"
            disabled={!animationsEnabled}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
              {t.overview.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              {t.overview.content}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Structure */}
      <section className="py-12 md:py-16 bg-white dark:bg-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <AnimatedSection
            animation="fade-in"
            disabled={!animationsEnabled}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
              {t.projectStructure.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6">
              {t.projectStructure.content}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectApps.map((app, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-all luxury-card">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    {app.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Features */}
      <section
        className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900/20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <AnimatedSection
            animation="fade-in"
            disabled={!animationsEnabled}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
              {t.keyFeatures.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-all luxury-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technologies */}
      <section
        className="py-12 md:py-16 bg-white dark:bg-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <AnimatedSection
            animation="fade-in"
            disabled={!animationsEnabled}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
              {t.technologies.title}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {technologyCategories.map((category, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-all luxury-card">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Implementation Details */}
      <section
        className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900/20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <AnimatedSection
            animation="fade-in"
            disabled={!animationsEnabled}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
              {t.implementation.title}
            </h2>
            
            <div className="space-y-8">
              {/* Data Structure */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t.implementation.dataStructure.title}
                </h3>
                <ul className="space-y-3 pl-5 list-disc">
                  {dataStructureItems.map((item, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Display System */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t.implementation.displaySystem.title}
                </h3>
                <ul className="space-y-3 pl-5 list-disc">
                  {displaySystemItems.map((item, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Gallery */}
      <section
        className="py-12 md:py-16 bg-white dark:bg-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <AnimatedSection
            animation="fade-in"
            disabled={!animationsEnabled}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
              {t.gallery.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base mb-6">
              {t.gallery.description}
            </p>
            
            {/* Image placeholders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Homepage Screenshot</span>
              </div>
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Product Listing Screenshot</span>
              </div>
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Checkout Process Screenshot</span>
              </div>
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Admin Dashboard Screenshot</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900/20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <AnimatedSection
            animation="fade-in"
            disabled={!animationsEnabled}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
              {t.conclusion.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
              {t.conclusion.content}
            </p>
            
            <div className="mt-6 flex justify-center">
              <Button 
                variant="outline" 
                className="mt-8 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                asChild
              >
                <Link href="/">
                  <ChevronLeft size={18} className="mr-2" />
                  {t.backButton}
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}