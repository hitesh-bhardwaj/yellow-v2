import Link from 'next/link';

import { workPathBySlug, sanitizeExcerpt } from '@/lib/works';

import Metadata from '@/components/Wordpress/Metadata';

// import { FaMapPin } from 'react-icons/fa';
import styles from './WorkCard.module.scss';

const WorkCard = ({ post, options = {} }) => {
  const { title, excerpt, slug, date, author, categories, isSticky = false } = post;
  const { excludeMetadata = [] } = options;

  const metadata = {};

  if (!excludeMetadata.includes('author')) {
    metadata.author = author;
  }

  if (!excludeMetadata.includes('date')) {
    metadata.date = date;
  }

  if (!excludeMetadata.includes('categories')) {
    metadata.categories = categories;
  }

  let postCardStyle = styles.postCard;

  if (isSticky) {
    postCardStyle = `${postCardStyle} ${styles.postCardSticky}`;
  }

  return (
    <div className={postCardStyle}>
      {/* {isSticky && <FaMapPin aria-label="Sticky Post" />} */}
      <Link href={workPathBySlug(slug)}>
        <h3
          className={styles.postCardTitle}
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
      </Link>
      <Metadata className={styles.postCardMetadata} {...metadata} />
      {excerpt && (
        <div
          className={styles.postCardContent}
          dangerouslySetInnerHTML={{
            __html: sanitizeExcerpt(excerpt),
          }}
        />
      )}
    </div>
  );
};

export default WorkCard;
