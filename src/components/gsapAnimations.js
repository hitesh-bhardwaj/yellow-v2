import { useGSAP } from '@gsap/react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import { SplitInLineWordChar , SplitInLine } from './splitTextUtils';


gsap.registerPlugin(ScrollTrigger, useGSAP);

export function titleAnim(){
    useGSAP(() => {
        const headings = document.querySelectorAll("[data-title-anim]");
        headings.forEach((heading) => {
          SplitInLineWordChar(heading);
          let headingWord = heading.querySelectorAll(".word .char");
          gsap.from(headingWord, {
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              // toggleActions: "play none none reverse",
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
export function paraAnim(){
  useGSAP(() => {
    const paraAnimations = document.querySelectorAll("[data-para-anim]");
      paraAnimations.forEach((paraAnimation) => {
        SplitInLine(paraAnimation);
        let paraLine = paraAnimation.querySelectorAll(" .line-internal");
        gsap.from(paraLine, {
          scrollTrigger: {
            trigger: paraAnimation,
            start: "top 85%",
            // toggleActions: "play none none reverse",
          },
          duration: 1.47,
          yPercent: 100,
          stagger: 0.07,
          ease: "primary-ease",
        });
      });
  }); 
}
export function lineAnim(){
  useGSAP(() => {
    const lineDraws = document.querySelectorAll(".lineDraw");
    lineDraws.forEach((lineDraw) => {
      gsap.from(lineDraw, {
        scrollTrigger: {
          trigger: lineDraw,
          start: "top 85%",
          // toggleActions: "play none none reverse",
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
}
export function imageAnim(){
  useGSAP(() => {
    const images = document.querySelectorAll(".imageanim");

    images.forEach((img) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          
          // markers:true
        },
        '--beforeHeight': '0%',
        duration: 1.5,
        stagger: 0.05,
        ease: "power3.inOut",
      });
    });
  });

}
export function imgAnim(){
  useGSAP(() => {
    const images = document.querySelectorAll(".imganim");

    images.forEach((img) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          
          // markers:true
        },
        
        '--beforeHeight': '0%',
        duration: 1.5,
        stagger: 0.05,
        ease: "power3.inOut",
      });
    });
  });

}
export function fadeIn(){
  useGSAP(() => {
    const content = document.querySelectorAll(".fadein");

    content.forEach((content) => {
      gsap.from(content, {
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
          end:"bottom 60%",

          
          // markers:true
        },
        opacity:0,
        // scale:0.9,
        ease:"power4.Out",
        duration:1,
        stagger:0.5
      
        
       
      });
    });
  });

}
