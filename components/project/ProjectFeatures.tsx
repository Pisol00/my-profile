'use client';

import { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/common/animations/AnimatedSection';
import ProjectFeatureCard from './ProjectFeatureCard';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface WorkflowStep {
  icon: ReactNode;
  label: string;
  bgColor: string;
  iconBgColor: string;
  textColor: string;
}

interface ProjectFeaturesProps {
  title: string;
  features: Feature[];
  workflowTitle?: string;
  workflowSteps?: WorkflowStep[];
  workflowDescription?: string;
  animationsEnabled?: boolean;
}

export default function ProjectFeatures({
  title,
  features,
  workflowTitle,
  workflowSteps,
  workflowDescription,
  animationsEnabled = true
}: ProjectFeaturesProps) {
  return (
    <AnimatedSection
      animation="fade-in"
      disabled={!animationsEnabled}
      className="mb-12"
    >
      <div className="flex items-center mb-6">
        <div className="h-10 w-1.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 text-transparent">
          {title}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {features.map((feature, index) => (
          <ProjectFeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>

      {/* Workflow Diagram */}
      {workflowSteps && workflowSteps.length > 0 && (
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 p-6 shadow-md mt-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            {workflowTitle || "User Workflow"}
          </h3>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            {workflowSteps.map((step, index) => (
              <>
                <div key={`step-${index}`} className={`flex-1 p-4 ${step.bgColor} rounded-lg border ${step.textColor} text-center`}>
                  <div className={`w-10 h-10 ${step.iconBgColor} rounded-full flex items-center justify-center mx-auto mb-2 ${step.textColor}`}>
                    {step.icon}
                  </div>
                  <p className="text-gray-900 dark:text-white font-medium text-sm">
                    {step.label}
                  </p>
                </div>
                
                {index < workflowSteps.length - 1 && (
                  <>
                    <div className="hidden sm:block text-gray-400">
                      <ChevronRight size={20} />
                    </div>
                    <div className="block sm:hidden text-gray-400 self-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14"></path>
                        <path d="m19 12-7 7-7-7"></path>
                      </svg>
                    </div>
                  </>
                )}
              </>
            ))}
          </div>

          {workflowDescription && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 text-center">
              {workflowDescription}
            </p>
          )}
        </div>
      )}
    </AnimatedSection>
  );
}