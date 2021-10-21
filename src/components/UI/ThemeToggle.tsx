import { useEffect, useState } from 'react';
import { ReactComponent as Sun } from 'assets/icons/icon-sun.svg';
import { ReactComponent as Moon } from 'assets/icons/icon-moon.svg';

const ThemeToggle = () => {
	const [theme, setTheme] = useState<string | null>('');
	const [checked, setChecked] = useState<boolean>(false);
	const body = document.querySelector('body');
	const localTheme = localStorage.getItem('theme');

	useEffect(() => {
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches &&
			!localTheme
		) {
			localStorage.setItem('theme', 'dark');
			body?.classList.add('dark');
			setTheme('dark');
			setChecked(false);
		} else if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: light)').matches &&
			!localTheme
		) {
			localStorage.setItem('theme', 'light');
			body?.classList.add('light');
			setTheme('light');
			setChecked(false);
		} else if (!localTheme) {
			localStorage.setItem('theme', 'dark');
			body?.classList.add('dark');
			setTheme('dark');
			setChecked(false);
		} else if (localTheme === 'light') {
			toggleMode('light');
			setChecked(true);
		} else if (localTheme === 'dark') {
			toggleMode('dark');
			setChecked(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const toggleMode = (mode: string) => {
		body?.classList.add(mode);
		body?.classList.remove(mode === 'dark' ? 'light' : 'dark');
		setTheme(mode);
		localStorage.setItem('theme', mode);
		setChecked(mode === 'dark' ? true : false);
	};

	const onClickHandler = () => {
		if (body?.classList.contains('light')) {
			toggleMode('dark');
		} else {
			toggleMode('light');
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
					{theme !== 'dark' ? 'dark' : 'light'}
				</span>
				<span className='theme-toggle__icon'>
					{theme !== 'dark' ? <Moon /> : <Sun />}
				</span>
			</label>
		</button>
	);
};

export default ThemeToggle;
