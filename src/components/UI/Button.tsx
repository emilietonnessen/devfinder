import { ReactNode } from 'react';

interface IButtonProps {
	children: ReactNode;
	onClick?: any;
	type: 'submit' | 'button';
	disabled: boolean;
	testid: string;
}

const Button = ({
	children,
	onClick,
	type = 'button',
	disabled,
	testid,
}: IButtonProps) => {
	return (
		<button
			disabled={disabled}
			type={type}
			onClick={onClick}
			className='button'
			data-testid={testid}
		>
			{children}
		</button>
	);
};

export default Button;
