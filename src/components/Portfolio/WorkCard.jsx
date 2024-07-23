import { workPathBySlug } from "@/lib/works";
import Link from "next/link";
import MediaRender from "../MediaRender";

const WorkCard = ({index, work}) => {

    return (
            <Link className="relative w-full h-full block group" href={workPathBySlug(work.slug)}>
                <div className={`relative overflow-hidden rounded-[10px] ${index % 3 === 0 ? "w-[90vw] h-[45vw]" : "w-[44vw] h-[45vw]"} imageanim`}>
                    <MediaRender 
                        className="z-[0] static scale-[1.05] group-hover:scale-100 transition-all duration-500 ease-in-out"
                        url={work.workFields.featuredImagevideo.node.mediaItemUrl}
                    />
                </div>
                <div className={`absolute bottom-[10%] left-[3%] text-white ${index % 3 === 0 ? "bottom-[10%] left-[3%]" : "bottom-[10%] left-[7%]"}`}>
                    <h3 data-title-anim className="text-[2.5vw] mb-[1.5vw] drop-shadow-lg">{work.title}</h3>
                    <div 
                        className={`text-[1.1vw] drop-shadow-lg leading-[1.4] ${index % 3 === 0 ? "w-[70%]" : "w-[90%]"} `}
                        dangerouslySetInnerHTML={{
                            __html: work.excerpt
                        }}
                    />
                </div>
                <div className={`absolute flex gap-[1.5vw] text-white ${index % 3 === 0 ? "bottom-[10%] right-[3%]" : "top-[7%] left-[7%]"}`}>
                    {work.workcategories && work.workcategories.slice(0, 2).map((category, i) => (
                        <p key={i} className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw] drop-shadow-lg">
                            {category.name}
                        </p>
                    ))}
                </div>
            </Link>
    )
}

export default WorkCard;