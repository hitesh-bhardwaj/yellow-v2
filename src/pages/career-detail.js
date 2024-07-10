import Overview from '@/components/career-detail/Overview'
import Pagehero from '@/components/career-detail/Pagehero'
import Layout from '@/components/Layout'
import React from 'react'
import gsap from 'gsap'
import { useGSAP  } from '@gsap/react'
import { SplitInLine, SplitInLineWordChar } from "../components/splitTextUtils";

export default function careerdetail() {
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
        <Overview/>
    </Layout>
      
    </>
  )
}


