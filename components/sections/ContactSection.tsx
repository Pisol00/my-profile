'use client';

import { forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, MapPin, ExternalLink, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '@/components/common/animations/AnimatedSection';
import { useLanguage } from '@/contexts';
import { profileData } from '@/translations';
import ContactForm from './ContactForm';

type ContactSectionProps = {
  animationsEnabled: boolean;
};

const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(
  ({ animationsEnabled }, ref) => {
    const { t } = useLanguage();
    
    return (
      <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-white dark:bg-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Decorative circles */}
          <div className="absolute -top-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gray-50 dark:bg-gray-900/20 blur-3xl opacity-70"></div>
          <div className="absolute -bottom-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gray-50 dark:bg-gray-900/20 blur-3xl opacity-70"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-500 dark:text-gray-400" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#contact-grid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <AnimatedSection animation="fade-in" disabled={!animationsEnabled} className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 text-gray-900 dark:text-white">
              {t.contact}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              {t.contactIntro}
            </p>
          </AnimatedSection>

          {/* Desktop View - Split Card Design */}
          <div className="hidden md:block">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-lg sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 luxury-card">
              <div className="grid md:grid-cols-5">
                {/* Left side - Contact Info */}
                <div className="md:col-span-2 bg-gray-50 dark:bg-gray-800/50 p-5 sm:p-8 md:p-12">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-2 text-gray-900 dark:text-white">
                    <MessageSquare size={20} className="sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" />
                    <span>{t.contactInfo || "Contact Info"}</span>
                  </h3>
                  
                  <div className="space-y-6 sm:space-y-8">
                    {/* Email */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 shadow-sm border border-gray-100 dark:border-gray-700">
                        <Mail size={18} className="sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-base sm:text-lg mb-1 text-gray-900 dark:text-white">
                          {t.email}
                        </h4>
                        <Link 
                          href={`mailto:${profileData.email}`} 
                          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1 group text-sm sm:text-base break-all"
                        >
                          {profileData.email}
                          <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 shadow-sm border border-gray-100 dark:border-gray-700">
                        <Phone size={18} className="sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-base sm:text-lg mb-1 text-gray-900 dark:text-white">
                          {t.phone}
                        </h4>
                        <Link 
                          href={`tel:${profileData.phone}`} 
                          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1 group text-sm sm:text-base"
                        >
                          {profileData.phone}
                          <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Location */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 shadow-sm border border-gray-100 dark:border-gray-700">
                        <MapPin size={18} className="sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-base sm:text-lg mb-1 text-gray-900 dark:text-white">
                          {t.location || "Location"}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                          {t.location}
                        </p>
                      </div>
                    </div>
                    
                    {/* GitHub */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 shadow-sm border border-gray-100 dark:border-gray-700">
                        <Github size={18} className="sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-base sm:text-lg mb-1 text-gray-900 dark:text-white">
                          GitHub
                        </h4>
                        <Link 
                          href={`https://github.com/${profileData.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1 group text-sm sm:text-base"
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
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-2 text-gray-900 dark:text-white">
                    <MessageSquare size={20} className="sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" />
                    <span>{t.sendMessage || "Send a Message"}</span>
                  </h3>
                  
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-5 sm:mb-6 text-sm sm:text-base">
                      {t.messageIntro || "I'm currently available for internship opportunities, collaborations, or any questions you might have."}
                    </p>
                    
                    {/* Use the ContactForm component */}
                    <ContactForm />
                  </div>
                  
                  {/* Alternative contact methods */}
                  <div className="border-t border-gray-100 dark:border-gray-800 pt-4 sm:pt-6 mt-6 sm:mt-8">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                      {t.directApproach}
                    </p>
                    <div className="flex gap-2 sm:gap-3">
                      <Button 
                        variant="outline" 
                        size="lg"
                        asChild
                        className="flex-1 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 py-2 sm:py-2.5 h-auto text-xs sm:text-sm"
                      >
                        <Link href={`mailto:${profileData.email}`}>
                          <Mail size={14} className="sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          {t.email}
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        asChild
                        className="flex-1 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 py-2 sm:py-2.5 h-auto text-xs sm:text-sm"
                      >
                        <Link href={`tel:${profileData.phone}`}>
                          <Phone size={14} className="sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          {t.call}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View - Stacked Card Design */}
          <div className="md:hidden">
            {/* Contact Info Card */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-md overflow-hidden mb-6 luxury-card">
              <div className="p-5 border-b border-gray-100 dark:border-gray-800">
                <h3 className="text-lg font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                  <MessageSquare size={18} className="text-gray-600 dark:text-gray-400" />
                  <span>{t.contactInfo || "Contact Info"}</span>
                </h3>
              </div>

              <div className="p-5 space-y-5">
                {/* Contact Method Cards - Compact Mobile Layout */}
                <div className="grid gap-3">
                  {/* Email Card */}
                  <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                    <div className="w-9 h-9 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 shadow-sm border border-gray-100 dark:border-gray-700">
                      <Mail size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm mb-0.5 text-gray-900 dark:text-white">
                        {t.email}
                      </h4>
                      <Link 
                        href={`mailto:${profileData.email}`} 
                        className="text-gray-600 dark:text-gray-300 text-xs truncate block"
                      >
                        {profileData.email}
                      </Link>
                    </div>
                    <Link 
                      href={`mailto:${profileData.email}`} 
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      <ExternalLink size={14} />
                    </Link>
                  </div>

                  {/* Phone Card */}
                  <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                    <div className="w-9 h-9 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 shadow-sm border border-gray-100 dark:border-gray-700">
                      <Phone size={16} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-0.5 text-gray-900 dark:text-white">
                        {t.phone}
                      </h4>
                      <span className="text-gray-600 dark:text-gray-300 text-xs">
                        {profileData.phone}
                      </span>
                    </div>
                    <Link 
                      href={`tel:${profileData.phone}`} 
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      <ExternalLink size={14} />
                    </Link>
                  </div>

                  {/* Location Card */}
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                    <div className="w-9 h-9 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 shadow-sm border border-gray-100 dark:border-gray-700 mt-0.5">
                      <MapPin size={16} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-0.5 text-gray-900 dark:text-white">
                        {t.location || "Location"}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">
                        {t.location}
                      </p>
                    </div>
                  </div>

                  {/* GitHub Card */}
                  <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                    <div className="w-9 h-9 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 shadow-sm border border-gray-100 dark:border-gray-700">
                      <Github size={16} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-0.5 text-gray-900 dark:text-white">
                        GitHub
                      </h4>
                      <span className="text-gray-600 dark:text-gray-300 text-xs">
                        github.com/{profileData.github}
                      </span>
                    </div>
                    <Link 
                      href={`https://github.com/${profileData.github}`}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-md overflow-hidden mb-6 luxury-card">
              <div className="p-5 border-b border-gray-100 dark:border-gray-800">
                <h3 className="text-lg font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                  <MessageSquare size={18} className="text-gray-600 dark:text-gray-400" />
                  <span>{t.sendMessage || "Send a Message"}</span>
                </h3>
              </div>

              <div className="p-5">
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {t.messageIntro || "I'm currently available for internship opportunities, collaborations, or any questions you might have."}
                </p>
                
                {/* Mobile ContactForm */}
                <ContactForm isMobile={true} />
                
                {/* Quick contact buttons for mobile */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    asChild
                    className="border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 py-2 h-auto text-xs"
                  >
                    <Link href={`mailto:${profileData.email}`}>
                      <Mail size={14} className="mr-1.5" />
                      {t.email}
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    asChild
                    className="border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 py-2 h-auto text-xs"
                  >
                    <Link href={`tel:${profileData.phone}`}>
                      <Phone size={14} className="mr-1.5" />
                      {t.call}
                    </Link>
                  </Button>
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