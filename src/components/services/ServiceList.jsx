import React from "react";
import BlackButton from "../Button/BlackButton";
import Image from "next/image";

const services = [
  {
    id: 1,
    imageSrc: "/assets/images/service/service-1.png",
    alt: "service-1",
    title: "Corporate Branding Strategy",
    description1:
      "We bring simplicity to complexity – distilling goals and values into brands that are relevant and inspiring, for customers and staff",
    description2:
      "Through a brand workshop, a series of interactive sessions, research and a thorough understanding of your business, we work with you to define your business strategy - developing a set of tools, brand values, brand purpose and personality.",
  },
  {
    id: 2,
    imageSrc: "/assets/images/service/service-2.png",
    alt: "service-2",
    title: "Brand Identity",
    description1:
      "Unlocking your brand identity opens more doors than you can imagine. From design that results in a memorable logo that your organization or business can proudly get behind, to a visual language that captures your brand personality through a set of visual (photography, typography, patterning and production finishes) and non-visual (copywriting and messaging) tools, your visual language is how your audiences perceive, understand and recognize your brand, no matter the channel.",
  },
  {
    id: 3,
    imageSrc: "/assets/images/service/service-3.png",
    alt: "service-3",
    title: "Brand Naming",
    description1:
      "At Yellow, we provide comprehensive support for precise branding needs. Whether you&apos;re naming a new venture, rejuvenating an existing brand, exploring new markets, or evaluating your current brand name, our brand naming consultancy ensures you get a compelling and enduring brand name that boosts sales.",
  },
  {
    id: 4,
    imageSrc: "/assets/images/service/service-4.png",
    alt: "service-4",
    title: "Advertising",
    description1:
      "Advertising and communication is about bonding: building meaningful relationships with customers, suppliers and employees. This is what makes a business more desirable to work with and buy from.",
    description2:
      "We deliver advertising and communication strategies that set your brand apart from the competitors.",
  },
  {
    id: 5,
    imageSrc: "/assets/images/service/service-5.png",
    alt: "service-5",
    title: "Corporate Stationery & Report Design Services",
    description1:
      "Business cards, brochures, annual reports and book design. We write, design, and oversee the production of publications that audiences engage with.",
  },
];

export default function ServiceList() {
  return (
    <>
      <section className="w-full h-full py-[5%]" id="list">
        <div className="container">
          <div className="grid grid-cols-7 h-full gap-x-[3vw] gap-y-[7vw] mobile:flex mobile:flex-col">
            {services.map((service, index) => (
              <React.Fragment key={service.id}>
                <div className="col-span-4 w-full h-full ">
                  <div className={`w-[50vw] h-[33vw] rounded-xl overflow-hidden relative imageanim mobile:w-[85vw] mobile:h-[140vw] ${index % 2 === 0 ? '' : 'mobile:mt-[5vw]'}`}>
                    <Image
                      src={service.imageSrc}
                      alt={service.alt}
                      className="object-cover w-full h-full"
                      fill
                    />
                  </div>
                </div>
                <div className="col-start-5 col-span-3 w-full">
                  <h3
                    data-title-anim
                    className="text-[2.5vw] font-display mb-[1.5vw] mobile:text-[9vw] mobile:mb-[5vw] "
                  >
                    {service.title}
                  </h3>
                  <p data-para-anim className="font-medium text-[1.2vw] mb-[2vw] mobile:text-[4.5vw] ">
                    {service.description1}
                  </p>
                  {service.description2 && (
                    <p data-para-anim className="font-medium text-[1.2vw] mb-[2vw] mobile:text-[4.5vw] mobile:mb-[7vw]">
                      {service.description2}
                    </p>
                  )}
                  <div className="fadeup">
                    <BlackButton btnLink={"/"} btnText={"View More"} />
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
