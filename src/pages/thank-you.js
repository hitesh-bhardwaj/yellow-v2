import Layout from "@/components/Layout";
import Section from "@/components/Section";
import React from "react";
import { titleAnim , paraAnim ,fadeUp} from '@/components/gsapAnimations';

function Thankyou() {
    titleAnim();
    paraAnim();
    fadeUp();
  return (
    <>
      <Layout>
        <Section id={"thank-you"} className="bg-black">
          <div className="container flex justify-center items-center bg-white">
            <div className="w-full h-screen flex flex-col justify-center items-center ">
              <h1 data-title-anim className="text-center text-[10vw] font-medium leading-[1.2] tablet:text-[15vw] mobile:text-[18vw]">
                Thank You
              </h1>
              <p data-para-anim className="text-center w-[30%] text-[1.4vw] font-medium tablet:text-[3vw] tablet:w-[70%] mobile:text-[5vw] mobile:w-[90%]">
                We Got Your Message. We’ll Get Back to You Soon.
              </p>
              <div className="mt-[2vw] tablet:mt-[7vw] mobile:mt-[12vw] fadeup">
                <a
                  href={"/"}
                  className={`cursor-pointer relative block text-[1.2vw] w-fit h-fit text-body border border-body hover:text-body transition-all duration-700 ease-link py-[0.8vw] px-[1.2vw] mobile:text-[4.5vw] mobile:px-[4vw] mobile:py-[2.5vw] tablet:text-[3vw] tablet:px-[3vw] tablet:py-[1.2vw] rounded-full font-medium group overflow-hidden`}
                >
                  <div className="overflow-hidden flex items-center gap-[0.5vw] w-full relative mobile:gap-[2vw]">
                    <span
                      data-text="Back to Homepage"
                      className="relative inline-block after:content-[attr(data-text)] after:absolute after:top-[105%] after:left-0 group-hover:translate-y-[-105%] transition-transform duration-700 ease-link after:block"
                    >
                      Back to Homepage
                    </span>
                    <svg
                      className="relative -rotate-[135deg] w-[1.1vw] h-[1.1vw] overflow-hidden mobile:w-[5vw] mobile:h-[5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]"
                      width="19"
                      height="23"
                      viewBox="0 0 19 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-700 ease-link"
                        d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                        fill="currentColor"
                      />
                      <path
                        className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-700 ease-link"
                        d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    </>
  );
}

export default Thankyou;
