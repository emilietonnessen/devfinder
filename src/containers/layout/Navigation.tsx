import ThemeToggle from 'components/ThemeToggle';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='logo'>devfinder</div>
      <ThemeToggle />
    </nav>
  );
};

export default Navigation;
