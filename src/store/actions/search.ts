import { ActionFunctionAny, Action } from 'redux-actions';
import axios from 'axios';
import {
  fetchGitHubUserFailed,
  fetchGitHubUserStart,
  fetchGitHubUserSuccess,
} from 'store/reducers/search';

export const fetchGitHubUser = (value: string) => {
  console.log('inside action');
  return (dispatch: ActionFunctionAny<Action<void>>) => {
    console.log('start');
    dispatch(fetchGitHubUserStart());

    axios
      .get(`https://api.github.com/users/${value}`)
      .then((response) => {
        console.log('success');
        dispatch(fetchGitHubUserSuccess(response.data));
      })
      .catch(() => {
        dispatch(fetchGitHubUserFailed());
      });
  };
};
