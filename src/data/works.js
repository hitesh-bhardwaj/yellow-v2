import { gql } from '@apollo/client';

export const WORK_FIELDS = gql`
  fragment WorkFields on Work {
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
    databaseId
    date
    workId
    slug
    title
  }
`;

export const QUERY_ALL_WORKS_INDEX = gql`
  ${WORK_FIELDS}
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
  ${WORK_FIELDS}
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
  ${WORK_FIELDS}
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
      databaseId
      title
      slug
    }
  }
`;

export const QUERY_WORKS_BY_WORKCATEGORY_ID_INDEX = gql`
  ${WORK_FIELDS}
  query WorksByWorkCategoryId($workcategoryId: Int!) {
    works(where: { workcategoryId: $workcategoryId, hasPassword: false }) {
      edges {
        node {
          ...WorkFields
        }
      }
    }
  }
`;

export const QUERY_WORKS_BY_WORKCATEGORY_ID_ARCHIVE = gql`
  ${WORK_FIELDS}
  query WorksByWorkCategoryId($workcategoryId: Int!) {
    works(where: { workcategoryId: $workcategoryId, hasPassword: false }) {
      edges {
        node {
          ...WorkFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
`;

export const QUERY_WORKS_BY_WORKCATEGORY_ID = gql`
  ${WORK_FIELDS}
  query WorksByWokrCategoryId($workcategoryId: Int!) {
    works(where: { workcategoryId: $workcategoryId, hasPassword: false }) {
      edges {
        node {
          ...WorkFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
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

export const QUERY_WORK_PER_PAGE = gql`
  query WorkPerPage {
    allSettings {
      readingSettingsWorksPerPage
    }
  }
`;

export const GET_HOME_PAGE_WORKS = gql`
  query worksforHomePage {
    works(first: 3) {
      nodes {
        id
        slug
        title
        date
        excerpt
        workFields {
          featuredImagevideo {
            node {
              mediaItemUrl
            }
          }
        }
        workcategories {
          nodes {
            name
          }
        }
      }
    }
  }
`;