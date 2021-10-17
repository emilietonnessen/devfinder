import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  loading: boolean;
  error: boolean;
  user: IUser | null;
}

interface IUser {
  avatar_url: string;
  bio: string | null;
  blog: string;
  company: string;
  created_at: string;
  email: string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: string;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string;
  type: string;
  updated_at: string;
  url: string;
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
