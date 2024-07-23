import { getApolloClient } from './apollo-client';

import {
  QUERY_ALL_WORKCATEGORIES,
  QUERY_WORKCATEGORY_BY_SLUG,
  QUERY_WORKCATEGORY_SEO_BY_SLUG,
} from '../data/workcategories';

/**
 * workcategoryPathBySlug
 */

export function workcategoryPathBySlug(slug) {
  return `/our-work/category/${slug}`;
}

/**
 * getAllWorkCategories
 */

export async function getAllWorkCategories() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_WORKCATEGORIES,
  });

  const workcategories = data?.data.workcategories.edges.map(({ node = {} }) => node);

  return {
    workcategories,
  };
}

/**
 * getWorkCategoryBySlug
 */

export async function getWorkCategoryBySlug(slug) {
  const apolloClient = getApolloClient();
  const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host;

  let workcategoryData;
  let seoData;

  try {
    workcategoryData = await apolloClient.query({
      query: QUERY_WORKCATEGORY_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[categories][getWorkCategoryBySlug] Failed to query workcategory data: ${e.message}`);
    throw e;
  }

  if (!workcategoryData?.data.workcategory) return { workcategory: undefined };

  const workcategory = mapWorkCategoryData(workcategoryData?.data.workcategory);

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (process.env.WORDPRESS_PLUGIN_SEO === true) {
    try {
      seoData = await apolloClient.query({
        query: QUERY_WORKCATEGORY_SEO_BY_SLUG,
        variables: {
          slug,
        },
      });
    } catch (e) {
      console.log(`[workcategories][getWorkCategoryBySlug] Failed to query SEO plugin: ${e.message}`);
      console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.');
      throw e;
    }

    const { seo = {} } = seoData?.data?.workcategory || {};

    workcategory.title = seo.title;
    workcategory.description = seo.metaDesc;

    // The SEO plugin by default includes a canonical link, but we don't want to use that
    // because it includes the WordPress host, not the site host. We manage the canonical
    // link along with the other metadata, but explicitly check if there's a custom one
    // in here by looking for the API's host in the provided canonical link

    if (seo.canonical && !seo.canonical.includes(apiHost)) {
      workcategory.canonical = seo.canonical;
    }

    workcategory.og = {
      author: seo.opengraphAuthor,
      description: seo.opengraphDescription,
      image: seo.opengraphImage,
      modifiedTime: seo.opengraphModifiedTime,
      publishedTime: seo.opengraphPublishedTime,
      publisher: seo.opengraphPublisher,
      title: seo.opengraphTitle,
      type: seo.opengraphType,
    };

    workcategory.article = {
      author: workcategory.og.author,
      modifiedTime: workcategory.og.modifiedTime,
      publishedTime: workcategory.og.publishedTime,
      publisher: workcategory.og.publisher,
    };

    workcategory.robots = {
      nofollow: seo.metaRobotsNofollow,
      noindex: seo.metaRobotsNoindex,
    };

    workcategory.twitter = {
      description: seo.twitterDescription,
      image: seo.twitterImage,
      title: seo.twitterTitle,
    };
  }

  return {
    workcategory,
  };
}

/**
 * getWorkCategories
 */

export async function getWorkCategories({ count } = {}) {
  const { workcategories } = await getAllWorkCategories();
  return {
    workcategories: workcategories.slice(0, count),
  };
}

/**
 * mapWorkCategoryData
 */

export function mapWorkCategoryData(workcategory = {}) {
  const data = { ...workcategory };
  return data;
}
