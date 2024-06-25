import Section from "@/components/Section";
import Image from "next/image";
import LinkButton from "../Button/LinkButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutUs = () => {
    const containerRef = useRef(null);
    const pathRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(()=> {
        const container = containerRef.current;
        const text = textRef.current;
        const path = pathRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "1500 top",
                scrub: 1,
            },
        });

        tl.fromTo(path, {
            strokeDasharray: '3000',
            strokeDashoffset: '3000',
        }, {
            strokeDashoffset: '0',
            duration: 2,
        })
        .from(text, {
            y: '40%',
            duration: 2,
            delay: -2,
            ease: 'power2.out'
        })
    });

    return (
        <Section className="py-[10%]" id="second-section">
            <div ref={containerRef} className="relative h-full">
                <div className="absolute right-0 left-0 top-0 bottom-0 object-contain -z-10 h-[100%]">
                    <svg className="w-full" viewBox="0 0 1920 1074" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path ref={pathRef} d="M-26 335.289C-26 169.5 384.807 -112.786 904.951 91.8007C1524 335.289 1036.5 1053.26 1951 1053.26" stroke="#FFCD11" strokeWidth="40" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className="container">
                    <div className="flex justify-between items-start">
                        <div className="w-[40%] h-[45vw] overflow-hidden rounded-xl relative">
                            <Image 
                                src="/assets/images/homepage/about.png"
                                alt="About Image"
                                title="About Us Image"
                                fill
                                quality={100}
                                priority={false}
                            />
                        </div>
                        <div ref={textRef} className="w-[52%]">
                            <div className="text-left pr-[3vw] space-y-[2vw]">
                                <p className="text-[1.2vw] font-medium">About</p>
                                <h2 className="font-display text-[2.5vw]">A branding and communications agency in Dubai, Yellow stands for all that’s bright in business – collaboration, ambition, opportunity and transformation. Dubai-born and Dubai-bred, we have its optimisim and drive in our DNA. We’ve helped businesses start, grow and thrive here.</h2>
                                <div>
                                    <LinkButton btnLink="#" btnText="Get To Know Us"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default AboutUs;