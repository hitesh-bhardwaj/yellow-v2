import { Helmet } from 'react-helmet';

import { helmetSettingsFromMetadata } from '@/lib/site';
import useSite from '@/hooks/use-site';

import Layout from '@/components/Wordpress/Layout';
import Section from '@/components/Wordpress/Section';

import WorkCard from '@/components/Wordpress/WorkCard';
import Pagination from '@/components/Wordpress/Pagination';

const DEFAULT_POST_OPTIONS = {};

export default function WorkArchive({
  title = 'Archive',
  posts,
  postOptions = DEFAULT_POST_OPTIONS,
  metadata,
  pagination,
}) {
  const { metadata: siteMetadata = {} } = useSite();

  if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }

  const helmetSettings = helmetSettingsFromMetadata(metadata);

  return (
    <Layout>
      <Helmet {...helmetSettings} />

      <Section>
          {Array.isArray(posts) && (
            <>
              <ul>
                {posts.map((post) => {
                  return (
                    <li key={post.slug}>
                      <WorkCard post={post} options={postOptions} />
                    </li>
                  );
                })}
              </ul>
              {pagination && (
                <Pagination
                  currentPage={pagination?.currentPage}
                  pagesCount={pagination?.pagesCount}
                  basePath={pagination?.basePath}
                />
              )}
            </>
          )}
      </Section>
    </Layout>
  );
}
