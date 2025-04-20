'use client';

import { ReactNode } from 'react';

interface InfoBadgeProps {
  icon: ReactNode;
  text: string;
}

/**
 * InfoBadge Component
 * 
 * A small badge that displays an icon and text,
 * commonly used for contact information or tags
 * Updated with an elegant monotone design
 */
export default function InfoBadge({ icon, text }: InfoBadgeProps) {
  return (
    <div className="flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm border border-gray-100/30 dark:border-gray-700/30 text-sm font-medium">
      <span className="text-gray-500 dark:text-gray-400">{icon}</span>
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </div>
  );
}