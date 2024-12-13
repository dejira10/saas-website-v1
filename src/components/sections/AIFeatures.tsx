import React from 'react';
import { Bot, Sliders, Lightbulb, Clock } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import FeatureGrid from '../ui/FeatureGrid';

const features = [
  {
    icon: Bot,
    title: 'Smart Automation',
    description: 'Enhance your customer service with AI-powered responses that maintain your brand voice and values.'
  },
  {
    icon: Sliders,
    title: 'Complete Oversight',
    description: 'Stay in control with real-time monitoring, instant intervention capabilities, and seamless handoffs.'
  },
  {
    icon: Lightbulb,
    title: 'Expert Assistance',
    description: 'Launch with confidence using our proven strategies and automated optimization suggestions.'
  },
  {
    icon: Clock,
    title: 'Quick-Start Solutions',
    description: 'Get started immediately with customizable templates designed for your specific industry needs.'
  }
];

export default function AIFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Transform Your Business with Intelligent Automation"
          subtitle="Advanced AI solutions that keep you in control while maximizing efficiency and maintaining brand consistency."
        />
        <div className="mt-16">
          <FeatureGrid features={features} />
        </div>
      </div>
    </section>
  );
}