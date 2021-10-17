import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  loading: boolean;
  error: boolean;
  user: IUser | null;
}

interface IUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

const initialState: IInitialState = {
  loading: false,
  error: false,
  user: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    fetchGitHubUserStart: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    fetchGitHubUserSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: false,
        user: action.payload,
      };
    },
    fetchGitHubUserFailed: (state) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
  },
});

export const {
  fetchGitHubUserStart,
  fetchGitHubUserSuccess,
  fetchGitHubUserFailed,
} = searchSlice.actions;

export default searchSlice.reducer;
