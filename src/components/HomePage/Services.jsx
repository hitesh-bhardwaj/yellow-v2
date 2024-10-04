/* eslint-disable no-unused-vars */
import { useRef } from "react";
import BlackButton from "../Button/BlackButton";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import AccordionLine from "../AcoordionLine";

const serviceData = [
    {
      id: 1,
      title: "Corporate Branding Strategy",
      link:"/what-we-do/brand-strategy",
      description:"<p data-para-anim>A brand is a decision-making shortcut for people. What are the first names that pop in your head when you think of the freshest juices on supermarket shelves? Barakat? A children&apos;s play space? OliOli. Fuel delivery…Cafu. That&apos;s Yellow - creating inimitable brands that are often the first one to pop in your head when you think of the category.</p><br><p data-para-anim>This isn&apos;t done through aesthetics and marketing, although both are undeniably important. It&apos;s always about understanding the problem we are trying to solve - not for the business owners but the consumers. Our rigorous process involves research, workshops, benchmarking, understand global trends, cultural movements across generations followed by creating a strong foundation that drives everything you do, from the creation of the elements that make up your brand to the stories you tell to your internal culture and customer experience. </p>",
    },
    {
      id: 2,
      title: "Brand Identity",
      link:"/what-we-do/brand-identity",
      description:"<p data-para-anim>A brand has always been more than just a logo. This is truer now than ever before, as over 80% of consumers research products online before making an in-store purchase. This shift makes all other brand cues incredibly important, from your voice and the way your products are photographed, to the illustrations and graphic elements that shape your brand's personality. From the tangible to the intangible, we carefully consider, craft, and create all the touchpoints surrounding your product. Our goal is to ensure your brand is always leading in the consideration set for your category.</p>",
    },
    {
      id: 3,
      title: "Brand Naming",
      link:"/what-we-do/naming",
      description:"<p data-para-anim>From diving into the meaning of obscure words in different languages to stories, lyrics, poetry, art, classical and historical texts to Gen Z colloquialisms, we explore every single angle when it comes to naming your brand. This is why each name crafted by our team has such a great story behind it. From brand and product names to business names to even street naming within communities, we pride ourselves on our extensive experience. Our thorough process includes pre-screening for identical trademarks, linguistic and domain checks, descriptor and TLD recommendations to ensure the names we present are yours to fall in love with.</p><br><p data-para-anim>Some of our greatest hits include <a href='/our-work/cafu-branding-and-digital' class='link-style'>CAFU</a>, <a href='/our-work/olioli-branding' class='link-style'>OliOli</a>, <a href='/our-work/pan-home-case-study' class='link-style'>Pan Home</a>, <a href='/our-work/numu-early-childhood-centre-brand-case-study' class='link-style'>Numu</a> and Irth.</p>"
    },
    {
      id: 4,
      title: "Advertising",
      link:"/what-we-do/communication",
      description: "<p data-para-anim>Driven by data, research, and insights and guided by experience and creativity, our communication strategies and campaigns always intersect cultural movements, consumer needs and your brand's best self. This is why they strike a chord, create impact and deliver results. From bridge banners to reels, activation ideas or radio, we can go all out or rein it in, depending on what feels right for your brand, needs and budgets. Our roster includes global brands such as <a class='link-style' href='/our-work/mitsubishi-motors'>Mitsubishi Motors</a> to local powerhouses like <a class='link-style' href='/our-work/emaar-malls-group'>Emaar Malls Group</a> to many independent, homegrown brands.</p>"
    },
    {
      id: 5,
      title: "Content & Production",
      link:"/what-we-do/digital",
      description: "<p data-para-anim>We work with you to bring your brand to life across social media channels based on the strategy and objectives. We support brands with ideation and exploring trends that work within the industry and with the audience. Following ideation, we manage the complete production process from sourcing the right videographer/photographer, location, talent, influencer and overseeing the total output. We produce content that converts.</p>"
    },
  ];

const SingleAccordion = ({ id, title, content, btnLink }) => {
    return (
        <AccordionItem value={id}>
            <AccordionLine className="relative z-[-1] my-[1vw] tablet:hidden mobile:hidden"/>
            <div className="w-full bg-black lineDraw h-[1px] hidden mobile:block tablet:block"></div>
            <AccordionTrigger data-para-anim className="text-[2.2vw] mobile:text-[6vw] mobile:text-left mobile:flex mobile:w-full tablet:text-[4vw] tablet:text-left text-body font-display font-normal py-[3%] mobile:py-[5%] accordion [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:rotate-[90deg] [&[data-state=open]>.line>.line-internal>.icon-container>.icon>.minus]:rotate-90 [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:bg-body [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:text-white">
                {title}
            </AccordionTrigger>
            <AccordionContent className="text-[1.2vw] text-body tracking-[0.5px] leading-[1.3] space-y-[1.5vw] w-[70%] mb-[20px] mobile:w-full mobile:text-[4vw] mobile:space-y-[4vw] tablet:text-[2.7vw] tablet:w-[90%]">
                <div 
                    className="fadeIn"
                    dangerouslySetInnerHTML={{__html:content}}
                />
                <BlackButton btnLink={btnLink} btnText="View More" className="text-[1.05vw] tablet:text-[2.5vw] mobile:text-[4vw]"/>
            </AccordionContent>
        </AccordionItem>
    )
}

const Services = () => {
    const containerRef = useRef(null);

    return (
        <Section className="py-[5%] mobile:pb-[15%]" id="services">
            <div ref={containerRef} className="container">
                <div className="space-y-[2.5vw] mt-[5vw] mobile:space-y-[7vw]">
                    <SectionTitle data-title-anim text="OUR EXPERTISE" />
                    <p data-para-anim className="text-[1.9vw] font-medium w-[35%] mobile:text-[4vw] mobile:w-[90%] tablet:text-[3vw] tablet:w-[60%] ">
                        We grow amazing companies through exceptional branding and communications.
                    </p>
                </div>

                <div className="w-3/5 ml-auto mt-[12vw] mobile:w-full tablet:w-full">
                    <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                        {serviceData.map((service) => (
                            <SingleAccordion
                                key={service.id}
                                id={`item-${service.id}`}
                                title={service.title}
                                content={service.description}
                                btnLink={service.link}
                            />
                        ))}
                    </Accordion>
                    <div className="w-full bg-black lineDraw h-[1px] hidden mobile:block tablet:block"></div>
                    <AccordionLine/>
                </div>
            </div>
        </Section>
    )
}

export default Services;