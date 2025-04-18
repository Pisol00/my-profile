'use client';

import { forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, MapPin, ExternalLink, MessageSquare } from 'lucide-react';
import Link from 'next/link'; // เพิ่ม Next.js Link
import AnimatedSection from '@/components/common/AnimatedSection';
import { useLanguage } from '@/contexts';
import { profileData } from '@/translations';
import ContactForm from './ContactForm'; // นำเข้า ContactForm ใหม่

type ContactSectionProps = {
  animationsEnabled: boolean;
};

const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(
  ({ animationsEnabled }, ref) => {
    const { currentLang, t } = useLanguage();
    
    return (
      <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Decorative circles */}
          <div className="absolute -top-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
          <div className="absolute -bottom-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500 dark:text-blue-400" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#contact-grid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <AnimatedSection animation="fade-in" disabled={!animationsEnabled} className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6">
              {t.contact}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              {currentLang === "en"
                ? "Feel free to reach out for collaborations, internship opportunities, or just to say hello"
                : "อย่าลังเลที่จะติดต่อเพื่อความร่วมมือ โอกาสในการฝึกงาน หรือเพียงแค่ทักทาย"}
            </p>
          </AnimatedSection>

          {/* Main content with split design */}
          <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-lg sm:rounded-2xl shadow-xl overflow-hidden border border-blue-100 dark:border-blue-900/50">
            <div className="grid md:grid-cols-5">
              {/* Left side - Contact Info */}
              <div className="md:col-span-2 bg-blue-50 dark:bg-blue-900/30 p-5 sm:p-8 md:p-12">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-2">
                  <MessageSquare size={20} className="sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                  <span>{currentLang === "en" ? "Contact Info" : "ข้อมูลติดต่อ"}</span>
                </h3>
                
                <div className="space-y-6 sm:space-y-8">
                  {/* Email */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-800">
                      <Mail size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base sm:text-lg mb-1">
                        {currentLang === "en" ? "Email" : "อีเมล"}
                      </h4>
                      <Link 
                        href={`mailto:${profileData.email}`} 
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 group text-sm sm:text-base break-all"
                      >
                        {profileData.email}
                        <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-800">
                      <Phone size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base sm:text-lg mb-1">
                        {currentLang === "en" ? "Phone" : "โทรศัพท์"}
                      </h4>
                      <Link 
                        href={`tel:${profileData.phone}`} 
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 group text-sm sm:text-base"
                      >
                        {profileData.phone}
                        <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-800">
                      <MapPin size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base sm:text-lg mb-1">
                        {currentLang === "en" ? "Location" : "ที่อยู่"}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        {currentLang === "en" ? profileData.location : t.location}
                      </p>
                    </div>
                  </div>
                  
                  {/* GitHub */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-800">
                      <Github size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base sm:text-lg mb-1">
                        GitHub
                      </h4>
                      <Link 
                        href={`https://github.com/${profileData.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 group text-sm sm:text-base"
                      >
                        github.com/{profileData.github}
                        <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Contact Form/Message */}
              <div className="md:col-span-3 p-5 sm:p-8 md:p-12">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-2">
                  <MessageSquare size={20} className="sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                  <span>{currentLang === "en" ? "Send a Message" : "ส่งข้อความ"}</span>
                </h3>
                
                <div className="mb-6 sm:mb-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-5 sm:mb-6 text-sm sm:text-base">
                    {currentLang === "en"
                      ? "I'm currently available for internship opportunities, collaborations, or any questions you might have."
                      : "ฉันพร้อมรับโอกาสฝึกงาน ความร่วมมือ หรือตอบคำถามที่คุณอาจมี"}
                  </p>
                  
                  {/* Use the ContactForm component */}
                  <ContactForm />
                </div>
                
                {/* Alternative contact methods */}
                <div className="border-t border-blue-100 dark:border-blue-900/30 pt-4 sm:pt-6 mt-6 sm:mt-8">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                    {currentLang === "en"
                      ? "Prefer a direct approach? Contact me via:"
                      : "ต้องการติดต่อโดยตรง? ติดต่อฉันผ่าน:"}
                  </p>
                  <div className="flex gap-2 sm:gap-3">
                    <Button 
                      variant="outline" 
                      size="lg"
                      asChild
                      className="flex-1 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400 py-2 sm:py-2.5 h-auto text-xs sm:text-sm"
                    >
                      <Link href={`mailto:${profileData.email}`}>
                        <Mail size={14} className="sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                        Email
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      asChild
                      className="flex-1 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400 py-2 sm:py-2.5 h-auto text-xs sm:text-sm"
                    >
                      <Link href={`tel:${profileData.phone}`}>
                        <Phone size={14} className="sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                        {currentLang === "en" ? "Call" : "โทร"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ContactSection.displayName = 'ContactSection';

export default ContactSection;