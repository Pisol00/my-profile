
// components/common/MobileNavItem.tsx
import { ReactNode } from 'react';

type MobileNavItemProps = {
  label: string;
  onClick: () => void;
  icon: ReactNode;
};

export default function MobileNavItem({ label, onClick, icon }: MobileNavItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-3 flex items-center gap-2 hover:bg-primary/5 rounded-lg transition-colors"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}