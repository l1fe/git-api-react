import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { repoActions } from 'redux/actions';
import { Button } from 'components';

import { ReposList } from './components';
import styles from './styles.scss';

const Home = ({ loading, error, items, fetchRepos }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Git API React</h1>
    <Button
      primary
      onPress={() => fetchRepos()} title="Fetch Repos"
      className={styles.btn}
    />

    <ReposList
      loading={loading}
      error={error}
      items={items}
      onBookmarkToggle={() => {}}
    />
  </div>
);

Home.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
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
