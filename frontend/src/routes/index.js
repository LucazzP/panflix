import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/main';
import Browse from '../pages/browse';
import Movie from '../pages/movie';
import Login from '../pages/login';
import Register from '../pages/register';
import Admin from '../pages/admin';
import AddMovie from '../pages/admin/addMovie';
import EditMovie from '../pages/admin/editMovie';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />

      <Route path="/browse" exact component={Browse} isPrivate />
      <Route path="/movie" exact component={Movie} isPrivate />
      <Route path="/movie/:id" exact component={Movie} isPrivate />

      <Route path="/admin" exact component={Admin} isAdmin />
      <Route path="/admin/addmovie" exact component={AddMovie} isAdmin />
      <Route path="/admin/editmovie/:id" exact component={EditMovie} isAdmin />
    </Switch>
  );
};

export default Routes;
