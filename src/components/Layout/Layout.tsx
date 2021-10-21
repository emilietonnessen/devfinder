import { ReactNode } from 'react';
import Header from 'components/Layout/Header';
import Main from 'components/Layout/Main';

interface ILayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
	return (
		<div className='layout'>
			<Header />
			<Main>{children}</Main>
		</div>
	);
};

export default Layout;
