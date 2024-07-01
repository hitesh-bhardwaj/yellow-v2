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
        <Section className="py-[5%]" id="clients">
            <div ref={containerRef} className="bg-[#B48BEF] pt-[5%] pb-[10%] text-white relative min-h-screen">
                <div className="absolute right-0 left-0 -top-[2vw] bottom-0 object-contain -z-[0] h-[100%] pointer-events-none">
                    <svg viewBox="0 0 1920 2330" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path ref={pathRef} d="M-96.1889 -33C-103.902 232.72 -174.765 764.161 491.448 764.161C1267.09 764.161 1367.36 -3.49405 1886.54 670.642C2393.55 1328.98 1292.64 2116.43 974.476 1786.37C656.313 1456.3 1110.91 1121.51 1346.15 1268.76C1602.61 1429.29 1975.24 2131.94 1975.24 2446" stroke="#FFCD11" strokeWidth="40" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className="container mb-[8vw]">
                    <div className="space-y-[1.5vw]">
                        <p className="text-[1.2vw] font-medium fadeUp">Clients</p>
                        <h4 className="text-[2.5vw] font-display leading-[1.35] w-1/2 para-anim">Small or large, local or far, all of our clients are connected with our purpose of perfect execution.</h4>
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

