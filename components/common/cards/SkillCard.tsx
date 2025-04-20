'use client';

import { ReactNode } from 'react';
import { Code2 } from 'lucide-react';
import AnimatedSection from '@/components/common/animations/AnimatedSection';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
  animationsEnabled?: boolean;
  delay?: number;
}

/**
 * SkillCard Component
 * 
 * Displays a skill category with its related skills
 * Updated with an elegant, minimal design
 */
export function SkillCard({ 
  title, 
  icon, 
  skills, 
  animationsEnabled = true, 
  delay = 0 
}: SkillCardProps) {
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
          <h3 className="text-xl font-bold">{title}</h3>
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