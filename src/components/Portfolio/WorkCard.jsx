import { workPathBySlug } from "@/lib/portfolio";
import Link from "next/link";
import MediaRender from "../MediaRender";

const WorkCard = ({ index, work }) => {

    return (
        <Link className="relative w-full h-full block group overflow-hidden rounded-[10px]" href={workPathBySlug(work.slug)}>
            <div className={`relative overflow-hidden image-animation-wrapper h-[45vw] mobile:h-[85vw] scale-[1.05] group-hover:scale-100 transition-all duration-300 ease-in-out`}>
                <MediaRender
                    className="z-[0] static"
                    url={work.workFields.featuredImagevideo.node.mediaItemUrl}
                />
            </div>
            <div className={`absolute bottom-[10%] left-[3%] text-white ${index % 3 === 0 ? "bottom-[10%] left-[3%] mobile:left-[7%] mobile:bottom-[5%]" : "bottom-[10%] left-[7%] mobile:bottom-[7%]"}`}>
                <h3 data-title-anim className="text-[2.5vw] mb-[1.5vw] drop-shadow-lg mobile:text-[7.5vw] tablet:text-[3vw]">{work.title}</h3>
                <div
                    className={`text-[1.1vw] drop-shadow-lg leading-[1.4] mobile:text-[4vw] tablet:text-[2vw] fadein ${index % 3 === 0 ? "w-[70%] mobile:w-[90%]" : "w-[90%] mobile:w-[90%]"} `}
                    dangerouslySetInnerHTML={{
                        __html: work.excerpt
                    }}
                />
            </div>
            <div className={`absolute flex gap-[1.5vw] text-white mobile:gap-[2.5vw] ${index % 3 === 0 ? "bottom-[10%] right-[3%] mobile:top-[5%] mobile:left-[7%] mobile:bottom-auto" : "top-[7%] left-[7%]"}`}>
                {work.portfolioIndustries && work.portfolioIndustries.slice(0, 2).map((category, i) => (
                    <p key={i} className="w-fit border-[1px] border-white rounded-[60px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw] drop-shadow-lg mobile:text-[3vw] mobile:px-[3vw] mobile:py-[1.5vw] tablet:text-[1.5vw] tablet:py-[0.5vw]">
                        {category.name}
                    </p>
                ))}
            </div>
        </Link>
    )
}

export default WorkCard;