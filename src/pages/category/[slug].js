// pages/category/[slug].js
import { useEffect, useState } from 'react';
import { getAllCategories, getCategoryBySlug } from '@/lib/categories';
import { getPostsByCategoryId } from '@/lib/posts';

import CategoryList from '@/components/blog/CategoryList';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import PostCard from '@/components/blog/PostCard';
import styles from "@/styles/blogDetail.module.css";
import MetaData from '@/components/Metadata';
import { useRouter } from 'next/router';

const Category = ({ category, posts, categories }) => {
  const router = useRouter();

  // hooks first (always)
  useEffect(() => {
    const handleSlugChange = () => window.location.reload();
    router.events.on('routeChangeComplete', handleSlugChange);
    return () => router.events.off('routeChangeComplete', handleSlugChange);
  }, [router]);

  // if CMS was unreachable at build-time, keep route alive (no 404)
  if (!category) {
    return (
      <Layout>
        <main>
          <Section id="hero">
            <div className="container">
              <div className='pt-[10%] tablet:pt-[15%] mobile:pt-[25%]'>
                <h1 className='text-[5.7vw] font-display leading-[1.3]'>
                  Category temporarily unavailable
                </h1>
                <p className="mt-4">Please refresh in a moment.</p>
              </div>
            </div>
          </Section>
        </main>
      </Layout>
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeCategory, setActiveCategory] = useState(`${category.slug}`);

  const metadata = {
    title: `${category.name} Archive | Yellow`,
    description: `Dive into our articles for fresh trends, insights, and ${category.name} inspiration.`,
    slug: `category/${category.slug}`,
  };

  return (
    <>
      <MetaData metadata={metadata} />
      <Layout>
        <main>
          <Section id="hero">
            <div className="container">
              <div className='pt-[10%] tablet:pt-[15%] mobile:pt-[25%]'>
                <h1 className='text-[5.7vw] font-display leading-[1.3]'>
                  {category.name} Blogs
                </h1>
              </div>
            </div>
          </Section>

          <Section id="second-section" className="bg-black">
            <div className="container py-[5%] bg-white">
              <CategoryList
                categories={categories || []}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />

              <div className="bg-gray-400 h-[1px] w-screen ml-[-5vw]" />

              <div className='w-full h-full grid grid-cols-3 gap-[2vw] mb-[3vw] mt-[5vw] tablet:grid-cols-2 tablet:gap-y-[4vw] tablet:gap-x-[3vw] mobile:grid-cols-1 mobile:gap-[5vw]'>
                {(posts || []).map((post, index) => (
                  <div
                    key={post.slug || index}
                    className={styles.postCard}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <PostCard post={post} />
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </main>
      </Layout>
    </>
  );
};

export default Category;

export async function getStaticProps({ params }) {
  const { slug: categorySlug } = params;

  try {
    const { category } = await getCategoryBySlug(categorySlug);

    // real 404 only if CMS confirms it's missing
    if (!category) {
      return { notFound: true, revalidate: 60 };
    }

    let posts = [];
    let categories = [];

    // fetch posts in this category (don't crash build if it fails)
    try {
      const res = await getPostsByCategoryId({
        categoryId: category.databaseId,
        queryIncludes: 'archive',
      });
      posts = res?.posts || [];
    } catch {
      posts = [];
    }

    // fetch all categories (for the sidebar/list); don't crash on error
    try {
      const all = await getAllCategories();
      categories = all?.categories || [];
    } catch {
      categories = [];
    }

    return {
      props: { category, posts, categories },
      revalidate: 500,
    };
  } catch {
    // network/CMS error at build time → keep route alive (no 404)
    return {
      props: { category: null, posts: [], categories: [] },
      revalidate: 60,
    };
  }
}

export async function getStaticPaths() {
  try {
    const { categories } = await getAllCategories();
    const paths = Array.isArray(categories)
      ? categories
          .filter((c) => typeof c?.slug === 'string')
          .map((c) => ({ params: { slug: c.slug } }))
      : [];

    return { paths, fallback: 'blocking' };
  } catch {
    // if CMS is down during build, return no paths but keep blocking fallback
    return { paths: [], fallback: 'blocking' };
  }
}
