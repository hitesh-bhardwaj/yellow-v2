import React from 'react'
import LinkButton from '../Button/LinkButton'
import Image from 'next/image'

export default function Join() {
  return (
    <>
    <section className='w-full py-[8%] bg-[#111111] ' id='join'>
      <div className='container flex justify-between'>
      <div className="w-[40%] flex flex-col gap-[1.5vw] text-white">
            <h2 data-title-anim className="text-[5.8vw] leading-[1] font-display mb-[1vw]">Join Yellow and Make a Difference.</h2>
            <p data-para-anim className="text-[1.6vw] w-[80%] mb-[2vw] ">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero&apos;s De Finibus Bonorum et Malorum for use in a type specimen book.
            </p>
            
            <LinkButton
              btnLink={"/"}
              btnText={"See Open Positions"}
              className={"text-[1.5vw] font-medium join "}
            />
          </div>
          <div className='w-[42vw] h-[52vw] relative drop-shadow-2xl shadow-2xl imageanim'>
            <Image src="/assets/images/about/join.png" alt='join-img' fill/>

          </div>
        
      </div>
    

    </section>
      
    </>
  )
}

 
