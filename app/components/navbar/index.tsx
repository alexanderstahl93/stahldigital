"use client"

import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'SEO Optimierung', href: '/seo' },
    { name: 'Google Ads', href: '/google-ads' },
    { name: 'Reputationsmanagement', href: '/reputation' }
  ];

  const navItems = [
    { name: 'Über uns', href: '/about' },
    { name: 'Referenzen', href: '/references' },
    { name: 'Kontakt', href: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/stahl_digital.png" alt="Stahl Digital - Digitale Marketing Agentur" width={158} height={48} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center px-4 py-2 text-gray-700 hover:text-custom-orange transition-colors"
              >
                Leistungen
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Services Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg hidden group-hover:block">
                <div className="py-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-custom-orange"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-gray-700 hover:text-custom-orange transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button */}
            <Button 
              className="ml-4 bg-custom-orange hover:bg-custom-blue text-white transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" />
              Jetzt anfragen
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-custom-blue hover:text-custom-orange"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {/* Services Section */}
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left px-3 py-2 text-gray-700 hover:text-custom-orange flex items-center justify-between"
            >
              Leistungen
              <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServicesOpen && (
              <div className="pl-4">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-3 py-2 text-gray-600 hover:text-custom-orange"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Other Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-custom-orange"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile CTA Button */}
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-custom-orange hover:bg-custom-blue text-white transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                Jetzt anfragen
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;