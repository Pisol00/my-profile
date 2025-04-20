'use client';

import { ReactNode } from 'react';

interface NavItemProps {
  label: string;
  onClick: () => void;
  icon: ReactNode;
  active?: boolean;
}

/**
 * NavItem Component
 * 
 * Navigation item for the desktop navbar with hover effects
 * Updated with an elegant monochrome design
 */
export default function NavItem({ 
  label, 
  onClick, 
  icon, 
  active = false 
}: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`text-sm font-medium transition-all relative group cursor-pointer ${
        active ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'
      }`}
      aria-current={active ? 'page' : undefined}
    >
      <span className="flex items-center gap-1.5">
        <span className="text-gray-500 dark:text-gray-400">
          {icon}
        </span>
        <span>{label}</span>
      </span>
      <span className={`absolute -bottom-1 left-0 h-px bg-gray-900 dark:bg-white transition-all duration-300 ${
        active ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
      }`}></span>
    </button>
  );
}