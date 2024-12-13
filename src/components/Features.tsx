import React from 'react';
import { 
  MessageSquare, 
  Phone, 
  Bot, 
  GitBranch, 
  MessageCircle, 
  Share2, 
  Calendar, 
  BarChart3,
  Smartphone,
  Layout,
  FileText,
  Briefcase
} from 'lucide-react';

const features = [
  {
    title: 'Automated Lead Capture',
    description: 'Never miss an opportunity with instant lead capture and response systems',
    icon: MessageSquare,
  },
  {
    title: 'Missed Call Text Back',
    description: 'Automatic text responses for every missed call, keeping leads engaged',
    icon: Phone,
  },
  {
    title: 'AI-Powered Chatbots',
    description: '24/7 intelligent conversation handling and lead qualification',
    icon: Bot,
  },
  {
    title: 'Automated Workflows',
    description: 'Custom follow-up sequences that convert leads into customers',
    icon: GitBranch,
  },
  {
    title: 'Mobile App',
    description: 'Manage your business on the go with our powerful mobile application',
    icon: Smartphone,
  },
  {
    title: 'Website & Funnel Builder',
    description: 'Create stunning websites and high-converting sales funnels',
    icon: Layout,
  },
  {
    title: 'Invoicing & Contracts',
    description: 'Professional digital paperwork and payment processing solutions',
    icon: FileText,
  },
  {
    title: 'Pipeline & Deal Management',
    description: 'Comprehensive CRM to track and close more deals efficiently',
    icon: Briefcase,
  },
  {
    title: 'Unified Conversations',
    description: 'Manage all customer interactions in one centralized platform',
    icon: MessageCircle,
  },
  {
    title: 'Social Integration',
    description: 'Seamless connection with all your social media channels',
    icon: Share2,
  },
  {
    title: 'Smart Scheduling',
    description: 'Automated appointment booking that syncs with your calendar',
    icon: Calendar,
  },
  {
    title: 'Advanced Analytics',
    description: 'Comprehensive reporting and insights on your lead generation',
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#512889] mb-4">
            Powerful Features for Growth
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to capture, convert, and close more leads automatically
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF5CCC] to-[#512889] rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#512889] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}