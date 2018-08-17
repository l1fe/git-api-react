import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { repoActions } from 'redux/actions';
import { Input } from 'components';

import { ReposList } from './components';
import styles from './styles.scss';

/* eslint-disable no-console */
const Home = ({ loading, error, items, fetchRepos }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Git API React</h1>

    <div className={styles.content}>
      <Input
        type="text"
        placeholder="Start typing..."
        onChange={(e) => fetchRepos({ name: e.target.value })}
      />

      <ReposList
        loading={loading}
        error={error}
        items={items}
        onBookmarkToggle={() => {}}
      />
    </div>
  </div>
);

Home.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    stars: PropTypes.number.isRequired,
  })).isRequired,
  fetchRepos: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  loading: state.repo.loading,
  error: state.repo.error,
  items: state.repo.items,
});
const mapDispatchToProps = ({ fetchRepos: repoActions.fetchRepos });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
