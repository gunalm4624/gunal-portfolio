import React from 'react'
import Image from 'next/image'

const ProjectTemplate = () => {
  return (
        <div className='mt-8 lg:mt-18 bg-white rounded-[18px] p-4 sm:p-6 lg:p-10 mx-4 lg:mx-0'>
            <h1 className='text-2xl sm:text-3xl lg:text-5xl tracking-tighter leading-tight lg:leading-14 font-medium'>ResumeX</h1>
            <p className='mt-3 text-gray-600 text-xs sm:text-sm'>SaaS MVP</p>
            <p className='mt-3 leading-6 lg:leading-8 text-sm sm:text-base'>ResumeX is a web-based MVP that helps job seekers create, rewrite, and save resumes quickly, using a clean, modern UI and AI-powered rewriting. Its goal is to reduce the time and effort required to apply for jobs, providing an intuitive and efficient resume-building experience.</p>
            <div className="project-detail grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 lg:mt-12">
              <div className="w-full">
                <h1 className='font-medium text-sm sm:text-base lg:text-lg'>Type</h1>
                <p className='mt-1 text-xs sm:text-sm tracking-normal'>Personal Project</p>
              </div>
              <div className="w-full">
                <h1 className='font-medium text-sm sm:text-base lg:text-lg'>Industries</h1>
                <p className='mt-1 text-xs sm:text-sm tracking-normal'>Education</p>
              </div>
              <div className="w-full">
                <h1 className='font-medium text-sm sm:text-base lg:text-lg'>Services</h1>
                <p className='mt-1 text-xs sm:text-sm tracking-normal'>UI/UX Design</p>
              </div>
              <div className="w-full">
                <h1 className='font-medium text-sm sm:text-base lg:text-lg'>Release Date</h1>
                <p className='mt-1 text-xs sm:text-sm tracking-normal'>October 2025</p>
              </div>
            </div>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-150 rounded-[18px] overflow-hidden mt-8 lg:mt-12 relative p-4 sm:p-6 lg:p-8">
                <Image 
                  src="/images/resumeX-cover.png" 
                  alt="ResumeX Cover" 
                  fill
                  priority
                  className="object-contain" 
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
            </div>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Main Goal</h1>
            <p className='mt-2 leading-6 lg:leading-8 text-sm sm:text-base'>To save job seekers time by streamlining the process of customizing resumes.</p>
            <p className='mt-4 leading-6 lg:leading-8 text-sm sm:text-base'>Job applicants often spend hours rewriting resumes to match job descriptions. ResumeX solves this by:</p>
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'>Providing an intuitive, easy-to-use interface</li>
              <li className='mb-2 list-disc'>Leveraging AI-powered suggestions to rewrite and optimize content</li>
              <li className='mb-2 list-disc'>Allowing users to create, edit, and save multiple tailored resumes</li>
            </ul>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Challenges Addressed</h1>
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'>Long, repetitive process of customizing resumes</li>
              <li className='mb-2 list-disc'>Difficulty matching resumes to specific job descriptions</li>
              <li className='mb-2 list-disc'>Generic, unattractive AI-generated tools that fail to inspire trust</li>
            </ul>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-12 lg:mt-16'>Design Approach</h1>
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'><span className='font-semibold'>Research & Inspiration</span> – Analyzed popular resume tools and identified pain points.</li>
              <li className='mb-2 list-disc'><span className='font-semibold'>Wireframing</span> – Quick layouts for Login, Dashboard, Resume Creation, AI Rewriting, Saved Resumes.</li>
              <li className='mb-2 list-disc'><span className='font-semibold'>UI Design</span> – 
                <ul className='mt-2 ml-6 list-inside'>
                  <li className='list-disc'>Modern, clean dashboard with light-ray elements</li>
                  <li className='list-disc'>Consistent design system for forms, cards, and buttons</li>
                  <li className='list-disc'>Focused on readability, efficiency, and visual trust</li>
                </ul>
              </li>
              <li className='mb-2 list-disc'><span className='font-semibold'>Iterative Refinement</span> – Polished screens for fast and intuitive interactions</li>
            </ul>
        
            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Clean & Fast Onboarding</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>Simple, modern login interface that ensures quick and intuitive access to ResumeX. Consistent branding builds trust and clarity for users.</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/resumeX-login.png" className='h-full w-full object-contain' alt="ResumeX Login" />
                </div>

            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Modern Light-Ray Workspace</h1>
            <p className='leading-6 lg:leading-8 text-sm mt-2 sm:text-base'>A fresh, motivating dashboard giving users immediate access to resumes and actions. Designed for efficiency and visual clarity.</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/resumeX-dashboard.png" className='h-full w-full object-contain' alt="ResumeX Dashboard" />
            </div>

            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Step-by-Step Resume Builder</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>Guided interface for quickly creating new resumes. Clear inputs and layout reduce friction, helping users focus on content, not formatting.</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/resumeX-resume-builder.png" className='h-full w-full object-contain' alt="ResumeX Resume Builder" />
            </div>

            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Rewrite Resume (AI-powered)</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>AI-powered rewriting interface to customize resumes for specific job descriptions. Streamlines the process while keeping the experience user-friendly.</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/resumeX-resume-rewritter.png" className='h-full w-full object-contain' alt="ResumeX AI Rewriter" />
            </div>

            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Resume Optimization & ATS Check</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>Evaluate resumes for ATS compatibility and receive actionable suggestions. Helps users improve visibility and chances of selection.</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/resumeX-resume-ats.png" className='h-full w-full object-contain' alt="ResumeX ATS Check" />
            </div>

            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Organized Resume Management</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>Store and manage multiple tailored resumes efficiently. Clear layout and quick access allow users to reuse and update resumes easily.</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/resumeX-resume-saved.png" className='h-full w-full object-contain' alt="ResumeX Saved Resumes" />
            </div>

            <h1 className='text-2xl sm:text-3xl lg:text-4xl tracking-tighter leading-tight lg:leading-14 font-normal mt-8 lg:mt-12 text-center'>Thank you for taking the time to explore <span className='font-semibold'>ResumeX.</span></h1>
            <p className='leading-6 lg:leading-8 text-center max-w-xl mx-auto mt-4 mb-8 lg:mb-16 text-sm sm:text-base'>This project was a great opportunity to design a user-focused, efficient, and modern UI that helps job seekers save time and apply smarter.</p>
        </div>
  )
}

export default ProjectTemplate