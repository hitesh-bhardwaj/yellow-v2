import React from 'react'
import Image from 'next/image'

export default function Pagehero() {
  return (
    <>
    <section id='hero' className='py-[2%] mobile:py-[7%] tablet:py-[8%]'>
        <div className='container h-full flex items-center mt-[5vw] mobile:h-full tablet:h-full'>
        <div className='mobile:w-full mobile:h-full mobile:flex mobile:flex-col mobile:pt-[120%] mobile:gap-[5vw]'>
            <div className='w-[90vw] h-[45vw] relative rounded-[10px] overflow-hidden mb-[3vw] fadeup mobile:absolute mobile:top-0 mobile:left-0 mobile:w-screen mobile:h-[50vh] mobile:rounded-none tablet:w-[85vw]'>
                <Image src="/assets/images/blog/blogdetail/blog-detail-hero.png" alt='blog-detail-hero' className='object-cover h-full w-full' fill/>
            </div>
            <h1 data-para-anim className='text-[4.8vw] font-display leading-[1.2] w-[90%] mb-[4vw] mobile:text-[10vw]  '>
            Logo Design: The Art of Creating A Memorable Brand Symbol

            </h1>
            <div className='flex gap-[1vw] mb-[3vw] mobile:mb-[7vw] mobile:gap-[2vw] '>
                <span className='px-[1.4vw] py-[0.2vw] border-[1px] border-black border-opacity-60 rounded-[50px] text-[1.4vw] font-medium fadeup mobile:text-[4vw] mobile:px-[3vw] mobile:py-[0.5vw] tablet:text-[2vw]'>
                Branding
                </span>
                <span className='px-[1.4vw] py-[0.2vw] border-[1px] border-black border-opacity-60 rounded-[50px] text-[1.4vw] font-medium fadeup mobile:text-[4vw] mobile:px-[3vw] mobile:py-[0.5vw] tablet:text-[2vw]'>
                Digital
                </span>
                <span className='px-[1.4vw] py-[0.2vw] border-[1px] border-black border-opacity-60 rounded-[50px] text-[1.4vw] font-medium fadeup mobile:text-[4vw] mobile:px-[3vw] mobile:py-[0.5vw] tablet:text-[2vw]'>
                Strategy
                </span>
            </div>
            <div className='w-[100vw] ml-[-5vw] h-[1px] bg-black mb-[3vw] lineDraw tablet:w-[95vw] mobile:ml-[-7vw]'></div>
            

        </div>
        

        </div>
        
        
    </section>
      
    </>
  )
}


