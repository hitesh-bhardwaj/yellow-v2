import { formatDate } from "@/lib/datetime";
import Section from "../Section"
import styles from "@/styles/blogDetail.module.css"
import { LinkedinShareButton, FacebookShareButton, TwitterShareButton} from 'next-share';

const Content = (({date, content, slug}) => {
    return (
        <Section id="second-section" className="py-[5%]">
            <div className="container">
                <div className="flex justify-between items-start">
                    <aside>
                        <h3 className="text-[1.55vw] font-medium mb-[1vw]">Posted On :</h3>
                        <p className="text-[1.25vw] font-medium mb-[4vw]">{formatDate(date)}</p>
                        <h3 className="text-[1.55vw] font-medium mb-[1vw]">Share Article :</h3>
                        <div className="flex items-center gap-[1.5vw]">
                            <FacebookShareButton className="" url={`https://welcometoyellow.com//${slug}`} quote="Read more articles like this on our website - https://welcometoyellow.com/blog" hashtag="#welcometoyellow">
                                <img className="border border-body rounded-full hover:border-white hover:bg-white hover:invert transition-all w-[2.8vw] h-[2.8vw]" src="/assets/icons/fb.svg" alt="Facebook Icon" title='Facebook Icon' />
                            </FacebookShareButton>
                            <LinkedinShareButton url={`https://welcometoyellow.com//${slug}`} quote="Read more articles like this on our website - https://welcometoyellow.com/blog" hashtag="#welcometoyellow">
                                <img className="border border-body rounded-full hover:border-white hover:bg-white hover:invert transition-all w-[2.8vw] h-[2.8vw]" src="/assets/icons/linkedin.svg" alt="LinkedIn Icon" title='LinkedIn Icon'/>
                            </LinkedinShareButton>
                            <TwitterShareButton url={`https://welcometoyellow.com//${slug}`} quote="Read more articles like this on our website - https://welcometoyellow.com/blog" hashtag="#welcometoyellow">
                                <img className="border border-body rounded-full hover:border-white hover:bg-white hover:invert transition-all w-[2.8vw] h-[2.8vw]" src="/assets/icons/x.svg" alt="Twitter Icon" title='Twitter Icon' />
                            </TwitterShareButton>
                        </div>
                    </aside>
                    <div className="w-[65%]">
                        <div
                            className={styles.blogContent}
                            dangerouslySetInnerHTML={{
                                __html: content,
                            }}
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
})

export default Content;