import { SET_ERROR } from './ActionTypes';

const initState = {};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ERROR: {
      return { ...state, [payload.key]: payload.message };
    }
    default:
      return state;
  }
};
