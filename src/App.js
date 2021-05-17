import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Blog from './Blog';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

export default function App() {
  return (
    <Switch>
      <Route
        path="/"
        render={() => {
          return <Blog />;
        }}
        exact
      />
      <Route
        path="/blog"
        render={() => {
          return <Blog />;
        }}
      />
      <Route
        path="/sign-in"
        render={() => {
          return <SignIn />;
        }}
      />
      <Route
        path="/sign-up"
        render={() => {
          return <SignUp />;
        }}
      />
    </Switch>
  );
}
