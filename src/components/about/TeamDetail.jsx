import React from 'react'
import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap/dist/gsap';

export default function TeamDetail({ index, handleClose, detailOpen, teams }) {
  const member = teams[index-1];

  useEffect(() => {
    if (detailOpen) {
      gsap.to(".detail-overlay", {
        opacity: 0.2,
        ease: "power2.in"
      })
    }
    else {
      gsap.to(".detail-overlay", {
        opacity: 0,
        delay: -0.2,
        ease: "power2.in"
      })
    }
  }, [detailOpen])

  return (
    <>
      <section data-lenis-prevent id='team-detail' className={`w-full bg-transparent fixed h-full  top-0 right-0 overflow-y-auto overflow-x-hidden overflow-scroll detail-section z-[204] flex justify-end pointer-events-none `}>
        <div onClick={handleClose} className={`bg-[#000000] w-full h-full detail-overlay opacity-0 ${detailOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}></div>
        <div className={` w-[70%] px-[5vw] absolute right-0 flex flex-col gap-[2vw] bg-white h-full overflow-y-auto overflow-scroll z-[205] pointer-events-auto mobile:w-full mobile:gap-[5vw] tablet:w-[80%] tablet:gap-[3vw] ${detailOpen ? "transition-all ease-in-out duration-700" : "translate-x-[100%] transition-all ease-in-out duration-700"}`}>
          <div className='w-full flex justify-between pt-[5%] mobile:pt-[10%]'>
            <div className='w-[3vw] h-[3vw] cursor-pointer relative mobile:w-[10vw] mobile:h-[10vw] tablet:w-[7vw] tablet:h-[7vw]' onClick={handleClose} ><Image src="/assets/icons/cross.svg" alt='cross' fill /></div>
            <span className='text-[1.5vw] mobile:text-[3.5vw] tablet:text-[2.5vw]'>{index}/{teams.length}</span>
          </div>
          <div className='w-full h-[1px] py-[0.01vw] bg-black lineDraw mobile:my-[4vw] mobile:py-[0.1vw] tablet:my-[2vw]'></div>
          <div className='w-full flex gap-[2vw] mobile:flex-col mobile:gap-[5vw]'>
            <div className='w-[25vw] h-[30vw] relative mobile:w-[90vw] mobile:h-[120vw] tablet:w-[40vw] tablet:h-[50vw]'>
              <Image src={member.featuredImage.node.sourceUrl} alt={`${member.title} Image`} className="object-cover" fill/>
            </div>
            <div className='tablet:w-[30%] '>
              <h2 className='text-[4vw] font-display leading-[1.1] mobile:text-[10vw] mobile:mb-[2vw] tablet:text-[6.5vw]'>{member.title}</h2>
              <p className='text-[1.2vw] font-medium mobile:text-[4.5vw] tablet:text-[2.5vw]'>{member.teams.designation}</p>
            </div>
          </div>
          <div className='flex flex-col gap-[1.5vw] text-[1.5vw] font-medium mobile:text-[4.5vw] mobile:gap-[3vw] tablet:text-[3vw] tablet:gap-[2vw]'>
            <div
              className='space-y-[1.5vw]'
              dangerouslySetInnerHTML={{
                __html: member.content,
              }}
            />
            <div className='flex flex-col gap-[0.2vw] mobile:gap-[2vw] mobile:my-[4vw]'>
              <p className='opacity-40 text-[1.2vw] mobile:text-[3.5vw]'>Email</p>
              <Link href={`mailto:${member.teams.email}`} className='mb-[1vw] group mobile:mb-[3vw]'>
                <span className='link-line group-hover:text-gray-700'>
                  {member.teams.email}
                </span>
              </Link>
              <p className='opacity-40 text-[1.2vw] mobile:text-[3.5vw]'>Social Media</p>
              <Link target='_blank' href={member.teams.linkedin} className='group'>
                <span className='link-line group-hover:text-gray-700'>
                  {member.teams.linkedin}
                </span>
              </Link>
            </div>
            <div className='w-[62vw] h-[35vw] relative my-[5%] mobile:w-[90vw] mobile:h-[55vw] mobile:mb-[10%] tablet:mb-[10%] tablet:w-[70vw] tablet:h-[40vw]'>
              <Image src={member.teams.profilePicture.node.sourceUrl} fill alt='image' objectFit='cover'/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
