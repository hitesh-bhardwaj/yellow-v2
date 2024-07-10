import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Testimonial = () => {

    const Reviews = [
        {
            id: "01",
            name: "John Doe",
            company: "XYZ Industries",
            img: "/assets/images/client/testi-1.png",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
        },
        {
            id: "02",
            name: "John Doe",
            company: "XYZ Industries",
            img: "/assets/images/client/testi-2.png",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500." 
        },
        {
            id: "03",
            name: "John Doe",
            company: "XYZ Industries",
            img: "/assets/images/client/testi-2.png",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i."
        },
        {
            id: "04",
            name: "John Doe",
            company: "XYZ Industries",
            img: "/assets/images/client/testi-2.png",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500." 
        },
        {
            id: "05",
            name: "John Doe",
            company: "XYZ Industries",
            img: "/assets/images/client/testi-1.png",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
        }
    ]

    const Card = ({img, company, name, content}) => {
        return (
            <div className="relative h-full backdrop-blur-md overflow-hidden rounded-[1.2vw] bg-gradient-to-br from-[#35333380] to-[#24242420] to-45% border border-white/25">
                <Image 
                    priority={false}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover absolute pointer-events-none"
                    alt="Image Texture"
                    src="/assets/images/clients/texture-2.png"                
                />
                <div className="w-full h-full p-[4vw] space-y-[3vw]">
                    <div className="flex items-center gap-[1vw]">
                        <Image
                            className="w-[5vw] h-[5vw]"
                            alt="brand img" 
                            priority={false}
                            src="/assets/images/clients/testi-1.png" 
                            quality={100}
                            width={100}
                            height={100}
                        />
                        <div className="flex flex-col items-start">
                            <p className="text-[1.35vw] font-medium">John Doe</p>
                            <p className="text-[1.1vw] font-medium">XYZ Industries</p>
                        </div>
                    </div>
                    <p className="text-[1.45vw] font-medium whitespace-normal">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        )
    }

    const slider = useRef(null);
    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    let xPercent = 0;
    let direction = 1;

    useGSAP(() => {
        gsap.to(slider.current, {
          scrollTrigger: {
            trigger: slider.current,
            scrub: 0.25,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (e) => (direction = e.direction * 1),
          },
          x: "400px",
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
        xPercent += 0.03 * direction;
      };
  
    return (
        <div ref={slider} className="relative w-[full]">
            <div ref={firstText} className="w-[200%] flex gap-x-[2vw] whitespace-nowrap">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <div ref={secondText} className="w-[200%] absolute top-0 left-[200%] pl-[2vw] flex gap-x-[2vw] whitespace-nowrap">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <div ref={thirdText} className="w-[200%] absolute top-0 -left-[200%] pr-[2vw] flex gap-x-[2vw] whitespace-nowrap">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
      </div>
    )
}

export default Testimonial