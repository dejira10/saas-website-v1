import React from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Capture',
    description: 'Instantly capture leads from all channels - website, calls, and social media',
  },
  {
    title: 'Engage',
    description: 'Automated responses and AI chatbots qualify leads 24/7',
  },
  {
    title: 'Nurture',
    description: 'Custom follow-up sequences keep leads warm and engaged',
  },
  {
    title: 'Convert',
    description: 'Automated scheduling and reminders turn leads into appointments',
  },
];

export default function HowItWorks() {
  return (
    <div className="py-24 bg-gradient-to-br from-[#FF5CCC] via-[#973DA4] to-[#512889]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Our proven process to help you never miss another opportunity
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-white/20" />
              )}
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-8 w-8 text-white mr-2" />
                  <span className="text-white font-bold text-xl">Step {index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-200">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}