import { SET_DONASI, SET_DONASI_DETAIL } from './ActionTypes';

const initState = {
  list: [],
  detail: null,
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DONASI: {
      return {
        ...state,
        list: payload,
      };
    }
    case SET_DONASI_DETAIL: {
      return {
        ...state,
        detail: payload,
      };
    }
    default:
      return state;
  }
};
