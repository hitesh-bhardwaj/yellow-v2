import React from "react";
import Link from "next/link";

const essentialsData = [
  {
    id: 1,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
  },
  {
    id: 5,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
  },
  {
    id: 6,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
  },
];

export default function Essentials() {
  return (
    <section  className="bg-black" id="essentials">
      <div className="container py-[8%] mobile:py-[15%] bg-white">
        <div className="w-[50%] flex flex-col gap-[2vw] mb-[8vw] mobile:w-full mobile:gap-[5vw] tablet:w-[70%] mobile:mb-[20vw]">
          <h4 data-para-anim className="text-[2vw] font-display mobile:text-[7vw] tablet:text-[3vw]  ">
            Don’t see any job opening that might fit you?
          </h4>
          <p data-para-anim className="w-[90%] text-[1.4vw] font-medium leading-[1.2] mb-[2vw] mobile:text-[4.5vw] mobile:font-normal tablet:text-[2.2vw]">
            We are always looking for exceptional talent. Send us your work or a
            note on why you think you would be a good fit for the company.
          </p>
          <div className="fadeup mobile:mt-[4vw]">
          <LinkButton
            btnLink="mailto:hello@welcometoyellow.com"
            btnText="Send Your CV"
          />

          </div>
        </div>
        <div className="w-[40%] flex flex-col gap-[2vw] mb-[5vw] mobile:w-full tablet:w-[70%]">
          <h2 data-title-anim className="text-[5vw] font-display mobile:text-[10vw] tablet:text-[6vw] ">Essentials</h2>
          <p data-para-anim className="w-[80%] font-medium text-[1.4vw] mobile:w-full mobile:text-[4.5vw] mobile:font-normal tablet:text-[2.2vw] ">
            As a digital branding agency, we help businesses connect with their
            customers by using a variety of tools and services.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-y-[2vw] gap-x-[13vw] mobile:flex mobile:flex-col mobile:gap-y-[5vw] tablet:gap-x-[5vw] ">
          {essentialsData.map((item, index) => (
            <div
              key={item.id}
              className={`col-start-${(index % 3) + 1} ${index % 3 === 1 ? "flex justify-center mobile:justify-start mobile:w-full" : ""} ${index % 3 === 2 ? "flex justify-end mobile:justify-start" : ""}`}
            >
              <div className="w-full">
                <span data-title-anim className="text-[7vw] font-normal font-display mb-[1.5vw] mobile:text-[17vw] mobile:font-normal tablet:text-[8vw] ">{`0${item.id}.`}</span>
                <h4 data-para-anim className="text-[2vw] font-display mb-[1.5vw] mobile:text-[7vw] tablet:text-[3vw] ">
                  {item.title}
                </h4>
                <p data-para-anim className="text-[1.2vw] leading-[1.2] font-medium mobile:text-[4.5vw] mobile:font-normal tablet:text-[2vw] ">
                  {item.content}
                </p>
                <div className={`w-full bg-black h-[1px] mt-[12vw] lineDraw hidden mobile:block ${index==5?"mobile:hidden":""}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
