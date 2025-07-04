import React from "react";
import Link from "next/link";

export default function Address() {
  return (
    <>
      <section className="w-full h-full bg-black ">
        <div className="container flex justify-between gap-[5vw] mobile:flex-col mobile:gap-[10vw] tablet:flex-col py-[8%]  mobile:py-[15%] bg-white">
          <div className="h-[100vh] shadow-2xl w-[50%] mobile:w-full mobile:h-[80vh] mobile:order-2 mobile:rounded-[10px] mobile:overflow-hidden tablet:w-full tablet:h-[40vh] rounded-xl overflow-hidden">
            <iframe
              loading="async"
              src="https://snazzymaps.com/embed/647472"
              width="100%"
              height="600px"
              className="w-full h-full focus-visible:ring-none"
              style={{ pointerEvents: "auto" }}>
            </iframe>
          </div>

          <div className="w-[60%] mobile:w-full tablet:w-full">
            <h3
              data-para-anim
              className="text-[2vw] w-[80%] leading-[1.4] font-medium mb-[7vw] mobile:text-[9.5vw] mobile:font-medium mobile:leading-[1.3] tablet:text-[4vw] "
            >
             We help ambitious brands connect with their audience using the right mix of strategy, creativity, and execution - If that&apos;s what you are looking for, look no further.
            </h3>
            <div className="tablet:flex">
              <div className="flex w-full gap-[8vw] mb-[8vw] mobile:flex-col tablet:gap-[12vw]">
                <span>
                  <p
                    data-para-anim
                    className="text-[2.5vw] font-display mb-[0.5vw] mobile:text-[7vw] tablet:text-[3.5vw] "
                  >
                    New Business
                  </p>
                  <Link
                    className="w-fit text-[1.2vw] font-medium mobile:text-[4.5vw] mobile:font-normal tablet:text-[2.5vw]"
                    href="mailto:hello@welcometoyellow.com"
                  >
                    <span data-para-anim className="link-line">
                      hello@welcometoyellow.com
                    </span>
                  </Link>
                </span>
              </div>
              <div className="flex w-full gap-[8vw] mobile:flex-col tablet:gap-[12vw]">
                <span>
                  <p
                    data-para-anim
                    className="text-[2.5vw] font-display mb-[0.5vw] mobile:text-[7vw] tablet:text-[3.5vw]"
                  >
                    Join Us
                  </p>
                  <Link
                    className="w-fit text-[1.2vw] font-medium mobile:text-[4.5vw] mobile:font-normal tablet:text-[2.5vw]"
                    href="mailto:hello@welcometoyellow.com"
                  >
                    <span data-para-anim className="link-line">
                      hello@welcometoyellow.com
                    </span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
