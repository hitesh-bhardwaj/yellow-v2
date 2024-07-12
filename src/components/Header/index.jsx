import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Menu from "./Menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isInverted, setIsInverted] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    // Create an Intersection Observer instance
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const darkSectionInView = entries.some((entry) => entry.isIntersecting);
        setIsInverted(darkSectionInView);
      },
      { threshold: [0.1] } // Adjust threshold as needed
    );

    // Observe sections with the id "dark"
    const darkSections = document.querySelectorAll(".dark");
    darkSections.forEach((section) => observerRef.current.observe(section));

    // Cleanup observer on unmount
    return () => {
      observerRef.current.disconnect();
    };
  }, []);

  const handleMenuButtonClick = () => {
    setButtonDisabled(true);
    setMenuOpen((prevState) => !prevState);
    setTimeout(() => {
      setButtonDisabled(false);
    }, 700);
  };

  return (
    <>
      <header className="fixed top-0 bottom-0 right-0 left-0 w-full z-[200] pointer-events-none">
        <div className="container py-[1%] flex justify-between items-center">
          <div className="w-fit overflow-hidden">
            <Link href="/" className="pointer-events-auto">
              <Image
                className={`w-[8vw] mobile:w-[20vw] transition-all duration-500 ease-out ${isInverted ? "invert" : ""}`}
                id="header-logo"
                src="/logo-black.png"
                alt="Yellow Brand Logo"
                width={153}
                height={48}
              />
            </Link>
          </div>
          <div className="w-[3.5vw] mr-[-0.5%] h-[3.5vw] mobile:w-[12vw] mobile:h-[12vw] relative tablet:w-[8vw] tablet:h-[10vw] ">
            <button
              id="header-hamburger"
              disabled={buttonDisabled}
              onClick={handleMenuButtonClick}
              aria-label="Open Menu"
              className={`menu-btn cursor-pointer pointer-events-auto overflow-hidden h-[3.5vw] transition-all fixed z-[999] w-[3.5vw] mobile:w-[12vw] mobile:h-[12vw] tablet:w-[8vw] tablet:h-[10vw] ${menuOpen ? "open" : ""}`}
            >
              <svg className={`overflow-hidden mr-[-10px] w-full h-full transition-all duration-500 ease-out ${isInverted ? "invert" : ""}`} viewBox="25 25 50 50" xmlns="http://www.w3.org/2000/svg">
                <path className="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
                <path className="line--2" d="M0 50h99" />
                <path className="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <Menu menuOpen={menuOpen}/>
    </>
  );
};

export default Header;
