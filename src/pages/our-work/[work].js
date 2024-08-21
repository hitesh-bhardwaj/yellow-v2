import Layout from '@/components/Layout';
import { getRecentWorks, getRelatedWorks, getWorkBySlug } from '@/lib/works';
import Pagehero from '@/components/PortfolioDetail/Pagehero';
import Section from '@/components/Section';
import Information from '@/components/PortfolioDetail/Information';
import styles from "@/styles/work.module.css";
import RelatedWorks from '@/components/PortfolioDetail/RelatedWorks';
import { titleAnim, lineAnim, imageAnim, fadeUp, paraAnimWordpress } from '@/components/gsapAnimations';
import { WebpageJsonLd } from '@/lib/json-ld';
import config from '../../../package.json';
import { NextSeo } from 'next-seo';

export default function Work({ work, relatedWorks }) {
  const {
    title,
    content,
    date,
    workFields,
    workcategories,
    modified,
    slug,
    metaTitle,
    metaDescription,
    metaImage
  } = work;

  const { homepage = '' } = config;

  titleAnim();
  paraAnimWordpress();
  lineAnim();
  imageAnim();
  fadeUp();

  const metadata = {
    title: metaTitle,
    description: metaDescription,
    slug: `our-work/${slug}`,
    date_modified: modified,
    date_published: date,
  }

  return (
    <>
      <NextSeo
        title={title}
        description={metaDescription}
        openGraph={{
          url: `${homepage}/${metadata.slug}`,
          title: title,
          "description": metaDescription,
          images: [
            {
              url: metaImage.sourceUrl,
              width: metaImage.mediaDetails.width,
              height: metaImage.mediaDetails.height,
              alt: metaImage.mediaDetails.alt,
              type: "image/webp",
            },
          ],
          siteName: "Yellow",
        }}
        additionalLinkTags={[
          {
            rel: "canonical",
            href: `${homepage}/${metadata.slug}`,
          },
          {
            rel: "alternate",
            href: `${homepage}/${metadata.slug}`,
            hreflang: "x-default",
          }
        ]}
      />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Pagehero
          src={workFields.detailPageFeaturedImageVideo.node.mediaItemUrl}
          workcategories={workcategories}
          date={date}
          title={title}
        />
        <Information
          info={workFields}
          title={title}
          categories={workcategories}
        />
        <Section id="work-content" className='bg-black'>
          <div className='container bg-white py-[5%]'>
            <div
              className={styles.work}
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </div>
        </Section>
        {relatedWorks && relatedWorks.length > 0 && (
          <RelatedWorks works={relatedWorks} />
        )}
      </Layout>
    </>
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

  const { databaseId: workId } = work;

  // Fetch related works
  const relatedData = await getRelatedWorks(workId);
  const relatedWorks = relatedData || [];

  const props = {
    work,
    relatedWorks,
  };

  return {
    props,
    revalidate: 500,
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
