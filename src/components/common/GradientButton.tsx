import React from 'react';
import { THEME } from '../../utils/constants';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function GradientButton({
  variant = 'primary',
  children,
  icon,
  className = '',
  ...props
}: GradientButtonProps) {
  const baseStyles = 'group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl';
  
  const variants = {
    primary: `${THEME.gradients.secondary} text-white hover:opacity-90`,
    secondary: 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && (
        <span className="ml-2 group-hover:translate-x-1 transition-transform">
          {icon}
        </span>
      )}
    </button>
  );
}