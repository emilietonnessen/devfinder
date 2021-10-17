import { ReactComponent as Company } from 'assets/icons/icon-company.svg';
import { ReactComponent as Twitter } from 'assets/icons/icon-twitter.svg';
import { ReactComponent as Website } from 'assets/icons/icon-website.svg';
import { ReactComponent as Location } from 'assets/icons/icon-location.svg';

interface IUserMiscInfoProps {
  location: string;
  website: string;
  twitter: string;
  company: string;
}

const UserMiscInfo = ({
  location,
  website,
  twitter,
  company,
}: IUserMiscInfoProps) => {
  return (
    <ul className='user-misc__list'>
      <li className='user-misc__list-item'>
        <Location
          className={`user-misc__icon ${!location && 'user-misc__unavailable'}`}
        />
        {location || (
          <span className='user-misc__unavailable'>Not Available</span>
        )}
      </li>
      <li className='user-misc__list-item'>
        <Website
          className={`user-misc__icon ${!website && 'user-misc__unavailable'}`}
        />
        {(
          <a className='user-misc__link' href={website}>
            {website}
          </a>
        ) || <span className='user-misc__unavailable'>Not Available</span>}
      </li>
      <li className='user-misc__list-item'>
        <Twitter
          className={`user-misc__icon ${!twitter && 'user-misc__unavailable'}`}
        />
        {twitter || (
          <span className='user-misc__unavailable'>Not Available</span>
        )}
      </li>
      <li className='user-misc__list-item'>
        <Company
          className={`user-misc__icon ${!company && 'user-misc__unavailable'}`}
        />
        {company || (
          <span className='user-misc__unavailable'>Not Available</span>
        )}
      </li>
    </ul>
  );
};

export default UserMiscInfo;
