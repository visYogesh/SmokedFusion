import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#sales-rentals', label: 'Sales & Rentals' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="bg-slate-900 text-white fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="CarNation Elite Logo"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">CarNation Elite</h1>
              <p className="text-sm text-cyan-600">Premium Auto Repair</p>
            </div>

            <div >
              <p className="text-sm text-gray-400">
                +1 (214) 597-4922
              </p>
              <p className="text-sm text-gray-400">
                13610, FLOYD CIRCLE, DALLAS,TX 75243
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-blue-400 transition-colors text-lg"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <nav className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-800`}>  
          <ul className="flex flex-col px-4 py-2 space-y-2 mt-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {/* Spacer to prevent content hiding under fixed header */}
      <div className="pt-[84px]" />
    </>
  );
};

export default Header;