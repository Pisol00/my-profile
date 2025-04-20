'use client';

import { ReactNode } from 'react';
import AnimatedSection from '@/components/common/animations/AnimatedSection';
import Image from 'next/image';

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

/**
 * EducationCard Component
 * 
 * Displays an education item with institution details, highlights, and courses
 */
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
  // Icon components for better reusability
  const BookIcon = () => (
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
      className="text-blue-500"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
    </svg>
  );

  const MapPinIcon = () => (
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
      className="text-blue-500"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const CheckIcon = () => (
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
      className="text-blue-500 mt-0.5 flex-shrink-0"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <path d="m9 11 3 3L22 4"></path>
    </svg>
  );

  const EducationIcon = () => (
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
  );

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
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 border-4 border-white dark:border-gray-900 flex items-center justify-center text-blue-600 dark:text-blue-300 z-10">
            <EducationIcon />
          </div>
          <span className="mt-3 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50">
            {duration}
          </span>
        </div>
        
        {/* Right side - main card */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-blue-100 dark:border-blue-900/50 overflow-hidden hover:shadow-lg transition-all duration-300">
          {/* Header with institution logo */}
          <div className="border-b border-blue-50 dark:border-blue-900/50 p-6 flex items-center gap-6">
            <div className="w-20 h-20 bg-white rounded-lg overflow-hidden flex items-center justify-center p-2 border border-blue-50 dark:border-blue-900/50 relative">
              <Image
                src={logo}
                alt={institution}
                fill
                sizes="80px"
                className="object-contain p-1"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-bold">{institution}</h3>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-300">
                <BookIcon />
                <span>{degree}</span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-600 dark:text-gray-300">
                <MapPinIcon />
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
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-4">
                  {highlights.length > 0 ? 'Program Highlights' : ''}
                </h4>
                
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckIcon />
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
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">
                  Key Courses
                </h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-100 dark:border-blue-800/50"
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