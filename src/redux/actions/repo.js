import axios from 'axios';

import { API_URL } from 'config';

import { repo } from '../types';

export const fetchReposRequest = () => ({
  type: repo.FETCH_REPOS_REQUEST,
});

export const fetchReposSuccess = (values) => ({
  type: repo.FETCH_REPOS_SUCCESS,
  payload: values,
});

export const fetchReposFail = () => ({
  type: repo.FETCH_REPOS_FAIL,
});

export const fetchRepos = () => (dispatch) => {
  dispatch(fetchReposRequest());

  return axios.get(`${API_URL}/repos`)
    .then((resp) => {
      dispatch(fetchReposSuccess(resp.data));
    })
    .catch(() => dispatch(fetchReposFail()));
}
