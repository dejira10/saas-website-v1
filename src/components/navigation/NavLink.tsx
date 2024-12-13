import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  const baseStyles = "text-gray-600 hover:text-gray-900 transition-colors duration-200";
  
  return (
    <a href={href} className={`${baseStyles} ${className}`}>
      {children}
    </a>
  );
}