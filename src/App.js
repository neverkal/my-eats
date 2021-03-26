import React from 'react';
import { Route } from 'react-router-dom';
import Blog from './Blog';
import SignIn from './SignIn/SignIn';

export default function App() {
  return (
    <>
      <Route component={Blog} path="/" exact />
      <Route component={SignIn} path="/sign-in" />
    </>
  );
}
