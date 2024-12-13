import React from 'react';
import { ArrowRight, MessageSquare, Calendar, BarChart3, BrainCircuit, Phone, Share2, GitBranch } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Lead Capture',
    description: 'Instantly capture and respond to all incoming leads',
    delay: 0
  },
  {
    icon: Phone,
    title: 'Missed Call Text Back',
    description: 'Automated responses for every missed opportunity',
    delay: 0.1
  },
  {
    icon: BrainCircuit, // Changed from Bot to BrainCircuit for AI representation
    title: 'AI Chatbots',
    description: '24/7 intelligent conversation handling',
    delay: 0.2
  },
  {
    icon: GitBranch,
    title: 'Smart Workflows',
    description: 'Automated sequences that convert leads',
    delay: 0.3
  },
  {
    icon: Share2,
    title: 'Multi-Channel',
    description: 'Connect across all platforms seamlessly',
    delay: 0.4
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Automated booking and reminders',
    delay: 0.5
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Comprehensive reporting and insights',
    delay: 0.6
  }
];

export default function FeatureShowcase() {
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
            What's Inside
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5CCC] to-[#512889]">
              {' '}RapidScale Marketing
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to capture, convert, and close more leads automatically
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              style={{
                animation: 'fadeInUp 0.5s ease-out forwards',
                animationDelay: `${feature.delay}s`,
                opacity: 0
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#FF5CCC] to-[#512889] p-3">
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#FF5CCC] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-5 w-5 text-[#FF5CCC]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}