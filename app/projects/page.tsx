import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div className='mt-16 lg:mt-24 px-4 lg:px-0'>
        <div className="text-center lg:text-left">
          <h1 className='text-2xl sm:text-3xl lg:text-4xl tracking-tighter leading-tight lg:leading-14 font-medium'>Explore my latest Projects</h1>
          <p className='mt-2 text-sm sm:text-base text-gray-700 leading-6 lg:leading-8'>These projects showcase my commitment to crafting unique, high-performance digital experiences tailored to every need.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-12">
        <Link href="/projects/Axis-Bank">
            <div className="bg-white rounded-[18px] p-2 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-64 sm:h-72 lg:h-85 bg-gray-100 rounded-[12px] flex items-end justify-center overflow-hidden">
                    <img src="/images/axis-thumbnail.png" className='h-full w-full object-cover' alt="Axis Bank UPI SDK" />
                </div>
                <div className='px-3 py-2 flex flex-col gap-0.5'>
                <h1 className='text-base sm:text-lg font-medium'>Axis Bank - UPI SDK</h1>
                <p className='text-xs sm:text-sm text-gray-600 mb-0'>JAN - 2025</p>
                </div>
            </div>
            </Link>
            <Link href="/projects/ResumeX">
            <div className="bg-white rounded-[18px] p-2 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-64 sm:h-72 lg:h-85 bg-gray-100 rounded-[12px] flex items-center justify-center overflow-hidden">
                    <img src="/images/resumeX-cover.png" className='w-full object-cover' alt="ResumeX AI Resume Rewriter" />
                </div>
                <div className='px-3 py-2 flex flex-col gap-0.5'>
                <h1 className='text-base sm:text-lg font-medium'>ResumeX - AI Powered Resume Rewritter</h1>
                <p className='text-xs sm:text-sm text-gray-600 mb-0'>OCT - 2025</p>
                </div>
            </div>
            </Link>
            <div className="bg-white rounded-[18px] p-2 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-64 sm:h-72 lg:h-85 bg-gray-100 rounded-[12px] flex items-end justify-center overflow-hidden p-5">
                    <img src="/images/paytm-watch-ui.png" className='h-full object-cover' alt="Skill Barter" />
                </div>
                <div className='px-3 py-2 flex flex-col gap-0.5'>
                <h1 className='text-base sm:text-lg font-medium'>Paytm - Watch UI</h1>
                <p className='text-xs sm:text-sm text-gray-600 mb-0'>JUN - 2024</p>
                </div>
            </div>
            <div className="bg-white rounded-[18px] p-2 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-64 sm:h-72 lg:h-85 bg-gray-100 rounded-[12px] flex items-end justify-center overflow-hidden">
                    <img src="/images/project2.png" className='w-full object-cover' alt="Project Placeholder" />
                </div>
                <div className='px-3 py-2 flex flex-col gap-0.5'>
                <h1 className='text-base sm:text-lg font-medium'>Project Title</h1>
                <p className='text-xs sm:text-sm text-gray-600 mb-0'>Short project description goes here.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects