import React from 'react';
import WorkflowCard from './workflow/WorkflowCard';
import { MessageSquare, Users, GitBranch, Calendar, BarChart3, BrainCircuit } from 'lucide-react';

const workflowSteps = [
  {
    icon: MessageSquare,
    title: 'Lead Capture',
    description: 'Instantly capture leads from all channels - website forms, calls, and social media',
    delay: 0
  },
  {
    icon: BrainCircuit,
    title: 'AI Qualification',
    description: 'Smart chatbots qualify leads 24/7 using advanced conversation flows',
    delay: 0.1
  },
  {
    icon: Users,
    title: 'Team Assignment',
    description: 'Automatically route leads to the right team members based on criteria',
    delay: 0.2
  },
  {
    icon: GitBranch,
    title: 'Smart Workflows',
    description: 'Trigger personalized follow-up sequences based on lead behavior',
    delay: 0.3
  },
  {
    icon: Calendar,
    title: 'Appointment Booking',
    description: 'Automated scheduling system with smart availability management',
    delay: 0.4
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Track conversion rates and optimize your sales funnel',
    delay: 0.5
  }
];

export default function AutomatedWorkflow() {
  return (
    <div className="py-24 bg-[#0B1121] relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5CCC] opacity-10 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#512889] opacity-10 blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What's Inside the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5CCC] to-[#512889]">
              Ultimate Automated System Workflow
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A complete end-to-end solution for capturing, nurturing, and converting leads automatically
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflowSteps.map((step, index) => (
            <WorkflowCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              delay={step.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
}