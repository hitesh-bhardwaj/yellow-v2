import Section from "@/components/Section";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import PrimaryButton from "@/components/Button/PrimaryButton";
import dynamic from "next/dynamic";
import ScrollButton from "@/components/Button/ScrollButton";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { initMagneticButton, SplitInLine } from "../splitTextUtils";
import { CustomEase } from "gsap/dist/CustomEase";

gsap.registerPlugin(useGSAP, CustomEase);

const primaryEase = CustomEase.create("primary-ease", "0.62, 0.05, 0.01, 0.99");

const VideoModal = dynamic(() => import('@/components/VideoPlayer'), {
    ssr: false,
});

function supportsHEVCAlpha() {
    const navigator = window.navigator;
    const ua = navigator.userAgent.toLowerCase()
    const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)
    const isSafari = ((ua.indexOf('safari') != -1) && (!(ua.indexOf('chrome')!= -1) && (ua.indexOf('version/')!= -1)))
    return isSafari && hasMediaCapabilities
}

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

    useGSAP(()=> {
        SplitInLine(text.current);

        const tl = gsap.timeline({
            defaults: {
                ease: primaryEase,
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
            color: "#ffffff",
            duration: 1,
            delay: -1.2,
        })
        .from("#header-logo", {
            yPercent: 100,
            duration: 0.5,
            delay: -0.1,
        })
        .from("#search-btn", {
            opacity: 0,
            duration: 0.5,
            delay: -0.3,
        })
        .from("#header-hamburger", {
            opacity: 0,
            duration: 0.5,
            delay: -0.3,
        })
    });

    useEffect(() => {
        const player = document.getElementById('hero-video');
        player.src = supportsHEVCAlpha() ? '/assets/showreel-small.mp4' : '/assets/showreel-small.webm';
      });

    return (
        <Section className="py-0 dark" id={"hero"}>
            <div className="w-full h-screen relative">
                <div className="overflow-hidden w-full h-full absolute">
                    <div ref={cover} className="absolute w-full h-full flex pointer-events-none items-start justify-start bg-transparent cover z-[10]">
                        <span className="h-full block w-1/5 bg-white origin-bottom"/>
                        <span className="h-full block w-1/5 bg-white origin-center"/>
                        <span className="h-full block w-1/5 bg-white origin-top"/>
                        <span className="h-full block w-1/5 bg-white origin-center"/>
                        <span className="h-full block w-1/5 bg-white origin-bottom"/>
                    </div>
                    <video
                        id="hero-video"
                        poster="/assets/images/homepage/showreel-poster.webp"
                        autoPlay
                        muted
                        loop
                        playsInline
                        loading="lazy"
                        className="w-full h-full aspect-video object-cover"
                        >
                    </video>
                </div>
                <div className="container h-full flex justify-start items-center relative mobile:flex-col mobile:pt-[35%] mobile:gap-[7vw] tablet:flex-col tablet:pt-[35%] tablet:gap-[7vw]" data-magnetic-target data-magnetic-strength="200">
                    <div className="w-[45%] relative z-[11] mobile:flex mobile:items-center mobile:justify-center mobile:w-[90%] tablet:flex tablet:items-center tablet:justify-center tablet:w-[70%]">
                        <h1 ref={text} className="text-body font-display text-[2.8vw] leading-[1.3] drop-shadow-lg lineWord mobile:text-[11vw] mobile:text-center tablet:text-center tablet:text-[5vw]">
                            We are Yellow. A strategic branding and communications agency in Dubai.
                        </h1>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 mobile:static mobile:translate-x-0 tablet:static tablet:translate-x-0">
                        <PrimaryButton onClick={handleOpen} text="Play Reel" className="magnetic-inner"/>
                    </div>
                </div>
                <div className="absolute bottom-[5%] cursor-pointer left-1/2 -translate-x-1/2 z-[9] mobile:bottom-[8%]">
                    <ScrollButton />
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