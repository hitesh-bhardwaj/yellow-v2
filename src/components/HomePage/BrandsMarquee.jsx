import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const BrandsMarquee = () => {

    const Card = ({src}) => {
        return (
            <div className="col-span-1 relative h-full backdrop-blur-md overflow-hidden flex justify-center items-center rounded-[1vw] bg-gradient-to-br from-[#35333350] to-[#24242420] to-45% border border-white/25">
                <Image 
                    priority={false}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover absolute pointer-events-none"
                    alt="Image Texture"
                    src="/assets/images/clients/texture.png"                
                />
                <Image
                    className="object-cover w-full h-full"
                    alt="brand img" 
                    priority={false}
                    src={src} 
                    quality={100}
                    fill
                />
            </div>
        )
    }

    const Clients = [
        "/assets/images/clients/numu.svg",
        "/assets/images/clients/cafu.svg",
        "/assets/images/clients/beema.svg",
        "/assets/images/clients/mavroc.svg",
        "/assets/images/clients/clement.svg",
    ]

    const slider = useRef(null);
    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    let xPercent = 0;
    let direction = -1;
  
    useGSAP(() => {
        gsap.to(slider.current, {
          scrollTrigger: {
            trigger: slider.current,
            scrub: 0.25,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (e) => (direction = e.direction * -1),
          },
          x: "-400px",
        });
        requestAnimationFrame(animate);
      });
    
      const animate = () => {
        if (xPercent < -100) {
          xPercent = 0;
        } else if (xPercent > 0) {
          xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        gsap.set(thirdText.current, { xPercent: xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.04 * direction;
      };
    
    return (
        <div ref={slider} className="relative whitespace-nowrap mobile:w-[185%] tablet:w-[150%] fadein">

          <div ref={firstText} className="w-full grid h-[18vw] grid-cols-5 items-center gap-[1.5vw] pr-[1.5vw] mobile:h-[35vw] mobile:gap-[2.5vw] mobile:pr-[2.5vw] tablet:h-[27vw] tablet:gap-[2.5vw] tablet:pr-[2.5vw]">
            {Clients.map((client, index) => (
                <Card key={index} src={client}/>
            ))}
          </div>

          <div ref={secondText} className="w-full top-0 left-full absolute grid grid-cols-5 items-center gap-[1.5vw] pr-[1.5vw] h-[18vw] mobile:h-[35vw] mobile:gap-[2.5vw] mobile:pr-[2.5vw] tablet:h-[27vw] tablet:gap-[2.5vw] tablet:pr-[2.5vw]">
            {Clients.map((client, index) => (
                <Card key={index} src={client}/>
            ))}
          </div>

          <div ref={thirdText} className="w-full top-0 left-[200%] absolute grid grid-cols-5 items-center gap-[1.5vw] pr-[1.5vw] h-[18vw] mobile:h-[35vw] mobile:gap-[2.5vw] mobile:pr-[2.5vw] tablet:h-[27vw] tablet:gap-[2.5vw] tablet:pr-[2.5vw]">
            {Clients.map((client, index) => (
                <Card key={index} src={client}/>
            ))}
          </div>

        </div>
    )
}

export default BrandsMarquee;
