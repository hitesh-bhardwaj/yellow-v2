import React from 'react'
import Image from 'next/image'

export default function Pagehero() {
  return (
    <>
    <section id='hero'>
        <div className='container h-[120vh] flex items-center'>
        <div className=''>
            <div className='w-[90vw] h-[45vw] relative rounded-[10px] overflow-hidden mb-[3vw]'>
                <Image src="/assets/images/blog/blogdetail/blog-detail-hero.png" alt='' className='object-cover h-full w-full' fill/>
            </div>
            <h1 className='text-[4.8vw] font-display leading-[1.2] w-[90%] mb-[4vw]'>
            Logo Design: The Art of Creating A Memorable Brand Symbol

            </h1>
            <div className='flex gap-[1vw]'>
                <span className='px-[1.4vw] py-[0.2vw] border-[1px] border-black border-opacity-60 rounded-[50px] text-[1.4vw] font-medium'>
                Branding
                </span>
                <span className='px-[1.4vw] py-[0.2vw] border-[1px] border-black border-opacity-60 rounded-[50px] text-[1.4vw] font-medium'>
                Digital
                </span>
                <span className='px-[1.4vw] py-[0.2vw] border-[1px] border-black border-opacity-60 rounded-[50px] text-[1.4vw] font-medium'>
                Strategy
                </span>
            </div>
            

        </div>
        

        </div>
        
    </section>
      
    </>
  )
}


