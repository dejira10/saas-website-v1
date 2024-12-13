import React, { useState } from 'react';
import { MessageSquare, GitBranch, Calendar, BarChart3, BrainCircuit, Users, ArrowRight } from 'lucide-react';

const workflowSteps = [
  {
    icon: MessageSquare,
    title: 'Multi-Channel Lead Capture',
    description: 'Capture leads from every touchpoint',
    features: [
      'Website Forms & Chat',
      'Social Media Integration',
      'Phone & SMS Tracking',
      'Email Lead Collection'
    ],
    color: 'from-[#FF5CCC] to-[#973DA4]'
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Lead Qualification',
    description: 'Smart lead scoring and routing',
    features: [
      'Behavior Analysis',
      'Interest Scoring',
      'Budget Qualification',
      'Priority Assignment'
    ],
    color: 'from-[#973DA4] to-[#743296]'
  },
  {
    icon: GitBranch,
    title: 'Automated Follow-up Sequences',
    description: 'Never miss a follow-up opportunity',
    features: [
      'Dynamic Email Sequences',
      'SMS Follow-ups',
      'Task Automation',
      'Multi-channel Engagement'
    ],
    color: 'from-[#743296] to-[#512889]'
  },
  {
    icon: Calendar,
    title: 'Smart Appointment Booking',
    description: 'Streamline your scheduling process',
    features: [
      'Automated Calendar Sync',
      'Smart Availability',
      'Reminder System',
      'Meeting Preferences'
    ],
    color: 'from-[#512889] to-[#973DA4]'
  }
];

export default function AlternateWorkflowShowcase() {
  const [activeStep, setActiveStep] = useState(0);

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
            Our Automated{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5CCC] to-[#512889]">
              Lead Generation Engine
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A powerful system that works 24/7 to capture, nurture, and convert your leads
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Steps Navigation */}
          <div className="space-y-4">
            {workflowSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-white/10 backdrop-blur-sm border border-white/20'
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${step.color} p-2 mr-3`}>
                    <step.icon className="w-full h-full text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold ${
                      activeStep === index ? 'text-white' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-transform ${
                    activeStep === index ? 'text-white translate-x-1' : 'text-gray-600'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Feature Display */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full">
              <div className="flex items-start mb-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${workflowSteps[activeStep].color} p-4 mr-4`}>
                  {React.createElement(workflowSteps[activeStep].icon, {
                    className: "w-full h-full text-white"
                  })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {workflowSteps[activeStep].title}
                  </h3>
                  <p className="text-gray-400">
                    {workflowSteps[activeStep].description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {workflowSteps[activeStep].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3"
                    style={{
                      animation: 'fadeInUp 0.5s ease-out forwards',
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${workflowSteps[activeStep].color}`} />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}