import { ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
  onClick?: any;
  type: 'submit' | 'button';
  disabled: boolean;
}

const Button = ({
  children,
  onClick,
  type = 'button',
  disabled,
}: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className='button'
    >
      {children}
    </button>
  );
};

export default Button;
