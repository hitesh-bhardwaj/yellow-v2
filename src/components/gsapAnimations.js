import { useGSAP } from '@gsap/react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import { SplitInLineWordChar } from './splitTextUtils';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function TitleAnim(){
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
}
