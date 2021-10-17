interface IUserHeaderProps {
  name: string;
  tagname: string;
  joined: string;
  image: string;
}

const UserHeader = ({ name, tagname, joined, image }: IUserHeaderProps) => {
  const dateJoined = new Date(joined).toLocaleDateString('en-uk', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <header className='user-header'>
      <div className='user-header__image-container'>
        <img className='user-header__image' src={image} alt={name} />
      </div>
      <div className='user-header__text-container'>
        <h1 className='h1'>{name}</h1>
        <h3 className='h3'>@{tagname}</h3>
        <p className='user-header__joined'>Joined {dateJoined}</p>
      </div>
    </header>
  );
};

export default UserHeader;