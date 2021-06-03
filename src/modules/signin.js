import { createAction, handleActions } from 'redux-actions';

const SIGNIN_USER = 'signin/INSERT_USER';
const CHANGE_INPUT = 'signin/CHANGE_INPUT';

export const changeInput = createAction(CHANGE_INPUT, (key, value) => ({ key, value }));

const initialSignInUser = {
  email: '',
  password: '',
  remember: false,
};

const signin = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
  },
  initialSignInUser,
);

export default signin;
