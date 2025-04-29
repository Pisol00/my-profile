'use client';

import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/common/animations/AnimatedSection';

interface KeyFactProps {
  icon: ReactNode;
  label: string;
  value: string;
}

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  platformDescription: string;
  icon: ReactNode;
  badges: string[];
  keyFacts: KeyFactProps[];
  animationsEnabled?: boolean;
  bgGradient?: string;
}

export default function ProjectHero({
  title,
  subtitle,
  platformDescription,
  icon,
  badges,
  keyFacts,
  animationsEnabled = true,
  bgGradient = "from-yellow-600/20 to-red-600/20"
}: ProjectHeroProps) {
  return (
    <AnimatedSection
      animation="fade-in"
      disabled={!animationsEnabled}
      className="mb-8 sm:mb-12"
    >
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Featured Image */}
      <div className="relative w-full h-72 sm:h-96 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden mb-6 sm:mb-8 shadow-xl border border-gray-300 dark:border-gray-700 group">
        <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} dark:from-${bgGradient.split('from-')[1].split('/')[0]}/10 dark:to-${bgGradient.split('to-')[1].split('/')[0]}/10 opacity-50`}></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          {icon}
          <span className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 dark:from-white dark:to-gray-400">
            {title}
          </span>
          <span className="mt-2 text-sm text-gray-300 dark:text-gray-400 max-w-md text-center px-4">
            {platformDescription}
          </span>
          <div className="flex gap-2 mt-6">
            {badges.map((badge, index) => (
              <Badge key={index} className="bg-black/30 hover:bg-black/40 text-white border-0">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Key Facts Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {keyFacts.map((fact, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400">
                {fact.icon}
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{fact.label}</p>
                <p className="font-medium text-gray-900 dark:text-white">{fact.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}