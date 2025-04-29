'use client';

import { ReactNode } from 'react';
import { Check } from 'lucide-react';
import AnimatedSection from '@/components/common/animations/AnimatedSection';

interface ProjectDataDisplayProps {
  title: string;
  icon: ReactNode;
  items: string[];
  animationsEnabled?: boolean;
  className?: string;
}

export default function ProjectDataDisplay({
  title,
  icon,
  items,
  animationsEnabled = true,
  className = ''
}: ProjectDataDisplayProps) {
  return (
    <AnimatedSection
      animation="fade-in"
      disabled={!animationsEnabled}
      className={`mb-12 ${className}`}
    >
      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          {icon}
          <span className="ml-3">{title}</span>
        </h3>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, index) => (
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
  );
}