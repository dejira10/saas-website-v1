import React from 'react';
import { LucideIcon } from 'lucide-react';

interface WorkflowCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export default function WorkflowCard({ icon: Icon, title, description, delay }: WorkflowCardProps) {
  return (
    <div
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
      style={{
        animation: 'fadeInUp 0.5s ease-out forwards',
        animationDelay: `${delay}s`,
        opacity: 0
      }}
    >
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#FF5CCC] to-[#512889] p-3 mb-4">
          <Icon className="w-full h-full text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#FF5CCC] transition-colors">
          {title}
        </h3>
        <p className="text-gray-400">{description}</p>

        {/* Animated Border */}
        <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF5CCC] to-[#512889] rounded-xl animate-pulse" />
          <div className="absolute inset-[1px] bg-[#0B1121] rounded-xl" />
        </div>
      </div>
    </div>
  );
}