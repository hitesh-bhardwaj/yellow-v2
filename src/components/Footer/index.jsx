import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import CustomEase from "gsap/dist/CustomEase";
import Link from "next/link";
import { useRef } from "react";
import { SplitInChar } from "../utils";
import { useState, useEffect } from 'react';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, useGSAP, CustomEase);

CustomEase.create("primary-ease", "0.62, 0.05, 0.01, 0.99");

const handleScroll = () => {
    gsap.to(window, {
        duration: 2.5,
        scrollTo: { y: "#hero" },
        ease: "power2.inOut",
    });
};

const Footer = () => {
    const footerContainer = useRef(null);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    const formatTime = (date) => {
        return new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Asia/Dubai',
        }).format(date);
      };
  
    useGSAP(() => {
        if (footerContainer.current) {
            const links = footerContainer.current.querySelectorAll('.footer-social');
            links.forEach(link => SplitInChar(link));
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer-top",
                start: "bottom bottom",
                end: "bottom 50%",
                scrub: 0.25,
                invalidateOnRefresh: true
            }
        });

        tl.to(".container", {
            duration: 1,
            delay: 0,
            width: "95%",
            paddingLeft: "2.5%",
            paddingRight: "2.5%",
        })
            .to(".footer-top", {
                duration: 1,
                delay: -1,
                borderBottomLeftRadius: "3vw",
                borderBottomRightRadius: "3vw",
            })
            .fromTo(".footer-bottom", {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 0.8,
                delay: -0.5,
            })
    });

    return (
        <footer id="footer" className="footer bg-black">
            <div className="bg-white container footer-top">
                <div className="pb-[10%] pt-[5%]">
                    <span className="block w-full h-[1px] bg-body lineDraw" />
                    <div className="flex justify-between items-center py-[2%]">
                        <div className="w-1/2 relative">
                            <h5 className="text-[5vw] leading-[1.2] font-display para-anim">
                                Ready to Elevate Your Brand 👉
                            </h5>
                        </div>
                        <div className="fadeIn">
                            <Link
                                className={`cursor-pointer flex w-fit relative text-[3.4vw] gap-[0.5vw] items-center font-medium group `}
                                href="#"
                            >
                                <span className="relative after:absolute leading-[1.3] after:block after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-body after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0 ">
                                    Let&apos;s Talk
                                </span>
                                <svg
                                    className="relative -rotate-[135deg] w-[2.2vw] h-[2.2vw] mt-[0.5vw] overflow-hidden"
                                    width="19"
                                    height="23"
                                    viewBox="0 0 19 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out"
                                        d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out"
                                        d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <span className="block w-full h-[1px] bg-body lineDraw" />
                </div>
            </div>

            <div
                className="h-[30vw] w-full relative"
                style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
                <div className="fixed bottom-0 left-0 right-0 top-0 z-[-1] pb-[2vw]">
                    <div ref={footerContainer} className="container flex h-full flex-col justify-end text-white footer-bottom">

                        <div className="flex items-start w-full justify-between mb-[8vw]">
                            <div className="w-[40%] flex flex-col gap-[2vw] items-start">
                                <h6 className="text-[2.5vw] font-display">
                                    <Link className="leading-[1.3] group" href="mailto:hello@welcometoyellow.com">
                                        <span className="relative after:absolute after:block after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-current after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0">
                                            hello@welcometoyellow.com
                                        </span>
                                    </Link>
                                </h6>
                                <div className="flex justify-between items-start">
                                    <div className="w-2/5 ">
                                        <h6 className="text-[1.9vw] font-display leading-[1.2] mb-[1vw]">Dubai {formatTime(time)}</h6>
                                        <Link href="#" className="text-[1.15vw] font-medium under-multi-parent">
                                            <span className="under-multi">Loft offices 2, Office 107, Dubai Media City, Dubai UAE</span>
                                        </Link>
                                    </div>
                                    <div className="w-2/5 ">
                                        <h6 className="text-[1.9vw] font-display leading-[1.2] mb-[1vw]">Phone</h6>
                                        <Link href="tel:+971545178971" className="text-[1.15vw] font-medium text-shadow">
                                            <span 
                                                className="link-line footer-social overflow-hidden block">
                                                +97 154 517 8971
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-[5px]">
                                <h6 className="text-[1.9vw] font-display leading-[1.2] mb-[1vw]">Social</h6>
                                <ul className="space-y-[1vw]">
                                    <li>
                                        <Link className="text-[1.15vw] font-medium uppercase text-shadow" href="#">
                                            <span 
                                                className="link-line footer-social overflow-hidden block">
                                                Linkedin
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-[1.15vw] font-medium uppercase text-shadow" href="#">
                                            <span 
                                                className="link-line footer-social overflow-hidden block">
                                                Instagram
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-[1.15vw] font-medium uppercase text-shadow" href="#">
                                            <span 
                                                className="link-line footer-social overflow-hidden block">
                                                behance
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-[1.15vw] font-medium uppercase text-shadow" href="#">
                                            <span
                                                className="link-line footer-social overflow-hidden block">
                                                Pinterest
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-between relative">
                            <div>
                                <p className="font-medium text-[1.15vw] capitalize">© 2024 | Yellow. All rights reserved.</p>
                            </div>

                            <button aria-label="Scroll Down Button" onClick={handleScroll} className="absolute cursor-pointer scroll-btn w-fit left-1/2 -translate-x-1/2 text-[1.1vw] gap-[0.5vw] font-[400] group flex items-center justify-center">
                                <span className="relative leading-[1.5] after:absolute after:block after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0">Send me back up.</span>
                                <span className="text-[1.3vw]">👆</span>
                            </button>

                            <div className="text-[1.15vw] font-medium">
                                <p className="flex items-center gap-[5px]">By:
                                    <Link 
                                        href="https://weareenigma.com" className="">
                                        <span 
                                            className="link-line footer-social overflow-hidden block">
                                            Enigma
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
