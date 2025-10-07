import React from 'react'

const CTASection = () => {
  return (
    <div className="mt-16 lg:mt-18 px-4 lg:px-0">
        <div className="bg-white rounded-[18px] p-6 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                <div className="lg:col-span-8 text-center lg:text-left">
                    <h1 className='text-2xl sm:text-3xl lg:text-5xl tracking-tighter leading-tight lg:leading-14 font-medium'>Let's Collaborate Together</h1>
                    <p className='text-gray-700 tracking-tighter mt-4 text-sm sm:text-base leading-6 lg:leading-8'>Let's turn your ideas into stunning digital experiences with creativity and precision.</p>
                    <div className="flex mt-7 gap-2 justify-center lg:justify-start">
                        <a href="/contact-me" className='px-6 sm:px-8 py-2 bg-black text-white rounded-lg text-sm py-3 flex items-center gap-2'>
                            Get In Touch
                        </a>
                    </div>
                </div>
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                    <div className="w-full max-w-sm lg:max-w-none h-94 sm:h-72 lg:h-80 bg-gray-100 rounded-[14px] flex items-end justify-center overflow-hidden">
                        <img src="/images/gunal-photo.png" className='w-100 sm:w-70 lg:w-80' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTASection