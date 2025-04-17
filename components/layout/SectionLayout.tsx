'use client';

import { ReactNode, forwardRef } from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';

interface SectionLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  bgColor?: string;
  bgGradient?: string;
  bgImage?: string;
  blurAmount?: string;
  overlayOpacity?: number;
  id?: string;
  className?: string;
  animationsEnabled?: boolean;
  decorations?: boolean;
}

/**
 * SectionLayout Component
 * 
 * ใช้เป็น layout หลักสำหรับทุก section ในเว็บไซต์
 * ช่วยลดความซ้ำซ้อนของโค้ดระหว่าง sections
 */
const SectionLayout = forwardRef<HTMLElement, SectionLayoutProps>(
  ({
    children,
    title,
    subtitle,
    bgColor = '', // สีพื้นหลัง เช่น 'bg-white dark:bg-gray-900'
    bgGradient = '', // gradient เช่น 'bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900'
    bgImage = '',
    blurAmount = '5px',
    overlayOpacity = 0.5,
    id,
    className = '',
    animationsEnabled = true,
    decorations = true,
  }, ref) => {
    // กำหนด background class ตามค่าที่ส่งมา
    const bgClass = bgColor || bgGradient || 'bg-background';

    return (
      <section
        ref={ref}
        id={id}
        className={`relative py-24 overflow-hidden ${bgClass} ${className}`}
      >
        {/* พื้นหลังที่เป็นรูปภาพ (ถ้ามี) */}
        {bgImage && (
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: `blur(${blurAmount})`,
              opacity: overlayOpacity,
              transform: 'scale(1.05)',
            }}
          />
        )}

        {/* Overlay */}
        {bgImage && (
          <div className="absolute inset-0 z-0 bg-background/30 dark:bg-background/40" />
        )}

        {/* Decorative elements (ถ้าเปิดใช้งาน) */}
        {decorations && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* วงกลมตกแต่ง */}
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
            
            {/* ลายเส้นตาราง */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500 dark:text-blue-400" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          {/* Title และ Subtitle (ถ้ามี) */}
          {(title || subtitle) && (
            <AnimatedSection disabled={!animationsEnabled} className="mb-16 text-center">
              {title && (
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
                  {subtitle}
                </p>
              )}
            </AnimatedSection>
          )}

          {/* Main Content */}
          {children}
        </div>
      </section>
    );
  }
);

SectionLayout.displayName = 'SectionLayout';

export default SectionLayout;