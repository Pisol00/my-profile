'use client';

import { ReactNode } from 'react';
import { Eye } from 'lucide-react';
import AnimatedSection from '@/components/common/animations/AnimatedSection';

interface QuickStatProps {
  icon: ReactNode;
  label: string;
}

interface ProjectOverviewProps {
  title: string;
  description: string;
  quickStats: QuickStatProps[];
  animationsEnabled?: boolean;
}

export default function ProjectOverview({
  title,
  description,
  quickStats,
  animationsEnabled = true
}: ProjectOverviewProps) {
  return (
    <AnimatedSection
      animation="fade-in"
      disabled={!animationsEnabled}
      className="mb-12"
    >
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
          <Eye size={20} className="text-gray-600 dark:text-gray-400" />
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
        
        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4 mt-6 sm:mt-8">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 mx-auto mb-2">
                {stat.icon}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}