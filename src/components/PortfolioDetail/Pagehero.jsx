import React from 'react'
import Section from '../Section'
import MediaRender from '../MediaRender'
import { formatDateYear } from '@/lib/datetime'

export default function Pagehero({src, title, date, workcategories}) {
  return (
    <>
      <Section className='dark relative w-full h-screen mobile:h-[80vh] tablet:h-[50vh]' id='hero'>
        <MediaRender url={src}/>
        <div className='container absolute top-0 left-0 right-0 bottom-0 z-[1] flex items-center mobile:py-[15%] mobile:flex-col mobile:items-start mobile:justify-end '>
          <h1 data-title-anim className='text-[5.4vw] text-white uppercase font-display mobile:text-[12vw] mobile:ps-0 mobile:mb-[10vw] tablet:ps-[2%] tablet:text-[7vw] '>
            {title}
          </h1>
          <div className="absolute bottom-[7%] right-[7%] flex gap-[1.5vw] text-white mobile:static mobile:gap-[3vw]">
            {workcategories.slice(0, 2).map((category) => (
              <p key={category.slug} className="w-fit border-[1px] border-white rounded-[60px] backdrop-blur-md px-[1.7vw] py-[0.5vw] text-[1.2vw] fadeup mobile:text-[4vw] mobile:px-[3vw] mobile:py-[1.5vw] bg-white bg-opacity-15 tablet:text-[2vw]">{category.name}</p>
            ))}
            <p className="w-fit border-[1px] border-white rounded-[60px] backdrop-blur-md px-[2.5vw] py-[0.5vw] text-[1.2vw] fadeup mobile:text-[4vw] mobile:hidden tablet:text-[2vw]">
              {formatDateYear(date)}
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}


