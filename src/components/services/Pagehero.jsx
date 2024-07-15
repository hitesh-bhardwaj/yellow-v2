import React from 'react'

export default function Pagehero() {
  return (
    <>
    <section className="w-screen h-[100vh] mobile:h-[70vh] bg-white" id='hero'>
        <div className="h-full flex flex-col justify-center container">
          <h1 data-title-anim className="text-[5.7vw] w-fit font-display leading-[1.1] mb-[2vw] uppercase mobile:text-[12vw]">Services</h1>
          <p  className="text-[1.5vw]   w-full font-medium leading-[1.4] flex justify-between mobile:flex-col mobile:text-[4.5vw]">
            <span data-para-anim className="w-[40%] text-[#333333] block mobile:w-full">
            We grow amazing companies through exceptional branding and communications. As a brand and digital agency, we often blur the line between business advisor, brand guardian, sounding board, marketing consultant.

            </span>
            <span data-para-anim className="w-[30%] text-[#111111] block mobile:w-full ">
            Browse through our work to get a better understanding of what we can do for you.
            </span>
          
          </p>
          <div className='w-full h-[1px] bg-black mt-[15vw]'></div>
        </div>
      </section>
      
    </>
  )
}


