import React from "react";
import Image from "next/image";

export default function Pagehero() {
  return (
    <>
      <section className=" w-screen h-full" id="hero">
        <div className="container">
        <div className="w-full h-full pt-[15%] flex items-center mb-[7vw]">
          <h1 data-title-anim className="text-[5.7vw] font-display uppercase heading-anim">Who We Are</h1>
        </div>

        <div className="flex gap-[5vw] w-full">
          <div className="flex flex-col gap-[4vw] w-[65%]">
            <div className="flex gap-[1vw]">
              <h3 data-title-anim className="text-[1.6vw] w-[30%] font-display uppercase heading-anim">
                We Are
              </h3>
              <p data-para-anim className="text-[1.3vw] w-full para-anim">
                A branding and communications agency in Dubai, Yellow stands for
                all that’s bright in business – collaboration, ambition,
                opportunity and transformation. Dubai-born and Dubai-bred, we
                have its optimisim and drive in our DNA. We’ve helped businesses
                start, grow and thrive here – and feel passionately about
                enabling entrepreneurial dreams. No matter how extravagant.
              </p>
            </div>
            <div className="flex gap-[1vw]">
              <h3 data-title-anim className="text-[1.6vw] w-[30%] font-display uppercase heading-anim">
                We Aren’t
              </h3>
              <p data-para-anim className="text-[1.3vw] w-full para-anim">
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
          <div className=" h-[40vw] w-[40vw] relative imageanim">
            <Image src="/assets/images/about/about-hero.png" alt="about-hero" fill className="object-cover h-full w-full"/>
          </div>
        </div>

        </div>
       
      </section>
    </>
  );
}
