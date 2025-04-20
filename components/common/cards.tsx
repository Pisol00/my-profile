'use client';

import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code2, FolderGit2 } from 'lucide-react';
import AnimatedSection from '@/components/common/animations/AnimatedSection';

// ------------------------
// SkillCard Component
// ------------------------
interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
  animationsEnabled?: boolean;
  delay?: number;
}

export function SkillCard({ title, icon, skills, animationsEnabled = true, delay = 0 }: SkillCardProps) {
  return (
    <AnimatedSection
      animation="fade-in"
      delay={delay}
      disabled={!animationsEnabled}
    >
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full luxury-card">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>

        {/* Skills */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-2 px-3 rounded-lg border border-gray-100 dark:border-gray-700"
              >
                <Code2 size={14} className="text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// ------------------------
// ProjectCard Component
// ------------------------
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  viewProjectText: string;
  animationsEnabled?: boolean;
  delay?: number;
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  link, 
  viewProjectText,
  animationsEnabled = true, 
  delay = 0 
}: ProjectCardProps) {
  return (
    <AnimatedSection
      delay={delay}
      animation="fade-in"
      disabled={!animationsEnabled}
    >
      <div className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 shadow-md hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-900/10 transition-all duration-300 h-full flex flex-col luxury-card">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
              <FolderGit2 size={20} />
            </div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white">{title}</h3>
          </div>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 p-2 rounded-full transition-colors"
            aria-label={`View ${title} on GitHub`}
          >
            <Github size={18} />
          </a>
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
                <Code2 size={12} className="mr-1" />
                {tech}
              </Badge>
            ))}
          </div>

          {/* Link */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
          >
            <span>{viewProjectText}</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

// ------------------------
// EducationCard Component
// ------------------------
interface EducationCardProps {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  logo: string;
  highlights?: string[];
  courses?: string[];
  description?: string;
  animationsEnabled?: boolean;
  delay?: number;
}

export function EducationCard({
  institution,
  degree,
  duration,
  location,
  logo,
  highlights = [],
  courses = [],
  description,
  animationsEnabled = true,
  delay = 0
}: EducationCardProps) {
  return (
    <AnimatedSection
      animation="fade-in"
      delay={delay}
      disabled={!animationsEnabled}
      className="mb-14 relative"
    >
      <div className="flex items-start gap-8">
        {/* Left side - timeline indicator */}
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-black flex items-center justify-center text-gray-600 dark:text-gray-300 z-10">
            {/* Education Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
            </svg>
          </div>
          <span className="mt-3 px-3 py-1 rounded-full text-xs font-medium bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
            {duration}
          </span>
        </div>
        
        {/* Right side - main card */}
        <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300 luxury-card">
          {/* Header with institution logo */}
          <div className="border-b border-gray-100 dark:border-gray-800 p-6 flex items-center gap-6">
            <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center p-2 border border-gray-100 dark:border-gray-800">
              <img
                src={logo}
                alt={institution}
                className="w-full h-auto object-contain"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{institution}</h3>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-300">
                {/* Book Icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-gray-500"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
                <span>{degree}</span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-600 dark:text-gray-300">
                {/* Map Pin Icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-gray-500"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{location}</span>
              </div>
            </div>
          </div>
          
          {/* Card content */}
          <div className="p-6">
            {description && (
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {description}
              </p>
            )}
            
            {/* Highlights */}
            {highlights.length > 0 && (
              <>
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                  {highlights.length > 0 ? 'Program Highlights' : ''}
                </h4>
                
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {/* Check Icon */}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-gray-500 mt-0.5 flex-shrink-0"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {/* Key courses */}
            {courses.length > 0 && (
              <div className="mt-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                  Key Courses
                </h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-100 dark:border-gray-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}