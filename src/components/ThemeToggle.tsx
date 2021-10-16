import { useEffect, useState } from 'react';
import { ReactComponent as Sun } from 'assets/icons/icon-sun.svg';
import { ReactComponent as Moon } from 'assets/icons/icon-moon.svg';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>('');
  const body = document.querySelector('body');
  const localTheme = localStorage.getItem('theme');

  useEffect(() => {
    if (!localTheme) {
      localStorage.setItem('theme', 'dark');
      body?.classList.add('dark');
      setTheme('dark');
    } else if (localTheme === 'light') {
      toggleMode('light');
    } else if (localTheme === 'dark') {
      toggleMode('dark');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMode = (mode: string) => {
    body?.classList.add(mode);
    body?.classList.remove(mode === 'dark' ? 'light' : 'dark');
    setTheme(mode);
    localStorage.setItem('theme', mode);
  };

  const onClickHandler = () => {
    if (body?.classList.contains('light')) {
      toggleMode('dark');
    } else {
      toggleMode('light');
    }
  };

  return (
    <label className='theme-toggle' htmlFor='theme-toggle'>
      <input
        type='checkbox'
        className='theme-toggle__checkbox'
        name='theme-toggle'
        id='theme-toggle'
        onClick={onClickHandler}
      />
      <span className='theme-toggle__label'>
        {theme !== 'dark' ? 'dark' : 'light'}
      </span>
      <span className='theme-toggle__icon'>
        {theme !== 'dark' ? <Moon /> : <Sun />}
      </span>
    </label>
  );
};

export default ThemeToggle;
