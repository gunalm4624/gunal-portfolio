import { Dribbble, Instagram, Linkedin, Youtube } from 'lucide-react'
import React from 'react'

const HomePage = () => {
  return (
    <div className="grid grid-cols-12 gap-4 mt-18">
      <div className="bg-white col-span-8 rounded-[18px] p-10">
        <h1 className='text-5xl tracking-tighter leading-14 font-medium'>Strategic UX, Beautiful UI, Measurable Impact</h1>
        <p className='text-gray-700 leading-8 mt-4'>I design intuitive, visually engaging interfaces that turn complex problems into seamless user experiences.</p>
        <div className="flex mt-5 items-center gap-6">
            <Linkedin size={22} strokeWidth={1.5} />
            <Youtube size={22} strokeWidth={1.5} />
            <Instagram size={22} strokeWidth={1.5} />
            <Dribbble size={20} strokeWidth={1.5} />
        </div>
        <div className="flex mt-7 gap-2">
            <button className='px-4 py-2 bg-black text-white rounded-lg text-sm primary-button py-3 flex items-center gap-2'>
              Download Resume
            </button>
            <button className='px-4 py-2 bg-black text-white rounded-lg text-sm py-3'>Get in Touch</button>
        </div>
      </div>
      <div className="bg-white col-span-4 rounded-[18px] p-3">
        <div className="w-full h-78 bg-gray-100 rounded-[14px] flex items-end justify-center overflow-hidden">
            <img src="/images/gunal-photo.png" className='w-75' alt="" />
        </div>
        <div className='px-3 py-2 flex flex-col gap-0.5'>
        <h1 className='text-lg font-medium'>Gunal M</h1>
        <p className='text-sm text-gray-600 mb-0'>Product Designer @ FSS</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage