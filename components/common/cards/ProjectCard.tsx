'use client';

import { Badge } from '@/components/ui/badge';
import {  ExternalLink, Code2, Folder} from 'lucide-react';
import AnimatedSection from '@/components/common/animations/AnimatedSection';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  viewProjectText: string;
  year?: string; // Added year as an optional prop
  animationsEnabled?: boolean;
  delay?: number;
}

/**
 * ProjectCard Component
 * 
 * Displays a project with its description, technologies, and links
 * Updated with an elegant, luxury monochrome design
 */
export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  link, 
  viewProjectText,
  year,
  animationsEnabled = true, 
  delay = 0 
}: ProjectCardProps) {
  // Helper to handle external vs internal links
  const ExternalLinkWrapper = ({ 
    href, 
    children, 
    className 
  }: { 
    href: string; 
    children: React.ReactNode; 
    className?: string 
  }) => {
    if (href.startsWith('http')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  };

  return (
    <AnimatedSection
      delay={delay}
      animation="fade-in"
      disabled={!animationsEnabled}
    >
      <div className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 shadow-md hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-900/10 transition-all duration-300 h-full flex flex-col luxury-card">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-50 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
              <Folder size={20} />
            </div>
            <div>
              <h3 className="font-bold text-xl">{title}</h3>
              {year && (
                <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                  
                  <span>{year}</span>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-1">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, techIndex) => (
              <Badge 
                key={techIndex} 
                variant="outline" 
                className="bg-gray-50/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 py-1"
              >
                {/* <Code2 size={12} className="mr-1" /> */}
                {tech}
              </Badge>
            ))}
          </div>

          {/* Link */}
          <ExternalLinkWrapper
            href={link}
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors font-medium"
          >
            <span>{viewProjectText}</span>
            <ExternalLink size={14} />
          </ExternalLinkWrapper>
        </div>
      </div>
    </AnimatedSection>
  );
}