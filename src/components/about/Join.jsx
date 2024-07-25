/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import LinkButton from '../Button/LinkButton'
import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Section from '../Section'
gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Join() {
  if (globalThis.innerWidth > 1023) {
    useGSAP(() => {
      gsap.to(".join-img", {
        yPercent: 50,
        duration: 2,
        scrollTrigger: {
          trigger: ".join-img",
          scrub: 0.25,
          start: "+=200 60%",
          end: "bottom -=200"
        }
      })
    })
  }

  if (globalThis.innerWidth < 1023 && globalThis.innerWidth > 541) {
    useGSAP(() => {
      gsap.to(".join-img", {
        yPercent: 30,
        duration: 2,
        scrollTrigger: {
          trigger: ".join-img",
          scrub: 0.25,
          start: "+=200 90%",
          end: "bottom -=200"
        }
      })
    })
  }

  return (
    <>
      <Section className='bg-body dark' id='join'>
        <div className='container py-[8%] mobile:py-[15%] tablet:py-[10%] flex justify-between mobile:flex-col'>
          <div className="w-[45%] flex flex-col gap-[1.5vw] text-white mobile:order-2 mobile:gap-[7vw] mobile:mt-[10vw] mobile:w-full">
            <h2 data-title-anim className="text-[5.9vw] leading-[1] font-display mb-[1vw] w-full mobile:text-[12vw] mobile:normal-case tablet:text-[5.5vw] tablet:leading-[1.2] tablet:mb-[3vw]">Join Yellow and Make a Difference.</h2>
            <p data-para-anim className="text-[1.6vw] w-[90%] mb-[2vw] mobile:text-[4.5vw] mobile:w-[90%] mobile:mb-[7vw] tablet:text-[2vw] tablet:w-full tablet:mb-[3vw]">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero&apos;s De Finibus Bonorum et Malorum for use in a type specimen book.
            </p>
            <LinkButton
              btnLink="/careers"
              btnText={"See Open Positions"}
              className="join text-[1.3vw]"
            />
          </div>
          <div className='w-[42vw] h-[52vw] relative drop-shadow-2xl shadow-2xl overflow-hidden fadein mobile:w-[85vw] mobile:h-[100vw]'>
            <Image src="/assets/images/about/join.png" alt='join-img' fill className='scale-[1.5] translate-y-[-30%] join-img mobile:scale-100 mobile:translate-y-0 tablet:scale-[1.4] tablet:translate-y-[-20%]' />
          </div>
        </div>
      </Section>
    </>
  )
}


