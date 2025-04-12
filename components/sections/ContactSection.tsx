'use client';

import { forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, MapPin, ExternalLink, Send, MessageSquare } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/context/LanguageContext';
import { profileData } from '@/translations';

type ContactSectionProps = {
  animationsEnabled: boolean;
};

const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(
  ({ animationsEnabled }, ref) => {
    const { currentLang, t } = useLanguage();
    
    return (
      <section ref={ref} className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Decorative circles */}
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
          
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

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <AnimatedSection animation="fade-in" disabled={!animationsEnabled} className="mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-semibold mb-4 shadow-sm border border-blue-200 dark:border-blue-800 backdrop-blur-sm mx-auto text-center block w-fit">
              {currentLang === "en" ? "Get In Touch" : "ติดต่อ"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
              {t.contact}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              {currentLang === "en"
                ? "Feel free to reach out for collaborations, internship opportunities, or just to say hello"
                : "อย่าลังเลที่จะติดต่อเพื่อความร่วมมือ โอกาสในการฝึกงาน หรือเพียงแค่ทักทาย"}
            </p>
          </AnimatedSection>

          {/* Main content with split design */}
          <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-blue-100 dark:border-blue-900/50">
            <div className="grid md:grid-cols-5">
              {/* Left side - Contact Info */}
              <div className="md:col-span-2 bg-blue-50 dark:bg-blue-900/30 p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <MessageSquare size={24} className="text-blue-600 dark:text-blue-400" />
                  <span>{currentLang === "en" ? "Contact Info" : "ข้อมูลติดต่อ"}</span>
                </h3>
                
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-800">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">
                        {currentLang === "en" ? "Email" : "อีเมล"}
                      </h4>
                      <a 
                        href={`mailto:${profileData.email}`} 
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 group"
                      >
                        {profileData.email}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-800">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">
                        {currentLang === "en" ? "Phone" : "โทรศัพท์"}
                      </h4>
                      <a 
                        href={`tel:${profileData.phone}`} 
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 group"
                      >
                        {profileData.phone}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-800">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">
                        {currentLang === "en" ? "Location" : "ที่อยู่"}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {currentLang === "en" ? profileData.location : t.location}
                      </p>
                    </div>
                  </div>
                  
                  {/* GitHub */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-800">
                      <Github size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">
                        GitHub
                      </h4>
                      <a 
                        href={`https://github.com/${profileData.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 group"
                      >
                        github.com/{profileData.github}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Contact Form/Message */}
              <div className="md:col-span-3 p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <Send size={24} className="text-blue-600 dark:text-blue-400" />
                  <span>{currentLang === "en" ? "Send a Message" : "ส่งข้อความ"}</span>
                </h3>
                
                <div className="mb-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {currentLang === "en"
                      ? "I'm currently available for internship opportunities, collaborations, or any questions you might have."
                      : "ฉันพร้อมรับโอกาสฝึกงาน ความร่วมมือ หรือตอบคำถามที่คุณอาจมี"}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {currentLang === "en" ? "Your Name" : "ชื่อของคุณ"}
                        </label>
                        <input 
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-blue-100 dark:border-blue-900/50 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                          placeholder={currentLang === "en" ? "Enter your name" : "ใส่ชื่อของคุณ"}
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {currentLang === "en" ? "Your Email" : "อีเมลของคุณ"}
                        </label>
                        <input 
                          type="email"
                          className="w-full px-4 py-3 rounded-lg border border-blue-100 dark:border-blue-900/50 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                          placeholder={currentLang === "en" ? "Enter your email" : "ใส่อีเมลของคุณ"}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {currentLang === "en" ? "Subject" : "หัวข้อ"}
                      </label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-blue-100 dark:border-blue-900/50 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                        placeholder={currentLang === "en" ? "How can I help you?" : "ฉันช่วยคุณได้อย่างไร?"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {currentLang === "en" ? "Message" : "ข้อความ"}
                      </label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-blue-100 dark:border-blue-900/50 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 resize-none"
                        placeholder={currentLang === "en" ? "Your message" : "ข้อความของคุณ"}
                      ></textarea>
                    </div>
                    <div>
                      <Button 
                        size="lg"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 py-6"
                      >
                        <Send size={18} />
                        {currentLang === "en" ? "Send Message" : "ส่งข้อความ"}
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Alternative contact methods */}
                <div className="border-t border-blue-100 dark:border-blue-900/30 pt-6 mt-8">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {currentLang === "en"
                      ? "Prefer a direct approach? Contact me via:"
                      : "ต้องการติดต่อโดยตรง? ติดต่อฉันผ่าน:"}
                  </p>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="lg"
                      asChild
                      className="flex-1 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    >
                      <a href={`mailto:${profileData.email}`}>
                        <Mail size={18} className="mr-2" />
                        Email
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      asChild
                      className="flex-1 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    >
                      <a href={`tel:${profileData.phone}`}>
                        <Phone size={18} className="mr-2" />
                        {currentLang === "en" ? "Call" : "โทร"}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Extra CTA for GitHub */}
          <AnimatedSection
            animation="fade-in"
            delay={300}
            disabled={!animationsEnabled}
            className="mt-16 text-center"
          >
            <a
              href={`https://github.com/${profileData.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-all shadow-sm text-lg font-medium"
            >
              <Github size={24} />
              {currentLang === "en" ? "Check out my projects on GitHub" : "ดูโปรเจกต์ของฉันบน GitHub"}
            </a>
          </AnimatedSection>
        </div>
      </section>
    );
  }
);

ContactSection.displayName = 'ContactSection';

export default ContactSection;