import { combineReducers } from 'redux';
import signin from './signin';
import loading from './loading';

const rootReducer = combineReducers({
  signin,
  loading,
});

export default rootReducer;
