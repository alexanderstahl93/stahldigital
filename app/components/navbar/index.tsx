"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <Image
                src="/stahl_digital.png"
                alt="Stahl Digital"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/leistungen"
              className="text-gray-900 hover:text-custom-orange font-medium transition-colors duration-200"
            >
              Leistungen
            </Link>
            <Link
              href="/leistungen/pakete"
              className="text-gray-900 hover:text-custom-orange font-medium transition-colors duration-200"
            >
              Pakete
            </Link>
            <Link
              href="/ihr-investment"
              className="text-gray-900 hover:text-custom-orange font-medium transition-colors duration-200"
            >
              Ihr Investment
            </Link>
            <Link
              href="/referenzen"
              className="text-gray-900 hover:text-custom-orange font-medium transition-colors duration-200"
            >
              Referenzen
            </Link>
            <Link
              href="/leistungen/kostenlose-beratung"
              className="bg-custom-blue hover:bg-custom-orange text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Beratung anfragen
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-custom-orange focus:outline-none focus:text-custom-orange transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                href="/leistungen"
                className="block px-3 py-2 text-gray-900 hover:text-custom-orange font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Leistungen
              </Link>
              <Link
                href="/referenzen"
                className="block px-3 py-2 text-gray-900 hover:text-custom-orange font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Referenzen
              </Link>
              <Link
                href="/kontakt"
                className="block px-3 py-2 text-gray-900 hover:text-custom-orange font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Kontakt
              </Link>
              <div className="px-3 py-2">
                <Link
                  href="/leistungen/kostenlose-beratung"
                  className="block w-full text-center bg-custom-blue hover:bg-custom-orange text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Beratung anfragen
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 