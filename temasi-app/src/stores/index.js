import { combineReducers } from 'redux';
import AccountReducer from './account.reducer';
import LoadingReducer from './loading.reducer';

export default combineReducers({
  account: AccountReducer,
  loading: LoadingReducer,
});
