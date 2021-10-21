import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import UserHeader from 'components/User/UserHeader';
import UserMiscInfo from 'components/User/UserMiscInfo';
import UserScore from 'components/User/UserScore';

const User = () => {
	const {
		avatar_url,
		name,
		login,
		created_at,
		bio,
		public_repos,
		followers,
		following,
		location,
		blog,
		twitter_username,
		company,
	} = useSelector((state: RootState) => state.search.user);

	const { user } = useSelector((state: any) => state.search);
	console.log(user);

	return (
		<section className='user' aria-live='polite' data-testid='user-container'>
			<div className='user__image-container'>
				<img className='user__image' src={avatar_url} alt={name} />
			</div>
			<UserHeader
				image={avatar_url}
				name={name}
				tagname={login}
				joined={created_at}
			/>
			{
				<p
					className={`user__description ${
						!bio ? 'user__description--error' : ''
					}`}
				>
					{bio ? bio : 'This profile has no bio'}
				</p>
			}
			<UserScore
				repos={public_repos}
				followers={followers}
				following={following}
			/>
			<UserMiscInfo
				location={location}
				website={blog}
				twitter={twitter_username}
				company={company}
			/>
		</section>
	);
};

export default User;
