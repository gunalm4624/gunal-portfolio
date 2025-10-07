import { Dribbble, Instagram, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import SmoothScrollWrapper from '@/components/ui/smooth-scroll-wrapper'

const HomePage = () => {
  return (
    <SmoothScrollWrapper className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-8 lg:mt-18 px-4 lg:px-0">
      <SmoothScrollWrapper className="bg-white lg:col-span-8 rounded-[18px] p-6 lg:p-10 text-center lg:text-left">
        <h1 className='text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-tight lg:leading-14 font-medium'>From Concept to Click—Seamless by Design</h1>
        <p className='text-gray-700 leading-6 lg:leading-8 mt-4 text-sm sm:text-base'>I design intuitive, visually engaging interfaces that turn complex problems into seamless user experiences.</p>
        <div className="flex mt-5 items-center justify-center lg:justify-start gap-6">
            <a href="https://www.linkedin.com/in/gunal-m-a35458241/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
              <Linkedin size={22} strokeWidth={1.5} />
            </a>
            <a href="https://www.youtube.com/@GunalDesigns" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
              <Youtube size={22} strokeWidth={1.5} />
            </a>
            <a href="https://www.instagram.com/gunal.uiux/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
              <Instagram size={22} strokeWidth={1.5} />
            </a>
            <a href="https://dribbble.com/gunaldesigns01" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
              <Dribbble size={20} strokeWidth={1.5} />
            </a>
        </div>
        <div className="flex flex-col sm:flex-row mt-7 gap-2 justify-center lg:justify-start w-full">
            <a 
              href="/resume.pdf" 
              download="Gunal_M_Resume.pdf"
              className='w-full sm:w-auto px-4 py-2 bg-black text-white rounded-lg text-sm primary-button py-3 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors'
            >
              Download Resume
            </a>
            <Link href="/contact-me" className="w-full sm:w-auto">
              <button className='w-full px-4 py-2 bg-black text-white rounded-lg text-sm py-3 hover:bg-gray-800 transition-colors'>Get in Touch</button>
            </Link>
        </div>
      </SmoothScrollWrapper>
      <SmoothScrollWrapper className="bg-white lg:col-span-4 rounded-[18px] p-3 text-left">
        <div className="w-full h-94 sm:h-72 lg:h-78 bg-gray-100 rounded-[14px] flex items-end justify-center overflow-hidden relative">
            <Image 
              src="/images/gunal-photo.png"
              alt="Gunal M Profile Photo"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className='object-cover object-bottom'
            />
        </div>
        <div className='px-3 py-2 flex flex-col gap-0.5'>
        <h1 className='text-base sm:text-lg font-medium'>Gunal M</h1>
        <p className='text-xs sm:text-sm text-gray-600 mb-0'>UI/UX Designer @ FSS</p>
        </div>
      </SmoothScrollWrapper>
    </SmoothScrollWrapper>
  )
}

export default HomePage