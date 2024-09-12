import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, Suspense } from "react";
import { useLenis } from "lenis/react";
import { useRouter } from "next/router";
import Menu from "./Menu";
import SearchButton from "./SearchButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isInverted, setIsInverted] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const observerRef = useRef(null);
  const lenis = useLenis();
  const router = useRouter();
  const prevScrollPos = useRef(0);
  const currentScrollPos = useRef(0);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const darkSectionInView = entries.some((entry) => entry.isIntersecting);
        setIsInverted(darkSectionInView);
      },
      { threshold: [0.1] }
    );

    const darkSections = document.querySelectorAll(".dark");
    darkSections.forEach((section) => observerRef.current.observe(section));

    return () => {
      observerRef.current.disconnect();
    };
  }, []);

  const handleMenuButtonClick = () => {
    setButtonDisabled(true);
    if (globalThis.innerWidth < 541) {
      lenis.stop();
    }

    setMenuOpen((prevState) => {
      const newState = !prevState;

      if (!newState && globalThis.innerWidth < 541) {
        lenis.start();
      }

      return newState;
    });

    setTimeout(() => {
      setButtonDisabled(false);
    }, 700);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      lenis.start();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router, lenis]);

  useEffect(() => {
    const handleScroll = () => {
      if (!menuOpen) {
        currentScrollPos.current = window.pageYOffset;
        const visible =
          prevScrollPos.current > currentScrollPos.current ||
          currentScrollPos.current < 50;
        setShowHeader(visible);
        prevScrollPos.current = currentScrollPos.current;
      }
    };

    if (!menuOpen) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setShowHeader(true);
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[200] transition-transform duration-300 ${showHeader ? "transform-none" : "transform -translate-y-full"}`}>
        <div className="container pt-[2.5%] flex justify-between items-center mobile:py-[7%]">
          <div className="w-fit overflow-hidden">
            <Link href="/" className="pointer-events-auto">
              <Image
                className={`w-[9vw] mobile:w-[26vw] relative z-[202] tablet:w-[15vw] transition-all duration-500 ease-out ${isInverted ? "invert" : ""}`}
                id="header-logo"
                src="/logo-black.svg"
                alt="Yellow Brand Logo"
                width={153}
                height={48}
              />
            </Link>
          </div>
          <div className="flex items-center gap-8 tablet:gap-4 mobile:gap-0 mobile:items-start">
            <Suspense fallback={null}>
              <SearchButton isInverted={isInverted} menuOpen={menuOpen} />
            </Suspense>
            <div className="w-[3.5vw] mr-[-0.5%] h-[3.5vw] mobile:w-[15vw] mobile:h-[15vw] relative tablet:w-[8vw] tablet:h-[10vw] mobile:mr-[-5%]">
              <button
                id="header-hamburger"
                disabled={buttonDisabled}
                onClick={handleMenuButtonClick}
                aria-label="Open Menu"
                className={`menu-btn cursor-pointer pointer-events-auto h-[3.5vw] transition-all fixed z-[200] w-[3.5vw] mobile:w-[12vw] mobile:h-[12vw] tablet:w-[8vw] tablet:h-[10vw] ${menuOpen ? "open" : ""}`}
              >
              <span className={`bg ${isInverted ? "invert" : ""}`}/>
                <svg
                  className={`overflow-hidden mr-[-10px] w-full h-full transition-all duration-500 ease-out ${isInverted ? "invert" : ""}`}
                  viewBox="25 25 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path className="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
                  <path className="line--2" d="M0 50h99" />
                  <path className="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <Suspense fallback={null}>
        <Menu menuOpen={menuOpen} />
      </Suspense>
    </>
  );
};

export default Header;
