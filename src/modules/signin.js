import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_USER = 'signin/GET_USER';
const GET_USER_SUCCESS = 'signin/GET_USER_SUCCESS';
const GET_USER_FAILURE = 'signin/GET_USER_FAILURE';

const CHANGE_INPUT = 'signin/CHANGE_INPUT';

export const changeInput = createAction(CHANGE_INPUT, (key, value) => ({ key, value }));
export const signInUser = createRequestThunk(GET_USER, api.getPost);

const initialSignInUser = {
  email: '',
  password: '',
  remember: false,
  loading: {
    GET_USER: false,
  },
};

const signin = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [GET_USER]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USER: true,
      },
    }),
    [GET_USER_SUCCESS]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USER: false,
      },
    }),
    [GET_USER_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USER: false,
      },
    }),
  },
  initialSignInUser,
);

export default signin;
