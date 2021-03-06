import { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { PATHS } from 'src/constants';
import { Main } from 'src/views';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={PATHS.root} component={Main} />

        <Redirect to={PATHS.root} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
