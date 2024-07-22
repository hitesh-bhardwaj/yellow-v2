import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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
            img: "/assets/images/clients/testi-1.png",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
        },
        {
            id: "02",
            name: "John Doe",
            company: "XYZ Industries",
            img: "/assets/images/clients/testi-2.png",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500." 
        },
        {
            id: "03",
            name: "John Doe",
            company: "XYZ Industries",
            img: "/assets/images/clients/testi-1.png",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i."
        },
        {
            id: "04",
            name: "John Doe",
            company: "XYZ Industries",
            img: "/assets/images/clients/testi-2.png",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500." 
        },
        {
            id: "05",
            name: "John Doe",
            company: "XYZ Industries",
            img: "/assets/images/clients/testi-1.png",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
        }
    ]

    const Card = ({img, company, name, content}) => {
        return (
            <div className="relative w-1/5 h-auto backdrop-blur-md overflow-hidden rounded-[1.2vw] bg-gradient-to-br from-[#35333380] to-[#24242420] to-45% border border-white/25 fadein mobile:rounded-[10px]">
                <Image 
                    priority={false}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover absolute pointer-events-none"
                    alt="Image Texture"
                    src="/assets/images/clients/texture-2.png"                
                />
                <div className="w-full h-full py-[3vw] px-[3.5vw] space-y-[2vw] mobile:py-[5vw] mobile:px-[4vw]">
                    <div className="flex items-center gap-[1vw] mobile:gap-[3vw] tablet:gap-[2vw]">
                        <Image
                            className="w-[5vw] h-[5vw] mobile:w-[12vw] mobile:h-[12vw] tablet:w-[8vw] tablet:h-[8vw]"
                            alt="brand img" 
                            priority={false}
                            src={img} 
                            quality={100}
                            width={100}
                            height={100}
                        />
                        <div className="flex flex-col items-start">
                            <p className="text-[1.35vw] font-medium mobile:text-[5vw] tablet:text-[3vw]">{name}</p>
                            <p className="text-[1.1vw] font-medium mobile:text-[3vw] tablet:text-[2vw]">{company}</p>
                        </div>
                    </div>
                    <p className="text-[1.45vw] whitespace-normal mobile:text-[3.2vw] tablet:text-[2.5vw]">
                        {content}
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
        xPercent += 0.06 * direction;
      };
  
    return (
        <div ref={slider} className="relative w-[full] ">
            <div ref={firstText} className="w-[200%] flex gap-x-[2vw] whitespace-nowrap mobile:h-[30vh] mobile:w-[400%] mobile:gap-x-[5vw] tablet:h-[30vh] tablet:w-[350%] tablet:gap-x-[3vw] ">
                {Reviews.map((review, index) => (
                    <Card key={index} img={review.img} company={review.company} name={review.name} content={review.content} />
                ))}
            </div>

            <div ref={secondText} className="w-[200%] absolute top-0 left-[200%] pl-[2vw] flex gap-x-[2vw] whitespace-nowrap mobile:h-[30vh] mobile:w-[400%] mobile:left-[400%] mobile:gap-x-[5vw] mobile:pl-[5vw] tablet:h-[30vh] tablet:w-[350%] tablet:gap-x-[3vw] tablet:left-[350%] tablet:pl-[3vw]">
                {Reviews.map((review, index) => (
                    <Card key={index} img={review.img} company={review.company} name={review.name} content={review.content} />
                ))}
            </div>

            <div ref={thirdText} className="w-[200%] absolute top-0 -left-[200%] pr-[2vw] flex gap-x-[2vw] whitespace-nowrap mobile:h-[30vh] mobile:w-[400%] mobile:left-[-400%] mobile:gap-x-[5vw] mobile:pr-[5vw] tablet:h-[30vh] tablet:w-[350%] tablet:gap-x-[3vw] tablet:left-[-350%] tablet:pr-[3vw]">
                {Reviews.map((review, index) => (
                    <Card key={index} img={review.img} company={review.company} name={review.name} content={review.content} />
                ))}
            </div>
      </div>
    )
}

export default Testimonial