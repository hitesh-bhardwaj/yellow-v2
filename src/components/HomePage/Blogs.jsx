import LinkButton from "../Button/LinkButton"
import Section from "../Section"
import SectionTitle from "../SectionTitle"
import BlogCard from "./PostCard"

const Blogs = ({posts}) => {

    return (
        <Section id="Blogs" className="bg-black">
            <div className="container bg-white py-[5%]" id="footer-up">
                <div className="flex justify-between w-full items-end">
                    <div className="w-1/2">
                        <SectionTitle text="Featured Blogs" className="uppercase"/>
                    </div>
                    <div className="fadein">
                        <LinkButton btnLink="#" btnText="All Blogs" className="uppercase"/>
                    </div>
                </div>

                <div className="mt-[5vw] hide-first">
                    {posts.map((post) => (
                        <BlogCard
                            key={post.slug}
                            src={post.featuredImage.node.sourceUrl}
                            title={post.title}
                            date={post.date}
                            link={post.slug}
                        />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Blogs