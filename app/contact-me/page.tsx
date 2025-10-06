import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { MoveRight } from 'lucide-react'

import React from 'react'

const ContactMe = () => {
  return (
    <div className='mt-18 bg-white col-span-8 rounded-[18px] p-10'>
        <h1 className='text-5xl tracking-tighter leading-14 font-medium'>Let’s turn your vision into reality</h1>
        <p className='text-gray-700 leading-8 mt-4 tracking-tighter'>Ready to elevate your website and make an impact? Let’s connect and discuss how I can help you design a standout digital presence.</p>

        <form action="" className='mt-4'>
            <label htmlFor="" className='text-gray-600'>Name</label>
            <Input className='mt-3 mb-4' placeholder='Enter your name'/>
            <label htmlFor="" className='text-gray-600'>Email</label>
            <Input className='mt-3 mb-4' placeholder='Enter your Email'/>
            <label htmlFor="" className='text-gray-600'>Website</label>
            <Input className='mt-3 mb-4' placeholder='Enter your Website URL'/>
            <label htmlFor="" className='text-gray-600'>What service are you interested in?</label>
            <Select>
                <SelectTrigger className="w-full mt-3 mb-4">
                    <SelectValue placeholder="Select the service you interested" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
            <label htmlFor="" className='text-gray-600'>What is your project budget?</label>
            <Select>
                <SelectTrigger className="w-full mt-3 mb-4">
                    <SelectValue placeholder="Select your project budget" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
            <label htmlFor="" className='text-gray-600'>How can i help you?</label>
            <Textarea className='mt-3 mb-4' placeholder="Enter Project Description in short..." />
            <div className="flex justify-end mt-6">
                <button className='px-12 py-2 bg-black text-white rounded-lg text-sm primary-button py-3 flex items-center gap-2'>
              Send Message <MoveRight strokeWidth={1.5} />
            </button>
            </div>
        </form>
    </div>
  )
}

export default ContactMe