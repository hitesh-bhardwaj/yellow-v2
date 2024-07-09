import React from 'react'
import Image from 'next/image'
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export default function Sample() {
    useGSAP(() => {
        const images = document.querySelector(".imageanim");

          
        });
      
  return (
    <>
    <section className='container'>
        <div className='w-[90vw] h-[45vw] relative imageanim'>
            <Image src="/assets/images/portfolio/maveroc.png" alt='maveroc-img' fill/>

        </div>

    </section>
      
    </>
  )
}


