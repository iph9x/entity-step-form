import { FC, ReactNode } from 'react';

import { Header } from 'src/components';

import styles from './Layout.module.scss';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className={styles.layout}>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
