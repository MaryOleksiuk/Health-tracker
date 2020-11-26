import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// Routes
import { healthAppRoutes } from './healthAppRoutes';

// Components
import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Registration } from '../pages/registration';
import { Profile } from '../pages/profile';
import { Breakfast } from '../pages/breakfast';
import { Lunch } from '../pages/lunch';
import { Dinner } from '../pages/dinner';
import { Fruits } from '../pages/fruits';
import { Vegetables } from '../pages/vegetables';
import { Junk } from '../pages/junk';
import { Coffee } from '../pages/coffee';

import { PrivateRoute } from '../components/privateRoute';
import { Steps } from '../pages/steps';
import { Sleep } from '../pages/sleep';
import { Water } from '../pages/water';


export const Routes = () => (
  <>
    <Switch>
      <PrivateRoute exact path={ healthAppRoutes.profile }>
        <Profile />
      </PrivateRoute>

      <PrivateRoute exact path={ healthAppRoutes.root }>
        <Home />
      </PrivateRoute>

      <PrivateRoute exact path={ healthAppRoutes.breakfast }>
        <Breakfast />
      </PrivateRoute>

      <PrivateRoute exact path={ healthAppRoutes.lunch }>
        <Lunch />
      </PrivateRoute>

      <PrivateRoute exact path={ healthAppRoutes.dinner }>
        <Dinner />
      </PrivateRoute>

      <PrivateRoute exact path={ healthAppRoutes.fruits }>
        <Fruits />
      </PrivateRoute>

      <PrivateRoute exact path={ healthAppRoutes.vegetables }>
        <Vegetables />
      </PrivateRoute>

      <PrivateRoute exact path={ healthAppRoutes.junk }>
        <Junk />
      </PrivateRoute>

      <PrivateRoute exact path={ healthAppRoutes.steps }>
        <Steps />
      </PrivateRoute>

      <PrivateRoute exact path={ healthAppRoutes.sleep }>
        <Sleep />
      </PrivateRoute>

      <PrivateRoute exact path={ healthAppRoutes.water }>
        <Water />
      </PrivateRoute>

      <PrivateRoute exact path={ healthAppRoutes.coffee }>
        <Coffee />
      </PrivateRoute>

      <Route exact path={ healthAppRoutes.login }>
        <Login />
      </Route>
      <Route exact path={ healthAppRoutes.registration }>
        <Registration />
      </Route>

      <Redirect to={ healthAppRoutes.login } />
    </Switch>
  </>
);
