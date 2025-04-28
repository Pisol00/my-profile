'use client';

import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
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

interface ContactFormProps {
  isMobile?: boolean;
}

export default function ContactForm({ isMobile = false }: ContactFormProps) {
  const { t, currentLang } = useLanguage();
  
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
  
  // Handle form field changes
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
  
  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formState.name.trim()) {
      newErrors.name = currentLang === 'en' 
        ? 'Name is required' 
        : 'กรุณากรอกชื่อ';
    }
    
    // Email validation
    if (!formState.email.trim()) {
      newErrors.email = currentLang === 'en'
        ? 'Email is required'
        : 'กรุณากรอกอีเมล';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = currentLang === 'en'
        ? 'Please enter a valid email address'
        : 'กรุณากรอกที่อยู่อีเมลที่ถูกต้อง';
    }
    
    // Subject validation
    if (!formState.subject.trim()) {
      newErrors.subject = currentLang === 'en'
        ? 'Subject is required'
        : 'กรุณากรอกหัวข้อ';
    }
    
    // Message validation
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
  
  // Form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // In a real project, this would connect to an API or email service
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setSubmitStatus('success');
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after delay
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      // Error
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Get translated error messages
  const getErrorMessages = {
    nameRequired: currentLang === 'en' ? 'Name is required' : 'กรุณากรอกชื่อ',
    emailRequired: currentLang === 'en' ? 'Email is required' : 'กรุณากรอกอีเมล',
    emailValid: currentLang === 'en' ? 'Please enter a valid email address' : 'กรุณากรอกที่อยู่อีเมลที่ถูกต้อง',
    subjectRequired: currentLang === 'en' ? 'Subject is required' : 'กรุณากรอกหัวข้อ',
    messageRequired: currentLang === 'en' ? 'Message is required' : 'กรุณากรอกข้อความ',
    messageLength: currentLang === 'en' ? 'Message must be at least 10 characters' : 'ข้อความต้องมีความยาวอย่างน้อย 10 ตัวอักษร',
    successMsg: currentLang === 'en' ? 'Your message has been sent successfully!' : 'ส่งข้อความของคุณเรียบร้อยแล้ว!',
    errorMsg: currentLang === 'en' ? 'There was an error sending your message. Please try again.' : 'เกิดข้อผิดพลาดในการส่งข้อความของคุณ โปรดลองอีกครั้ง',
    sending: currentLang === 'en' ? 'Sending...' : 'กำลังส่ง...'
  };
  
  // Mobile form layout
  if (isMobile) {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Status messages */}
        {submitStatus === 'success' && (
          <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg border border-green-200 dark:border-green-800 flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <p className="text-xs">
              {getErrorMessages.successMsg}
            </p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800 flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <p className="text-xs">
              {getErrorMessages.errorMsg}
            </p>
          </div>
        )}
        
        {/* Name */}
        <div>
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t.yourName}
          </label>
          <input 
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded-lg border ${
              errors.name 
                ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                : 'border-gray-200 dark:border-gray-700 focus:ring-gray-500 dark:focus:ring-gray-400'
            } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 text-sm`}
            placeholder={t.enterYourName || "Enter your name"}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.name}</p>
          )}
        </div>
        
        {/* Email */}
        <div>
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t.yourEmail}
          </label>
          <input 
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded-lg border ${
              errors.email 
                ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                : 'border-gray-200 dark:border-gray-700 focus:ring-gray-500 dark:focus:ring-gray-400'
            } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 text-sm`}
            placeholder={t.enterYourEmail || "Enter your email"}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.email}</p>
          )}
        </div>
        
        {/* Subject */}
        <div>
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t.subject}
          </label>
          <input 
            type="text"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded-lg border ${
              errors.subject 
                ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                : 'border-gray-200 dark:border-gray-700 focus:ring-gray-500 dark:focus:ring-gray-400'
            } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 text-sm`}
            placeholder={t.subjectPlaceholder || "How can I help you?"}
            disabled={isSubmitting}
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.subject}</p>
          )}
        </div>
        
        {/* Message */}
        <div>
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t.message}
          </label>
          <textarea 
            rows={3}
            name="message"
            value={formState.message}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded-lg border ${
              errors.message 
                ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                : 'border-gray-200 dark:border-gray-700 focus:ring-gray-500 dark:focus:ring-gray-400'
            } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 resize-none text-sm`}
            placeholder={t.messagePlaceholder || "Your message"}
            disabled={isSubmitting}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.message}</p>
          )}
        </div>
        
        {/* Submit Button */}
        <div>
          <Button 
            type="submit"
            className="w-full bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-100 dark:text-black text-white flex items-center justify-center gap-2 py-2 h-9 text-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {getErrorMessages.sending}
              </>
            ) : (
              <>
                <Send size={14} />
                {t.sendMessage}
              </>
            )}
          </Button>
        </div>
      </form>
    );
  }
  
  // Desktop form layout
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Status messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg border border-green-200 dark:border-green-800 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <p className="text-sm">
            {t.successMessage || "Your message has been sent successfully. I will get back to you soon!"}
          </p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <p className="text-sm">
            {t.errorMessage || "There was an error sending your message. Please try again later."}
          </p>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t.yourName}
          </label>
          <input 
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name 
                ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                : 'border-gray-200 dark:border-gray-700 focus:ring-gray-500 dark:focus:ring-gray-400'
            } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 text-sm`}
            placeholder={t.enterYourName || "Enter your name"}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
          )}
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t.yourEmail}
          </label>
          <input 
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email 
                ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                : 'border-gray-200 dark:border-gray-700 focus:ring-gray-500 dark:focus:ring-gray-400'
            } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 text-sm`}
            placeholder={t.enterYourEmail || "Enter your email"}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
          )}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t.subject}
        </label>
        <input 
          type="text"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.subject 
              ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
              : 'border-gray-200 dark:border-gray-700 focus:ring-gray-500 dark:focus:ring-gray-400'
          } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 text-sm`}
          placeholder={t.subjectPlaceholder || "How can I help you?"}
          disabled={isSubmitting}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t.message}
        </label>
        <textarea 
          rows={4}
          name="message"
          value={formState.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message 
              ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
              : 'border-gray-200 dark:border-gray-700 focus:ring-gray-500 dark:focus:ring-gray-400'
          } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 resize-none text-sm`}
          placeholder={t.messagePlaceholder || "Your message"}
          disabled={isSubmitting}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
        )}
      </div>
      
      <div>
        <Button 
          type="submit"
          size="lg"
          className="w-full bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-100 dark:text-black text-white flex items-center justify-center gap-2 py-2 h-12 text-base"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {getErrorMessages.sending}
            </>
          ) : (
            <>
              <Send size={16} className="w-5 h-5" />
              {t.sendMessage}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}