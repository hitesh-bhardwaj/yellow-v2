import React from 'react'
import Layout from "@/components/Layout";
import Pagehero from '@/components/contact/Pagehero';
import ContactForm from '@/components/contact/ContactForm';
import Address from '@/components/contact/Address';
import gsap from 'gsap'
import { useGSAP  } from '@gsap/react'
import { SplitInLine, SplitInLineWordChar } from ".././components/utils";

export default function contact() {
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
        <ContactForm/>
        <Address/>

    </Layout>
      
    </>
  )
}


