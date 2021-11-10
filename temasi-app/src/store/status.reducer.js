import { CLEAR_STATUS, SET_STATUS } from './ActionTypes';

const initState = {};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_STATUS: {
      return { ...state, [payload.key]: payload.value };
    }
    case CLEAR_STATUS: {
      return { ...state, [payload.key]: null };
    }
    default:
      return state;
  }
};
