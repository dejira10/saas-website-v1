import React from 'react';
import { Check } from 'lucide-react';
import PricingCard from './PricingCard';

const plans = [
  {
    name: 'Starter',
    price: '99',
    description: 'Perfect for small businesses just getting started',
    features: [
      'Missed Call Text Back',
      'Basic Reputation Management',
      'Up to 500 Contacts',
      'Email Support',
      'Basic Analytics'
    ]
  },
  {
    name: 'Professional',
    price: '199',
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Starter, plus:',
      'Advanced Reputation Management',
      'Database Reactivation',
      'Up to 2,500 Contacts',
      'Priority Support',
      'Advanced Analytics',
      'Custom Workflows'
    ],
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: '399',
    description: 'For businesses requiring maximum capability',
    features: [
      'Everything in Professional, plus:',
      'Unlimited Contacts',
      'White-label Solutions',
      'API Access',
      '24/7 Phone Support',
      'Custom Integration',
      'Dedicated Account Manager'
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}