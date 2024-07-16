import React from "react";
import LinkButton from "../Button/LinkButton";
import Image from "next/image";

export default function Detail() {
  return (
    <>
      <section className=" w-full h-full pb-[5%]" id="detail">
        <div className="grid grid-cols-3 container mobile:flex mobile:flex-col">
          <div className="col-span-2 flex flex-col w-[80%] gap-[1.5vw] mobile:order-2 mobile:w-full mobile:my-[12vw] mobile:gap-[5vw]">
            <h2 data-title-anim className="text-[2.5vw] font-display mobile:text-[8vw] ">Brand positioning</h2>
            <p data-para-anim className="text-[1.2vw] font-medium  mobile:text-[4.5vw] mobile:font-normal">
              Knowing where your brand stands right now is key to making more
              empowered choices that will serve your goals in the future.
              Through brand workshop, audit and research, make the smart
              decisions for your brand through a data-based, results-driven
              brand workshop, audit and research.
            </p>
            <p data-para-anim className="text-[1.2vw] font-medium mobile:text-[4.5vw]  mobile:font-normal">
              Building a brand strategy in Dubai and similarly high-stake
              markets requires a discovery process that uses a big-thinking,
              growth-driven approach. The brand audit is an opportunity to not
              just take an honest look at your brand’s direction, but more
              importantly to challenge it. Yellow has the framework to allow you
              to accomplish this delicate process with precision and expertise.
            </p>
            <p data-para-anim className="text-[1.2vw] font-medium mb-[2vw] mobile:text-[4.5vw]  mobile:font-normal ">
              Schedule a brand workshop here.
            </p>
            <div className="fadeup">
            <LinkButton
              btnLink={"/"}
              btnText={"Connect With Yellow"}
              className={"text-[1.5vw] font-medium mobile:text-[5vw] "}
            />

            </div>
          </div>
          <div className="col-start-3 flex justify-end mobile:order-1 ">
            <div className="w-[25vw] h-[25vw] rounded-[15px] overflow-hidden relative imganim mobile:w-[85vw] mobile:h-[85vw] mobile:mt-[10vw]">
              <Image
                src="/assets/images/service/service-detail/detail-1.png"
                alt="detail-1"
                className="absolute h-full w-full object-cover"
                fill
              />
            </div>
          </div>
          <div className="h-[2px] col-span-3 bg-black my-[4vw] lineDraw mobile:order-3"></div>
          <div className="col-span-2 flex flex-col w-[80%] gap-[1.5vw] mobile:order-4 mobile:w-full mobile:my-[12vw] mobile:gap-[5vw]">
            <h2 data-title-anim className="text-[2.5vw] font-display mobile:text-[8vw] ">Brand architecture</h2>
            <p data-para-anim className="text-[1.2vw] font-medium mobile:text-[4.5vw] mobile:font-normal ">
              From holding companies spanning multiple sectors to product ranges
              and sub-brands, defining your brand architecture brings order to
              your organization. This process allows you to transfer equity
              between business units, thereby allowing a newer, less established
              service to capitalize on the recognition of a more well-known one.
            </p>
            <p data-para-anim className="text-[1.2vw] font-medium mobile:text-[4.5vw] mobile:font-normal ">
              Through brand architecture shown in visual format such as diagrams
              and illustrations, we create association between business units
              where you need it and distance where you don’t. A well-defined,
              thoughtfully designed brand architecture diagram allows you to
              define the brand accurately, in a way that the target audience can
              understand and truly resonate with.
            </p>
            <p data-para-anim className="text-[1.2vw] font-medium mb-[2vw] mobile:text-[4.5vw] mobile:font-normal">
              Define brand perception and brand reputation with a smartly
              designed brand architecture.
            </p>
            <div className="fadeup">
            <LinkButton
              btnLink={"/"}
              btnText={"Connect With Yellow"}
              className={"text-[1.5vw] font-medium "}
            />

            </div>
            
          </div>

          <div className="col-start-3 flex justify-end mobile:order-3">
            <div className="w-[25vw] h-[25vw] rounded-[15px] overflow-hidden relative imganim mobile:w-[85vw] mobile:h-[85vw] mobile:mt-[10vw]">
              <Image
                src="/assets/images/service/service-detail/detail-2.png"
                alt="detail-2"
                className="absolute h-full w-full object-cover"
                fill
              />
            </div>
          </div>
          <div className="h-[2px] col-span-3 bg-black my-[4vw] lineDraw mobile:order-5"></div>
          <div className="col-span-2 flex flex-col w-[80%] gap-[1.5vw] mobile:order-6 mobile:w-full mobile:my-[12vw] mobile:gap-[5vw]">
            <h2 data-title-anim className="text-[2.5vw] font-display mobile:text-[8vw] ">Staff engagement</h2>
            <p data-para-anim className="text-[1.2vw] font-medium  mobile:text-[4.5vw] mobile:font-normal">
              When your team fully understands and embraces your brand, they
              become your greatest champions. Through structured workshops and
              seminars, we make sure your staff grasps your brand positioning,
              what makes it different from your competitors and how it looks,
              sounds and acts when interacting with the market it serves.
            </p>
            <p data-para-anim className="text-[1.2vw] font-medium mobile:text-[4.5vw] mobile:font-normal ">
              We believe that a brand’s own people are its greatest ambassadors.
              Combining data analytics, talent insights and company culture
              exercises, we’ll work directly with you to make sure that your
              staff are your brand’s most passionate voice.
            </p>
            <p  data-para-anim className="text-[1.2vw] font-medium mb-[2vw] mobile:text-[4.5vw] mobile:font-normal ">
              Engage your brand’s very own champions.
            </p>
            <div className="fadeup">
            <LinkButton
              btnLink={"/"}
              btnText={"Connect With Yellow"}
              className={"text-[1.5vw] font-medium "}
            />

            </div>
          </div>
          <div className="col-start-3 flex justify-end mobile:order-5">
            <div className="w-[25vw] h-[25vw] rounded-[15px] overflow-hidden relative imganim mobile:w-[85vw] mobile:h-[85vw] mobile:mt-[10vw]">
              <Image
                src="/assets/images/service/service-detail/detail-3.png"
                alt="detail-3"
                className="absolute h-full w-full object-cover"
                fill
              />
            </div>
          </div>
          <div className="h-[2px] col-span-3 bg-black my-[4vw] lineDraw mobile:order-7"></div>
          <div className="flex flex-col gap-[1.5vw] mobile:order-8 mobile:my-[5vw]">
            <h3  data-title-anim className="text-[2vw] font-display mobile:text-[7.5vw]">
            Brand Strategy

            </h3>
            <ul className="list-disc pl-[1.5vw] mobile:pl-[4vw]">
                
            <li data-para-anim className="text-[1.2vw] font-medium  mobile:text-[4vw] mobile:font-normal">
            Brand Guidelines

            </li>
            <li data-para-anim className="text-[1.2vw] font-medium mobile:text-[4vw] mobile:font-normal ">
            Brand Imagery

            </li>

            </ul>
            
          </div>
        </div>
      </section>
    </>
  );
}
