/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import { gsap } from 'gsap/dist/gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function values() {
    useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".card-section",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "=+3000 top",
            
          },
        });
        tl.from(".card1", {
          yPercent: 120,
          duration: 2,
        })
          .from(".card2", {
            yPercent: 120,
            duration: 2,
            delay: -1,
          })
          .from(".card3", {
            yPercent: 120,
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
  return (
    <>
      <section className=" h-full w-full py-[5%]" id="values">
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
          <div className="w-full h-[100vh] flex items-center card-section">
          <div className=" h-[100vh] w-full py-[7%] flex justify-between items-center">
          <div className="card-container relative w-[29vw] h-[35vw] rounded-[15px] card1">
            <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#222222] cardfront flex items-center justify-center rounded-[20px] overflow-hidden border-white border-[1px]">
              <img
                src="/assets/images/about/card-1.png"
                alt="card-1"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#222222] cardback py-[4vw] px-[2vw] flex flex-col items-start justify-between text-white rounded-[20px] border-white border-[1px] border-opacity-40">
              <div className="w-[5vw] h-[5vw] relative">
                <img
                  src="/assets/images/about/icon-1.svg"
                  alt="icon-1"
                  className="object-contain h-full w-full"
                />
              </div>
              <div>
                <h4
                  
                  className="text-[2.5vw] font-display  mb-[1vw] "
                >
                  Trust
                </h4>
                <p
                  
                  className="text-[1.2vw] w-full leading-[1.4] "
                >
                  Here are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered.
                </p>
              </div>
            </div>
          </div>
          <div className="card-container relative w-[29vw] h-[35vw] rounded-[15px] card2">
            <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#222222] cardfront flex items-center justify-center rounded-[20px] overflow-hidden border-white border-[1px]">
              <img
                src="/assets/images/about/card-2.png"
                alt="card-2"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#222222] cardback py-[4vw] px-[2vw] flex flex-col items-start justify-between text-white rounded-[20px] border-white border-[1px] border-opacity-40">
              <div className="w-[5vw] h-[5vw] relative">
                <img
                  src="/assets/images/about/icon-2.svg"
                  alt="icon-2"
                  className="object-contain h-full w-full"
                />
              </div>
              <div>
                <h4
                  
                  className="text-[2.5vw] font-display  mb-[1vw] "
                >
                  Responsibility
                </h4>
                <p
                  
                  className="text-[1.2vw] w-full leading-[1.4] "
                >
                  Here are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered.
                </p>
              </div>
            </div>
          </div>
          <div className="card-container relative w-[29vw] h-[35vw] rounded-[15px] card3 ">
            <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#222222] cardfront flex items-center justify-center rounded-[20px] overflow-hidden border-white border-[1px]">
              <img
                src="/assets/images/about/card-3.png"
                alt="card-3"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#222222] cardback py-[4vw] px-[2vw] flex flex-col items-start justify-between text-white rounded-[20px] border-white border-[1px] border-opacity-40">
              <div className="w-[5vw] h-[5vw] relative">
                <img
                  src="/assets/images/about/icon-3.svg"
                  alt="icon-3"
                  className="object-contain h-full w-full"
                />
              </div>
              <div>
                <h4
                  
                  className="text-[2.5vw] font-display  mb-[1vw] "
                >
                  Team Work
                </h4>
                <p
                  
                  className="text-[1.2vw] w-full leading-[1.4] "
                >
                  Here are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered.
                </p>
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
