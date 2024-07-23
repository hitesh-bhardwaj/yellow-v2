import { useState } from "react";
import CategoryList from "@/components/blog/CategoryList";
import Pagehero from "@/components/blog/Pagehero";
import PostCard from "@/components/blog/PostCard";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { getCategories } from "@/lib/categories";
import { getPaginatedPosts, sortStickyPosts } from "@/lib/posts";
import styles from "@/styles/blogDetail.module.css"

export default function Blog({ initialPosts, featuredPost, initialPagination, categories }) {
    const [posts, setPosts] = useState(initialPosts);
    const [pagination, setPagination] = useState(initialPagination);
    const [isLoading, setIsLoading] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');

    const loadMorePosts = async () => {
        if (pagination.currentPage < pagination.pagesCount && !isLoading) {
            setIsLoading(true);
            const nextPage = pagination.currentPage + 1;

            const res = await fetch(`/api/getPosts?page=${nextPage}`);
            const { posts: newPosts, pagination: newPagination } = await res.json();

            setPosts((prevPosts) => [...prevPosts, ...newPosts]);
            setPagination(newPagination);
            setIsLoading(false);
        }
    };

    return (
        <Layout>
            {featuredPost && (
                <Pagehero post={featuredPost} />
            )}
            <Section id="second-section" className="bg-black">
                <div className="container py-[5%] bg-white">
                    <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>

                    <div className="bg-gray-400 h-[1px] w-screen ml-[-5vw]"/>

                    <div className='w-full h-full grid grid-cols-3 gap-[2vw] mb-[3vw] mt-[5vw]'>
                        {posts.map((post, index) => (
                            <div
                                key={post.slug}
                                className={styles.postCard}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>

                    {pagination && pagination.currentPage < pagination.pagesCount && (
                        <div className="flex w-full justify-center">
                            <button onClick={loadMorePosts} disabled={isLoading} className={`cursor-pointer flex w-fit relative text-[1.3vw] gap-[0.5vw] items-center font-medium group mobile:text-[6vw] mobile:gap-[2vw] `}>
                                <span className="relative after:absolute after:block after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0">{isLoading ? 'Loading' : 'Load More'}</span>
                                <svg className="relative -rotate-[135deg] w-[1.2vw] h-[1.2vw] overflow-hidden mobile:w-[5vw] mobile:h-[5vw]" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                                    <path className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </Section>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const { slug } = params || {};

    // Fetch paginated posts
    let { posts, pagination } = await getPaginatedPosts({
        queryIncludes: 'archive',
    });

    // Fetch categories
    const categories = await getCategories();

    // If a category slug is provided, filter posts by category
    if (slug) {
        const { posts: filteredPosts, pagination: filteredPagination } = await getPaginatedPosts({
            queryIncludes: 'archive',
            categoryId: slug, // Pass the category ID or slug to filter posts
        });

        posts = filteredPosts;
        pagination = {
            ...filteredPagination,
            basePath: `/categories/${slug}/page`,
        };
    }

    // Sort posts with sticky posts first
    posts = sortStickyPosts(posts);

    // Separate the featured post
    const featuredPost = posts.find((post) => post.isSticky) || null;

    // Remove the featured post from regular posts
    posts = posts.filter((post) => !post.isSticky);

    return {
        props: {
            initialPosts: posts,
            featuredPost,
            categories,
            initialPagination: {
                ...pagination,
                basePath: slug ? `/categories/${slug}/page` : '/blog',
            },
        },
        revalidate: 500,
    };
}
