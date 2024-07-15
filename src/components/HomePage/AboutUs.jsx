import Section from "@/components/Section";
import Image from "next/image";
import LinkButton from "../Button/LinkButton";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitInLineOnly } from "../splitTextUtils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutUs = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const texth2Ref = useRef(null);
    
    useGSAP(() => {
        const container = containerRef.current;
        const text = textRef.current;
        const texth2 = texth2Ref.current;

        SplitInLineOnly(texth2);
        if(globalThis.innerWidth>541){
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top bottom",
                    end: "1500 top",
                    scrub: 1,
                },
            });
    
            tl.from(text, {
                y: '40%',
                duration: 2,
                delay: -2,
                ease: 'power2.out'
            })
    
            const textbreakLine = texth2.querySelectorAll(".line");
            gsap.to(textbreakLine, {
                scrollTrigger: {
                    trigger: container,
                    start: "top 80%",
                    end: "bottom 40%",
                    scrub: true,
                },
                backgroundPositionX: 0,
                duration: 1,
                stagger: 1,
                ease: "power2.inOut"
            })
        
        }
       else{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "2500 top",
                scrub: 1,
            },
        });

        tl.from(text, {
        
            duration: 2,
            delay: -2,
            ease: 'power2.out'
        })

        const textbreakLine = texth2.querySelectorAll(".line");
        gsap.to(textbreakLine, {
            scrollTrigger: {
                trigger: container,
                start: "top 80%",
                end: "bottom 40%",
                scrub: true,
            },
            backgroundPositionX: 0,
            duration: 1,
            stagger: 1,
            ease: "power2.inOut"
        })

       }
        
    });

    return (
        <Section className="py-[10%]" id="second-section">
            <div ref={containerRef} className="container">
                <div className="flex justify-between items-start mobile:flex-col">
                    <div className="w-[40%] h-[45vw] overflow-hidden rounded-xl fadeIn relative imageanim mobile:w-full mobile:h-[100vw]">
                        <Image
                            src="/assets/images/homepage/about.png"
                            alt="About Image"
                            title="About Us Image"
                            fill
                            quality={100}
                            priority={false}
                        />
                    </div>
                    <div ref={textRef} className="w-[52%] mobile:w-full">
                        <div className="text-left pr-[3vw] space-y-[2vw] mobile:space-y-[10vw] mobile:pt-[12vw]">
                            <p className="text-[1.2vw] font-medium mobile:text-[5vw]">About</p>
                            <h2 ref={texth2Ref} className="font-display text-[2.5vw] textbreak mobile:text-[10vw]">A branding and communications agency in Dubai, Yellow stands for all that’s bright in business – collaboration, ambition, opportunity and transformation. Dubai-born and Dubai-bred, we have its optimisim and drive in our DNA. We’ve helped businesses start, grow and thrive here.</h2>
                            <div className="fadeUp">
                                <LinkButton btnLink="#" btnText="Get To Know Us"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default AboutUs;