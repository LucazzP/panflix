import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/main';
import Browse from '../pages/browse';
import Login from '../pages/login';
import Register from '../pages/register';
// import Admin from '../pages/admin';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />

      <Route path="/browse" exact component={Browse} isPrivate />

      {/* <Route path="/admin" exact component={Admin} isAdmin /> */}
    </Switch>
  );
};

export default Routes;
