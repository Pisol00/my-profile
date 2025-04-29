'use client';

import { Code2 } from 'lucide-react';
import AnimatedSection from '@/components/common/animations/AnimatedSection';

interface AppStructure {
  name: string;
  description: string;
}

interface ProjectStructureProps {
  title: string;
  apps: AppStructure[];
  animationsEnabled?: boolean;
}

export default function ProjectStructure({
  title,
  apps,
  animationsEnabled = true
}: ProjectStructureProps) {
  return (
    <AnimatedSection
      animation="fade-in"
      disabled={!animationsEnabled}
      className="mb-12"
    >
      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Code2 size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
          {title}
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {apps.map((app, index) => (
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
  );
}