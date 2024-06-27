import Image from "next/image"
import LinkButton from "../Button/LinkButton"
import Section from "../Section"
import SectionTitle from "../SectionTitle"
import Link from "next/link"

const Blogs = () => {

    const blogData = [
        {
            id: 1,
            title: "Building an Honest Brand in the Age of Authenticity",
            img: "/assets/images/homepage/blog-1.png",
            date: "November 2, 2023",
            link: "#"
        },
        {
            id: 2,
            title: "3 Tips for Marketing Your Brand Identity Design - Translating Strategy to Action",
            img: "/assets/images/homepage/blog-2.png",
            date: "September 18, 2022",
            link: "#"
        },
        {
            id: 3,
            title: "How to Inspire Trust Through Brand Consistency in Your E-Commerce Website Design",
            img: "/assets/images/homepage/blog-3.png",
            date: "November 2, 2023",
            link: "#"
        },
        {
            id: 4,
            title: "3 Marketing Campaign Planning Tips That Get High-Impact Results",
            img: "/assets/images/homepage/blog-4.png",
            date: "November 2, 2023",
            link: "#"
        },
    ]

    const BlogCard = ({title, src, date, link}) => {
        return (
            <div className="group">
                <span className="block w-full h-[1px] bg-body"/>
                <div className="w-full flex justify-between items-start mt-[2vw] mb-[4vw]">
                    <div className="flex items-start gap-[2vw]">
                        <Link href="#">
                            <div className="h-[16.5vw] w-[26.5vw] relative rounded-[1.5vw] overflow-hidden">
                                <Image
                                    src={src}
                                    alt="blog image" 
                                    priority={false}
                                    fill
                                    className="object-cover h-full w-full"
                                />
                            </div>
                        </Link>
                        <div className="flex flex-col h-full justify-between items-start">
                            <Link href={link}>
                                <h4 className="text-[2.5vw] font-medium w-[40vw] leading-[1.3]">
                                    {title}
                                </h4>
                            </Link>
                            <p className="text-[1.1vw] font-medium">{date}</p>
                        </div>
                    </div>
                    <div className="h-[5vw] w-[5vw] flex items-center justify-center border border-body rounded-full">
                        <svg className="relative -rotate-[135deg] w-[1.7vw] h-[1.7vw] overflow-hidden" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                            <path className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Section id="Blogs" className="bg-black">
            <div className="container bg-white py-[5%]" id="footer-up">
                <div className="flex justify-between w-full items-end">
                    <div className="w-1/2">
                        <SectionTitle text="Featured Blogs" className="uppercase"/>
                    </div>
                    <div>
                        <LinkButton btnLink="#" btnText="All Blogs" className="uppercase"/>
                    </div>
                </div>

                <div className="mt-[5vw]">
                    {blogData.map((blog, index)=> {
                        return (
                            <BlogCard 
                                key={index}
                                src={blog.img}
                                title={blog.title} 
                                date={blog.date}
                                link={blog.link}
                            />
                        )
                    })}
                </div>
            </div>
        </Section>
    )
}

export default Blogs