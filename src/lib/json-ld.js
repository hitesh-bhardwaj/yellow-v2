// lib/json-ld.jsx
import Head from 'next/head';
import config from '../../package.json'; // adjust relative path if needed
import { authorPathByName } from './users';
import { postPathBySlug } from './posts';

function JsonLd({ json }) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </Head>
  );
}

export function ArticleJsonLd({ post = {} }) {
  const { homepage = '', faviconPath = '/favicon.ico' } = config || {};
  const {
    title,
    slug,
    date,
    author,
    categories = [],
    modified,
    featuredImage,
    metaDescription,
  } = post;

  const path = postPathBySlug(slug);
  const datePublished = date ? new Date(date) : undefined;
  const dateModified = modified ? new Date(modified) : datePublished;

  const json = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${homepage}${path}` },
    headline: title,
    image: featuredImage && featuredImage.sourceUrl ? [featuredImage.sourceUrl] : undefined,
    datePublished: datePublished && datePublished.toISOString(),
    dateModified: dateModified && dateModified.toISOString(),
    description: metaDescription,
    keywords: categories.map(c => c.name).join(', '),
    copyrightYear: datePublished && datePublished.getFullYear(),
    author: { '@type': 'Person', name: author && author.name },
    publisher: {
      '@type': 'Organization',
      name: 'Yellow Agency',
      logo: { '@type': 'ImageObject', url: `${homepage}${faviconPath}` },
    },
  };

  return <JsonLd json={json} />;
}

export function OrganizationJsonLd() {
  const { homepage = '' } = config || {};

  const json = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${homepage}/#organization`,
    name: 'Yellow',
    description:
      'A Dubai branding agency and communications company, we help grow amazing businesses through compelling brands.',
    url: homepage,
    telephone: '+971 4 240 6696',
    email: 'hello@welcometoyellow.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Loft Offices 2, Office 107',
      addressLocality: 'Dubai Media City',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    logo: `${homepage}/favicon.ico`,
    sameAs: [
      'https://www.instagram.com/welcometoyellow/',
      'https://www.linkedin.com/company/yellow-branding',
      'https://www.behance.net/welcometoyellow',
      'https://in.pinterest.com/Yellowbranding/',
    ],
  };

  return <JsonLd json={json} />;
}

export function WebsiteJsonLd() {
  const { homepage = '' } = config || {};

  const json = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${homepage}/#website`,
    name: 'Yellow',
    url: homepage,
    copyrightYear: new Date().getFullYear(),
    inLanguage: 'en-US',
    publisher: { '@id': `${homepage}/#organization` },
  };

  return <JsonLd json={json} />;
}

export function ImageObjectJsonLd() {
  const { homepage = '' } = config || {};
  const url = `${homepage}/assets/images/seo/home.png`;

  const json = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    '@id': url,
    url,
    width: '1920',
    height: '1016',
    inLanguage: 'en-US',
  };

  return <JsonLd json={json} />;
}

export function WebpageJsonLd({ metadata = {} }) {
  const { homepage = '', faviconPath = '/favicon.ico' } = config || {};
  const { title, slug = '', description, date_published, date_modified } = metadata;

  const pageUrl = slug ? `${homepage}/${slug}`.replace(/\/+$/, '') : homepage;

  const json = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    datePublished: date_published,
    dateModified: date_modified || date_published,
    publisher: {
      '@type': 'Organization',
      name: 'Yellow',
      logo: { '@type': 'ImageObject', url: `${homepage}${faviconPath}` },
    },
    about: { '@id': `${homepage}/#organization` }, // root IDs for cross-refs
    isPartOf: { '@id': `${homepage}/#website` },
    inLanguage: 'en-US',
  };

  return <JsonLd json={json} />;
}

export function LocalBusiness() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Yellow Branding Agency',
    image: 'https://welcometoyellow.com/assets/images/seo/home.png',
    url: 'https://welcometoyellow.com/',
    telephone: '+971 4 582 0205',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Loft Offices 2, Office 107',
      addressLocality: 'Dubai',
      postalCode: '25314',
      addressRegion: 'Dubai',
      addressCountry: 'AE', // fixed
    },
    sameAs: [
      'https://www.linkedin.com/company/yellow-branding',
      'https://www.instagram.com/welcometoyellow/',
      'https://www.behance.net/welcometoyellow',
      'https://in.pinterest.com/Yellowbranding/',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:30',
        closes: '17:30', // 05:30 PM in 24h
      },
    ],
  };

  return <JsonLd json={json} />;
}

export function AuthorJsonLd({ author = {} }) {
  const { homepage = '' } = config || {};
  const { name, avatar, description } = author;
  const path = authorPathByName(name);

  const json = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    image: avatar && avatar.url,
    url: `${homepage}${path}`,
    description,
  };

  return <JsonLd json={json} />;
}
