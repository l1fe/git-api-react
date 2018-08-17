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
      loading: true,
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

  if (action.type === repo.UPDATE_REPO_SUCCESS) {
    const item = action.payload;
    const idx = state.items.findIndex(({ id }) => id === item.id);
    const newItems = state.items.slice(0);
    newItems[idx] = item;
    return {
      ...state,
      items: newItems,
    };
  }

  return state;
}
