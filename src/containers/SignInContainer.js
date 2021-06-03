import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput } from '../modules/signin';
import SignIn from '../components/SignIn/SignIn';

const SignInContainer = () => {
  const { email, password } = useSelector(({ signin }) => ({
    email: signin.email,
    password: signin.password,
  }));
  const dispatch = useDispatch();
  const onChangeInput = useCallback((key, value) => dispatch(changeInput(key, value)), [dispatch]);

  return <SignIn email={email} password={password} onChangeInput={onChangeInput} />;
};

export default React.memo(SignInContainer);
