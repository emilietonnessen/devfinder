import { ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <button onClick={onClick} className='button'>
      {children}
    </button>
  );
};

export default Button;
