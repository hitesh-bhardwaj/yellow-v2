import Link from "next/link";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import { usePathname } from "next/navigation";

gsap.registerPlugin(CustomEase, useGSAP);

const MenuLink = ({href, text, className=""}) => {
  return (
    <Link href={href} className={`block w-fit ${className}`}>
      <span className="link-line w-fit">{text}</span>
    </Link>
  )
}

export default function Menu({ menuOpen }) {
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const path = usePathname();
  const [serviceOpen, setServiceOpen] = useState(false);

  CustomEase.create("primary-ease", "0.62, 0.05, 0.01, 0.99");

  useGSAP(() => {
    const links = document.querySelectorAll(".link-anim");
    const socialLinks = document.querySelectorAll(".social-link");

    if (menuOpen) {
      gsap.timeline()
        .to(navRef.current, {
          left: 0,
          x: 0,
          duration: 0.5,
          ease: "power3.out",
        })
        .from(links, {
          yPercent: 100,
          duration: 1.30,
          delay: -0.6,
          ease: "primary-ease",
          stagger: 0.07
        })
        .from(socialLinks, {
          rotationZ: 5,
          yPercent: 100,
          duration: 1.30,
          delay: -1.2,
          stagger: 0.1,
          ease: "primary-ease",
        })
    } else {
      gsap.timeline()
        .to(navRef.current, {
          left: "99px",
          x: '100%',
          duration: 0.5,
          ease: "power3.out",
          onComplete: () => {
            setServiceOpen(false);
          }
        });
    }
  }, [menuOpen]); 

  useGSAP(() => {
    const serviceLinks = document.querySelectorAll(".service-links li");
    if (serviceOpen) {
      gsap.to(serviceLinks, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.05,
      })
    } else {
      gsap.to(serviceLinks, {
        opacity: 0,
        x: 50,
        duration: 0.5,
        stagger: {
          each: 0.02, from: "end"
        }
      })
    }
  }, [serviceOpen]);

  return (
    <div ref={menuRef} className="fixed top-0 z-[199] left-0 right-0 bottom-0 flex items-start justify-end pointer-events-none">
      <nav ref={navRef} className={`relative w-[50%] pointer-events-auto translate-x-[100%] left-[99px] h-screen bg-black/40 backdrop-blur-[25px]`}>
        <div className="w-full h-full px-[5vw] pt-[5.5vw] pb-[4.5vw] relative flex flex-col justify-between items-start">
          <ul className="text-[7.8vh] font-display text-white leading-[1.15]">
            <li className="overflow-hidden">
              <MenuLink 
                className="link-anim"
                href="/"
                text="Home"
              />
            </li>
            <li className="overflow-hidden">
                <MenuLink 
                  className="link-anim"
                  href="/about-us"
                  text="About"
                />
            </li>
            <li className="relative w-full">
              <div className="overflow-hidden">
                <button 
                  onClick={()=> {setServiceOpen(true)}}
                  className="relative link-anim flex">
                  <span className="links link-line">Expertise</span>
                  <div className="rounded-full border-white border text-white text-[25%] w-[2vw] h-[2vw] flex items-center justify-center mt-2">5</div>
                 </button>
              </div>
              <ul className={`service-links text-[1.3vw] font-display absolute right-[-75%] pointer-events-none top-[1.5vw] pt-[1vw] leading-[1.5] transition-all duration-1000 ease-anim-primary ${serviceOpen ? "pointer-events-auto" : ""}`}>
                <li onClick={()=> {setServiceOpen(false)}} className={`absolute border rounded-full border-current h-[1.8vw] p-[0.5vw] w-[1.8vw] flex items-center leading-[2] justify-center bottom-[90%] opacity-0 left-full cursor-pointer ease-out duration-500 ${serviceOpen ? "opacity-100" : ""} `} >
                  <svg className="w-full h-full" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="1" width="60" height="4" rx="2" transform="rotate(45 3 1)" fill="currentColor"/>
                    <rect y="43" width="60" height="4" rx="2" transform="rotate(-45 0 43)" fill="currentColor"/>
                  </svg>
                </li>
                <li className="translate-x-[50px] opacity-0">
                  <MenuLink 
                    href="/what-we-do/brand-strategy"
                    text="Brand Strategy"
                  />
                </li>
                <li className="translate-x-[50px] opacity-0">
                  <MenuLink 
                    href="/what-we-do/brand-identity"
                    text="Brand Identity"
                  />
                </li>
                <li className="translate-x-[50px] opacity-0">
                  <MenuLink 
                    href="/what-we-do/naming"
                    text="Naming"
                  />
                </li>
                <li className="translate-x-[50px] opacity-0">
                  <MenuLink 
                    href="/what-we-do/communication"
                    text="Communication"
                  />
                </li>
                <li className="translate-x-[50px] opacity-0">
                  <MenuLink 
                    href="/what-we-do/digital"
                    text="Digital"
                  />
                </li>
                <li className="translate-x-[50px] opacity-0">
                  <MenuLink 
                    href="/what-we-do/what-we-do"
                    text="View All"
                  />
                </li>
              </ul>
            </li>
            <li className="overflow-hidden">
              <MenuLink 
                className="link-anim"
                href="/our-work"
                text="Work"
              />
            </li>
            <li className="overflow-hidden">
              <MenuLink 
                className="link-anim"
                href="/careers"
                text="Careers"
              />
            </li>
            <li className="overflow-hidden">
              <MenuLink 
                className="link-anim"
                href="/blog"
                text="Blog"
              />
            </li>
            <li className="overflow-hidden">
              <MenuLink 
                className="link-anim"
                href="/contact-us"
                text="Contact"
              />
            </li>
          </ul>
          <div className="text-[1.1vw] font-medium text-white flex flex-col space-y-[0.5vw]">
            <div className="w-fit overflow-hidden">
              <MenuLink 
                className="link-anim"
                href="mailto:hello@welcometoyellow.com"
                text="hello@welcometoyellow.com"
              />
            </div>
            <div className="w-fit overflow-hidden">
              <MenuLink 
                className="link-anim"
                href="tel:+971545178971"
                text="+971 54 517 8971"
              />
            </div>
          </div>
          <ul className="flex justify-between items-center text-[1vw] text-white font-medium uppercase w-[90%]">
            <li className="overflow-hidden">
              <Link 
                className="social-link flex items-center gap-[3px] group" href="#">
                <span 
                  className="link-line">
                  Linkedin
                </span>
                <svg className="relative -rotate-[135deg] w-[1vw] h-[1vw] overflow-hidden" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                  <path className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                </svg>
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link
                className="social-link flex items-center gap-[3px] group" href="#">
                <span className="link-line">
                  Instagram
                </span>
                <svg className="relative -rotate-[135deg] w-[1vw] h-[1vw] overflow-hidden" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                  <path className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                </svg>
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link 
                className="social-link flex items-center gap-[3px] group" href="#">
                <span className="link-line">
                  behance
                </span>
                <svg className="relative -rotate-[135deg] w-[1vw] h-[1vw] overflow-hidden" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                  <path className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                </svg>
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link 
                className="social-link flex items-center gap-[3px] group" href="#">
                <span className="link-line">
                  Pinterest
                </span>
                <svg className="relative -rotate-[135deg] w-[1vw] h-[1vw] overflow-hidden" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                  <path className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
