'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Server, Layout, Database, Users, ShoppingBag, Code2, Github, ExternalLink, Check, Star, ChevronRight, Eye, Calendar, Hash, Target, Images, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/common/animations/AnimatedSection';
import { useLanguage } from '@/contexts';

export default function ShopDeePage() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  // Use the language context
  const { currentLang, t, toggleLanguage } = useLanguage();
  
  // Set client-side rendering flag
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Check if animations should be enabled
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
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

  // Functions for image navigation
  const nextImage = () => {
    if (screenshots.length > 0) {
      setActiveImageIndex((prev) => (prev + 1) % screenshots.length);
    }
  };

  const prevImage = () => {
    if (screenshots.length > 0) {
      setActiveImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    }
  };

  // Project structure apps
  const projectApps = [
    {
      name: 'authen',
      description: t.shopdee_authen_description
    },
    {
      name: 'shop',
      description: t.shopdee_shop_description
    },
    {
      name: 'employee',
      description: t.shopdee_employee_description
    }
  ];

  // Key features
  const keyFeatures = [
    {
      icon: <Users size={20} />,
      title: t.shopdee_feature_user_title,
      description: t.shopdee_feature_user_description
    },
    {
      icon: <ShoppingBag size={20} />,
      title: t.shopdee_feature_product_title,
      description: t.shopdee_feature_product_description
    },
    {
      icon: <Layout size={20} />,
      title: t.shopdee_feature_marketplace_title,
      description: t.shopdee_feature_marketplace_description
    },
    {
      icon: <Server size={20} />,
      title: t.shopdee_feature_order_title,
      description: t.shopdee_feature_order_description
    },
    {
      icon: <Database size={20} />,
      title: t.shopdee_feature_admin_title,
      description: t.shopdee_feature_admin_description
    }
  ];

  // Technology categories
  const technologies = [
    {
      category: t.shopdee_tech_front,
      items: ['HTML/CSS/JavaScript', 'Bootstrap', 'jQuery', 'Font Awesome', 'SweetAlert']
    },
    {
      category: t.shopdee_tech_back,
      items: ['Django Framework', 'PostgreSQL', 'Django Authentication', 'Django ORM', 'Django Migrations']
    },
    {
      category: t.shopdee_tech_storage,
      items: ['AWS S3', 'boto3']
    },
    {
      category: t.shopdee_tech_arch,
      items: ['MVC Pattern', 'Class-Based Views', 'Mixins', 'Transactions']
    }
  ];

  // Data structure items
  const dataStructureItems = [
    t.shopdee_data_brand,
    t.shopdee_data_category,
    t.shopdee_data_collection,
    t.shopdee_data_product
  ];

  // Display system items
  const displaySystemItems = [
    t.shopdee_display_homepage,
    t.shopdee_display_explore,
    t.shopdee_display_collection,
    t.shopdee_display_size,
    t.shopdee_display_conditional
  ];

  // Screenshots placeholders
  const screenshots = [
    { 
      label: t.shopdee_screenshot_home,
      desc: t.shopdee_screenshot_home_desc
    },
    { 
      label: t.shopdee_screenshot_listing,
      desc: t.shopdee_screenshot_listing_desc
    },
    { 
      label: t.shopdee_screenshot_detail,
      desc: t.shopdee_screenshot_detail_desc
    },
    { 
      label: t.shopdee_screenshot_admin,
      desc: t.shopdee_screenshot_admin_desc
    },
  ];

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

  // Key Facts for project
  const keyFacts = [
    { 
      icon: <Calendar size={16} />, 
      label: t.shopdee_project_year, 
      value: "2024" 
    },
    { 
      icon: <Hash size={16} />, 
      label: t.shopdee_project_type, 
      value: t.shopdee_project_type_value
    },
    { 
      icon: <Target size={16} />, 
      label: t.shopdee_project_role, 
      value: t.shopdee_project_role_value
    },
  ];

  // Show loading state during SSR or pre-hydration
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-black overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-20 w-80 h-80 rounded-full bg-gray-100 dark:bg-gray-800/20 blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-gray-100 dark:bg-gray-800/20 blur-3xl opacity-40"></div>
      </div>

      {/* Fixed Header - Using fixed positioning for reliable fixed behavior */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 dark:bg-black/95 border-b border-gray-200/30 dark:border-gray-800/30 shadow-md">
        <div className="container max-w-5xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="rounded-full bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <Link href="/#projects">
              <ChevronLeft size={16} className="mr-1" />
              {t.shopdee_back_button}
            </Link>
          </Button>

          <div className="flex gap-2">
            {/* Language Toggle Button - Added */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="rounded-full bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-1.5"
            >
              <Languages size={16} className="text-gray-600 dark:text-gray-400" />
              {currentLang === "en" ? "TH" : "EN"}
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              asChild
              className="rounded-full bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Link href="https://github.com/Pisol00" target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-1" />
                {t.shopdee_github_button}
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
                {t.shopdee_view_live_demo}
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Add padding top to account for fixed header */}
      <main className="container max-w-5xl mx-auto px-4 pt-24 pb-8 relative z-10">
        {/* Hero Section */}
        <AnimatedSection
          animation="fade-in"
          disabled={!animationsEnabled}
          className="mb-8 sm:mb-12"
        >
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {t.shopdee_title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
              {t.shopdee_subtitle}
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-72 sm:h-96 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden mb-6 sm:mb-8 shadow-xl border border-gray-300 dark:border-gray-700 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-500/10 opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <ShoppingBag size={40} className="mb-4 opacity-70 group-hover:scale-110 transition-transform duration-500" />
              <span className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 dark:from-white dark:to-gray-400">Shopdee Platform</span>
              <span className="mt-2 text-sm text-gray-300 dark:text-gray-400 max-w-md text-center px-4">
                {t.shopdee_platform_description}
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
              {t.shopdee_project_overview}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.shopdee_overview}
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
              {t.shopdee_key_features}
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
              {t.shopdee_user_workflow}
            </h3>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex-1 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/20 text-center">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users size={18} className="text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-900 dark:text-white font-medium text-sm">
                  {t.shopdee_user_registration}
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
                  {t.shopdee_browse_products}
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
                  {t.shopdee_add_to_cart}
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
                  {t.shopdee_checkout}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 text-center">
              {t.shopdee_workflow_description}
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
              {t.shopdee_project_structure}
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
              {t.shopdee_data_structure}
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
              {t.shopdee_display_system}
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
              {t.shopdee_technologies}
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
              {t.shopdee_gallery}
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
                  aria-label={t.shopdee_prev_image}
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
                  aria-label={t.shopdee_next_image}
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