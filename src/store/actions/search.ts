import { ActionFunctionAny, Action } from 'redux-actions';
import axios from 'axios';
import {
  fetchGitHubUserFailed,
  fetchGitHubUserStart,
  fetchGitHubUserSuccess,
} from 'store/reducers/search';

export const fetchGitHubUser = (value: string) => {
  return (dispatch: ActionFunctionAny<Action<void>>) => {
    dispatch(fetchGitHubUserStart());

    axios
      .get(`https://api.github.com/users/${value}`)
      .then((response) => {
        dispatch(fetchGitHubUserSuccess(response.data));
      })
      .catch(() => {
        dispatch(fetchGitHubUserFailed());
      });
  };
};
