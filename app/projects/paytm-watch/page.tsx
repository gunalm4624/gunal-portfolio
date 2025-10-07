import React from 'react'
import Image from 'next/image'

const ProjectTemplate = () => {
  return (
        <div className='mt-8 lg:mt-18 bg-white rounded-[18px] p-4 sm:p-6 lg:p-10 mx-4 lg:mx-0'>
            <h1 className='text-2xl sm:text-3xl lg:text-5xl tracking-tighter leading-tight lg:leading-14 font-medium'>Paytm Watch</h1>
            <p className='mt-3 text-gray-600 text-xs sm:text-sm'>Fintech</p>
            <p className='mt-3 leading-6 lg:leading-8 text-sm sm:text-base'>Small shop owners — from grocery stores to salons, bakeries, and kirana shops — constantly juggle managing sales, tracking payments, and running daily operations. Checking UPI payments on a phone multiple times a day is time-consuming and disruptive.</p>
            <div className="project-detail grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 lg:mt-12">
              <div className="w-full">
                <h1 className='font-medium text-sm sm:text-base lg:text-lg'>Type</h1>
                <p className='mt-1 text-xs sm:text-sm tracking-normal'>Conceptual Project</p>
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
                <p className='mt-1 text-xs sm:text-sm tracking-normal'>JUN 2024</p>
              </div>
            </div>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-150 rounded-[18px] overflow-hidden mt-8 lg:mt-12 relative p-4 sm:p-6 lg:p-8">
                <Image 
                  src="/images/paytm-watch-cover.png" 
                  alt="Paytm Watch Cover" 
                  fill
                  priority
                  className="object-contain" 
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
            </div>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Key challenges</h1>
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'>Frequent payments make tracking totals difficult.</li>
              <li className='mb-2 list-disc'>High-value transactions can go unnoticed.</li>
              <li className='mb-2 list-disc'>Pending or delayed settlements create stress.</li>
              <li className='mb-2 list-disc'>Daily sales targets are hard to monitor while attending customers.</li>
              <li className='mb-2 list-disc'>Existing tools are mobile-only, requiring the owner to step away from operations.</li>
            </ul>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Exploration</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>I explored how to bring real-time business insights to the wrist, focusing on speed, glanceability, and simplicity.</p>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-12 lg:mt-12'>Research & Insights</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>5-card swipe-based dashboard, fully UPI-focused:</p>
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'>Dashboard</li>
              <li className='mb-2 list-disc'>Today’s UPI Summary</li>
              <li className='mb-2 list-disc'>Recent Payments</li>
              <li className='mb-2 list-disc'>Big Payment Alerts</li>
              <li className='mb-2 list-disc'>Pending Settlements</li>
            </ul>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-12 lg:mt-12'>Design Decisions:</h1>
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'>Short, bold titles with large amounts for glanceable reading.</li>
              <li className='mb-2 list-disc'>Haptic feedback for new payments or big alerts.</li>
              <li className='mb-2 list-disc'>Personalization via toggle switches for each card.</li>
              <li className='mb-2 list-disc'>Quick setup via scanning the shop’s Paytm QR code.</li>
            </ul>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-12 lg:mt-12'>Ideation</h1>
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'>Small shop owners rely heavily on UPI apps (Paytm, PhonePe, GPay).</li>
              <li className='mb-2 list-disc'>They prefer quick glance info over deep navigation.</li>
              <li className='mb-2 list-disc'>Alerts for high-value payments and pending settlements are critical.</li>
              <li className='mb-2 list-disc'>Quick access to actions like showing QR codes is essential.</li>
            </ul>
        
            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Setup Screen</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>Scan Paytm QR → auto-link shop & UPI.</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/payrm-watch-setup.png" className='h-full w-full object-contain' alt="ResumeX Login" />
                </div>
                
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-12'>Auto-sync shop name, UPI ID, and payment details.</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/payrm-watch-success.png" className='h-full w-full object-contain' alt="ResumeX Login" />
                </div>

            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Personalization Screen</h1>
            <p className='leading-6 lg:leading-8 text-sm mt-2 sm:text-base'>Choose which of the 6 cards to display.</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/payrm-watch-personalisation.png" className='h-full w-full object-contain' alt="ResumeX Dashboard" />
            </div>

            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Real-Time Setup Status</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>Keeps shop owners informed during the initial setup.</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/payrm-watch-status.png" className='h-full w-full object-contain' alt="ResumeX Resume Builder" />
            </div>

            
            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Swipeable Dashboard</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>Instant glanceable insight into all key metrics</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/payrm-watch-dashboard.png" className='h-full w-full object-contain' alt="ResumeX Resume Builder" />
            </div>

            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Today’s UPI Summary</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>Total sales & transaction count for each days.</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/payrm-watch-today-payment.png" className='h-full w-full object-contain' alt="ResumeX Resume Builder" />
            </div>

            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Recent Payments</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>Last few transactions with sender + amount + time</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/paytm-watch-recent-payment.png" className='h-full w-full object-contain' alt="ResumeX Resume Builder" />
            </div>

            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Big Payment Alerts</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>High-value payments highlighted</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/paytm-watch-big-payment.png" className='h-full w-full object-contain' alt="ResumeX Resume Builder" />
            </div>

            <h1 className='text-lg sm:text-xl lg:text-2xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Pending Settlements</h1>
            <p className='leading-6 lg:leading-8 text-sm sm:text-base mt-2'>Track ongoing or delayed UPI transfers with transfer details</p>
            <div className="project-images bg-gray-100 w-full h-64 sm:h-80 lg:h-180 rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img src="/images/paytm-watch-pending-payment.png" className='h-full w-full object-contain' alt="ResumeX Resume Builder" />
            </div>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>From Screens to Experience</h1>
            <p className='mt-2 leading-6 lg:leading-8 text-sm sm:text-base'>Explore the smartwatch app in action — experience instant payment alerts and real-time business insights at a glance.</p>
            <div className="project-images bg-gray-100 w-full h-[90vh] sm:h-[500px] lg:h-[600px] rounded-[18px] overflow-hidden mt-8 lg:mt-12 flex items-center justify-center p-2 sm:p-4 lg:p-6">
              <iframe
                width="100%"
                height="100%"
                src="https://embed.figma.com/proto/lZucvRLkuKY9g82aMDY4Xn/UPI-Watch?page-id=0%3A1&node-id=2-61&p=f&viewport=206%2C311%2C0.33&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2&embed-host=share"
                // allowFullScreen
                title="Paytm Watch Prototype"
              ></iframe>
            </div>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Impact</h1>
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'>Shop owners can track UPI payments instantly without checking their phone.</li>
              <li className='mb-2 list-disc'>Big payments are never missed, boosting confidence and cash flow awareness.</li>
              <li className='mb-2 list-disc'>Daily target visualization motivates owners to hit sales goals.</li>
              <li className='mb-2 list-disc'>Quick actions streamline routine operations (show QR, reorder stock).</li>
              <li className='mb-2 list-disc'>App is lightweight, glanceable, and fully personalized, reducing cognitive load during busy shop hours.</li>
            </ul>

            <h1 className='text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-tight lg:leading-14 font-medium mt-8 lg:mt-12'>Key Metrics / Success Indicators</h1>
            <ul className='mt-4 leading-6 lg:leading-8 list-inside text-sm sm:text-base'>
              <li className='mb-2 list-disc'><span className='font-semibold'>Fewer Phone Checks:</span> Could reduce shop interruptions by up to 80%.</li>
              <li className='mb-2 list-disc'><span className='font-semibold'>Big Payment Awareness:</span> Expected to improve visibility of high-value transactions significantly.</li>
              <li className='mb-2 list-disc'><span className='font-semibold'>Positive Adoption:</span> Anticipated strong uptake and appreciation from small shop owners for glanceable insights.</li>
            </ul>

            <h1 className='text-2xl sm:text-3xl lg:text-4xl tracking-tighter leading-tight lg:leading-14 font-normal mt-8 lg:mt-12 text-center'>
              Thank you for exploring <span className='font-semibold'>Paytm Watch.</span>
            </h1>
            <p className='leading-6 lg:leading-8 text-center max-w-xl mx-auto mt-4 mb-8 lg:mb-16 text-sm sm:text-base'>
              This project was an exciting opportunity to design a glanceable, user-focused smartwatch experience that helps small shop owners track UPI payments instantly and manage their daily operations smarter.
            </p>

        </div>
  )
}

export default ProjectTemplate