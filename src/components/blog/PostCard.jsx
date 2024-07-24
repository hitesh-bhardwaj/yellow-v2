import Image from "next/image";
import LinkButton from "../Button/LinkButton";
import { formatDate } from "@/lib/datetime";
import { postPathBySlug } from "@/lib/posts";

const PostCard = (({post}) => {

    return (
        <div key={post.id} className='col-span-1 h-full border-[1px] border-black border-opacity-40 rounded-[10px] overflow-hidden'>
            <div className='h-[16vw] w-full relative mobile:h-[60vw] tablet:h-[25vw]'>
                <Image src={post.featuredImage.sourceUrl} alt={post.featuredImage.altText} fill sizes={post.featuredImage.sizes} />
            </div>
            <div className='w-full h-full px-[1.5vw] pt-[1.5vw] py-[3vw] flex flex-col gap-[2vw] mobile:gap-[3vw] mobile:py-[7vw] mobile:px-[5vw]'>
                <h3 className='text-[1.5vw] font-display leading-[1.2] mobile:text-[6vw] tablet:text-[3vw]'>{post.title}</h3>
                <p className='text-[1vw] font-medium mobile:text-[4vw] tablet:text-[2vw]'>{formatDate(post.date)}</p>
                <div className='text-[1vw] flex gap-[0.5vw] mobile:text-[3vw] mobile:gap-[2vw] tablet:text-[2vw]'>
                    {post.categories[1] && (
                        <span className='px-[0.7vw] border-[1px] border-black border-opacity-60 rounded-[50px] mobile:px-[2.5vw]'>{post.categories[1].name}</span>
                    )}
                    {post.categories[2] && (
                        <span className='px-[0.7vw] border-[1px] border-black border-opacity-60 rounded-[50px] mobile:px-[2.5vw]'>{post.categories[2].name}</span>
                    )}
                </div>
                <LinkButton btnLink={postPathBySlug(post.slug)} btnText="Read Article" className='text-[1.3vw] mobile:text-[5vw] tablet:text-[2.5vw]' />
            </div>
        </div>
    )
})

export default PostCard;