import { SET_LOADING } from './ActionTypes';

const initState = {};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING: {
      return { ...state, [payload.key]: payload.value };
    }
    default:
      return state;
  }
};
