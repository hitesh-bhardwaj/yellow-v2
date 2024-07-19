import React from 'react'
import Image from 'next/image'

export default function Pagehero() {
  return (
    <>
    <section id='hero' className='dark'>
        <div className='w-[100vw] h-[80vh] relative tablet:h-[40vh]'>
            <Image src="/assets/images/career/career-detail-hero.png" alt='career-detail-hero' fill className='object-cover h-full w-full mobile:object-cover'/>
            <div className='container absolute top-[50%] translate-y-[-50%] z-[2] mobile:top-[70%] tablet:top-[70%]'>
              <div className='text-white'>
                <h1 data-title-anim className='text-[5.7vw] uppercase font-display mb-[1vw] mobile:text-[10vw] mobile:leading-[1.3] mobile:mb-[7vw] tablet:text-[6vw]'>
                Account Manager
                </h1>
                <p data-para-anim className='text-[1.4vw] mb-[3vw] mobile:hidden mobile:mb-[5vw] tablet:text-[2.2vw] hidden tablet:block  '>
                Are you passionate about Account Manager and eager to drive digital excellence?
                </p>
                <div className='flex mobile:flex-col mobile:gap-[7vw] '>
                  <div className='flex gap-[0.5vw] pr-[2vw] border-r-[1px] border-white mobile:border-r-0 mobile:gap-[3vw]'>
                    <div className='w-[2.5vw] h-[2.5vw] relative mobile:w-[10vw] mobile:h-[10vw] tablet:w-[4vw] tablet:h-[4vw]'>
                      <Image src="/assets/images/career/icon.png" alt='icon-1' fill/>

                    </div>
                    <p data-para-anim className='text-[1.4vw] font-medium leading-[1.8] mobile:text-[5vw] tablet:text-[2vw] '>2-5 years experience</p>
                  </div>
                  <div className='flex gap-[0.5vw] px-[2vw] border-r-[1px] border-white mobile:border-r-0 mobile:gap-[3vw]'>
                    <div className='w-[2.5vw] h-[2.5vw] relative mobile:w-[10vw] mobile:h-[10vw] tablet:w-[4vw] tablet:h-[4vw]'>
                      <Image src="/assets/images/career/icon2.png" alt='icon-2' fill/>

                    </div>
                    <p data-para-anim className='text-[1.4vw] font-medium leading-[1.8] mobile:text-[5vw] tablet:text-[2vw]'>$ 70k - S 100k / annum</p>
                  </div>
                  <div className='flex gap-[0.5vw] px-[1.5vw] border-white mobile:gap-[3vw]'>
                    <div className='w-[2.5vw] h-[2.5vw] relative mobile:w-[10vw] mobile:h-[10vw] tablet:w-[4vw] tablet:h-[4vw]'>
                      <Image src="/assets/images/career/icon1.png" alt='icon-3' fill priority={true}/>

                    </div>
                    <p data-para-anim className='text-[1.4vw] font-medium leading-[1.8] mobile:text-[5vw] tablet:text-[2vw]'>Benefits</p>
                  </div>
                </div>

              </div>

            </div>
            <div className='w-full h-full bg-black absolute z-[1] opacity-55 mobile:opacity-35'>

            </div>
            


        </div>

    </section>
      
    </>
  )
}


