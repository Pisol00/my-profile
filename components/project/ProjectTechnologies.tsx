'use client';

import { Code2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/common/animations/AnimatedSection';

interface TechCategory {
  category: string;
  items: string[];
}

interface ProjectTechnologiesProps {
  title: string;
  technologies: TechCategory[];
  animationsEnabled?: boolean;
}

export default function ProjectTechnologies({
  title,
  technologies,
  animationsEnabled = true
}: ProjectTechnologiesProps) {
  return (
    <AnimatedSection
      animation="fade-in"
      disabled={!animationsEnabled}
      className="mb-12"
    >
      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Code2 size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
          {title}
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
  );
}