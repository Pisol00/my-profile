'use client';

import { useState, FormEvent } from 'react';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export default function ContactForm() {
  const { currentLang, t } = useLanguage();
  
  // Form state
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Validation errors
  const [errors, setErrors] = useState<FormErrors>({});
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // ฟังก์ชันจัดการการเปลี่ยนแปลงข้อมูลในฟอร์ม
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
    
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // ฟังก์ชันตรวจสอบความถูกต้องของฟอร์ม
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // ตรวจสอบชื่อ
    if (!formState.name.trim()) {
      newErrors.name = currentLang === 'en' 
        ? 'Name is required' 
        : 'กรุณากรอกชื่อ';
    }
    
    // ตรวจสอบอีเมล
    if (!formState.email.trim()) {
      newErrors.email = currentLang === 'en'
        ? 'Email is required'
        : 'กรุณากรอกอีเมล';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = currentLang === 'en'
        ? 'Please enter a valid email address'
        : 'กรุณากรอกที่อยู่อีเมลที่ถูกต้อง';
    }
    
    // ตรวจสอบหัวข้อ
    if (!formState.subject.trim()) {
      newErrors.subject = currentLang === 'en'
        ? 'Subject is required'
        : 'กรุณากรอกหัวข้อ';
    }
    
    // ตรวจสอบข้อความ
    if (!formState.message.trim()) {
      newErrors.message = currentLang === 'en'
        ? 'Message is required'
        : 'กรุณากรอกข้อความ';
    } else if (formState.message.length < 10) {
      newErrors.message = currentLang === 'en'
        ? 'Message must be at least 10 characters'
        : 'ข้อความต้องมีความยาวอย่างน้อย 10 ตัวอักษร';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // ฟังก์ชันส่งฟอร์ม
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // ตรวจสอบความถูกต้องของข้อมูล
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // ในโปรเจคจริง จะต้องเชื่อมต่อกับ API หรือ service ที่ใช้ส่งอีเมล
      // เช่น Nodemailer, SendGrid, Mailchimp, หรือ AWS SES
      
      // จำลองการส่งข้อมูล
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // สำเร็จ
      setSubmitStatus('success');
      
      // รีเซ็ตฟอร์ม
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // แสดงข้อความสำเร็จสักครู่ แล้วรีเซ็ตสถานะ
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      // เกิดข้อผิดพลาด
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
      {/* ข้อความแจ้งสถานะ */}
      {submitStatus === 'success' && (
        <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg border border-green-200 dark:border-green-800 flex items-center gap-2">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <p className="text-xs sm:text-sm">
            {currentLang === 'en'
              ? 'Your message has been sent successfully. I will get back to you soon!'
              : 'ส่งข้อความของคุณเรียบร้อยแล้ว ฉันจะติดต่อกลับในเร็วๆ นี้!'}
          </p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800 flex items-center gap-2">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <p className="text-xs sm:text-sm">
            {currentLang === 'en'
              ? 'There was an error sending your message. Please try again later.'
              : 'เกิดข้อผิดพลาดในการส่งข้อความของคุณ โปรดลองอีกครั้งในภายหลัง'}
          </p>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <div className="flex-1">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t.yourName}
          </label>
          <input 
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border ${
              errors.name 
                ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                : 'border-blue-100 dark:border-blue-900/50 focus:ring-blue-500'
            } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 dark:focus:ring-blue-600 text-sm`}
            placeholder={currentLang === "en" ? "Enter your name" : "ใส่ชื่อของคุณ"}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-xs sm:text-sm text-red-600 dark:text-red-400">{errors.name}</p>
          )}
        </div>
        <div className="flex-1">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t.yourEmail}
          </label>
          <input 
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border ${
              errors.email 
                ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                : 'border-blue-100 dark:border-blue-900/50 focus:ring-blue-500'
            } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 dark:focus:ring-blue-600 text-sm`}
            placeholder={currentLang === "en" ? "Enter your email" : "ใส่อีเมลของคุณ"}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-xs sm:text-sm text-red-600 dark:text-red-400">{errors.email}</p>
          )}
        </div>
      </div>
      
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t.subject}
        </label>
        <input 
          type="text"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border ${
            errors.subject 
              ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
              : 'border-blue-100 dark:border-blue-900/50 focus:ring-blue-500'
          } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 dark:focus:ring-blue-600 text-sm`}
          placeholder={currentLang === "en" ? "How can I help you?" : "ฉันช่วยคุณได้อย่างไร?"}
          disabled={isSubmitting}
        />
        {errors.subject && (
          <p className="mt-1 text-xs sm:text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
        )}
      </div>
      
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t.message}
        </label>
        <textarea 
          rows={4}
          name="message"
          value={formState.message}
          onChange={handleChange}
          className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border ${
            errors.message 
              ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
              : 'border-blue-100 dark:border-blue-900/50 focus:ring-blue-500'
          } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 dark:focus:ring-blue-600 resize-none text-sm`}
          placeholder={currentLang === "en" ? "Your message" : "ข้อความของคุณ"}
          disabled={isSubmitting}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-xs sm:text-sm text-red-600 dark:text-red-400">{errors.message}</p>
        )}
      </div>
      
      <div>
        <Button 
          type="submit"
          size="lg"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 py-2 h-10 sm:h-12 text-sm sm:text-base"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {currentLang === "en" ? "Sending..." : "กำลังส่ง..."}
            </>
          ) : (
            <>
              <Send size={16} className="sm:w-5 sm:h-5" />
              {t.sendMessage}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}