import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
   
    const handleMenuButtonClick = () => {
        // Disable the button
        setButtonDisabled(true);
    
        // Toggle the menu
        setMenuOpen((prevState) => !prevState);
    
        // Re-enable the button after 1 second
        setTimeout(() => {
          setButtonDisabled(false);
        }, 700);
      };

    return (
        <header className="fixed top-0 bottom-0 right-0 left-0 w-full z-[200] mix-blend-exclusion pointer-events-none">
            <div className="container py-[1%] flex justify-between items-center">
                <div className="w-fit overflow-hidden">
                    <Link href="/" className="pointer-events-auto">
                        <Image 
                            id="header-logo"
                            src="/logo-white.png"
                            alt="Yellow Brand Logo"
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>
                <div className="w-[3.5vw] mr-[-0.9vw] h-[3.5vw] mobile:w-[12vw] mobile:h-[12vw] relative tablet:w-[8vw] tablet:h-[10vw] ">
                    <button
                        id="header-hamburger"
                        disabled={buttonDisabled}
                        onClick={handleMenuButtonClick}
                        aria-label="Open Menu"
                        className={`menu-btn cursor-pointer pointer-events-auto overflow-hidden h-[3.5vw] fixed z-[999] w-[3.5vw] mobile:w-[12vw] mobile:h-[12vw] tablet:w-[8vw] tablet:h-[10vw] ${menuOpen ? "open" : ""}`}
                        >
                        <svg className="overflow-hidden mr-[-10px] w-full h-full" viewBox="25 25 50 50" xmlns="http://www.w3.org/2000/svg">
                            <path className="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
                            <path className="line--2" d="M0 50h99" />
                            <path className="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header