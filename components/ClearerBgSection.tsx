'use client'
import React, { ReactNode } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

interface ClearerBgSectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  blurAmount?: string; // ลดค่าความเบลอ
  opacity?: number; // เพิ่มความทึบ
  id?: string;
  className?: string;
  animationsEnabled?: boolean;
  containerRef?: React.RefObject<HTMLElement>;
}

const ClearerBgSection: React.FC<ClearerBgSectionProps> = ({
  children,
  title,
  subtitle,
  backgroundImage = '/IT-bg.jpg',
  blurAmount = '5px', 
  opacity = 0.5,
  id,
  className = '',
  animationsEnabled = true,
  containerRef,
}) => {
  return (
    <section 
      ref={containerRef} 
      id={id}
      className={`relative py-24 overflow-hidden ${className}`}
    >
      {/* พื้นหลังที่ชัดขึ้น */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: `blur(${blurAmount})`, // ค่าความเบลอน้อยลง
          opacity: opacity, // ค่าความทึบมากขึ้น
          transform: 'scale(1.05)', // ลดการขยายลงเพื่อเห็นรายละเอียดมากขึ้น
        }}
      />
      
      {/* Overlay ที่โปร่งใสมากขึ้น */}
      <div className="absolute inset-0 z-0 bg-background/30 dark:bg-background/40" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {title && (
          <AnimatedSection disabled={!animationsEnabled}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{title}</h2>
            {subtitle && (
              <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </AnimatedSection>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default ClearerBgSection;