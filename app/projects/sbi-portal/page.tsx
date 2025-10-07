import React from 'react'

const ProjectTemplate = () => {
  return (
        <div className='mt-8 lg:mt-18 bg-white rounded-[18px] p-4 sm:p-6 lg:p-10 mx-4 lg:mx-0'>
            <h1 className='text-2xl sm:text-3xl lg:text-5xl tracking-tighter leading-tight lg:leading-14 font-medium'>SBI - Merchant Verification Portal</h1>
            <p className='mt-3 text-gray-600 text-xs sm:text-sm'>Fintech - Merchant</p>
            <p className='mt-3 leading-6 lg:leading-8 text-sm sm:text-base'>The existing SBI Merchant Verification Portal was built to onboard merchants through agents or self-registration. However, the experience was cluttered, time-consuming, and error-prone, especially during document verification.</p>
            <div className="project-detail grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 lg:mt-12">
              <div className="w-full">
                <h1 className='font-medium text-sm sm:text-base lg:text-lg'>Type</h1>
                <p className='mt-1 text-xs sm:text-sm tracking-normal'>Portal</p>
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
                <p className='mt-1 text-xs sm:text-sm tracking-normal'>AUG 2023</p>
              </div>
            </div>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-150 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <img src="/images/sbi-qc-cover.png" className=' h-160 object-cover' alt="ResumeX Cover" />
            </div>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Main Goal</h1>
            <p className='mt-2 leading-6 lg:leading-8 text-sm sm:text-base'>To simplify and speed up the merchant verification process by creating a clean, modular, and intelligent interface that empowers approvers to:</p>
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'>Review and verify documents individually without rejecting the entire set.</li>
              <li className='mb-2 list-disc'>View, comment, and act directly within the portal — no downloads needed.</li>
              <li className='mb-2 list-disc'>Reduce verification turnaround time and errors.</li>
              <li className='mb-2 list-disc'>Offer a frictionless onboarding experience for merchants and agents with faster login and clearer guidance.</li>
            </ul>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Key pain points</h1>
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'>The interface was filled with long, dense forms and unclear layouts.</li>
              <li className='mb-2 list-disc'>Approvers had to manually download every document (Aadhaar, PAN, etc.) to review them.</li>
              <li className='mb-2 list-disc'>If one document failed verification, the entire set had to be rejected and re-uploaded — even the correct ones.</li>
              <li className='mb-2 list-disc'>The process created bottlenecks and frustration for both merchants and approvers.</li>
            </ul>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-12 lg:mt-16'>Exploration</h1>
            <p className='mt-2 leading-6 lg:leading-8 text-sm sm:text-base'>To uncover friction points, I analyzed how approvers and agents interacted with the system across daily workflows.</p>
            
            <h1 className='text-xl sm:text-2xl lg:text-1xl tracking-tighter leading-tight lg:leading-14 font-medium mt-12 lg:mt-6'>Insights:</h1>            
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'>The biggest slowdown occurred when approvers had to recheck all documents for a single rejected upload.</li>
              <li className='mb-2 list-disc'>Agents reported confusion due to non-sequential document layouts and missing contextual cues.</li>
              <li className='mb-2 list-disc'>Repeated login interruptions reduced efficiency across high-volume verification cycles.</li>
              <li className='mb-2 list-disc'><span className='font-semibold'>Iterative Refinement</span> – Polished screens for fast and intuitive interactions</li>
            </ul>

            <h1 className='text-xl sm:text-2xl lg:text-1xl tracking-tighter leading-tight lg:leading-14 font-medium mt-12 lg:mt-6'>Design goals:</h1>            
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'>Make verification faster and modular, not all-or-nothing.</li>
              <li className='mb-2 list-disc'>Present document uploads in a clear, visual sequence.</li>
              <li className='mb-2 list-disc'>Enable quick feedback and re-verification at the document level.</li>
              <li className='mb-2 list-disc'>Improve accessibility and reduce visual clutter with a structured layout.</li>
            </ul>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-12 lg:mt-16'>Solution</h1>
            <p className='mt-2 leading-6 lg:leading-8 text-sm sm:text-base'>The redesigned SBI Merchant Verification Portal introduces a streamlined, step-based interface for both merchants and approvers.</p>

        
            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Quick Login with Outlook Integration</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>Added single-click Outlook login for faster access, reducing repetitive credential entry.</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/sbi-qc-login.png" className='h-full w-full object-contain' alt="SBI QC Dashboard" />
            </div>

            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Interactive Dashboard Overview</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>Introduced a comprehensive dashboard to give approvers and managers instant visibility of system activity.</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/sbi-qc-dashboard.png" className='h-full w-full object-contain' alt="SBI QC Dashboard" />
            </div>

            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Stepper-Based Document Review</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>Each document (Aadhaar front, Aadhaar back, PAN front, PAN back) is presented in a step-by-step review flow, allowing approvers to preview, approve, or reject documents individually.</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/sbi-qc-stepper.png" className='h-full w-full object-contain' alt="SBI QC Dashboard" />
            </div>

            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Inline Comments with Prompt Component</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>When rejecting a document, approvers must provide feedback via a Prompt pop-up (e.g., “Image too blurry”).</p>
                        <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/sbi-qc-rejection.png" className='h-full w-full object-contain' alt="SBI QC Dashboard" />
            </div>

            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Left Sidebar Summary Panel</h1>
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'>Displays all merchant and agent details clearly for quick cross-reference.</li>
              <li className='mb-2 list-disc'>Reduces page switching and cognitive load.</li>
            </ul>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/sbi-qc-summary.png" className='h-full w-full object-contain' alt="SBI QC Dashboard" />
            </div>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>From Screens to Experience</h1>
            <p className='mt-2 leading-6 lg:leading-8 text-sm sm:text-base'>Explore the redesigned verification portal in action — experience faster approvals, organized document review, and a smoother merchant onboarding flow.</p>
            <div className="project-images bg-gray-100 w-full h-[90vh] sm:h-[500px] lg:h-[600px] rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-2 sm:p-4 lg:p-6">
              <iframe
                width="100%"
                height="100%"
                src="https://embed.figma.com/proto/incRtTTjbliF6CMLHZ5HhV/SBI-Merchant-Verification?page-id=0%3A1&node-id=0-13670&p=f&viewport=555%2C384%2C0.04&scaling=scale-down&content-scaling=fixed&embed-host=share"
                title="SBI Merchant Verification Portal"
              ></iframe>
            </div>

            <h1 className='text-lg sm:text-xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Impact</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>The redesigned portal transforms a tedious, error-prone workflow into a structured, efficient verification experience.</p>
            
            <h1 className='text-lg sm:text-xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Projected Outcomes:</h1>
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'>50% faster verification time through modular approvals.</li>
              <li className='mb-2 list-disc'>Fewer re-uploads, since only incorrect documents are rejected.</li>
              <li className='mb-2 list-disc'>Clearer communication between approvers and merchants.</li>
              <li className='mb-2 list-disc'>Improved agent productivity with quick login and streamlined navigation.</li>
              <li className='mb-2 list-disc'>Reduced visual fatigue thanks to a decluttered, step-based interface.</li>
            </ul>

            <h1 className='text-lg sm:text-xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>What I Learned 🧠</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>Redesigning a high-volume verification system taught me how micro-interactions and process visibility can transform efficiency for internal teams. I also learned the importance of balancing security, speed, and usability when designing tools for financial institutions.</p>
            
            
            <h1 className='text-2xl sm:text-3xl lg:text-4xl tracking-tighter leading-tight lg:leading-14 font-normal mt-8 lg:mt-12 text-center'>
                Thank you for taking the time to explore <span className='font-semibold'>SBI QC Portal.</span>
                </h1>
                <p className='leading-6 lg:leading-8 text-center max-w-xl mx-auto mt-4 mb-8 lg:mb-16 text-sm sm:text-base'>
                This project was a great opportunity to redesign a complex internal system into a streamlined, efficient, and intuitive experience for approvers and merchants alike.
                </p>

        </div>
  )
}

export default ProjectTemplate