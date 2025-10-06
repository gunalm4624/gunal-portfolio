import React from 'react'

const CTASection = () => {
  return (
    <div className="grid grid-cols-12 gap-4 mt-18 bg-white px-10 rounded-[18px]">
        <div className="col-span-8 py-10">
            <h1 className='text-5xl tracking-tighter leading-14 font-medium'>Let's Collaborate <br /> Together</h1>
            <p className='text-gray-700 tracking-tighter mt-4'>Let’s turn your ideas into stunning digital experiences with creativity and precision.</p>
            <div className="flex mt-7 gap-2">
                <button className='px-8 py-2 bg-black text-white rounded-lg text-sm primary-button py-3 flex items-center gap-2'>
                Get In Touch
                </button>
            </div>
        </div>
        <div className="col-span-4 p-0">
            <img src="/images/gunal-photo.png" className='w-80' alt="" />
        </div>
    </div>
  )
}

export default CTASection