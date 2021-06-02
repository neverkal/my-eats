import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

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
      <Route render={() => <div>페이지가 존재하지 않습니다.</div>} />
    </Switch>
  );
}
