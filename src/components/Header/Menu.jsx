import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import { usePathname } from "next/navigation";

gsap.registerPlugin(CustomEase, useGSAP);

export default function Menu({ menuOpen }) {
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const pathRef = useRef(null);
  const linksRef = useRef(null);
  const path = usePathname();

  CustomEase.create("primary-ease", "0.62, 0.05, 0.01, 0.99");

  useGSAP(() => {
    const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
    const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`

    const links = document.querySelectorAll(".links");

    if (menuOpen) {
      gsap.timeline()
        .to(".menuLayer", {
          opacity: 1,
          duration: 0.5,
        })
        .to(navRef.current, {
          left: 0,
          x: 0,
          delay: -0.5,
          duration: 0.5,
          ease: "power3.out",
        })
        .fromTo(pathRef.current, {
          attr: { d: initialPath },
        }, {
          attr: { d: targetPath },
          delay: -0.3,
          duration: 0.5,
          ease: "power3.out",
        })
        .from(links, {
          yPercent: 100,
          duration: 1.30,
          delay: -0.7,
          ease: "primary-ease",
          stagger: 0.07
        })
    } else {
      gsap.timeline()
        .to(".menuLayer", {
          opacity: 0,
          duration: 0.5,
        })
        .to(navRef.current, {
          left: "99px",
          x: '100%',
          delay: -0.5,
          duration: 0.5,
          ease: "power3.out",
        })
        .fromTo(pathRef.current, {
          attr: { d: targetPath },
        }, {
          attr: { d: initialPath },
          duration: 0.5,
          delay: -0.4,
          ease: "power3.out",
        });
    }
  }, [menuOpen]);

  return (
    <div ref={menuRef} className="fixed top-0 z-[199] left-0 right-0 bottom-0 flex items-start justify-end pointer-events-none">
      <span className="absolute bg-black/50 top-0 left-0 right-0 bottom-0 z-[-1] menuLayer" />
      <nav ref={navRef} className={`relative w-[50%] pointer-events-auto translate-x-[100%] left-[99px] h-screen bg-white`}>
        <svg className="absolute top-0 left-[-99px] w-[100px] h-full fill-white stroke-none">
          <path className="" ref={pathRef}></path>
        </svg>
        <div className="w-full h-full px-[5vw] pt-[5.5vw] pb-[4.5vw]">
          <ul className="text-[4.45vw] font-display text-black leading-[1.1]">
            <li className="overflow-hidden">
              <Link className="links block w-fit" href="/">
                Home
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link className="links block w-fit" href="/about">
                About
              </Link>
            </li>
            <li className="relative">
              <div className="overflow-hidden">
                <button className="links block w-fit">Expertise</button>
              </div>
              <ul className="text-[1.3vw] opacity-0 pointer-events-none font-display absolute left-[65%] top-0 pt-[1vw] leading-[1.5]">
                <li>
                  <Link href="/brand-strategy">
                    Brand Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/brand-identity">
                    Brand Identity
                  </Link>
                </li>
                <li>
                  <Link href="/brand-naming">
                    Brand Naming
                  </Link>
                </li>
                <li>
                  <Link href="/advertising">
                    Advertising
                  </Link>
                </li>
                <li>
                  <Link href="/digital">
                    Digital
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    View All
                  </Link>
                </li>
              </ul>
            </li>
            <li className="overflow-hidden">
              <Link className="links block w-fit" href="/works">
                Works
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link className="links block w-fit" href="/career">
                Career
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link className="links block w-fit" href="/blogs">
                Blogs
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link className="links block w-fit" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="text-[1.15vw] font-medium flex flex-col space-y-[0.5vw] mt-[3vw]">
            <Link href="mailto:hello@welcometoyellow.com">
              <span>
                Hello@WelcomeToYellow.Com
              </span>
            </Link>
            <Link href="tel:+971545178971">
              <span>
                +971 54 517 8971
              </span>
            </Link>
          </div>
          <ul className="flex justify-between items-center text-[1.1vw] font-medium uppercase mt-[2vw] w-[90%]">
            <li>
              <Link className="" href="#">
                <span>
                  Linkedin
                </span>
              </Link>
            </li>
            <li>
              <Link className="" href="#">
                <span>
                  Instagram
                </span>
              </Link>
            </li>
            <li>
              <Link className="" href="#">
                <span>
                  behance
                </span>
              </Link>
            </li>
            <li>
              <Link className="" href="#">
                <span>
                  Pinterest
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
