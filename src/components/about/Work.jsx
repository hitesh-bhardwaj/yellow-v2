import React from 'react'
import Link from 'next/link'
import SectionTitle from '../SectionTitle'
import Section from '../Section'
import LinkButton from '../Button/LinkButton'
import { workPathBySlug } from '@/lib/works'
import MediaRender from '../MediaRender'

export default function Work({ works }) {

  return (
    <>
      <Section className='bg-black' id='work'>
        <div className='container bg-white py-[8%] mobile:py-[15%]'>
          <div className='w-full flex justify-between mb-[5vw] mobile:flex-col mobile:mb-[10vw] items-end'>
            <div className='w-[50%] mobile:w-full'>
              <SectionTitle text={"Our work"} className={"mb-[3vw]"} />
              <p data-para-anim className="text-[1.9vw] w-[60%] font-medium leading-[1.2] mobile:w-[90%] mobile:text-[5vw] mobile:mb-[7vw] tablet:w-[80%] tablet:text-[2.5vw]">
                We grow amazing companies through exceptional branding and communications.
              </p>
            </div>
            <div className='fadeup'>
            <LinkButton btnLink="/our-work" btnText="See All Work"/>


            </div>
          </div>
          <div className='w-full flex justify-between gap-[3vw] mobile:flex-col mobile:gap-[7vw] fadeup'>
            {works.slice(0, 2).map((work) => (
              <div key={work.slug} className='w-[45vw] h-[45vw] relative  rounded-[15px] overflow-hidden mobile:w-[85vw] group hover:drop-shadow-2xl hover:shadow-2xl transition all ease-in duration-300  mobile:h-[90vw] mobile:rounded-none'>
                <Link href={workPathBySlug(work.slug)} className='w-full h-full block'>
                  {work.workFields.featuredImagevideo && (
                    <MediaRender url={work.workFields.featuredImagevideo.node.mediaItemUrl} />
                  )}
                  <div className="absolute bottom-[7%] left-[7%] text-white">
                    <h3 data-title-anim className="text-[2.5vw] mb-[0.5vw] font-display mobile:text-[7vw] tablet:text-[3.5vw] ">{work.title}</h3>
                    <div 
                      data-para-anim className="w-full text-[1.1vw] leading-[1.4] font-medium  mobile:text-[4vw] tablet:text-[2vw]"
                      dangerouslySetInnerHTML={{ __html: work.excerpt }}
                    />
                  </div>
                  <div className="absolute top-[5%] left-[7%] flex gap-[1.5vw] text-white mobile:gap-[3vw]">
                    {work.workcategories && work.workcategories.nodes.slice(0,2).map((category, index) => (
                      <p key={index} className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-lg px-[1.4vw] py-[0.4vw] text-[1.4vw] mobile:text-[4vw] mobile:px-[3vw] mobile:py-[1vw] tablet:text-[2vw]">
                        {category.name}
                      </p>
                    ))}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

    </>
  )
}


