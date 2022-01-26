import { FC } from 'react';

import { Layout } from './layouts';
import { Router } from './router';

const App: FC = () => {
  return (
    <Layout>
      <Router />
    </Layout>
  );
};

export default App;
