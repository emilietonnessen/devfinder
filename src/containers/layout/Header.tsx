import SearchBar from 'containers/SearchBar';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className='header'>
      <Navigation />
      <SearchBar />
    </header>
  );
};

export default Header;
