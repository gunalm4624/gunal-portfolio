'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Wall of Works', href: '/works' },
  ]

  return (
    <nav className='navbar flex justify-between items-center px-4 lg:px-0'>
      {/* Logo and Name */}
      <div className='flex items-center gap-3'>
        <div className="gunalm-photo w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden relative">
          <Image 
            src="/images/my-photo.png" 
            alt="Gunal M" 
            fill
            priority
            className="object-cover" 
            sizes="(max-width: 768px) 40px, 48px"
          />
        </div>
        <Link href="/" className='gap-0.5 flex flex-col'>
          <h1 className='text-sm sm:text-base font-medium'>Gunal M</h1>
          <p className='text-xs text-gray-600'>UI/UX Designer</p>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center gap-6 lg:gap-8'>
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className='text-sm lg:text-base hover:text-gray-600 transition-colors'
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className='hidden md:flex items-center gap-2'>
        <Link href="/contact-me">
          <button className='px-4 py-2 bg-black text-white rounded-lg text-sm py-3'>
            Get in Touch
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden block'>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l border-gray-200 p-6">
            <div className="flex flex-col space-y-6">
              {/* Mobile Logo and Name */}
              <div className='flex items-center gap-3 pb-4 border-b border-gray-200'>
                <div className="gunalm-photo w-12 h-12 rounded-full overflow-hidden">
                  <img src="/images/my-photo.png" alt="Gunal M" className="w-full h-full object-cover" />
                </div>
                <Link href="/" className='gap-0.5 flex flex-col' onClick={() => setIsOpen(false)}>
                  <h1 className='text-base font-medium'>Gunal M</h1>
                  <p className='text-sm text-gray-600'>UI/UX Designer</p>
                </Link>
              </div>

              {/* Mobile Navigation Links */}
              <div className='flex flex-col space-y-4'>
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='text-base hover:text-gray-600 transition-colors'
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Buttons */}
              <div className='flex flex-col space-y-3 pt-4 border-t border-gray-200'>
                <Link href="/contact-me" onClick={() => setIsOpen(false)}>
                  <button className='w-full px-4 py-2 bg-black text-white rounded-lg text-sm py-3'>
                    Get in Touch
                  </button>
                </Link>
                <button className='w-full px-4 py-2 bg-black text-white rounded-lg text-sm primary-button py-3'>
                  Download Resume
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default Navbar