import React from "react";
import LinkButton from "../Button/LinkButton";

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
    <section id="essentials">
      <div className="container py-[8%]">
        <div className="w-[50%] flex flex-col gap-[2vw] mb-[12vw]">
          <h4 data-para-anim className="text-[2vw] font-display ">
            Don’t see any job opening that might fit you?
          </h4>
          <p data-para-anim className="w-[90%] text-[1.4vw] font-medium leading-[1.2] mb-[2vw] ">
            We are always looking for exceptional talent. Send us your work or a
            note on why you think you would be a good fit for the company.
          </p>
          <LinkButton
            btnLink={"/"}
            btnText={"Send Your CV"}
            className="text-[1.6vw]"
          />
        </div>
        <div className="w-[40%] flex flex-col gap-[2vw] mb-[5vw]">
          <h2 data-title-anim className="text-[4.8vw] font-display ">Essentials</h2>
          <p data-para-anim className="w-[80%] font-medium text-[1.4vw] ">
            As a digital branding agency, we help businesses connect with their
            customers by using a variety of tools and services.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-y-[2vw] gap-x-[13vw]">
          {essentialsData.map((item, index) => (
            <div
              key={item.id}
              className={`col-start-${(index % 3) + 1} ${index % 3 === 1 ? "flex justify-center" : ""} ${index % 3 === 2 ? "flex justify-end" : ""}`}
            >
              <div>
                <span data-title-anim className="text-[6.5vw] font-bold font-display mb-[1.5vw] ">{`0${item.id}.`}</span>
                <h4 data-para-anim className="text-[2vw] font-display mb-[1.5vw] ">
                  {item.title}
                </h4>
                <p data-para-anim className="text-[1.2vw] leading-[1.2] font-medium ">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
