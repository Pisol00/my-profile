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
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-900/30 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full">
        {/* Header */}
        <div className="p-6 border-b border-blue-100 dark:border-blue-900/30 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-300">
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
                className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 py-2 px-3 rounded-lg border border-blue-100 dark:border-blue-800/50"
              >
                <Code2 size={14} className="text-blue-500 dark:text-blue-400" />
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}