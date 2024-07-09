import React from 'react'

export default function Pagehero() {
  return (
    <>
    <section className="w-screen h-[100vh] bg-white" id='hero'>
        <div className="h-full flex flex-col justify-center container">
          <h1 className="text-[5.7vw] w-fit font-display leading-[1.1] mb-[2vw] uppercase heading-anim">Services</h1>
          <p className="text-[1.5vw]   w-full font-medium leading-[1.4] flex justify-between">
            <span className="w-[40%] text-[#333333] block para-anim">
            We grow amazing companies through exceptional branding and communications. As a brand and digital agency, we often blur the line between business advisor, brand guardian, sounding board, marketing consultant.

            </span>
            <span className="w-[30%] text-[#111111] block para-anim">
            Browse through our work to get a better understanding of what we can do for you.
            </span>
          
          </p>
        </div>
      </section>
      
    </>
  )
}


