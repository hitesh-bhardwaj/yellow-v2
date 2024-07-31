import { Helmet } from 'react-helmet';
import { helmetSettingsFromMetadata } from '@/lib/site';
import useSite from '@/hooks/use-site';
import usePageMetadata from '@/hooks/use-page-metadata';
import Layout from '@/components/Layout';
import { getRecentWorks, getRelatedWorks, getWorkBySlug } from '@/lib/works';
import Pagehero from '@/components/PortfolioDetail/Pagehero';
import Section from '@/components/Section';
import Information from '@/components/PortfolioDetail/Information';
import styles from "@/styles/work.module.css";
import RelatedWorks from '@/components/PortfolioDetail/RelatedWorks';
import { titleAnim , paraAnim , lineAnim, imageAnim , fadeUp } from '@/components/gsapAnimations';

export default function Work({ work, socialImage, relatedWorks }) {
  const {
    title,
    metaTitle,
    description,
    content,
    date,
    workFields,
    workcategories,
  } = work;

  titleAnim();
  paraAnim();
  lineAnim();
  imageAnim();
  fadeUp();

  const { metadata: siteMetadata = {}, homepage } = useSite();

  if (!work.og) {
    work.og = {};
  }

  work.og.imageUrl = `${homepage}/${socialImage}`;
  work.og.imageSecureUrl = work.og.imageUrl;
  work.og.imageWidth = 2000;
  work.og.imageHeight = 1000;

  const { metadata } = usePageMetadata({
    metadata: {
      ...work,
      title: metaTitle,
      description: description || work.og?.description || `Read more about ${title}`,
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
      <Pagehero
        src={workFields.information.detailPageFeaturedImageVideo.node.mediaItemUrl}
        workcategories={workcategories}
        date={date}
        title={title}
      />
      <Information 
        info={workFields.information}
        title={title}
        categories={workcategories}
      />
      <Section id="work-content" className='bg-black'>
        <div className='container bg-white '>
          <div
            className={styles.work}
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
      </Section>
      {relatedWorks && relatedWorks.length > 0 && (
        <RelatedWorks works={relatedWorks}/>
      )}
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

  const { databaseId: workId } = work;

    // Fetch related works
    const relatedData = await getRelatedWorks(workId);
    const relatedWorks = relatedData || [];

  const props = {
    work,
    socialImage: `${process.env.OG_IMAGE_DIRECTORY}/${workSlug}.png`,
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
