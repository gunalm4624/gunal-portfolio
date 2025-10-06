import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div className='mt-24'>
        <h1 className='text-4xl tracking-tighter leading-14 font-medium'>Explore my latest Projects</h1>
        <p className='mt-2'>These projects showcase my commitment to crafting unique, high-performance digital experiences tailored to every need.</p>
        <div className="grid grid-cols-2 gap-6 mt-12">
        <Link href="/projects/Axis-Bank">
            <div className="bg-white rounded-[18px] p-2">
                <div className="w-full h-85 bg-gray-100 rounded-[18px] flex items-end justify-center overflow-hidden">
                    <img src="/images/axis-thumbnail.png" className='h-full w-full' alt="" />
                </div>
                <div className='px-3 py-2 flex flex-col gap-0.5'>
                <h1 className='text-lg font-medium'>Axis Bank - UPI SDK</h1>
                <p className='text-sm text-gray-600 mb-0'>JAN - 2025</p>
                </div>
            </div>
            </Link>
            <Link href="/projects/ResumeX">
            <div className="bg-white rounded-[18px] p-2">
                <div className="w-full h-85 bg-gray-100 rounded-[18px] flex items-center justify-center overflow-hidden">
                    <img src="/images/resumeX-cover.png" className='w-full' alt="" />
                </div>
                <div className='px-3 py-2 flex flex-col gap-0.5'>
                <h1 className='text-lg font-medium'>ResumeX - AI Powered Resume Rewritter</h1>
                <p className='text-sm text-gray-600 mb-0'>OCT - 2025</p>
                </div>
            </div>
            </Link>
            <div className="bg-white rounded-[18px] p-2">
                <div className="w-full h-85 bg-gray-100 rounded-[18px] flex items-end justify-center overflow-hidden">
                    <img src="/images/project2.png" className='w-full' alt="" />
                </div>
                <div className='px-3 py-2 flex flex-col gap-0.5'>
                <h1 className='text-lg font-medium'>Project Title</h1>
                <p className='text-sm text-gray-600 mb-0'>Short project description goes here.</p>
                </div>
            </div>
            <div className="bg-white rounded-[18px] p-2">
                <div className="w-full h-85 bg-gray-100 rounded-[18px] flex items-end justify-center overflow-hidden">
                    <img src="/images/project2.png" className='w-full' alt="" />
                </div>
                <div className='px-3 py-2 flex flex-col gap-0.5'>
                <h1 className='text-lg font-medium'>Project Title</h1>
                <p className='text-sm text-gray-600 mb-0'>Short project description goes here.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects