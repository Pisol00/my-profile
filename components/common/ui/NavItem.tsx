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
      className={`text-sm font-medium transition-colors relative group cursor-pointer ${
        active ? 'text-primary' : ''
      }`}
      aria-current={active ? 'page' : undefined}
    >
      <span className="flex items-center gap-1.5">
        {icon}
        <span>{label}</span>
      </span>
      <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
        active ? 'w-full' : 'w-0 group-hover:w-full'
      }`}></span>
    </button>
  );
}