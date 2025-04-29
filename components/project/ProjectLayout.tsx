'use client';

import { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import { ChevronLeft, Github, Eye, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/common/animations/AnimatedSection';
import { useLanguage } from '@/contexts';

interface ProjectLayoutProps {
  children: ReactNode;
  githubUrl: string;
  demoUrl?: string;
  animationsEnabled?: boolean;
}

export default function ProjectLayout({
  children,
  githubUrl,
  demoUrl,
  animationsEnabled = true
}: ProjectLayoutProps) {
  const [isClient, setIsClient] = useState(false);
  const { currentLang, t, toggleLanguage } = useLanguage();
  
  // Set client-side rendering flag
  useEffect(() => {
    setIsClient(true);
  }, []);

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
              {t.backButton || "Back to Projects"}
            </Link>
          </Button>

          <div className="flex gap-2">
            {/* Language Toggle Button */}
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
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-1" />
                {t.github_button || "View on GitHub"}
              </Link>
            </Button>
            
            {demoUrl && (
              <Button 
                variant="default" 
                size="sm"
                asChild
                className="rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-black dark:hover:bg-gray-100"
              >
                <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <Eye size={16} className="mr-1" />
                  {t.view_live_demo || "View Live Demo"}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Add padding top to account for fixed header */}
      <main className="container max-w-5xl mx-auto px-4 pt-24 pb-8 relative z-10">
        {children}
      </main>
    </div>
  );
}