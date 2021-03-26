import React from 'react';
import { Route } from 'react-router-dom';
import Blog from './Blog';
import Login from './Login';

export default function App() {
  return (
    <>
      <Route component={Blog} path="/" exact />
      <Route component={Login} path="/login" />
    </>
  );
}
