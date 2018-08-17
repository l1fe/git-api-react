import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { repoActions } from 'redux/actions';

import styles from './styles.scss';

const Home = ({ fetchRepos }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Git API React</h1>
    <button onClick={() => fetchRepos()}>
      Fetch repos
    </button>
  </div>
);

Home.propTypes = {
  fetchRepos: PropTypes.func.isRequired,
}

const mapDispatchToProps = ({ fetchRepos: repoActions.fetchRepos });

export default connect(null, mapDispatchToProps)(Home);
