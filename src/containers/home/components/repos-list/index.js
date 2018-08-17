import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const ReposList = ({ loading, error, items, onBookmarkToggle }) => (
  <div className={styles.list}>
    { loading && <div className={styles.loading}>Loading</div> }
    { error && <div className={styles.error}>Error</div> }
    { !items.length && <div className={styles.empty}>No items</div> }
    {items.map(({ id, name, bookmarked }) => (
      <div key={id} className={styles.item}>
        { name }
        { bookmarked && <div className={styles.bookmark} /> }
        <button onClick={() => onBookmarkToggle(id, !bookmarked)}>
          Bookmark
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
    name: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
  })),
  onBookmarkToggle: PropTypes.func.isRequired,
};

ReposList.defaultProps = {
  items: [],
};

export default ReposList;
