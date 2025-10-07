"use client";
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
import { sendEmail, ContactFormData } from '@/lib/emailjs'
import { toast } from 'sonner'

import React, { useState } from 'react'

const ContactMe = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    website: '',
    service: '',
    budget: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await sendEmail(formData);
      if (success) {
        toast.success("Message sent successfully!", {
          description: "I'll get back to you soon.",
          duration: 4000,
        });
        setFormData({
          name: '',
          email: '',
          website: '',
          service: '',
          budget: '',
          message: ''
        });
      } else {
        toast.error("Failed to send message", {
          description: "Please try again or contact me directly.",
          duration: 4000,
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Something went wrong", {
        description: "Please try again or contact me directly.",
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='mt-16 lg:mt-18 px-4 lg:px-0'>
        <div className="bg-white rounded-[18px] p-6 lg:p-10">
            <h1 className='text-2xl sm:text-3xl lg:text-4xl tracking-tighter leading-tight lg:leading-14 font-medium'>Let's turn your vision into reality</h1>
            <p className='text-gray-700 leading-6 lg:leading-8 mt-4 tracking-tighter text-sm sm:text-base'>Ready to elevate your website and make an impact? Let's connect and discuss how I can help you design a standout digital presence.</p>

        <form onSubmit={handleSubmit} className='mt-6'>
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className='text-gray-600 text-sm sm:text-base'>Name</label>
                    <Input 
                      id="name"
                      className='mt-2' 
                      placeholder='Enter your name'
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                </div>
                
                <div>
                    <label htmlFor="email" className='text-gray-600 text-sm sm:text-base'>Email</label>
                    <Input 
                      id="email"
                      type="email"
                      className='mt-2' 
                      placeholder='Enter your Email'
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                </div>
                
                <div>
                    <label htmlFor="website" className='text-gray-600 text-sm sm:text-base'>Website</label>
                    <Input 
                      id="website"
                      className='mt-2' 
                      placeholder='Enter your Website URL'
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlFor="service" className='text-gray-600 text-sm sm:text-base'>What service are you interested in?</label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="w-full mt-2">
                            <SelectValue placeholder="Select the service you interested" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                            <SelectItem value="graphics">Graphics Design</SelectItem>
                            <SelectItem value="web-dev">Web Development</SelectItem>
                            <SelectItem value="app-dev">App Development</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                
                <div>
                    <label htmlFor="budget" className='text-gray-600 text-sm sm:text-base'>What is your project budget?</label>
                    <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="w-full mt-2">
                            <SelectValue placeholder="Select your project budget" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="5-99">$5 - $99</SelectItem>
                            <SelectItem value="100-599">$100 - $599</SelectItem>
                            <SelectItem value="600-999">$600 - $999</SelectItem>
                            <SelectItem value="1000-4000">$1000 - $4000</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                
                <div>
                    <label htmlFor="message" className='text-gray-600 text-sm sm:text-base'>How can i help you?</label>
                    <Textarea 
                      id="message"
                      className='mt-2' 
                      placeholder="Enter Project Description in short..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                </div>
            </div>
            
            <div className="flex justify-center sm:justify-end mt-6">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className='px-8 sm:px-12 py-2 bg-black text-white rounded-lg text-sm primary-button py-3 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto'
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  {!isSubmitting && <MoveRight strokeWidth={1.5} />}
                </button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default ContactMe