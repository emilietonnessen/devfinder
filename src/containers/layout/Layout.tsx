import { ReactNode } from 'react';
import Header from 'containers/layout/Header';
import Main from 'containers/layout/Main';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const mode = 'dark';

  return (
    <div className={`layout layout--${mode}`}>
      <Header />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
