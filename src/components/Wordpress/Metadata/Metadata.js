import Link from 'next/link';

import { categoryPathBySlug } from '@/lib/categories';
import { formatDate } from '@/lib/datetime';
import ClassName from '@/models/classname';

import styles from './Metadata.module.scss';

const DEFAULT_METADATA_OPTIONS = {
  compactCategories: true,
};

const Metadata = ({ className, date, categories, options = DEFAULT_METADATA_OPTIONS }) => {
  const metadataClassName = new ClassName(styles.metadata);

  metadataClassName.addIf(className, className);

  const { compactCategories } = options;

  return (
    <ul className={metadataClassName.toString()}>
      {date && (
        <li>
          <time pubdate="pubdate" dateTime={date}>
            {formatDate(date)}
          </time>
        </li>
      )}
      {Array.isArray(categories) && categories[0] && (
        <li className={styles.metadataCategories}>
          {compactCategories && (
            <p title={categories.map(({ name }) => name).join(', ')}>
              <Link href={categoryPathBySlug(categories[0].slug)}>{categories[0].name}</Link>
              {categories.length > 1 && ' and more'}
            </p>
          )}
          {!compactCategories && (
            <ul>
              {categories.map((category) => {
                return (
                  <li key={category.slug}>
                    <Link href={categoryPathBySlug(category.slug)}>{category.name}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      )}
    </ul>
  );
};

export default Metadata;
