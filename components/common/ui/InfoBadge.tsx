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
 */
export default function InfoBadge({ icon, text }: InfoBadgeProps) {
  return (
    <div className="flex items-center gap-2 py-1.5 px-4 rounded-full bg-background/50 backdrop-blur-sm shadow-sm border border-border/30 text-sm font-medium">
      <span className="text-primary">{icon}</span>
      <span>{text}</span>
    </div>
  );
}