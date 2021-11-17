import storage from '../provider/storage';
import { ADD_ACCOUNT, DELETE_ACCOUNT, SET_POSITION } from './ActionTypes';
import { ACCOUNT_STORAGE_KEY } from '../config/storage';

const initState = {
  userId: null,
  fullName: '',
  token: null,
  position: null,
};

export default (state = initState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_ACCOUNT: {
      storage.setData(ACCOUNT_STORAGE_KEY, payload);
      return { ...state, ...payload };
    }
    case DELETE_ACCOUNT: {
      storage.removeData(ACCOUNT_STORAGE_KEY);
      return initState;
    }
    case SET_POSITION: {
      return {
        ...state,
        position: payload,
      };
    }
    default: {
      return state;
    }
  }
};
