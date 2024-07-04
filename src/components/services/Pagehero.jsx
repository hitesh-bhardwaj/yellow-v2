import React from 'react'

export default function Pagehero() {
  return (
    <>
    <section className="w-screen h-[100vh] px-[5vw] bg-white">
        <div className="w-full h-full flex flex-col justify-center">
          <h1 className="text-[5.7vw] w-fit font-display leading-[1.1] mb-[2vw] uppercase">Services</h1>
          <p className="text-[1.5vw]   w-full font-medium leading-[1.4] flex justify-between">
            <span className="w-[40%] text-[#333333] block">
            We grow amazing companies through exceptional branding and communications. As a brand and digital agency, we often blur the line between business advisor, brand guardian, sounding board, marketing consultant.

            </span>
            <span className="w-[30%] text-[#111111] block">
            Browse through our work to get a better understanding of what we can do for you.
            </span>
          
          </p>
        </div>
      </section>
      
    </>
  )
}


