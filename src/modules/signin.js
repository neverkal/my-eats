import { createAction, handleActions } from 'redux-actions';

const SIGNIN_USER = 'signin/INSERT_USER';

export const signInUser = createAction(SIGNIN_USER);

const initialSignInUser = {
  userID: '',
  userPassWord: '',
};

const signIn = handleActions(
  {
    [SIGNIN_USER]: (state, action) => ({
      ...state,
      action.payload
    }),
  }
, initialSignInUser);
