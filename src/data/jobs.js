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
  }
`;

export const QUERY_ALL_JOBS_INDEX = gql`
  ${JOB_FIELDS}
  query AllJobsIndex {
    jobs(first: 1000, where: { hasPassword: false }) {
      edges {
        node {
          ...JobFields
            jobFields {
            jobType
            location
            }
        }
      }
    }
  }
`;

export const QUERY_ALL_JOBS_ARCHIVE = gql`
  ${JOB_FIELDS}
  query AllJobsArchive {
    jobs(first: 1000, where: { hasPassword: false }) {
      edges {
        node {
          ...JobFields
          jobFields {
            jobType
            location
            }
        }
      }
    }
  }
`;

export const QUERY_ALL_JOBS = gql`
  ${JOB_FIELDS}
  query AllJobs {
    jobs(first: 1000, where: { hasPassword: false }) {
      edges {
        node {
          ...JobFields
          jobFields {
            jobType
            location
          }
        }
      }
    }
  }
`;

export const QUERY_JOB_BY_SLUG = gql`
  ${JOB_FIELDS}
  query JobBySlug($slug: ID!) {
    job(id: $slug, idType: SLUG) {
      ...JobFields
      jobFields {
        ctcRange
        experience
        jobType
        location
        overview
      }
    }
  }
`;

export const QUERY_JOB_SEO_BY_SLUG = gql`
  query JobSEOBySlug($slug: ID!) {
    job(id: $slug, idType: SLUG) {
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