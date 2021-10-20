import { ReactNode } from 'react';

interface IMainProps {
  children: ReactNode;
}

const Main = ({ children }: IMainProps) => {
  return <main className='main'>{children}</main>;
};

export default Main;
