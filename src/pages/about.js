import Layout from '@/components/Layout'
import Join from '@/components/about/Join'
import Meet from '@/components/about/Meet'
import Pagehero from '@/components/about/Pagehero'
import Values from '@/components/about/Values'
import Work from '@/components/about/Work'
import React from 'react'
import gsap from 'gsap'
import { useGSAP  } from '@gsap/react'
import { SplitInLine, SplitInLineWordChar } from ".././components/utils";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'
// gsap.registerPlugin(ScrollTrigger, useGSAP);


export default function about() {
  useGSAP(() => {
    const headings = document.querySelectorAll(".heading-anim");
    headings.forEach((heading) => {
      SplitInLineWordChar(heading);
      let headingWord = heading.querySelectorAll(".word .char");
      gsap.from(headingWord, {
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        rotate: "5deg",
        duration: 0.8,
        yPercent: 100,
        stagger: 0.05,
        ease: "primary-ease",
      });
    });
  });

  useGSAP(() => {
    const paraAnimations = document.querySelectorAll(".para-anim");
    paraAnimations.forEach((paraAnimation) => {
      SplitInLine(paraAnimation);
      let paraLine = paraAnimation.querySelectorAll(" .line-internal");
      gsap.from(paraLine, {
        scrollTrigger: {
          trigger: paraAnimation,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        duration: 1.47,
        yPercent: 100,
        stagger: 0.07,
        ease: "primary-ease",
      });
    });
  });

  useGSAP(() => {
    const lineDraws = document.querySelectorAll(".lineDraw");
    lineDraws.forEach((lineDraw) => {
      gsap.from(lineDraw, {
        scrollTrigger: {
          trigger: lineDraw,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.47,
        yPercent: 100,
        stagger: 0.07,
        ease: "primary-ease",
      });
    });
  });
  return (
    <>
    <Layout>
        <Pagehero/>
        <Values/>
        <Meet/>
        <Join/>
        <Work/>
        
    </Layout>
      
    </>
  )
}

 
