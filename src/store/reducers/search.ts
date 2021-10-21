import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
	loading: boolean;
	error: boolean;
	user: IUser;
}

interface IUser {
	avatar_url: string;
	name: string;
	login: string;
	created_at: string;
	bio: string;
	public_repos: number;
	followers: number;
	following: number;
	location: string;
	blog: string;
	twitter_username: string;
	company: string;
}

const initialState: IInitialState = {
	loading: false,
	error: false,
	user: {
		avatar_url: '',
		name: '',
		login: '',
		created_at: '',
		bio: '',
		public_repos: 0,
		followers: 0,
		following: 0,
		location: '',
		blog: '',
		twitter_username: '',
		company: '',
	},
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
