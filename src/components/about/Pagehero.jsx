import React from "react";

export default function Pagehero() {
  return (
    <>
      <section className="px-[5vw] w-screen h-full">
        <div className="w-full h-[60vh] flex items-center">
          <h1 className="text-[5.7vw] font-display uppercase">Who We Are</h1>
        </div>

        <div className="flex gap-[5vw] w-full">
          <div className="flex flex-col gap-[3vw] w-[70%]">
            <div className="flex gap-[3vw]">
              <h3 className="text-[1.6vw] w-full font-display uppercase">
                We Are
              </h3>
              <p className="text-[1.4vw] font-medium">
                A branding and communications agency in Dubai, Yellow stands for
                all that’s bright in business – collaboration, ambition,
                opportunity and transformation. Dubai-born and Dubai-bred, we
                have its optimisim and drive in our DNA. We’ve helped businesses
                start, grow and thrive here – and feel passionately about
                enabling entrepreneurial dreams. No matter how extravagant.
              </p>
            </div>
            <div className="flex gap-[3vw]">
              <h3 className="text-[1.6vw] w-full font-display uppercase">
                We Aren’t
              </h3>
              <p className="text-[1.4vw] font-medium">
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
          <div className="drop-shadow-2xl shadow-2xl">
            <img src="/assets/images/about/about-hero.png" alt="about-hero"/>
          </div>
        </div>
      </section>
    </>
  );
}
