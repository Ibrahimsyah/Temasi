import { SET_DONASI, SET_DONASI_DETAIL } from './ActionTypes';

const initState = {
  donasi: [],
  donasiDetail: null,
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DONASI: {
      return {
        ...state,
        donasi: payload,
      };
    }
    case SET_DONASI_DETAIL: {
      return {
        ...state,
        donasiDetail: payload,
      };
    }
    default:
      return state;
  }
};
