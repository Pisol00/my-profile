'use client';

import { forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/context/LanguageContext';
import { profileData } from '@/translations';

// โค้ดของ ContactCard Component
type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  hint: string;
};

const ContactCard = ({ icon, title, value, hint }: ContactCardProps) => (
  <div className="glass-card p-6 rounded-xl h-full flex flex-col items-center text-center border border-white/10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-all">
      {icon}
    </div>
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground mb-4 break-all">{value}</p>
    <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
      {hint}
    </span>
  </div>
);

type ContactSectionProps = {
  animationsEnabled: boolean;
};

const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(
  ({ animationsEnabled }, ref) => {
    const { currentLang, t } = useLanguage();
    
    return (
      <section ref={ref} className="py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <AnimatedSection animation="fade-in" disabled={!animationsEnabled} className="mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 shadow-sm border border-primary/10 backdrop-blur-sm mx-auto text-center block w-fit">
              {currentLang === "en" ? "Get In Touch" : "ติดต่อ"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
              {t.contact}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
              {currentLang === "en"
                ? "Feel free to reach out for collaborations, internship opportunities, or just to say hello"
                : "อย่าลังเลที่จะติดต่อเพื่อความร่วมมือ โอกาสในการฝึกงาน หรือเพียงแค่ทักทาย"}
            </p>
          </AnimatedSection>

          {/* Contact Cards */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Contact */}
            <AnimatedSection
              animation="slide-up"
              delay={100}
              disabled={!animationsEnabled}
            >
              <a href={`mailto:${profileData.email}`} className="block">
                <ContactCard 
                  icon={<Mail size={24} />} 
                  title={currentLang === "en" ? "Email" : "อีเมล"}
                  value={profileData.email}
                  hint={currentLang === "en" ? "Click to send email" : "คลิกเพื่อส่งอีเมล"}
                />
              </a>
            </AnimatedSection>

            {/* Phone Contact */}
            <AnimatedSection
              animation="slide-up"
              delay={150}
              disabled={!animationsEnabled}
            >
              <a href={`tel:${profileData.phone}`} className="block">
                <ContactCard 
                  icon={<Phone size={24} />} 
                  title={t.phone}
                  value={profileData.phone}
                  hint={currentLang === "en" ? "Click to call" : "คลิกเพื่อโทร"}
                />
              </a>
            </AnimatedSection>

            {/* GitHub Contact */}
            <AnimatedSection
              animation="slide-up"
              delay={200}
              disabled={!animationsEnabled}
            >
              <a href={`https://github.com/${profileData.github}`} target="_blank" rel="noopener noreferrer" className="block">
                <ContactCard 
                  icon={<Github size={24} />} 
                  title="GitHub"
                  value={`github.com/${profileData.github}`}
                  hint={currentLang === "en" ? "View GitHub profile" : "ดูโปรไฟล์ GitHub"}
                />
              </a>
            </AnimatedSection>
          </div>

          {/* Contact Form - Optional */}
          <AnimatedSection
            animation="fade-in"
            delay={300}
            disabled={!animationsEnabled}
            className="mt-16 max-w-2xl mx-auto glass-card p-8 rounded-xl border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              {currentLang === "en" ? "Ready to Work Together?" : "พร้อมที่จะทำงานร่วมกัน?"}
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
              >
                <a href={`mailto:${profileData.email}`}>
                  <Mail size={18} />
                  {currentLang === "en" ? "Send Message" : "ส่งข้อความ"}
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="gap-2 border-primary/20 hover:bg-primary/5 hover:border-primary/30 rounded-lg transition-all"
              >
                <a href={`https://github.com/${profileData.github}`} target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  {currentLang === "en" ? "View Projects" : "ดูโปรเจกต์"}
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }
);

ContactSection.displayName = 'ContactSection';

export default ContactSection;