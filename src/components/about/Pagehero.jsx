import React from "react";
import Image from "next/image";
import Section from "../Section";

export default function Pagehero() {
  return (
    <>
      <Section id="hero">
        <div className="container">
          <div className="w-full h-full pt-[10%] flex items-center mb-[7vw] mobile:pt-[30%] ">
            <h1 data-title-anim className="text-[5.7vw] font-display uppercase heading-anim mobile:text-[12vw] tablet:text-[7vw]">Who We Are</h1>
          </div>
          <div className="flex gap-[5vw] w-full mobile:flex-col mobile:gap-[10vw] tablet:flex-col tablet:gap-[7vw]">
            <div className="flex flex-col gap-[4vw] w-[65%] mobile:order-2 mobile:w-full mobile:gap-[10vw] tablet:order-2 tablet:w-full">
              <div className="flex gap-[1vw] mobile:flex-col mobile:mt-[4vw] ">
                <h3 data-title-anim className="text-[1.6vw] w-[30%] font-display uppercase heading-anim mobile:text-[7vw] mobile:w-full tablet:text-[3vw] tablet:w-[40%]">
                  We Are
                </h3>
                <p data-para-anim className="text-[1.3vw] w-full para-anim mobile:text-[4vw] tablet:text-[2.5vw]">
                  A branding and communications agency in Dubai, Yellow stands for
                  all that’s bright in business – collaboration, ambition,
                  opportunity and transformation. Dubai-born and Dubai-bred, we
                  have its optimisim and drive in our DNA. We’ve helped businesses
                  start, grow and thrive here – and feel passionately about
                  enabling entrepreneurial dreams. No matter how extravagant.
                </p>
              </div>
              <div className="flex gap-[1vw] mobile:flex-col">
                <h3 data-title-anim className="text-[1.6vw] w-[30%] font-display uppercase heading-anim mobile:text-[7vw] mobile:w-full tablet:text-[3vw] tablet:w-[40%]">
                  We Aren’t
                </h3>
                <p data-para-anim className="text-[1.3vw] w-full para-anim mobile:text-[4vw] tablet:text-[2.5vw] ">
                  It’s incredibly rare in business to offer something totally
                  unique. So differenatiation relies on your brand – it’s what you
                  stand for that will resonate in people’s minds and separate you
                  from the pack. Yellow has created and managed brands for some of
                  the region’s most influential businesses. Our job is to make
                  people see why you’re better – and to be by your side for every
                  step of your journey.
                </p>
              </div>
            </div>
            <div className=" h-[40vw] w-[40vw] relative imageanim mobile:w-[85vw] mobile:h-[105vw] tablet:w-[85vw] tablet:h-[80vw]">
              <Image src="/assets/images/about/about-hero.png" alt="about-hero" fill className="object-cover h-full w-full" priority={true} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
