import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import BlackButton from "../Button/BlackButton";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SingleAccordion = ({ id ,title, content1, content2, btnLink, btnText}) => {
    return (
        <AccordionItem value={id}>
            <span className="h-[1px] bg-body w-full block"/>
                <AccordionTrigger className="text-[2.2vw] text-body font-display py-[3%]">
                    {title}
                </AccordionTrigger>
                <AccordionContent className="text-[1.2vw] text-body tracking-[0.5px] leading-[1.3] space-y-[1.5vw] w-[70%] mb-[20px]">
                    <p>
                        {content1}
                    </p>
                    <p>
                        {content2}
                    </p>
                    <BlackButton btnLink={btnLink} btnText={btnText}/>
                </AccordionContent>
            <span className="h-[1px] mb-[-1px] bg-body w-full block"/>
        </AccordionItem>
    )
}

const Services = () => {
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
            strokeDasharray: '4500',
            strokeDashoffset: '4500',
        }, {
            strokeDashoffset: '0',
            duration: 2,
            delay: 0.2,
            ease: 'power2.out',
        });
    });

    return (
        <Section className="py-[5%]" id="services">
            <div ref={containerRef} className="relative h-full">
                <div className="absolute right-0 left-0 -top-[5vw] bottom-0 object-contain -z-10 h-[100%]">
                    <svg viewBox="0 0 1920 1563" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path ref={pathRef} d="M1969.5 159.953C1699.5 469.62 1031.1 996.053 517.5 624.453C-124.5 159.953 472 -56.4571 617.5 44.4994C797.708 169.538 808 518.953 463 788.453C118 1057.95 -42.5 1303.45 -42.5 1542.95" stroke="#FFCD11" strokeWidth="40" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className="container">
                    <div className="space-y-[2.5vw] mt-[5vw]">
                        <SectionTitle text="OUR EXPERTISE"/>
                        <p className="text-[1.9vw] font-medium w-[35%]">
                            We grow amazing companies through exceptional branding and communications.
                        </p>
                    </div>

                    <div className="w-3/5 ml-auto mt-[12vw]">
                        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                            <SingleAccordion 
                                id="item-1"
                                title="Corporate Branding Strategy"
                                content1="We bring simplicity to complexity – distilling goals and values into brands that are relevant and inspiring, for customers and staff."
                                content2="Through a brand workshop, a series of interactive sessions, research and a thorough understanding of your business, we work with you to define your business strategy – developing a set of tools, brand values, brand purpose and personality traits that drive everything from your brand identity, communication, digital presence and even your social media presence."
                                btnLink="#"
                                btnText="View More"
                            />
                            <SingleAccordion 
                                id="item-2"
                                title="Brand Identity"
                                content1="We bring simplicity to complexity – distilling goals and values into brands that are relevant and inspiring, for customers and staff."
                                content2="Through a brand workshop, a series of interactive sessions, research and a thorough understanding of your business, we work with you to define your business strategy – developing a set of tools, brand values, brand purpose and personality traits that drive everything from your brand identity, communication, digital presence and even your social media presence."
                                btnLink="#"
                                btnText="View More"
                            />
                            <SingleAccordion 
                                id="item-3"
                                title="Brand Naming"
                                content1="We bring simplicity to complexity – distilling goals and values into brands that are relevant and inspiring, for customers and staff."
                                content2="Through a brand workshop, a series of interactive sessions, research and a thorough understanding of your business, we work with you to define your business strategy – developing a set of tools, brand values, brand purpose and personality traits that drive everything from your brand identity, communication, digital presence and even your social media presence."
                                btnLink="#"
                                btnText="View More"
                            />
                            <SingleAccordion 
                                id="item-4"
                                title="Advertising"
                                content1="We bring simplicity to complexity – distilling goals and values into brands that are relevant and inspiring, for customers and staff."
                                content2="Through a brand workshop, a series of interactive sessions, research and a thorough understanding of your business, we work with you to define your business strategy – developing a set of tools, brand values, brand purpose and personality traits that drive everything from your brand identity, communication, digital presence and even your social media presence."
                                btnLink="#"
                                btnText="View More"
                            />
                            <SingleAccordion 
                                id="item-5"
                                title="Corporate Stationery & Report Design Services"
                                content1="We bring simplicity to complexity – distilling goals and values into brands that are relevant and inspiring, for customers and staff."
                                content2="Through a brand workshop, a series of interactive sessions, research and a thorough understanding of your business, we work with you to define your business strategy – developing a set of tools, brand values, brand purpose and personality traits that drive everything from your brand identity, communication, digital presence and even your social media presence."
                                btnLink="#"
                                btnText="View More"
                            />
                        </Accordion>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Services;