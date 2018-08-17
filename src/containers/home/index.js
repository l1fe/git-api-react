import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { repoActions } from 'redux/actions';

import { ReposList, Form } from './components';
import styles from './styles.scss';

class Home extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      bookmarked: PropTypes.bool,
    })).isRequired,
    fetchRepos: PropTypes.func.isRequired,
    updateRepo: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { fetchRepos } = this.props;
    fetchRepos();
  }

  render() {
    const { loading, error, items, fetchRepos, updateRepo } = this.props;

    return (
       <div className={styles.container}>
         <h1 className={styles.title}>Git API React</h1>
         <div className={styles.content}>
           <Form
             onChange={({ name, bookmarked }) => fetchRepos({ name, bookmarked })}
           />
           <ReposList
             loading={loading}
             error={error}
             items={items}
             onBookmarkToggle={(id, bookmarked) => updateRepo(id, { bookmarked })}
           />
         </div>
       </div>
     );
   }
}

const mapStateToProps = (state) => ({
  loading: state.repo.loading,
  error: state.repo.error,
  items: state.repo.items,
});
const mapDispatchToProps = ({
  fetchRepos: repoActions.fetchRepos,
  updateRepo: repoActions.updateRepo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
