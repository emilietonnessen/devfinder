/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render as rtlRender, fireEvent } from '@testing-library/react';
import SearchBar from 'components/Search/SearchBar';
import store from 'store/store';
import * as redux from 'react-redux';

const spyUseSelector = jest.spyOn(redux, 'useSelector');
spyUseSelector.mockReturnValue({
	loading: false,
	error: false,
});

const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
const mockDispatchFn = jest.fn();
useDispatchSpy.mockReturnValue(mockDispatchFn);

const render = (component: any) =>
	rtlRender(<redux.Provider store={store}>{component}</redux.Provider>);

describe('<SearchBar />', () => {
	it('Should render Theme Toggle component', () => {
		const { getByTestId } = render(<SearchBar />);
		expect(getByTestId('search-bar-container')).toBeInTheDocument();
	});

	it('should change value', () => {
		const { getByTestId } = render(<SearchBar />);
		const searchInput = getByTestId('search-bar-input');
		fireEvent.change(searchInput, { target: { value: 'octocat' } });
		expect(searchInput).toHaveValue('octocat');
	});
});
