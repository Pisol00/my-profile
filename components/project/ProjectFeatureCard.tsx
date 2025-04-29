'use client';

import { ReactNode } from 'react';

interface ProjectFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function ProjectFeatureCard({ 
  icon, 
  title, 
  description, 
  index 
}: ProjectFeatureCardProps) {
  const colorSchemes = [
    { bg: "bg-blue-50 dark:bg-blue-900/10", icon: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400", border: "border-blue-200 dark:border-blue-800/30" },
    { bg: "bg-emerald-50 dark:bg-emerald-900/10", icon: "bg-emerald-100 dark:bg-emerald-900/30", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-200 dark:border-emerald-800/30" },
    { bg: "bg-purple-50 dark:bg-purple-900/10", icon: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-600 dark:text-purple-400", border: "border-purple-200 dark:border-purple-800/30" },
    { bg: "bg-amber-50 dark:bg-amber-900/10", icon: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-600 dark:text-amber-400", border: "border-amber-200 dark:border-amber-800/30" },
    { bg: "bg-pink-50 dark:bg-pink-900/10", icon: "bg-pink-100 dark:bg-pink-900/30", text: "text-pink-600 dark:text-pink-400", border: "border-pink-200 dark:border-pink-800/30" },
  ];
  
  const colorScheme = colorSchemes[index % colorSchemes.length];
  
  return (
    <div 
      className={`${colorScheme.bg} rounded-xl border ${colorScheme.border} p-5 sm:p-6 shadow-md hover:shadow-xl transition-all group hover:-translate-y-1`}
    >
      <div className="flex gap-4 items-start">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${colorScheme.icon} flex items-center justify-center ${colorScheme.text} flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}