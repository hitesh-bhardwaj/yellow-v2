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
    workFields {
      featuredImagevideo {
        node {
          mediaItemUrl
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
      modified
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
          content
          excerpt
          modified
        }
      }
    }
  }
`;

export const QUERY_WORKCATEGORY_BY_ID_FOR_WORKS = gql`
  ${WORK_FIELDS}
  query WorkCategoryByIdForWorks($workcategoryId: ID!) {
    workcategory(id: $workcategoryId, idType: DATABASE_ID) {
      id
      name
      slug
      works(where: { hasPassword: false }) {
        edges {
          node {
            ...WorkFields
            excerpt
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
        metaDesc
        title
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
      readingSettingsPostsPerPage
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

export const GET_RELATED_WORKS = gql`
  query WorkByWorkCategoryUsingWorkID($first: Int = 1, $count: Int = 3, $workId: ID!, $notIn: [ID] = []) {
    work(id: $workId, idType: DATABASE_ID) {
      id
      databaseId
      workcategories(first: $first) {
        edges {
          node {
            name
            works(first: $count, where: {notIn: $notIn}) {
              edges {
                node {
                  slug
                  workFields {
                    featuredImagevideo {
                      node {
                        mediaItemUrl
                      }
                    }
                  }
                  title
                  excerpt
                  workcategories {
                    edges {
                      node {
                        id
                        slug
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;