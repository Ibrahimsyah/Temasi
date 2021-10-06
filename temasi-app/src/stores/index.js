import { combineReducers } from 'redux';
import AccountReducer from './account.reducer';

export default combineReducers({
  account: AccountReducer,
});
