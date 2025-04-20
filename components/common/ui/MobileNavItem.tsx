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
          ? 'bg-primary/10 text-primary' 
          : 'hover:bg-primary/5'
      }`}
      aria-current={active ? 'page' : undefined}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}