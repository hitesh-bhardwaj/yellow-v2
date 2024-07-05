import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <>
     <section className="pb-[5%]" id='about'>
      <div className='container'>
      <div className="w-[90vw] h-[45vw] rounded-[15px] overflow-hidden relative">
          <Image
            src="/assets/images/service/service-detail/service-detail-hero.png"
            alt="service-detail-hero"
            className='object-cover w-full h-full'
            fill
          />
        </div>
        <div className="w-full flex justify-between mt-[5vw] mb-[12vw]">
          <p className="text-[2vw] font-medium text-[#333333] w-[45%] leading-[1.4]">
            Our approach to branding and design transcends simple aesthetics to
            forge meaningful brands. We believe that a successful brand identity
            requires alignment with core beliefs and an impactful purpose.
          </p>
          <p className="text-[1.4vw] font-medium text-[#111111] w-[35%]">
            Our approach to branding and design transcends simple aesthetics to
            forge meaningful brands. We believe that a successful brand identity
            requires alignment with core beliefs and an impactful purpose.
          </p>
        </div>
        <div className="w-full grid grid-cols-3 gap-x-[5vw] gap-y-[2vw]">
          <div className="col-span-1">
            <h3 className="uppercase text-[2vw] font-display">
              Brand workshop, audit and research
            </h3>
          </div>
          <div className="col-span-1 col-start-2 ">
            <h3 className="uppercase text-[2vw] font-display">
              why work with us
            </h3>
          </div>
          <div className="col-span-1 col-start-3 flex justify-center">
            <h3 className="uppercase text-[2vw] font-display">
              What to expect: Brand strategy consulting
            </h3>
          </div>
          <div className="h-[2px] col-span-3 bg-black"></div>
          <div className="col-span-1">
            <p className="text-[1.2vw] font-medium">
              Relevance. Differentiation. Connections. Conversions. Stay true to
              your brand promise and make a meaningful impact with a clear
              mission and plan of action when you work with our brand strategy
              agency in Dubai.
            </p>
          </div>
          <div className="col-span-1 col-start-2">
            <p className="text-[1.2vw] font-medium">
              Brand strategy development is inevitably complex and complicated.
              The beauty of working with Yellow is you get to move forward with
              brand building without disrupting your operations. More than
              planning, we’ll help you design a clear, compelling vision and a
              plan to make it happen.
            </p>
          </div>
          <div className="col-span-1 col-start-3">
            <p className="text-[1.2vw] font-medium">
              Before we begin defining your brand strategy, it is important for
              us to understand as much about your business, your sector and your
              customers as we can. During our client-agency brand workshop,
              we’ll spend time with you and other key stakeholders in the
              business learning about your aspirations for the brand and your
              market. Together, we’ll begin the process of mapping out the best
              path to elevate your brand to its full potential.
            </p>
          </div>
          <div className="h-[2px] col-span-3 bg-black mt-[4vw]"></div>
        </div>

      </div>
        
      </section>
      
    </>
  )
}

 
