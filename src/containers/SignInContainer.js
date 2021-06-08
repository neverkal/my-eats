import React, { useCallback } from 'react';
import { useDispatch, connect } from 'react-redux';
import { changeInput, signInUser } from '../modules/signin';
import SignIn from '../components/SignIn/SignIn';

const SignInContainer = ({ email, password, remember, loadingUser, signInUser }) => {
  const dispatch = useDispatch();
  const onChangeInput = useCallback((key, value) => dispatch(changeInput(key, value)), [dispatch]);

  return (
    <SignIn
      email={email}
      password={password}
      remember={remember}
      onChangeInput={onChangeInput}
      onSignIn={signInUser}
      loadingUser={loadingUser}
    />
  );
};

export default connect(
  ({ signin, loading }) => ({
    email: signin.email,
    password: signin.password,
    remember: signin.remember,
    loadingUser: loading['signin/GET_USER'],
  }),
  {
    signInUser,
  },
)(SignInContainer);
