'use client';

import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code2, FolderGit2 } from 'lucide-react';
import AnimatedSection from '@/components/common/animations/AnimatedSection';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  viewProjectText: string;
  animationsEnabled?: boolean;
  delay?: number;
}

/**
 * ProjectCard Component
 * 
 * Displays a project with its description, technologies, and links
 */
export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  link, 
  viewProjectText,
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
      <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700 shadow-md hover:shadow-xl hover:shadow-blue-100 dark:hover:shadow-blue-900/10 transition-all duration-300 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-blue-50 dark:border-blue-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-300">
              <FolderGit2 size={20} />
            </div>
            <h3 className="font-bold text-xl">{title}</h3>
          </div>
          <ExternalLinkWrapper 
            href={link} 
            className="bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-400 p-2 rounded-full transition-colors"
          >
            <Github size={18} aria-label={`View ${title} on GitHub`} />
          </ExternalLinkWrapper>
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
                className="bg-blue-50/50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-800/30 py-1"
              >
                <Code2 size={12} className="mr-1" />
                {tech}
              </Badge>
            ))}
          </div>

          {/* Link */}
          <ExternalLinkWrapper
            href={link}
            className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
          >
            <span>{viewProjectText}</span>
            <ExternalLink size={14} />
          </ExternalLinkWrapper>
        </div>
      </div>
    </AnimatedSection>
  );
}