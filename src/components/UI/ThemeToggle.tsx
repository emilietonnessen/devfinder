import { useEffect, useState } from 'react';
import { ReactComponent as Sun } from 'assets/icons/icon-sun.svg';
import { ReactComponent as Moon } from 'assets/icons/icon-moon.svg';

const ThemeToggle = () => {
	const [checked, setChecked] = useState(false);
	const body = document.querySelector('body');
	const localStorageTheme = localStorage.getItem('theme');
	const isPreferredThemeDark =
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches;
	const isPreferredThemeLight =
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: light)').matches;

	useEffect(() => {
		if (isPreferredThemeDark && !localStorageTheme) {
			setTheme('dark');
		} else if (isPreferredThemeLight && !localStorageTheme) {
			setTheme('light');
		} else if (localStorageTheme === 'light') {
			setTheme('light');
		} else if (localStorageTheme === 'dark') {
			setTheme('dark');
		} else {
			setTheme('dark');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const setTheme = (theme: string) => {
		body?.classList.add(theme);
		body?.classList.remove(theme === 'dark' ? 'light' : 'dark');
		localStorage.setItem('theme', theme);
		setChecked(theme === 'dark' ? true : false);
	};

	const onClickHandler = () => {
		if (body?.classList.contains('light')) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	return (
		<button
			onKeyDown={(event) =>
				event.code.toLowerCase() === 'enter' && onClickHandler()
			}
			className='theme-toggle__button'
			data-testid='theme-toggle-container'
		>
			<label className='theme-toggle' htmlFor='theme-toggle'>
				<input
					type='checkbox'
					className='theme-toggle__checkbox'
					name='theme-toggle'
					id='theme-toggle'
					checked={checked}
					onChange={onClickHandler}
					data-testid='theme-toggle-checkbox'
				/>
				<span className='theme-toggle__label'>
					{checked ? 'light' : 'dark'}
				</span>
				<span className='theme-toggle__icon'>
					{checked ? <Sun /> : <Moon />}
				</span>
			</label>
		</button>
	);
};

export default ThemeToggle;
