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
            <Link className={`fadeUp cursor-pointer flex w-fit relative text-[1.4vw] gap-[0.5vw] items-center font-medium group mobile:gap-[2vw] mobile:text-[6vw] tablet:text-[3vw]`} href="mailto:hello@welcometoyellow.com">
              <span className="relative after:absolute after:block after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0">Send Your CV</span>
              <svg className="relative -rotate-[135deg] w-[1.3vw] h-[1.3vw] overflow-hidden mobile:w-[5vw] mobile:h-[5vw] tablet:w-[3vw] tablet:h-[3vw]" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                  <path className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
              </svg>
            </Link>
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
