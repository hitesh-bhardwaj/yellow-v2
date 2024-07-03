import Section from "@/components/Section";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import PrimaryButton from "@/components/Button/PrimaryButton";
import dynamic from "next/dynamic";
import ScrollButton from "@/components/Button/ScrollButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { initMagneticButton, SplitInLine } from "../utils";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(useGSAP, CustomEase);

const VideoModal = dynamic(() => import('@/components/VideoPlayer'), {
    ssr: false,
  });

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const lenis = useLenis();
    const text = useRef();
    const cover = useRef();

    const handleOpen = () => {
        setIsModalOpen(true);
        lenis.stop();
    };

    const handleClose = () => {
        setIsModalOpen(false);
        lenis.start();
    };
     
     useEffect(()=>{
        initMagneticButton();
     }, []);

    CustomEase.create("primary-ease", "0.62, 0.05, 0.01, 0.99");

    useGSAP(()=> {
        SplitInLine(text.current);

        const tl = gsap.timeline({
            defaults: {
                ease: "primary-ease",
            }
        });
        tl.from(".lineWord .line .line-internal",{
            yPercent: 100,
            duration: 1.47,
            stagger: 0.07,
        })
        .to(".cover span", {
            scaleY: 0,
            duration: 1.47,
            delay: 0,
            stagger: {
                each: '0.02',
                from: 'random',
            },
        })
        .to(text.current, {
            color: "#fff",
            duration: 1,
            delay: -1.2,
        })
        .from("#header-logo", {
            yPercent: 100,
            duration: 1,
            delay: -0.5,
        })
        .from("#header-hamburger", {
            opacity: 0,
            duration: 1,
            delay: -0.8,
        })

    })

    return (
        <Section className="py-0" id={"hero"}>
            <div className="w-screen h-screen relative">
                <div className="absolute bottom-[5%] cursor-pointer left-1/2 -translate-x-1/2 z-[11]">
                    <ScrollButton />
                </div>
                <div className="overflow-hidden w-full h-full absolute">
                    <div ref={cover} className="absolute w-full h-full flex items-start justify-start pointer-events-none bg-transparent cover">
                        <span className="h-full block w-1/5 bg-white origin-bottom"/>
                        <span className="h-full block w-1/5 bg-white origin-center"/>
                        <span className="h-full block w-1/5 bg-white origin-top"/>
                        <span className="h-full block w-1/5 bg-white origin-center"/>
                        <span className="h-full block w-1/5 bg-white origin-bottom"/>
                    </div>
                    <video
                        id="hero-video"
                        poster="/assets/images/homepage/poster.webp"
                        autoPlay
                        muted
                        loop
                        playsInline
                        loading="lazy"
                        className="w-full h-full aspect-video object-cover"
                        >
                        <source src="/assets/showreel-small.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="container h-full flex justify-start items-center relative z-10" data-magnetic-target data-magnetic-strength="200">
                    <div className="w-[45%]">
                        <h1 ref={text} className="text-body font-display text-[2.8vw] leading-[1.2] drop-shadow-lg lineWord">
                            We are Yellow. A full-service branding and communication agency in Dubai.
                        </h1>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <PrimaryButton onClick={handleOpen} text="Play Reel" className="magnetic-inner"/>
                    </div>
                </div>
                {isModalOpen && (
                    <VideoModal
                        poster="/assets/images/homepage/poster.webp"
                        isOpen={isModalOpen}
                        onClose={handleClose}
                        videoSrc="/assets/showreel.mp4"
                    />
                )}
            </div>
        </Section>
    )
}

export default Hero;