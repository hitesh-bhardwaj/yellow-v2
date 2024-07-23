/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet';

import { getPostBySlug, getRecentPosts, getRelatedPosts } from '@/lib/posts';
import { ArticleJsonLd } from '@/lib/json-ld';
import { helmetSettingsFromMetadata } from '@/lib/site';
import useSite from '@/hooks/use-site';
import usePageMetadata from '@/hooks/use-page-metadata';

import Layout from '@/components/Layout';
import PageHero from '@/components/blog-detail/PageHero';
import FeaturedImage from '@/components/blog-detail/FeaturedImage';
import Categories from '@/components/blog-detail/Categories';
import Content from '@/components/blog-detail/Content';
import RelatedBlogs from '@/components/blog-detail/RelatedBlogs';
import { getRecentWorks, getWorkBySlug } from '@/lib/works';

export default function Work({ work, socialImage, relatedPosts }) {
  const {
    title,
    metaTitle,
    description,
    content,
    date,
    categories,
    featuredImage,
    slug
  } = work;

  // const { metadata: siteMetadata = {}, homepage } = useSite();

  // if (!post.og) {
  //   post.og = {};
  // }

  // post.og.imageUrl = `${homepage}/${socialImage}`;
  // post.og.imageSecureUrl = post.og.imageUrl;
  // post.og.imageWidth = 2000;
  // post.og.imageHeight = 1000;

  // const { metadata } = usePageMetadata({
  //   metadata: {
  //     ...post,
  //     title: metaTitle,
  //     description: description || post.og?.description || `Read more about ${title}`,
  //   },
  // });

  // if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
  //   metadata.title = `${title} - ${siteMetadata.title}`;
  //   metadata.og.title = metadata.title;
  //   metadata.twitter.title = metadata.title;
  // }

  // const helmetSettings = helmetSettingsFromMetadata(metadata);

  return (
    <Layout>
      {/* <Helmet {...helmetSettings} /> */}
      {/* <ArticleJsonLd post={post} siteTitle={siteMetadata.title} /> */}

        {/* <PageHero>
          {featuredImage && (
            <FeaturedImage
              src={featuredImage.sourceUrl}
              alt={featuredImage.altText}
              sizes={featuredImage.sizes}
            />
          )}
          <h1
            className="text-[4.8vw] font-display leading-[1.2] w-[90%] mb-[3vw] capitalize"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <Categories
            categories={categories}
          />
        </PageHero> */}

        <Content date={date} content={content} link={slug}/>

        {/* {relatedPosts && relatedPosts.length > 0 && (
          <RelatedBlogs posts={relatedPosts}/>
        )} */}
    </Layout>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { work: workSlug } = params;
  const { work } = await getWorkBySlug(workSlug);

  if (!work) {
    return {
      props: {},
      notFound: true,
    };
  }

  // const { categories, databaseId: postId } = post;

  const props = {
    work,
    socialImage: `${process.env.OG_IMAGE_DIRECTORY}/${workSlug}.png`,
  };

  // const relatedData = await getRelatedPosts(categories, postId);
  // console.log('Related Data:', relatedData); 

  // const { category: relatedCategory, posts: relatedPosts } = relatedData || {};
  // const hasRelated = relatedCategory && Array.isArray(relatedPosts) && relatedPosts.length;

  // if (hasRelated) {
  //   props.relatedPosts = relatedPosts;
  // }

  return {
    props,
  };
}

export async function getStaticPaths() {
  const { works } = await getRecentWorks({
    count: process.env.POSTS_PRERENDER_COUNT,
    queryIncludes: 'index',
  });

  const paths = works
    .filter(({ slug }) => typeof slug === 'string')
    .map(({ slug }) => ({
      params: {
        work: slug,
      },
    }));

  return {
    paths,
    fallback: 'blocking',
  };
}
