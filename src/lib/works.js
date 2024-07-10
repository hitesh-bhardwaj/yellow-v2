import { getApolloClient } from './apollo-client';

import { updateUserAvatar } from './users';
import { sortObjectsByDate } from './datetime';

import {
  QUERY_ALL_WORKS_INDEX,
  QUERY_ALL_WORKS_ARCHIVE,
  QUERY_ALL_WORKS,
  QUERY_WORK_BY_SLUG,
  QUERY_WORKS_BY_WORKCATEGORY_ID_INDEX,
  QUERY_WORKS_BY_WORKCATEGORY_ID_ARCHIVE,
  QUERY_WORKS_BY_WORKCATEGORY_ID,
  QUERY_WORK_SEO_BY_SLUG,
  QUERY_WORK_PER_PAGE,
  GET_HOME_PAGE_WORKS,
} from '../data/works';

/**
 * workPathBySlug
 */

export function workPathBySlug(slug) {
  return `/our-work/${slug}`;
}

/**
 * getWorkBySlug
 */

export async function getWorkBySlug(slug) {
  const apolloClient = getApolloClient();
  const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host;

  let workData;
  let seoData;

  try {
    workData = await apolloClient.query({
      query: QUERY_WORK_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[works][getWorkBySlug] Failed to query work data: ${e.message}`);
    throw e;
  }

  if (!workData?.data.work) return { work: undefined };

  const work = [workData?.data.work].map(mapWorkData)[0];

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (process.env.WORDPRESS_PLUGIN_SEO === true) {
    try {
      seoData = await apolloClient.query({
        query: QUERY_WORK_SEO_BY_SLUG,
        variables: {
          slug,
        },
      });
    } catch (e) {
      console.log(`[works][getWorkBySlug] Failed to query SEO plugin: ${e.message}`);
      console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.');
      throw e;
    }

    const { seo = {} } = seoData?.data?.work || {};

    work.metaTitle = seo.title;
    work.metaDescription = seo.metaDesc;
    work.readingTime = seo.readingTime;

    // The SEO plugin by default includes a canonical link, but we don't want to use that
    // because it includes the WordPress host, not the site host. We manage the canonical
    // link along with the other metadata, but explicitly check if there's a custom one
    // in here by looking for the API's host in the provided canonical link

    if (seo.canonical && !seo.canonical.includes(apiHost)) {
      work.canonical = seo.canonical;
    }

    work.og = {
      author: seo.opengraphAuthor,
      description: seo.opengraphDescription,
      image: seo.opengraphImage,
      modifiedTime: seo.opengraphModifiedTime,
      publishedTime: seo.opengraphPublishedTime,
      publisher: seo.opengraphPublisher,
      title: seo.opengraphTitle,
      type: seo.opengraphType,
    };

    work.article = {
      author: work.og.author,
      modifiedTime: work.og.modifiedTime,
      publishedTime: work.og.publishedTime,
      publisher: work.og.publisher,
    };

    work.robots = {
      nofollow: seo.metaRobotsNofollow,
      noindex: seo.metaRobotsNoindex,
    };

    work.twitter = {
      description: seo.twitterDescription,
      image: seo.twitterImage,
      title: seo.twitterTitle,
    };
  }

  return {
    work,
  };
}

/**
 * getAllWorks
 */

const allWorksIncludesTypes = {
  all: QUERY_ALL_WORKS,
  archive: QUERY_ALL_WORKS_ARCHIVE,
  index: QUERY_ALL_WORKS_INDEX,
};

export async function getAllWorks(options = {}) {
  const { queryIncludes = 'index' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allWorksIncludesTypes[queryIncludes],
  });

  const works = data?.data.works.edges.map(({ node = {} }) => node);

  return {
    works: Array.isArray(works) && works.map(mapWorkData),
  };
}

/**
 * getWorksByWorkWorkCategoryId
 */

const worksByWorkCategoryIdIncludesTypes = {
  all: QUERY_WORKS_BY_WORKCATEGORY_ID,
  archive: QUERY_WORKS_BY_WORKCATEGORY_ID_ARCHIVE,
  index: QUERY_WORKS_BY_WORKCATEGORY_ID_INDEX,
};

export async function getWorksByWorkCategoryId({ workcategoryId, ...options }) {
  const { queryIncludes = 'index' } = options;

  const apolloClient = getApolloClient();

  let workData;

  try {
    workData = await apolloClient.query({
      query: worksByWorkCategoryIdIncludesTypes[queryIncludes],
      variables: {
        workcategoryId,
      },
    });
  } catch (e) {
    console.log(`[works][getWorksByWorkCategoryId] Failed to query work data: ${e.message}`);
    throw e;
  }

  const works = workData?.data.works.edges.map(({ node = {} }) => node);

  return {
    works: Array.isArray(works) && works.map(mapWorkData),
  };
}

/**
 * getRecentWorks
 */

export async function getRecentWorks({ count, ...options }) {
  const { works } = await getAllWorks(options);
  const sorted = sortObjectsByDate(works);
  return {
    works: sorted.slice(0, count),
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
 * mapWorkData
 */

export function mapWorkData(work = {}) {
  const data = { ...work };

  // Clean up the author object to avoid someone having to look an extra
  // level deeper into the node

  if (data.author) {
    data.author = {
      ...data.author.node,
    };
  }

  // The URL by default that comes from Gravatar / WordPress is not a secure
  // URL. This ends up redirecting to https, but it gives mixed content warnings
  // as the HTML shows it as http. Replace the url to avoid those warnings
  // and provide a secure URL by default

  if (data.author?.avatar) {
    data.author.avatar = updateUserAvatar(data.author.avatar);
  }

  // Clean up the workcategories to make them more easy to access

  if (data.workcategories) {
    data.workcategories = data.workcategories.edges.map(({ node }) => {
      return {
        ...node,
      };
    });
  }

  // Clean up the featured image to make them more easy to access

  if (data.featuredImage) {
    data.featuredImage = data.featuredImage.node;
  }

  return data;
}

/**
 * getRelatedWorks
 */

export async function getRelatedWorks(workcategories, workId, count = 3) {
  if (!Array.isArray(workcategories) || workcategories.length === 0) return;

  let related = {
    workcategory: workcategories && workcategories.shift(),
  };

  if (related.workcategory) {
    const { works } = await getWorksByWorkCategoryId({
      workcategoryId: related.workcategory.databaseId,
      queryIncludes: 'archive',
    });

    const filtered = works.filter(({ workId: id }) => id !== workId);
    const sorted = sortObjectsByDate(filtered);

    related.works = sorted.map((work) => ({ title: work.title, slug: work.slug }));
  }

  if (!Array.isArray(related.works) || related.works.length === 0) {
    const relatedWorks = await getRelatedWorks(workcategories, workId, count);
    related = relatedWorks || related;
  }

  if (Array.isArray(related.works) && related.works.length > count) {
    return related.works.slice(0, count);
  }

  return related;
}

/**
 * sortStickyWorks
 */

export function sortStickyWorks(works) {
  return [...works].sort((work) => (work.isSticky ? -1 : 1));
}

/**
 * getWorksPerPage
 */

export async function getWorksPerPage() {
  //If WORK_PER_PAGE is defined at next.config.js
  if (process.env.WORKS_PER_PAGE) {
    console.warn(
      'You are using the deprecated WORK_PER_PAGE variable. Use your WordPress instance instead to set this value ("Settings" > "Reading" > "Blog pages show at most").'
    );
    return Number(process.env.WORKS_PER_PAGE);
  }

  try {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
      query: QUERY_WORK_PER_PAGE,
    });

    return Number(data.allSettings.readingSettingsWorksPerPage);
  } catch (e) {
    console.log(`Failed to query work per page data: ${e.message}`);
    throw e;
  }
}

/**
 * getPageCount
 */

export async function getPagesCount(works, worksPerPage) {
  const _worksPerPage = worksPerPage ?? (await getWorksPerPage());
  return Math.ceil(works.length / _worksPerPage);
}

/**
 * getPaginatedWorks
 */

export async function getPaginatedWorks({ currentPage = 1, ...options } = {}) {
  const { works } = await getAllWorks(options);
  const worksPerPage = await getWorksPerPage();
  const pagesCount = await getPagesCount(works, worksPerPage);

  let page = Number(currentPage);

  if (typeof page === 'undefined' || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      works: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
    };
  }

  const offset = worksPerPage * (page - 1);
  const sortedWorks = sortStickyWorks(works);
  return {
    works: sortedWorks.slice(offset, offset + worksPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}

// Works for HomePage
export async function getHomePageWorks() {

  const apolloClient = getApolloClient();

  const { data } = await apolloClient.query({
    query: GET_HOME_PAGE_WORKS,
  });

  return data.works.nodes;
}
