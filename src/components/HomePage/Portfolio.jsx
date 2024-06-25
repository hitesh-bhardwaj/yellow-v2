/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Portfolio = () => {

    const containerRef = useRef(null);
    const scrollRef = useRef(null);

    useGSAP(()=> {

        const container = containerRef.current;
        const scroll = scrollRef.current;

        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 0.5,
                start: "top top",
                end: "=+3000 top",
                // markers: true,
            }
        });

        tl.fromTo(scroll, {
            x: '0',
        }, {
            x: '-185vw',
            duration: 5,
            ease: 'none'
        })
    })


    
  return (
    <Section className="py-[5%]">
      <div className="container">
        <SectionTitle className="uppercase" text={"Our Work"} />
        <div className="flex justify-between items-end mt-[4vw]">
          <div className="flex items-center justify-start gap-[5vw]">
            <div className="flex items-end gap-[8px]">
              <p className="text-[4.7vw] font-display leading-[1]">200+</p>
              <p className="font-medium text-[1.2vw] mb-[10px]">Projects</p>
            </div>
            <div className="flex items-end gap-[8px]">
              <p className="text-[4.7vw] font-display leading-[1]">40+</p>
              <p className="font-medium text-[1.2vw] mb-[10px]">Industries</p>
            </div>
          </div>
          <div className="w-[35%]">
            <p className="text-[1.9vw] font-medium leading-[1.4]">
              Here are many variations of passages of Lorem Ipsum available, but
              the majority have suffered
            </p>
          </div>
        </div>
      </div>
      <div ref={containerRef} className="horizontal-scroll w-screen h-screen overflow-hidden mt-[5vw]">
        <div ref={scrollRef} className="flex h-full w-[285vw] whitespace-nowrap">
            <div className="h-full w-[85vw] relative">
                <img
                    className="object-cover h-full w-full"
                    src="/assets/images/homepage/portfolio-1.png"
                    alt="Portfolio Image"
                    loading="lazy"
                />
            </div>
            <div className="h-full w-[85vw] relative">
                <img
                    className="object-cover h-full w-full"
                    src="/assets/images/homepage/portfolio-2.png"
                    alt="Portfolio Image"
                    loading="lazy"
                />
            </div>
            <div className="h-full w-[85vw] relative">
                <img
                    className="object-cover h-full w-full"
                    src="/assets/images/homepage/portfolio-3.png"
                    alt="Portfolio Image"
                    loading="lazy"
                />
            </div>
            <div className="h-full w-[30vw] relative">
                <img
                    className="object-cover h-full w-full"
                    src="/assets/images/homepage/portfolio-1.png"
                    alt="Portfolio Image"
                    loading="lazy"
                />
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
