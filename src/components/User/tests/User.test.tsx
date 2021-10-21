/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import User from 'components/User/User';
import * as redux from 'react-redux';

const spy = jest.spyOn(redux, 'useSelector');
spy.mockReturnValue({
	loading: false,
	error: false,
	user: {
		avatar_url: 'test',
		name: 'test',
		login: 'test',
		created_at: 'test',
		bio: 'test',
		public_repos: 0,
		followers: 0,
		following: 0,
		location: 'test',
		blog: 'test',
		twitter_username: 'test',
		company: 'test',
	},
});

describe('<User />', () => {
	it('Should render the <User /> component', () => {
		const { getByTestId } = render(<User />);
		expect(getByTestId('user-container')).toBeInTheDocument();
	});
});
