import React from 'react';
import { BarChart2, UserCheck, PieChart, TrendingUp } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import FeatureGrid from '../ui/FeatureGrid';

const features = [
  {
    icon: BarChart2,
    title: 'Marketing Insights',
    description: 'Identify your most effective campaigns and optimize your marketing spend.'
  },
  {
    icon: UserCheck,
    title: 'Team Analytics',
    description: 'Monitor key performance metrics for each team member to optimize productivity.'
  },
  {
    icon: PieChart,
    title: 'Comprehensive Reports',
    description: 'Access detailed analytics on conversion rates and customer engagement metrics.'
  },
  {
    icon: TrendingUp,
    title: 'Revenue Analytics',
    description: 'Track the direct impact of automation on your bottom line with detailed ROI metrics.'
  }
];

export default function RevenueSolution() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Transform Conversations into Revenue"
          subtitle="Get actionable insights on how your automated systems directly impact your business growth."
        />
        <div className="mt-16">
          <FeatureGrid features={features} />
        </div>
      </div>
    </section>
  );
}