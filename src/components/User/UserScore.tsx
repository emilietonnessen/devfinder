interface IUserScoreProps {
  repos: number;
  followers: number;
  following: number;
}

const UserScore = ({ followers, following, repos }: IUserScoreProps) => {
  return (
    <div className='user-score'>
      <p className='user-score__container'>
        <span className='user-score__value'>Repos</span>
        <span className='user-score__key'>{repos}</span>
      </p>
      <p className='user-score__container'>
        <span className='user-score__value'>Followers</span>
        <span className='user-score__key'>{followers}</span>
      </p>
      <p className='user-score__container'>
        <span className='user-score__value'>Following</span>
        <span className='user-score__key'>{following}</span>
      </p>
    </div>
  );
};

export default UserScore;
