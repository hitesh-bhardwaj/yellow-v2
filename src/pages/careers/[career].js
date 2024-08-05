import Layout from '@/components/Layout';
import { titleAnim, paraAnim, lineAnim, imageAnim, fadeUp } from '@/components/gsapAnimations';
import { getAllJobs, getJobBySlug } from '@/lib/jobs';
import Pagehero from '@/components/career-detail/Pagehero';
import Overview from '@/components/career-detail/Overview';
import CareerForm from '@/components/career-detail/CareerForm';
import { JobpostingJsonLd } from '@/lib/json-ld';
import config from '../../../package.json';
import { NextSeo } from 'next-seo';

export default function Work({ job, jobsList }) {

  const {
    title,
    featuredImage,
    jobFields,
    slug,
    seo,
  } = job;

  const { homepage = '' } = config;
  const path = `${homepage}/careers/${slug}`

  titleAnim();
  paraAnim();
  lineAnim();
  imageAnim();
  fadeUp();

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDesc}
        openGraph={{
          url: `${path}`,
          title: seo.title,
          "description": seo.metaDesc,
          images: [
            {
              url: seo.opengraphImage.sourceUrl,
              width: seo.opengraphImage.mediaDetails.width,
              height: seo.opengraphImage.mediaDetails.height,
              alt: seo.opengraphImage.alt,
              type: "image/webp",
            },
          ],
          siteName: "Yellow",
        }}
        additionalLinkTags={[
          {
            rel: "canonical",
            href: `${path}`,
          },
          {
            rel: "alternate",
            href: `${path}`,
            hreflang: "x-default",
          }
        ]}
      />
      <JobpostingJsonLd job={job} />
      <Layout>
        <Pagehero
          title={title}
          bgImage={featuredImage}
          jobInfo={jobFields}
        />
        <Overview details={jobFields.overview} />
        <CareerForm jobs={jobsList} />
      </Layout>
    </>
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
