import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section from "../Section"
import BrandsMarquee from "./BrandsMarquee";
import SectionTitle from "../SectionTitle";
import Testimonial from "./Testimonial";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// gsap null target warning
gsap.config({
    nullTargetWarn: false,
});

const Clients = () => {

    const containerRef = useRef(null);
    const pathRef = useRef(null);

    useGSAP(()=> {
        const container = containerRef.current;
        const path = pathRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });

        tl.fromTo(path, {
            strokeDasharray: '7000',
            strokeDashoffset: '7000',
        }, {
            strokeDashoffset: '0',
            duration: 5,
            delay: 1.5,
            ease: 'power2.out',
        });
    });

    return (
        <Section className="py-[5%] dark" id="clients">
            <div ref={containerRef} className="bg-body pt-[5%] pb-[10%] text-white relative min-h-screen">
                <div className="container mb-[8vw]">
                    <div className="space-y-[1.5vw]">
                        <p data-para-anim className="text-[1.2vw] font-medium fadeIn">Clients</p>
                        <h4 data-para-anim className="text-[2.5vw] font-display leading-[1.35] w-1/2 ">Small or large, local or far, all of our clients are connected with our purpose of perfect execution.</h4>
                    </div>
                </div>
                <div className="mb-[18vw] w-screen overflow-hidden">
                    <BrandsMarquee />
                </div>
                <div className="w-screen overflow-hidden relative z-10">
                    <div className="w-full flex justify-center mb-[8vw]">
                        <SectionTitle text="Client Reviews"/>
                    </div>
                    <div>
                        <Testimonial />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Clients;

