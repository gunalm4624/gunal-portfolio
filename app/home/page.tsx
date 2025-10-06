import { Dribbble, Instagram, Linkedin, Youtube } from 'lucide-react'
import React from 'react'

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-8 lg:mt-18 px-4 lg:px-0">
      <div className="bg-white lg:col-span-8 rounded-[18px] p-6 lg:p-10 text-center lg:text-left">
        <h1 className='text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-tight lg:leading-14 font-medium'>From Concept to Click—Seamless by Design</h1>
        <p className='text-gray-700 leading-6 lg:leading-8 mt-4 text-sm sm:text-base'>I design intuitive, visually engaging interfaces that turn complex problems into seamless user experiences.</p>
        <div className="flex mt-5 items-center justify-center lg:justify-start gap-6">
            <Linkedin size={22} strokeWidth={1.5} />
            <Youtube size={22} strokeWidth={1.5} />
            <Instagram size={22} strokeWidth={1.5} />
            <Dribbble size={20} strokeWidth={1.5} />
        </div>
        <div className="flex flex-col sm:flex-row mt-7 gap-2 justify-center lg:justify-start">
            <button className='px-4 py-2 bg-black text-white rounded-lg text-sm primary-button py-3 flex items-center justify-center gap-2'>
              Download Resume
            </button>
            <button className='px-4 py-2 bg-black text-white rounded-lg text-sm py-3'>Get in Touch</button>
        </div>
      </div>
      <div className="bg-white lg:col-span-4 rounded-[18px] p-3 text-left">
        <div className="w-full h-94 sm:h-72 lg:h-78 bg-gray-100 rounded-[14px] flex items-end justify-center overflow-hidden">
            <img src="/images/gunal-photo.png" className='w-100 sm:w-70 lg:w-75' alt="" />
        </div>
        <div className='px-3 py-2 flex flex-col gap-0.5'>
        <h1 className='text-base sm:text-lg font-medium'>Gunal M</h1>
        <p className='text-xs sm:text-sm text-gray-600 mb-0'>UI/UX Designer @ FSS</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage