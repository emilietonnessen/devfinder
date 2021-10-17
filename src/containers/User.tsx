import UserHeader from 'components/User/UserHeader';
import UserMiscInfo from 'components/User/UserMiscInfo';
import UserScore from 'components/User/UserScore';
import { useSelector } from 'react-redux';

const User = () => {
  const { user } = useSelector((state: any) => state.search);

  return (
    <section className='user'>
      <UserHeader
        image={user?.avatar_url}
        name={user?.name}
        tagname={user?.login}
        joined={user?.created_at}
      />
      {user?.bio && <p className='user__description'>{user?.bio}</p>}
      <UserScore
        repos={user?.public_repos}
        followers={user?.followers}
        following={user?.following}
      />
      <UserMiscInfo
        location={user?.location}
        website={user?.blog}
        twitter={user?.twitter_username}
        company={user?.company}
      />
    </section>
  );
};

export default User;
