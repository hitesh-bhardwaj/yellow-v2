import { gql } from '@apollo/client';

export const JOB_FIELDS = gql`
  fragment JobFields on Job {
    id
    databaseId
    title
    date
    slug
    jobCategories {
      nodes {
        name
        slug
        id
      }
    }
    jobFields {
      location
      jobType
    }
  }
`;

export const QUERY_ALL_WORKS_INDEX = gql`
  ${JOB_FIELDS}
  query AllWorksIndex {
    works(first: 1000, where: { hasPassword: false }) {
      edges {
        node {
          ...WorkFields
        }
      }
    }
  }
`;

export const QUERY_ALL_WORKS_ARCHIVE = gql`
  ${JOB_FIELDS}
  query AllWorksArchive {
    works(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...WorkFields
          excerpt
        }
      }
    }
  }
`;

export const QUERY_ALL_WORKS = gql`
  ${JOB_FIELDS}
  query AllWorks {
    works(first: 1000, where: { hasPassword: false }) {
      edges {
        node {
          ...WorkFields
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
          modified
        }
      }
    }
  }
`;

export const QUERY_WORK_BY_SLUG = gql`
  query WorkBySlug($slug: ID!) {
    work(id: $slug, idType: SLUG) {
      id
      workcategories {
        edges {
          node {
            databaseId
            id
            name
            slug
          }
        }
      }
      content
      date
      databaseId
      title
      slug
      workId
      workFields {
        information {
          description
          industry
          subheading
          detailPageFeaturedImageVideo {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;

export const QUERY_WORK_SEO_BY_SLUG = gql`
  query WorkSEOBySlug($slug: ID!) {
    work(id: $slug, idType: SLUG) {
      id
      seo {
        canonical
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphTitle
        opengraphType
        readingTime
        title
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        opengraphImage {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;