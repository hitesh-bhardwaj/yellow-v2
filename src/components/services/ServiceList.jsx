import React from "react";
import BlackButton from "../Button/BlackButton";
import Image from "next/image";

export default function ServiceList() {
  return (
    <>
      <section className="w-full h-full py-[5%]" id="list">
        <div className="container">
          <div className="grid grid-cols-7 h-full gap-x-[3vw] gap-y-[7vw]">
            <div className="col-span-4 w-full h-full ">
              <div className="w-[50vw] h-[33vw] rounded-xl drop-shadow-2xl shadow-xl overflow-hidden relative imageanim">
                <Image
                  src="/assets/images/service/service-1.png"
                  alt="service-1"
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
            </div>
            <div className=" col-start-5 col-span-3 w-full">
              <h3
                data-title-anim
                className="text-[2.5vw] font-display mb-[1.5vw] "
              >
                Corporate Branding Strategy
              </h3>
              <p data-para-anim className="font-medium text-[1.2vw] mb-[2vw] ">
                We bring simplicity to complexity – distilling goals and values
                into brands that are relevant and inspiring, for customers and
                staff
              </p>
              <p data-para-anim className="font-medium text-[1.2vw] mb-[2vw] ">
                Through a brand workshop, a series of interactive sessions,
                research and a thorough understanding of your business, we work
                with you to define your business strategy - developing a set of
                tools, brand values, brand purpose and personality.
              </p>
              <div className="fadeup">
                <BlackButton btnLink={"/"} btnText={"View More"} />
              </div>
            </div>
            <div className=" col-span-4 w-full h-full">
              <div className="w-[50vw] h-[33vw] relative rounded-xl drop-shadow-2xl shadow-xl overflow-hidden imageanim">
                <Image
                  src="/assets/images/service/service-2.png"
                  alt="service-2"
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
            </div>
            <div className=" col-start-5 col-span-3 w-full">
              <h3
                data-title-anim
                className="text-[2.5vw] font-display mb-[1.5vw] "
              >
                Brand Identity
              </h3>
              <p data-para-anim className="font-medium text-[1.2vw] mb-[2vw] ">
                Unlocking your brand identity opens more doors than you can
                imagine. From design that results in a memorable logo that your
                organization or business can proudly get behind, to a visual
                language that captures your brand personality through a set of
                visual (photography, typography, patterning and production
                finishes) and non-visual (copywriting and messaging) tools, your
                visual language is how your audiences perceive, understand and
                recognize your brand, no matter the channel.
              </p>
              <div className="fadeup">
                <BlackButton btnLink={"/"} btnText={"View More"} />
              </div>
            </div>
            <div className="col-span-4 w-full h-full">
              <div className="w-[50vw] h-[33vw] relative rounded-xl drop-shadow-2xl shadow-xl overflow-hidden imageanim">
                <Image
                  src="/assets/images/service/service-3.png"
                  alt="service-3"
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
            </div>
            <div className=" col-start-5 col-span-3 w-full">
              <h3
                data-title-anim
                className="text-[2.5vw] font-display mb-[1.5vw] "
              >
                Brand Naming
              </h3>
              <p data-para-anim className="font-medium text-[1.2vw] mb-[2vw] ">
                At Yellow, we provide comprehensive support for precise branding
                needs. Whether you&apos;re naming a new venture, rejuvenating an
                existing brand, exploring new markets, or evaluating your
                current brand name, our brand naming consultancy ensures you get
                a compelling and enduring brand name that boosts sales.
              </p>
              <div className="fadeup">
                <BlackButton btnLink={"/"} btnText={"View More"} />
              </div>
            </div>
            <div className="col-span-4 w-full h-full">
              <div className="w-[50vw] h-[33vw] relative rounded-xl drop-shadow-2xl shadow-xl overflow-hidden imageanim">
                <Image
                  src="/assets/images/service/service-4.png"
                  alt="service-4"
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
            </div>
            <div className=" col-start-5 col-span-3 w-full">
              <h3
                data-title-anim
                className="text-[2.5vw] font-display mb-[1.5vw] "
              >
                Advertising
              </h3>
              <p data-para-anim className="font-medium text-[1.2vw] mb-[2vw] ">
                Advertising and communication is about bonding: building
                meaningful relationships with customers, suppliers and
                employees. This is what makes a business more desirable to work
                with and buy from.
              </p>
              <p data-para-anim className="font-medium text-[1.2vw] mb-[2vw] ">
                We deliver advertising and communication strategies that set
                your brand apart from the competitors.
              </p>
              <div className="fadeup">
                <BlackButton btnLink={"/"} btnText={"View More"} />
              </div>
            </div>
            <div className="col-span-4 w-full h-full">
              <div className="w-[50vw] h-[33vw] relative rounded-xl drop-shadow-2xl shadow-xl overflow-hidden imageanim">
                <Image
                  src="/assets/images/service/service-5.png"
                  alt="service-5"
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
            </div>
            <div className=" col-start-5 col-span-3 w-full">
              <h3
                data-title-anim
                className="text-[2.5vw] font-display mb-[1.5vw] "
              >
                Corporate Stationery & Report Design Services
              </h3>
              <p data-para-anim className="font-medium text-[1.2vw] mb-[2vw] ">
                Business cards, brochures, annual reports and book design. We
                write, design, and oversee the production of publications that
                audiences engage with.
              </p>
              <div className="fadeup">
                <BlackButton btnLink={"/"} btnText={"View More"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
