/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import LinkButton from "../Button/LinkButton";
import { SplitInLine, SplitInLineWordChar } from "../utils";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);

const Portfolio = () => {

    const containerRef = useRef(null);
    const scrollRef = useRef(null);

    CustomEase.create("primary-ease", "0.62, 0.05, 0.01, 0.99");

    useGSAP(()=> {
        const container = containerRef.current;
        const scroll = scrollRef.current;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                start: "top top",
                end: "=+4000 top",
            }
        });
        tl.fromTo(scroll, {
            x: '0',
        }, {
            x: '-200vw',
            duration: 5,
            ease: 'none'
        })
    })

    useGSAP(() => {
        const headings = document.querySelectorAll(".heading-anim");
        headings.forEach((heading) => {
          SplitInLineWordChar(heading);
          let headingWord = heading.querySelectorAll(".word .char");
          gsap.from(headingWord, {
              scrollTrigger: {
                trigger: heading,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            rotate: "5deg",
            duration: 0.8,
            yPercent: 100,
            stagger: 0.05,
            ease: 'primary-ease',
          });
        });
      });

      useGSAP(() => {
        const paraAnimations = document.querySelectorAll(".para-anim");
        paraAnimations.forEach((paraAnimation) => {
          SplitInLine(paraAnimation);
          let paraLine = paraAnimation.querySelectorAll(".line .line-internal");
          gsap.from(paraLine, {
            scrollTrigger: {
              trigger: paraAnimation,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            duration: 1.47,
            yPercent: 100,
            stagger: 0.07,
            ease: "primary-ease"
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
            ease: "primary-ease"
          });
        });
      });

      useGSAP(() => {
        const fadeIns = document.querySelectorAll(".fadeIn");
        fadeIns.forEach((fadeIn) => {
          gsap.from(fadeIn, {
            scrollTrigger: {
              trigger: fadeIn,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            duration: 1.47,
            stagger: 0.07,
            ease: "primary-ease"
          });
        });
      });

  return (
    <Section className="py-[5%]" id="portfolio">
      <div className="container">
        <SectionTitle text="Our Work" />
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
            <p className="text-[1.9vw] font-medium leading-[1.4] para-anim">
              Here are many variations of passages of Lorem Ipsum available, but
              the majority have suffered
            </p>
          </div>
        </div>
      </div>
      <div ref={containerRef} className="horizontal-scroll w-screen h-screen overflow-hidden mt-[5vw]">
        <div ref={scrollRef} className="flex h-full w-[300vw] whitespace-nowrap">
            <div className="h-full w-[90vw] relative p-[5vw]">
                <img
                    className="object-cover h-full w-full absolute top-0 left-0 right-0 bottom-0 brightness-[0.7]"
                    src="/assets/images/homepage/portfolio-1.png"
                    alt="Portfolio Image"
                    loading="lazy"
                />
                <div className="relative w-full flex text-white h-full items-end">
                    <div className="flex justify-between">
                        <div className="whitespace-normal flex gap-[2.5vw] flex-col">
                            <h3 className="text-[2.8vw] font-display leading-[1]">Maveroc</h3>
                            <p className="text-[1.05vw] font-medium w-[55%]">Naming is always one of the most challenging aspects of creating a brand. It’s incredibly personal, subjective and often all the great ideas you come up with are taken.</p>
                        </div>
                        <div className="flex flex-col justify-between items-end text-[1.2vw]">
                            <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/25 backdrop-blur-lg">2024</p>
                            <div className="flex items-center gap-[2vw]">
                                <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/10 backdrop-blur-lg">Digital Marketing</p>
                                <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/10 backdrop-blur-lg">Branding</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full w-[90vw] relative p-[5vw]">
                <img
                    className="object-cover h-full w-full absolute top-0 left-0 right-0 bottom-0 brightness-[0.85]"
                    src="/assets/images/homepage/portfolio-2.png"
                    alt="Portfolio Image"
                    loading="lazy"
                />
                <div className="relative w-full flex text-white h-full items-end">
                    <div className="flex justify-between">
                        <div className="whitespace-normal flex gap-[2.5vw] flex-col">
                            <h3 className="text-[2.8vw] font-display leading-[1]">Maveroc</h3>
                            <p className="text-[1.05vw] font-medium w-[55%]">Naming is always one of the most challenging aspects of creating a brand. It’s incredibly personal, subjective and often all the great ideas you come up with are taken.</p>
                        </div>
                        <div className="flex flex-col justify-between items-end text-[1.2vw]">
                            <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/25 backdrop-blur-lg">2024</p>
                            <div className="flex items-center gap-[2vw]">
                                <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/10 backdrop-blur-lg">Digital Marketing</p>
                                <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/10 backdrop-blur-lg">Branding</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full w-[90vw] relative p-[5vw]">
                <img
                    className="object-cover h-full w-full absolute top-0 left-0 right-0 bottom-0 brightness-[0.85]"
                    src="/assets/images/homepage/portfolio-3.png"
                    alt="Portfolio Image"
                    loading="lazy"
                />
                <div className="relative w-full flex text-white h-full items-end">
                    <div className="flex justify-between">
                        <div className="whitespace-normal flex gap-[2.5vw] flex-col">
                            <h3 className="text-[2.8vw] font-display leading-[1]">Maveroc</h3>
                            <p className="text-[1.05vw] font-medium w-[55%]">Naming is always one of the most challenging aspects of creating a brand. It’s incredibly personal, subjective and often all the great ideas you come up with are taken.</p>
                        </div>
                        <div className="flex flex-col justify-between items-end text-[1.2vw]">
                            <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/25 backdrop-blur-lg">2024</p>
                            <div className="flex items-center gap-[2vw]">
                                <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/10 backdrop-blur-lg">Digital Marketing</p>
                                <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/10 backdrop-blur-lg">Branding</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full w-[30vw] relative flex items-center justify-center flex-col">
                    <p className="font-display text-[4vw]">Want More?</p>
                    <LinkButton btnText="View Showcase" btnLink="#" />
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
