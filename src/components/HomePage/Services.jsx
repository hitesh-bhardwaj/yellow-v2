import { useRef } from "react";
import BlackButton from "../Button/BlackButton";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const SingleAccordion = ({ id, title, content1, content2, btnLink, btnText }) => {
    return (
        <AccordionItem value={id}>
            <span className="h-[1px] bg-body w-full block lineDraw" />
            <AccordionTrigger data-para-anim className="text-[2.2vw] mobile:text-[6vw] mobile:text-left mobile:flex mobile:w-full text-body font-display font-normal py-[3%] mobile:py-[10%]  accordion [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:rotate-[90deg] [&[data-state=open]>.line>.line-internal>.icon-container>.icon>.minus]:rotate-90 [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:bg-body [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:text-white">
                {title}
            </AccordionTrigger>
            <AccordionContent className="text-[1.2vw] text-body tracking-[0.5px] leading-[1.3] space-y-[1.5vw] w-[70%] mb-[20px] mobile:w-full mobile:text-[4vw] mobile:space-y-[4vw]">
                <p data-para-anim className="fadeIn">
                    {content1}
                </p>
                <p data-para-anim className="fadeIn">
                    {content2}
                </p>
                <BlackButton btnLink={btnLink} btnText={btnText}/>
            </AccordionContent>
            <span className="h-[1px] mb-[-1px] bg-body w-full block lineDraw" />
        </AccordionItem>
    )
}

const Services = () => {
    const containerRef = useRef(null);

    return (
        <Section className="py-[5%]" id="services">
            <div ref={containerRef} className="container">
                <div className="space-y-[2.5vw] mt-[5vw] mobile:space-y-[7vw]">
                    <SectionTitle data-title-anim text="OUR EXPERTISE" />
                    <p data-para-anim className="text-[1.9vw] font-medium w-[35%] mobile:text-[4vw] mobile:w-[90%] ">
                        We grow amazing companies through exceptional branding and communications.
                    </p>
                </div>

                <div className="w-3/5 ml-auto mt-[12vw] mobile:w-full">
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
        </Section>
    )
}

export default Services;