import { getApolloClient } from './apollo-client';

import {
    QUERY_ALL_JOBS_INDEX,
    QUERY_ALL_JOBS_ARCHIVE,
    QUERY_ALL_JOBS,
    QUERY_JOB_BY_SLUG,
    QUERY_JOB_SEO_BY_SLUG,
} from '../data/jobs';

/**
 * jobPathBySlug
 */

export function jobPathBySlug(slug) {
  return `/careers/${slug}`;
}

/**
 * getJobBySlug
 */

export async function getJobBySlug(slug) {
  const apolloClient = getApolloClient();
  const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host;

  let jobData;
  let seoData;

  try {
    jobData = await apolloClient.query({
      query: QUERY_JOB_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[jobs][getJobBySlug] Failed to query job data: ${e.message}`);
    throw e;
  }

  if (!jobData?.data.job) return { job: undefined };

  const job = [jobData?.data.job].map(mapJobData)[0];

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (process.env.WORDPRESS_PLUGIN_SEO === true) {
    try {
      seoData = await apolloClient.query({
        query: QUERY_JOB_SEO_BY_SLUG,
        variables: {
          slug,
        },
      });
    } catch (e) {
      console.log(`[jobs][getJobBySlug] Failed to query SEO plugin: ${e.message}`);
      console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.');
      throw e;
    }

    const { seo = {} } = seoData?.data?.job || {};

    job.metaTitle = seo.title;
    job.metaDescription = seo.metaDesc;
    job.readingTime = seo.readingTime;

    // The SEO plugin by default includes a canonical link, but we don't want to use that
    // because it includes the WordPress host, not the site host. We manage the canonical
    // link along with the other metadata, but explicitly check if there's a custom one
    // in here by looking for the API's host in the provided canonical link

    if (seo.canonical && !seo.canonical.includes(apiHost)) {
      job.canonical = seo.canonical;
    }

    job.og = {
      author: seo.opengraphAuthor,
      description: seo.opengraphDescription,
      image: seo.opengraphImage,
      modifiedTime: seo.opengraphModifiedTime,
      publishedTime: seo.opengraphPublishedTime,
      publisher: seo.opengraphPublisher,
      title: seo.opengraphTitle,
      type: seo.opengraphType,
    };

    job.article = {
      author: job.og.author,
      modifiedTime: job.og.modifiedTime,
      publishedTime: job.og.publishedTime,
      publisher: job.og.publisher,
    };

    job.robots = {
      nofollow: seo.metaRobotsNofollow,
      noindex: seo.metaRobotsNoindex,
    };

    job.twitter = {
      description: seo.twitterDescription,
      image: seo.twitterImage,
      title: seo.twitterTitle,
    };
  }

  return {
    job,
  };
}

/**
 * getAllJobs
 */

const allJobsIncludesTypes = {
  all: QUERY_ALL_JOBS,
  archive: QUERY_ALL_JOBS_ARCHIVE,
  index: QUERY_ALL_JOBS_INDEX,
};

export async function getAllJobs(options = {}) {
  const { queryIncludes = 'index' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allJobsIncludesTypes[queryIncludes],
  });

  const jobs = data?.data.jobs.edges.map(({ node = {} }) => node);

  return {
    jobs: Array.isArray(jobs) && jobs.map(mapJobData),
  };
}

/**
 * sanitizeExcerpt
 */

export function sanitizeExcerpt(excerpt) {
  if (typeof excerpt !== 'string') {
    throw new Error(`Failed to sanitize excerpt: invalid type ${typeof excerpt}`);
  }

  let sanitized = excerpt;

  // If the theme includes [...] as the more indication, clean it up to just ...

  sanitized = sanitized.replace(/\s?\[&hellip;\]/, '&hellip;');

  // If after the above replacement, the ellipsis includes 4 dots, it's
  // the end of a setence

  sanitized = sanitized.replace('....', '.');
  sanitized = sanitized.replace('.&hellip;', '.');

  // If the theme is including a "Continue..." link, remove it

  sanitized = sanitized.replace(/\w*<a class="more-link".*<\/a>/, '');

  return sanitized;
}

/**
 * mapJobData
 */

export function mapJobData(job = {}) {
  const data = { ...job };

  // Clean up the jobcategories to make them more easy to access
  if (data.jobCategories) {
    data.jobCategories = data.jobCategories.nodes.map(({ node }) => {
      return {
        ...node,
      };
    });
  }

  return data;
}

/**
 * sortStickyJobs
 */

export function sortStickyJobs(jobs) {
  return [...jobs].sort((job) => (job.isSticky ? -1 : 1));
}