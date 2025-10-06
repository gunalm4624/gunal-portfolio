import React from 'react'

const ProjectTemplate = () => {
  return (
        <div className='mt-18 bg-white col-span-8 rounded-[18px] p-10'>
            <h1 className='text-5xl tracking-tighter leading-14 font-medium'>Axis Bank - UPI SDK</h1>
            <p className='mt-3 text-gray-600 text-sm'>Fintech</p>
            <p className='mt-3 leading-8'>The goal of this redesign was to modernize the Axis Bank UPI app experience by eliminating clutter, reducing friction, and improving accessibility. From a user perspective, the objective was to create a fast, intuitive, and trustworthy flow for onboarding and transactions. From a business perspective, the objective was to attract more customers to the app and create a seamless platform that encourages engagement with Axis Bank’s lending and financial products.</p>
            <div className="project-detail grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="w-full">
                <h1 className='font-medium text-lg'>Client</h1>
                <p className='mt-1 text-sm tracking-normal'>Axis Bank</p>
              </div>
              <div className="w-full">
                <h1 className='font-medium text-lg'>Industries</h1>
                <p className='mt-1 text-sm tracking-normal'>Fintech</p>
              </div>
              <div className="w-full">
                <h1 className='font-medium text-lg'>Services</h1>
                <p className='mt-1 text-sm tracking-normal'>UI/UX Design</p>
              </div>
              <div className="w-full">
                <h1 className='font-medium text-lg'>Release Date</h1>
                <p className='mt-1 text-sm tracking-normal'>January 2025</p>
              </div>
            </div>
            <div className="project-images bg-gray-100 w-full h-150 rounded-[18px] overflow-hidden mt-12 flex items-center justify-center">
                <img src="/images/axis-thumbnail.png" className='h-full w-full' alt="" />
            </div>

            <h1 className='text-3xl tracking-tighter leading-14 font-medium mt-12'>Main Goal</h1>
            <p className='mt-2 leading-8'>To save job seekers time by streamlining the process of customizing resumes.</p>
            <p className='mt-4 leading-8'>Job applicants often spend hours rewriting resumes to match job descriptions. ResumeX solves this by:</p>
            <ul className='mt-4 leading-8 list-inside'>
              <li className='mb-2 list-disc'>Providing an intuitive, easy-to-use interface</li>
              <li className='mb-2 list-disc'>Leveraging AI-powered suggestions to rewrite and optimize content</li>
              <li className='mb-2 list-disc'>Allowing users to create, edit, and save multiple tailored resumes</li>
            </ul>

            <h1 className='text-3xl tracking-tighter leading-14 font-medium mt-12'>Challenges Addressed</h1>
            <ul className='mt-4 leading-8 list-inside'>
              <li className='mb-2 list-disc'>Long, repetitive process of customizing resumes</li>
              <li className='mb-2 list-disc'>Difficulty matching resumes to specific job descriptions</li>
              <li className='mb-2 list-disc'>Generic, unattractive AI-generated tools that fail to inspire trust</li>
            </ul>

            <h1 className='text-3xl tracking-tighter leading-14 font-medium mt-16'>Design Approach</h1>
            <ul className='mt-4 leading-8 list-inside'>
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
        
            <h1 className='text-2xl tracking-tighter leading-14 font-medium mt-12'>Clean & Fast Onboarding</h1>
            <p className='leading-8'>Simple, modern login interface that ensures quick and intuitive access to ResumeX. Consistent branding builds trust and clarity for users.</p>
            <div className="project-images bg-gray-100 w-full h-180 rounded-[18px] overflow-hidden mt-12 flex items-center justify-center">
                    <img src="/images/resumeX-login.png" className='w-220' alt="" />
                </div>

            <h1 className='text-2xl tracking-tighter leading-14 font-medium mt-12'>Modern Light-Ray Workspace</h1>
            <p className='leading-8'>A fresh, motivating dashboard giving users immediate access to resumes and actions. Designed for efficiency and visual clarity.</p>
            <div className="project-images bg-gray-100 w-full h-180 rounded-[18px] overflow-hidden mt-12 flex items-center justify-center">
                    <img src="/images/resumeX-dashboard.png" className='w-220' alt="" />
            </div>

            <h1 className='text-2xl tracking-tighter leading-14 font-medium mt-12'>Step-by-Step Resume Builder</h1>
            <p className='leading-8'>Guided interface for quickly creating new resumes. Clear inputs and layout reduce friction, helping users focus on content, not formatting.</p>
            <div className="project-images bg-gray-100 w-full h-180 rounded-[18px] overflow-hidden mt-12 flex items-center justify-center">
                    <img src="/images/resumeX-resume-builder.png" className='w-220' alt="" />
            </div>

            <h1 className='text-2xl tracking-tighter leading-14 font-medium mt-12'>Rewrite Resume (AI-powered)</h1>
            <p className='leading-8'>AI-powered rewriting interface to customize resumes for specific job descriptions. Streamlines the process while keeping the experience user-friendly.</p>
            <div className="project-images bg-gray-100 w-full h-180 rounded-[18px] overflow-hidden mt-12 flex items-center justify-center">
                    <img src="/images/resumeX-resume-rewritter.png" className='w-220' alt="" />
            </div>

            <h1 className='text-2xl tracking-tighter leading-14 font-medium mt-12'>Resume Optimization & ATS Check</h1>
            <p className='leading-8'>Evaluate resumes for ATS compatibility and receive actionable suggestions. Helps users improve visibility and chances of selection.</p>
            <div className="project-images bg-gray-100 w-full h-180 rounded-[18px] overflow-hidden mt-12 flex items-center justify-center">
                    <img src="/images/resumeX-resume-ats.png" className='w-220' alt="" />
            </div>

            <h1 className='text-2xl tracking-tighter leading-14 font-medium mt-12'>Organized Resume Management</h1>
            <p className='leading-8'>Store and manage multiple tailored resumes efficiently. Clear layout and quick access allow users to reuse and update resumes easily.</p>
            <div className="project-images bg-gray-100 w-full h-180 rounded-[18px] overflow-hidden mt-12 flex items-center justify-center">
                    <img src="/images/resumeX-resume-saved.png" className='w-220' alt="" />
            </div>

            <h1 className='text-4xl tracking-tighter leading-14 font-normal mt-12 text-center'>Thank you for taking the time to explore <span className='font-semibold'>ResumeX.</span></h1>
            <p className='leading-8 text-center max-w-xl mx-auto mt-4 mb-16'>This project was a great opportunity to design a user-focused, efficient, and modern UI that helps job seekers save time and apply smarter.</p>
        </div>
  )
}

export default ProjectTemplate