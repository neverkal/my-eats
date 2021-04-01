import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Blog from './Blog';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

export default function App() {
  return (
    <Switch>
      <Route component={Blog} path="/" />
      <Route component={SignIn} path="/sign-in" />
      <Route component={SignUp} path="/sign-up" />
    </Switch>
  );
}
