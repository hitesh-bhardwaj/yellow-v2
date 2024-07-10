/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Image from "next/image";
import {gsap} from 'gsap';
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function values() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-container",
        pin: true,
        start: "top top",
        end: "=+3000 top",
        scrub: 1,
      },
    });
    tl.to(".cardback",{
        rotationY:-180,
        scrollTrigger:{
            trigger:".card-container"
        },
        
    })
    tl.to(".cardfront",{
        rotationY:180,
        scrollTrigger:{
            trigger:".card-container"
        },
        
    })
  });
  return (
    <>
      <section className=" h-full w-full py-[10%]" id="values">
        <div className="container ">
          <h2
            data-title-anim
            className="text-[5.7vw] font-display uppercase mb-[3vw] "
          >
            Our Values
          </h2>
          <p
            data-para-anim
            className="text-[2vw] w-[30%] font-medium leading-[1.2] "
          >
            We grow amazing companies through exceptional branding and
            communications.
          </p>
          <div className="flex w-full h-[100vh] gap-[1.5vw] mt-[8vw] card-container items-center ">
            <div className="w-[30vw] h-[40vw] rounded-[15px] bg-[#222222] py-[2vw] px-[2vw] border-[0.5px] border-white border-opacity-50 fadein relative card">
              <div className="text-white w-[30vw] h-[40vw] rounded-[15px] bg-[#222222] p-[3vw] flex flex-col justify-between absolute cardback left-0 top-0 ">
                <div className="w-[4.5vw] h-[5vw] relative">
                  <Image
                    src="/assets/images/about/icon-1.svg"
                    alt="icon-1"
                    fill
                  />
                </div>
                <h4
                  data-title-anim
                  className="text-[2.4vw] font-display mt-[3vw] mb-[2vw] "
                >
                  Trust
                </h4>
                <p
                  data-para-anim
                  className="text-[1.2vw] w-[90%] font-medium leading-[1.4] "
                >
                  Here are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered.
                </p>
              </div>
              <div className="text-white w-[30vw] h-[40vw] rounded-[15px] bg-[#222222] flex flex-col justify-center items-center absolute top-0 left-0 cardfront">
                <div className="w-[30vw] h-[30vw] absolute opacity-10">
                  <Image
                    src="/assets/images/about/icon-1.svg"
                    alt="icon-1"
                    fill
                  />
                </div>
                <h4 data-title-anim className="text-[8.4vw] font-display ">
                  Trust
                </h4>
              </div>
            </div>
            <div className="w-[30vw] h-[40vw] rounded-[15px] bg-[#222222] py-[2vw] px-[2vw] border-[0.5px] border-white border-opacity-50 drop-shadow-2xl shadow-2xl relative fadein">
              <div className="text-white">
                <div className="w-[5vw] h-[5vw] relative">
                  <Image
                    src="/assets/images/about/icon-2.svg"
                    alt="icon-2"
                    fill
                  />
                </div>
                <h4
                  data-title-anim
                  className="text-[2.4vw] font-display mt-[3vw] mb-[2vw] "
                >
                  Responsibility
                </h4>
                <p
                  data-para-anim
                  className="text-[1.2vw] w-[90%] font-medium leading-[1.4] "
                >
                  Here are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered.
                </p>
              </div>
            </div>
            <div className="w-[30vw] h-[40vw] rounded-[15px] bg-[#222222] py-[2vw] px-[2vw] border-[0.5px] border-white border-opacity-50 drop-shadow-2xl shadow-2xl relative fadein ">
              <div className="text-white">
                <div className="w-[5vw] h-[5vw] relative">
                  <Image
                    src="/assets/images/about/icon-3.svg"
                    alt="icon-3"
                    fill
                  />
                </div>
                <h4
                  data-title-anim
                  className="text-[2.4vw] font-display mt-[3vw] mb-[2vw] "
                >
                  Team Work
                </h4>
                <p
                  data-para-anim
                  className="text-[1.2vw] w-[90%] font-medium leading-[1.4] "
                >
                  Here are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
