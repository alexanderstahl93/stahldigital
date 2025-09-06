"use client"

import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
      
      // Show progress bar after scrolling down a bit
      setIsVisible(scrollTop > 100)
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress() // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className={`fixed top-0 left-0 w-full h-2 bg-gray-100 z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div 
        className="h-full bg-gradient-to-r from-custom-blue to-custom-blue transition-all duration-150 ease-out shadow-lg"
        style={{ width: `${scrollProgress}%` }}
      />
      {/* Glow effect */}
      <div 
        className="h-full bg-gradient-to-r from-custom-blue/50 to-custom-orange/50 blur-md transition-all duration-150 ease-out absolute top-0"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
