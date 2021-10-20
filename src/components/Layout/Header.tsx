import SearchBar from 'components/Search/SearchBar';
import Navigation from 'components/Layout/Navigation';

const Header = () => {
	return (
		<header className='header'>
			<Navigation />
			<SearchBar />
		</header>
	);
};

export default Header;
