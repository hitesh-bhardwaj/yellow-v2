import React from "react";
import Link from "next/link";

export default function Address() {
  return (
    <>
      <section className="w-full h-full py-[8%] px-[5vw] mobile:py-[15%]">
        <div className="flex justify-between gap-[5vw] mobile:flex-col mobile:gap-[10vw]">
          <div className="h-[100vh] w-[50%] mobile:w-full mobile:h-[80vh] mobile:order-2 mobile:rounded-[10px] mobile:overflow-hidden">
            <iframe
              style={{ pointerEvents: "auto" }}
              className="w-full h-full drop-shadow-2xl shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.079754562661!2d77.37042431488638!3d28.627371691065694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce550a3a6d601%3A0x690d8b3ffd0857e1!2sCreative+Curve+Communication+Pvt+Ltd!5e0!3m2!1sen!2sin!4v1516274485667"
              frameBorder="0"
            />
          </div>

          <div className="w-[60%] mobile:w-full">
            <h3 data-para-anim className="text-[2.8vw] font-display leading-[1.4] font-medium mb-[7vw] mobile:text-[10vw] mobile:font-normal ">
              As a digital branding agency, we help businesses connect with
              their customers by using a variety of tools and services.
            </h3>
            <div className="flex w-full gap-[8vw] mb-[8vw] mobile:flex-col">
              <span>
                <p data-para-anim className="text-[2.5vw] font-display mb-[0.5vw] mobile:text-[7vw] ">
                  New Business
                </p>
                <Link className="w-fit text-[1.2vw] font-medium mobile:text-[4.5vw] mobile:font-normal" href="mailto:hello@welcometoyellow.com">
                  <span data-para-anim className="link-line">hello@welcometoyellow.com</span>
                </Link>
              </span>
              <span>
                <p data-para-anim className="text-[2.5vw] font-display mb-[0.5vw]  mobile:text-[7vw] ">General</p>
                <Link className="w-fit text-[1.2vw] font-medium mobile:text-[4.5vw] mobile:font-normal" href="mailto:hi@welcometoyellow.com">
                  <span data-para-anim className="link-line">hi@welcometoyellow.com</span>
                </Link>
              </span>
            </div>
            <div className="flex w-full gap-[8vw] mobile:flex-col">
              <span>
                <p data-para-anim className="text-[2.5vw] font-display mb-[0.5vw]  mobile:text-[7vw]">Press</p>
                <Link className="w-fit text-[1.2vw] font-medium mobile:text-[4.5vw] mobile:font-normal" href="mailto:press@welcometoyellow.com">
                  <span data-para-anim className="link-line">press@welcometoyellow.com</span>
                </Link>
              </span>
              <span>
                <p data-para-anim className="text-[2.5vw] font-display mb-[0.5vw] mobile:text-[7vw] ">Join Us</p>
                <Link className="w-fit text-[1.2vw] font-medium mobile:text-[4.5vw] mobile:font-normal" href="mailto:career@welcometoyellow.com">
                  <span data-para-anim className="link-line">career@welcometoyellow.com</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
