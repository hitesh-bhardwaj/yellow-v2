import Section from "@/components/Section";
import { useLenis } from "lenis/react";
import { useState } from "react";
import PrimaryButton from "@/components/Button/PrimaryButton";
import dynamic from "next/dynamic";
import ScrollButton from "@/components/Button/ScrollButton";

const VideoModal = dynamic(() => import('@/components/VideoPlayer'), {
    ssr: false,
  });

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const lenis = useLenis();

    const handleOpen = () => {
        setIsModalOpen(true);
        lenis.stop();
    };

    const handleClose = () => {
        setIsModalOpen(false);
        lenis.start();
    };

    return (
        <Section className="py-0" id={"hero"}>
            <div className="w-screen h-screen relative">
                <div className="overflow-hidden w-full h-full absolute">
                    <video 
                        autoPlay
                        muted
                        loop
                        playsInline
                        loading="lazy"
                        className="w-full h-full aspect-video object-cover"
                        src="/assets/showreel.mov"
                        >
                    </video>
                </div>
                <div className="container h-full flex justify-start items-center relative z-10">
                    <div className="w-[45%]">
                        <h1 className="text-white font-display text-[2.8vw] tracking-wider leading-[1.4] drop-shadow-lg">
                            We are Yellow. A full-service branding and communication agency in Dubai.
                        </h1>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <PrimaryButton onClick={handleOpen} text="Play Reel" className=""/>
                    </div>
                    <div className="absolute bottom-[5%] cursor-pointer left-1/2 -translate-x-1/2">
                        <ScrollButton />
                    </div>
                </div>
                <VideoModal
                    isOpen={isModalOpen}
                    onClose={handleClose}
                    videoSrc="/assets/showreel.mov"
                />
            </div>
        </Section>
    )
}

export default Hero;