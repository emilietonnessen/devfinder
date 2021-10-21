/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import ThemeToggle from 'components/UI/ThemeToggle';

describe('<ThemeToggle />', () => {
	it('Should render Theme Toggle component', () => {
		const { getByTestId } = render(<ThemeToggle />);
		expect(getByTestId('theme-toggle-container')).toBeInTheDocument();
	});

	it('should render body with class "dark"', () => {
		render(<ThemeToggle />);
		const body = document.querySelector('body');
		expect(body).toHaveClass('dark');
	});

	it('should change class to "light" on body the element', () => {
		render(<ThemeToggle />);
		const body = document.querySelector('body');
		fireEvent.click(screen.getByTestId('theme-toggle-checkbox'));
		expect(body).toHaveClass('light');
	});
});
