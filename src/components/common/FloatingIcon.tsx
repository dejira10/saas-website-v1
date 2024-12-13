import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FloatingIconProps {
  Icon: LucideIcon;
  position: string;
  delay: number;
  gradient: string;
}

export default function FloatingIcon({ Icon, position, delay, gradient }: FloatingIconProps) {
  return (
    <div
      className={`absolute ${position} transform hover:scale-110 transition-transform duration-500`}
      style={{ animation: `float 6s ease-in-out infinite`, animationDelay: `${delay}s` }}
    >
      <div className={`w-16 h-16 rounded-2xl ${gradient} shadow-lg flex items-center justify-center backdrop-blur-sm`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
    </div>
  );
}