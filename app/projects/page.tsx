import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import SmoothScrollWrapper from '@/components/ui/smooth-scroll-wrapper'

const Projects = () => {
  return (
    <SmoothScrollWrapper className='mt-16 lg:mt-24 px-4 lg:px-0'>
        <SmoothScrollWrapper className="text-center lg:text-left">
          <h1 className='text-2xl sm:text-3xl lg:text-4xl tracking-tighter leading-tight lg:leading-14 font-medium'>Explore my latest Projects</h1>
          <p className='mt-2 text-sm sm:text-base text-gray-700 leading-6 lg:leading-8'>These projects showcase my commitment to crafting unique, high-performance digital experiences tailored to every need.</p>
        </SmoothScrollWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-12">
        <Link href="/projects/ResumeX">
            <div className="bg-white rounded-[18px] p-2 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-64 sm:h-72 lg:h-85 bg-gray-100 rounded-[12px] overflow-hidden relative p-4 sm:p-6">
                    <Image 
                      src="/images/resumeX-cover.png" 
                      alt="ResumeX AI Resume Rewriter" 
                      fill
                      className="object-contain" 
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
                <div className='px-3 py-2 flex flex-col gap-0.5'>
                <h1 className='text-base sm:text-lg font-medium'>ResumeX - AI Powered Resume Rewritter</h1>
                <p className='text-xs sm:text-sm text-gray-600 mb-0'>OCT - 2025</p>
                </div>
            </div>
            </Link>
            <Link href="/projects/Axis-Bank">
            <div className="bg-white rounded-[18px] p-2 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-64 sm:h-72 lg:h-85 bg-gray-100 rounded-[12px] overflow-hidden relative p-4 sm:p-6">
                    <Image 
                      src="/images/axis-thumbnail.png" 
                      alt="Axis Bank UPI SDK" 
                      fill
                      className="object-contain" 
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
                <div className='px-3 py-2 flex flex-col gap-0.5'>
                <h1 className='text-base sm:text-lg font-medium'>Axis Bank - UPI SDK</h1>
                <p className='text-xs sm:text-sm text-gray-600 mb-0'>JAN - 2025</p>
                </div>
            </div>
            </Link>
            <Link href="/projects/paytm-watch">
            <div className="bg-white rounded-[18px] p-2 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-64 sm:h-72 lg:h-85 bg-gray-100 rounded-[12px] overflow-hidden relative flex items-center justify-center">
                    <Image 
                        src="/images/payrm-watch-today-payment.png" 
                        alt="Paytm Watch UI" 
                        className="object-contain m-auto" 
                        width={190}
                        height={100}
                    />
                </div>
                <div className='px-3 py-2 flex flex-col gap-0.5'>
                <h1 className='text-base sm:text-lg font-medium'>Paytm - Watch UI</h1>
                <p className='text-xs sm:text-sm text-gray-600 mb-0'>JUN - 2024</p>
                </div>
            </div>
            </Link>
            <Link href='/projects/sbi-portal'>
            <div className="bg-white rounded-[18px] p-2 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-64 sm:h-72 lg:h-85 bg-gray-100 rounded-[12px] overflow-hidden relative p-4 sm:p-6">
                    <Image 
                      src="/images/sbi-qc-cover.png" 
                      alt="SBI QC Portal" 
                      fill
                      className="object-contain" 
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
                <div className='px-3 py-2 flex flex-col gap-0.5'>
                <h1 className='text-base sm:text-lg font-medium'>SBI - Merchant Verification Portal</h1>
                <p className='text-xs sm:text-sm text-gray-600 mb-0'>AUG - 2023</p>
                </div>
            </div>
            </Link>
        </div>
    </SmoothScrollWrapper>
  )
}

export default Projects