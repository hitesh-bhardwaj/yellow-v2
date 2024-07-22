/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SectionTitle from "../SectionTitle";
import { CustomEase } from "gsap/dist/CustomEase";

gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);

export default function values() {
  if (globalThis.innerWidth >= 1024) {
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".card-section",
          pin: true,
          scrub: 1,
          start: "top top",
          end: "=+3000 top",
          // markers: true,
        },
      });
      tl.from(".card1", {
        yPercent: 100,

        duration: 2,
        delay: -3,
        ease: "power1.out",
      })
        .from(".card2", {
          yPercent: 140,

          duration: 2,
          delay: -1,
        })
        .from(".card3", {
          yPercent: 140,

          duration: 2,
          delay: -1,
        })
        .to(".cardfront", {
          rotateY: -180,
          duration: 5,
          stagger: {
            from: "edges",
            each: 0.5,
          },
        })
        .to(".cardback", {
          rotateY: 0,
          duration: 5,
          delay: -6,
          stagger: {
            from: "edges",
            each: 0.5,
          },
        })
        .to(".card1", {
          rotateZ: -20,
          xPercent: 50,
          duration: 2,
        })
        .to(".card2", {
          rotateZ: -5,
          yPercent: -20,
          duration: 2,
          delay: -2,
        })
        .to(".card3", {
          rotateZ: 20,
          xPercent: -50,
          duration: 2,
          delay: -2,
        });
    });
  } else if (globalThis.innerWidth > 541 && globalThis.innerWidth < 1023) {
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".card-block",

          scrub: 1,
          start: "top 60%",
          end: "bottom 20%",
        },
      });
      tl.to(".cardfront", {
        rotateY: -180,
        duration: 5,
        stagger: 1,
      }).to(".cardback", {
        rotateY: 0,
        duration: 5,
        delay: -7,
        stagger: 1,
      });
    });
  } else {
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".card-block",

          
          start: "top 60%",
          end: "bottom 20%",
        },
      });
      tl.from(".card-container",{
        yPercent:80,
        opacity:0,
        ease:"power3.out",
        duration:1,
        stagger:0.5
      })
    });
  }

  return (
    <>
      <section
        className=" h-full w-full py-[5%] mobile:py-[15%] tablet:pt-[10%]"
        id="values"
      >
        <div className="container card-block ">
          <SectionTitle
            data-title-anim
            className="text-[5.7vw] font-display uppercase mb-[3vw] mobile:mb-[5vw] "
            text={"Our Values"}
          />

          <p
            data-para-anim
            className="text-[2vw] w-[30%] font-medium leading-[1.2] mobile:w-[90%] mobile:text-[5vw] tablet:text-[2.5vw] tablet:w-[50%] "
          >
            We grow amazing companies through exceptional branding and
            communications.
          </p>
          <div className="w-full h-[100vh] flex items-center card-section mobile:h-full mobile:mt-[7vw] tablet:h-full">
            <div className=" h-[100vh] w-full py-[7%] flex justify-between items-center mobile:h-full mobile:flex-col mobile:gap-[7vw] tablet:flex-wrap tablet:gap-y-[5vw] tablet:h-full tablet:pt-[10%]">
              <div className="card-container relative w-[29vw] h-[35vw] rounded-[15px] card1 mobile:w-[90vw] mobile:h-[100vw] tablet:w-[40vw] tablet:h-[50vw] mobile:">
                <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#222222] cardfront flex items-center justify-center rounded-[20px] overflow-hidden border-white border-[1px] mobile:w-[90vw] mobile:h-[100vw] tablet:w-[40vw] tablet:h-[50vw]  mobile:hidden">
                  <img
                    src="/assets/images/about/card-1.png"
                    alt="card-1"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#222222] cardback py-[4vw] px-[2vw] flex flex-col items-start justify-between text-white rounded-[20px] border-white border-[1px] border-opacity-40 mobile:w-[90vw] mobile:h-[100vw] mobile:justify-center mobile:items-center tablet:w-[40vw] tablet:h-[50vw]">
                  <div className="w-[5vw] h-[5vw] relative mobile:w-[20vw] mobile:h-[20vw] tablet:w-[8vw] tablet:h-[8vw]">
                    <img
                      src="/assets/images/about/icon-1.svg"
                      alt="icon-1"
                      className="object-contain h-full w-full"
                    />
                  </div>
                  <div className="mobile:px-[5vw] mobile:flex mobile:flex-col mobile:gap-[5vw] mobile:w-full">
                    <h4 className="text-[2.5vw] font-display  mb-[1vw] mobile:text-[10vw] mobile:text-center tablet:text-[4vw]">
                      Trust
                    </h4>
                    <p className="text-[1.2vw] w-full leading-[1.4] mobile:text-[4vw] mobile:text-center tablet:text-[2vw] ">
                      Here are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-container relative w-[29vw] h-[35vw] rounded-[15px] card2 mobile:w-[90vw] mobile:h-[100vw] tablet:w-[40vw] tablet:h-[50vw] mobile:">
                <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#222222] cardfront flex items-center justify-center rounded-[20px] overflow-hidden border-white border-[1px] mobile:w-[90vw] mobile:h-[100vw] tablet:w-[40vw] tablet:h-[50vw]  mobile:hidden">
                  <img
                    src="/assets/images/about/card-2.png"
                    alt="card-2"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#222222] cardback py-[4vw] px-[2vw] flex flex-col items-start justify-between text-white rounded-[20px] border-white border-[1px] border-opacity-40 mobile:w-[90vw] mobile:h-[100vw] mobile:justify-center mobile:items-center tablet:w-[40vw] tablet:h-[50vw] mobile:">
                  <div className="w-[5vw] h-[5vw] relative mobile:w-[20vw] mobile:h-[20vw] tablet:w-[8vw] tablet:h-[8vw]">
                    <img
                      src="/assets/images/about/icon-2.svg"
                      alt="icon-2"
                      className="object-contain h-full w-full"
                    />
                  </div>
                  <div className="mobile:px-[5vw] mobile:flex mobile:flex-col mobile:gap-[5vw] mobile:w-full">
                    <h4 className="text-[2.5vw] font-display  mb-[1vw] mobile:text-[10vw] mobile:text-center tablet:text-[4vw] ">
                      Responsibility
                    </h4>
                    <p className="text-[1.2vw] w-full leading-[1.4]  mobile:text-[4vw] mobile:text-center tablet:text-[2vw]">
                      Here are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tab">
                <div className="card-container relative w-[29vw] h-[35vw] rounded-[15px] card3 mobile:w-[90vw] mobile:h-[100vw] tablet:w-[40vw] tablet:h-[50vw] mobile:  ">
                  <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#222222] cardfront flex items-center justify-center rounded-[20px] overflow-hidden border-white border-[1px] mobile:w-[90vw] mobile:h-[100vw] tablet:w-[40vw] tablet:h-[50vw]  mobile:hidden ">
                    <img
                      src="/assets/images/about/card-3.png"
                      alt="card-3"
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#222222] cardback py-[4vw] px-[2vw] flex flex-col items-start justify-between text-white rounded-[20px] border-white border-[1px] border-opacity-40 mobile:w-[90vw] mobile:h-[100vw] mobile:justify-center mobile:items-center tablet:w-[40vw] tablet:h-[50vw] mobile:">
                    <div className="w-[5vw] h-[5vw] relative mobile:w-[20vw] mobile:h-[20vw] tablet:w-[8vw] tablet:h-[8vw]">
                      <img
                        src="/assets/images/about/icon-3.svg"
                        alt="icon-3"
                        className="object-contain h-full w-full"
                      />
                    </div>
                    <div className="mobile:px-[5vw] mobile:flex mobile:flex-col mobile:gap-[5vw] mobile:w-full">
                      <h4 className="text-[2.5vw] font-display  mb-[1vw]  mobile:text-[10vw] mobile:text-center tablet:text-[4vw]">
                        Team Work
                      </h4>
                      <p className="text-[1.2vw] w-full leading-[1.4] mobile:text-[4vw] mobile:text-center tablet:text-[2vw] ">
                        Here are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
