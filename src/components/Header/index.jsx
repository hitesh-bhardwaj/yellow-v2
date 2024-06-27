import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header className="fixed top-0 bottom-0 right-0 left-0 w-full z-[200] mix-blend-exclusion pointer-events-none">
            <div className="w-full px-[3%] my-[2%] mobile:px-[5%] mobile:my-[4%] justify-between items-center flex tablet:my-[3%] tablet:px-[6%]">
                <div className="w-fit cursor-pointer pointer-events-auto">
                    <Link href="/">
                        <Image 
                            src="/logo-black.png"
                            alt="Yellow Brand Logo"
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header