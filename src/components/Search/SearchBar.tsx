import Button from 'components/UI/Button';
import { ReactComponent as MagnifyingGlass } from 'assets/icons/icon-search.svg';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGitHubUser } from 'store/actions/search';
import { RootState } from 'store/store';

const SearchBar = () => {
  const [value, setValue] = useState<string>('');
  const { loading, error } = useSelector((state: RootState) => state?.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGitHubUser('octocat'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form className='search-bar'>
      <MagnifyingGlass className='search-bar__icon' />
      <input
        className='search-bar__input'
        type='text'
        placeholder='Search GitHub username...'
        onChange={(event: FormEvent<HTMLInputElement>) =>
          setValue(event.currentTarget.value)
        }
        value={value}
      />
      <div className='search-bar__button-container'>
        {error && <span className='search-bar__error'>No results</span>}
        <Button
          disabled={loading}
          type='button'
          onClick={() => dispatch(fetchGitHubUser(value))}
        >
          {loading ? 'loading..' : 'Search'}
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
