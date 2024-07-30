import React from 'react'
import Section from '../Section'

export default function Overview({details}) {
  return (
    <>
      <Section className='bg-black' id='overview'>
          <div className='container bg-white py-[7%] flex justify-between mobile:flex-col mobile:gap-[5vw] mobile:py-[12%]'>
              <h2 data-title-anim className='text-[5.7vw] font-display w-[50%] mobile:text-[10vw] leading-[1]'>
                  Overview
              </h2>
              <div 
                className='w-[45%] space-y-[1vw] tablet:space-y-[2vw] mobile:space-y-[3vw] text-[1.2vw] font-medium mobile:w-full mobile:text-[4.5vw] tablet:text-[2vw] tablet:w-[60%]'
                dangerouslySetInnerHTML={{
                  __html: details
                }}
              />
          </div>
      </Section>
    </>
  )
}


