/* eslint-disable react-hooks/rules-of-hooks */
import { getPostBySlug, getRecentPosts, getRelatedPosts } from '@/lib/posts';
import { ArticleJsonLd, WebpageJsonLd } from '@/lib/json-ld';
import Layout from '@/components/Layout';
import FeaturedImage from '@/components/blog-detail/FeaturedImage';
import Categories from '@/components/blog-detail/Categories';
import Content from '@/components/blog-detail/Content';
import RelatedBlogs from '@/components/blog-detail/RelatedBlogs';
import Pagehero from '@/components/blog-detail/Pagehero';
import { titleAnim, paraAnim, lineAnim, fadeIn, fadeUp } from '@/components/gsapAnimations';
import { NextSeo } from 'next-seo';
import config from '../../package.json';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Post({ post, relatedPosts }) {
  if (!post) {
    // Defensive: render a minimal fallback instead of throwing on the client
    return (
      <Layout>
        <Pagehero>
          <h1 className="text-[4.8vw] font-display leading-[1.3] w-[90%] mb-[3vw]">
            Post unavailable
          </h1>
          <p>We couldn’t load this article right now. Please refresh or try again later.</p>
        </Pagehero>
      </Layout>
    );
  }

  const {
    title,
    metaImage,
    metaDescription,
    content,
    date,
    featuredImage,
    slug,
    readingTime,
    categories
  } = post;

  const router = useRouter();
  const { homepage = '' } = config;

  // Animations
  titleAnim();
  paraAnim();
  lineAnim();
  fadeIn();
  fadeUp();

  // (Optional) This hard reload on route change can hurt UX and cache.
  // Keep only if you absolutely need a full refresh after client nav.
  useEffect(() => {
    const handleSlugChange = () => {
      // window.location.reload();
    };
    router.events.on('routeChangeComplete', handleSlugChange);
    return () => router.events.off('routeChangeComplete', handleSlugChange);
  }, [router]);

  const metadata = {
    title: title,
    description: metaDescription,
    img: metaImage?.sourceUrl,
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: `${slug}`,
  };

  return (
    <>
      <NextSeo
        title={title}
        description={metaDescription}
        openGraph={{
          type: 'article',
          url: `${homepage}/${slug}`,
          title,
          description: metaDescription,
          images: metaImage?.sourceUrl ? [
            {
              url: metaImage.sourceUrl,
              width: metaImage?.mediaDetails?.width,
              height: metaImage?.mediaDetails?.height,
              alt: metaImage?.mediaDetails?.alt,
              type: featuredImage?.mimeType,
            },
          ] : [],
          siteName: "Yellow",
        }}
        canonical={`${homepage}/${slug}`}
        languageAlternates={[{
          hrefLang: 'x-default',
          href: `${homepage}/${slug}`,
        }]}
      />
      <WebpageJsonLd metadata={metadata} />
      <ArticleJsonLd post={post} />
      <Layout>
        <Pagehero>
          {featuredImage && (
            <div className='mobile:relative mobile:h-[60vh] mobile:w-full tablet:w-full w-[89vw]'>
              <FeaturedImage
                title={title}
                src={featuredImage.sourceUrl}
                alt={featuredImage.altText}
                sizes={featuredImage.sizes}
              />
            </div>
          )}
          <h1 data-para-anim
            className="text-[4.8vw] font-display leading-[1.3] w-[90%] mb-[3vw] capitalize mobile:text-[9vw] mobile:mt-[7vw] tablet:text-[5.5vw] mobile:w-full"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className='mobile:w-full mobile:my-[4vw] tablet:my-[1vw]'>
            <Categories categories={categories} />
          </div>
        </Pagehero>
        <Content date={date} content={content} link={slug} readingTime={readingTime} />
        {Array.isArray(relatedPosts) && relatedPosts.length > 0 && (
          <RelatedBlogs posts={relatedPosts} />
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { blog: postSlug } = params;

  // If WP is unreachable during build, don’t crash the build; return a 404 that can revalidate later.
  try {
    const { post } = await getPostBySlug(postSlug);

    if (!post) {
      return { notFound: true, revalidate: 60 };
    }

    // NOTE: fix the typo "databas9eId"
    const { categories, databaseId: postId } = post;

    let relatedPosts = [];
    try {
      const relatedData = await getRelatedPosts(categories, postId);
      const { posts: rel } = relatedData || {};
      if (Array.isArray(rel) && rel.length) relatedPosts = rel;
    } catch (e) {
      // swallow related errors; not critical
      console.error('getRelatedPosts failed', e);
    }

    return {
      props: { post, relatedPosts },
      // ISR keeps the page fresh without fetching during build
      revalidate: 500,
    };
  } catch (e) {
    console.error('getPostBySlug failed', e);
    // If the origin is down during build, serve 404 now and try again soon.
    return { notFound: true, revalidate: 60 };
  }
}

export async function getStaticPaths() {
  // This is the main build breaker: fetching slugs at build. Guard it.
  try {
    const count = Number(process.env.POSTS_PRERENDER_COUNT ?? 0);
    let posts = [];

    if (count > 0) {
      const res = await getRecentPosts({ count, queryIncludes: 'index' });
      posts = res?.posts ?? [];
    }

    const paths = posts
      .filter(({ slug }) => typeof slug === 'string' && slug.length > 0)
      .map(({ slug }) => ({ params: { blog: slug } }));

    return {
      paths,
      // With blocking fallback, pages build on-demand at request time if not prerendered.
      fallback: 'blocking',
    };
  } catch (e) {
    console.error('getStaticPaths failed; continuing with empty paths', e);
    // Critical: let the build complete even if WP is down.
    return { paths: [], fallback: 'blocking' };
  }
}
