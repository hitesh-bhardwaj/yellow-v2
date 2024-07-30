import { Helmet } from 'react-helmet';
import { helmetSettingsFromMetadata } from '@/lib/site';
import useSite from '@/hooks/use-site';
import usePageMetadata from '@/hooks/use-page-metadata';
import Layout from '@/components/Layout';
import { titleAnim , paraAnim , lineAnim, imageAnim , fadeUp } from '@/components/gsapAnimations';
import { getAllJobs, getJobBySlug } from '@/lib/jobs';
import Pagehero from '@/components/career-detail/Pagehero';
import Overview from '@/components/career-detail/Overview';
import CareerForm from '@/components/career-detail/CareerForm';

export default function Work({ job, socialImage, jobsList }) {
  const {
    title,
    metaTitle,
    description,
    featuredImage,
    jobFields,
  } = job;

  titleAnim();
  paraAnim();
  lineAnim();
  imageAnim();
  fadeUp();

  const { metadata: siteMetadata = {}, homepage } = useSite();

  if (!job.og) {
    job.og = {};
  }

  job.og.imageUrl = `${homepage}/${socialImage}`;
  job.og.imageSecureUrl = job.og.imageUrl;
  job.og.imageWidth = 2000;
  job.og.imageHeight = 1000;

  const { metadata } = usePageMetadata({
    metadata: {
      ...job,
      title: metaTitle,
      description: description || job.og?.description || `Read more about ${title}`,
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
            title={title}
            bgImage={featuredImage}
            jobInfo={jobFields}
        />
        <Overview details={jobFields.overview}/>
        <CareerForm jobs={jobsList} />
    </Layout>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { career: jobSlug } = params;
  const { job } = await getJobBySlug(jobSlug);

  if (!job) {
    return {
      props: {},
      notFound: true,
    };
  }

  const jobsList = await getAllJobs({
    queryIncludes: 'index',
  });

  const props = {
    job,
    socialImage: `${process.env.OG_IMAGE_DIRECTORY}/${jobSlug}.png`,
    jobsList
  };

  return {
    props,
    revalidate: 500,
  };
}

export async function getStaticPaths() {
  const { jobs } = await getAllJobs({
    queryIncludes: 'index',
  });

  const paths = jobs
    .filter(({ slug }) => typeof slug === 'string')
    .map(({ slug }) => ({
      params: {
        career: slug,
      },
    }));

  return {
    paths,
    fallback: 'blocking',
  };
}
