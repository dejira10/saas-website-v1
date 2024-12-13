import React from 'react';
import { MessageSquare, Users, Target, Link } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import FeatureGrid from '../ui/FeatureGrid';

const features = [
  {
    icon: MessageSquare,
    title: 'Smart Campaigns',
    description: 'Orchestrate personalized customer journeys across email, SMS, and automated touchpoints.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Streamline workflow management with intuitive boards and real-time task allocation.'
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Segment your audience using advanced behavioral data and engagement metrics.'
  },
  {
    icon: Link,
    title: 'Easy Integration',
    description: 'Sync seamlessly with your existing tools to automate data flow and reduce manual tasks.'
  }
];

export default function PlatformEfficiency() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Streamline Your Operations"
          subtitle="Boost productivity and enhance customer satisfaction with our integrated platform."
        />
        <div className="mt-16">
          <FeatureGrid features={features} />
        </div>
      </div>
    </section>
  );
}