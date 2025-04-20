'use client';

import { ReactNode } from 'react';

interface MobileNavItemProps {
  label: string;
  onClick: () => void;
  icon: ReactNode;
  active?: boolean;
}

/**
 * MobileNavItem Component
 * 
 * Navigation item specifically designed for mobile menus
 * Larger touch target and simpler hover effects
 * Updated with an elegant monochrome design
 */
export default function MobileNavItem({ 
  label, 
  onClick, 
  icon, 
  active = false 
}: MobileNavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 flex items-center gap-2 rounded-lg transition-colors ${
        active 
          ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' 
          : 'hover:bg-gray-50 dark:hover:bg-gray-800/50 text-gray-600 dark:text-gray-400'
      }`}
      aria-current={active ? 'page' : undefined}
    >
      <span className="text-gray-500 dark:text-gray-400">
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </button>
  );
}