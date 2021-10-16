import Button from 'components/UI/Button';
import { ReactComponent as MagnifyingGlass } from 'assets/icons/icon-search.svg';

const SearchBar = () => {
  const error = false;

  return (
    <div className='search-bar'>
      <MagnifyingGlass className='search-bar__icon' />
      <input
        className='search-bar__input'
        type='text'
        placeholder='Search GitHub username...'
      />
      <div className='search-bar__button-container'>
        {error && <span className='search-bar__error'>No results</span>}
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default SearchBar;
