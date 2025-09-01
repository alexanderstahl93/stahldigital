"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navbarRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Active section detection for smart navigation highlighting
      const sections = document.querySelectorAll('section[id], main > div[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || "");
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getNavLinkClass = (path: string) => {
    const isActive = activeSection === path.replace('/', '') || 
                    (path === '/leistungen' && activeSection === 'leistungen') ||
                    (path === '/referenzen' && activeSection === 'referenzen');
    
    return `px-4 py-2 text-sm font-medium transition-all duration-300 ${
      isActive 
        ? 'text-blue-600 bg-white shadow-sm scale-105' 
        : 'text-gray-700 hover:text-gray-900 hover:bg-white/80'
    } rounded-full`;
  };

  return (
    <>
      {/* Custom cursor for premium feel */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-custom-blue rounded-full pointer-events-none z-[60] mix-blend-difference opacity-0 lg:opacity-100 transition-opacity duration-500"
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`,
        }}
      />

      <nav 
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100/50' 
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-emerald-600/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-20">
            {/* Typewriter Logo Effect */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group" onClick={closeMenu}>
                <div className="relative overflow-hidden">
                  <div className="relative z-10">
                    <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-custom-blue to-custom-orange bg-clip-text text-transparent transition-all duration-500 group-hover:scale-110 group-hover:rotate-1">
                      <span className="typewriter-text">Stahl Digital</span>
                    </h1>
                  </div>
                  {/* Animated underline with gradient */}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-custom-blue via-custom-orange to-custom-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-custom-blue/20 to-custom-orange/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
              </Link>
            </div>

            {/* Enhanced Desktop Navigation with Smart Highlighting */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              <div className="flex items-center space-x-1 bg-gray-50/60 backdrop-blur-sm rounded-full p-1 border border-gray-200/50 shadow-sm">
                <Link
                  href="/webinar"
                  className={getNavLinkClass('/webinar')}
                >
                  Webinar
                </Link>
                <Link
                  href="/leistungen/branche"
                  className={getNavLinkClass('/leistungen/branche')}
                >
                  Branchenübersicht
                </Link>
                <Link
                  href="/leistungen"
                  className={getNavLinkClass('/leistungen')}
                >
                  Leistungen
                </Link>
                <Link
                  href="/leistungen/pakete"
                  className={getNavLinkClass('/leistungen/pakete')}
                >
                  Pakete
                </Link>
                <Link
                  href="/ihr-investment"
                  className={getNavLinkClass('/ihr-investment')}
                >
                  Investment
                </Link>
                <Link
                  href="/referenzen"
                  className={getNavLinkClass('/referenzen')}
                >
                  Referenzen
                </Link>
              </div>
              
              <div className="ml-6">
                <Link
                  href="/leistungen/kostenlose-beratung"
                  className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-sm overflow-hidden"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
                    <div className="absolute top-2 right-2 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
                  </div>
                  
                  <span className="relative z-10 flex items-center">
                    Beratung anfordern
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Enhanced Mobile menu button with morphing animation */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="relative p-2 text-gray-700 hover:text-gray-900 focus:outline-none transition-all duration-300 group"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1 bg-blue-600' : '-translate-y-1'
                  }`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1 bg-emerald-600' : 'translate-y-1'
                  }`}></span>
                </div>
                
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full bg-gray-100 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation with Advanced Animations */}
          <div className={`lg:hidden transition-all duration-500 ease-out ${
            isMenuOpen 
              ? 'max-h-[500px] opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
          }`}>
            <div className="px-2 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden">
              {/* Animated background for mobile menu */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-emerald-50/30 opacity-50"></div>
              
              <div className="relative z-10 space-y-2">
                {[
                  { href: "/webinar", label: "Webinar"},
                  { href: "/leistungen/branche", label: "Branchenübersicht"},
                  { href: "/leistungen", label: "Leistungen" },
                  { href: "/leistungen/pakete", label: "Pakete"},
                  { href: "/ihr-investment", label: "Investment"},
                  { href: "/referenzen", label: "Referenzen"}
                ].map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block px-4 py-3 text-gray-700 hover:text-gray-900 font-medium rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 transition-all duration-300 border border-transparent hover:border-gray-200/50 hover:shadow-sm transform hover:scale-[1.02]"
                    onClick={closeMenu}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                                    <div className="flex items-center space-x-3">
                  <span className="flex-1">{item.label}</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                  </Link>
                ))}
              </div>
              
              <div className="relative z-10 pt-4 space-y-3">
                {/* Enhanced Contact Section */}
                <div className="text-center space-y-3 p-4 bg-gradient-to-r from-blue-50/50 to-emerald-50/50 rounded-xl border border-blue-100/30">
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <a 
                      href="mailto:office@stahldigital.at" 
                      className="group flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-105"
                      onClick={closeMenu}
                    >
                      <span className="font-medium">office@stahldigital.at</span>
                    </a>
                    <a 
                      href="tel:+436767734689" 
                      className="group flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-all duration-300 hover:scale-105"
                      onClick={closeMenu}
                    >
                      <span className="font-medium">+43 676 7734689</span>
                    </a>
                  </div>
                </div>
                
                {/* Enhanced CTA Button */}
                <Link
                  href="/leistungen/kostenlose-beratung"
                  className="group block w-full text-center bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-600 text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 overflow-hidden relative"
                  onClick={closeMenu}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-2 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-2 right-4 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
                  </div>
                  
                  <span className="relative z-10 flex items-center justify-center">
                    Beratung anfordern
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
} 