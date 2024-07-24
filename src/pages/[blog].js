import { Helmet } from 'react-helmet';

import { getPostBySlug, getRecentPosts, getRelatedPosts } from '@/lib/posts';
import { ArticleJsonLd } from '@/lib/json-ld';
import { helmetSettingsFromMetadata } from '@/lib/site';
import useSite from '@/hooks/use-site';
import usePageMetadata from '@/hooks/use-page-metadata';

import Layout from '@/components/Layout';
import FeaturedImage from '@/components/blog-detail/FeaturedImage';
import Categories from '@/components/blog-detail/Categories';
import Content from '@/components/blog-detail/Content';
import RelatedBlogs from '@/components/blog-detail/RelatedBlogs';
import Pagehero from '@/components/blog-detail/Pagehero';
import { titleAnim , paraAnim , lineAnim, imageAnim, fadeIn , fadeUp} from '@/components/gsapAnimations';

export default function Post({ post, socialImage, relatedPosts }) {
  titleAnim();
    paraAnim();
    lineAnim();
    imageAnim();
    fadeIn();
    fadeUp();

  const {
    title,
    metaTitle,
    description,
    content,
    date,
    categories,
    featuredImage,
    slug
  } = post;

  const { metadata: siteMetadata = {}, homepage } = useSite();

  if (!post.og) {
    post.og = {};
  }

  post.og.imageUrl = `${homepage}/${socialImage}`;
  post.og.imageSecureUrl = post.og.imageUrl;
  post.og.imageWidth = 2000;
  post.og.imageHeight = 1000;

  const { metadata } = usePageMetadata({
    metadata: {
      ...post,
      title: metaTitle,
      description: description || post.og?.description || `Read more about ${title}`,
    },
  });

  if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }

  const helmetSettings = helmetSettingsFromMetadata(metadata);

  return (
    <Layout>
      <Helmet {...helmetSettings} />
      <ArticleJsonLd post={post} siteTitle={siteMetadata.title} />

        <Pagehero>
          {featuredImage && (
            <div className='mobile:relative mobile:h-[60vh] mobile:w-full tablet:w-full'>
                <FeaturedImage
              src={featuredImage.sourceUrl}
              alt={featuredImage.altText}
              sizes={featuredImage.sizes}
            />
            </div>
          
          )}
          <h1 data-para-anim
            className="text-[4.8vw] font-display leading-[1.2] w-[90%] mb-[3vw] capitalize mobile:text-[10vw] mobile:mt-[7vw] tablet:text-[5.5vw]"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <div className='mobile:w-full mobile:my-[4vw] tablet:my-[1vw]'>
          <Categories
            categories={categories}
          /> 
          </div>
        
        </Pagehero>

        <Content date={date} content={content} link={slug}/>

        {relatedPosts && relatedPosts.length > 0 && (
          <RelatedBlogs posts={relatedPosts}/>
        )}
    </Layout>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { blog: postSlug } = params;
  const { post } = await getPostBySlug(postSlug);

  if (!post) {
    return {
      props: {},
      notFound: true,
    };
  }

  const { categories, databaseId: postId } = post;

  const props = {
    post,
    socialImage: `${process.env.OG_IMAGE_DIRECTORY}/${postSlug}.png`,
  };

  const relatedData = await getRelatedPosts(categories, postId);

  const { category: relatedCategory, posts: relatedPosts } = relatedData || {};
  const hasRelated = relatedCategory && Array.isArray(relatedPosts) && relatedPosts.length;

  if (hasRelated) {
    props.relatedPosts = relatedPosts;
  }

  return {
    props,
  };
}


export async function getStaticPaths() {
  const { posts } = await getRecentPosts({
    count: process.env.POSTS_PRERENDER_COUNT,
    queryIncludes: 'index',
  });

  const paths = posts
    .filter(({ slug }) => typeof slug === 'string')
    .map(({ slug }) => ({
      params: {
        blog: slug,
      },
    }));

  return {
    paths,
    fallback: 'blocking',
  };
}
