import { SET_UPLOAD_RESULT } from './ActionTypes';

const initState = {};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_UPLOAD_RESULT: {
      return { ...state, uploadResult: payload };
    }
    default:
      return state;
  }
};
