import axios from 'axios';
import debounce from 'lodash/debounce';

import { API_URL, DEBOUNCE_API_WAIT_MS } from 'config';

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

const debouncedApiCall = debounce((params, dispatch) => {
  axios.get(`${API_URL}/repos`, { params })
    .then(resp => dispatch(fetchReposSuccess(resp.data)))
    .catch(() => dispatch(fetchReposFail()));
}, DEBOUNCE_API_WAIT_MS, { leading: false });

export const fetchRepos = (params = { }) => (dispatch) => {
  dispatch(fetchReposRequest());

  // remove name for empty value
  if (!params.name) {
    delete params.name;
  }

  return debouncedApiCall(params, dispatch);
};
