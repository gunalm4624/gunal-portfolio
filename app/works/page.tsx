import React from 'react'

const Works = () => {
  return (
    <div className='mt-24'>
        <h1 className='text-4xl tracking-tighter leading-14 font-medium'>Wall of Exploration</h1>
        <p className='mt-2'>A collection of experiments and ideas showcasing my design process and creativity.</p>
        <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-[18px] p-2">
                <div className="w-full h-80 bg-gray-100 rounded-[18px] flex items-end justify-center overflow-hidden">
                    <img src="/images/project1.png" className='w-full' alt="" />
                </div>
                <div className='px-3 py-2 flex flex-col gap-0.5'>
                <h1 className='text-lg font-medium'>Project Title</h1>
                <p className='text-sm text-gray-600 mb-0'>Short project description goes here.</p>
                </div>
            </div>
            <div className="bg-white rounded-[18px] p-2">
                <div className="w-full h-80 bg-gray-100 rounded-[18px] flex items-end justify-center overflow-hidden">
                    <img src="/images/project2.png" className='w-full' alt="" />
                </div>
                <div className='px-3 py-2 flex flex-col gap-0.5'>
                <h1 className='text-lg font-medium'>Project Title</h1>
                <p className='text-sm text-gray-600 mb-0'>Short project description goes here.</p>
                </div>
            </div>
            <div className="bg-white rounded-[18px] p-2">
                <div className="w-full h-80 bg-gray-100 rounded-[18px] flex items-end justify-center overflow-hidden">
                    <img src="/images/project2.png" className='w-full' alt="" />
                </div>
                <div className='px-3 py-2 flex flex-col gap-0.5'>
                <h1 className='text-lg font-medium'>Project Title</h1>
                <p className='text-sm text-gray-600 mb-0'>Short project description goes here.</p>
                </div>
            </div>
            <div className="bg-white rounded-[18px] p-2">
                <div className="w-full h-80 bg-gray-100 rounded-[18px] flex items-end justify-center overflow-hidden">
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

export default Works