// components/common/NavItem.tsx
import { ReactNode } from 'react';

type NavItemProps = {
  label: string;
  onClick: () => void;
  icon: ReactNode;
};

export default function NavItem({ label, onClick, icon }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className="text-sm font-medium transition-colors relative group"
    >
      <span className="flex items-center gap-1.5">
        {icon}
        <span>{label}</span>
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
    </button>
  );
}
