import React from 'react'
import Image from 'next/image'

export default function Pagehero() {
  return (
    <>
    <section id='hero'>
        <div className='w-[100vw] h-[80vh] relative'>
            <Image src="/assets/images/career/career-detail-hero.png" alt='career-detail-hero' fill className='object-cover h-full w-full'/>
            <div className='container absolute top-[50%] translate-y-[-50%] z-[2]'>
              <div className='text-white'>
                <h1 className='text-[5.7vw] uppercase font-display mb-[1vw]'>
                Account Manager
                </h1>
                <p className='text-[1.4vw] mb-[3vw]'>
                Are you passionate about Account Manager and eager to drive digital excellence?
                </p>
                <div className='flex'>
                  <div className='flex gap-[0.5vw] pr-[1.5vw] border-r-[1px] border-white'>
                    <div className='w-[2.5vw] h-[2.5vw] relative'>
                      <Image src="/assets/images/career/icon.png" alt='icon-1' fill/>

                    </div>
                    <p className='text-[1.4vw] font-medium leading-[1.8]'>2-5 years experience</p>
                  </div>
                  <div className='flex gap-[0.5vw] px-[1.5vw] border-r-[1px] border-white'>
                    <div className='w-[2.5vw] h-[2.5vw] relative'>
                      <Image src="/assets/images/career/icon2.png" alt='icon-2' fill/>

                    </div>
                    <p className='text-[1.4vw] font-medium leading-[1.8]'>$ 70k - S 100k / annum</p>
                  </div>
                  <div className='flex gap-[0.5vw] px-[1.5vw] border-white'>
                    <div className='w-[2.5vw] h-[2.5vw] relative'>
                      <Image src="/assets/images/career/icon1.png" alt='icon-3' fill/>

                    </div>
                    <p className='text-[1.4vw] font-medium leading-[1.8]'>Benefits</p>
                  </div>
                </div>

              </div>

            </div>
            <div className='w-full h-full bg-black absolute z-[1] opacity-55'>

            </div>
            


        </div>

    </section>
      
    </>
  )
}


