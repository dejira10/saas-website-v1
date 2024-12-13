import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from './NavLink';

const services = [
  { name: 'Missed Call Text Back', href: '/services/text-back' },
  { name: 'Reputation Management', href: '/services/reputation' },
  { name: 'Database Reactivation', href: '/services/database' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#FF5CCC] to-[#512889] text-transparent bg-clip-text">
                RapidScale
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink href="/">Home</NavLink>
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </button>
              <div className="absolute left-0 w-56 mt-2 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service) => (
                  <NavLink 
                    key={service.href} 
                    href={service.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>
            </div>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink href="/" className="block px-3 py-2">Home</NavLink>
            {services.map((service) => (
              <NavLink
                key={service.href}
                href={service.href}
                className="block px-3 py-2"
              >
                {service.name}
              </NavLink>
            ))}
            <NavLink href="/pricing" className="block px-3 py-2">Pricing</NavLink>
            <NavLink href="/contact" className="block px-3 py-2">Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}