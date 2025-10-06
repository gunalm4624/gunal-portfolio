import React from 'react'

const ProjectTemplate = () => {
  return (
        <div className='mt-8 lg:mt-18 bg-white rounded-[18px] p-4 sm:p-6 lg:p-10 mx-4 lg:mx-0'>
            <h1 className='text-2xl sm:text-3xl lg:text-5xl tracking-tighter leading-tight lg:leading-14 font-medium'>Axis Bank - UPI SDK</h1>
            <p className='mt-3 text-gray-600 text-xs sm:text-sm'>Fintech</p>
            <p className='mt-3 leading-6 lg:leading-8 text-sm sm:text-base'>The goal of this redesign was to modernize the Axis Bank UPI app experience by eliminating clutter, reducing friction, and improving accessibility. From a user perspective, the objective was to create a fast, intuitive, and trustworthy flow for onboarding and transactions. From a business perspective, the objective was to attract more customers to the app and create a seamless platform that encourages engagement with Axis Bank's lending and financial products.</p>
            <div className="project-detail grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 lg:mt-12">
              <div className="w-full">
                <h1 className='font-medium text-sm sm:text-base lg:text-lg'>Feature</h1>
                <p className='mt-1 text-xs sm:text-sm tracking-normal'>UPI SDK</p>
              </div>
              <div className="w-full">
                <h1 className='font-medium text-sm sm:text-base lg:text-lg'>Industries</h1>
                <p className='mt-1 text-xs sm:text-sm tracking-normal'>Fintech</p>
              </div>
              <div className="w-full">
                <h1 className='font-medium text-sm sm:text-base lg:text-lg'>Services</h1>
                <p className='mt-1 text-xs sm:text-sm tracking-normal'>UI/UX Design</p>
              </div>
              <div className="w-full">
                <h1 className='font-medium text-sm sm:text-base lg:text-lg'>Release Date</h1>
                <p className='mt-1 text-xs sm:text-sm tracking-normal'>January 2025</p>
              </div>
            </div>
            <div className="project-images bg-gray-100 w-full h-80 sm:h-80 lg:h-150 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center">
                <img src="/images/axis-thumbnail.png" className='h-full w-full object-contain' alt="Axis Bank UPI SDK" />
            </div>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Exploration</h1>
            <p className='mt-2 leading-6 lg:leading-8 text-sm sm:text-base'>To ground the redesign, I studied user frustrations through Play Store and App Store reviews.
            The main issues surfaced were:</p>
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'>Overwhelming onboarding screens.</li>
              <li className='mb-2 list-disc'>Too many manual inputs (leading to drop-offs).</li>
              <li className='mb-2 list-disc'>Accessibility gaps, especially for older users.</li>
              <li className='mb-2 list-disc'>Transaction flows that felt longer than competitors like GPay or PhonePe.</li>
            </ul>
            <p className='mt-8 lg:mt-12 leading-6 lg:leading-8 text-sm sm:text-base'>I mapped <span className='font-semibold'>key user groups</span>:</p>
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'><span className='font-semibold'>New UPI users</span> unfamiliar with digital payments.</li>
              <li className='mb-2 list-disc'><span className='font-semibold'>Experienced UPI users</span> expecting speed and reliability.</li>
              <li className='mb-2 list-disc'><span className='font-semibold'>Business owners</span> managing multiple transactions daily.</li>
            </ul>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base'>The design focus was set on onboarding and transaction flows—two critical journeys for trust and adoption.</p>


            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-12 lg:mt-16'>In Onboarding, What I Provided Is:</h1>
            <p className='leading-6 lg:leading-8 mt-4 text-sm sm:text-base'>1. Auto-fetching details like mobile number (reducing typing effort).</p>
            <div className="project-images bg-gray-100 w-full h-80 sm:h-80 lg:h-150 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center py-4 lg:py-8">
                <img src="/images/axis-mockup-1.png" className='h-full w-full object-contain' alt="Axis Bank Onboarding Mockup 1" />
            </div>
            <p className='leading-6 lg:leading-8 mt-8 lg:mt-12 text-sm sm:text-base'>2. Fewer steps with contextual guidance.</p>
            <div className="project-images bg-gray-100 w-full h-80 sm:h-80 lg:h-150 rounded-[18px] overflow-hidden mt-8 lg:mt-10 flex items-center justify-center py-4 lg:py-8">
                <img src="/images/axis-mockup-2.png" className='h-full w-full object-contain' alt="Axis Bank Onboarding Mockup 2" />
            </div>
            <p className='leading-6 lg:leading-8 mt-8 lg:mt-12 text-sm sm:text-base'>3. Intuitive microinteractions for progress and confirmations.</p>
            <div className="project-images bg-gray-100 w-full h-80 sm:h-80 lg:h-150 rounded-[18px] overflow-hidden mt-8 lg:mt-10 flex items-center justify-center py-4 lg:py-8">
                <img src="/images/axis-mockup-3.png" className='h-full w-full object-contain' alt="Axis Bank Onboarding Mockup 3" />
            </div>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-12 lg:mt-16'>In Transaction flow, What I Provided Is:</h1>
            <p className='leading-6 lg:leading-8 mt-4 text-sm sm:text-base'>1. Streamlined navigation → reduced clicks.</p>
            <div className="project-images bg-gray-100 w-full h-80 sm:h-80 lg:h-150 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center py-4 lg:py-8">
                <img src="/images/axis-mockup-4.png" className='h-full w-full object-contain' alt="Axis Bank Transaction Mockup 1" />
            </div>

            <p className='leading-6 lg:leading-8 mt-8 lg:mt-10 text-sm sm:text-base'>2. Clear "Send" and "Request" separation.</p>
            <div className="project-images bg-gray-100 w-full h-80 sm:h-80 lg:h-150 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center py-4 lg:py-8">
                <img src="/images/axis-mockup-5.png" className='h-full w-full object-contain' alt="Axis Bank Transaction Mockup 2" />
            </div>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-12 lg:mt-16'>In Dashboard flow, What I Provided Is:</h1>
            <p className='leading-6 lg:leading-8 mt-4 text-sm sm:text-base'>1. Reorganized for intuitive access to frequent actions.</p>
            <p className='leading-6 lg:leading-8 mt-4 text-sm sm:text-base'>2. Quick access shortcuts for repeat payments and QR scanning.</p>
            <div className="project-images bg-gray-100 w-full aspect-square rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center">
                <img src="/images/axis-cover.png" className='h-full w-full object-cover' alt="Axis Bank Dashboard" />
            </div>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Impact</h1>
            <p className='mt-2 leading-6 lg:leading-8 text-sm sm:text-base'>The redesigned app experience delivers:</p>
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
            <li className='mb-2 list-disc'><span className='font-semibold'>Simplified onboarding</span> faster adoption for new users.</li>
              <li className='mb-2 list-disc'><span className='font-semibold'>Reduced transaction steps</span> quicker and more reliable money transfers.</li>
              <li className='mb-2 list-disc'><span className='font-semibold'>Improved accessibility</span> inclusivity for older users and business owners.</li>
              <li className='mb-2 list-disc'><span className='font-semibold'>Modern, clutter-free UI</span> aligned with current design standards and user expectations.</li>
            </ul>
            <p className='mt-2 leading-6 lg:leading-8 text-sm sm:text-base'>From a business perspective, the redesign creates a stronger foundation to attract new customers, opening doors for lending opportunities and cross-selling financial products.</p>


            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Reflection & Next Steps</h1>
            <p className='mt-2 leading-6 lg:leading-8 text-sm sm:text-base'>One challenge was making the dashboard intuitive while keeping it lightweight—balancing simplicity with quick access to multiple services.</p>
            <p className='mt-2 leading-6 lg:leading-8 text-sm sm:text-base'>If given more time, I'd explore adding <span className='font-semibold'>"Hello UPI"</span> — a voice-first interaction feature, to further improve accessibility and hands-free transactions.</p>


            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>From Screens to Experience</h1>
            <p className='mt-2 leading-6 lg:leading-8 text-sm sm:text-base'>Explore the redesigned app in action—experience seamless onboarding and faster payments.</p>
            <div className="project-images bg-gray-100 w-full h-[90vh] sm:h-[500px] lg:h-[600px] rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-2 sm:p-4 lg:p-6">
              <iframe
                width="100%"
                height="100%"
                src="https://embed.figma.com/proto/4j7d2haMeWW5ou6sCULbdJ/Axis-Bank?page-id=0%3A1&node-id=1-198&p=f&viewport=612%2C381%2C0.03&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A194&embed-host=share"
                // allowFullScreen
                title="Axis Bank App Prototype"
              ></iframe>
            </div>
        </div>
  )
}

export default ProjectTemplate