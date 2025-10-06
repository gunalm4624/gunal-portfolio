import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center'>
        <div className='flex items-center gap-3'>
            <div className="gunalm-photo w-12 h-12 rounded-full overflow-hidden">
                <img src="/images/my-photo.png" alt="" />
            </div>
            <div className='gap-0.5 flex flex-col'>
                <h1 className='text-base font-medium'>Gunal M</h1>
                <p className='text-xs text-gray-600'>UI/UX Designer</p>
            </div>
        </div>
        <div className='flex items-center gap-8'>
            <a href="#" className='text-base'>Home</a>
            <a href="#" className='text-base'>Projects</a>
            <a href="#" className='text-base'>Wall of Works</a>
        </div>
        <div className='flex items-center gap-2'>
                        <Link href="/contact-me">
                            <button className='px-4 py-2 bg-black text-white rounded-lg text-sm py-3'>Get in Touch</button>
                        </Link>
            <button className='px-4 py-2 bg-black text-white rounded-lg text-sm primary-button py-3'>Download Resume</button>
        </div>
    </div>
  )
}

export default Navbar