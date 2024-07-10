import { gql } from '@apollo/client';

export const QUERY_ALL_WORKCATEGORIES = gql`
  query AllWorkCategories {
    workcategories(first: 100) {
      edges {
        node {
          databaseId
          description
          id
          name
          slug
        }
      }
    }
  }
`;

export const QUERY_WORKCATEGORY_BY_SLUG = gql`
  query WorkCategoryBySlug($slug: ID!) {
    workcategory(id: $slug, idType: SLUG) {
      databaseId
      description
      id
      name
      slug
    }
  }
`;

export const QUERY_WORKCATEGORY_SEO_BY_SLUG = gql`
  query WorkCategorySEOBySlug($slug: ID!) {
    workcategory(id: $slug, idType: SLUG) {
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
