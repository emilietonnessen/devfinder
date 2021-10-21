import { ReactComponent as Company } from 'assets/icons/icon-company.svg';
import { ReactComponent as Twitter } from 'assets/icons/icon-twitter.svg';
import { ReactComponent as Website } from 'assets/icons/icon-website.svg';
import { ReactComponent as Location } from 'assets/icons/icon-location.svg';

interface IUserMiscInfoProps {
	company: string;
	location: string;
	twitter: string;
	website: string;
}

const UserMiscInfo = ({
	company,
	location,
	twitter,
	website,
}: IUserMiscInfoProps) => {
	return (
		<ul className='user-misc user-misc__list'>
			<li className='user-misc__list-item'>
				<Location
					className={`user-misc__icon ${!location && 'user-misc__unavailable'}`}
				/>
				{location ? (
					location
				) : (
					<span className='user-misc__unavailable'>Not Available</span>
				)}
			</li>
			<li className='user-misc__list-item'>
				<Website
					className={`user-misc__icon ${!website && 'user-misc__unavailable'}`}
				/>
				{website ? (
					<a className='user-misc__link' href={website}>
						{website}
					</a>
				) : (
					<span className='user-misc__unavailable'>Not Available</span>
				)}
			</li>
			<li className='user-misc__list-item'>
				<Twitter
					className={`user-misc__icon ${!twitter && 'user-misc__unavailable'}`}
				/>
				{twitter ? (
					<a className='user-misc__link' href={`www.twitter.com/${twitter}`}>
						{twitter}
					</a>
				) : (
					<span className='user-misc__unavailable'>Not Available</span>
				)}
			</li>
			<li className='user-misc__list-item'>
				<Company
					className={`user-misc__icon ${!company && 'user-misc__unavailable'}`}
				/>
				{company ? (
					<a
						className='user-misc__link'
						href={`https://github.com/${company.replace('@', '')}`}
					>
						{company}
					</a>
				) : (
					<span className='user-misc__unavailable'>Not Available</span>
				)}
			</li>
		</ul>
	);
};

export default UserMiscInfo;
