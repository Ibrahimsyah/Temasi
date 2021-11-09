import { SET_UPLOAD_RESULT, UPLOAD_IMAGE } from './ActionTypes';

export const uploadImage = payload => {
  return {
    type: UPLOAD_IMAGE,
    payload,
  };
};

export const setUploadResult = payload => {
  return {
    type: SET_UPLOAD_RESULT,
    payload,
  };
};
