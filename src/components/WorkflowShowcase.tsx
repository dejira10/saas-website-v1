import React, { useState, useEffect } from 'react';
import { MessageSquare, GitBranch, Calendar, BarChart3, BrainCircuit, Users } from 'lucide-react';

const workflowItems = [
  {
    icon: MessageSquare,
    title: 'Lead Capture System',
    description: '6 Automated Capture Points & 4 Response Templates',
    details: [
      'Website Form Integration',
      'Social Media Lead Capture',
      'Phone Call Tracking',
      'Email Lead Collection',
      'Chat Widget Integration',
      'SMS Response System'
    ]
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Qualification',
    description: '5 Smart Qualification Flows & 3 Routing Rules',
    details: [
      'Lead Scoring Algorithm',
      'Behavior-Based Segmentation',
      'Interest Analysis',
      'Budget Qualification',
      'Timeline Assessment'
    ]
  },
  {
    icon: GitBranch,
    title: 'Automated Workflows',
    description: '8 Dynamic Sequences & 6 Trigger Points',
    details: [
      'Welcome Sequence',
      'Follow-up Automation',
      'Engagement Tracking',
      'Custom Triggers',
      'Multi-Channel Integration',
      'Action-Based Routing'
    ]
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: '4 Booking Flows & 3 Reminder Systems',
    details: [
      'Automated Calendar Sync',
      'Smart Availability Management',
      'Multi-timezone Support',
      'SMS Reminders',
      'Email Confirmations'
    ]
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: '7 Key Metrics & Real-time Reporting',
    details: [
      'Conversion Tracking',
      'Response Time Analytics',
      'Lead Source ROI',
      'Team Performance',
      'Campaign Effectiveness',
      'Customer Journey Mapping'
    ]
  }
];

export default function WorkflowShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % workflowItems.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const activeItem = workflowItems[activeIndex];

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
              Ultimate Automated System
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A complete end-to-end solution for capturing, nurturing, and converting leads automatically
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Navigation Icons */}
          <div className="flex flex-wrap justify-center gap-6">
            {workflowItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-white/10 scale-105'
                    : 'hover:bg-white/5'
                }`}
              >
                <div className={`w-16 h-16 rounded-xl ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-[#FF5CCC] to-[#512889]'
                    : 'bg-white/5'
                } p-4 mb-2 transition-all duration-300`}>
                  <item.icon className="w-full h-full text-white" />
                </div>
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                  {item.title.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 ${
            isAnimating ? 'opacity-0 transform translate-x-full' : 'opacity-100 transform translate-x-0'
          }`}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#FF5CCC] to-[#512889] p-4 mr-4">
                <activeItem.icon className="w-full h-full text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{activeItem.title}</h3>
                <p className="text-[#FF5CCC]">{activeItem.description}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {activeItem.details.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300"
                  style={{
                    animation: `fadeInUp 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF5CCC] to-[#512889]" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}