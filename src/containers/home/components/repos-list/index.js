import React from 'react';
import PropTypes from 'prop-types';

import BookmarkIconSrc from 'assets/svg/bookmark.svg';
import BookmarkRedIconSrc from 'assets/svg/bookmark-red.svg';

import styles from './styles.scss';

const ReposList = ({ loading, error, items, onBookmarkToggle }) => (
  <div className={[styles.list, loading && styles.listLoading].join(' ')}>
    { error && <div className={styles.error}>Got an error</div> }
    { !error && !items.length && <div className={styles.empty}>No items found</div> }
    { items.length > 0 && <div className={styles.info}>{ `${items.length} items found `}</div>}
    {items.map(({ id, name, description, html_url: htmlUrl, bookmarked }) => (
      <div key={id} className={styles.item}>
        <a className={styles.nameLink} href={htmlUrl} target="_blank">
          { name }
        </a>
        <div className={styles.description}>
          { description }
        </div>
        { bookmarked && <div className={styles.bookmark} /> }
        <button onClick={() => onBookmarkToggle(id, !bookmarked)} className={styles.bookmarkBtn}>
          <img
            src={bookmarked ? BookmarkRedIconSrc : BookmarkIconSrc}
            className={styles.bookmarkBtnIcon}
          />
        </button>
      </div>
    ))}
  </div>
);

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    html_url: PropTypes.string,
    bookmarked: PropTypes.bool,
  })),
  onBookmarkToggle: PropTypes.func.isRequired,
};

ReposList.defaultProps = {
  items: [],
};

export default ReposList;
