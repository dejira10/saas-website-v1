import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ name, price, description, features, isPopular }: PricingCardProps) {
  return (
    <div className={`relative bg-white rounded-2xl shadow-xl p-8 ${
      isPopular ? 'ring-2 ring-[#FF5CCC]' : ''
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-6 transform -translate-y-1/2">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-[#FF5CCC] to-[#512889] text-white">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-600">/month</span>
        </div>
        <p className="mt-4 text-gray-600">{description}</p>
      </div>

      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
          isPopular
            ? 'bg-gradient-to-r from-[#FF5CCC] to-[#512889] text-white hover:opacity-90'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}>
          Get Started
        </button>
      </div>
    </div>
  );
}