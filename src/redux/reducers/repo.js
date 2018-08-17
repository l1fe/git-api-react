import { repo } from '../types';

const initialState = {
  loading: false,
  error: false,
  items: [],
};

export default (state = initialState, action) => {
  if (action.type === repo.FETCH_REPOS_REQUEST) {
    return {
      ...state,
      loading: false,
      error: false,
    };
  }

  if (action.type === repo.FETCH_REPOS_SUCCESS) {
    const items = action.payload;
    return {
      ...state,
      loading: false,
      error: false,
      items,
    };
  }

  if (action.type === repo.FETCH_REPOS_FAIL) {
    return {
      ...state,
      loading: false,
      error: true,
    };
  }

  return state;
}
